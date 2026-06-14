import type { INodeProperties } from 'n8n-workflow';

export const projectDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					]
				}
			},
			"options": [
				{
					"name": "Search Project Project",
					"value": "Search Project Project",
					"action": "Search & read Project",
					"description": "Search and read project.project records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/project.project"
						}
					}
				},
				{
					"name": "Upsert Project Project",
					"value": "Upsert Project Project",
					"action": "Upsert Project",
					"description": "Create or update project.project record.\n\nSearch by name (Project Name) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/project.project"
						}
					}
				},
				{
					"name": "Search Project Task",
					"value": "Search Project Task",
					"action": "Search & read Task",
					"description": "Search and read project.task records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/project.task"
						}
					}
				},
				{
					"name": "Upsert Project Task",
					"value": "Upsert Project Task",
					"action": "Upsert Task",
					"description": "Create or update project.task record.\n\nSearch by name (Task Title) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/project.task"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/project.project",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Search Project Project"
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
						"Project"
					],
					"operation": [
						"Search Project Project"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,stage_id,user_id,id",
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
						"Project"
					],
					"operation": [
						"Search Project Project"
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
						"Project"
					],
					"operation": [
						"Search Project Project"
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
						"Project"
					],
					"operation": [
						"Search Project Project"
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
						"Project"
					],
					"operation": [
						"Search Project Project"
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
						"Project"
					],
					"operation": [
						"Search Project Project"
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
						"Project"
					],
					"operation": [
						"Search Project Project"
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
						"Project"
					],
					"operation": [
						"Search Project Project"
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
						"Project"
					],
					"operation": [
						"Search Project Project"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/project.project",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{\n  \"name\": \"Website Redesign\"\n}",
			"description": "Search criteria to find existing record by Project Name",
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Access Instruction Message",
			"name": "access_instruction_message",
			"type": "string",
			"default": "",
			"description": "Access Instruction Message",
			"routing": {
				"send": {
					"property": "access_instruction_message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Alias Bounced Content",
			"name": "alias_bounced_content",
			"type": "string",
			"default": "",
			"description": "Custom Bounced Message",
			"routing": {
				"send": {
					"property": "alias_bounced_content",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Alias Contact",
			"name": "alias_contact",
			"type": "string",
			"default": "",
			"description": "Alias Contact Security",
			"routing": {
				"send": {
					"property": "alias_contact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Alias Defaults",
			"name": "alias_defaults",
			"type": "string",
			"default": "",
			"description": "Default Values",
			"routing": {
				"send": {
					"property": "alias_defaults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Alias Domain",
			"name": "alias_domain",
			"type": "string",
			"default": "",
			"description": "Alias Domain Name",
			"routing": {
				"send": {
					"property": "alias_domain",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Alias Domain ID",
			"name": "alias_domain_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mail.alias.domain",
			"routing": {
				"send": {
					"property": "alias_domain_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Alias Email",
			"name": "alias_email",
			"type": "string",
			"default": "",
			"description": "Email Alias",
			"routing": {
				"send": {
					"property": "alias_email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Alias Force Thread ID",
			"name": "alias_force_thread_id",
			"type": "number",
			"default": 0,
			"description": "Record Thread ID",
			"routing": {
				"send": {
					"property": "alias_force_thread_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Alias Full Name",
			"name": "alias_full_name",
			"type": "string",
			"default": "",
			"description": "Alias Email",
			"routing": {
				"send": {
					"property": "alias_full_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Alias ID",
			"name": "alias_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mail.alias",
			"routing": {
				"send": {
					"property": "alias_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Alias Incoming Local",
			"name": "alias_incoming_local",
			"type": "boolean",
			"default": true,
			"description": "Local-part based incoming detection",
			"routing": {
				"send": {
					"property": "alias_incoming_local",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Alias Model ID",
			"name": "alias_model_id",
			"type": "number",
			"default": 0,
			"description": "ID of related ir.model",
			"routing": {
				"send": {
					"property": "alias_model_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Alias Name",
			"name": "alias_name",
			"type": "string",
			"default": "",
			"description": "Alias Name",
			"routing": {
				"send": {
					"property": "alias_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Alias Parent Model ID",
			"name": "alias_parent_model_id",
			"type": "number",
			"default": 0,
			"description": "ID of related ir.model",
			"routing": {
				"send": {
					"property": "alias_parent_model_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Alias Parent Thread ID",
			"name": "alias_parent_thread_id",
			"type": "number",
			"default": 0,
			"description": "Parent Record Thread ID",
			"routing": {
				"send": {
					"property": "alias_parent_thread_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Alias Status",
			"name": "alias_status",
			"type": "string",
			"default": "",
			"description": "Alias Status",
			"routing": {
				"send": {
					"property": "alias_status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Allow Billable",
			"name": "allow_billable",
			"type": "boolean",
			"default": true,
			"description": "Billable",
			"routing": {
				"send": {
					"property": "allow_billable",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Allow Milestones",
			"name": "allow_milestones",
			"type": "boolean",
			"default": true,
			"description": "Milestones",
			"routing": {
				"send": {
					"property": "allow_milestones",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Allow Rating",
			"name": "allow_rating",
			"type": "boolean",
			"default": true,
			"description": "Allow Customer Ratings",
			"routing": {
				"send": {
					"property": "allow_rating",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Allow Task Dependencies",
			"name": "allow_task_dependencies",
			"type": "boolean",
			"default": true,
			"description": "Task Dependencies",
			"routing": {
				"send": {
					"property": "allow_task_dependencies",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Analytic Account Balance",
			"name": "analytic_account_balance",
			"type": "number",
			"default": 0,
			"description": "Balance",
			"routing": {
				"send": {
					"property": "analytic_account_balance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Bom Count",
			"name": "bom_count",
			"type": "number",
			"default": 0,
			"description": "BoM Count",
			"routing": {
				"send": {
					"property": "bom_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Closed Task Count",
			"name": "closed_task_count",
			"type": "number",
			"default": 0,
			"description": "Closed Task Count",
			"routing": {
				"send": {
					"property": "closed_task_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Collaborator Count",
			"name": "collaborator_count",
			"type": "number",
			"default": 0,
			"description": "# Collaborators",
			"routing": {
				"send": {
					"property": "collaborator_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"type": "string",
			"default": "",
			"description": "Expiration Date",
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Date Start",
			"name": "date_start",
			"type": "string",
			"default": "",
			"description": "Start Date",
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Description",
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Display Sales Stat Buttons",
			"name": "display_sales_stat_buttons",
			"type": "boolean",
			"default": true,
			"description": "Display Sales Stat Buttons",
			"routing": {
				"send": {
					"property": "display_sales_stat_buttons",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Doc Count",
			"name": "doc_count",
			"type": "number",
			"default": 0,
			"description": "Number of documents attached",
			"routing": {
				"send": {
					"property": "doc_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Expenses Count",
			"name": "expenses_count",
			"type": "number",
			"default": 0,
			"description": "# Expenses",
			"routing": {
				"send": {
					"property": "expenses_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Favorite User Ids",
			"name": "favorite_user_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Members (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "favorite_user_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Has Any So To Invoice",
			"name": "has_any_so_to_invoice",
			"type": "boolean",
			"default": true,
			"description": "Has SO to Invoice",
			"routing": {
				"send": {
					"property": "has_any_so_to_invoice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Has Any So With Nothing To Invoice",
			"name": "has_any_so_with_nothing_to_invoice",
			"type": "boolean",
			"default": true,
			"description": "Has a SO with an invoice status of No",
			"routing": {
				"send": {
					"property": "has_any_so_with_nothing_to_invoice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Is Favorite",
			"name": "is_favorite",
			"type": "boolean",
			"default": true,
			"description": "Show Project on Dashboard",
			"routing": {
				"send": {
					"property": "is_favorite",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Is Milestone Exceeded",
			"name": "is_milestone_exceeded",
			"type": "boolean",
			"default": true,
			"description": "Is Milestone Exceeded",
			"routing": {
				"send": {
					"property": "is_milestone_exceeded",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Label Tasks",
			"name": "label_tasks",
			"type": "string",
			"default": "",
			"description": "Use Tasks as",
			"routing": {
				"send": {
					"property": "label_tasks",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Last Update Color",
			"name": "last_update_color",
			"type": "number",
			"default": 0,
			"description": "Last Update Color",
			"routing": {
				"send": {
					"property": "last_update_color",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Last Update ID",
			"name": "last_update_id",
			"type": "number",
			"default": 0,
			"description": "ID of related project.update",
			"routing": {
				"send": {
					"property": "last_update_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Last Update Status",
			"name": "last_update_status",
			"type": "string",
			"default": "",
			"description": "Last Update Status",
			"routing": {
				"send": {
					"property": "last_update_status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Milestone Count Reached",
			"name": "milestone_count_reached",
			"type": "number",
			"default": 0,
			"description": "Milestone Count Reached",
			"routing": {
				"send": {
					"property": "milestone_count_reached",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Open Task Count",
			"name": "open_task_count",
			"type": "number",
			"default": 0,
			"description": "Open Task Count",
			"routing": {
				"send": {
					"property": "open_task_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Privacy Visibility",
			"name": "privacy_visibility",
			"type": "string",
			"default": "",
			"description": "Visibility",
			"routing": {
				"send": {
					"property": "privacy_visibility",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Privacy Visibility Warning",
			"name": "privacy_visibility_warning",
			"type": "string",
			"default": "",
			"description": "Privacy Visibility Warning",
			"routing": {
				"send": {
					"property": "privacy_visibility_warning",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Production Count",
			"name": "production_count",
			"type": "number",
			"default": 0,
			"description": "Manufacturing Orders Count",
			"routing": {
				"send": {
					"property": "production_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Purchase Orders Count",
			"name": "purchase_orders_count",
			"type": "number",
			"default": 0,
			"description": "# Purchase Orders",
			"routing": {
				"send": {
					"property": "purchase_orders_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Rating Active",
			"name": "rating_active",
			"type": "boolean",
			"default": true,
			"description": "Customer Ratings",
			"routing": {
				"send": {
					"property": "rating_active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Rating Avg",
			"name": "rating_avg",
			"type": "number",
			"default": 0,
			"description": "Average Rating",
			"routing": {
				"send": {
					"property": "rating_avg",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Rating Avg Percentage",
			"name": "rating_avg_percentage",
			"type": "number",
			"default": 0,
			"description": "Average Rating (%)",
			"routing": {
				"send": {
					"property": "rating_avg_percentage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Rating Count",
			"name": "rating_count",
			"type": "number",
			"default": 0,
			"description": "# Ratings",
			"routing": {
				"send": {
					"property": "rating_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Rating Percentage Satisfaction",
			"name": "rating_percentage_satisfaction",
			"type": "number",
			"default": 0,
			"description": "Rating Satisfaction",
			"routing": {
				"send": {
					"property": "rating_percentage_satisfaction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Rating Request Deadline",
			"name": "rating_request_deadline",
			"type": "string",
			"default": "",
			"description": "Rating Request Deadline",
			"routing": {
				"send": {
					"property": "rating_request_deadline",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Rating Status",
			"name": "rating_status",
			"type": "string",
			"default": "",
			"description": "Customer Ratings Status",
			"routing": {
				"send": {
					"property": "rating_status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Rating Status Period",
			"name": "rating_status_period",
			"type": "string",
			"default": "",
			"description": "Rating Frequency",
			"routing": {
				"send": {
					"property": "rating_status_period",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Sale Order Line Count",
			"name": "sale_order_line_count",
			"type": "number",
			"default": 0,
			"description": "Sale Order Line Count",
			"routing": {
				"send": {
					"property": "sale_order_line_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Stage ID",
			"name": "stage_id",
			"type": "number",
			"default": 0,
			"description": "ID of related project.project.stage",
			"routing": {
				"send": {
					"property": "stage_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Task Count",
			"name": "task_count",
			"type": "number",
			"default": 0,
			"description": "Task Count",
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Task Properties Definition",
			"name": "task_properties_definition",
			"type": "string",
			"default": "",
			"description": "Task Properties",
			"routing": {
				"send": {
					"property": "task_properties_definition",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Type Ids",
			"name": "type_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Tasks Stages (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "type_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Vendor Bill Count",
			"name": "vendor_bill_count",
			"type": "number",
			"default": 0,
			"description": "Vendor Bill Count",
			"routing": {
				"send": {
					"property": "vendor_bill_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "Workorder Count",
			"name": "workorder_count",
			"type": "number",
			"default": 0,
			"description": "Work Order Count",
			"routing": {
				"send": {
					"property": "workorder_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
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
						"Project"
					],
					"operation": [
						"Upsert Project Project"
					]
				}
			}
		},
		{
			"displayName": "GET /api/project.task",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Search Project Task"
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
						"Project"
					],
					"operation": [
						"Search Project Task"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,project_id,stage_id,user_id,id",
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
						"Project"
					],
					"operation": [
						"Search Project Task"
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
						"Project"
					],
					"operation": [
						"Search Project Task"
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
						"Project"
					],
					"operation": [
						"Search Project Task"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order, e.g. 'name asc' or 'create_date desc'",
			"default": "sequence asc",
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
						"Project"
					],
					"operation": [
						"Search Project Task"
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
						"Project"
					],
					"operation": [
						"Search Project Task"
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
						"Project"
					],
					"operation": [
						"Search Project Task"
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
						"Project"
					],
					"operation": [
						"Search Project Task"
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
						"Project"
					],
					"operation": [
						"Search Project Task"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/project.task",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{\n  \"name\": \"Design Homepage\"\n}",
			"description": "Search criteria to find existing record by Task Title",
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Allocated Hours",
			"name": "allocated_hours",
			"type": "number",
			"default": 0,
			"description": "Allocated Time",
			"routing": {
				"send": {
					"property": "allocated_hours",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Allow Billable",
			"name": "allow_billable",
			"type": "boolean",
			"default": true,
			"description": "Billable",
			"routing": {
				"send": {
					"property": "allow_billable",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Allow Milestones",
			"name": "allow_milestones",
			"type": "boolean",
			"default": true,
			"description": "Milestones",
			"routing": {
				"send": {
					"property": "allow_milestones",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Allow Task Dependencies",
			"name": "allow_task_dependencies",
			"type": "boolean",
			"default": true,
			"description": "Task Dependencies",
			"routing": {
				"send": {
					"property": "allow_task_dependencies",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Closed Subtask Count",
			"name": "closed_subtask_count",
			"type": "number",
			"default": 0,
			"description": "Closed Sub-tasks Count",
			"routing": {
				"send": {
					"property": "closed_subtask_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Date Assign",
			"name": "date_assign",
			"type": "string",
			"default": "",
			"description": "Assigning Date",
			"routing": {
				"send": {
					"property": "date_assign",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Date End",
			"name": "date_end",
			"type": "string",
			"default": "",
			"description": "Ending Date",
			"routing": {
				"send": {
					"property": "date_end",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Date Last Stage Update",
			"name": "date_last_stage_update",
			"type": "string",
			"default": "",
			"description": "Last Stage Update",
			"routing": {
				"send": {
					"property": "date_last_stage_update",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Depend On Ids",
			"name": "depend_on_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Blocked By (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "depend_on_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Dependent Ids",
			"name": "dependent_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Block (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "dependent_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Dependent Tasks Count",
			"name": "dependent_tasks_count",
			"type": "number",
			"default": 0,
			"description": "Dependent Tasks",
			"routing": {
				"send": {
					"property": "dependent_tasks_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Description",
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Display In Project",
			"name": "display_in_project",
			"type": "boolean",
			"default": true,
			"description": "Display In Project",
			"routing": {
				"send": {
					"property": "display_in_project",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Display Parent Task Button",
			"name": "display_parent_task_button",
			"type": "boolean",
			"default": true,
			"description": "Display Parent Task Button",
			"routing": {
				"send": {
					"property": "display_parent_task_button",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Display Sale Order Button",
			"name": "display_sale_order_button",
			"type": "boolean",
			"default": true,
			"description": "Display Sales Order",
			"routing": {
				"send": {
					"property": "display_sale_order_button",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Displayed Image ID",
			"name": "displayed_image_id",
			"type": "number",
			"default": 0,
			"description": "ID of related ir.attachment",
			"routing": {
				"send": {
					"property": "displayed_image_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Duration Tracking",
			"name": "duration_tracking",
			"type": "json",
			"default": "{}",
			"description": "Status time",
			"routing": {
				"send": {
					"property": "duration_tracking",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Email Cc",
			"name": "email_cc",
			"type": "string",
			"default": "",
			"description": "Email cc",
			"routing": {
				"send": {
					"property": "email_cc",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Has Late And Unreached Milestone",
			"name": "has_late_and_unreached_milestone",
			"type": "boolean",
			"default": true,
			"description": "Has Late And Unreached Milestone",
			"routing": {
				"send": {
					"property": "has_late_and_unreached_milestone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Milestone ID",
			"name": "milestone_id",
			"type": "number",
			"default": 0,
			"description": "ID of related project.milestone",
			"routing": {
				"send": {
					"property": "milestone_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Title",
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Parent ID",
			"name": "parent_id",
			"type": "number",
			"default": 0,
			"description": "ID of related project.task",
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Personal Stage ID",
			"name": "personal_stage_id",
			"type": "number",
			"default": 0,
			"description": "ID of related project.task.stage.personal",
			"routing": {
				"send": {
					"property": "personal_stage_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Personal Stage Type ID",
			"name": "personal_stage_type_id",
			"type": "number",
			"default": 0,
			"description": "ID of related project.task.type",
			"routing": {
				"send": {
					"property": "personal_stage_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Personal Stage Type Ids",
			"name": "personal_stage_type_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Personal Stages (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "personal_stage_type_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Portal User Names",
			"name": "portal_user_names",
			"type": "string",
			"default": "",
			"description": "Portal User Names",
			"routing": {
				"send": {
					"property": "portal_user_names",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Project Privacy Visibility",
			"name": "project_privacy_visibility",
			"type": "string",
			"default": "",
			"description": "Project Visibility",
			"routing": {
				"send": {
					"property": "project_privacy_visibility",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Project Sale Order ID",
			"name": "project_sale_order_id",
			"type": "number",
			"default": 0,
			"description": "ID of related sale.order",
			"routing": {
				"send": {
					"property": "project_sale_order_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Rating Active",
			"name": "rating_active",
			"type": "boolean",
			"default": true,
			"description": "Project Rating Status",
			"routing": {
				"send": {
					"property": "rating_active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Rating Avg",
			"name": "rating_avg",
			"type": "number",
			"default": 0,
			"description": "Average Rating",
			"routing": {
				"send": {
					"property": "rating_avg",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Rating Avg Text",
			"name": "rating_avg_text",
			"type": "string",
			"default": "",
			"description": "Rating Avg Text",
			"routing": {
				"send": {
					"property": "rating_avg_text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Rating Count",
			"name": "rating_count",
			"type": "number",
			"default": 0,
			"description": "Rating count",
			"routing": {
				"send": {
					"property": "rating_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Rating Last Feedback",
			"name": "rating_last_feedback",
			"type": "string",
			"default": "",
			"description": "Rating Last Feedback",
			"routing": {
				"send": {
					"property": "rating_last_feedback",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Rating Last Image",
			"name": "rating_last_image",
			"type": "string",
			"default": "",
			"description": "Rating Last Image",
			"routing": {
				"send": {
					"property": "rating_last_image",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Rating Last Text",
			"name": "rating_last_text",
			"type": "string",
			"default": "",
			"description": "Rating Text",
			"routing": {
				"send": {
					"property": "rating_last_text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Rating Last Value",
			"name": "rating_last_value",
			"type": "number",
			"default": 0,
			"description": "Rating Last Value",
			"routing": {
				"send": {
					"property": "rating_last_value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Rating Percentage Satisfaction",
			"name": "rating_percentage_satisfaction",
			"type": "number",
			"default": 0,
			"description": "Rating Satisfaction",
			"routing": {
				"send": {
					"property": "rating_percentage_satisfaction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Recurrence ID",
			"name": "recurrence_id",
			"type": "number",
			"default": 0,
			"description": "ID of related project.task.recurrence",
			"routing": {
				"send": {
					"property": "recurrence_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Recurring Count",
			"name": "recurring_count",
			"type": "number",
			"default": 0,
			"description": "Tasks in Recurrence",
			"routing": {
				"send": {
					"property": "recurring_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Recurring Task",
			"name": "recurring_task",
			"type": "boolean",
			"default": true,
			"description": "Recurrent",
			"routing": {
				"send": {
					"property": "recurring_task",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Repeat Interval",
			"name": "repeat_interval",
			"type": "number",
			"default": 0,
			"description": "Repeat Every",
			"routing": {
				"send": {
					"property": "repeat_interval",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Repeat Type",
			"name": "repeat_type",
			"type": "string",
			"default": "",
			"description": "Until",
			"routing": {
				"send": {
					"property": "repeat_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Repeat Unit",
			"name": "repeat_unit",
			"type": "string",
			"default": "",
			"description": "Repeat Unit",
			"routing": {
				"send": {
					"property": "repeat_unit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Repeat Until",
			"name": "repeat_until",
			"type": "string",
			"default": "",
			"description": "End Date",
			"routing": {
				"send": {
					"property": "repeat_until",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Stage ID",
			"name": "stage_id",
			"type": "number",
			"default": 0,
			"description": "ID of related project.task.type",
			"routing": {
				"send": {
					"property": "stage_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Subtask Allocated Hours",
			"name": "subtask_allocated_hours",
			"type": "number",
			"default": 0,
			"description": "Sub-tasks Allocated Time",
			"routing": {
				"send": {
					"property": "subtask_allocated_hours",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Subtask Count",
			"name": "subtask_count",
			"type": "number",
			"default": 0,
			"description": "Sub-task Count",
			"routing": {
				"send": {
					"property": "subtask_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Task Properties",
			"name": "task_properties",
			"type": "string",
			"default": "",
			"description": "Properties",
			"routing": {
				"send": {
					"property": "task_properties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Task To Invoice",
			"name": "task_to_invoice",
			"type": "boolean",
			"default": true,
			"description": "To invoice",
			"routing": {
				"send": {
					"property": "task_to_invoice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "User Ids",
			"name": "user_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Assignees (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "user_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Working Days Close",
			"name": "working_days_close",
			"type": "number",
			"default": 0,
			"description": "Working Days to Close",
			"routing": {
				"send": {
					"property": "working_days_close",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Working Days Open",
			"name": "working_days_open",
			"type": "number",
			"default": 0,
			"description": "Working Days to Assign",
			"routing": {
				"send": {
					"property": "working_days_open",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Working Hours Close",
			"name": "working_hours_close",
			"type": "number",
			"default": 0,
			"description": "Working Hours to Close",
			"routing": {
				"send": {
					"property": "working_hours_close",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
		{
			"displayName": "Working Hours Open",
			"name": "working_hours_open",
			"type": "number",
			"default": 0,
			"description": "Working Hours to Assign",
			"routing": {
				"send": {
					"property": "working_hours_open",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
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
						"Project"
					],
					"operation": [
						"Upsert Project Task"
					]
				}
			}
		},
];
