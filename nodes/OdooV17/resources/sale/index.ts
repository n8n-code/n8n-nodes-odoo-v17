import type { INodeProperties } from 'n8n-workflow';

export const saleDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					]
				}
			},
			"options": [
				{
					"name": "Search Sale Order",
					"value": "Search Sale Order",
					"action": "Search & read Sales Order",
					"description": "Search and read sale.order records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/sale.order"
						}
					}
				},
				{
					"name": "Upsert Sale Order",
					"value": "Upsert Sale Order",
					"action": "Upsert Order",
					"description": "Create or update sale.order record.\n\nSearch by name (SO Number) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/sale.order"
						}
					}
				},
				{
					"name": "Search Sale Order Line",
					"value": "Search Sale Order Line",
					"action": "Search & read Sales Order Line",
					"description": "Search and read sale.order.line records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/sale.order.line"
						}
					}
				},
				{
					"name": "Upsert Sale Order Line",
					"value": "Upsert Sale Order Line",
					"action": "Upsert Line",
					"description": "Create or update sale.order.line record.\n\nSearch by name (SO Line Description) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/sale.order.line"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/sale.order",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Search Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"description": "JSON-encoded Odoo domain filter",
			"default": "[[\"name\",\"ilike\",\"test\"]]",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Search Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,partner_id,state,amount_total,id",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Search Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Search Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Search Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order, e.g. 'name asc' or 'create_date desc'",
			"default": "date_order desc",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Search Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearerauth",
			"type": "string",
			"default": "",
			"description": "Generate token from /api/credentials page in Odoo backend.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Search Sale Order"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/sale.order",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{\n  \"name\": \"S00001\"\n}",
			"description": "Search criteria to find existing record by SO Number",
			"routing": {
				"send": {
					"property": "_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Access Point Address",
			"name": "access_point_address",
			"type": "json",
			"default": "{}",
			"description": "Delivery Point Address",
			"routing": {
				"send": {
					"property": "access_point_address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Access Token",
			"name": "access_token",
			"type": "string",
			"default": "",
			"description": "Security Token",
			"routing": {
				"send": {
					"property": "access_token",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Access URL",
			"name": "access_url",
			"type": "string",
			"default": "",
			"description": "Portal Access URL",
			"routing": {
				"send": {
					"property": "access_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Access Warning",
			"name": "access_warning",
			"type": "string",
			"default": "",
			"description": "Access warning",
			"routing": {
				"send": {
					"property": "access_warning",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Activity Calendar Event ID",
			"name": "activity_calendar_event_id",
			"type": "number",
			"default": 0,
			"description": "ID of related calendar.event",
			"routing": {
				"send": {
					"property": "activity_calendar_event_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Activity Date Deadline",
			"name": "activity_date_deadline",
			"type": "string",
			"default": "",
			"description": "Next Activity Deadline",
			"routing": {
				"send": {
					"property": "activity_date_deadline",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Activity Exception Decoration",
			"name": "activity_exception_decoration",
			"type": "string",
			"default": "",
			"description": "Activity Exception Decoration",
			"routing": {
				"send": {
					"property": "activity_exception_decoration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Activity Exception Icon",
			"name": "activity_exception_icon",
			"type": "string",
			"default": "",
			"description": "Icon",
			"routing": {
				"send": {
					"property": "activity_exception_icon",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Activity State",
			"name": "activity_state",
			"type": "string",
			"default": "",
			"description": "Activity State",
			"routing": {
				"send": {
					"property": "activity_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Activity Summary",
			"name": "activity_summary",
			"type": "string",
			"default": "",
			"description": "Next Activity Summary",
			"routing": {
				"send": {
					"property": "activity_summary",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Activity Type Icon",
			"name": "activity_type_icon",
			"type": "string",
			"default": "",
			"description": "Activity Type Icon",
			"routing": {
				"send": {
					"property": "activity_type_icon",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Activity Type ID",
			"name": "activity_type_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mail.activity.type",
			"routing": {
				"send": {
					"property": "activity_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Activity User ID",
			"name": "activity_user_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.users",
			"routing": {
				"send": {
					"property": "activity_user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Amount Delivery",
			"name": "amount_delivery",
			"type": "number",
			"default": 0,
			"description": "Delivery Amount",
			"routing": {
				"send": {
					"property": "amount_delivery",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Amount Invoiced",
			"name": "amount_invoiced",
			"type": "number",
			"default": 0,
			"description": "Already invoiced",
			"routing": {
				"send": {
					"property": "amount_invoiced",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Amount Paid",
			"name": "amount_paid",
			"type": "number",
			"default": 0,
			"description": "Amount Paid",
			"routing": {
				"send": {
					"property": "amount_paid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Amount Tax",
			"name": "amount_tax",
			"type": "number",
			"default": 0,
			"description": "Taxes",
			"routing": {
				"send": {
					"property": "amount_tax",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Amount To Invoice",
			"name": "amount_to_invoice",
			"type": "number",
			"default": 0,
			"description": "Amount to invoice",
			"routing": {
				"send": {
					"property": "amount_to_invoice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Amount Total",
			"name": "amount_total",
			"type": "number",
			"default": 0,
			"description": "Total",
			"routing": {
				"send": {
					"property": "amount_total",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Amount Undiscounted",
			"name": "amount_undiscounted",
			"type": "number",
			"default": 0,
			"description": "Amount Before Discount",
			"routing": {
				"send": {
					"property": "amount_undiscounted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Amount Unpaid",
			"name": "amount_unpaid",
			"type": "number",
			"default": 0,
			"description": "Unpaid Amount",
			"routing": {
				"send": {
					"property": "amount_unpaid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Amount Untaxed",
			"name": "amount_untaxed",
			"type": "number",
			"default": 0,
			"description": "Untaxed Amount",
			"routing": {
				"send": {
					"property": "amount_untaxed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Analytic Account ID",
			"name": "analytic_account_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.analytic.account",
			"routing": {
				"send": {
					"property": "analytic_account_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Authorized Transaction Ids",
			"name": "authorized_transaction_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Authorized Transactions (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "authorized_transaction_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Campaign ID",
			"name": "campaign_id",
			"type": "number",
			"default": 0,
			"description": "ID of related utm.campaign",
			"routing": {
				"send": {
					"property": "campaign_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Carrier ID",
			"name": "carrier_id",
			"type": "number",
			"default": 0,
			"description": "ID of related delivery.carrier",
			"routing": {
				"send": {
					"property": "carrier_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Cart Quantity",
			"name": "cart_quantity",
			"type": "number",
			"default": 0,
			"description": "Cart Quantity",
			"routing": {
				"send": {
					"property": "cart_quantity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Cart Recovery Email Sent",
			"name": "cart_recovery_email_sent",
			"type": "boolean",
			"default": true,
			"description": "Cart recovery email already sent",
			"routing": {
				"send": {
					"property": "cart_recovery_email_sent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Client Order Ref",
			"name": "client_order_ref",
			"type": "string",
			"default": "",
			"description": "Customer Reference",
			"routing": {
				"send": {
					"property": "client_order_ref",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Commitment Date",
			"name": "commitment_date",
			"type": "string",
			"default": "",
			"description": "Delivery Date",
			"routing": {
				"send": {
					"property": "commitment_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Company ID",
			"name": "company_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.company",
			"routing": {
				"send": {
					"property": "company_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Country Code",
			"name": "country_code",
			"type": "string",
			"default": "",
			"description": "Country code",
			"routing": {
				"send": {
					"property": "country_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Currency ID",
			"name": "currency_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.currency",
			"routing": {
				"send": {
					"property": "currency_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Currency Rate",
			"name": "currency_rate",
			"type": "number",
			"default": 0,
			"description": "Currency Rate",
			"routing": {
				"send": {
					"property": "currency_rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Date Order",
			"name": "date_order",
			"type": "string",
			"default": "",
			"description": "Order Date",
			"routing": {
				"send": {
					"property": "date_order",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Delivery Count",
			"name": "delivery_count",
			"type": "number",
			"default": 0,
			"description": "Delivery Orders",
			"routing": {
				"send": {
					"property": "delivery_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Delivery Message",
			"name": "delivery_message",
			"type": "string",
			"default": "",
			"description": "Delivery Message",
			"routing": {
				"send": {
					"property": "delivery_message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Delivery Rating Success",
			"name": "delivery_rating_success",
			"type": "boolean",
			"default": true,
			"description": "Delivery Rating Success",
			"routing": {
				"send": {
					"property": "delivery_rating_success",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Delivery Set",
			"name": "delivery_set",
			"type": "boolean",
			"default": true,
			"description": "Delivery Set",
			"routing": {
				"send": {
					"property": "delivery_set",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Delivery Status",
			"name": "delivery_status",
			"type": "string",
			"default": "",
			"description": "Delivery Status",
			"routing": {
				"send": {
					"property": "delivery_status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Effective Date",
			"name": "effective_date",
			"type": "string",
			"default": "",
			"description": "Effective Date",
			"routing": {
				"send": {
					"property": "effective_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Expected Date",
			"name": "expected_date",
			"type": "string",
			"default": "",
			"description": "Expected Date",
			"routing": {
				"send": {
					"property": "expected_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Expense Count",
			"name": "expense_count",
			"type": "number",
			"default": 0,
			"description": "# of Expenses",
			"routing": {
				"send": {
					"property": "expense_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Fiscal Position ID",
			"name": "fiscal_position_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.fiscal.position",
			"routing": {
				"send": {
					"property": "fiscal_position_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Has Active Pricelist",
			"name": "has_active_pricelist",
			"type": "boolean",
			"default": true,
			"description": "Has Active Pricelist",
			"routing": {
				"send": {
					"property": "has_active_pricelist",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Has Message",
			"name": "has_message",
			"type": "boolean",
			"default": true,
			"description": "Has Message",
			"routing": {
				"send": {
					"property": "has_message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Incoterm",
			"name": "incoterm",
			"type": "number",
			"default": 0,
			"description": "ID of related account.incoterms",
			"routing": {
				"send": {
					"property": "incoterm",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Incoterm Location",
			"name": "incoterm_location",
			"type": "string",
			"default": "",
			"description": "Incoterm Location",
			"routing": {
				"send": {
					"property": "incoterm_location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Invoice Count",
			"name": "invoice_count",
			"type": "number",
			"default": 0,
			"description": "Invoice Count",
			"routing": {
				"send": {
					"property": "invoice_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Invoice Ids",
			"name": "invoice_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Invoices (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "invoice_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Invoice Status",
			"name": "invoice_status",
			"type": "string",
			"default": "",
			"description": "Invoice Status",
			"routing": {
				"send": {
					"property": "invoice_status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Is Abandoned Cart",
			"name": "is_abandoned_cart",
			"type": "boolean",
			"default": true,
			"description": "Abandoned Cart",
			"routing": {
				"send": {
					"property": "is_abandoned_cart",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Is All Service",
			"name": "is_all_service",
			"type": "boolean",
			"default": true,
			"description": "Service Product",
			"routing": {
				"send": {
					"property": "is_all_service",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Is Expired",
			"name": "is_expired",
			"type": "boolean",
			"default": true,
			"description": "Is Expired",
			"routing": {
				"send": {
					"property": "is_expired",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Is Product Milestone",
			"name": "is_product_milestone",
			"type": "boolean",
			"default": true,
			"description": "Is Product Milestone",
			"routing": {
				"send": {
					"property": "is_product_milestone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Journal ID",
			"name": "journal_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.journal",
			"routing": {
				"send": {
					"property": "journal_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "JSON Popover",
			"name": "json_popover",
			"type": "string",
			"default": "",
			"description": "JSON data for the popover widget",
			"routing": {
				"send": {
					"property": "json_popover",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Locked",
			"name": "locked",
			"type": "boolean",
			"default": true,
			"description": "Locked",
			"routing": {
				"send": {
					"property": "locked",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Medium ID",
			"name": "medium_id",
			"type": "number",
			"default": 0,
			"description": "ID of related utm.medium",
			"routing": {
				"send": {
					"property": "medium_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Message Attachment Count",
			"name": "message_attachment_count",
			"type": "number",
			"default": 0,
			"description": "Attachment Count",
			"routing": {
				"send": {
					"property": "message_attachment_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Message Has Error",
			"name": "message_has_error",
			"type": "boolean",
			"default": true,
			"description": "Message Delivery error",
			"routing": {
				"send": {
					"property": "message_has_error",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Message Has Error Counter",
			"name": "message_has_error_counter",
			"type": "number",
			"default": 0,
			"description": "Number of errors",
			"routing": {
				"send": {
					"property": "message_has_error_counter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Message Has Sms Error",
			"name": "message_has_sms_error",
			"type": "boolean",
			"default": true,
			"description": "SMS Delivery error",
			"routing": {
				"send": {
					"property": "message_has_sms_error",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Message Is Follower",
			"name": "message_is_follower",
			"type": "boolean",
			"default": true,
			"description": "Is Follower",
			"routing": {
				"send": {
					"property": "message_is_follower",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Message Needaction",
			"name": "message_needaction",
			"type": "boolean",
			"default": true,
			"description": "Action Needed",
			"routing": {
				"send": {
					"property": "message_needaction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Message Needaction Counter",
			"name": "message_needaction_counter",
			"type": "number",
			"default": 0,
			"description": "Number of Actions",
			"routing": {
				"send": {
					"property": "message_needaction_counter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Message Partner Ids",
			"name": "message_partner_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Followers (Partners) (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "message_partner_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Milestone Count",
			"name": "milestone_count",
			"type": "number",
			"default": 0,
			"description": "Milestone Count",
			"routing": {
				"send": {
					"property": "milestone_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Mrp Production Count",
			"name": "mrp_production_count",
			"type": "number",
			"default": 0,
			"description": "Count of MO generated",
			"routing": {
				"send": {
					"property": "mrp_production_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Mrp Production Ids",
			"name": "mrp_production_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Manufacturing orders associated with this sales order. (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "mrp_production_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "My Activity Date Deadline",
			"name": "my_activity_date_deadline",
			"type": "string",
			"default": "",
			"description": "My Activity Deadline",
			"routing": {
				"send": {
					"property": "my_activity_date_deadline",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Order Reference",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Note",
			"name": "note",
			"type": "string",
			"default": "",
			"description": "Terms and conditions",
			"routing": {
				"send": {
					"property": "note",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Only Services",
			"name": "only_services",
			"type": "boolean",
			"default": true,
			"description": "Only Services",
			"routing": {
				"send": {
					"property": "only_services",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Opportunity ID",
			"name": "opportunity_id",
			"type": "number",
			"default": 0,
			"description": "ID of related crm.lead",
			"routing": {
				"send": {
					"property": "opportunity_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Origin",
			"name": "origin",
			"type": "string",
			"default": "",
			"description": "Source Document",
			"routing": {
				"send": {
					"property": "origin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Partner Credit Warning",
			"name": "partner_credit_warning",
			"type": "string",
			"default": "",
			"description": "Partner Credit Warning",
			"routing": {
				"send": {
					"property": "partner_credit_warning",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Partner ID",
			"name": "partner_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "partner_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Partner Invoice ID",
			"name": "partner_invoice_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "partner_invoice_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Partner Shipping ID",
			"name": "partner_shipping_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "partner_shipping_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Payment Term ID",
			"name": "payment_term_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.payment.term",
			"routing": {
				"send": {
					"property": "payment_term_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Pending Email Template ID",
			"name": "pending_email_template_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mail.template",
			"routing": {
				"send": {
					"property": "pending_email_template_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Picking Policy",
			"name": "picking_policy",
			"type": "string",
			"default": "",
			"description": "Shipping Policy",
			"routing": {
				"send": {
					"property": "picking_policy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Pos Order Count",
			"name": "pos_order_count",
			"type": "number",
			"default": 0,
			"description": "Pos Order Count",
			"routing": {
				"send": {
					"property": "pos_order_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Prepayment Percent",
			"name": "prepayment_percent",
			"type": "number",
			"default": 0,
			"description": "Prepayment percentage",
			"routing": {
				"send": {
					"property": "prepayment_percent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Pricelist ID",
			"name": "pricelist_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.pricelist",
			"routing": {
				"send": {
					"property": "pricelist_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Procurement Group ID",
			"name": "procurement_group_id",
			"type": "number",
			"default": 0,
			"description": "ID of related procurement.group",
			"routing": {
				"send": {
					"property": "procurement_group_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Project Count",
			"name": "project_count",
			"type": "number",
			"default": 0,
			"description": "Number of Projects",
			"routing": {
				"send": {
					"property": "project_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "project_id",
			"type": "number",
			"default": 0,
			"description": "ID of related project.project",
			"routing": {
				"send": {
					"property": "project_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Project Ids",
			"name": "project_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Projects (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "project_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Purchase Order Count",
			"name": "purchase_order_count",
			"type": "number",
			"default": 0,
			"description": "Number of Purchase Order Generated",
			"routing": {
				"send": {
					"property": "purchase_order_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Recompute Delivery Price",
			"name": "recompute_delivery_price",
			"type": "boolean",
			"default": true,
			"description": "Delivery cost should be recomputed",
			"routing": {
				"send": {
					"property": "recompute_delivery_price",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"description": "Payment Ref.",
			"routing": {
				"send": {
					"property": "reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Require Payment",
			"name": "require_payment",
			"type": "boolean",
			"default": true,
			"description": "Online payment",
			"routing": {
				"send": {
					"property": "require_payment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Require Signature",
			"name": "require_signature",
			"type": "boolean",
			"default": true,
			"description": "Online signature",
			"routing": {
				"send": {
					"property": "require_signature",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Sale Order Template ID",
			"name": "sale_order_template_id",
			"type": "number",
			"default": 0,
			"description": "ID of related sale.order.template",
			"routing": {
				"send": {
					"property": "sale_order_template_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Shipping Weight",
			"name": "shipping_weight",
			"type": "number",
			"default": 0,
			"description": "Shipping Weight",
			"routing": {
				"send": {
					"property": "shipping_weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Shop Warning",
			"name": "shop_warning",
			"type": "string",
			"default": "",
			"description": "Warning",
			"routing": {
				"send": {
					"property": "shop_warning",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Show Create Project Button",
			"name": "show_create_project_button",
			"type": "boolean",
			"default": true,
			"description": "Show Create Project Button",
			"routing": {
				"send": {
					"property": "show_create_project_button",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Show JSON Popover",
			"name": "show_json_popover",
			"type": "boolean",
			"default": true,
			"description": "Has late picking",
			"routing": {
				"send": {
					"property": "show_json_popover",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Show Project Button",
			"name": "show_project_button",
			"type": "boolean",
			"default": true,
			"description": "Show Project Button",
			"routing": {
				"send": {
					"property": "show_project_button",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Show Task Button",
			"name": "show_task_button",
			"type": "boolean",
			"default": true,
			"description": "Show Task Button",
			"routing": {
				"send": {
					"property": "show_task_button",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Show Update Fpos",
			"name": "show_update_fpos",
			"type": "boolean",
			"default": true,
			"description": "Has Fiscal Position Changed",
			"routing": {
				"send": {
					"property": "show_update_fpos",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Show Update Pricelist",
			"name": "show_update_pricelist",
			"type": "boolean",
			"default": true,
			"description": "Has Pricelist Changed",
			"routing": {
				"send": {
					"property": "show_update_pricelist",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Signature",
			"name": "signature",
			"type": "string",
			"default": "",
			"description": "Signature",
			"routing": {
				"send": {
					"property": "signature",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Signed By",
			"name": "signed_by",
			"type": "string",
			"default": "",
			"description": "Signed By",
			"routing": {
				"send": {
					"property": "signed_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Signed On",
			"name": "signed_on",
			"type": "string",
			"default": "",
			"description": "Signed On",
			"routing": {
				"send": {
					"property": "signed_on",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Source ID",
			"name": "source_id",
			"type": "number",
			"default": 0,
			"description": "ID of related utm.source",
			"routing": {
				"send": {
					"property": "source_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"type": "string",
			"default": "",
			"description": "Status",
			"routing": {
				"send": {
					"property": "state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Tag Ids",
			"name": "tag_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Tags (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "tag_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Tasks Count",
			"name": "tasks_count",
			"type": "number",
			"default": 0,
			"description": "Tasks",
			"routing": {
				"send": {
					"property": "tasks_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Tasks Ids",
			"name": "tasks_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Tasks associated to this sale (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "tasks_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Tax Calculation Rounding Method",
			"name": "tax_calculation_rounding_method",
			"type": "string",
			"default": "",
			"description": "Tax Calculation Rounding Method",
			"routing": {
				"send": {
					"property": "tax_calculation_rounding_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Tax Country ID",
			"name": "tax_country_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.country",
			"routing": {
				"send": {
					"property": "tax_country_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Tax Totals",
			"name": "tax_totals",
			"type": "string",
			"default": "",
			"description": "Tax Totals",
			"routing": {
				"send": {
					"property": "tax_totals",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Team ID",
			"name": "team_id",
			"type": "number",
			"default": 0,
			"description": "ID of related crm.team",
			"routing": {
				"send": {
					"property": "team_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Terms Type",
			"name": "terms_type",
			"type": "string",
			"default": "",
			"description": "Terms & Conditions format",
			"routing": {
				"send": {
					"property": "terms_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Transaction Ids",
			"name": "transaction_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Transactions (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "transaction_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Type Name",
			"name": "type_name",
			"type": "string",
			"default": "",
			"description": "Type Name",
			"routing": {
				"send": {
					"property": "type_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.users",
			"routing": {
				"send": {
					"property": "user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Validity Date",
			"name": "validity_date",
			"type": "string",
			"default": "",
			"description": "Expiration",
			"routing": {
				"send": {
					"property": "validity_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Visible Project",
			"name": "visible_project",
			"type": "boolean",
			"default": true,
			"description": "Display project",
			"routing": {
				"send": {
					"property": "visible_project",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Warehouse ID",
			"name": "warehouse_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.warehouse",
			"routing": {
				"send": {
					"property": "warehouse_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Website ID",
			"name": "website_id",
			"type": "number",
			"default": 0,
			"description": "ID of related website",
			"routing": {
				"send": {
					"property": "website_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearerauth",
			"type": "string",
			"default": "",
			"description": "Generate token from /api/credentials page in Odoo backend.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order"
					]
				}
			}
		},
		{
			"displayName": "GET /api/sale.order.line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Search Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"description": "JSON-encoded Odoo domain filter",
			"default": "[[\"name\",\"ilike\",\"test\"]]",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Search Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,order_id,product_id,price_unit,product_uom_qty,id",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Search Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Search Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Search Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order, e.g. 'name asc' or 'create_date desc'",
			"default": "id asc",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Search Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearerauth",
			"type": "string",
			"default": "",
			"description": "Generate token from /api/credentials page in Odoo backend.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Search Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/sale.order.line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{\n  \"name\": \"S00001-1\"\n}",
			"description": "Search criteria to find existing record by SO Line Description",
			"routing": {
				"send": {
					"property": "_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Analytic Distribution",
			"name": "analytic_distribution",
			"type": "json",
			"default": "{}",
			"description": "Analytic Distribution",
			"routing": {
				"send": {
					"property": "analytic_distribution",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Analytic Distribution Search",
			"name": "analytic_distribution_search",
			"type": "json",
			"default": "{}",
			"description": "Analytic Distribution Search",
			"routing": {
				"send": {
					"property": "analytic_distribution_search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Analytic Precision",
			"name": "analytic_precision",
			"type": "number",
			"default": 0,
			"description": "Analytic Precision",
			"routing": {
				"send": {
					"property": "analytic_precision",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Company ID",
			"name": "company_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.company",
			"routing": {
				"send": {
					"property": "company_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Currency ID",
			"name": "currency_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.currency",
			"routing": {
				"send": {
					"property": "currency_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Customer Lead",
			"name": "customer_lead",
			"type": "number",
			"default": 0,
			"description": "Lead Time",
			"routing": {
				"send": {
					"property": "customer_lead",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Discount",
			"name": "discount",
			"type": "number",
			"default": 0,
			"description": "Discount (%)",
			"routing": {
				"send": {
					"property": "discount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Display Qty Widget",
			"name": "display_qty_widget",
			"type": "boolean",
			"default": true,
			"description": "Display Qty Widget",
			"routing": {
				"send": {
					"property": "display_qty_widget",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Display Type",
			"name": "display_type",
			"type": "string",
			"default": "",
			"description": "Display Type",
			"routing": {
				"send": {
					"property": "display_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Distribution Analytic Account Ids",
			"name": "distribution_analytic_account_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Distribution Analytic Account (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "distribution_analytic_account_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Forecast Expected Date",
			"name": "forecast_expected_date",
			"type": "string",
			"default": "",
			"description": "Forecast Expected Date",
			"routing": {
				"send": {
					"property": "forecast_expected_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Free Qty Today",
			"name": "free_qty_today",
			"type": "number",
			"default": 0,
			"description": "Free Qty Today",
			"routing": {
				"send": {
					"property": "free_qty_today",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Invoice Lines",
			"name": "invoice_lines",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Invoice Lines (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "invoice_lines",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Invoice Status",
			"name": "invoice_status",
			"type": "string",
			"default": "",
			"description": "Invoice Status",
			"routing": {
				"send": {
					"property": "invoice_status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Is Configurable Product",
			"name": "is_configurable_product",
			"type": "boolean",
			"default": true,
			"description": "Is the product configurable?",
			"routing": {
				"send": {
					"property": "is_configurable_product",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Is Delivery",
			"name": "is_delivery",
			"type": "boolean",
			"default": true,
			"description": "Is a Delivery",
			"routing": {
				"send": {
					"property": "is_delivery",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Is Downpayment",
			"name": "is_downpayment",
			"type": "boolean",
			"default": true,
			"description": "Is a down payment",
			"routing": {
				"send": {
					"property": "is_downpayment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Is Expense",
			"name": "is_expense",
			"type": "boolean",
			"default": true,
			"description": "Is expense",
			"routing": {
				"send": {
					"property": "is_expense",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Is Mto",
			"name": "is_mto",
			"type": "boolean",
			"default": true,
			"description": "Is Mto",
			"routing": {
				"send": {
					"property": "is_mto",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Is Service",
			"name": "is_service",
			"type": "boolean",
			"default": true,
			"description": "Is a Service",
			"routing": {
				"send": {
					"property": "is_service",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Linked Line ID",
			"name": "linked_line_id",
			"type": "number",
			"default": 0,
			"description": "ID of related sale.order.line",
			"routing": {
				"send": {
					"property": "linked_line_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Description",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Name Short",
			"name": "name_short",
			"type": "string",
			"default": "",
			"description": "Name Short",
			"routing": {
				"send": {
					"property": "name_short",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "order_id",
			"type": "number",
			"default": 0,
			"description": "ID of related sale.order",
			"routing": {
				"send": {
					"property": "order_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Order Partner ID",
			"name": "order_partner_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "order_partner_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Price Reduce Taxexcl",
			"name": "price_reduce_taxexcl",
			"type": "number",
			"default": 0,
			"description": "Price Reduce Tax excl",
			"routing": {
				"send": {
					"property": "price_reduce_taxexcl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Price Reduce Taxinc",
			"name": "price_reduce_taxinc",
			"type": "number",
			"default": 0,
			"description": "Price Reduce Tax incl",
			"routing": {
				"send": {
					"property": "price_reduce_taxinc",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Price Subtotal",
			"name": "price_subtotal",
			"type": "number",
			"default": 0,
			"description": "Subtotal",
			"routing": {
				"send": {
					"property": "price_subtotal",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Price Tax",
			"name": "price_tax",
			"type": "number",
			"default": 0,
			"description": "Total Tax",
			"routing": {
				"send": {
					"property": "price_tax",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Price Total",
			"name": "price_total",
			"type": "number",
			"default": 0,
			"description": "Total",
			"routing": {
				"send": {
					"property": "price_total",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Price Unit",
			"name": "price_unit",
			"type": "number",
			"default": 0,
			"description": "Unit Price",
			"routing": {
				"send": {
					"property": "price_unit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Pricelist Item ID",
			"name": "pricelist_item_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.pricelist.item",
			"routing": {
				"send": {
					"property": "pricelist_item_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Product ID",
			"name": "product_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.product",
			"routing": {
				"send": {
					"property": "product_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Product No Variant Attribute Value Ids",
			"name": "product_no_variant_attribute_value_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Extra Values (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "product_no_variant_attribute_value_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Product Packaging ID",
			"name": "product_packaging_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.packaging",
			"routing": {
				"send": {
					"property": "product_packaging_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Product Packaging Qty",
			"name": "product_packaging_qty",
			"type": "number",
			"default": 0,
			"description": "Packaging Quantity",
			"routing": {
				"send": {
					"property": "product_packaging_qty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Product Qty",
			"name": "product_qty",
			"type": "number",
			"default": 0,
			"description": "Product Qty",
			"routing": {
				"send": {
					"property": "product_qty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Product Template Attribute Value Ids",
			"name": "product_template_attribute_value_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Attribute Values (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "product_template_attribute_value_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Product Template ID",
			"name": "product_template_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.template",
			"routing": {
				"send": {
					"property": "product_template_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Product Type",
			"name": "product_type",
			"type": "string",
			"default": "",
			"description": "Product Type",
			"routing": {
				"send": {
					"property": "product_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Product Uom",
			"name": "product_uom",
			"type": "number",
			"default": 0,
			"description": "ID of related uom.uom",
			"routing": {
				"send": {
					"property": "product_uom",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Product Uom Category ID",
			"name": "product_uom_category_id",
			"type": "number",
			"default": 0,
			"description": "ID of related uom.category",
			"routing": {
				"send": {
					"property": "product_uom_category_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Product Uom Qty",
			"name": "product_uom_qty",
			"type": "number",
			"default": 0,
			"description": "Quantity",
			"routing": {
				"send": {
					"property": "product_uom_qty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Product Uom Readonly",
			"name": "product_uom_readonly",
			"type": "boolean",
			"default": true,
			"description": "Product Uom Readonly",
			"routing": {
				"send": {
					"property": "product_uom_readonly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Product Updatable",
			"name": "product_updatable",
			"type": "boolean",
			"default": true,
			"description": "Can Edit Product",
			"routing": {
				"send": {
					"property": "product_updatable",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "project_id",
			"type": "number",
			"default": 0,
			"description": "ID of related project.project",
			"routing": {
				"send": {
					"property": "project_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Purchase Line Count",
			"name": "purchase_line_count",
			"type": "number",
			"default": 0,
			"description": "Number of generated purchase items",
			"routing": {
				"send": {
					"property": "purchase_line_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Qty Available Today",
			"name": "qty_available_today",
			"type": "number",
			"default": 0,
			"description": "Qty Available Today",
			"routing": {
				"send": {
					"property": "qty_available_today",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Qty Delivered",
			"name": "qty_delivered",
			"type": "number",
			"default": 0,
			"description": "Delivery Quantity",
			"routing": {
				"send": {
					"property": "qty_delivered",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Qty Delivered Method",
			"name": "qty_delivered_method",
			"type": "string",
			"default": "",
			"description": "Method to update delivered qty",
			"routing": {
				"send": {
					"property": "qty_delivered_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Qty Invoiced",
			"name": "qty_invoiced",
			"type": "number",
			"default": 0,
			"description": "Invoiced Quantity",
			"routing": {
				"send": {
					"property": "qty_invoiced",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Qty To Deliver",
			"name": "qty_to_deliver",
			"type": "number",
			"default": 0,
			"description": "Qty To Deliver",
			"routing": {
				"send": {
					"property": "qty_to_deliver",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Qty To Invoice",
			"name": "qty_to_invoice",
			"type": "number",
			"default": 0,
			"description": "Quantity To Invoice",
			"routing": {
				"send": {
					"property": "qty_to_invoice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Recompute Delivery Price",
			"name": "recompute_delivery_price",
			"type": "boolean",
			"default": true,
			"description": "Delivery cost should be recomputed",
			"routing": {
				"send": {
					"property": "recompute_delivery_price",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Route ID",
			"name": "route_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.route",
			"routing": {
				"send": {
					"property": "route_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Salesman ID",
			"name": "salesman_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.users",
			"routing": {
				"send": {
					"property": "salesman_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Scheduled Date",
			"name": "scheduled_date",
			"type": "string",
			"default": "",
			"description": "Scheduled Date",
			"routing": {
				"send": {
					"property": "scheduled_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Sequence",
			"name": "sequence",
			"type": "number",
			"default": 0,
			"description": "Sequence",
			"routing": {
				"send": {
					"property": "sequence",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Shop Warning",
			"name": "shop_warning",
			"type": "string",
			"default": "",
			"description": "Warning",
			"routing": {
				"send": {
					"property": "shop_warning",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"type": "string",
			"default": "",
			"description": "Order Status",
			"routing": {
				"send": {
					"property": "state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Task ID",
			"name": "task_id",
			"type": "number",
			"default": 0,
			"description": "ID of related project.task",
			"routing": {
				"send": {
					"property": "task_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Tax Calculation Rounding Method",
			"name": "tax_calculation_rounding_method",
			"type": "string",
			"default": "",
			"description": "Tax calculation rounding method",
			"routing": {
				"send": {
					"property": "tax_calculation_rounding_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Tax Country ID",
			"name": "tax_country_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.country",
			"routing": {
				"send": {
					"property": "tax_country_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Tax ID",
			"name": "tax_id",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Taxes (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "tax_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Untaxed Amount Invoiced",
			"name": "untaxed_amount_invoiced",
			"type": "number",
			"default": 0,
			"description": "Untaxed Invoiced Amount",
			"routing": {
				"send": {
					"property": "untaxed_amount_invoiced",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Untaxed Amount To Invoice",
			"name": "untaxed_amount_to_invoice",
			"type": "number",
			"default": 0,
			"description": "Untaxed Amount To Invoice",
			"routing": {
				"send": {
					"property": "untaxed_amount_to_invoice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Virtual Available At Date",
			"name": "virtual_available_at_date",
			"type": "number",
			"default": 0,
			"description": "Virtual Available At Date",
			"routing": {
				"send": {
					"property": "virtual_available_at_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Warehouse ID",
			"name": "warehouse_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.warehouse",
			"routing": {
				"send": {
					"property": "warehouse_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearerauth",
			"type": "string",
			"default": "",
			"description": "Generate token from /api/credentials page in Odoo backend.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sale"
					],
					"operation": [
						"Upsert Sale Order Line"
					]
				}
			}
		},
];
