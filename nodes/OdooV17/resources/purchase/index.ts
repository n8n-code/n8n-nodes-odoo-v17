import type { INodeProperties } from 'n8n-workflow';

export const purchaseDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					]
				}
			},
			"options": [
				{
					"name": "Search Purchase Order",
					"value": "Search Purchase Order",
					"action": "Search & read Purchase Order",
					"description": "Search and read purchase.order records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/purchase.order"
						}
					}
				},
				{
					"name": "Upsert Purchase Order",
					"value": "Upsert Purchase Order",
					"action": "Upsert Order",
					"description": "Create or update purchase.order record.\n\nSearch by name (PO Number) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/purchase.order"
						}
					}
				},
				{
					"name": "Search Purchase Order Line",
					"value": "Search Purchase Order Line",
					"action": "Search & read Purchase Order Line",
					"description": "Search and read purchase.order.line records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/purchase.order.line"
						}
					}
				},
				{
					"name": "Upsert Purchase Order Line",
					"value": "Upsert Purchase Order Line",
					"action": "Upsert Line",
					"description": "Create or update purchase.order.line record.\n\nSearch by name (PO Line Description) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/purchase.order.line"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/purchase.order",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Search Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"description": "Odoo domain filter (JSON array). Each condition is [field, operator, value].\n\n**Operators:**\n- `=` : equals\n- `!=` : not equals\n- `ilike` : contains (case-insensitive)\n- `like` : contains (case-sensitive)\n- `>` `<` `>=` `<=` : comparison\n- `in` : value is in list\n- `not in` : value is not in list\n\n**Examples:**\n\nExact match:\n```\n[[\"name\", \"=\", \"John\"]]\n```\n\nSearch (contains):\n```\n[[\"name\", \"ilike\", \"john\"]]\n```\n\nMultiple conditions (AND):\n```\n[[\"name\", \"ilike\", \"john\"], [\"email\", \"ilike\", \"gmail\"]]\n```\n\nMultiple values (OR):\n```\n[\"|\", [\"name\", \"=\", \"John\"], [\"name\", \"=\", \"Jane\"]]\n```\n\nFilter by state:\n```\n[[\"state\", \"in\", [\"draft\", \"sent\"]]]\n```\n\nComparison:\n```\n[[\"amount_total\", \">=\", 100000]]\n```\n\nCombined:\n```\n[[\"partner_id.name\", \"ilike\", \"admin\"], [\"state\", \"=\", \"sale\"], [\"amount_total\", \">\", 50000]]\n```\n\n**Tip:** Use `GET /api/{model}/fields` to see available field names and types.",
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
						"Purchase"
					],
					"operation": [
						"Search Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Search Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Search Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Search Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Search Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Search Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Search Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/purchase.order",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{\n  \"name\": \"PO/001\"\n}",
			"description": "Search criteria to find existing record by PO Number",
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "Date Approve",
			"name": "date_approve",
			"type": "string",
			"default": "",
			"description": "Confirmation Date",
			"routing": {
				"send": {
					"property": "date_approve",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "Date Calendar Start",
			"name": "date_calendar_start",
			"type": "string",
			"default": "",
			"description": "Date Calendar Start",
			"routing": {
				"send": {
					"property": "date_calendar_start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "Date Order",
			"name": "date_order",
			"type": "string",
			"default": "",
			"description": "Order Deadline",
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "Date Planned",
			"name": "date_planned",
			"type": "string",
			"default": "",
			"description": "Expected Arrival",
			"routing": {
				"send": {
					"property": "date_planned",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "Default Location Dest ID Usage",
			"name": "default_location_dest_id_usage",
			"type": "string",
			"default": "",
			"description": "Destination Location Type",
			"routing": {
				"send": {
					"property": "default_location_dest_id_usage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "Dest Address ID",
			"name": "dest_address_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "dest_address_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "Effective Date",
			"name": "effective_date",
			"type": "string",
			"default": "",
			"description": "Arrival",
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "group_id",
			"type": "number",
			"default": 0,
			"description": "ID of related procurement.group",
			"routing": {
				"send": {
					"property": "group_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "Incoming Picking Count",
			"name": "incoming_picking_count",
			"type": "number",
			"default": 0,
			"description": "Incoming Shipment count",
			"routing": {
				"send": {
					"property": "incoming_picking_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "Incoterm ID",
			"name": "incoterm_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.incoterms",
			"routing": {
				"send": {
					"property": "incoterm_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "Invoice Count",
			"name": "invoice_count",
			"type": "number",
			"default": 0,
			"description": "Bill Count",
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "Invoice Ids",
			"name": "invoice_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Bills (Many2many → list of IDs)",
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "Invoice Status",
			"name": "invoice_status",
			"type": "string",
			"default": "",
			"description": "Billing Status",
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "Is Shipped",
			"name": "is_shipped",
			"type": "boolean",
			"default": true,
			"description": "Is Shipped",
			"routing": {
				"send": {
					"property": "is_shipped",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "Mail Reception Confirmed",
			"name": "mail_reception_confirmed",
			"type": "boolean",
			"default": true,
			"description": "Reception Confirmed",
			"routing": {
				"send": {
					"property": "mail_reception_confirmed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "Mail Reminder Confirmed",
			"name": "mail_reminder_confirmed",
			"type": "boolean",
			"default": true,
			"description": "Reminder Confirmed",
			"routing": {
				"send": {
					"property": "mail_reminder_confirmed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "Mrp Production Count",
			"name": "mrp_production_count",
			"type": "number",
			"default": 0,
			"description": "Count of MO Source",
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "notes",
			"type": "string",
			"default": "",
			"description": "Terms and Conditions",
			"routing": {
				"send": {
					"property": "notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "On Time Rate",
			"name": "on_time_rate",
			"type": "number",
			"default": 0,
			"description": "On-Time Delivery Rate",
			"routing": {
				"send": {
					"property": "on_time_rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "Partner Ref",
			"name": "partner_ref",
			"type": "string",
			"default": "",
			"description": "Vendor Reference",
			"routing": {
				"send": {
					"property": "partner_ref",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "Picking Ids",
			"name": "picking_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Receptions (Many2many → list of IDs)",
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "Receipt Reminder Email",
			"name": "receipt_reminder_email",
			"type": "boolean",
			"default": true,
			"description": "Receipt Reminder Email",
			"routing": {
				"send": {
					"property": "receipt_reminder_email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "Receipt Status",
			"name": "receipt_status",
			"type": "string",
			"default": "",
			"description": "Receipt Status",
			"routing": {
				"send": {
					"property": "receipt_status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "Reminder Date Before Receipt",
			"name": "reminder_date_before_receipt",
			"type": "number",
			"default": 0,
			"description": "Days Before Receipt",
			"routing": {
				"send": {
					"property": "reminder_date_before_receipt",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "Sale Order Count",
			"name": "sale_order_count",
			"type": "number",
			"default": 0,
			"description": "Number of Source Sale",
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order"
					]
				}
			}
		},
		{
			"displayName": "GET /api/purchase.order.line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Search Purchase Order Line"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"description": "Odoo domain filter (JSON array). Each condition is [field, operator, value].\n\n**Operators:**\n- `=` : equals\n- `!=` : not equals\n- `ilike` : contains (case-insensitive)\n- `like` : contains (case-sensitive)\n- `>` `<` `>=` `<=` : comparison\n- `in` : value is in list\n- `not in` : value is not in list\n\n**Examples:**\n\nExact match:\n```\n[[\"name\", \"=\", \"John\"]]\n```\n\nSearch (contains):\n```\n[[\"name\", \"ilike\", \"john\"]]\n```\n\nMultiple conditions (AND):\n```\n[[\"name\", \"ilike\", \"john\"], [\"email\", \"ilike\", \"gmail\"]]\n```\n\nMultiple values (OR):\n```\n[\"|\", [\"name\", \"=\", \"John\"], [\"name\", \"=\", \"Jane\"]]\n```\n\nFilter by state:\n```\n[[\"state\", \"in\", [\"draft\", \"sent\"]]]\n```\n\nComparison:\n```\n[[\"amount_total\", \">=\", 100000]]\n```\n\nCombined:\n```\n[[\"partner_id.name\", \"ilike\", \"admin\"], [\"state\", \"=\", \"sale\"], [\"amount_total\", \">\", 50000]]\n```\n\n**Tip:** Use `GET /api/{model}/fields` to see available field names and types.",
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
						"Purchase"
					],
					"operation": [
						"Search Purchase Order Line"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,order_id,product_id,price_unit,product_qty,id",
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
						"Purchase"
					],
					"operation": [
						"Search Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Search Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Search Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Search Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Search Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Search Purchase Order Line"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/purchase.order.line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{\n  \"name\": \"PO/001-1\"\n}",
			"description": "Search criteria to find existing record by PO Line Description",
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
					]
				}
			}
		},
		{
			"displayName": "Date Approve",
			"name": "date_approve",
			"type": "string",
			"default": "",
			"description": "Confirmation Date",
			"routing": {
				"send": {
					"property": "date_approve",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
					]
				}
			}
		},
		{
			"displayName": "Date Planned",
			"name": "date_planned",
			"type": "string",
			"default": "",
			"description": "Expected Arrival",
			"routing": {
				"send": {
					"property": "date_planned",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
					]
				}
			}
		},
		{
			"displayName": "Move Dest Ids",
			"name": "move_dest_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Downstream moves alt (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "move_dest_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "order_id",
			"type": "number",
			"default": 0,
			"description": "ID of related purchase.order",
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
					]
				}
			}
		},
		{
			"displayName": "Price Tax",
			"name": "price_tax",
			"type": "number",
			"default": 0,
			"description": "Tax",
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
					]
				}
			}
		},
		{
			"displayName": "Price Unit Discounted",
			"name": "price_unit_discounted",
			"type": "number",
			"default": 0,
			"description": "Unit Price (Discounted)",
			"routing": {
				"send": {
					"property": "price_unit_discounted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
					]
				}
			}
		},
		{
			"displayName": "Propagate Cancel",
			"name": "propagate_cancel",
			"type": "boolean",
			"default": true,
			"description": "Propagate cancellation",
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
					]
				}
			}
		},
		{
			"displayName": "Qty Invoiced",
			"name": "qty_invoiced",
			"type": "number",
			"default": 0,
			"description": "Billed Qty",
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
					]
				}
			}
		},
		{
			"displayName": "Qty Received",
			"name": "qty_received",
			"type": "number",
			"default": 0,
			"description": "Received Qty",
			"routing": {
				"send": {
					"property": "qty_received",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
					]
				}
			}
		},
		{
			"displayName": "Qty Received Manual",
			"name": "qty_received_manual",
			"type": "number",
			"default": 0,
			"description": "Manual Received Qty",
			"routing": {
				"send": {
					"property": "qty_received_manual",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
					]
				}
			}
		},
		{
			"displayName": "Qty Received Method",
			"name": "qty_received_method",
			"type": "string",
			"default": "",
			"description": "Received Qty Method",
			"routing": {
				"send": {
					"property": "qty_received_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
					]
				}
			}
		},
		{
			"displayName": "Qty To Invoice",
			"name": "qty_to_invoice",
			"type": "number",
			"default": 0,
			"description": "To Invoice Quantity",
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
					]
				}
			}
		},
		{
			"displayName": "Sale Line ID",
			"name": "sale_line_id",
			"type": "number",
			"default": 0,
			"description": "ID of related sale.order.line",
			"routing": {
				"send": {
					"property": "sale_line_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
					]
				}
			}
		},
		{
			"displayName": "Sale Order ID",
			"name": "sale_order_id",
			"type": "number",
			"default": 0,
			"description": "ID of related sale.order",
			"routing": {
				"send": {
					"property": "sale_order_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
					]
				}
			}
		},
		{
			"displayName": "Taxes ID",
			"name": "taxes_id",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Taxes (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "taxes_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
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
						"Purchase"
					],
					"operation": [
						"Upsert Purchase Order Line"
					]
				}
			}
		},
];
