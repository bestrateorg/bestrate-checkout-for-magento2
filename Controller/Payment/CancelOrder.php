<?php

namespace BestRate\Payment\Controller\Payment;

use Magento\Checkout\Model\Session;
use Magento\Framework\App\Action\Action;

class CancelOrder extends Action
{

    /**
     * @return Session
     */
    protected function _getCheckout()
    {
        return $this->_objectManager->get('Magento\Checkout\Model\Session');
    }

    public function execute()
    {
        if ($this->_getCheckout()->getLastRealOrderId()) {
            $order = $this->_getCheckout()->getLastRealOrder();
            if ($order->getId() && ! $order->isCanceled()) {
                $order->registerCancellation('Canceled by Customer')->save();
            }

            $this->_getCheckout()->restoreQuote();
            $this->_redirect('checkout/cart');
        }
    }
}
