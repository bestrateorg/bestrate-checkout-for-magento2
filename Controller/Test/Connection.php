<?php

namespace BestRate\Payment\Controller\Test;

use Magento\Framework\App\Action\Action;
use Magento\Framework\App\Action\Context;

class Connection extends Action
{
    public function __construct(
        Context $context
    ) {
        return parent::__construct($context);
    }

    public function execute()
    {
        $this->getResponse()->setBody(
            json_encode(
                [
                    'status' => true,
                ]
            )
        );
        return;
    }
}
