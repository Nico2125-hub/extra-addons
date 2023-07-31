# -*- coding: utf-8 -*-


from odoo import models, fields


class PosConfig(models.Model):
    _inherit = 'pos.config'

    send_auto_email = fields.Boolean(string="Employees with access",
        help='Click to send auto email while validation of order.')
    