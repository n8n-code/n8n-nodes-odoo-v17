import type { INodeProperties } from 'n8n-workflow';

export const hrDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					]
				}
			},
			"options": [
				{
					"name": "Search Hr Department",
					"value": "Search Hr Department",
					"action": "Search & read Department",
					"description": "Search and read hr.department records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/hr.department"
						}
					}
				},
				{
					"name": "Upsert Hr Department",
					"value": "Upsert Hr Department",
					"action": "Upsert Department",
					"description": "Create or update hr.department record.\n\nSearch by name (Department Name) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/hr.department"
						}
					}
				},
				{
					"name": "Search Hr Employee",
					"value": "Search Hr Employee",
					"action": "Search & read Employee",
					"description": "Search and read hr.employee records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/hr.employee"
						}
					}
				},
				{
					"name": "Upsert Hr Employee",
					"value": "Upsert Hr Employee",
					"action": "Upsert Employee",
					"description": "Create or update hr.employee record.\n\nSearch by work_email (Work Email) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/hr.employee"
						}
					}
				},
				{
					"name": "Search Hr Job",
					"value": "Search Hr Job",
					"action": "Search & read Job Position",
					"description": "Search and read hr.job records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/hr.job"
						}
					}
				},
				{
					"name": "Upsert Hr Job",
					"value": "Upsert Hr Job",
					"action": "Upsert Job",
					"description": "Create or update hr.job record.\n\nSearch by name (Job Position Name) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/hr.job"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/hr.department",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Search Hr Department"
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
						"Hr"
					],
					"operation": [
						"Search Hr Department"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,manager_id,id",
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
						"Hr"
					],
					"operation": [
						"Search Hr Department"
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
						"Hr"
					],
					"operation": [
						"Search Hr Department"
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
						"Hr"
					],
					"operation": [
						"Search Hr Department"
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
						"Hr"
					],
					"operation": [
						"Search Hr Department"
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
						"Hr"
					],
					"operation": [
						"Search Hr Department"
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
						"Hr"
					],
					"operation": [
						"Search Hr Department"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/hr.department",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Department"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{\n  \"name\": \"Engineering\"\n}",
			"description": "Search criteria to find existing record by Department Name",
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Department"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Department"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Department"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Department"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Department"
					]
				}
			}
		},
		{
			"displayName": "Expense Sheets To Approve Count",
			"name": "expense_sheets_to_approve_count",
			"type": "number",
			"default": 0,
			"description": "Expenses Reports to Approve",
			"routing": {
				"send": {
					"property": "expense_sheets_to_approve_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Department"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Department"
					]
				}
			}
		},
		{
			"displayName": "Manager ID",
			"name": "manager_id",
			"type": "number",
			"default": 0,
			"description": "ID of related hr.employee",
			"routing": {
				"send": {
					"property": "manager_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Department"
					]
				}
			}
		},
		{
			"displayName": "Master Department ID",
			"name": "master_department_id",
			"type": "number",
			"default": 0,
			"description": "ID of related hr.department",
			"routing": {
				"send": {
					"property": "master_department_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Department"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Department"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Department"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Department"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Department"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Department"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Department"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Department"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Department"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Department Name",
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Department"
					]
				}
			}
		},
		{
			"displayName": "Note",
			"name": "note",
			"type": "string",
			"default": "",
			"description": "Note",
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Department"
					]
				}
			}
		},
		{
			"displayName": "Parent ID",
			"name": "parent_id",
			"type": "number",
			"default": 0,
			"description": "ID of related hr.department",
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Department"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Department"
					]
				}
			}
		},
		{
			"displayName": "Plans Count",
			"name": "plans_count",
			"type": "number",
			"default": 0,
			"description": "Plans Count",
			"routing": {
				"send": {
					"property": "plans_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Department"
					]
				}
			}
		},
		{
			"displayName": "Total Employee",
			"name": "total_employee",
			"type": "number",
			"default": 0,
			"description": "Total Employee",
			"routing": {
				"send": {
					"property": "total_employee",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Department"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Department"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Department"
					]
				}
			}
		},
		{
			"displayName": "GET /api/hr.employee",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Search Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Search Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,work_email,department_id,id",
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
						"Hr"
					],
					"operation": [
						"Search Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Search Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Search Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Search Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Search Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Search Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/hr.employee",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{\n  \"work_email\": \"john@demo.com\"\n}",
			"description": "Search criteria to find existing record by Work Email",
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Additional Note",
			"name": "additional_note",
			"type": "string",
			"default": "",
			"description": "Additional Note",
			"routing": {
				"send": {
					"property": "additional_note",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Address ID",
			"name": "address_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "address_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Bank Account ID",
			"name": "bank_account_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner.bank",
			"routing": {
				"send": {
					"property": "bank_account_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Barcode",
			"name": "barcode",
			"type": "string",
			"default": "",
			"description": "Badge ID",
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Birthday",
			"name": "birthday",
			"type": "string",
			"default": "",
			"description": "Date of Birth",
			"routing": {
				"send": {
					"property": "birthday",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Category Ids",
			"name": "category_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Tags (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "category_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Certificate",
			"name": "certificate",
			"type": "string",
			"default": "",
			"description": "Certificate Level",
			"routing": {
				"send": {
					"property": "certificate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Child All Count",
			"name": "child_all_count",
			"type": "number",
			"default": 0,
			"description": "Indirect Subordinates Count",
			"routing": {
				"send": {
					"property": "child_all_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Child Count",
			"name": "child_count",
			"type": "number",
			"default": 0,
			"description": "Direct Subordinates Count",
			"routing": {
				"send": {
					"property": "child_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Children",
			"name": "children",
			"type": "number",
			"default": 0,
			"description": "Number of Dependent Children",
			"routing": {
				"send": {
					"property": "children",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Coach ID",
			"name": "coach_id",
			"type": "number",
			"default": 0,
			"description": "ID of related hr.employee",
			"routing": {
				"send": {
					"property": "coach_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Company Country Code",
			"name": "company_country_code",
			"type": "string",
			"default": "",
			"description": "Country Code",
			"routing": {
				"send": {
					"property": "company_country_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Company Country ID",
			"name": "company_country_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.country",
			"routing": {
				"send": {
					"property": "company_country_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Country Of Birth",
			"name": "country_of_birth",
			"type": "number",
			"default": 0,
			"description": "ID of related res.country",
			"routing": {
				"send": {
					"property": "country_of_birth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Department Color",
			"name": "department_color",
			"type": "number",
			"default": 0,
			"description": "Department Color",
			"routing": {
				"send": {
					"property": "department_color",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Department ID",
			"name": "department_id",
			"type": "number",
			"default": 0,
			"description": "ID of related hr.department",
			"routing": {
				"send": {
					"property": "department_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Departure Date",
			"name": "departure_date",
			"type": "string",
			"default": "",
			"description": "Departure Date",
			"routing": {
				"send": {
					"property": "departure_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Departure Description",
			"name": "departure_description",
			"type": "string",
			"default": "",
			"description": "Additional Information",
			"routing": {
				"send": {
					"property": "departure_description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Departure Reason ID",
			"name": "departure_reason_id",
			"type": "number",
			"default": 0,
			"description": "ID of related hr.departure.reason",
			"routing": {
				"send": {
					"property": "departure_reason_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Driving License",
			"name": "driving_license",
			"type": "string",
			"default": "",
			"description": "Driving License",
			"routing": {
				"send": {
					"property": "driving_license",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Emergency Contact",
			"name": "emergency_contact",
			"type": "string",
			"default": "",
			"description": "Contact Name",
			"routing": {
				"send": {
					"property": "emergency_contact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Emergency Phone",
			"name": "emergency_phone",
			"type": "string",
			"default": "",
			"description": "Contact Phone",
			"routing": {
				"send": {
					"property": "emergency_phone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Employee Cars Count",
			"name": "employee_cars_count",
			"type": "number",
			"default": 0,
			"description": "Cars",
			"routing": {
				"send": {
					"property": "employee_cars_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Employee Properties",
			"name": "employee_properties",
			"type": "string",
			"default": "",
			"description": "Properties",
			"routing": {
				"send": {
					"property": "employee_properties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Employee Type",
			"name": "employee_type",
			"type": "string",
			"default": "",
			"description": "Employee Type",
			"routing": {
				"send": {
					"property": "employee_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Expense Manager ID",
			"name": "expense_manager_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.users",
			"routing": {
				"send": {
					"property": "expense_manager_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Filter For Expense",
			"name": "filter_for_expense",
			"type": "boolean",
			"default": true,
			"description": "Filter For Expense",
			"routing": {
				"send": {
					"property": "filter_for_expense",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Gender",
			"name": "gender",
			"type": "string",
			"default": "",
			"description": "Gender",
			"routing": {
				"send": {
					"property": "gender",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Has Work Permit",
			"name": "has_work_permit",
			"type": "string",
			"default": "",
			"description": "Work Permit",
			"routing": {
				"send": {
					"property": "has_work_permit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Hr Icon Display",
			"name": "hr_icon_display",
			"type": "string",
			"default": "",
			"description": "Hr Icon Display",
			"routing": {
				"send": {
					"property": "hr_icon_display",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Hr Presence State",
			"name": "hr_presence_state",
			"type": "string",
			"default": "",
			"description": "Hr Presence State",
			"routing": {
				"send": {
					"property": "hr_presence_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "ID Card",
			"name": "id_card",
			"type": "string",
			"default": "",
			"description": "ID Card Copy",
			"routing": {
				"send": {
					"property": "id_card",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Identification ID",
			"name": "identification_id",
			"type": "string",
			"default": "",
			"description": "Identification No",
			"routing": {
				"send": {
					"property": "identification_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Is Subordinate",
			"name": "is_subordinate",
			"type": "boolean",
			"default": true,
			"description": "Is Subordinate",
			"routing": {
				"send": {
					"property": "is_subordinate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Job ID",
			"name": "job_id",
			"type": "number",
			"default": 0,
			"description": "ID of related hr.job",
			"routing": {
				"send": {
					"property": "job_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Job Title",
			"name": "job_title",
			"type": "string",
			"default": "",
			"description": "Job Title",
			"routing": {
				"send": {
					"property": "job_title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Km Home Work",
			"name": "km_home_work",
			"type": "number",
			"default": 0,
			"description": "Home-Work Distance",
			"routing": {
				"send": {
					"property": "km_home_work",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Lang",
			"name": "lang",
			"type": "string",
			"default": "",
			"description": "Lang",
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Last Activity",
			"name": "last_activity",
			"type": "string",
			"default": "",
			"description": "Last Activity",
			"routing": {
				"send": {
					"property": "last_activity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Last Activity Time",
			"name": "last_activity_time",
			"type": "string",
			"default": "",
			"description": "Last Activity Time",
			"routing": {
				"send": {
					"property": "last_activity_time",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "License Plate",
			"name": "license_plate",
			"type": "string",
			"default": "",
			"description": "License Plate",
			"routing": {
				"send": {
					"property": "license_plate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Marital",
			"name": "marital",
			"type": "string",
			"default": "",
			"description": "Marital Status",
			"routing": {
				"send": {
					"property": "marital",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Member Of Department",
			"name": "member_of_department",
			"type": "boolean",
			"default": true,
			"description": "Member of department",
			"routing": {
				"send": {
					"property": "member_of_department",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Message Main Attachment ID",
			"name": "message_main_attachment_id",
			"type": "number",
			"default": 0,
			"description": "ID of related ir.attachment",
			"routing": {
				"send": {
					"property": "message_main_attachment_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Mobile Phone",
			"name": "mobile_phone",
			"type": "string",
			"default": "",
			"description": "Work Mobile",
			"routing": {
				"send": {
					"property": "mobile_phone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Mobility Card",
			"name": "mobility_card",
			"type": "string",
			"default": "",
			"description": "Mobility Card",
			"routing": {
				"send": {
					"property": "mobility_card",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Employee Name",
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Newly Hired",
			"name": "newly_hired",
			"type": "boolean",
			"default": true,
			"description": "Newly Hired",
			"routing": {
				"send": {
					"property": "newly_hired",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "notes",
			"type": "string",
			"default": "",
			"description": "Notes",
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Parent ID",
			"name": "parent_id",
			"type": "number",
			"default": 0,
			"description": "ID of related hr.employee",
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Passport ID",
			"name": "passport_id",
			"type": "string",
			"default": "",
			"description": "Passport No",
			"routing": {
				"send": {
					"property": "passport_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Permit No",
			"name": "permit_no",
			"type": "string",
			"default": "",
			"description": "Work Permit No",
			"routing": {
				"send": {
					"property": "permit_no",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Pin",
			"name": "pin",
			"type": "string",
			"default": "",
			"description": "PIN",
			"routing": {
				"send": {
					"property": "pin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Place Of Birth",
			"name": "place_of_birth",
			"type": "string",
			"default": "",
			"description": "Place of Birth",
			"routing": {
				"send": {
					"property": "place_of_birth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Private Car Plate",
			"name": "private_car_plate",
			"type": "string",
			"default": "",
			"description": "Private Car Plate",
			"routing": {
				"send": {
					"property": "private_car_plate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Private City",
			"name": "private_city",
			"type": "string",
			"default": "",
			"description": "Private City",
			"routing": {
				"send": {
					"property": "private_city",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Private Country ID",
			"name": "private_country_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.country",
			"routing": {
				"send": {
					"property": "private_country_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Private Email",
			"name": "private_email",
			"type": "string",
			"default": "",
			"description": "Private Email",
			"routing": {
				"send": {
					"property": "private_email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Private Phone",
			"name": "private_phone",
			"type": "string",
			"default": "",
			"description": "Private Phone",
			"routing": {
				"send": {
					"property": "private_phone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Private State ID",
			"name": "private_state_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.country.state",
			"routing": {
				"send": {
					"property": "private_state_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Private Street",
			"name": "private_street",
			"type": "string",
			"default": "",
			"description": "Private Street",
			"routing": {
				"send": {
					"property": "private_street",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Private Street 2",
			"name": "private_street2",
			"type": "string",
			"default": "",
			"description": "Private Street2",
			"routing": {
				"send": {
					"property": "private_street2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Private Zip",
			"name": "private_zip",
			"type": "string",
			"default": "",
			"description": "Private Zip",
			"routing": {
				"send": {
					"property": "private_zip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Resource Calendar ID",
			"name": "resource_calendar_id",
			"type": "number",
			"default": 0,
			"description": "ID of related resource.calendar",
			"routing": {
				"send": {
					"property": "resource_calendar_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Resource ID",
			"name": "resource_id",
			"type": "number",
			"default": 0,
			"description": "ID of related resource.resource",
			"routing": {
				"send": {
					"property": "resource_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Show Hr Icon Display",
			"name": "show_hr_icon_display",
			"type": "boolean",
			"default": true,
			"description": "Show Hr Icon Display",
			"routing": {
				"send": {
					"property": "show_hr_icon_display",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Sinid",
			"name": "sinid",
			"type": "string",
			"default": "",
			"description": "SIN No",
			"routing": {
				"send": {
					"property": "sinid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Skill Ids",
			"name": "skill_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Skill (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "skill_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Spouse Birthdate",
			"name": "spouse_birthdate",
			"type": "string",
			"default": "",
			"description": "Spouse Birthdate",
			"routing": {
				"send": {
					"property": "spouse_birthdate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Spouse Complete Name",
			"name": "spouse_complete_name",
			"type": "string",
			"default": "",
			"description": "Spouse Complete Name",
			"routing": {
				"send": {
					"property": "spouse_complete_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Ssnid",
			"name": "ssnid",
			"type": "string",
			"default": "",
			"description": "SSN No",
			"routing": {
				"send": {
					"property": "ssnid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Study Field",
			"name": "study_field",
			"type": "string",
			"default": "",
			"description": "Field of Study",
			"routing": {
				"send": {
					"property": "study_field",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Study School",
			"name": "study_school",
			"type": "string",
			"default": "",
			"description": "School",
			"routing": {
				"send": {
					"property": "study_school",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "User Partner ID",
			"name": "user_partner_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "user_partner_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Visa Expire",
			"name": "visa_expire",
			"type": "string",
			"default": "",
			"description": "Visa Expiration Date",
			"routing": {
				"send": {
					"property": "visa_expire",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Visa No",
			"name": "visa_no",
			"type": "string",
			"default": "",
			"description": "Visa No",
			"routing": {
				"send": {
					"property": "visa_no",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Work Contact ID",
			"name": "work_contact_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "work_contact_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Work Email",
			"name": "work_email",
			"type": "string",
			"default": "",
			"description": "Work Email",
			"routing": {
				"send": {
					"property": "work_email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Work Location ID",
			"name": "work_location_id",
			"type": "number",
			"default": 0,
			"description": "ID of related hr.work.location",
			"routing": {
				"send": {
					"property": "work_location_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Work Permit Expiration Date",
			"name": "work_permit_expiration_date",
			"type": "string",
			"default": "",
			"description": "Work Permit Expiration Date",
			"routing": {
				"send": {
					"property": "work_permit_expiration_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Work Permit Name",
			"name": "work_permit_name",
			"type": "string",
			"default": "",
			"description": "work_permit_name",
			"routing": {
				"send": {
					"property": "work_permit_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Work Permit Scheduled Activity",
			"name": "work_permit_scheduled_activity",
			"type": "boolean",
			"default": true,
			"description": "Work Permit Scheduled Activity",
			"routing": {
				"send": {
					"property": "work_permit_scheduled_activity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "Work Phone",
			"name": "work_phone",
			"type": "string",
			"default": "",
			"description": "Work Phone",
			"routing": {
				"send": {
					"property": "work_phone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "GET /api/hr.job",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Search Hr Job"
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
						"Hr"
					],
					"operation": [
						"Search Hr Job"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,department_id,id",
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
						"Hr"
					],
					"operation": [
						"Search Hr Job"
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
						"Hr"
					],
					"operation": [
						"Search Hr Job"
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
						"Hr"
					],
					"operation": [
						"Search Hr Job"
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
						"Hr"
					],
					"operation": [
						"Search Hr Job"
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
						"Hr"
					],
					"operation": [
						"Search Hr Job"
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
						"Hr"
					],
					"operation": [
						"Search Hr Job"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/hr.job",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{\n  \"name\": \"Developer\"\n}",
			"description": "Search criteria to find existing record by Job Position Name",
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Job"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Job"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Job"
					]
				}
			}
		},
		{
			"displayName": "Contract Type ID",
			"name": "contract_type_id",
			"type": "number",
			"default": 0,
			"description": "ID of related hr.contract.type",
			"routing": {
				"send": {
					"property": "contract_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Job"
					]
				}
			}
		},
		{
			"displayName": "Department ID",
			"name": "department_id",
			"type": "number",
			"default": 0,
			"description": "ID of related hr.department",
			"routing": {
				"send": {
					"property": "department_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Job"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Job Description",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Job"
					]
				}
			}
		},
		{
			"displayName": "Expected Employees",
			"name": "expected_employees",
			"type": "number",
			"default": 0,
			"description": "Total Forecasted Employees",
			"routing": {
				"send": {
					"property": "expected_employees",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Job"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Job"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Job"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Job"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Job"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Job"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Job"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Job"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Job"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Job"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Job Position",
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Job"
					]
				}
			}
		},
		{
			"displayName": "No Of Employee",
			"name": "no_of_employee",
			"type": "number",
			"default": 0,
			"description": "Current Number of Employees",
			"routing": {
				"send": {
					"property": "no_of_employee",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Job"
					]
				}
			}
		},
		{
			"displayName": "No Of Hired Employee",
			"name": "no_of_hired_employee",
			"type": "number",
			"default": 0,
			"description": "Hired Employees",
			"routing": {
				"send": {
					"property": "no_of_hired_employee",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Job"
					]
				}
			}
		},
		{
			"displayName": "No Of Recruitment",
			"name": "no_of_recruitment",
			"type": "number",
			"default": 0,
			"description": "Target",
			"routing": {
				"send": {
					"property": "no_of_recruitment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Job"
					]
				}
			}
		},
		{
			"displayName": "Requirements",
			"name": "requirements",
			"type": "string",
			"default": "",
			"description": "Requirements",
			"routing": {
				"send": {
					"property": "requirements",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hr"
					],
					"operation": [
						"Upsert Hr Job"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Job"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Job"
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
						"Hr"
					],
					"operation": [
						"Upsert Hr Job"
					]
				}
			}
		},
];
