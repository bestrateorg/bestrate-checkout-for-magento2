/*browser:true*/
/*global define*/
define(
  [
    'jquery',
    'Magento_Checkout/js/view/payment/default',
    'Magento_Checkout/js/action/place-order',
    'Magento_Checkout/js/action/select-payment-method',
    'Magento_Customer/js/model/customer',
    'Magento_Checkout/js/checkout-data',
    'Magento_Checkout/js/model/payment/additional-validators',
    'mage/url',
  ],
  function (
    $,
    Component,
    placeOrderAction,
    selectPaymentMethodAction,
    customer,
    checkoutData,
    additionalValidators,
    url) {
    'use strict';


    return Component.extend({
      defaults : {
        template : 'BestRate_Payment/payment/bestrate-form'
      },

      placeOrder : function (data, event) {

        const test = {
          "entity_id" : "9",
          "state" : "new",
          "status" : "pending",
          "coupon_code" : "10OFF",
          "protect_code" : "f006530e88057900396b6a3be97ad13e",
          "shipping_description" : "Flat Rate - Fixed",
          "is_virtual" : "0",
          "store_id" : "1",
          "customer_id" : null,
          "base_discount_amount" : "-100.0000",
          "base_discount_canceled" : null,
          "base_discount_invoiced" : null,
          "base_discount_refunded" : null,
          "base_grand_total" : "430.0000",
          "base_shipping_amount" : "15.0000",
          "base_shipping_canceled" : null,
          "base_shipping_invoiced" : null,
          "base_shipping_refunded" : null,
          "base_shipping_tax_amount" : "0.0000",
          "base_shipping_tax_refunded" : null,
          "base_subtotal" : "515.0000",
          "base_subtotal_canceled" : null,
          "base_subtotal_invoiced" : null,
          "base_subtotal_refunded" : null,
          "base_tax_amount" : "0.0000",
          "base_tax_canceled" : null,
          "base_tax_invoiced" : null,
          "base_tax_refunded" : null,
          "base_to_global_rate" : "1.0000",
          "base_to_order_rate" : "1.0000",
          "base_total_canceled" : null,
          "base_total_invoiced" : null,
          "base_total_invoiced_cost" : null,
          "base_total_offline_refunded" : null,
          "base_total_online_refunded" : null,
          "base_total_paid" : null,
          "base_total_qty_ordered" : null,
          "base_total_refunded" : null,
          "discount_amount" : "-100.0000",
          "discount_canceled" : null,
          "discount_invoiced" : null,
          "discount_refunded" : null,
          "grand_total" : "430.0000",
          "shipping_amount" : "15.0000",
          "shipping_canceled" : null,
          "shipping_invoiced" : null,
          "shipping_refunded" : null,
          "shipping_tax_amount" : "0.0000",
          "shipping_tax_refunded" : null,
          "store_to_base_rate" : "0.0000",
          "store_to_order_rate" : "0.0000",
          "subtotal" : "515.0000",
          "subtotal_canceled" : null,
          "subtotal_invoiced" : null,
          "subtotal_refunded" : null,
          "tax_amount" : "0.0000",
          "tax_canceled" : null,
          "tax_invoiced" : null,
          "tax_refunded" : null,
          "total_canceled" : null,
          "total_invoiced" : null,
          "total_offline_refunded" : null,
          "total_online_refunded" : null,
          "total_paid" : null,
          "total_qty_ordered" : "3.0000",
          "total_refunded" : null,
          "can_ship_partially" : null,
          "can_ship_partially_item" : null,
          "customer_is_guest" : "1",
          "customer_note_notify" : "1",
          "billing_address_id" : "18",
          "customer_group_id" : "0",
          "edit_increment" : null,
          "email_sent" : "1",
          "send_email" : "1",
          "forced_shipment_with_invoice" : null,
          "payment_auth_expiration" : null,
          "quote_address_id" : null,
          "quote_id" : "16",
          "shipping_address_id" : "17",
          "adjustment_negative" : null,
          "adjustment_positive" : null,
          "base_adjustment_negative" : null,
          "base_adjustment_positive" : null,
          "base_shipping_discount_amount" : "0.0000",
          "base_subtotal_incl_tax" : "515.0000",
          "base_total_due" : "430.0000",
          "payment_authorization_amount" : null,
          "shipping_discount_amount" : "0.0000",
          "subtotal_incl_tax" : "515.0000",
          "total_due" : "430.0000",
          "weight" : "0.0000",
          "customer_dob" : null,
          "increment_id" : "000000009",
          "applied_rule_ids" : "1",
          "base_currency_code" : "USD",
          "customer_email" : "zachot89@gmail.com",
          "customer_firstname" : null,
          "customer_lastname" : null,
          "customer_middlename" : null,
          "customer_prefix" : null,
          "customer_suffix" : null,
          "customer_taxvat" : null,
          "discount_description" : "10OFF",
          "ext_customer_id" : null,
          "ext_order_id" : null,
          "global_currency_code" : "USD",
          "hold_before_state" : null,
          "hold_before_status" : null,
          "order_currency_code" : "USD",
          "original_increment_id" : null,
          "relation_child_id" : null,
          "relation_child_real_id" : null,
          "relation_parent_id" : null,
          "relation_parent_real_id" : null,
          "remote_ip" : "::1",
          "shipping_method" : "flatrate_flatrate",
          "store_currency_code" : "USD",
          "store_name" : "Main Website\nMain Website Store\n",
          "x_forwarded_for" : null,
          "customer_note" : null,
          "created_at" : "2019-06-23 15:56:10",
          "updated_at" : "2019-06-23 15:56:13",
          "total_item_count" : "3",
          "customer_gender" : null,
          "discount_tax_compensation_amount" : "0.0000",
          "base_discount_tax_compensation_amount" : "0.0000",
          "shipping_discount_tax_compensation_amount" : "0.0000",
          "base_shipping_discount_tax_compensation_amnt" : "0.0000",
          "discount_tax_compensation_invoiced" : null,
          "base_discount_tax_compensation_invoiced" : null,
          "discount_tax_compensation_refunded" : null,
          "base_discount_tax_compensation_refunded" : null,
          "shipping_incl_tax" : "15.0000",
          "base_shipping_incl_tax" : "15.0000",
          "coupon_rule_name" : "10% Off",
          "gift_message_id" : null,
          "paypal_ipn_customer_notified" : "0",
          "payment" : {}
        };

        var self = this,
          placeOrder,
          emailValidationResult = customer.isLoggedIn(),
          loginFormSelector = 'form[data-role=email-with-possible-login]';

        $.ajax({
          url : url.build('bestrate/test/connection'),
          type : 'POST',
          async : true,
          dataType : 'json'
        }).done(function (response) {
          if (response.status) {
            if (!customer.isLoggedIn()) {
              $(loginFormSelector).validation();
              emailValidationResult = Boolean($(loginFormSelector + ' input[name=username]').valid());
            }
            if (emailValidationResult && self.validate() && additionalValidators.validate()) {
              self.isPlaceOrderActionAllowed(false);
              placeOrder = placeOrderAction(self.getData(), false, self.messageContainer);

              // console.log(placeOrder);
              // self.afterPlaceOrder(4);
              $.when(placeOrder)
                .done(self.afterPlaceOrder.bind(self))
                .fail(function () {
                  self.isPlaceOrderActionAllowed(true);
                });
            }
          }
        }).fail(function () {
          self.isPlaceOrderActionAllowed(true);
        });
      },

      selectPaymentMethod : function () {
        selectPaymentMethodAction(this.getData());
        checkoutData.setSelectedPaymentMethod(this.item.method);
        return true;
      },

      afterPlaceOrder : function (quoteId) {
        var self = this;

        var request = $.ajax({
          url : url.build('bestrate/payment/placeOrder'),
          type : 'POST',
          dataType : 'json',
          data : {quote_id : quoteId}
        }).done(function (response) {
          if (response.status && response.redirect_url) {
            window.location = (response.redirect_url);
          } else {
            alert((response.reason || 'Something went wrong') + "\nPlease contract merchant");
          }
          self.isPlaceOrderActionAllowed(true);
        }).fail(function () {
          alert('Something went wrong' + "\nPlease contract merchant");
          self.isPlaceOrderActionAllowed(true);
        });
      }
    });
  }
);
