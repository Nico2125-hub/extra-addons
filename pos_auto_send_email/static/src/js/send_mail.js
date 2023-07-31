odoo.define('pos_auto_send_email.SendMail', function (require) {
    'use strict';

//	const PaymentScreen = require('@point_of_sale/Screens/PaymentScreen/PaymentScreen');
	var models = require('point_of_sale.models');
    var rpc = require('web.rpc');
    const { _t } = require('web.core');
    const PaymentScreen = require('point_of_sale.PaymentScreen');
    const ReceiptScreen = require('point_of_sale.ReceiptScreen');
    const Registries = require('point_of_sale.Registries');
    var models = require('point_of_sale.models');
	models.load_fields('pos.config');

    const ReceiptScreenMail = (ReceiptScreen) =>
        class extends ReceiptScreen {
        mounted() {
            super.mounted();
			if (this.env.pos.config.send_auto_email) {
                this.onSendEmail();
            }
           }
         }

    Registries.Component.extend(ReceiptScreen, ReceiptScreenMail);
	return ReceiptScreenMail
 });