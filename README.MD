# BestRate Crypto Payment Gateway for Magento 2

Accept Bitcoin, Bitcoin Cash, Litecoin, Ethereum, and other CryptoCurrencies via BestRate on your Magento store.

## Description

[BestRate](https://bestrate.org/) is an all-in-one global solution for CryptoCurrency Payments.

We strive to make Digital Payments Simple, Secure and Quick, improving financial access through innovative technology developed in-house.

BestRate allows any business to securely and cost-effectively Send, Receive, Store, Exchange and Accept CryptoCurrency Payments online.

We deliver Fast, Simple and Efficient financial services technology that unlocks access to CryptoCurrency Markets.

### Our Fees

We are proud to provide one of the best CryptoCurrency Payment Solution with no commission from BestRate.

### Available CryptoCurrencies

Bitcoin, Bitcoin Cash, Ethereum, DASH, Litecoin, Monero, NEO, NEM, Ripple, B2BX and any ERC20, NEO tokens, TRON, Cardano and others in one place!

## Installation

If you don’t already have one, create a [BestRate](https://bestrate.org/) account.

1. Add extention to your Magento 2 Store:

    a. Update the `composer.json` file in the root directory of your Magento store and wait for Composer to finish updating the dependencies.
    ```
    composer require bestrate/magento2
    ```
    b. Manual copy all files from repository to directory
    ```
    <magento2_root>/app/code/BestRate/Payment/
    ```
2. Enable the extension and clear the static view files.
    ```
    bin/magento module:enable BestRate_Payment --clear-static-content
    ```
3. Register the extension and initiate the database migrations.
    ```
    bin/magento setup:upgrade
    ```
4. Recompile the Magento project. 
    ```
    bin/magento setup:di:compile
    ```
5. Clear the Magento store’s cache.
    ```
    bin/magento cache:flush
    ```

### Configuration

1. Navigate to `Stores → Configuration → Sales → Payment Methods → Crypto Payment via BestRate` in your Magento backend.
2. Enter the Public and Secret tokens.
3. Save config. The setup is now finished. You should see the payment methods in your checkout.
