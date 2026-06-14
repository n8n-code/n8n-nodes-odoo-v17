import type { INodeProperties } from 'n8n-workflow';

export const resDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					]
				}
			},
			"options": [
				{
					"name": "Search Res Partner",
					"value": "Search Res Partner",
					"action": "Search & read Contact",
					"description": "Search and read res.partner records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/res.partner"
						}
					}
				},
				{
					"name": "Upsert Res Partner",
					"value": "Upsert Res Partner",
					"action": "Upsert Partner",
					"description": "Create or update res.partner record.\n\nSearch by email (Email Address) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/res.partner"
						}
					}
				},
				{
					"name": "Search Res Partner Bank",
					"value": "Search Res Partner Bank",
					"action": "Search & read Bank Accounts",
					"description": "Search and read res.partner.bank records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/res.partner.bank"
						}
					}
				},
				{
					"name": "Upsert Res Partner Bank",
					"value": "Upsert Res Partner Bank",
					"action": "Upsert Bank",
					"description": "Create or update res.partner.bank record.\n\nSearch by acc_number (Bank Account Number) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/res.partner.bank"
						}
					}
				},
				{
					"name": "Search Res Partner Category",
					"value": "Search Res Partner Category",
					"action": "Search & read Partner Tags",
					"description": "Search and read res.partner.category records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/res.partner.category"
						}
					}
				},
				{
					"name": "Upsert Res Partner Category",
					"value": "Upsert Res Partner Category",
					"action": "Upsert Category",
					"description": "Create or update res.partner.category record.\n\nSearch by name (Partner Tag Name) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/res.partner.category"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/res.partner",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Search Res Partner"
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
						"Res"
					],
					"operation": [
						"Search Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,email,phone,category_id,id",
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
						"Res"
					],
					"operation": [
						"Search Res Partner"
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
						"Res"
					],
					"operation": [
						"Search Res Partner"
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
						"Res"
					],
					"operation": [
						"Search Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order, e.g. 'name asc' or 'create_date desc'",
			"default": "name asc",
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
						"Res"
					],
					"operation": [
						"Search Res Partner"
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
						"Res"
					],
					"operation": [
						"Search Res Partner"
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
						"Res"
					],
					"operation": [
						"Search Res Partner"
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
						"Res"
					],
					"operation": [
						"Search Res Partner"
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
						"Res"
					],
					"operation": [
						"Search Res Partner"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/res.partner",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{\n  \"email\": \"john@example.com\"\n}",
			"description": "Search criteria to find existing record by Email Address",
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Active Lang Count",
			"name": "active_lang_count",
			"type": "number",
			"default": 0,
			"description": "Active Lang Count",
			"routing": {
				"send": {
					"property": "active_lang_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Additional Info",
			"name": "additional_info",
			"type": "string",
			"default": "",
			"description": "Additional info",
			"routing": {
				"send": {
					"property": "additional_info",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Avatar 1024",
			"name": "avatar_1024",
			"type": "string",
			"default": "",
			"description": "Avatar 1024",
			"routing": {
				"send": {
					"property": "avatar_1024",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Avatar 128",
			"name": "avatar_128",
			"type": "string",
			"default": "",
			"description": "Avatar 128",
			"routing": {
				"send": {
					"property": "avatar_128",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Avatar 1920",
			"name": "avatar_1920",
			"type": "string",
			"default": "",
			"description": "Avatar",
			"routing": {
				"send": {
					"property": "avatar_1920",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Avatar 256",
			"name": "avatar_256",
			"type": "string",
			"default": "",
			"description": "Avatar 256",
			"routing": {
				"send": {
					"property": "avatar_256",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Avatar 512",
			"name": "avatar_512",
			"type": "string",
			"default": "",
			"description": "Avatar 512",
			"routing": {
				"send": {
					"property": "avatar_512",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Bank Account Count",
			"name": "bank_account_count",
			"type": "number",
			"default": 0,
			"description": "Bank",
			"routing": {
				"send": {
					"property": "bank_account_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Buyer ID",
			"name": "buyer_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.users",
			"routing": {
				"send": {
					"property": "buyer_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Calendar Last Notif Ack",
			"name": "calendar_last_notif_ack",
			"type": "string",
			"default": "",
			"description": "Last notification marked as read from base Calendar",
			"routing": {
				"send": {
					"property": "calendar_last_notif_ack",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Can Publish",
			"name": "can_publish",
			"type": "boolean",
			"default": true,
			"description": "Can Publish",
			"routing": {
				"send": {
					"property": "can_publish",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Category ID",
			"name": "category_id",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Tags (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "category_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Channel Ids",
			"name": "channel_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Channels (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "channel_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "City",
			"name": "city",
			"type": "string",
			"default": "",
			"description": "City",
			"routing": {
				"send": {
					"property": "city",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Color",
			"name": "color",
			"type": "number",
			"default": 0,
			"description": "Color Index",
			"routing": {
				"send": {
					"property": "color",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "comment",
			"type": "string",
			"default": "",
			"description": "Notes",
			"routing": {
				"send": {
					"property": "comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Commercial Company Name",
			"name": "commercial_company_name",
			"type": "string",
			"default": "",
			"description": "Company Name Entity",
			"routing": {
				"send": {
					"property": "commercial_company_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Commercial Partner ID",
			"name": "commercial_partner_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "commercial_partner_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Company Name",
			"name": "company_name",
			"type": "string",
			"default": "",
			"description": "Company Name",
			"routing": {
				"send": {
					"property": "company_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Company Registry",
			"name": "company_registry",
			"type": "string",
			"default": "",
			"description": "Company ID",
			"routing": {
				"send": {
					"property": "company_registry",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Company Type",
			"name": "company_type",
			"type": "string",
			"default": "",
			"description": "Company Type",
			"routing": {
				"send": {
					"property": "company_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Complete Name",
			"name": "complete_name",
			"type": "string",
			"default": "",
			"description": "Complete Name",
			"routing": {
				"send": {
					"property": "complete_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Contact Address",
			"name": "contact_address",
			"type": "string",
			"default": "",
			"description": "Complete Address",
			"routing": {
				"send": {
					"property": "contact_address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Contact Address Inline",
			"name": "contact_address_inline",
			"type": "string",
			"default": "",
			"description": "Inlined Complete Address",
			"routing": {
				"send": {
					"property": "contact_address_inline",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Country ID",
			"name": "country_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.country",
			"routing": {
				"send": {
					"property": "country_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Credit",
			"name": "credit",
			"type": "number",
			"default": 0,
			"description": "Total Receivable",
			"routing": {
				"send": {
					"property": "credit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Credit Limit",
			"name": "credit_limit",
			"type": "number",
			"default": 0,
			"description": "Credit Limit",
			"routing": {
				"send": {
					"property": "credit_limit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Credit To Invoice",
			"name": "credit_to_invoice",
			"type": "number",
			"default": 0,
			"description": "Credit To Invoice",
			"routing": {
				"send": {
					"property": "credit_to_invoice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Customer Rank",
			"name": "customer_rank",
			"type": "number",
			"default": 0,
			"description": "Customer Rank",
			"routing": {
				"send": {
					"property": "customer_rank",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"type": "string",
			"default": "",
			"description": "Date",
			"routing": {
				"send": {
					"property": "date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Days Sales Outstanding",
			"name": "days_sales_outstanding",
			"type": "number",
			"default": 0,
			"description": "Days Sales Outstanding (DSO)",
			"routing": {
				"send": {
					"property": "days_sales_outstanding",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Debit",
			"name": "debit",
			"type": "number",
			"default": 0,
			"description": "Total Payable",
			"routing": {
				"send": {
					"property": "debit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Debit Limit",
			"name": "debit_limit",
			"type": "number",
			"default": 0,
			"description": "Payable Limit",
			"routing": {
				"send": {
					"property": "debit_limit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Duplicated Bank Account Partners Count",
			"name": "duplicated_bank_account_partners_count",
			"type": "number",
			"default": 0,
			"description": "Duplicated Bank Account Partners Count",
			"routing": {
				"send": {
					"property": "duplicated_bank_account_partners_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"description": "Email",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Email Formatted",
			"name": "email_formatted",
			"type": "string",
			"default": "",
			"description": "Formatted Email",
			"routing": {
				"send": {
					"property": "email_formatted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Email Normalized",
			"name": "email_normalized",
			"type": "string",
			"default": "",
			"description": "Normalized Email",
			"routing": {
				"send": {
					"property": "email_normalized",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Employee",
			"name": "employee",
			"type": "boolean",
			"default": true,
			"description": "Employee",
			"routing": {
				"send": {
					"property": "employee",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Employees Count",
			"name": "employees_count",
			"type": "number",
			"default": 0,
			"description": "Employees Count",
			"routing": {
				"send": {
					"property": "employees_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Fiscal Country Codes",
			"name": "fiscal_country_codes",
			"type": "string",
			"default": "",
			"description": "Fiscal Country Codes",
			"routing": {
				"send": {
					"property": "fiscal_country_codes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Function",
			"name": "function",
			"type": "string",
			"default": "",
			"description": "Job Position",
			"routing": {
				"send": {
					"property": "function",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Global Location Number",
			"name": "global_location_number",
			"type": "string",
			"default": "",
			"description": "GLN",
			"routing": {
				"send": {
					"property": "global_location_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Has Unreconciled Entries",
			"name": "has_unreconciled_entries",
			"type": "boolean",
			"default": true,
			"description": "Has Unreconciled Entries",
			"routing": {
				"send": {
					"property": "has_unreconciled_entries",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Hide Peppol Fields",
			"name": "hide_peppol_fields",
			"type": "boolean",
			"default": true,
			"description": "Hide Peppol Fields",
			"routing": {
				"send": {
					"property": "hide_peppol_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Im Status",
			"name": "im_status",
			"type": "string",
			"default": "",
			"description": "IM Status",
			"routing": {
				"send": {
					"property": "im_status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Image 1024",
			"name": "image_1024",
			"type": "string",
			"default": "",
			"description": "Image 1024",
			"routing": {
				"send": {
					"property": "image_1024",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Image 128",
			"name": "image_128",
			"type": "string",
			"default": "",
			"description": "Image 128",
			"routing": {
				"send": {
					"property": "image_128",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Image 1920",
			"name": "image_1920",
			"type": "string",
			"default": "",
			"description": "Image",
			"routing": {
				"send": {
					"property": "image_1920",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Image 256",
			"name": "image_256",
			"type": "string",
			"default": "",
			"description": "Image 256",
			"routing": {
				"send": {
					"property": "image_256",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Image 512",
			"name": "image_512",
			"type": "string",
			"default": "",
			"description": "Image 512",
			"routing": {
				"send": {
					"property": "image_512",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Industry ID",
			"name": "industry_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner.industry",
			"routing": {
				"send": {
					"property": "industry_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Invoice Warn",
			"name": "invoice_warn",
			"type": "string",
			"default": "",
			"description": "Invoice",
			"routing": {
				"send": {
					"property": "invoice_warn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Invoice Warn Msg",
			"name": "invoice_warn_msg",
			"type": "string",
			"default": "",
			"description": "Message for Invoice",
			"routing": {
				"send": {
					"property": "invoice_warn_msg",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Is Blacklisted",
			"name": "is_blacklisted",
			"type": "boolean",
			"default": true,
			"description": "Blacklist",
			"routing": {
				"send": {
					"property": "is_blacklisted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Is Coa Installed",
			"name": "is_coa_installed",
			"type": "boolean",
			"default": true,
			"description": "Is Coa Installed",
			"routing": {
				"send": {
					"property": "is_coa_installed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Is Company",
			"name": "is_company",
			"type": "boolean",
			"default": true,
			"description": "Is a Company",
			"routing": {
				"send": {
					"property": "is_company",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Is Public",
			"name": "is_public",
			"type": "boolean",
			"default": true,
			"description": "Is Public",
			"routing": {
				"send": {
					"property": "is_public",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Is Published",
			"name": "is_published",
			"type": "boolean",
			"default": true,
			"description": "Is Published",
			"routing": {
				"send": {
					"property": "is_published",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Journal Item Count",
			"name": "journal_item_count",
			"type": "number",
			"default": 0,
			"description": "Journal Items",
			"routing": {
				"send": {
					"property": "journal_item_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Buyer Document Number",
			"name": "l10n_id_buyer_document_number",
			"type": "string",
			"default": "",
			"description": "Document Number",
			"routing": {
				"send": {
					"property": "l10n_id_buyer_document_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Buyer Document Type",
			"name": "l10n_id_buyer_document_type",
			"type": "string",
			"default": "",
			"description": "Document Type",
			"routing": {
				"send": {
					"property": "l10n_id_buyer_document_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Kode Transaksi",
			"name": "l10n_id_kode_transaksi",
			"type": "string",
			"default": "",
			"description": "Kode Transaksi",
			"routing": {
				"send": {
					"property": "l10n_id_kode_transaksi",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Nik",
			"name": "l10n_id_nik",
			"type": "string",
			"default": "",
			"description": "NIK",
			"routing": {
				"send": {
					"property": "l10n_id_nik",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Pkp",
			"name": "l10n_id_pkp",
			"type": "boolean",
			"default": true,
			"description": "ID PKP",
			"routing": {
				"send": {
					"property": "l10n_id_pkp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Tax Address",
			"name": "l10n_id_tax_address",
			"type": "string",
			"default": "",
			"description": "Tax Address",
			"routing": {
				"send": {
					"property": "l10n_id_tax_address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Tax Name",
			"name": "l10n_id_tax_name",
			"type": "string",
			"default": "",
			"description": "Tax Name",
			"routing": {
				"send": {
					"property": "l10n_id_tax_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Tku",
			"name": "l10n_id_tku",
			"type": "string",
			"default": "",
			"description": "TKU",
			"routing": {
				"send": {
					"property": "l10n_id_tku",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Lang",
			"name": "lang",
			"type": "string",
			"default": "",
			"description": "Language",
			"routing": {
				"send": {
					"property": "lang",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Last Time Entries Checked",
			"name": "last_time_entries_checked",
			"type": "string",
			"default": "",
			"description": "Latest Invoices & Payments Matching Date",
			"routing": {
				"send": {
					"property": "last_time_entries_checked",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Last Website So ID",
			"name": "last_website_so_id",
			"type": "number",
			"default": 0,
			"description": "ID of related sale.order",
			"routing": {
				"send": {
					"property": "last_website_so_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Meeting Count",
			"name": "meeting_count",
			"type": "number",
			"default": 0,
			"description": "# Meetings",
			"routing": {
				"send": {
					"property": "meeting_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Meeting Ids",
			"name": "meeting_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Meetings (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "meeting_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Message Bounce",
			"name": "message_bounce",
			"type": "number",
			"default": 0,
			"description": "Bounce",
			"routing": {
				"send": {
					"property": "message_bounce",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Mobile",
			"name": "mobile",
			"type": "string",
			"default": "",
			"description": "Mobile",
			"routing": {
				"send": {
					"property": "mobile",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Mobile Blacklisted",
			"name": "mobile_blacklisted",
			"type": "boolean",
			"default": true,
			"description": "Blacklisted Phone Is Mobile",
			"routing": {
				"send": {
					"property": "mobile_blacklisted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Name",
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Opportunity Count",
			"name": "opportunity_count",
			"type": "number",
			"default": 0,
			"description": "Opportunity",
			"routing": {
				"send": {
					"property": "opportunity_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Parent ID",
			"name": "parent_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "parent_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Parent Name",
			"name": "parent_name",
			"type": "string",
			"default": "",
			"description": "Parent name",
			"routing": {
				"send": {
					"property": "parent_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Partner Gid",
			"name": "partner_gid",
			"type": "number",
			"default": 0,
			"description": "Company database ID",
			"routing": {
				"send": {
					"property": "partner_gid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Partner Latitude",
			"name": "partner_latitude",
			"type": "number",
			"default": 0,
			"description": "Geo Latitude",
			"routing": {
				"send": {
					"property": "partner_latitude",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Partner Longitude",
			"name": "partner_longitude",
			"type": "number",
			"default": 0,
			"description": "Geo Longitude",
			"routing": {
				"send": {
					"property": "partner_longitude",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Partner Share",
			"name": "partner_share",
			"type": "boolean",
			"default": true,
			"description": "Share Partner",
			"routing": {
				"send": {
					"property": "partner_share",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Payment Token Count",
			"name": "payment_token_count",
			"type": "number",
			"default": 0,
			"description": "Payment Token Count",
			"routing": {
				"send": {
					"property": "payment_token_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Peppol Eas",
			"name": "peppol_eas",
			"type": "string",
			"default": "",
			"description": "Peppol e-address (EAS)",
			"routing": {
				"send": {
					"property": "peppol_eas",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Peppol Endpoint",
			"name": "peppol_endpoint",
			"type": "string",
			"default": "",
			"description": "Peppol Endpoint",
			"routing": {
				"send": {
					"property": "peppol_endpoint",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Perform Vies Validation",
			"name": "perform_vies_validation",
			"type": "boolean",
			"default": true,
			"description": "Perform Vies Validation",
			"routing": {
				"send": {
					"property": "perform_vies_validation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Phone",
			"name": "phone",
			"type": "string",
			"default": "",
			"description": "Phone",
			"routing": {
				"send": {
					"property": "phone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Phone Blacklisted",
			"name": "phone_blacklisted",
			"type": "boolean",
			"default": true,
			"description": "Blacklisted Phone is Phone",
			"routing": {
				"send": {
					"property": "phone_blacklisted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Phone Mobile Search",
			"name": "phone_mobile_search",
			"type": "string",
			"default": "",
			"description": "Phone/Mobile",
			"routing": {
				"send": {
					"property": "phone_mobile_search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Phone Sanitized",
			"name": "phone_sanitized",
			"type": "string",
			"default": "",
			"description": "Sanitized Number",
			"routing": {
				"send": {
					"property": "phone_sanitized",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Phone Sanitized Blacklisted",
			"name": "phone_sanitized_blacklisted",
			"type": "boolean",
			"default": true,
			"description": "Phone Blacklisted",
			"routing": {
				"send": {
					"property": "phone_sanitized_blacklisted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Picking Warn",
			"name": "picking_warn",
			"type": "string",
			"default": "",
			"description": "Stock Picking",
			"routing": {
				"send": {
					"property": "picking_warn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Picking Warn Msg",
			"name": "picking_warn_msg",
			"type": "string",
			"default": "",
			"description": "Message for Stock Picking",
			"routing": {
				"send": {
					"property": "picking_warn_msg",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Plan To Change Bike",
			"name": "plan_to_change_bike",
			"type": "boolean",
			"default": true,
			"description": "Plan To Change Bike",
			"routing": {
				"send": {
					"property": "plan_to_change_bike",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Plan To Change Car",
			"name": "plan_to_change_car",
			"type": "boolean",
			"default": true,
			"description": "Plan To Change Car",
			"routing": {
				"send": {
					"property": "plan_to_change_car",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Property Account Payable ID",
			"name": "property_account_payable_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "property_account_payable_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Property Account Position ID",
			"name": "property_account_position_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.fiscal.position",
			"routing": {
				"send": {
					"property": "property_account_position_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Property Account Receivable ID",
			"name": "property_account_receivable_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "property_account_receivable_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Property Delivery Carrier ID",
			"name": "property_delivery_carrier_id",
			"type": "number",
			"default": 0,
			"description": "ID of related delivery.carrier",
			"routing": {
				"send": {
					"property": "property_delivery_carrier_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Property Payment Term ID",
			"name": "property_payment_term_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.payment.term",
			"routing": {
				"send": {
					"property": "property_payment_term_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Property Product Pricelist",
			"name": "property_product_pricelist",
			"type": "number",
			"default": 0,
			"description": "ID of related product.pricelist",
			"routing": {
				"send": {
					"property": "property_product_pricelist",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Property Purchase Currency ID",
			"name": "property_purchase_currency_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.currency",
			"routing": {
				"send": {
					"property": "property_purchase_currency_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Property Stock Customer",
			"name": "property_stock_customer",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "property_stock_customer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Property Stock Supplier",
			"name": "property_stock_supplier",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "property_stock_supplier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Property Supplier Payment Term ID",
			"name": "property_supplier_payment_term_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.payment.term",
			"routing": {
				"send": {
					"property": "property_supplier_payment_term_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Purchase Order Count",
			"name": "purchase_order_count",
			"type": "number",
			"default": 0,
			"description": "Purchase Order Count",
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Purchase Warn",
			"name": "purchase_warn",
			"type": "string",
			"default": "",
			"description": "Purchase Order Warning",
			"routing": {
				"send": {
					"property": "purchase_warn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Purchase Warn Msg",
			"name": "purchase_warn_msg",
			"type": "string",
			"default": "",
			"description": "Message for Purchase Order",
			"routing": {
				"send": {
					"property": "purchase_warn_msg",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Receipt Reminder Email",
			"name": "receipt_reminder_email",
			"type": "boolean",
			"default": true,
			"description": "Receipt Reminder",
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Ref",
			"name": "ref",
			"type": "string",
			"default": "",
			"description": "Reference",
			"routing": {
				"send": {
					"property": "ref",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Sale Warn",
			"name": "sale_warn",
			"type": "string",
			"default": "",
			"description": "Sales Warnings",
			"routing": {
				"send": {
					"property": "sale_warn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Sale Warn Msg",
			"name": "sale_warn_msg",
			"type": "string",
			"default": "",
			"description": "Message for Sales Order",
			"routing": {
				"send": {
					"property": "sale_warn_msg",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Same Company Registry Partner ID",
			"name": "same_company_registry_partner_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "same_company_registry_partner_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Same Vat Partner ID",
			"name": "same_vat_partner_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "same_vat_partner_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Self",
			"name": "self",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "self",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Show Credit Limit",
			"name": "show_credit_limit",
			"type": "boolean",
			"default": true,
			"description": "Show Credit Limit",
			"routing": {
				"send": {
					"property": "show_credit_limit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Signup Expiration",
			"name": "signup_expiration",
			"type": "string",
			"default": "",
			"description": "Signup Expiration",
			"routing": {
				"send": {
					"property": "signup_expiration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Signup Token",
			"name": "signup_token",
			"type": "string",
			"default": "",
			"description": "Signup Token",
			"routing": {
				"send": {
					"property": "signup_token",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Signup Type",
			"name": "signup_type",
			"type": "string",
			"default": "",
			"description": "Signup Token Type",
			"routing": {
				"send": {
					"property": "signup_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Signup URL",
			"name": "signup_url",
			"type": "string",
			"default": "",
			"description": "Signup URL",
			"routing": {
				"send": {
					"property": "signup_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Signup Valid",
			"name": "signup_valid",
			"type": "boolean",
			"default": true,
			"description": "Signup Token is Valid",
			"routing": {
				"send": {
					"property": "signup_valid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Starred Message Ids",
			"name": "starred_message_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Starred Message (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "starred_message_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "State ID",
			"name": "state_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.country.state",
			"routing": {
				"send": {
					"property": "state_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Street",
			"name": "street",
			"type": "string",
			"default": "",
			"description": "Street",
			"routing": {
				"send": {
					"property": "street",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Street 2",
			"name": "street2",
			"type": "string",
			"default": "",
			"description": "Street2",
			"routing": {
				"send": {
					"property": "street2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Supplier Invoice Count",
			"name": "supplier_invoice_count",
			"type": "number",
			"default": 0,
			"description": "# Vendor Bills",
			"routing": {
				"send": {
					"property": "supplier_invoice_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Supplier Rank",
			"name": "supplier_rank",
			"type": "number",
			"default": 0,
			"description": "Supplier Rank",
			"routing": {
				"send": {
					"property": "supplier_rank",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Task Count",
			"name": "task_count",
			"type": "number",
			"default": 0,
			"description": "# Tasks",
			"routing": {
				"send": {
					"property": "task_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner.title",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Total Invoiced",
			"name": "total_invoiced",
			"type": "number",
			"default": 0,
			"description": "Total Invoiced",
			"routing": {
				"send": {
					"property": "total_invoiced",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Trust",
			"name": "trust",
			"type": "string",
			"default": "",
			"description": "Degree of trust you have in this debtor",
			"routing": {
				"send": {
					"property": "trust",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"description": "Address Type",
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Tz",
			"name": "tz",
			"type": "string",
			"default": "",
			"description": "Timezone",
			"routing": {
				"send": {
					"property": "tz",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Tz Offset",
			"name": "tz_offset",
			"type": "string",
			"default": "",
			"description": "Timezone offset",
			"routing": {
				"send": {
					"property": "tz_offset",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Ubl Cii Format",
			"name": "ubl_cii_format",
			"type": "string",
			"default": "",
			"description": "Format",
			"routing": {
				"send": {
					"property": "ubl_cii_format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Use Partner Credit Limit",
			"name": "use_partner_credit_limit",
			"type": "boolean",
			"default": true,
			"description": "Partner Limit",
			"routing": {
				"send": {
					"property": "use_partner_credit_limit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "User Livechat Username",
			"name": "user_livechat_username",
			"type": "string",
			"default": "",
			"description": "User Livechat Username",
			"routing": {
				"send": {
					"property": "user_livechat_username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Vat",
			"name": "vat",
			"type": "string",
			"default": "",
			"description": "Tax ID",
			"routing": {
				"send": {
					"property": "vat",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Vies Valid",
			"name": "vies_valid",
			"type": "boolean",
			"default": true,
			"description": "Intra-Community Valid",
			"routing": {
				"send": {
					"property": "vies_valid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Vies Vat To Check",
			"name": "vies_vat_to_check",
			"type": "string",
			"default": "",
			"description": "Vies Vat To Check",
			"routing": {
				"send": {
					"property": "vies_vat_to_check",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Website",
			"name": "website",
			"type": "string",
			"default": "",
			"description": "Website Link",
			"routing": {
				"send": {
					"property": "website",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Website Published",
			"name": "website_published",
			"type": "boolean",
			"default": true,
			"description": "Visible on current website",
			"routing": {
				"send": {
					"property": "website_published",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Website URL",
			"name": "website_url",
			"type": "string",
			"default": "",
			"description": "Website URL",
			"routing": {
				"send": {
					"property": "website_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "Zip",
			"name": "zip",
			"type": "string",
			"default": "",
			"description": "Zip",
			"routing": {
				"send": {
					"property": "zip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner"
					]
				}
			}
		},
		{
			"displayName": "GET /api/res.partner.bank",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Search Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Search Res Partner Bank"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "acc_number,partner_id,bank_name,id",
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
						"Res"
					],
					"operation": [
						"Search Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Search Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Search Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Search Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Search Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Search Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Search Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Search Res Partner Bank"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/res.partner.bank",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{\n  \"acc_number\": \"1234567890\"\n}",
			"description": "Search criteria to find existing record by Bank Account Number",
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
					]
				}
			}
		},
		{
			"displayName": "Acc Holder Name",
			"name": "acc_holder_name",
			"type": "string",
			"default": "",
			"description": "Account Holder Name",
			"routing": {
				"send": {
					"property": "acc_holder_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
					]
				}
			}
		},
		{
			"displayName": "Acc Number",
			"name": "acc_number",
			"type": "string",
			"default": "",
			"description": "Account Number",
			"routing": {
				"send": {
					"property": "acc_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
					]
				}
			}
		},
		{
			"displayName": "Acc Type",
			"name": "acc_type",
			"type": "string",
			"default": "",
			"description": "Type",
			"routing": {
				"send": {
					"property": "acc_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
					]
				}
			}
		},
		{
			"displayName": "Allow Out Payment",
			"name": "allow_out_payment",
			"type": "boolean",
			"default": true,
			"description": "Send Money",
			"routing": {
				"send": {
					"property": "allow_out_payment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
					]
				}
			}
		},
		{
			"displayName": "Bank Bic",
			"name": "bank_bic",
			"type": "string",
			"default": "",
			"description": "Bank Identifier Code",
			"routing": {
				"send": {
					"property": "bank_bic",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
					]
				}
			}
		},
		{
			"displayName": "Bank ID",
			"name": "bank_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.bank",
			"routing": {
				"send": {
					"property": "bank_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
					]
				}
			}
		},
		{
			"displayName": "Bank Name",
			"name": "bank_name",
			"type": "string",
			"default": "",
			"description": "Name",
			"routing": {
				"send": {
					"property": "bank_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
					]
				}
			}
		},
		{
			"displayName": "Has Iban Warning",
			"name": "has_iban_warning",
			"type": "boolean",
			"default": true,
			"description": "Has Iban Warning",
			"routing": {
				"send": {
					"property": "has_iban_warning",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
					]
				}
			}
		},
		{
			"displayName": "Has Money Transfer Warning",
			"name": "has_money_transfer_warning",
			"type": "boolean",
			"default": true,
			"description": "Has Money Transfer Warning",
			"routing": {
				"send": {
					"property": "has_money_transfer_warning",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
					]
				}
			}
		},
		{
			"displayName": "Lock Trust Fields",
			"name": "lock_trust_fields",
			"type": "boolean",
			"default": true,
			"description": "Lock Trust Fields",
			"routing": {
				"send": {
					"property": "lock_trust_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
					]
				}
			}
		},
		{
			"displayName": "Money Transfer Service",
			"name": "money_transfer_service",
			"type": "string",
			"default": "",
			"description": "Money Transfer Service",
			"routing": {
				"send": {
					"property": "money_transfer_service",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
					]
				}
			}
		},
		{
			"displayName": "Partner Country Name",
			"name": "partner_country_name",
			"type": "string",
			"default": "",
			"description": "Country Name",
			"routing": {
				"send": {
					"property": "partner_country_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
					]
				}
			}
		},
		{
			"displayName": "Partner Customer Rank",
			"name": "partner_customer_rank",
			"type": "number",
			"default": 0,
			"description": "Customer Rank",
			"routing": {
				"send": {
					"property": "partner_customer_rank",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
					]
				}
			}
		},
		{
			"displayName": "Partner Supplier Rank",
			"name": "partner_supplier_rank",
			"type": "number",
			"default": 0,
			"description": "Supplier Rank",
			"routing": {
				"send": {
					"property": "partner_supplier_rank",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
					]
				}
			}
		},
		{
			"displayName": "Sanitized Acc Number",
			"name": "sanitized_acc_number",
			"type": "string",
			"default": "",
			"description": "Sanitized Account Number",
			"routing": {
				"send": {
					"property": "sanitized_acc_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
					]
				}
			}
		},
		{
			"displayName": "User Has Group Validate Bank Account",
			"name": "user_has_group_validate_bank_account",
			"type": "boolean",
			"default": true,
			"description": "User Has Group Validate Bank Account",
			"routing": {
				"send": {
					"property": "user_has_group_validate_bank_account",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Bank"
					]
				}
			}
		},
		{
			"displayName": "GET /api/res.partner.category",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Search Res Partner Category"
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
						"Res"
					],
					"operation": [
						"Search Res Partner Category"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,color,id",
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
						"Res"
					],
					"operation": [
						"Search Res Partner Category"
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
						"Res"
					],
					"operation": [
						"Search Res Partner Category"
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
						"Res"
					],
					"operation": [
						"Search Res Partner Category"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order, e.g. 'name asc' or 'create_date desc'",
			"default": "name asc",
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
						"Res"
					],
					"operation": [
						"Search Res Partner Category"
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
						"Res"
					],
					"operation": [
						"Search Res Partner Category"
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
						"Res"
					],
					"operation": [
						"Search Res Partner Category"
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
						"Res"
					],
					"operation": [
						"Search Res Partner Category"
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
						"Res"
					],
					"operation": [
						"Search Res Partner Category"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/res.partner.category",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner Category"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{\n  \"name\": \"VIP\"\n}",
			"description": "Search criteria to find existing record by Partner Tag Name",
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Category"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Category"
					]
				}
			}
		},
		{
			"displayName": "Color",
			"name": "color",
			"type": "number",
			"default": 0,
			"description": "Color",
			"routing": {
				"send": {
					"property": "color",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner Category"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Tag Name",
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Category"
					]
				}
			}
		},
		{
			"displayName": "Parent ID",
			"name": "parent_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner.category",
			"routing": {
				"send": {
					"property": "parent_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner Category"
					]
				}
			}
		},
		{
			"displayName": "Parent Path",
			"name": "parent_path",
			"type": "string",
			"default": "",
			"description": "Parent Path",
			"routing": {
				"send": {
					"property": "parent_path",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner Category"
					]
				}
			}
		},
		{
			"displayName": "Partner Ids",
			"name": "partner_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Partners (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "partner_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Res"
					],
					"operation": [
						"Upsert Res Partner Category"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Category"
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
						"Res"
					],
					"operation": [
						"Upsert Res Partner Category"
					]
				}
			}
		},
];
