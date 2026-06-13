import type { INodeProperties } from 'n8n-workflow';

export const posDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					]
				}
			},
			"options": [
				{
					"name": "Search Pos Config",
					"value": "Search Pos Config",
					"action": "Search & read Point of Sale Configuration",
					"description": "Search and read pos.config records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/pos.config"
						}
					}
				},
				{
					"name": "Create Pos Config",
					"value": "Create Pos Config",
					"action": "Create Point of Sale Configuration",
					"description": "Create a new pos.config record. Uses Odoo `create` method.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/pos.config"
						}
					}
				},
				{
					"name": "Get Pos Config",
					"value": "Get Pos Config",
					"action": "Get Point of Sale Configuration by ID",
					"description": "Read a single pos.config record by ID. Uses Odoo `read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/pos.config/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Pos Config",
					"value": "Update Pos Config",
					"action": "Update Point of Sale Configuration",
					"description": "Update an existing pos.config record. Uses Odoo `write` method.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/pos.config/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete Pos Config",
					"value": "Delete Pos Config",
					"action": "Delete Point of Sale Configuration",
					"description": "Delete a pos.config record. Uses Odoo `unlink` method.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/pos.config/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Call Pos Config",
					"value": "Call Pos Config",
					"action": "Call method on Point of Sale Configuration",
					"description": "Call any method on a pos.config record. Uses Odoo `execute_kw` with method name.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/pos.config/{{$parameter[\"id\"]}}/call"
						}
					}
				},
				{
					"name": "Search Pos Order",
					"value": "Search Pos Order",
					"action": "Search & read Point of Sale Orders",
					"description": "Search and read pos.order records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/pos.order"
						}
					}
				},
				{
					"name": "Create Pos Order",
					"value": "Create Pos Order",
					"action": "Create Point of Sale Orders",
					"description": "Create a new pos.order record. Uses Odoo `create` method.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/pos.order"
						}
					}
				},
				{
					"name": "Get Pos Order",
					"value": "Get Pos Order",
					"action": "Get Point of Sale Orders by ID",
					"description": "Read a single pos.order record by ID. Uses Odoo `read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/pos.order/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Pos Order",
					"value": "Update Pos Order",
					"action": "Update Point of Sale Orders",
					"description": "Update an existing pos.order record. Uses Odoo `write` method.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/pos.order/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete Pos Order",
					"value": "Delete Pos Order",
					"action": "Delete Point of Sale Orders",
					"description": "Delete a pos.order record. Uses Odoo `unlink` method.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/pos.order/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Call Pos Order",
					"value": "Call Pos Order",
					"action": "Call method on Point of Sale Orders",
					"description": "Call any method on a pos.order record. Uses Odoo `execute_kw` with method name.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/pos.order/{{$parameter[\"id\"]}}/call"
						}
					}
				},
				{
					"name": "Search Pos Order Line",
					"value": "Search Pos Order Line",
					"action": "Search & read Point of Sale Order Lines",
					"description": "Search and read pos.order.line records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/pos.order.line"
						}
					}
				},
				{
					"name": "Create Pos Order Line",
					"value": "Create Pos Order Line",
					"action": "Create Point of Sale Order Lines",
					"description": "Create a new pos.order.line record. Uses Odoo `create` method.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/pos.order.line"
						}
					}
				},
				{
					"name": "Get Pos Order Line",
					"value": "Get Pos Order Line",
					"action": "Get Point of Sale Order Lines by ID",
					"description": "Read a single pos.order.line record by ID. Uses Odoo `read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/pos.order.line/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Pos Order Line",
					"value": "Update Pos Order Line",
					"action": "Update Point of Sale Order Lines",
					"description": "Update an existing pos.order.line record. Uses Odoo `write` method.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/pos.order.line/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete Pos Order Line",
					"value": "Delete Pos Order Line",
					"action": "Delete Point of Sale Order Lines",
					"description": "Delete a pos.order.line record. Uses Odoo `unlink` method.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/pos.order.line/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Call Pos Order Line",
					"value": "Call Pos Order Line",
					"action": "Call method on Point of Sale Order Lines",
					"description": "Call any method on a pos.order.line record. Uses Odoo `execute_kw` with method name.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/pos.order.line/{{$parameter[\"id\"]}}/call"
						}
					}
				},
				{
					"name": "Search Pos Session",
					"value": "Search Pos Session",
					"action": "Search & read Point of Sale Session",
					"description": "Search and read pos.session records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/pos.session"
						}
					}
				},
				{
					"name": "Create Pos Session",
					"value": "Create Pos Session",
					"action": "Create Point of Sale Session",
					"description": "Create a new pos.session record. Uses Odoo `create` method.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/pos.session"
						}
					}
				},
				{
					"name": "Get Pos Session",
					"value": "Get Pos Session",
					"action": "Get Point of Sale Session by ID",
					"description": "Read a single pos.session record by ID. Uses Odoo `read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/pos.session/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Pos Session",
					"value": "Update Pos Session",
					"action": "Update Point of Sale Session",
					"description": "Update an existing pos.session record. Uses Odoo `write` method.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/pos.session/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete Pos Session",
					"value": "Delete Pos Session",
					"action": "Delete Point of Sale Session",
					"description": "Delete a pos.session record. Uses Odoo `unlink` method.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/pos.session/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Call Pos Session",
					"value": "Call Pos Session",
					"action": "Call method on Point of Sale Session",
					"description": "Call any method on a pos.session record. Uses Odoo `execute_kw` with method name.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/pos.session/{{$parameter[\"id\"]}}/call"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/pos.config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Search Pos Config"
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
						"Pos"
					],
					"operation": [
						"Search Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,default_code,list_price",
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
						"Pos"
					],
					"operation": [
						"Search Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 80,
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
						"Pos"
					],
					"operation": [
						"Search Pos Config"
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
						"Pos"
					],
					"operation": [
						"Search Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order, e.g. 'name asc' or 'create_date desc'",
			"default": "",
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
						"Pos"
					],
					"operation": [
						"Search Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Pos"
					],
					"operation": [
						"Search Pos Config"
					]
				}
			}
		},
		{
			"displayName": "POST /api/pos.config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"required": true,
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
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
			"description": "Active",
			"routing": {
				"send": {
					"property": "active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Advanced Employee Ids",
			"name": "advanced_employee_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Employees with manager access (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "advanced_employee_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Amount Authorized Diff",
			"name": "amount_authorized_diff",
			"type": "number",
			"default": 0,
			"description": "Amount Authorized Difference",
			"routing": {
				"send": {
					"property": "amount_authorized_diff",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Auto Validate Terminal Payment",
			"name": "auto_validate_terminal_payment",
			"type": "boolean",
			"default": true,
			"description": "Auto Validate Terminal Payment",
			"routing": {
				"send": {
					"property": "auto_validate_terminal_payment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Available Pricelist Ids",
			"name": "available_pricelist_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Available Pricelists (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "available_pricelist_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Basic Employee Ids",
			"name": "basic_employee_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Employees with basic access (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "basic_employee_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Cash Control",
			"name": "cash_control",
			"type": "boolean",
			"default": true,
			"description": "Advanced Cash Control",
			"routing": {
				"send": {
					"property": "cash_control",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Cash Rounding",
			"name": "cash_rounding",
			"type": "boolean",
			"default": true,
			"description": "Cash Rounding",
			"routing": {
				"send": {
					"property": "cash_rounding",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Company Has Template",
			"name": "company_has_template",
			"type": "boolean",
			"default": true,
			"description": "Company has chart of accounts",
			"routing": {
				"send": {
					"property": "company_has_template",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"required": true,
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
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Crm Team ID",
			"name": "crm_team_id",
			"type": "number",
			"default": 0,
			"description": "ID of related crm.team",
			"routing": {
				"send": {
					"property": "crm_team_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
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
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Current Session ID",
			"name": "current_session_id",
			"type": "number",
			"default": 0,
			"description": "ID of related pos.session",
			"routing": {
				"send": {
					"property": "current_session_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Current Session State",
			"name": "current_session_state",
			"type": "string",
			"default": "",
			"description": "Current Session State",
			"routing": {
				"send": {
					"property": "current_session_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Current User ID",
			"name": "current_user_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.users",
			"routing": {
				"send": {
					"property": "current_user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Default Bill Ids",
			"name": "default_bill_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Coins/Bills (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "default_bill_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Default Fiscal Position ID",
			"name": "default_fiscal_position_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.fiscal.position",
			"routing": {
				"send": {
					"property": "default_fiscal_position_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Down Payment Product ID",
			"name": "down_payment_product_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.product",
			"routing": {
				"send": {
					"property": "down_payment_product_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Epson Printer Ip",
			"name": "epson_printer_ip",
			"type": "string",
			"default": "",
			"description": "Epson Printer IP",
			"routing": {
				"send": {
					"property": "epson_printer_ip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Fiscal Position Ids",
			"name": "fiscal_position_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Fiscal Positions (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "fiscal_position_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Floor Ids",
			"name": "floor_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Restaurant Floors (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "floor_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Group Pos Manager ID",
			"name": "group_pos_manager_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.groups",
			"routing": {
				"send": {
					"property": "group_pos_manager_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Group Pos User ID",
			"name": "group_pos_user_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.groups",
			"routing": {
				"send": {
					"property": "group_pos_user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Has Active Session",
			"name": "has_active_session",
			"type": "boolean",
			"default": true,
			"description": "Has Active Session",
			"routing": {
				"send": {
					"property": "has_active_session",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Available Categ Ids",
			"name": "iface_available_categ_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Available PoS Product Categories (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "iface_available_categ_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Big Scrollbars",
			"name": "iface_big_scrollbars",
			"type": "boolean",
			"default": true,
			"description": "Large Scrollbars",
			"routing": {
				"send": {
					"property": "iface_big_scrollbars",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Cashdrawer",
			"name": "iface_cashdrawer",
			"type": "boolean",
			"default": true,
			"description": "Cashdrawer",
			"routing": {
				"send": {
					"property": "iface_cashdrawer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Customer Facing Display",
			"name": "iface_customer_facing_display",
			"type": "boolean",
			"default": true,
			"description": "Iface Customer Facing Display",
			"routing": {
				"send": {
					"property": "iface_customer_facing_display",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Customer Facing Display Background Image 1920",
			"name": "iface_customer_facing_display_background_image_1920",
			"type": "string",
			"default": "",
			"description": "Background Image",
			"routing": {
				"send": {
					"property": "iface_customer_facing_display_background_image_1920",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Customer Facing Display Local",
			"name": "iface_customer_facing_display_local",
			"type": "boolean",
			"default": true,
			"description": "Local Customer Facing Display",
			"routing": {
				"send": {
					"property": "iface_customer_facing_display_local",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Customer Facing Display Via Proxy",
			"name": "iface_customer_facing_display_via_proxy",
			"type": "boolean",
			"default": true,
			"description": "Customer Facing Display",
			"routing": {
				"send": {
					"property": "iface_customer_facing_display_via_proxy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Electronic Scale",
			"name": "iface_electronic_scale",
			"type": "boolean",
			"default": true,
			"description": "Electronic Scale",
			"routing": {
				"send": {
					"property": "iface_electronic_scale",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Orderline Notes",
			"name": "iface_orderline_notes",
			"type": "boolean",
			"default": true,
			"description": "Internal Notes",
			"routing": {
				"send": {
					"property": "iface_orderline_notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Print Auto",
			"name": "iface_print_auto",
			"type": "boolean",
			"default": true,
			"description": "Automatic Receipt Printing",
			"routing": {
				"send": {
					"property": "iface_print_auto",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Print Skip Screen",
			"name": "iface_print_skip_screen",
			"type": "boolean",
			"default": true,
			"description": "Skip Preview Screen",
			"routing": {
				"send": {
					"property": "iface_print_skip_screen",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Print Via Proxy",
			"name": "iface_print_via_proxy",
			"type": "boolean",
			"default": true,
			"description": "Print via Proxy",
			"routing": {
				"send": {
					"property": "iface_print_via_proxy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Printbill",
			"name": "iface_printbill",
			"type": "boolean",
			"default": true,
			"description": "Bill Printing",
			"routing": {
				"send": {
					"property": "iface_printbill",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Scan Via Proxy",
			"name": "iface_scan_via_proxy",
			"type": "boolean",
			"default": true,
			"description": "Scan via Proxy",
			"routing": {
				"send": {
					"property": "iface_scan_via_proxy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Splitbill",
			"name": "iface_splitbill",
			"type": "boolean",
			"default": true,
			"description": "Bill Splitting",
			"routing": {
				"send": {
					"property": "iface_splitbill",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Start Categ ID",
			"name": "iface_start_categ_id",
			"type": "number",
			"default": 0,
			"description": "ID of related pos.category",
			"routing": {
				"send": {
					"property": "iface_start_categ_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Iface Tax Included",
			"name": "iface_tax_included",
			"type": "string",
			"default": "",
			"description": "Tax Display",
			"routing": {
				"send": {
					"property": "iface_tax_included",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Tipproduct",
			"name": "iface_tipproduct",
			"type": "boolean",
			"default": true,
			"description": "Product tips",
			"routing": {
				"send": {
					"property": "iface_tipproduct",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Invoice Journal ID",
			"name": "invoice_journal_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.journal",
			"routing": {
				"send": {
					"property": "invoice_journal_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Is Header Or Footer",
			"name": "is_header_or_footer",
			"type": "boolean",
			"default": true,
			"description": "Custom Header & Footer",
			"routing": {
				"send": {
					"property": "is_header_or_footer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Is Installed Account Accountant",
			"name": "is_installed_account_accountant",
			"type": "boolean",
			"default": true,
			"description": "Is the Full Accounting Installed",
			"routing": {
				"send": {
					"property": "is_installed_account_accountant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Is Margins Costs Accessible To Every User",
			"name": "is_margins_costs_accessible_to_every_user",
			"type": "boolean",
			"default": true,
			"description": "Margins & Costs",
			"routing": {
				"send": {
					"property": "is_margins_costs_accessible_to_every_user",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Is Order Printer",
			"name": "is_order_printer",
			"type": "boolean",
			"default": true,
			"description": "Order Printer",
			"routing": {
				"send": {
					"property": "is_order_printer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Is Posbox",
			"name": "is_posbox",
			"type": "boolean",
			"default": true,
			"description": "PosBox",
			"routing": {
				"send": {
					"property": "is_posbox",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
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
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Last Session Closing Cash",
			"name": "last_session_closing_cash",
			"type": "number",
			"default": 0,
			"description": "Last Session Closing Cash",
			"routing": {
				"send": {
					"property": "last_session_closing_cash",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Last Session Closing Date",
			"name": "last_session_closing_date",
			"type": "string",
			"default": "",
			"description": "Last Session Closing Date",
			"routing": {
				"send": {
					"property": "last_session_closing_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Limit Categories",
			"name": "limit_categories",
			"type": "boolean",
			"default": true,
			"description": "Restrict Categories",
			"routing": {
				"send": {
					"property": "limit_categories",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Manual Discount",
			"name": "manual_discount",
			"type": "boolean",
			"default": true,
			"description": "Line Discounts",
			"routing": {
				"send": {
					"property": "manual_discount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Module Pos Discount",
			"name": "module_pos_discount",
			"type": "boolean",
			"default": true,
			"description": "Global Discounts",
			"routing": {
				"send": {
					"property": "module_pos_discount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Module Pos Hr",
			"name": "module_pos_hr",
			"type": "boolean",
			"default": true,
			"description": "Module Pos Hr",
			"routing": {
				"send": {
					"property": "module_pos_hr",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Module Pos Mercury",
			"name": "module_pos_mercury",
			"type": "boolean",
			"default": true,
			"description": "Integrated Card Payments",
			"routing": {
				"send": {
					"property": "module_pos_mercury",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Module Pos Restaurant",
			"name": "module_pos_restaurant",
			"type": "boolean",
			"default": true,
			"description": "Is a Bar/Restaurant",
			"routing": {
				"send": {
					"property": "module_pos_restaurant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Module Pos Restaurant Appointment",
			"name": "module_pos_restaurant_appointment",
			"type": "boolean",
			"default": true,
			"description": "Table Booking",
			"routing": {
				"send": {
					"property": "module_pos_restaurant_appointment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Point of Sale",
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
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Number Of Rescue Session",
			"name": "number_of_rescue_session",
			"type": "number",
			"default": 0,
			"description": "Number of Rescue Session",
			"routing": {
				"send": {
					"property": "number_of_rescue_session",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Only Round Cash Method",
			"name": "only_round_cash_method",
			"type": "boolean",
			"default": true,
			"description": "Only apply rounding on cash",
			"routing": {
				"send": {
					"property": "only_round_cash_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Other Devices",
			"name": "other_devices",
			"type": "boolean",
			"default": true,
			"description": "Other Devices",
			"routing": {
				"send": {
					"property": "other_devices",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Payment Method Ids",
			"name": "payment_method_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Payment Methods (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "payment_method_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"required": true,
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
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Picking Type ID",
			"name": "picking_type_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.picking.type",
			"routing": {
				"send": {
					"property": "picking_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Pos Session Duration",
			"name": "pos_session_duration",
			"type": "string",
			"default": "",
			"description": "Pos Session Duration",
			"routing": {
				"send": {
					"property": "pos_session_duration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Pos Session State",
			"name": "pos_session_state",
			"type": "string",
			"default": "",
			"description": "Pos Session State",
			"routing": {
				"send": {
					"property": "pos_session_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Pos Session Username",
			"name": "pos_session_username",
			"type": "string",
			"default": "",
			"description": "Pos Session Username",
			"routing": {
				"send": {
					"property": "pos_session_username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
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
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Printer Ids",
			"name": "printer_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Order Printers (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "printer_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Proxy Ip",
			"name": "proxy_ip",
			"type": "string",
			"default": "",
			"description": "IP Address",
			"routing": {
				"send": {
					"property": "proxy_ip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Receipt Footer",
			"name": "receipt_footer",
			"type": "string",
			"default": "",
			"description": "Receipt Footer",
			"routing": {
				"send": {
					"property": "receipt_footer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Receipt Header",
			"name": "receipt_header",
			"type": "string",
			"default": "",
			"description": "Receipt Header",
			"routing": {
				"send": {
					"property": "receipt_header",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Restrict Price Control",
			"name": "restrict_price_control",
			"type": "boolean",
			"default": true,
			"description": "Restrict Price Modifications to Managers",
			"routing": {
				"send": {
					"property": "restrict_price_control",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Rounding Method",
			"name": "rounding_method",
			"type": "number",
			"default": 0,
			"description": "ID of related account.cash.rounding",
			"routing": {
				"send": {
					"property": "rounding_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
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
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Self Order Online Payment Method ID",
			"name": "self_order_online_payment_method_id",
			"type": "number",
			"default": 0,
			"description": "ID of related pos.payment.method",
			"routing": {
				"send": {
					"property": "self_order_online_payment_method_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Self Ordering Alternative Fp ID",
			"name": "self_ordering_alternative_fp_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.fiscal.position",
			"routing": {
				"send": {
					"property": "self_ordering_alternative_fp_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Self Ordering Available Language Ids",
			"name": "self_ordering_available_language_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Available Languages (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "self_ordering_available_language_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Self Ordering Default Language ID",
			"name": "self_ordering_default_language_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.lang",
			"routing": {
				"send": {
					"property": "self_ordering_default_language_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Self Ordering Default User ID",
			"name": "self_ordering_default_user_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.users",
			"routing": {
				"send": {
					"property": "self_ordering_default_user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Self Ordering Image Brand",
			"name": "self_ordering_image_brand",
			"type": "string",
			"default": "",
			"description": "Self Order Kiosk Image Brand",
			"routing": {
				"send": {
					"property": "self_ordering_image_brand",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Self Ordering Image Brand Name",
			"name": "self_ordering_image_brand_name",
			"type": "string",
			"default": "",
			"description": "Self Order Kiosk Image Brand Name",
			"routing": {
				"send": {
					"property": "self_ordering_image_brand_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Self Ordering Image Home Ids",
			"name": "self_ordering_image_home_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Add images (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "self_ordering_image_home_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Self Ordering Mode",
			"name": "self_ordering_mode",
			"type": "string",
			"default": "",
			"description": "Self Ordering Mode",
			"routing": {
				"send": {
					"property": "self_ordering_mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Self Ordering Pay After",
			"name": "self_ordering_pay_after",
			"type": "string",
			"default": "",
			"description": "Pay After:",
			"routing": {
				"send": {
					"property": "self_ordering_pay_after",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Self Ordering Service Mode",
			"name": "self_ordering_service_mode",
			"type": "string",
			"default": "",
			"description": "Service",
			"routing": {
				"send": {
					"property": "self_ordering_service_mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Self Ordering Takeaway",
			"name": "self_ordering_takeaway",
			"type": "boolean",
			"default": true,
			"description": "Takeaway",
			"routing": {
				"send": {
					"property": "self_ordering_takeaway",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Self Ordering URL",
			"name": "self_ordering_url",
			"type": "string",
			"default": "",
			"description": "Self Ordering Url",
			"routing": {
				"send": {
					"property": "self_ordering_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Sequence ID",
			"name": "sequence_id",
			"type": "number",
			"default": 0,
			"description": "ID of related ir.sequence",
			"routing": {
				"send": {
					"property": "sequence_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Sequence Line ID",
			"name": "sequence_line_id",
			"type": "number",
			"default": 0,
			"description": "ID of related ir.sequence",
			"routing": {
				"send": {
					"property": "sequence_line_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Set Maximum Difference",
			"name": "set_maximum_difference",
			"type": "boolean",
			"default": true,
			"description": "Set Maximum Difference",
			"routing": {
				"send": {
					"property": "set_maximum_difference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Set Tip After Payment",
			"name": "set_tip_after_payment",
			"type": "boolean",
			"default": true,
			"description": "Set Tip After Payment",
			"routing": {
				"send": {
					"property": "set_tip_after_payment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Ship Later",
			"name": "ship_later",
			"type": "boolean",
			"default": true,
			"description": "Ship Later",
			"routing": {
				"send": {
					"property": "ship_later",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Start Category",
			"name": "start_category",
			"type": "boolean",
			"default": true,
			"description": "Start Category",
			"routing": {
				"send": {
					"property": "start_category",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "string",
			"default": "",
			"description": "Status",
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Tax Regime Selection",
			"name": "tax_regime_selection",
			"type": "boolean",
			"default": true,
			"description": "Tax Regime Selection value",
			"routing": {
				"send": {
					"property": "tax_regime_selection",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Tip Product ID",
			"name": "tip_product_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.product",
			"routing": {
				"send": {
					"property": "tip_product_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Trusted Config Ids",
			"name": "trusted_config_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Trusted Point of Sale Configurations (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "trusted_config_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Use Pricelist",
			"name": "use_pricelist",
			"type": "boolean",
			"default": true,
			"description": "Use a pricelist.",
			"routing": {
				"send": {
					"property": "use_pricelist",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Uuid",
			"name": "uuid",
			"type": "string",
			"default": "",
			"description": "Uuid",
			"routing": {
				"send": {
					"property": "uuid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Config"
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
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Pos"
					],
					"operation": [
						"Create Pos Config"
					]
				}
			}
		},
		{
			"displayName": "GET /api/pos.config/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Get Pos Config"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Record ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Get Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "",
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
						"Pos"
					],
					"operation": [
						"Get Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Pos"
					],
					"operation": [
						"Get Pos Config"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/pos.config/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Record ID to update",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
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
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
			"description": "Active",
			"routing": {
				"send": {
					"property": "active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Advanced Employee Ids",
			"name": "advanced_employee_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Employees with manager access (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "advanced_employee_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Amount Authorized Diff",
			"name": "amount_authorized_diff",
			"type": "number",
			"default": 0,
			"description": "Amount Authorized Difference",
			"routing": {
				"send": {
					"property": "amount_authorized_diff",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Auto Validate Terminal Payment",
			"name": "auto_validate_terminal_payment",
			"type": "boolean",
			"default": true,
			"description": "Auto Validate Terminal Payment",
			"routing": {
				"send": {
					"property": "auto_validate_terminal_payment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Available Pricelist Ids",
			"name": "available_pricelist_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Available Pricelists (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "available_pricelist_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Basic Employee Ids",
			"name": "basic_employee_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Employees with basic access (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "basic_employee_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Cash Control",
			"name": "cash_control",
			"type": "boolean",
			"default": true,
			"description": "Advanced Cash Control",
			"routing": {
				"send": {
					"property": "cash_control",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Cash Rounding",
			"name": "cash_rounding",
			"type": "boolean",
			"default": true,
			"description": "Cash Rounding",
			"routing": {
				"send": {
					"property": "cash_rounding",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Company Has Template",
			"name": "company_has_template",
			"type": "boolean",
			"default": true,
			"description": "Company has chart of accounts",
			"routing": {
				"send": {
					"property": "company_has_template",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
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
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Crm Team ID",
			"name": "crm_team_id",
			"type": "number",
			"default": 0,
			"description": "ID of related crm.team",
			"routing": {
				"send": {
					"property": "crm_team_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
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
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Current Session ID",
			"name": "current_session_id",
			"type": "number",
			"default": 0,
			"description": "ID of related pos.session",
			"routing": {
				"send": {
					"property": "current_session_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Current Session State",
			"name": "current_session_state",
			"type": "string",
			"default": "",
			"description": "Current Session State",
			"routing": {
				"send": {
					"property": "current_session_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Current User ID",
			"name": "current_user_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.users",
			"routing": {
				"send": {
					"property": "current_user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Default Bill Ids",
			"name": "default_bill_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Coins/Bills (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "default_bill_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Default Fiscal Position ID",
			"name": "default_fiscal_position_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.fiscal.position",
			"routing": {
				"send": {
					"property": "default_fiscal_position_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Down Payment Product ID",
			"name": "down_payment_product_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.product",
			"routing": {
				"send": {
					"property": "down_payment_product_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Epson Printer Ip",
			"name": "epson_printer_ip",
			"type": "string",
			"default": "",
			"description": "Epson Printer IP",
			"routing": {
				"send": {
					"property": "epson_printer_ip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Fiscal Position Ids",
			"name": "fiscal_position_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Fiscal Positions (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "fiscal_position_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Floor Ids",
			"name": "floor_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Restaurant Floors (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "floor_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Group Pos Manager ID",
			"name": "group_pos_manager_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.groups",
			"routing": {
				"send": {
					"property": "group_pos_manager_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Group Pos User ID",
			"name": "group_pos_user_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.groups",
			"routing": {
				"send": {
					"property": "group_pos_user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Has Active Session",
			"name": "has_active_session",
			"type": "boolean",
			"default": true,
			"description": "Has Active Session",
			"routing": {
				"send": {
					"property": "has_active_session",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Available Categ Ids",
			"name": "iface_available_categ_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Available PoS Product Categories (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "iface_available_categ_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Big Scrollbars",
			"name": "iface_big_scrollbars",
			"type": "boolean",
			"default": true,
			"description": "Large Scrollbars",
			"routing": {
				"send": {
					"property": "iface_big_scrollbars",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Cashdrawer",
			"name": "iface_cashdrawer",
			"type": "boolean",
			"default": true,
			"description": "Cashdrawer",
			"routing": {
				"send": {
					"property": "iface_cashdrawer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Customer Facing Display",
			"name": "iface_customer_facing_display",
			"type": "boolean",
			"default": true,
			"description": "Iface Customer Facing Display",
			"routing": {
				"send": {
					"property": "iface_customer_facing_display",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Customer Facing Display Background Image 1920",
			"name": "iface_customer_facing_display_background_image_1920",
			"type": "string",
			"default": "",
			"description": "Background Image",
			"routing": {
				"send": {
					"property": "iface_customer_facing_display_background_image_1920",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Customer Facing Display Local",
			"name": "iface_customer_facing_display_local",
			"type": "boolean",
			"default": true,
			"description": "Local Customer Facing Display",
			"routing": {
				"send": {
					"property": "iface_customer_facing_display_local",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Customer Facing Display Via Proxy",
			"name": "iface_customer_facing_display_via_proxy",
			"type": "boolean",
			"default": true,
			"description": "Customer Facing Display",
			"routing": {
				"send": {
					"property": "iface_customer_facing_display_via_proxy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Electronic Scale",
			"name": "iface_electronic_scale",
			"type": "boolean",
			"default": true,
			"description": "Electronic Scale",
			"routing": {
				"send": {
					"property": "iface_electronic_scale",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Orderline Notes",
			"name": "iface_orderline_notes",
			"type": "boolean",
			"default": true,
			"description": "Internal Notes",
			"routing": {
				"send": {
					"property": "iface_orderline_notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Print Auto",
			"name": "iface_print_auto",
			"type": "boolean",
			"default": true,
			"description": "Automatic Receipt Printing",
			"routing": {
				"send": {
					"property": "iface_print_auto",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Print Skip Screen",
			"name": "iface_print_skip_screen",
			"type": "boolean",
			"default": true,
			"description": "Skip Preview Screen",
			"routing": {
				"send": {
					"property": "iface_print_skip_screen",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Print Via Proxy",
			"name": "iface_print_via_proxy",
			"type": "boolean",
			"default": true,
			"description": "Print via Proxy",
			"routing": {
				"send": {
					"property": "iface_print_via_proxy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Printbill",
			"name": "iface_printbill",
			"type": "boolean",
			"default": true,
			"description": "Bill Printing",
			"routing": {
				"send": {
					"property": "iface_printbill",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Scan Via Proxy",
			"name": "iface_scan_via_proxy",
			"type": "boolean",
			"default": true,
			"description": "Scan via Proxy",
			"routing": {
				"send": {
					"property": "iface_scan_via_proxy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Splitbill",
			"name": "iface_splitbill",
			"type": "boolean",
			"default": true,
			"description": "Bill Splitting",
			"routing": {
				"send": {
					"property": "iface_splitbill",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Start Categ ID",
			"name": "iface_start_categ_id",
			"type": "number",
			"default": 0,
			"description": "ID of related pos.category",
			"routing": {
				"send": {
					"property": "iface_start_categ_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Tax Included",
			"name": "iface_tax_included",
			"type": "string",
			"default": "",
			"description": "Tax Display",
			"routing": {
				"send": {
					"property": "iface_tax_included",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Iface Tipproduct",
			"name": "iface_tipproduct",
			"type": "boolean",
			"default": true,
			"description": "Product tips",
			"routing": {
				"send": {
					"property": "iface_tipproduct",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Invoice Journal ID",
			"name": "invoice_journal_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.journal",
			"routing": {
				"send": {
					"property": "invoice_journal_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Is Header Or Footer",
			"name": "is_header_or_footer",
			"type": "boolean",
			"default": true,
			"description": "Custom Header & Footer",
			"routing": {
				"send": {
					"property": "is_header_or_footer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Is Installed Account Accountant",
			"name": "is_installed_account_accountant",
			"type": "boolean",
			"default": true,
			"description": "Is the Full Accounting Installed",
			"routing": {
				"send": {
					"property": "is_installed_account_accountant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Is Margins Costs Accessible To Every User",
			"name": "is_margins_costs_accessible_to_every_user",
			"type": "boolean",
			"default": true,
			"description": "Margins & Costs",
			"routing": {
				"send": {
					"property": "is_margins_costs_accessible_to_every_user",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Is Order Printer",
			"name": "is_order_printer",
			"type": "boolean",
			"default": true,
			"description": "Order Printer",
			"routing": {
				"send": {
					"property": "is_order_printer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Is Posbox",
			"name": "is_posbox",
			"type": "boolean",
			"default": true,
			"description": "PosBox",
			"routing": {
				"send": {
					"property": "is_posbox",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
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
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Last Session Closing Cash",
			"name": "last_session_closing_cash",
			"type": "number",
			"default": 0,
			"description": "Last Session Closing Cash",
			"routing": {
				"send": {
					"property": "last_session_closing_cash",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Last Session Closing Date",
			"name": "last_session_closing_date",
			"type": "string",
			"default": "",
			"description": "Last Session Closing Date",
			"routing": {
				"send": {
					"property": "last_session_closing_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Limit Categories",
			"name": "limit_categories",
			"type": "boolean",
			"default": true,
			"description": "Restrict Categories",
			"routing": {
				"send": {
					"property": "limit_categories",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Manual Discount",
			"name": "manual_discount",
			"type": "boolean",
			"default": true,
			"description": "Line Discounts",
			"routing": {
				"send": {
					"property": "manual_discount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Module Pos Discount",
			"name": "module_pos_discount",
			"type": "boolean",
			"default": true,
			"description": "Global Discounts",
			"routing": {
				"send": {
					"property": "module_pos_discount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Module Pos Hr",
			"name": "module_pos_hr",
			"type": "boolean",
			"default": true,
			"description": "Module Pos Hr",
			"routing": {
				"send": {
					"property": "module_pos_hr",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Module Pos Mercury",
			"name": "module_pos_mercury",
			"type": "boolean",
			"default": true,
			"description": "Integrated Card Payments",
			"routing": {
				"send": {
					"property": "module_pos_mercury",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Module Pos Restaurant",
			"name": "module_pos_restaurant",
			"type": "boolean",
			"default": true,
			"description": "Is a Bar/Restaurant",
			"routing": {
				"send": {
					"property": "module_pos_restaurant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Module Pos Restaurant Appointment",
			"name": "module_pos_restaurant_appointment",
			"type": "boolean",
			"default": true,
			"description": "Table Booking",
			"routing": {
				"send": {
					"property": "module_pos_restaurant_appointment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Point of Sale",
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
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Number Of Rescue Session",
			"name": "number_of_rescue_session",
			"type": "number",
			"default": 0,
			"description": "Number of Rescue Session",
			"routing": {
				"send": {
					"property": "number_of_rescue_session",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Only Round Cash Method",
			"name": "only_round_cash_method",
			"type": "boolean",
			"default": true,
			"description": "Only apply rounding on cash",
			"routing": {
				"send": {
					"property": "only_round_cash_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Other Devices",
			"name": "other_devices",
			"type": "boolean",
			"default": true,
			"description": "Other Devices",
			"routing": {
				"send": {
					"property": "other_devices",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Payment Method Ids",
			"name": "payment_method_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Payment Methods (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "payment_method_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
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
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Picking Type ID",
			"name": "picking_type_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.picking.type",
			"routing": {
				"send": {
					"property": "picking_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Pos Session Duration",
			"name": "pos_session_duration",
			"type": "string",
			"default": "",
			"description": "Pos Session Duration",
			"routing": {
				"send": {
					"property": "pos_session_duration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Pos Session State",
			"name": "pos_session_state",
			"type": "string",
			"default": "",
			"description": "Pos Session State",
			"routing": {
				"send": {
					"property": "pos_session_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Pos Session Username",
			"name": "pos_session_username",
			"type": "string",
			"default": "",
			"description": "Pos Session Username",
			"routing": {
				"send": {
					"property": "pos_session_username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
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
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Printer Ids",
			"name": "printer_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Order Printers (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "printer_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Proxy Ip",
			"name": "proxy_ip",
			"type": "string",
			"default": "",
			"description": "IP Address",
			"routing": {
				"send": {
					"property": "proxy_ip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Receipt Footer",
			"name": "receipt_footer",
			"type": "string",
			"default": "",
			"description": "Receipt Footer",
			"routing": {
				"send": {
					"property": "receipt_footer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Receipt Header",
			"name": "receipt_header",
			"type": "string",
			"default": "",
			"description": "Receipt Header",
			"routing": {
				"send": {
					"property": "receipt_header",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Restrict Price Control",
			"name": "restrict_price_control",
			"type": "boolean",
			"default": true,
			"description": "Restrict Price Modifications to Managers",
			"routing": {
				"send": {
					"property": "restrict_price_control",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Rounding Method",
			"name": "rounding_method",
			"type": "number",
			"default": 0,
			"description": "ID of related account.cash.rounding",
			"routing": {
				"send": {
					"property": "rounding_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
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
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Self Order Online Payment Method ID",
			"name": "self_order_online_payment_method_id",
			"type": "number",
			"default": 0,
			"description": "ID of related pos.payment.method",
			"routing": {
				"send": {
					"property": "self_order_online_payment_method_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Self Ordering Alternative Fp ID",
			"name": "self_ordering_alternative_fp_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.fiscal.position",
			"routing": {
				"send": {
					"property": "self_ordering_alternative_fp_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Self Ordering Available Language Ids",
			"name": "self_ordering_available_language_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Available Languages (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "self_ordering_available_language_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Self Ordering Default Language ID",
			"name": "self_ordering_default_language_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.lang",
			"routing": {
				"send": {
					"property": "self_ordering_default_language_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Self Ordering Default User ID",
			"name": "self_ordering_default_user_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.users",
			"routing": {
				"send": {
					"property": "self_ordering_default_user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Self Ordering Image Brand",
			"name": "self_ordering_image_brand",
			"type": "string",
			"default": "",
			"description": "Self Order Kiosk Image Brand",
			"routing": {
				"send": {
					"property": "self_ordering_image_brand",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Self Ordering Image Brand Name",
			"name": "self_ordering_image_brand_name",
			"type": "string",
			"default": "",
			"description": "Self Order Kiosk Image Brand Name",
			"routing": {
				"send": {
					"property": "self_ordering_image_brand_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Self Ordering Image Home Ids",
			"name": "self_ordering_image_home_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Add images (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "self_ordering_image_home_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Self Ordering Mode",
			"name": "self_ordering_mode",
			"type": "string",
			"default": "",
			"description": "Self Ordering Mode",
			"routing": {
				"send": {
					"property": "self_ordering_mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Self Ordering Pay After",
			"name": "self_ordering_pay_after",
			"type": "string",
			"default": "",
			"description": "Pay After:",
			"routing": {
				"send": {
					"property": "self_ordering_pay_after",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Self Ordering Service Mode",
			"name": "self_ordering_service_mode",
			"type": "string",
			"default": "",
			"description": "Service",
			"routing": {
				"send": {
					"property": "self_ordering_service_mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Self Ordering Takeaway",
			"name": "self_ordering_takeaway",
			"type": "boolean",
			"default": true,
			"description": "Takeaway",
			"routing": {
				"send": {
					"property": "self_ordering_takeaway",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Self Ordering URL",
			"name": "self_ordering_url",
			"type": "string",
			"default": "",
			"description": "Self Ordering Url",
			"routing": {
				"send": {
					"property": "self_ordering_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Sequence ID",
			"name": "sequence_id",
			"type": "number",
			"default": 0,
			"description": "ID of related ir.sequence",
			"routing": {
				"send": {
					"property": "sequence_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Sequence Line ID",
			"name": "sequence_line_id",
			"type": "number",
			"default": 0,
			"description": "ID of related ir.sequence",
			"routing": {
				"send": {
					"property": "sequence_line_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Set Maximum Difference",
			"name": "set_maximum_difference",
			"type": "boolean",
			"default": true,
			"description": "Set Maximum Difference",
			"routing": {
				"send": {
					"property": "set_maximum_difference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Set Tip After Payment",
			"name": "set_tip_after_payment",
			"type": "boolean",
			"default": true,
			"description": "Set Tip After Payment",
			"routing": {
				"send": {
					"property": "set_tip_after_payment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Ship Later",
			"name": "ship_later",
			"type": "boolean",
			"default": true,
			"description": "Ship Later",
			"routing": {
				"send": {
					"property": "ship_later",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Start Category",
			"name": "start_category",
			"type": "boolean",
			"default": true,
			"description": "Start Category",
			"routing": {
				"send": {
					"property": "start_category",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "string",
			"default": "",
			"description": "Status",
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Tax Regime Selection",
			"name": "tax_regime_selection",
			"type": "boolean",
			"default": true,
			"description": "Tax Regime Selection value",
			"routing": {
				"send": {
					"property": "tax_regime_selection",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Tip Product ID",
			"name": "tip_product_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.product",
			"routing": {
				"send": {
					"property": "tip_product_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Trusted Config Ids",
			"name": "trusted_config_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Trusted Point of Sale Configurations (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "trusted_config_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Use Pricelist",
			"name": "use_pricelist",
			"type": "boolean",
			"default": true,
			"description": "Use a pricelist.",
			"routing": {
				"send": {
					"property": "use_pricelist",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Uuid",
			"name": "uuid",
			"type": "string",
			"default": "",
			"description": "Uuid",
			"routing": {
				"send": {
					"property": "uuid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Config"
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
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Pos"
					],
					"operation": [
						"Update Pos Config"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/pos.config/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Delete Pos Config"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Record ID to delete",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Delete Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Pos"
					],
					"operation": [
						"Delete Pos Config"
					]
				}
			}
		},
		{
			"displayName": "POST /api/pos.config/{id}/call",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Call Pos Config"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Call Pos Config"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Method",
			"name": "method",
			"type": "string",
			"default": "action_confirm",
			"description": "Method name to call",
			"routing": {
				"send": {
					"property": "method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Call Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Args",
			"name": "args",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Positional arguments",
			"routing": {
				"send": {
					"property": "args",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Call Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Kwargs",
			"name": "kwargs",
			"type": "json",
			"default": "{}",
			"description": "Keyword arguments",
			"routing": {
				"send": {
					"property": "kwargs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Call Pos Config"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Pos"
					],
					"operation": [
						"Call Pos Config"
					]
				}
			}
		},
		{
			"displayName": "GET /api/pos.order",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Search Pos Order"
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
						"Pos"
					],
					"operation": [
						"Search Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,default_code,list_price",
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
						"Pos"
					],
					"operation": [
						"Search Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 80,
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
						"Pos"
					],
					"operation": [
						"Search Pos Order"
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
						"Pos"
					],
					"operation": [
						"Search Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order, e.g. 'name asc' or 'create_date desc'",
			"default": "",
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
						"Pos"
					],
					"operation": [
						"Search Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Pos"
					],
					"operation": [
						"Search Pos Order"
					]
				}
			}
		},
		{
			"displayName": "POST /api/pos.order",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
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
						"Pos"
					],
					"operation": [
						"Create Pos Order"
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
						"Pos"
					],
					"operation": [
						"Create Pos Order"
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
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Account Move",
			"name": "account_move",
			"type": "number",
			"default": 0,
			"description": "ID of related account.move",
			"routing": {
				"send": {
					"property": "account_move",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Amount Paid",
			"name": "amount_paid",
			"type": "number",
			"default": 0,
			"description": "Paid",
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
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Amount Return",
			"name": "amount_return",
			"type": "number",
			"default": 0,
			"description": "Returned",
			"routing": {
				"send": {
					"property": "amount_return",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"required": true,
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
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"required": true,
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
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Cashier",
			"name": "cashier",
			"type": "string",
			"default": "",
			"description": "Cashier",
			"routing": {
				"send": {
					"property": "cashier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"required": true,
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
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Config ID",
			"name": "config_id",
			"type": "number",
			"default": 0,
			"description": "ID of related pos.config",
			"routing": {
				"send": {
					"property": "config_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Country Code",
			"name": "country_code",
			"type": "string",
			"default": "",
			"description": "Country Code",
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
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Crm Team ID",
			"name": "crm_team_id",
			"type": "number",
			"default": 0,
			"description": "ID of related crm.team",
			"routing": {
				"send": {
					"property": "crm_team_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
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
						"Pos"
					],
					"operation": [
						"Create Pos Order"
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
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Customer Count",
			"name": "customer_count",
			"type": "number",
			"default": 0,
			"description": "Guests",
			"routing": {
				"send": {
					"property": "customer_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Date Order",
			"name": "date_order",
			"type": "string",
			"default": "",
			"description": "Date",
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
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Employee ID",
			"name": "employee_id",
			"type": "number",
			"default": 0,
			"description": "ID of related hr.employee",
			"routing": {
				"send": {
					"property": "employee_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Failed Pickings",
			"name": "failed_pickings",
			"type": "boolean",
			"default": true,
			"description": "Failed Pickings",
			"routing": {
				"send": {
					"property": "failed_pickings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
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
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Has Refundable Lines",
			"name": "has_refundable_lines",
			"type": "boolean",
			"default": true,
			"description": "Has Refundable Lines",
			"routing": {
				"send": {
					"property": "has_refundable_lines",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Is Invoiced",
			"name": "is_invoiced",
			"type": "boolean",
			"default": true,
			"description": "Is Invoiced",
			"routing": {
				"send": {
					"property": "is_invoiced",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Is Refunded",
			"name": "is_refunded",
			"type": "boolean",
			"default": true,
			"description": "Is Refunded",
			"routing": {
				"send": {
					"property": "is_refunded",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Is Tipped",
			"name": "is_tipped",
			"type": "boolean",
			"default": true,
			"description": "Is this already tipped?",
			"routing": {
				"send": {
					"property": "is_tipped",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Is Total Cost Computed",
			"name": "is_total_cost_computed",
			"type": "boolean",
			"default": true,
			"description": "Is Total Cost Computed",
			"routing": {
				"send": {
					"property": "is_total_cost_computed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Last Order Preparation Change",
			"name": "last_order_preparation_change",
			"type": "string",
			"default": "",
			"description": "Last preparation change",
			"routing": {
				"send": {
					"property": "last_order_preparation_change",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Margin",
			"name": "margin",
			"type": "number",
			"default": 0,
			"description": "Margin",
			"routing": {
				"send": {
					"property": "margin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Margin Percent",
			"name": "margin_percent",
			"type": "number",
			"default": 0,
			"description": "Margin (%)",
			"routing": {
				"send": {
					"property": "margin_percent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Order Ref",
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
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Nb Print",
			"name": "nb_print",
			"type": "number",
			"default": 0,
			"description": "Number of Print",
			"routing": {
				"send": {
					"property": "nb_print",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Next Online Payment Amount",
			"name": "next_online_payment_amount",
			"type": "number",
			"default": 0,
			"description": "Next online payment amount to pay",
			"routing": {
				"send": {
					"property": "next_online_payment_amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Note",
			"name": "note",
			"type": "string",
			"default": "",
			"description": "Internal Notes",
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
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Online Payment Method ID",
			"name": "online_payment_method_id",
			"type": "number",
			"default": 0,
			"description": "ID of related pos.payment.method",
			"routing": {
				"send": {
					"property": "online_payment_method_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
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
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Picking Count",
			"name": "picking_count",
			"type": "number",
			"default": 0,
			"description": "Picking Count",
			"routing": {
				"send": {
					"property": "picking_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Picking Type ID",
			"name": "picking_type_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.picking.type",
			"routing": {
				"send": {
					"property": "picking_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Pos Reference",
			"name": "pos_reference",
			"type": "string",
			"default": "",
			"description": "Receipt Number",
			"routing": {
				"send": {
					"property": "pos_reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
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
						"Pos"
					],
					"operation": [
						"Create Pos Order"
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
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Refund Orders Count",
			"name": "refund_orders_count",
			"type": "number",
			"default": 0,
			"description": "Number of Refund Orders",
			"routing": {
				"send": {
					"property": "refund_orders_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Refunded Order Ids",
			"name": "refunded_order_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Refunded Order (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "refunded_order_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Refunded Orders Count",
			"name": "refunded_orders_count",
			"type": "number",
			"default": 0,
			"description": "Refunded Orders Count",
			"routing": {
				"send": {
					"property": "refunded_orders_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Sale Journal",
			"name": "sale_journal",
			"type": "number",
			"default": 0,
			"description": "ID of related account.journal",
			"routing": {
				"send": {
					"property": "sale_journal",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Sale Order Count",
			"name": "sale_order_count",
			"type": "number",
			"default": 0,
			"description": "Sale Order Count",
			"routing": {
				"send": {
					"property": "sale_order_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Sequence Number",
			"name": "sequence_number",
			"type": "number",
			"default": 0,
			"description": "Sequence Number",
			"routing": {
				"send": {
					"property": "sequence_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Session ID",
			"name": "session_id",
			"type": "number",
			"default": 0,
			"description": "ID of related pos.session",
			"routing": {
				"send": {
					"property": "session_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Session Move ID",
			"name": "session_move_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.move",
			"routing": {
				"send": {
					"property": "session_move_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Shipping Date",
			"name": "shipping_date",
			"type": "string",
			"default": "",
			"description": "Shipping Date",
			"routing": {
				"send": {
					"property": "shipping_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
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
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Table ID",
			"name": "table_id",
			"type": "number",
			"default": 0,
			"description": "ID of related restaurant.table",
			"routing": {
				"send": {
					"property": "table_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Table Stand Number",
			"name": "table_stand_number",
			"type": "string",
			"default": "",
			"description": "Table Stand Number",
			"routing": {
				"send": {
					"property": "table_stand_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Take Away",
			"name": "take_away",
			"type": "boolean",
			"default": true,
			"description": "Take Away",
			"routing": {
				"send": {
					"property": "take_away",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Ticket Code",
			"name": "ticket_code",
			"type": "string",
			"default": "",
			"description": "Ticket Code",
			"routing": {
				"send": {
					"property": "ticket_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Tip Amount",
			"name": "tip_amount",
			"type": "number",
			"default": 0,
			"description": "Tip Amount",
			"routing": {
				"send": {
					"property": "tip_amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "To Invoice",
			"name": "to_invoice",
			"type": "boolean",
			"default": true,
			"description": "To invoice",
			"routing": {
				"send": {
					"property": "to_invoice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Tracking Number",
			"name": "tracking_number",
			"type": "string",
			"default": "",
			"description": "Order Number",
			"routing": {
				"send": {
					"property": "tracking_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Use Self Order Online Payment",
			"name": "use_self_order_online_payment",
			"type": "boolean",
			"default": true,
			"description": "Use Self Order Online Payment",
			"routing": {
				"send": {
					"property": "use_self_order_online_payment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order"
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
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Pos"
					],
					"operation": [
						"Create Pos Order"
					]
				}
			}
		},
		{
			"displayName": "GET /api/pos.order/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Get Pos Order"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Record ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Get Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "",
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
						"Pos"
					],
					"operation": [
						"Get Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Pos"
					],
					"operation": [
						"Get Pos Order"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/pos.order/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Record ID to update",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
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
						"Pos"
					],
					"operation": [
						"Update Pos Order"
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
						"Pos"
					],
					"operation": [
						"Update Pos Order"
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
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Account Move",
			"name": "account_move",
			"type": "number",
			"default": 0,
			"description": "ID of related account.move",
			"routing": {
				"send": {
					"property": "account_move",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Amount Paid",
			"name": "amount_paid",
			"type": "number",
			"default": 0,
			"description": "Paid",
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
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Amount Return",
			"name": "amount_return",
			"type": "number",
			"default": 0,
			"description": "Returned",
			"routing": {
				"send": {
					"property": "amount_return",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
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
						"Pos"
					],
					"operation": [
						"Update Pos Order"
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
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Cashier",
			"name": "cashier",
			"type": "string",
			"default": "",
			"description": "Cashier",
			"routing": {
				"send": {
					"property": "cashier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
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
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Config ID",
			"name": "config_id",
			"type": "number",
			"default": 0,
			"description": "ID of related pos.config",
			"routing": {
				"send": {
					"property": "config_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Country Code",
			"name": "country_code",
			"type": "string",
			"default": "",
			"description": "Country Code",
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
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Crm Team ID",
			"name": "crm_team_id",
			"type": "number",
			"default": 0,
			"description": "ID of related crm.team",
			"routing": {
				"send": {
					"property": "crm_team_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
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
						"Pos"
					],
					"operation": [
						"Update Pos Order"
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
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Customer Count",
			"name": "customer_count",
			"type": "number",
			"default": 0,
			"description": "Guests",
			"routing": {
				"send": {
					"property": "customer_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Date Order",
			"name": "date_order",
			"type": "string",
			"default": "",
			"description": "Date",
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
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Employee ID",
			"name": "employee_id",
			"type": "number",
			"default": 0,
			"description": "ID of related hr.employee",
			"routing": {
				"send": {
					"property": "employee_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Failed Pickings",
			"name": "failed_pickings",
			"type": "boolean",
			"default": true,
			"description": "Failed Pickings",
			"routing": {
				"send": {
					"property": "failed_pickings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
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
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Has Refundable Lines",
			"name": "has_refundable_lines",
			"type": "boolean",
			"default": true,
			"description": "Has Refundable Lines",
			"routing": {
				"send": {
					"property": "has_refundable_lines",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Is Invoiced",
			"name": "is_invoiced",
			"type": "boolean",
			"default": true,
			"description": "Is Invoiced",
			"routing": {
				"send": {
					"property": "is_invoiced",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Is Refunded",
			"name": "is_refunded",
			"type": "boolean",
			"default": true,
			"description": "Is Refunded",
			"routing": {
				"send": {
					"property": "is_refunded",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Is Tipped",
			"name": "is_tipped",
			"type": "boolean",
			"default": true,
			"description": "Is this already tipped?",
			"routing": {
				"send": {
					"property": "is_tipped",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Is Total Cost Computed",
			"name": "is_total_cost_computed",
			"type": "boolean",
			"default": true,
			"description": "Is Total Cost Computed",
			"routing": {
				"send": {
					"property": "is_total_cost_computed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Last Order Preparation Change",
			"name": "last_order_preparation_change",
			"type": "string",
			"default": "",
			"description": "Last preparation change",
			"routing": {
				"send": {
					"property": "last_order_preparation_change",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Margin",
			"name": "margin",
			"type": "number",
			"default": 0,
			"description": "Margin",
			"routing": {
				"send": {
					"property": "margin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Margin Percent",
			"name": "margin_percent",
			"type": "number",
			"default": 0,
			"description": "Margin (%)",
			"routing": {
				"send": {
					"property": "margin_percent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Order Ref",
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
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Nb Print",
			"name": "nb_print",
			"type": "number",
			"default": 0,
			"description": "Number of Print",
			"routing": {
				"send": {
					"property": "nb_print",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Next Online Payment Amount",
			"name": "next_online_payment_amount",
			"type": "number",
			"default": 0,
			"description": "Next online payment amount to pay",
			"routing": {
				"send": {
					"property": "next_online_payment_amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Note",
			"name": "note",
			"type": "string",
			"default": "",
			"description": "Internal Notes",
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
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Online Payment Method ID",
			"name": "online_payment_method_id",
			"type": "number",
			"default": 0,
			"description": "ID of related pos.payment.method",
			"routing": {
				"send": {
					"property": "online_payment_method_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
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
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Picking Count",
			"name": "picking_count",
			"type": "number",
			"default": 0,
			"description": "Picking Count",
			"routing": {
				"send": {
					"property": "picking_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Picking Type ID",
			"name": "picking_type_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.picking.type",
			"routing": {
				"send": {
					"property": "picking_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Pos Reference",
			"name": "pos_reference",
			"type": "string",
			"default": "",
			"description": "Receipt Number",
			"routing": {
				"send": {
					"property": "pos_reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
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
						"Pos"
					],
					"operation": [
						"Update Pos Order"
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
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Refund Orders Count",
			"name": "refund_orders_count",
			"type": "number",
			"default": 0,
			"description": "Number of Refund Orders",
			"routing": {
				"send": {
					"property": "refund_orders_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Refunded Order Ids",
			"name": "refunded_order_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Refunded Order (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "refunded_order_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Refunded Orders Count",
			"name": "refunded_orders_count",
			"type": "number",
			"default": 0,
			"description": "Refunded Orders Count",
			"routing": {
				"send": {
					"property": "refunded_orders_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Sale Journal",
			"name": "sale_journal",
			"type": "number",
			"default": 0,
			"description": "ID of related account.journal",
			"routing": {
				"send": {
					"property": "sale_journal",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Sale Order Count",
			"name": "sale_order_count",
			"type": "number",
			"default": 0,
			"description": "Sale Order Count",
			"routing": {
				"send": {
					"property": "sale_order_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Sequence Number",
			"name": "sequence_number",
			"type": "number",
			"default": 0,
			"description": "Sequence Number",
			"routing": {
				"send": {
					"property": "sequence_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "session_id",
			"type": "number",
			"default": 0,
			"description": "ID of related pos.session",
			"routing": {
				"send": {
					"property": "session_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Session Move ID",
			"name": "session_move_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.move",
			"routing": {
				"send": {
					"property": "session_move_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Shipping Date",
			"name": "shipping_date",
			"type": "string",
			"default": "",
			"description": "Shipping Date",
			"routing": {
				"send": {
					"property": "shipping_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
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
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Table ID",
			"name": "table_id",
			"type": "number",
			"default": 0,
			"description": "ID of related restaurant.table",
			"routing": {
				"send": {
					"property": "table_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Table Stand Number",
			"name": "table_stand_number",
			"type": "string",
			"default": "",
			"description": "Table Stand Number",
			"routing": {
				"send": {
					"property": "table_stand_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Take Away",
			"name": "take_away",
			"type": "boolean",
			"default": true,
			"description": "Take Away",
			"routing": {
				"send": {
					"property": "take_away",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Ticket Code",
			"name": "ticket_code",
			"type": "string",
			"default": "",
			"description": "Ticket Code",
			"routing": {
				"send": {
					"property": "ticket_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Tip Amount",
			"name": "tip_amount",
			"type": "number",
			"default": 0,
			"description": "Tip Amount",
			"routing": {
				"send": {
					"property": "tip_amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "To Invoice",
			"name": "to_invoice",
			"type": "boolean",
			"default": true,
			"description": "To invoice",
			"routing": {
				"send": {
					"property": "to_invoice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Tracking Number",
			"name": "tracking_number",
			"type": "string",
			"default": "",
			"description": "Order Number",
			"routing": {
				"send": {
					"property": "tracking_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Use Self Order Online Payment",
			"name": "use_self_order_online_payment",
			"type": "boolean",
			"default": true,
			"description": "Use Self Order Online Payment",
			"routing": {
				"send": {
					"property": "use_self_order_online_payment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order"
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
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Pos"
					],
					"operation": [
						"Update Pos Order"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/pos.order/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Delete Pos Order"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Record ID to delete",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Delete Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Pos"
					],
					"operation": [
						"Delete Pos Order"
					]
				}
			}
		},
		{
			"displayName": "POST /api/pos.order/{id}/call",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Call Pos Order"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Call Pos Order"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Method",
			"name": "method",
			"type": "string",
			"default": "action_confirm",
			"description": "Method name to call",
			"routing": {
				"send": {
					"property": "method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Call Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Args",
			"name": "args",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Positional arguments",
			"routing": {
				"send": {
					"property": "args",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Call Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Kwargs",
			"name": "kwargs",
			"type": "json",
			"default": "{}",
			"description": "Keyword arguments",
			"routing": {
				"send": {
					"property": "kwargs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Call Pos Order"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Pos"
					],
					"operation": [
						"Call Pos Order"
					]
				}
			}
		},
		{
			"displayName": "GET /api/pos.order.line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Search Pos Order Line"
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
						"Pos"
					],
					"operation": [
						"Search Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,default_code,list_price",
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
						"Pos"
					],
					"operation": [
						"Search Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 80,
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
						"Pos"
					],
					"operation": [
						"Search Pos Order Line"
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
						"Pos"
					],
					"operation": [
						"Search Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order, e.g. 'name asc' or 'create_date desc'",
			"default": "",
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
						"Pos"
					],
					"operation": [
						"Search Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Pos"
					],
					"operation": [
						"Search Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "POST /api/pos.order.line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Attribute Value Ids",
			"name": "attribute_value_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Selected Attributes (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "attribute_value_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Combo ID",
			"name": "combo_id",
			"type": "number",
			"default": 0,
			"description": "ID of related pos.combo",
			"routing": {
				"send": {
					"property": "combo_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Combo Parent ID",
			"name": "combo_parent_id",
			"type": "number",
			"default": 0,
			"description": "ID of related pos.order.line",
			"routing": {
				"send": {
					"property": "combo_parent_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
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
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
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
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Customer Note",
			"name": "customer_note",
			"type": "string",
			"default": "",
			"description": "Customer Note",
			"routing": {
				"send": {
					"property": "customer_note",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
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
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Down Payment Details",
			"name": "down_payment_details",
			"type": "string",
			"default": "",
			"description": "Down Payment Details",
			"routing": {
				"send": {
					"property": "down_payment_details",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Full Product Name",
			"name": "full_product_name",
			"type": "string",
			"default": "",
			"description": "Full Product Name",
			"routing": {
				"send": {
					"property": "full_product_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Is Total Cost Computed",
			"name": "is_total_cost_computed",
			"type": "boolean",
			"default": true,
			"description": "Is Total Cost Computed",
			"routing": {
				"send": {
					"property": "is_total_cost_computed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Margin",
			"name": "margin",
			"type": "number",
			"default": 0,
			"description": "Margin",
			"routing": {
				"send": {
					"property": "margin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Margin Percent",
			"name": "margin_percent",
			"type": "number",
			"default": 0,
			"description": "Margin (%)",
			"routing": {
				"send": {
					"property": "margin_percent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Line No",
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
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Note",
			"name": "note",
			"type": "string",
			"default": "",
			"description": "Internal Note added by the waiter.",
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
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Notice",
			"name": "notice",
			"type": "string",
			"default": "",
			"description": "Discount Notice",
			"routing": {
				"send": {
					"property": "notice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Order ID",
			"name": "order_id",
			"type": "number",
			"default": 0,
			"description": "ID of related pos.order",
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
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Price Extra",
			"name": "price_extra",
			"type": "number",
			"default": 0,
			"description": "Price extra",
			"routing": {
				"send": {
					"property": "price_extra",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Price Subtotal",
			"name": "price_subtotal",
			"type": "number",
			"default": 0,
			"description": "Subtotal w/o Tax",
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
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Price Subtotal Incl",
			"name": "price_subtotal_incl",
			"type": "number",
			"default": 0,
			"description": "Subtotal",
			"routing": {
				"send": {
					"property": "price_subtotal_incl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
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
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"required": true,
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
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Product Uom ID",
			"name": "product_uom_id",
			"type": "number",
			"default": 0,
			"description": "ID of related uom.uom",
			"routing": {
				"send": {
					"property": "product_uom_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Qty",
			"name": "qty",
			"type": "number",
			"default": 0,
			"description": "Quantity",
			"routing": {
				"send": {
					"property": "qty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Refunded Orderline ID",
			"name": "refunded_orderline_id",
			"type": "number",
			"default": 0,
			"description": "ID of related pos.order.line",
			"routing": {
				"send": {
					"property": "refunded_orderline_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Refunded Qty",
			"name": "refunded_qty",
			"type": "number",
			"default": 0,
			"description": "Refunded Quantity",
			"routing": {
				"send": {
					"property": "refunded_qty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Sale Order Line ID",
			"name": "sale_order_line_id",
			"type": "number",
			"default": 0,
			"description": "ID of related sale.order.line",
			"routing": {
				"send": {
					"property": "sale_order_line_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Sale Order Origin ID",
			"name": "sale_order_origin_id",
			"type": "number",
			"default": 0,
			"description": "ID of related sale.order",
			"routing": {
				"send": {
					"property": "sale_order_origin_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Skip Change",
			"name": "skip_change",
			"type": "boolean",
			"default": true,
			"description": "Skip line when sending ticket to kitchen printers.",
			"routing": {
				"send": {
					"property": "skip_change",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Tax Ids",
			"name": "tax_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Taxes (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "tax_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Tax Ids After Fiscal Position",
			"name": "tax_ids_after_fiscal_position",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Taxes to Apply (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "tax_ids_after_fiscal_position",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Total Cost",
			"name": "total_cost",
			"type": "number",
			"default": 0,
			"description": "Total cost",
			"routing": {
				"send": {
					"property": "total_cost",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Uuid",
			"name": "uuid",
			"type": "string",
			"default": "",
			"description": "Uuid",
			"routing": {
				"send": {
					"property": "uuid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Pos"
					],
					"operation": [
						"Create Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "GET /api/pos.order.line/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Get Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Record ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Get Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "",
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
						"Pos"
					],
					"operation": [
						"Get Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Pos"
					],
					"operation": [
						"Get Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/pos.order.line/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Record ID to update",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Attribute Value Ids",
			"name": "attribute_value_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Selected Attributes (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "attribute_value_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Combo ID",
			"name": "combo_id",
			"type": "number",
			"default": 0,
			"description": "ID of related pos.combo",
			"routing": {
				"send": {
					"property": "combo_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Combo Parent ID",
			"name": "combo_parent_id",
			"type": "number",
			"default": 0,
			"description": "ID of related pos.order.line",
			"routing": {
				"send": {
					"property": "combo_parent_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
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
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
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
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Customer Note",
			"name": "customer_note",
			"type": "string",
			"default": "",
			"description": "Customer Note",
			"routing": {
				"send": {
					"property": "customer_note",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
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
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Down Payment Details",
			"name": "down_payment_details",
			"type": "string",
			"default": "",
			"description": "Down Payment Details",
			"routing": {
				"send": {
					"property": "down_payment_details",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Full Product Name",
			"name": "full_product_name",
			"type": "string",
			"default": "",
			"description": "Full Product Name",
			"routing": {
				"send": {
					"property": "full_product_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Is Total Cost Computed",
			"name": "is_total_cost_computed",
			"type": "boolean",
			"default": true,
			"description": "Is Total Cost Computed",
			"routing": {
				"send": {
					"property": "is_total_cost_computed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Margin",
			"name": "margin",
			"type": "number",
			"default": 0,
			"description": "Margin",
			"routing": {
				"send": {
					"property": "margin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Margin Percent",
			"name": "margin_percent",
			"type": "number",
			"default": 0,
			"description": "Margin (%)",
			"routing": {
				"send": {
					"property": "margin_percent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Line No",
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
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Note",
			"name": "note",
			"type": "string",
			"default": "",
			"description": "Internal Note added by the waiter.",
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
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Notice",
			"name": "notice",
			"type": "string",
			"default": "",
			"description": "Discount Notice",
			"routing": {
				"send": {
					"property": "notice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "order_id",
			"type": "number",
			"default": 0,
			"description": "ID of related pos.order",
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
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Price Extra",
			"name": "price_extra",
			"type": "number",
			"default": 0,
			"description": "Price extra",
			"routing": {
				"send": {
					"property": "price_extra",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Price Subtotal",
			"name": "price_subtotal",
			"type": "number",
			"default": 0,
			"description": "Subtotal w/o Tax",
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
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Price Subtotal Incl",
			"name": "price_subtotal_incl",
			"type": "number",
			"default": 0,
			"description": "Subtotal",
			"routing": {
				"send": {
					"property": "price_subtotal_incl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
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
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
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
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Product Uom ID",
			"name": "product_uom_id",
			"type": "number",
			"default": 0,
			"description": "ID of related uom.uom",
			"routing": {
				"send": {
					"property": "product_uom_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Qty",
			"name": "qty",
			"type": "number",
			"default": 0,
			"description": "Quantity",
			"routing": {
				"send": {
					"property": "qty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Refunded Orderline ID",
			"name": "refunded_orderline_id",
			"type": "number",
			"default": 0,
			"description": "ID of related pos.order.line",
			"routing": {
				"send": {
					"property": "refunded_orderline_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Refunded Qty",
			"name": "refunded_qty",
			"type": "number",
			"default": 0,
			"description": "Refunded Quantity",
			"routing": {
				"send": {
					"property": "refunded_qty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Sale Order Line ID",
			"name": "sale_order_line_id",
			"type": "number",
			"default": 0,
			"description": "ID of related sale.order.line",
			"routing": {
				"send": {
					"property": "sale_order_line_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Sale Order Origin ID",
			"name": "sale_order_origin_id",
			"type": "number",
			"default": 0,
			"description": "ID of related sale.order",
			"routing": {
				"send": {
					"property": "sale_order_origin_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Skip Change",
			"name": "skip_change",
			"type": "boolean",
			"default": true,
			"description": "Skip line when sending ticket to kitchen printers.",
			"routing": {
				"send": {
					"property": "skip_change",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Tax Ids",
			"name": "tax_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Taxes (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "tax_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Tax Ids After Fiscal Position",
			"name": "tax_ids_after_fiscal_position",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Taxes to Apply (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "tax_ids_after_fiscal_position",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Total Cost",
			"name": "total_cost",
			"type": "number",
			"default": 0,
			"description": "Total cost",
			"routing": {
				"send": {
					"property": "total_cost",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Uuid",
			"name": "uuid",
			"type": "string",
			"default": "",
			"description": "Uuid",
			"routing": {
				"send": {
					"property": "uuid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Pos"
					],
					"operation": [
						"Update Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/pos.order.line/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Delete Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Record ID to delete",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Delete Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Pos"
					],
					"operation": [
						"Delete Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "POST /api/pos.order.line/{id}/call",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Call Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Call Pos Order Line"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Method",
			"name": "method",
			"type": "string",
			"default": "action_confirm",
			"description": "Method name to call",
			"routing": {
				"send": {
					"property": "method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Call Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Args",
			"name": "args",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Positional arguments",
			"routing": {
				"send": {
					"property": "args",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Call Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Kwargs",
			"name": "kwargs",
			"type": "json",
			"default": "{}",
			"description": "Keyword arguments",
			"routing": {
				"send": {
					"property": "kwargs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Call Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Pos"
					],
					"operation": [
						"Call Pos Order Line"
					]
				}
			}
		},
		{
			"displayName": "GET /api/pos.session",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Search Pos Session"
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
						"Pos"
					],
					"operation": [
						"Search Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,default_code,list_price",
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
						"Pos"
					],
					"operation": [
						"Search Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 80,
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
						"Pos"
					],
					"operation": [
						"Search Pos Session"
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
						"Pos"
					],
					"operation": [
						"Search Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order, e.g. 'name asc' or 'create_date desc'",
			"default": "",
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
						"Pos"
					],
					"operation": [
						"Search Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Pos"
					],
					"operation": [
						"Search Pos Session"
					]
				}
			}
		},
		{
			"displayName": "POST /api/pos.session",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Session"
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
						"Pos"
					],
					"operation": [
						"Create Pos Session"
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
						"Pos"
					],
					"operation": [
						"Create Pos Session"
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
						"Pos"
					],
					"operation": [
						"Create Pos Session"
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
						"Pos"
					],
					"operation": [
						"Create Pos Session"
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
						"Pos"
					],
					"operation": [
						"Create Pos Session"
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
						"Pos"
					],
					"operation": [
						"Create Pos Session"
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
						"Pos"
					],
					"operation": [
						"Create Pos Session"
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
						"Pos"
					],
					"operation": [
						"Create Pos Session"
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
						"Pos"
					],
					"operation": [
						"Create Pos Session"
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
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Cash Control",
			"name": "cash_control",
			"type": "boolean",
			"default": true,
			"description": "Has Cash Control",
			"routing": {
				"send": {
					"property": "cash_control",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Cash Journal ID",
			"name": "cash_journal_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.journal",
			"routing": {
				"send": {
					"property": "cash_journal_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Cash Real Transaction",
			"name": "cash_real_transaction",
			"type": "number",
			"default": 0,
			"description": "Transaction",
			"routing": {
				"send": {
					"property": "cash_real_transaction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Cash Register Balance End",
			"name": "cash_register_balance_end",
			"type": "number",
			"default": 0,
			"description": "Theoretical Closing Balance",
			"routing": {
				"send": {
					"property": "cash_register_balance_end",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Cash Register Balance End Real",
			"name": "cash_register_balance_end_real",
			"type": "number",
			"default": 0,
			"description": "Ending Balance",
			"routing": {
				"send": {
					"property": "cash_register_balance_end_real",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Cash Register Balance Start",
			"name": "cash_register_balance_start",
			"type": "number",
			"default": 0,
			"description": "Starting Balance",
			"routing": {
				"send": {
					"property": "cash_register_balance_start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Cash Register Difference",
			"name": "cash_register_difference",
			"type": "number",
			"default": 0,
			"description": "Before Closing Difference",
			"routing": {
				"send": {
					"property": "cash_register_difference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Cash Register Total Entry Encoding",
			"name": "cash_register_total_entry_encoding",
			"type": "number",
			"default": 0,
			"description": "Total Cash Transaction",
			"routing": {
				"send": {
					"property": "cash_register_total_entry_encoding",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Closing Notes",
			"name": "closing_notes",
			"type": "string",
			"default": "",
			"description": "Closing Notes",
			"routing": {
				"send": {
					"property": "closing_notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Session"
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
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Config ID",
			"name": "config_id",
			"type": "number",
			"default": 0,
			"description": "ID of related pos.config",
			"routing": {
				"send": {
					"property": "config_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Crm Team ID",
			"name": "crm_team_id",
			"type": "number",
			"default": 0,
			"description": "ID of related crm.team",
			"routing": {
				"send": {
					"property": "crm_team_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Session"
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
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Failed Pickings",
			"name": "failed_pickings",
			"type": "boolean",
			"default": true,
			"description": "Failed Pickings",
			"routing": {
				"send": {
					"property": "failed_pickings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Session"
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
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Is In Company Currency",
			"name": "is_in_company_currency",
			"type": "boolean",
			"default": true,
			"description": "Is Using Company Currency",
			"routing": {
				"send": {
					"property": "is_in_company_currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Login Number",
			"name": "login_number",
			"type": "number",
			"default": 0,
			"description": "Login Sequence Number",
			"routing": {
				"send": {
					"property": "login_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Session"
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
						"Pos"
					],
					"operation": [
						"Create Pos Session"
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
						"Pos"
					],
					"operation": [
						"Create Pos Session"
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
						"Pos"
					],
					"operation": [
						"Create Pos Session"
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
						"Pos"
					],
					"operation": [
						"Create Pos Session"
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
						"Pos"
					],
					"operation": [
						"Create Pos Session"
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
						"Pos"
					],
					"operation": [
						"Create Pos Session"
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
						"Pos"
					],
					"operation": [
						"Create Pos Session"
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
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Move ID",
			"name": "move_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.move",
			"routing": {
				"send": {
					"property": "move_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Session"
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
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Session ID",
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
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Opening Notes",
			"name": "opening_notes",
			"type": "string",
			"default": "",
			"description": "Opening Notes",
			"routing": {
				"send": {
					"property": "opening_notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Order Count",
			"name": "order_count",
			"type": "number",
			"default": 0,
			"description": "Order Count",
			"routing": {
				"send": {
					"property": "order_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Payment Method Ids",
			"name": "payment_method_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Payment Methods (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "payment_method_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Picking Count",
			"name": "picking_count",
			"type": "number",
			"default": 0,
			"description": "Picking Count",
			"routing": {
				"send": {
					"property": "picking_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Rescue",
			"name": "rescue",
			"type": "boolean",
			"default": true,
			"description": "Recovery Session",
			"routing": {
				"send": {
					"property": "rescue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Sequence Number",
			"name": "sequence_number",
			"type": "number",
			"default": 0,
			"description": "Order Sequence Number",
			"routing": {
				"send": {
					"property": "sequence_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Start At",
			"name": "start_at",
			"type": "string",
			"default": "",
			"description": "Opening Date",
			"routing": {
				"send": {
					"property": "start_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"required": true,
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
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Stop At",
			"name": "stop_at",
			"type": "string",
			"default": "",
			"description": "Closing Date",
			"routing": {
				"send": {
					"property": "stop_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Total Payments Amount",
			"name": "total_payments_amount",
			"type": "number",
			"default": 0,
			"description": "Total Payments Amount",
			"routing": {
				"send": {
					"property": "total_payments_amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Update Stock At Closing",
			"name": "update_stock_at_closing",
			"type": "boolean",
			"default": true,
			"description": "Stock should be updated at closing",
			"routing": {
				"send": {
					"property": "update_stock_at_closing",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"required": true,
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
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Pos"
					],
					"operation": [
						"Create Pos Session"
					]
				}
			}
		},
		{
			"displayName": "GET /api/pos.session/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Get Pos Session"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Record ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Get Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "",
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
						"Pos"
					],
					"operation": [
						"Get Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Pos"
					],
					"operation": [
						"Get Pos Session"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/pos.session/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Record ID to update",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Session"
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
						"Pos"
					],
					"operation": [
						"Update Pos Session"
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
						"Pos"
					],
					"operation": [
						"Update Pos Session"
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
						"Pos"
					],
					"operation": [
						"Update Pos Session"
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
						"Pos"
					],
					"operation": [
						"Update Pos Session"
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
						"Pos"
					],
					"operation": [
						"Update Pos Session"
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
						"Pos"
					],
					"operation": [
						"Update Pos Session"
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
						"Pos"
					],
					"operation": [
						"Update Pos Session"
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
						"Pos"
					],
					"operation": [
						"Update Pos Session"
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
						"Pos"
					],
					"operation": [
						"Update Pos Session"
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
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Cash Control",
			"name": "cash_control",
			"type": "boolean",
			"default": true,
			"description": "Has Cash Control",
			"routing": {
				"send": {
					"property": "cash_control",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Cash Journal ID",
			"name": "cash_journal_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.journal",
			"routing": {
				"send": {
					"property": "cash_journal_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Cash Real Transaction",
			"name": "cash_real_transaction",
			"type": "number",
			"default": 0,
			"description": "Transaction",
			"routing": {
				"send": {
					"property": "cash_real_transaction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Cash Register Balance End",
			"name": "cash_register_balance_end",
			"type": "number",
			"default": 0,
			"description": "Theoretical Closing Balance",
			"routing": {
				"send": {
					"property": "cash_register_balance_end",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Cash Register Balance End Real",
			"name": "cash_register_balance_end_real",
			"type": "number",
			"default": 0,
			"description": "Ending Balance",
			"routing": {
				"send": {
					"property": "cash_register_balance_end_real",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Cash Register Balance Start",
			"name": "cash_register_balance_start",
			"type": "number",
			"default": 0,
			"description": "Starting Balance",
			"routing": {
				"send": {
					"property": "cash_register_balance_start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Cash Register Difference",
			"name": "cash_register_difference",
			"type": "number",
			"default": 0,
			"description": "Before Closing Difference",
			"routing": {
				"send": {
					"property": "cash_register_difference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Cash Register Total Entry Encoding",
			"name": "cash_register_total_entry_encoding",
			"type": "number",
			"default": 0,
			"description": "Total Cash Transaction",
			"routing": {
				"send": {
					"property": "cash_register_total_entry_encoding",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Closing Notes",
			"name": "closing_notes",
			"type": "string",
			"default": "",
			"description": "Closing Notes",
			"routing": {
				"send": {
					"property": "closing_notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Session"
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
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Config ID",
			"name": "config_id",
			"type": "number",
			"default": 0,
			"description": "ID of related pos.config",
			"routing": {
				"send": {
					"property": "config_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Crm Team ID",
			"name": "crm_team_id",
			"type": "number",
			"default": 0,
			"description": "ID of related crm.team",
			"routing": {
				"send": {
					"property": "crm_team_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Session"
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
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Failed Pickings",
			"name": "failed_pickings",
			"type": "boolean",
			"default": true,
			"description": "Failed Pickings",
			"routing": {
				"send": {
					"property": "failed_pickings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Session"
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
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Is In Company Currency",
			"name": "is_in_company_currency",
			"type": "boolean",
			"default": true,
			"description": "Is Using Company Currency",
			"routing": {
				"send": {
					"property": "is_in_company_currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Login Number",
			"name": "login_number",
			"type": "number",
			"default": 0,
			"description": "Login Sequence Number",
			"routing": {
				"send": {
					"property": "login_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Session"
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
						"Pos"
					],
					"operation": [
						"Update Pos Session"
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
						"Pos"
					],
					"operation": [
						"Update Pos Session"
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
						"Pos"
					],
					"operation": [
						"Update Pos Session"
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
						"Pos"
					],
					"operation": [
						"Update Pos Session"
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
						"Pos"
					],
					"operation": [
						"Update Pos Session"
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
						"Pos"
					],
					"operation": [
						"Update Pos Session"
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
						"Pos"
					],
					"operation": [
						"Update Pos Session"
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
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Move ID",
			"name": "move_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.move",
			"routing": {
				"send": {
					"property": "move_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Session"
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
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Session ID",
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
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Opening Notes",
			"name": "opening_notes",
			"type": "string",
			"default": "",
			"description": "Opening Notes",
			"routing": {
				"send": {
					"property": "opening_notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Order Count",
			"name": "order_count",
			"type": "number",
			"default": 0,
			"description": "Order Count",
			"routing": {
				"send": {
					"property": "order_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Payment Method Ids",
			"name": "payment_method_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Payment Methods (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "payment_method_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Picking Count",
			"name": "picking_count",
			"type": "number",
			"default": 0,
			"description": "Picking Count",
			"routing": {
				"send": {
					"property": "picking_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Rescue",
			"name": "rescue",
			"type": "boolean",
			"default": true,
			"description": "Recovery Session",
			"routing": {
				"send": {
					"property": "rescue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Sequence Number",
			"name": "sequence_number",
			"type": "number",
			"default": 0,
			"description": "Order Sequence Number",
			"routing": {
				"send": {
					"property": "sequence_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Start At",
			"name": "start_at",
			"type": "string",
			"default": "",
			"description": "Opening Date",
			"routing": {
				"send": {
					"property": "start_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Session"
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
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Stop At",
			"name": "stop_at",
			"type": "string",
			"default": "",
			"description": "Closing Date",
			"routing": {
				"send": {
					"property": "stop_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Total Payments Amount",
			"name": "total_payments_amount",
			"type": "number",
			"default": 0,
			"description": "Total Payments Amount",
			"routing": {
				"send": {
					"property": "total_payments_amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Update Stock At Closing",
			"name": "update_stock_at_closing",
			"type": "boolean",
			"default": true,
			"description": "Stock should be updated at closing",
			"routing": {
				"send": {
					"property": "update_stock_at_closing",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Update Pos Session"
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
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Pos"
					],
					"operation": [
						"Update Pos Session"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/pos.session/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Delete Pos Session"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Record ID to delete",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Delete Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Pos"
					],
					"operation": [
						"Delete Pos Session"
					]
				}
			}
		},
		{
			"displayName": "POST /api/pos.session/{id}/call",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Call Pos Session"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Call Pos Session"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Method",
			"name": "method",
			"type": "string",
			"default": "action_confirm",
			"description": "Method name to call",
			"routing": {
				"send": {
					"property": "method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Call Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Args",
			"name": "args",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Positional arguments",
			"routing": {
				"send": {
					"property": "args",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Call Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Kwargs",
			"name": "kwargs",
			"type": "json",
			"default": "{}",
			"description": "Keyword arguments",
			"routing": {
				"send": {
					"property": "kwargs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pos"
					],
					"operation": [
						"Call Pos Session"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Pos"
					],
					"operation": [
						"Call Pos Session"
					]
				}
			}
		},
];
