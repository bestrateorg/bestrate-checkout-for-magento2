<?php

namespace BestRate\Payment\Controller\Payment;

use Magento\Checkout\Model\Session;
use Magento\Framework\App\Action\Action;

class ReturnAction extends Action
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
            $this->_redirect('checkout/onepage/success');
        }
    }
}
