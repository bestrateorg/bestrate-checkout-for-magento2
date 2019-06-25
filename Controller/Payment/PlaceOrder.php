<?php

namespace BestRate\Payment\Controller\Payment;

use BestRate\Payment\Gateway\Bestrate\Bestrate;
use BestRate\Payment\Model\Payment as BestRatePayment;
use Magento\Checkout\Model\Session;
use Magento\Framework\App\Action\Action;
use Magento\Framework\App\Action\Context;
use Magento\Framework\App\Config\ScopeConfigInterface;
use Magento\Framework\Event\ManagerInterface;
use Magento\Quote\Api\CartRepositoryInterface;
use Magento\Sales\Model\Order;
use Magento\Sales\Model\OrderFactory;

class PlaceOrder extends Action
{
    protected $orderFactory;
    protected $bestratePayment;
    protected $checkoutSession;
    protected $scopeConfig;

    /**
     * @var ManagerInterface
     */
    protected $_eventManager;

    /**
     * @var CartRepositoryInterface
     */
    protected $quoteRepository;

    /**
     * @param Context $context
     * @param OrderFactory $orderFactory
     * @param Session $checkoutSession
     * @param BestRatePayment $bestratePayment
     */
    public function __construct(
        ManagerInterface $eventManager,
        CartRepositoryInterface $quoteRepository,
        Context $context,
        OrderFactory $orderFactory,
        Session $checkoutSession,
        BestRatePayment $bestratePayment,
        ScopeConfigInterface $scopeConfig
//				StoreManagerInterface $storeManager
    ) {
        parent::__construct($context);
        $this->quoteRepository = $quoteRepository;
        $this->_eventManager = $eventManager;
        $this->orderFactory = $orderFactory;
        $this->bestratePayment = $bestratePayment;
        $this->checkoutSession = $checkoutSession;
        $this->scopeConfig = $scopeConfig;
//        $this->_storeManager = $storeManager;
    }

    /**
     * @return Session
     */
    protected function _getCheckout()
    {
        return $this->_objectManager->get('Magento\Checkout\Model\Session');
    }

    /**
     * @param string $id
     * @return Order
     */
    public function getOrder(string $id)
    {
        return $this->orderFactory->create()->load($id);
    }

    public function execute()
    {
        if (empty($_POST) || empty($_POST['quote_id'])) {
            $this->getResponse()->setBody(
                json_encode(
                    [
                        'status' => false,
                        'reason' => 'Order Not Found',
                    ]
                )
            );
            return;
        }
        $id = $_POST['quote_id'];

        $order = $this->getOrder($id);

        if (!$order->getIncrementId()) {
            $this->getResponse()->setBody(
                json_encode(
                    [
                        'status' => false,
                        'reason' => 'Order Not Found',
                    ]
                )
            );
            return;
        }

        $quote = $this->quoteRepository->get($order->getQuoteId());
        $quote->setIsActive(1);
        $this->quoteRepository->save($quote);

        $params = $this->bestratePayment->getBestRateRequest($order);
        try {
            $redirect_url = Bestrate::createOrder($params);

            $quote = $this->quoteRepository->get($order->getQuoteId());
            $quote->setIsActive(1);
            $this->quoteRepository->save($quote);

            $this->getResponse()->setBody(
                json_encode(
                    [
                        'status' => true,
                        'redirect_url' => $redirect_url
                    ]
                )
            );
        } catch (\Exception $e) {
            $body = json_encode(
                [
                    'status' => false,
                    'reason' => $e->getMessage(),
                    'code' => $e->getCode()
                ]
            );
            $this->getResponse()->setBody($body);
        }
    }
}
