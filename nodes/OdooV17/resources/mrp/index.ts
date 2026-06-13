import type { INodeProperties } from 'n8n-workflow';

export const mrpDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					]
				}
			},
			"options": [
				{
					"name": "Search Mrp Bom",
					"value": "Search Mrp Bom",
					"action": "Search & read Bill of Material",
					"description": "Search and read mrp.bom records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/mrp.bom"
						}
					}
				},
				{
					"name": "Create Mrp Bom",
					"value": "Create Mrp Bom",
					"action": "Create Bill of Material",
					"description": "Create a new mrp.bom record. Uses Odoo `create` method.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/mrp.bom"
						}
					}
				},
				{
					"name": "Get Mrp Bom",
					"value": "Get Mrp Bom",
					"action": "Get Bill of Material by ID",
					"description": "Read a single mrp.bom record by ID. Uses Odoo `read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/mrp.bom/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Mrp Bom",
					"value": "Update Mrp Bom",
					"action": "Update Bill of Material",
					"description": "Update an existing mrp.bom record. Uses Odoo `write` method.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/mrp.bom/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete Mrp Bom",
					"value": "Delete Mrp Bom",
					"action": "Delete Bill of Material",
					"description": "Delete a mrp.bom record. Uses Odoo `unlink` method.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/mrp.bom/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Call Mrp Bom",
					"value": "Call Mrp Bom",
					"action": "Call method on Bill of Material",
					"description": "Call any method on a mrp.bom record. Uses Odoo `execute_kw` with method name.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/mrp.bom/{{$parameter[\"id\"]}}/call"
						}
					}
				},
				{
					"name": "Search Mrp Production",
					"value": "Search Mrp Production",
					"action": "Search & read Production Order",
					"description": "Search and read mrp.production records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/mrp.production"
						}
					}
				},
				{
					"name": "Create Mrp Production",
					"value": "Create Mrp Production",
					"action": "Create Production Order",
					"description": "Create a new mrp.production record. Uses Odoo `create` method.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/mrp.production"
						}
					}
				},
				{
					"name": "Get Mrp Production",
					"value": "Get Mrp Production",
					"action": "Get Production Order by ID",
					"description": "Read a single mrp.production record by ID. Uses Odoo `read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/mrp.production/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Mrp Production",
					"value": "Update Mrp Production",
					"action": "Update Production Order",
					"description": "Update an existing mrp.production record. Uses Odoo `write` method.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/mrp.production/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete Mrp Production",
					"value": "Delete Mrp Production",
					"action": "Delete Production Order",
					"description": "Delete a mrp.production record. Uses Odoo `unlink` method.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/mrp.production/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Call Mrp Production",
					"value": "Call Mrp Production",
					"action": "Call method on Production Order",
					"description": "Call any method on a mrp.production record. Uses Odoo `execute_kw` with method name.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/mrp.production/{{$parameter[\"id\"]}}/call"
						}
					}
				},
				{
					"name": "Search Mrp Workorder",
					"value": "Search Mrp Workorder",
					"action": "Search & read Work Order",
					"description": "Search and read mrp.workorder records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/mrp.workorder"
						}
					}
				},
				{
					"name": "Create Mrp Workorder",
					"value": "Create Mrp Workorder",
					"action": "Create Work Order",
					"description": "Create a new mrp.workorder record. Uses Odoo `create` method.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/mrp.workorder"
						}
					}
				},
				{
					"name": "Get Mrp Workorder",
					"value": "Get Mrp Workorder",
					"action": "Get Work Order by ID",
					"description": "Read a single mrp.workorder record by ID. Uses Odoo `read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/mrp.workorder/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Mrp Workorder",
					"value": "Update Mrp Workorder",
					"action": "Update Work Order",
					"description": "Update an existing mrp.workorder record. Uses Odoo `write` method.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/mrp.workorder/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete Mrp Workorder",
					"value": "Delete Mrp Workorder",
					"action": "Delete Work Order",
					"description": "Delete a mrp.workorder record. Uses Odoo `unlink` method.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/mrp.workorder/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Call Mrp Workorder",
					"value": "Call Mrp Workorder",
					"action": "Call method on Work Order",
					"description": "Call any method on a mrp.workorder record. Uses Odoo `execute_kw` with method name.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/mrp.workorder/{{$parameter[\"id\"]}}/call"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/mrp.bom",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Search Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Search Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Search Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Search Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Search Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Search Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Search Mrp Bom"
					]
				}
			}
		},
		{
			"displayName": "POST /api/mrp.bom",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
					]
				}
			}
		},
		{
			"displayName": "Allow Operation Dependencies",
			"name": "allow_operation_dependencies",
			"type": "boolean",
			"default": true,
			"description": "Operation Dependencies",
			"routing": {
				"send": {
					"property": "allow_operation_dependencies",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
					]
				}
			}
		},
		{
			"displayName": "Analytic Account Ids",
			"name": "analytic_account_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Analytic Account (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "analytic_account_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
					]
				}
			}
		},
		{
			"displayName": "Analytic Distribution Text",
			"name": "analytic_distribution_text",
			"type": "string",
			"default": "",
			"description": "Analytic Distribution Text",
			"routing": {
				"send": {
					"property": "analytic_distribution_text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "code",
			"type": "string",
			"default": "",
			"description": "Reference",
			"routing": {
				"send": {
					"property": "code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Consumption",
			"name": "consumption",
			"type": "string",
			"default": "",
			"description": "Flexible Consumption",
			"routing": {
				"send": {
					"property": "consumption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
					]
				}
			}
		},
		{
			"displayName": "Days To Prepare Mo",
			"name": "days_to_prepare_mo",
			"type": "number",
			"default": 0,
			"description": "Days to prepare Manufacturing Order",
			"routing": {
				"send": {
					"property": "days_to_prepare_mo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
					]
				}
			}
		},
		{
			"displayName": "Possible Product Template Attribute Value Ids",
			"name": "possible_product_template_attribute_value_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Possible Product Template Attribute Value (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "possible_product_template_attribute_value_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
					]
				}
			}
		},
		{
			"displayName": "Produce Delay",
			"name": "produce_delay",
			"type": "number",
			"default": 0,
			"description": "Manufacturing Lead Time",
			"routing": {
				"send": {
					"property": "produce_delay",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Product Qty",
			"name": "product_qty",
			"type": "number",
			"default": 0,
			"description": "Quantity",
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Product Tmpl ID",
			"name": "product_tmpl_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.template",
			"routing": {
				"send": {
					"property": "product_tmpl_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
					]
				}
			}
		},
		{
			"required": true,
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ready To Produce",
			"name": "ready_to_produce",
			"type": "string",
			"default": "",
			"description": "Manufacturing Readiness",
			"routing": {
				"send": {
					"property": "ready_to_produce",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"description": "BoM Type",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Bom"
					]
				}
			}
		},
		{
			"displayName": "GET /api/mrp.bom/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Get Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Get Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Get Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Get Mrp Bom"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/mrp.bom/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
					]
				}
			}
		},
		{
			"displayName": "Allow Operation Dependencies",
			"name": "allow_operation_dependencies",
			"type": "boolean",
			"default": true,
			"description": "Operation Dependencies",
			"routing": {
				"send": {
					"property": "allow_operation_dependencies",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
					]
				}
			}
		},
		{
			"displayName": "Analytic Account Ids",
			"name": "analytic_account_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Analytic Account (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "analytic_account_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
					]
				}
			}
		},
		{
			"displayName": "Analytic Distribution Text",
			"name": "analytic_distribution_text",
			"type": "string",
			"default": "",
			"description": "Analytic Distribution Text",
			"routing": {
				"send": {
					"property": "analytic_distribution_text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "code",
			"type": "string",
			"default": "",
			"description": "Reference",
			"routing": {
				"send": {
					"property": "code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
					]
				}
			}
		},
		{
			"displayName": "Consumption",
			"name": "consumption",
			"type": "string",
			"default": "",
			"description": "Flexible Consumption",
			"routing": {
				"send": {
					"property": "consumption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
					]
				}
			}
		},
		{
			"displayName": "Days To Prepare Mo",
			"name": "days_to_prepare_mo",
			"type": "number",
			"default": 0,
			"description": "Days to prepare Manufacturing Order",
			"routing": {
				"send": {
					"property": "days_to_prepare_mo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
					]
				}
			}
		},
		{
			"displayName": "Possible Product Template Attribute Value Ids",
			"name": "possible_product_template_attribute_value_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Possible Product Template Attribute Value (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "possible_product_template_attribute_value_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
					]
				}
			}
		},
		{
			"displayName": "Produce Delay",
			"name": "produce_delay",
			"type": "number",
			"default": 0,
			"description": "Manufacturing Lead Time",
			"routing": {
				"send": {
					"property": "produce_delay",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
					]
				}
			}
		},
		{
			"displayName": "Product Qty",
			"name": "product_qty",
			"type": "number",
			"default": 0,
			"description": "Quantity",
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
					]
				}
			}
		},
		{
			"displayName": "Product Tmpl ID",
			"name": "product_tmpl_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.template",
			"routing": {
				"send": {
					"property": "product_tmpl_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
					]
				}
			}
		},
		{
			"displayName": "Ready To Produce",
			"name": "ready_to_produce",
			"type": "string",
			"default": "",
			"description": "Manufacturing Readiness",
			"routing": {
				"send": {
					"property": "ready_to_produce",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"description": "BoM Type",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Bom"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/mrp.bom/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Delete Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Delete Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Delete Mrp Bom"
					]
				}
			}
		},
		{
			"displayName": "POST /api/mrp.bom/{id}/call",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Call Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Call Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Call Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Call Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Call Mrp Bom"
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
						"Mrp"
					],
					"operation": [
						"Call Mrp Bom"
					]
				}
			}
		},
		{
			"displayName": "GET /api/mrp.production",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Search Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Search Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Search Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Search Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Search Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Search Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Search Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "POST /api/mrp.production",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Allow Workorder Dependencies",
			"name": "allow_workorder_dependencies",
			"type": "boolean",
			"default": true,
			"description": "Allow Work Order Dependencies",
			"routing": {
				"send": {
					"property": "allow_workorder_dependencies",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Analytic Account Ids",
			"name": "analytic_account_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Analytic Account (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "analytic_account_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Backorder Sequence",
			"name": "backorder_sequence",
			"type": "number",
			"default": 0,
			"description": "Backorder Sequence",
			"routing": {
				"send": {
					"property": "backorder_sequence",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Bom ID",
			"name": "bom_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mrp.bom",
			"routing": {
				"send": {
					"property": "bom_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Components Availability",
			"name": "components_availability",
			"type": "string",
			"default": "",
			"description": "Component Status",
			"routing": {
				"send": {
					"property": "components_availability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Components Availability State",
			"name": "components_availability_state",
			"type": "string",
			"default": "",
			"description": "Components Availability State",
			"routing": {
				"send": {
					"property": "components_availability_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Confirm Cancel",
			"name": "confirm_cancel",
			"type": "boolean",
			"default": true,
			"description": "Confirm Cancel",
			"routing": {
				"send": {
					"property": "confirm_cancel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Consumption",
			"name": "consumption",
			"type": "string",
			"default": "",
			"description": "Consumption",
			"routing": {
				"send": {
					"property": "consumption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Date Deadline",
			"name": "date_deadline",
			"type": "string",
			"default": "",
			"description": "Deadline",
			"routing": {
				"send": {
					"property": "date_deadline",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Date Finished",
			"name": "date_finished",
			"type": "string",
			"default": "",
			"description": "End",
			"routing": {
				"send": {
					"property": "date_finished",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Date Start",
			"name": "date_start",
			"type": "string",
			"default": "",
			"description": "Start",
			"routing": {
				"send": {
					"property": "date_start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Delay Alert Date",
			"name": "delay_alert_date",
			"type": "string",
			"default": "",
			"description": "Delay Alert Date",
			"routing": {
				"send": {
					"property": "delay_alert_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Duration",
			"name": "duration",
			"type": "number",
			"default": 0,
			"description": "Real Duration",
			"routing": {
				"send": {
					"property": "duration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Duration Expected",
			"name": "duration_expected",
			"type": "number",
			"default": 0,
			"description": "Expected Duration",
			"routing": {
				"send": {
					"property": "duration_expected",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Extra Cost",
			"name": "extra_cost",
			"type": "number",
			"default": 0,
			"description": "Extra Unit Cost",
			"routing": {
				"send": {
					"property": "extra_cost",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Forecasted Issue",
			"name": "forecasted_issue",
			"type": "boolean",
			"default": true,
			"description": "Forecasted Issue",
			"routing": {
				"send": {
					"property": "forecasted_issue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Is Locked",
			"name": "is_locked",
			"type": "boolean",
			"default": true,
			"description": "Is Locked",
			"routing": {
				"send": {
					"property": "is_locked",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Is Outdated Bom",
			"name": "is_outdated_bom",
			"type": "boolean",
			"default": true,
			"description": "Outdated BoM",
			"routing": {
				"send": {
					"property": "is_outdated_bom",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Is Planned",
			"name": "is_planned",
			"type": "boolean",
			"default": true,
			"description": "Its Operations are Planned",
			"routing": {
				"send": {
					"property": "is_planned",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Location Dest ID",
			"name": "location_dest_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "location_dest_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Location Src ID",
			"name": "location_src_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "location_src_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Lot Producing ID",
			"name": "lot_producing_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.lot",
			"routing": {
				"send": {
					"property": "lot_producing_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Mrp Production Backorder Count",
			"name": "mrp_production_backorder_count",
			"type": "number",
			"default": 0,
			"description": "Count of linked backorder",
			"routing": {
				"send": {
					"property": "mrp_production_backorder_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Mrp Production Child Count",
			"name": "mrp_production_child_count",
			"type": "number",
			"default": 0,
			"description": "Number of generated MO",
			"routing": {
				"send": {
					"property": "mrp_production_child_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Mrp Production Source Count",
			"name": "mrp_production_source_count",
			"type": "number",
			"default": 0,
			"description": "Number of source MO",
			"routing": {
				"send": {
					"property": "mrp_production_source_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Reference",
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Orderpoint ID",
			"name": "orderpoint_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.warehouse.orderpoint",
			"routing": {
				"send": {
					"property": "orderpoint_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Origin",
			"name": "origin",
			"type": "string",
			"default": "",
			"description": "Source",
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Picking Ids",
			"name": "picking_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Picking associated to this manufacturing order (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "picking_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"type": "string",
			"default": "",
			"description": "Priority",
			"routing": {
				"send": {
					"property": "priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Product Description Variants",
			"name": "product_description_variants",
			"type": "string",
			"default": "",
			"description": "Custom Description",
			"routing": {
				"send": {
					"property": "product_description_variants",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Product Qty",
			"name": "product_qty",
			"type": "number",
			"default": 0,
			"description": "Quantity To Produce",
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Product Tmpl ID",
			"name": "product_tmpl_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.template",
			"routing": {
				"send": {
					"property": "product_tmpl_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Product Tracking",
			"name": "product_tracking",
			"type": "string",
			"default": "",
			"description": "Tracking",
			"routing": {
				"send": {
					"property": "product_tracking",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"required": true,
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Product Uom Qty",
			"name": "product_uom_qty",
			"type": "number",
			"default": 0,
			"description": "Total Quantity",
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Product Variant Attributes",
			"name": "product_variant_attributes",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Attribute Values (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "product_variant_attributes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Production Capacity",
			"name": "production_capacity",
			"type": "number",
			"default": 0,
			"description": "Production Capacity",
			"routing": {
				"send": {
					"property": "production_capacity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Production Location ID",
			"name": "production_location_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "production_location_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Propagate Cancel",
			"name": "propagate_cancel",
			"type": "boolean",
			"default": true,
			"description": "Propagate cancel and split",
			"routing": {
				"send": {
					"property": "propagate_cancel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Purchase Order Count",
			"name": "purchase_order_count",
			"type": "number",
			"default": 0,
			"description": "Count of generated PO",
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Qty Produced",
			"name": "qty_produced",
			"type": "number",
			"default": 0,
			"description": "Quantity Produced",
			"routing": {
				"send": {
					"property": "qty_produced",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Qty Producing",
			"name": "qty_producing",
			"type": "number",
			"default": 0,
			"description": "Quantity Producing",
			"routing": {
				"send": {
					"property": "qty_producing",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Reservation State",
			"name": "reservation_state",
			"type": "string",
			"default": "",
			"description": "MO Readiness",
			"routing": {
				"send": {
					"property": "reservation_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Reserve Visible",
			"name": "reserve_visible",
			"type": "boolean",
			"default": true,
			"description": "Allowed to Reserve Production",
			"routing": {
				"send": {
					"property": "reserve_visible",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Sale Order Count",
			"name": "sale_order_count",
			"type": "number",
			"default": 0,
			"description": "Count of Source SO",
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Scrap Count",
			"name": "scrap_count",
			"type": "number",
			"default": 0,
			"description": "Scrap Move",
			"routing": {
				"send": {
					"property": "scrap_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Show Allocation",
			"name": "show_allocation",
			"type": "boolean",
			"default": true,
			"description": "Show Allocation",
			"routing": {
				"send": {
					"property": "show_allocation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Show Final Lots",
			"name": "show_final_lots",
			"type": "boolean",
			"default": true,
			"description": "Show Final Lots",
			"routing": {
				"send": {
					"property": "show_final_lots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Show Lock",
			"name": "show_lock",
			"type": "boolean",
			"default": true,
			"description": "Show Lock/unlock buttons",
			"routing": {
				"send": {
					"property": "show_lock",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Show Lot Ids",
			"name": "show_lot_ids",
			"type": "boolean",
			"default": true,
			"description": "Display the serial number shortcut on the moves",
			"routing": {
				"send": {
					"property": "show_lot_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Show Produce",
			"name": "show_produce",
			"type": "boolean",
			"default": true,
			"description": "Show Produce",
			"routing": {
				"send": {
					"property": "show_produce",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Show Produce All",
			"name": "show_produce_all",
			"type": "boolean",
			"default": true,
			"description": "Show Produce All",
			"routing": {
				"send": {
					"property": "show_produce_all",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Show Serial Mass Produce",
			"name": "show_serial_mass_produce",
			"type": "boolean",
			"default": true,
			"description": "Display the serial mass produce wizard action",
			"routing": {
				"send": {
					"property": "show_serial_mass_produce",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Show Valuation",
			"name": "show_valuation",
			"type": "boolean",
			"default": true,
			"description": "Show Valuation",
			"routing": {
				"send": {
					"property": "show_valuation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"type": "string",
			"default": "",
			"description": "State",
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Unbuild Count",
			"name": "unbuild_count",
			"type": "number",
			"default": 0,
			"description": "Number of Unbuilds",
			"routing": {
				"send": {
					"property": "unbuild_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Unreserve Visible",
			"name": "unreserve_visible",
			"type": "boolean",
			"default": true,
			"description": "Allowed to Unreserve Production",
			"routing": {
				"send": {
					"property": "unreserve_visible",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Use Auto Consume Components Lots",
			"name": "use_auto_consume_components_lots",
			"type": "boolean",
			"default": true,
			"description": "Consume Reserved Lots/Serial Numbers automatically",
			"routing": {
				"send": {
					"property": "use_auto_consume_components_lots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Use Create Components Lots",
			"name": "use_create_components_lots",
			"type": "boolean",
			"default": true,
			"description": "Create New Lots/Serial Numbers for Components",
			"routing": {
				"send": {
					"property": "use_create_components_lots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Workcenter ID",
			"name": "workcenter_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mrp.workcenter",
			"routing": {
				"send": {
					"property": "workcenter_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "GET /api/mrp.production/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Get Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Get Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Get Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Get Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/mrp.production/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Allow Workorder Dependencies",
			"name": "allow_workorder_dependencies",
			"type": "boolean",
			"default": true,
			"description": "Allow Work Order Dependencies",
			"routing": {
				"send": {
					"property": "allow_workorder_dependencies",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Analytic Account Ids",
			"name": "analytic_account_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Analytic Account (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "analytic_account_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Backorder Sequence",
			"name": "backorder_sequence",
			"type": "number",
			"default": 0,
			"description": "Backorder Sequence",
			"routing": {
				"send": {
					"property": "backorder_sequence",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Bom ID",
			"name": "bom_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mrp.bom",
			"routing": {
				"send": {
					"property": "bom_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Components Availability",
			"name": "components_availability",
			"type": "string",
			"default": "",
			"description": "Component Status",
			"routing": {
				"send": {
					"property": "components_availability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Components Availability State",
			"name": "components_availability_state",
			"type": "string",
			"default": "",
			"description": "Components Availability State",
			"routing": {
				"send": {
					"property": "components_availability_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Confirm Cancel",
			"name": "confirm_cancel",
			"type": "boolean",
			"default": true,
			"description": "Confirm Cancel",
			"routing": {
				"send": {
					"property": "confirm_cancel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Consumption",
			"name": "consumption",
			"type": "string",
			"default": "",
			"description": "Consumption",
			"routing": {
				"send": {
					"property": "consumption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Date Deadline",
			"name": "date_deadline",
			"type": "string",
			"default": "",
			"description": "Deadline",
			"routing": {
				"send": {
					"property": "date_deadline",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Date Finished",
			"name": "date_finished",
			"type": "string",
			"default": "",
			"description": "End",
			"routing": {
				"send": {
					"property": "date_finished",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Date Start",
			"name": "date_start",
			"type": "string",
			"default": "",
			"description": "Start",
			"routing": {
				"send": {
					"property": "date_start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Delay Alert Date",
			"name": "delay_alert_date",
			"type": "string",
			"default": "",
			"description": "Delay Alert Date",
			"routing": {
				"send": {
					"property": "delay_alert_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Duration",
			"name": "duration",
			"type": "number",
			"default": 0,
			"description": "Real Duration",
			"routing": {
				"send": {
					"property": "duration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Duration Expected",
			"name": "duration_expected",
			"type": "number",
			"default": 0,
			"description": "Expected Duration",
			"routing": {
				"send": {
					"property": "duration_expected",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Extra Cost",
			"name": "extra_cost",
			"type": "number",
			"default": 0,
			"description": "Extra Unit Cost",
			"routing": {
				"send": {
					"property": "extra_cost",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Forecasted Issue",
			"name": "forecasted_issue",
			"type": "boolean",
			"default": true,
			"description": "Forecasted Issue",
			"routing": {
				"send": {
					"property": "forecasted_issue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Is Locked",
			"name": "is_locked",
			"type": "boolean",
			"default": true,
			"description": "Is Locked",
			"routing": {
				"send": {
					"property": "is_locked",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Is Outdated Bom",
			"name": "is_outdated_bom",
			"type": "boolean",
			"default": true,
			"description": "Outdated BoM",
			"routing": {
				"send": {
					"property": "is_outdated_bom",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Is Planned",
			"name": "is_planned",
			"type": "boolean",
			"default": true,
			"description": "Its Operations are Planned",
			"routing": {
				"send": {
					"property": "is_planned",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Location Dest ID",
			"name": "location_dest_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "location_dest_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Location Src ID",
			"name": "location_src_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "location_src_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Lot Producing ID",
			"name": "lot_producing_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.lot",
			"routing": {
				"send": {
					"property": "lot_producing_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Mrp Production Backorder Count",
			"name": "mrp_production_backorder_count",
			"type": "number",
			"default": 0,
			"description": "Count of linked backorder",
			"routing": {
				"send": {
					"property": "mrp_production_backorder_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Mrp Production Child Count",
			"name": "mrp_production_child_count",
			"type": "number",
			"default": 0,
			"description": "Number of generated MO",
			"routing": {
				"send": {
					"property": "mrp_production_child_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Mrp Production Source Count",
			"name": "mrp_production_source_count",
			"type": "number",
			"default": 0,
			"description": "Number of source MO",
			"routing": {
				"send": {
					"property": "mrp_production_source_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Reference",
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Orderpoint ID",
			"name": "orderpoint_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.warehouse.orderpoint",
			"routing": {
				"send": {
					"property": "orderpoint_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Origin",
			"name": "origin",
			"type": "string",
			"default": "",
			"description": "Source",
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Picking Ids",
			"name": "picking_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Picking associated to this manufacturing order (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "picking_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"type": "string",
			"default": "",
			"description": "Priority",
			"routing": {
				"send": {
					"property": "priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Product Description Variants",
			"name": "product_description_variants",
			"type": "string",
			"default": "",
			"description": "Custom Description",
			"routing": {
				"send": {
					"property": "product_description_variants",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Product Qty",
			"name": "product_qty",
			"type": "number",
			"default": 0,
			"description": "Quantity To Produce",
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Product Tmpl ID",
			"name": "product_tmpl_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.template",
			"routing": {
				"send": {
					"property": "product_tmpl_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Product Tracking",
			"name": "product_tracking",
			"type": "string",
			"default": "",
			"description": "Tracking",
			"routing": {
				"send": {
					"property": "product_tracking",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Product Uom Qty",
			"name": "product_uom_qty",
			"type": "number",
			"default": 0,
			"description": "Total Quantity",
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Product Variant Attributes",
			"name": "product_variant_attributes",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Attribute Values (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "product_variant_attributes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Production Capacity",
			"name": "production_capacity",
			"type": "number",
			"default": 0,
			"description": "Production Capacity",
			"routing": {
				"send": {
					"property": "production_capacity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Production Location ID",
			"name": "production_location_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "production_location_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Propagate Cancel",
			"name": "propagate_cancel",
			"type": "boolean",
			"default": true,
			"description": "Propagate cancel and split",
			"routing": {
				"send": {
					"property": "propagate_cancel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Purchase Order Count",
			"name": "purchase_order_count",
			"type": "number",
			"default": 0,
			"description": "Count of generated PO",
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Qty Produced",
			"name": "qty_produced",
			"type": "number",
			"default": 0,
			"description": "Quantity Produced",
			"routing": {
				"send": {
					"property": "qty_produced",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Qty Producing",
			"name": "qty_producing",
			"type": "number",
			"default": 0,
			"description": "Quantity Producing",
			"routing": {
				"send": {
					"property": "qty_producing",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Reservation State",
			"name": "reservation_state",
			"type": "string",
			"default": "",
			"description": "MO Readiness",
			"routing": {
				"send": {
					"property": "reservation_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Reserve Visible",
			"name": "reserve_visible",
			"type": "boolean",
			"default": true,
			"description": "Allowed to Reserve Production",
			"routing": {
				"send": {
					"property": "reserve_visible",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Sale Order Count",
			"name": "sale_order_count",
			"type": "number",
			"default": 0,
			"description": "Count of Source SO",
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Scrap Count",
			"name": "scrap_count",
			"type": "number",
			"default": 0,
			"description": "Scrap Move",
			"routing": {
				"send": {
					"property": "scrap_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Show Allocation",
			"name": "show_allocation",
			"type": "boolean",
			"default": true,
			"description": "Show Allocation",
			"routing": {
				"send": {
					"property": "show_allocation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Show Final Lots",
			"name": "show_final_lots",
			"type": "boolean",
			"default": true,
			"description": "Show Final Lots",
			"routing": {
				"send": {
					"property": "show_final_lots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Show Lock",
			"name": "show_lock",
			"type": "boolean",
			"default": true,
			"description": "Show Lock/unlock buttons",
			"routing": {
				"send": {
					"property": "show_lock",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Show Lot Ids",
			"name": "show_lot_ids",
			"type": "boolean",
			"default": true,
			"description": "Display the serial number shortcut on the moves",
			"routing": {
				"send": {
					"property": "show_lot_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Show Produce",
			"name": "show_produce",
			"type": "boolean",
			"default": true,
			"description": "Show Produce",
			"routing": {
				"send": {
					"property": "show_produce",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Show Produce All",
			"name": "show_produce_all",
			"type": "boolean",
			"default": true,
			"description": "Show Produce All",
			"routing": {
				"send": {
					"property": "show_produce_all",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Show Serial Mass Produce",
			"name": "show_serial_mass_produce",
			"type": "boolean",
			"default": true,
			"description": "Display the serial mass produce wizard action",
			"routing": {
				"send": {
					"property": "show_serial_mass_produce",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Show Valuation",
			"name": "show_valuation",
			"type": "boolean",
			"default": true,
			"description": "Show Valuation",
			"routing": {
				"send": {
					"property": "show_valuation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"type": "string",
			"default": "",
			"description": "State",
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Unbuild Count",
			"name": "unbuild_count",
			"type": "number",
			"default": 0,
			"description": "Number of Unbuilds",
			"routing": {
				"send": {
					"property": "unbuild_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Unreserve Visible",
			"name": "unreserve_visible",
			"type": "boolean",
			"default": true,
			"description": "Allowed to Unreserve Production",
			"routing": {
				"send": {
					"property": "unreserve_visible",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Use Auto Consume Components Lots",
			"name": "use_auto_consume_components_lots",
			"type": "boolean",
			"default": true,
			"description": "Consume Reserved Lots/Serial Numbers automatically",
			"routing": {
				"send": {
					"property": "use_auto_consume_components_lots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Use Create Components Lots",
			"name": "use_create_components_lots",
			"type": "boolean",
			"default": true,
			"description": "Create New Lots/Serial Numbers for Components",
			"routing": {
				"send": {
					"property": "use_create_components_lots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "Workcenter ID",
			"name": "workcenter_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mrp.workcenter",
			"routing": {
				"send": {
					"property": "workcenter_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/mrp.production/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Delete Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Delete Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Delete Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "POST /api/mrp.production/{id}/call",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Call Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Call Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Call Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Call Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Call Mrp Production"
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
						"Mrp"
					],
					"operation": [
						"Call Mrp Production"
					]
				}
			}
		},
		{
			"displayName": "GET /api/mrp.workorder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Search Mrp Workorder"
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
						"Mrp"
					],
					"operation": [
						"Search Mrp Workorder"
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
						"Mrp"
					],
					"operation": [
						"Search Mrp Workorder"
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
						"Mrp"
					],
					"operation": [
						"Search Mrp Workorder"
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
						"Mrp"
					],
					"operation": [
						"Search Mrp Workorder"
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
						"Mrp"
					],
					"operation": [
						"Search Mrp Workorder"
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
						"Mrp"
					],
					"operation": [
						"Search Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "POST /api/mrp.workorder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Allow Workorder Dependencies",
			"name": "allow_workorder_dependencies",
			"type": "boolean",
			"default": true,
			"description": "Allow Work Order Dependencies",
			"routing": {
				"send": {
					"property": "allow_workorder_dependencies",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Barcode",
			"name": "barcode",
			"type": "string",
			"default": "",
			"description": "Barcode",
			"routing": {
				"send": {
					"property": "barcode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Blocked By Workorder Ids",
			"name": "blocked_by_workorder_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Blocked By (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "blocked_by_workorder_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Consumption",
			"name": "consumption",
			"type": "string",
			"default": "",
			"description": "Consumption",
			"routing": {
				"send": {
					"property": "consumption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Costs Hour",
			"name": "costs_hour",
			"type": "number",
			"default": 0,
			"description": "Cost per hour",
			"routing": {
				"send": {
					"property": "costs_hour",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Date Finished",
			"name": "date_finished",
			"type": "string",
			"default": "",
			"description": "End",
			"routing": {
				"send": {
					"property": "date_finished",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Date Start",
			"name": "date_start",
			"type": "string",
			"default": "",
			"description": "Start",
			"routing": {
				"send": {
					"property": "date_start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Duration",
			"name": "duration",
			"type": "number",
			"default": 0,
			"description": "Real Duration",
			"routing": {
				"send": {
					"property": "duration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Duration Expected",
			"name": "duration_expected",
			"type": "number",
			"default": 0,
			"description": "Expected Duration",
			"routing": {
				"send": {
					"property": "duration_expected",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Duration Percent",
			"name": "duration_percent",
			"type": "number",
			"default": 0,
			"description": "Duration Deviation (%)",
			"routing": {
				"send": {
					"property": "duration_percent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Duration Unit",
			"name": "duration_unit",
			"type": "number",
			"default": 0,
			"description": "Duration Per Unit",
			"routing": {
				"send": {
					"property": "duration_unit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Finished Lot ID",
			"name": "finished_lot_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.lot",
			"routing": {
				"send": {
					"property": "finished_lot_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Has Worksheet",
			"name": "has_worksheet",
			"type": "boolean",
			"default": true,
			"description": "Has Worksheet",
			"routing": {
				"send": {
					"property": "has_worksheet",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Is Planned",
			"name": "is_planned",
			"type": "boolean",
			"default": true,
			"description": "Its Operations are Planned",
			"routing": {
				"send": {
					"property": "is_planned",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Is Produced",
			"name": "is_produced",
			"type": "boolean",
			"default": true,
			"description": "Has Been Produced",
			"routing": {
				"send": {
					"property": "is_produced",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Is User Working",
			"name": "is_user_working",
			"type": "boolean",
			"default": true,
			"description": "Is the Current User Working",
			"routing": {
				"send": {
					"property": "is_user_working",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "JSON Popover",
			"name": "json_popover",
			"type": "string",
			"default": "",
			"description": "Popover Data JSON",
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Leave ID",
			"name": "leave_id",
			"type": "number",
			"default": 0,
			"description": "ID of related resource.calendar.leaves",
			"routing": {
				"send": {
					"property": "leave_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Mo Analytic Account Line Ids",
			"name": "mo_analytic_account_line_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Mo Analytic Account Line (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "mo_analytic_account_line_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
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
			"description": "Work Order",
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Needed By Workorder Ids",
			"name": "needed_by_workorder_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Blocks (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "needed_by_workorder_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Operation ID",
			"name": "operation_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mrp.routing.workcenter",
			"routing": {
				"send": {
					"property": "operation_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Operation Note",
			"name": "operation_note",
			"type": "string",
			"default": "",
			"description": "Description",
			"routing": {
				"send": {
					"property": "operation_note",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Product Tracking",
			"name": "product_tracking",
			"type": "string",
			"default": "",
			"description": "Tracking",
			"routing": {
				"send": {
					"property": "product_tracking",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"required": true,
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Production Availability",
			"name": "production_availability",
			"type": "string",
			"default": "",
			"description": "Stock Availability",
			"routing": {
				"send": {
					"property": "production_availability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Production Bom ID",
			"name": "production_bom_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mrp.bom",
			"routing": {
				"send": {
					"property": "production_bom_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Production Date",
			"name": "production_date",
			"type": "string",
			"default": "",
			"description": "Production Date",
			"routing": {
				"send": {
					"property": "production_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Production ID",
			"name": "production_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mrp.production",
			"routing": {
				"send": {
					"property": "production_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Production State",
			"name": "production_state",
			"type": "string",
			"default": "",
			"description": "Production State",
			"routing": {
				"send": {
					"property": "production_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Progress",
			"name": "progress",
			"type": "number",
			"default": 0,
			"description": "Progress Done (%)",
			"routing": {
				"send": {
					"property": "progress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Qty Produced",
			"name": "qty_produced",
			"type": "number",
			"default": 0,
			"description": "Quantity",
			"routing": {
				"send": {
					"property": "qty_produced",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Qty Producing",
			"name": "qty_producing",
			"type": "number",
			"default": 0,
			"description": "Currently Produced Quantity",
			"routing": {
				"send": {
					"property": "qty_producing",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Qty Production",
			"name": "qty_production",
			"type": "number",
			"default": 0,
			"description": "Original Production Quantity",
			"routing": {
				"send": {
					"property": "qty_production",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Qty Remaining",
			"name": "qty_remaining",
			"type": "number",
			"default": 0,
			"description": "Quantity To Be Produced",
			"routing": {
				"send": {
					"property": "qty_remaining",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Qty Reported From Previous Wo",
			"name": "qty_reported_from_previous_wo",
			"type": "number",
			"default": 0,
			"description": "Carried Quantity",
			"routing": {
				"send": {
					"property": "qty_reported_from_previous_wo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Scrap Count",
			"name": "scrap_count",
			"type": "number",
			"default": 0,
			"description": "Scrap Move",
			"routing": {
				"send": {
					"property": "scrap_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Show JSON Popover",
			"name": "show_json_popover",
			"type": "boolean",
			"default": true,
			"description": "Show Popover?",
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Wc Analytic Account Line Ids",
			"name": "wc_analytic_account_line_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Wc Analytic Account Line (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "wc_analytic_account_line_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Workcenter ID",
			"name": "workcenter_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mrp.workcenter",
			"routing": {
				"send": {
					"property": "workcenter_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Working State",
			"name": "working_state",
			"type": "string",
			"default": "",
			"description": "Workcenter Status",
			"routing": {
				"send": {
					"property": "working_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Worksheet",
			"name": "worksheet",
			"type": "string",
			"default": "",
			"description": "Worksheet",
			"routing": {
				"send": {
					"property": "worksheet",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Worksheet Google Slide",
			"name": "worksheet_google_slide",
			"type": "string",
			"default": "",
			"description": "Worksheet URL",
			"routing": {
				"send": {
					"property": "worksheet_google_slide",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Worksheet Type",
			"name": "worksheet_type",
			"type": "string",
			"default": "",
			"description": "Worksheet Type",
			"routing": {
				"send": {
					"property": "worksheet_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
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
						"Mrp"
					],
					"operation": [
						"Create Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "GET /api/mrp.workorder/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Get Mrp Workorder"
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
						"Mrp"
					],
					"operation": [
						"Get Mrp Workorder"
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
						"Mrp"
					],
					"operation": [
						"Get Mrp Workorder"
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
						"Mrp"
					],
					"operation": [
						"Get Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/mrp.workorder/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Allow Workorder Dependencies",
			"name": "allow_workorder_dependencies",
			"type": "boolean",
			"default": true,
			"description": "Allow Work Order Dependencies",
			"routing": {
				"send": {
					"property": "allow_workorder_dependencies",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Barcode",
			"name": "barcode",
			"type": "string",
			"default": "",
			"description": "Barcode",
			"routing": {
				"send": {
					"property": "barcode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Blocked By Workorder Ids",
			"name": "blocked_by_workorder_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Blocked By (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "blocked_by_workorder_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Consumption",
			"name": "consumption",
			"type": "string",
			"default": "",
			"description": "Consumption",
			"routing": {
				"send": {
					"property": "consumption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Costs Hour",
			"name": "costs_hour",
			"type": "number",
			"default": 0,
			"description": "Cost per hour",
			"routing": {
				"send": {
					"property": "costs_hour",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Date Finished",
			"name": "date_finished",
			"type": "string",
			"default": "",
			"description": "End",
			"routing": {
				"send": {
					"property": "date_finished",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Date Start",
			"name": "date_start",
			"type": "string",
			"default": "",
			"description": "Start",
			"routing": {
				"send": {
					"property": "date_start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Duration",
			"name": "duration",
			"type": "number",
			"default": 0,
			"description": "Real Duration",
			"routing": {
				"send": {
					"property": "duration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Duration Expected",
			"name": "duration_expected",
			"type": "number",
			"default": 0,
			"description": "Expected Duration",
			"routing": {
				"send": {
					"property": "duration_expected",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Duration Percent",
			"name": "duration_percent",
			"type": "number",
			"default": 0,
			"description": "Duration Deviation (%)",
			"routing": {
				"send": {
					"property": "duration_percent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Duration Unit",
			"name": "duration_unit",
			"type": "number",
			"default": 0,
			"description": "Duration Per Unit",
			"routing": {
				"send": {
					"property": "duration_unit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Finished Lot ID",
			"name": "finished_lot_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.lot",
			"routing": {
				"send": {
					"property": "finished_lot_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Has Worksheet",
			"name": "has_worksheet",
			"type": "boolean",
			"default": true,
			"description": "Has Worksheet",
			"routing": {
				"send": {
					"property": "has_worksheet",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Is Planned",
			"name": "is_planned",
			"type": "boolean",
			"default": true,
			"description": "Its Operations are Planned",
			"routing": {
				"send": {
					"property": "is_planned",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Is Produced",
			"name": "is_produced",
			"type": "boolean",
			"default": true,
			"description": "Has Been Produced",
			"routing": {
				"send": {
					"property": "is_produced",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Is User Working",
			"name": "is_user_working",
			"type": "boolean",
			"default": true,
			"description": "Is the Current User Working",
			"routing": {
				"send": {
					"property": "is_user_working",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "JSON Popover",
			"name": "json_popover",
			"type": "string",
			"default": "",
			"description": "Popover Data JSON",
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Leave ID",
			"name": "leave_id",
			"type": "number",
			"default": 0,
			"description": "ID of related resource.calendar.leaves",
			"routing": {
				"send": {
					"property": "leave_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Mo Analytic Account Line Ids",
			"name": "mo_analytic_account_line_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Mo Analytic Account Line (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "mo_analytic_account_line_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Work Order",
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Needed By Workorder Ids",
			"name": "needed_by_workorder_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Blocks (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "needed_by_workorder_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Operation ID",
			"name": "operation_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mrp.routing.workcenter",
			"routing": {
				"send": {
					"property": "operation_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Operation Note",
			"name": "operation_note",
			"type": "string",
			"default": "",
			"description": "Description",
			"routing": {
				"send": {
					"property": "operation_note",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Product Tracking",
			"name": "product_tracking",
			"type": "string",
			"default": "",
			"description": "Tracking",
			"routing": {
				"send": {
					"property": "product_tracking",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Production Availability",
			"name": "production_availability",
			"type": "string",
			"default": "",
			"description": "Stock Availability",
			"routing": {
				"send": {
					"property": "production_availability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Production Bom ID",
			"name": "production_bom_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mrp.bom",
			"routing": {
				"send": {
					"property": "production_bom_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Production Date",
			"name": "production_date",
			"type": "string",
			"default": "",
			"description": "Production Date",
			"routing": {
				"send": {
					"property": "production_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Production ID",
			"name": "production_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mrp.production",
			"routing": {
				"send": {
					"property": "production_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Production State",
			"name": "production_state",
			"type": "string",
			"default": "",
			"description": "Production State",
			"routing": {
				"send": {
					"property": "production_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Progress",
			"name": "progress",
			"type": "number",
			"default": 0,
			"description": "Progress Done (%)",
			"routing": {
				"send": {
					"property": "progress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Qty Produced",
			"name": "qty_produced",
			"type": "number",
			"default": 0,
			"description": "Quantity",
			"routing": {
				"send": {
					"property": "qty_produced",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Qty Producing",
			"name": "qty_producing",
			"type": "number",
			"default": 0,
			"description": "Currently Produced Quantity",
			"routing": {
				"send": {
					"property": "qty_producing",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Qty Production",
			"name": "qty_production",
			"type": "number",
			"default": 0,
			"description": "Original Production Quantity",
			"routing": {
				"send": {
					"property": "qty_production",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Qty Remaining",
			"name": "qty_remaining",
			"type": "number",
			"default": 0,
			"description": "Quantity To Be Produced",
			"routing": {
				"send": {
					"property": "qty_remaining",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Qty Reported From Previous Wo",
			"name": "qty_reported_from_previous_wo",
			"type": "number",
			"default": 0,
			"description": "Carried Quantity",
			"routing": {
				"send": {
					"property": "qty_reported_from_previous_wo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Scrap Count",
			"name": "scrap_count",
			"type": "number",
			"default": 0,
			"description": "Scrap Move",
			"routing": {
				"send": {
					"property": "scrap_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Show JSON Popover",
			"name": "show_json_popover",
			"type": "boolean",
			"default": true,
			"description": "Show Popover?",
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Wc Analytic Account Line Ids",
			"name": "wc_analytic_account_line_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Wc Analytic Account Line (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "wc_analytic_account_line_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Workcenter ID",
			"name": "workcenter_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mrp.workcenter",
			"routing": {
				"send": {
					"property": "workcenter_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Working State",
			"name": "working_state",
			"type": "string",
			"default": "",
			"description": "Workcenter Status",
			"routing": {
				"send": {
					"property": "working_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Worksheet",
			"name": "worksheet",
			"type": "string",
			"default": "",
			"description": "Worksheet",
			"routing": {
				"send": {
					"property": "worksheet",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Worksheet Google Slide",
			"name": "worksheet_google_slide",
			"type": "string",
			"default": "",
			"description": "Worksheet URL",
			"routing": {
				"send": {
					"property": "worksheet_google_slide",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "Worksheet Type",
			"name": "worksheet_type",
			"type": "string",
			"default": "",
			"description": "Worksheet Type",
			"routing": {
				"send": {
					"property": "worksheet_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
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
						"Mrp"
					],
					"operation": [
						"Update Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/mrp.workorder/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Delete Mrp Workorder"
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
						"Mrp"
					],
					"operation": [
						"Delete Mrp Workorder"
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
						"Mrp"
					],
					"operation": [
						"Delete Mrp Workorder"
					]
				}
			}
		},
		{
			"displayName": "POST /api/mrp.workorder/{id}/call",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp"
					],
					"operation": [
						"Call Mrp Workorder"
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
						"Mrp"
					],
					"operation": [
						"Call Mrp Workorder"
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
						"Mrp"
					],
					"operation": [
						"Call Mrp Workorder"
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
						"Mrp"
					],
					"operation": [
						"Call Mrp Workorder"
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
						"Mrp"
					],
					"operation": [
						"Call Mrp Workorder"
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
						"Mrp"
					],
					"operation": [
						"Call Mrp Workorder"
					]
				}
			}
		},
];
