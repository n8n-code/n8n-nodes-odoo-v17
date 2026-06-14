import type { INodeProperties } from 'n8n-workflow';

export const fieldsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					]
				}
			},
			"options": [
				{
					"name": "Get Account Account Fields",
					"value": "Get Account Account Fields",
					"action": "Get account.account field metadata",
					"description": "List all fields, types, and relations for account.account. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/account.account/fields"
						}
					}
				},
				{
					"name": "Get Account Journal Fields",
					"value": "Get Account Journal Fields",
					"action": "Get account.journal field metadata",
					"description": "List all fields, types, and relations for account.journal. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/account.journal/fields"
						}
					}
				},
				{
					"name": "Get Account Move Fields",
					"value": "Get Account Move Fields",
					"action": "Get account.move field metadata",
					"description": "List all fields, types, and relations for account.move. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/account.move/fields"
						}
					}
				},
				{
					"name": "Get Account Move Line Fields",
					"value": "Get Account Move Line Fields",
					"action": "Get account.move.line field metadata",
					"description": "List all fields, types, and relations for account.move.line. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/account.move.line/fields"
						}
					}
				},
				{
					"name": "Get Account Payment Fields",
					"value": "Get Account Payment Fields",
					"action": "Get account.payment field metadata",
					"description": "List all fields, types, and relations for account.payment. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/account.payment/fields"
						}
					}
				},
				{
					"name": "Get Account Tax Fields",
					"value": "Get Account Tax Fields",
					"action": "Get account.tax field metadata",
					"description": "List all fields, types, and relations for account.tax. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/account.tax/fields"
						}
					}
				},
				{
					"name": "Get Account Tax Group Fields",
					"value": "Get Account Tax Group Fields",
					"action": "Get account.tax.group field metadata",
					"description": "List all fields, types, and relations for account.tax.group. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/account.tax.group/fields"
						}
					}
				},
				{
					"name": "Get Crm Lead Fields",
					"value": "Get Crm Lead Fields",
					"action": "Get crm.lead field metadata",
					"description": "List all fields, types, and relations for crm.lead. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/crm.lead/fields"
						}
					}
				},
				{
					"name": "Get Crm Stage Fields",
					"value": "Get Crm Stage Fields",
					"action": "Get crm.stage field metadata",
					"description": "List all fields, types, and relations for crm.stage. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/crm.stage/fields"
						}
					}
				},
				{
					"name": "Get Crm Tag Fields",
					"value": "Get Crm Tag Fields",
					"action": "Get crm.tag field metadata",
					"description": "List all fields, types, and relations for crm.tag. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/crm.tag/fields"
						}
					}
				},
				{
					"name": "Get Hr Department Fields",
					"value": "Get Hr Department Fields",
					"action": "Get hr.department field metadata",
					"description": "List all fields, types, and relations for hr.department. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/hr.department/fields"
						}
					}
				},
				{
					"name": "Get Hr Employee Fields",
					"value": "Get Hr Employee Fields",
					"action": "Get hr.employee field metadata",
					"description": "List all fields, types, and relations for hr.employee. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/hr.employee/fields"
						}
					}
				},
				{
					"name": "Get Hr Job Fields",
					"value": "Get Hr Job Fields",
					"action": "Get hr.job field metadata",
					"description": "List all fields, types, and relations for hr.job. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/hr.job/fields"
						}
					}
				},
				{
					"name": "Get Mail Message Fields",
					"value": "Get Mail Message Fields",
					"action": "Get mail.message field metadata",
					"description": "List all fields, types, and relations for mail.message. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/mail.message/fields"
						}
					}
				},
				{
					"name": "Get Mail Thread Fields",
					"value": "Get Mail Thread Fields",
					"action": "Get mail.thread field metadata",
					"description": "List all fields, types, and relations for mail.thread. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/mail.thread/fields"
						}
					}
				},
				{
					"name": "Get Mrp Bom Fields",
					"value": "Get Mrp Bom Fields",
					"action": "Get mrp.bom field metadata",
					"description": "List all fields, types, and relations for mrp.bom. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/mrp.bom/fields"
						}
					}
				},
				{
					"name": "Get Mrp Production Fields",
					"value": "Get Mrp Production Fields",
					"action": "Get mrp.production field metadata",
					"description": "List all fields, types, and relations for mrp.production. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/mrp.production/fields"
						}
					}
				},
				{
					"name": "Get Mrp Workorder Fields",
					"value": "Get Mrp Workorder Fields",
					"action": "Get mrp.workorder field metadata",
					"description": "List all fields, types, and relations for mrp.workorder. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/mrp.workorder/fields"
						}
					}
				},
				{
					"name": "Get Pos Config Fields",
					"value": "Get Pos Config Fields",
					"action": "Get pos.config field metadata",
					"description": "List all fields, types, and relations for pos.config. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/pos.config/fields"
						}
					}
				},
				{
					"name": "Get Pos Order Fields",
					"value": "Get Pos Order Fields",
					"action": "Get pos.order field metadata",
					"description": "List all fields, types, and relations for pos.order. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/pos.order/fields"
						}
					}
				},
				{
					"name": "Get Pos Order Line Fields",
					"value": "Get Pos Order Line Fields",
					"action": "Get pos.order.line field metadata",
					"description": "List all fields, types, and relations for pos.order.line. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/pos.order.line/fields"
						}
					}
				},
				{
					"name": "Get Pos Session Fields",
					"value": "Get Pos Session Fields",
					"action": "Get pos.session field metadata",
					"description": "List all fields, types, and relations for pos.session. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/pos.session/fields"
						}
					}
				},
				{
					"name": "Get Product Attribute Fields",
					"value": "Get Product Attribute Fields",
					"action": "Get product.attribute field metadata",
					"description": "List all fields, types, and relations for product.attribute. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/product.attribute/fields"
						}
					}
				},
				{
					"name": "Get Product Attribute Value Fields",
					"value": "Get Product Attribute Value Fields",
					"action": "Get product.attribute.value field metadata",
					"description": "List all fields, types, and relations for product.attribute.value. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/product.attribute.value/fields"
						}
					}
				},
				{
					"name": "Get Product Category Fields",
					"value": "Get Product Category Fields",
					"action": "Get product.category field metadata",
					"description": "List all fields, types, and relations for product.category. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/product.category/fields"
						}
					}
				},
				{
					"name": "Get Product Product Fields",
					"value": "Get Product Product Fields",
					"action": "Get product.product field metadata",
					"description": "List all fields, types, and relations for product.product. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/product.product/fields"
						}
					}
				},
				{
					"name": "Get Product Template Fields",
					"value": "Get Product Template Fields",
					"action": "Get product.template field metadata",
					"description": "List all fields, types, and relations for product.template. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/product.template/fields"
						}
					}
				},
				{
					"name": "Get Project Project Fields",
					"value": "Get Project Project Fields",
					"action": "Get project.project field metadata",
					"description": "List all fields, types, and relations for project.project. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/project.project/fields"
						}
					}
				},
				{
					"name": "Get Project Task Fields",
					"value": "Get Project Task Fields",
					"action": "Get project.task field metadata",
					"description": "List all fields, types, and relations for project.task. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/project.task/fields"
						}
					}
				},
				{
					"name": "Get Purchase Order Fields",
					"value": "Get Purchase Order Fields",
					"action": "Get purchase.order field metadata",
					"description": "List all fields, types, and relations for purchase.order. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/purchase.order/fields"
						}
					}
				},
				{
					"name": "Get Purchase Order Line Fields",
					"value": "Get Purchase Order Line Fields",
					"action": "Get purchase.order.line field metadata",
					"description": "List all fields, types, and relations for purchase.order.line. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/purchase.order.line/fields"
						}
					}
				},
				{
					"name": "Get Res Partner Fields",
					"value": "Get Res Partner Fields",
					"action": "Get res.partner field metadata",
					"description": "List all fields, types, and relations for res.partner. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/res.partner/fields"
						}
					}
				},
				{
					"name": "Get Res Partner Bank Fields",
					"value": "Get Res Partner Bank Fields",
					"action": "Get res.partner.bank field metadata",
					"description": "List all fields, types, and relations for res.partner.bank. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/res.partner.bank/fields"
						}
					}
				},
				{
					"name": "Get Res Partner Category Fields",
					"value": "Get Res Partner Category Fields",
					"action": "Get res.partner.category field metadata",
					"description": "List all fields, types, and relations for res.partner.category. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/res.partner.category/fields"
						}
					}
				},
				{
					"name": "Get Sale Order Fields",
					"value": "Get Sale Order Fields",
					"action": "Get sale.order field metadata",
					"description": "List all fields, types, and relations for sale.order. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/sale.order/fields"
						}
					}
				},
				{
					"name": "Get Sale Order Line Fields",
					"value": "Get Sale Order Line Fields",
					"action": "Get sale.order.line field metadata",
					"description": "List all fields, types, and relations for sale.order.line. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/sale.order.line/fields"
						}
					}
				},
				{
					"name": "Get Stock Location Fields",
					"value": "Get Stock Location Fields",
					"action": "Get stock.location field metadata",
					"description": "List all fields, types, and relations for stock.location. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/stock.location/fields"
						}
					}
				},
				{
					"name": "Get Stock Move Fields",
					"value": "Get Stock Move Fields",
					"action": "Get stock.move field metadata",
					"description": "List all fields, types, and relations for stock.move. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/stock.move/fields"
						}
					}
				},
				{
					"name": "Get Stock Move Line Fields",
					"value": "Get Stock Move Line Fields",
					"action": "Get stock.move.line field metadata",
					"description": "List all fields, types, and relations for stock.move.line. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/stock.move.line/fields"
						}
					}
				},
				{
					"name": "Get Stock Picking Fields",
					"value": "Get Stock Picking Fields",
					"action": "Get stock.picking field metadata",
					"description": "List all fields, types, and relations for stock.picking. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/stock.picking/fields"
						}
					}
				},
				{
					"name": "Get Stock Picking Type Fields",
					"value": "Get Stock Picking Type Fields",
					"action": "Get stock.picking.type field metadata",
					"description": "List all fields, types, and relations for stock.picking.type. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/stock.picking.type/fields"
						}
					}
				},
				{
					"name": "Get Stock Quant Fields",
					"value": "Get Stock Quant Fields",
					"action": "Get stock.quant field metadata",
					"description": "List all fields, types, and relations for stock.quant. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/stock.quant/fields"
						}
					}
				},
				{
					"name": "Get Stock Warehouse Fields",
					"value": "Get Stock Warehouse Fields",
					"action": "Get stock.warehouse field metadata",
					"description": "List all fields, types, and relations for stock.warehouse. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/stock.warehouse/fields"
						}
					}
				},
				{
					"name": "Get Uom Category Fields",
					"value": "Get Uom Category Fields",
					"action": "Get uom.category field metadata",
					"description": "List all fields, types, and relations for uom.category. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/uom.category/fields"
						}
					}
				},
				{
					"name": "Get Uom Uom Fields",
					"value": "Get Uom Uom Fields",
					"action": "Get uom.uom field metadata",
					"description": "List all fields, types, and relations for uom.uom. Use this to understand which fields accept names vs IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/uom.uom/fields"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/account.account/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Account Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Account Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Account Fields"
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
						"Fields"
					],
					"operation": [
						"Get Account Account Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Account Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/account.journal/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Journal Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Journal Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Journal Fields"
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
						"Fields"
					],
					"operation": [
						"Get Account Journal Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Journal Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/account.move/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Move Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Move Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Move Fields"
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
						"Fields"
					],
					"operation": [
						"Get Account Move Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Move Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/account.move.line/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Move Line Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Move Line Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Move Line Fields"
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
						"Fields"
					],
					"operation": [
						"Get Account Move Line Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Move Line Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/account.payment/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Payment Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Payment Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Payment Fields"
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
						"Fields"
					],
					"operation": [
						"Get Account Payment Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Payment Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/account.tax/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Tax Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Tax Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Tax Fields"
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
						"Fields"
					],
					"operation": [
						"Get Account Tax Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Tax Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/account.tax.group/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Tax Group Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Tax Group Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Tax Group Fields"
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
						"Fields"
					],
					"operation": [
						"Get Account Tax Group Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Account Tax Group Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/crm.lead/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Crm Lead Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Crm Lead Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Crm Lead Fields"
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
						"Fields"
					],
					"operation": [
						"Get Crm Lead Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Crm Lead Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/crm.stage/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Crm Stage Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Crm Stage Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Crm Stage Fields"
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
						"Fields"
					],
					"operation": [
						"Get Crm Stage Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Crm Stage Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/crm.tag/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Crm Tag Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Crm Tag Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Crm Tag Fields"
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
						"Fields"
					],
					"operation": [
						"Get Crm Tag Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Crm Tag Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/hr.department/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Hr Department Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Hr Department Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Hr Department Fields"
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
						"Fields"
					],
					"operation": [
						"Get Hr Department Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Hr Department Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/hr.employee/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Hr Employee Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Hr Employee Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Hr Employee Fields"
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
						"Fields"
					],
					"operation": [
						"Get Hr Employee Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Hr Employee Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/hr.job/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Hr Job Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Hr Job Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Hr Job Fields"
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
						"Fields"
					],
					"operation": [
						"Get Hr Job Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Hr Job Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/mail.message/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Mail Message Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Mail Message Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Mail Message Fields"
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
						"Fields"
					],
					"operation": [
						"Get Mail Message Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Mail Message Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/mail.thread/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Mail Thread Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Mail Thread Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Mail Thread Fields"
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
						"Fields"
					],
					"operation": [
						"Get Mail Thread Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Mail Thread Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/mrp.bom/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Mrp Bom Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Mrp Bom Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Mrp Bom Fields"
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
						"Fields"
					],
					"operation": [
						"Get Mrp Bom Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Mrp Bom Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/mrp.production/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Mrp Production Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Mrp Production Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Mrp Production Fields"
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
						"Fields"
					],
					"operation": [
						"Get Mrp Production Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Mrp Production Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/mrp.workorder/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Mrp Workorder Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Mrp Workorder Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Mrp Workorder Fields"
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
						"Fields"
					],
					"operation": [
						"Get Mrp Workorder Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Mrp Workorder Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/pos.config/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Pos Config Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Pos Config Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Pos Config Fields"
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
						"Fields"
					],
					"operation": [
						"Get Pos Config Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Pos Config Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/pos.order/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Pos Order Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Pos Order Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Pos Order Fields"
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
						"Fields"
					],
					"operation": [
						"Get Pos Order Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Pos Order Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/pos.order.line/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Pos Order Line Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Pos Order Line Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Pos Order Line Fields"
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
						"Fields"
					],
					"operation": [
						"Get Pos Order Line Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Pos Order Line Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/pos.session/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Pos Session Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Pos Session Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Pos Session Fields"
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
						"Fields"
					],
					"operation": [
						"Get Pos Session Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Pos Session Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/product.attribute/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Product Attribute Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Product Attribute Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Product Attribute Fields"
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
						"Fields"
					],
					"operation": [
						"Get Product Attribute Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Product Attribute Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/product.attribute.value/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Product Attribute Value Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Product Attribute Value Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Product Attribute Value Fields"
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
						"Fields"
					],
					"operation": [
						"Get Product Attribute Value Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Product Attribute Value Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/product.category/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Product Category Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Product Category Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Product Category Fields"
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
						"Fields"
					],
					"operation": [
						"Get Product Category Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Product Category Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/product.product/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Product Product Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Product Product Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Product Product Fields"
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
						"Fields"
					],
					"operation": [
						"Get Product Product Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Product Product Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/product.template/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Product Template Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Product Template Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Product Template Fields"
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
						"Fields"
					],
					"operation": [
						"Get Product Template Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Product Template Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/project.project/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Project Project Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Project Project Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Project Project Fields"
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
						"Fields"
					],
					"operation": [
						"Get Project Project Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Project Project Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/project.task/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Project Task Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Project Task Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Project Task Fields"
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
						"Fields"
					],
					"operation": [
						"Get Project Task Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Project Task Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/purchase.order/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Purchase Order Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Purchase Order Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Purchase Order Fields"
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
						"Fields"
					],
					"operation": [
						"Get Purchase Order Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Purchase Order Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/purchase.order.line/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Purchase Order Line Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Purchase Order Line Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Purchase Order Line Fields"
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
						"Fields"
					],
					"operation": [
						"Get Purchase Order Line Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Purchase Order Line Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/res.partner/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Res Partner Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Res Partner Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Res Partner Fields"
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
						"Fields"
					],
					"operation": [
						"Get Res Partner Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Res Partner Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/res.partner.bank/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Res Partner Bank Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Res Partner Bank Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Res Partner Bank Fields"
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
						"Fields"
					],
					"operation": [
						"Get Res Partner Bank Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Res Partner Bank Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/res.partner.category/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Res Partner Category Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Res Partner Category Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Res Partner Category Fields"
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
						"Fields"
					],
					"operation": [
						"Get Res Partner Category Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Res Partner Category Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/sale.order/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Sale Order Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Sale Order Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Sale Order Fields"
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
						"Fields"
					],
					"operation": [
						"Get Sale Order Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Sale Order Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/sale.order.line/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Sale Order Line Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Sale Order Line Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Sale Order Line Fields"
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
						"Fields"
					],
					"operation": [
						"Get Sale Order Line Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Sale Order Line Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/stock.location/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Location Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Location Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Location Fields"
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
						"Fields"
					],
					"operation": [
						"Get Stock Location Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Location Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/stock.move/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Move Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Move Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Move Fields"
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
						"Fields"
					],
					"operation": [
						"Get Stock Move Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Move Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/stock.move.line/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Move Line Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Move Line Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Move Line Fields"
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
						"Fields"
					],
					"operation": [
						"Get Stock Move Line Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Move Line Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/stock.picking/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Picking Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Picking Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Picking Fields"
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
						"Fields"
					],
					"operation": [
						"Get Stock Picking Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Picking Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/stock.picking.type/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Picking Type Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Picking Type Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Picking Type Fields"
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
						"Fields"
					],
					"operation": [
						"Get Stock Picking Type Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Picking Type Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/stock.quant/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Quant Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Quant Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Quant Fields"
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
						"Fields"
					],
					"operation": [
						"Get Stock Quant Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Quant Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/stock.warehouse/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Warehouse Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Warehouse Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Warehouse Fields"
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
						"Fields"
					],
					"operation": [
						"Get Stock Warehouse Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Stock Warehouse Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/uom.category/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Uom Category Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Uom Category Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Uom Category Fields"
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
						"Fields"
					],
					"operation": [
						"Get Uom Category Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Uom Category Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /api/uom.uom/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Uom Uom Fields"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Uom Uom Fields"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Uom Uom Fields"
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
						"Fields"
					],
					"operation": [
						"Get Uom Uom Fields"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Auth using Odoo email and password.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fields"
					],
					"operation": [
						"Get Uom Uom Fields"
					]
				}
			}
		},
];
