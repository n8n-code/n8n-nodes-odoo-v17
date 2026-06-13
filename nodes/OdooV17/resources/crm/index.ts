import type { INodeProperties } from 'n8n-workflow';

export const crmDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					]
				}
			},
			"options": [
				{
					"name": "Search Crm Lead",
					"value": "Search Crm Lead",
					"action": "Search & read Lead/Opportunity",
					"description": "Search and read crm.lead records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/crm.lead"
						}
					}
				},
				{
					"name": "Create Crm Lead",
					"value": "Create Crm Lead",
					"action": "Create Lead/Opportunity",
					"description": "Create a new crm.lead record. Uses Odoo `create` method.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/crm.lead"
						}
					}
				},
				{
					"name": "Get Crm Lead",
					"value": "Get Crm Lead",
					"action": "Get Lead/Opportunity by ID",
					"description": "Read a single crm.lead record by ID. Uses Odoo `read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/crm.lead/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Crm Lead",
					"value": "Update Crm Lead",
					"action": "Update Lead/Opportunity",
					"description": "Update an existing crm.lead record. Uses Odoo `write` method.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/crm.lead/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete Crm Lead",
					"value": "Delete Crm Lead",
					"action": "Delete Lead/Opportunity",
					"description": "Delete a crm.lead record. Uses Odoo `unlink` method.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/crm.lead/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Call Crm Lead",
					"value": "Call Crm Lead",
					"action": "Call method on Lead/Opportunity",
					"description": "Call any method on a crm.lead record. Uses Odoo `execute_kw` with method name.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/crm.lead/{{$parameter[\"id\"]}}/call"
						}
					}
				},
				{
					"name": "Search Crm Stage",
					"value": "Search Crm Stage",
					"action": "Search & read CRM Stages",
					"description": "Search and read crm.stage records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/crm.stage"
						}
					}
				},
				{
					"name": "Create Crm Stage",
					"value": "Create Crm Stage",
					"action": "Create CRM Stages",
					"description": "Create a new crm.stage record. Uses Odoo `create` method.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/crm.stage"
						}
					}
				},
				{
					"name": "Get Crm Stage",
					"value": "Get Crm Stage",
					"action": "Get CRM Stages by ID",
					"description": "Read a single crm.stage record by ID. Uses Odoo `read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/crm.stage/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Crm Stage",
					"value": "Update Crm Stage",
					"action": "Update CRM Stages",
					"description": "Update an existing crm.stage record. Uses Odoo `write` method.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/crm.stage/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete Crm Stage",
					"value": "Delete Crm Stage",
					"action": "Delete CRM Stages",
					"description": "Delete a crm.stage record. Uses Odoo `unlink` method.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/crm.stage/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Call Crm Stage",
					"value": "Call Crm Stage",
					"action": "Call method on CRM Stages",
					"description": "Call any method on a crm.stage record. Uses Odoo `execute_kw` with method name.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/crm.stage/{{$parameter[\"id\"]}}/call"
						}
					}
				},
				{
					"name": "Search Crm Tag",
					"value": "Search Crm Tag",
					"action": "Search & read CRM Tag",
					"description": "Search and read crm.tag records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/crm.tag"
						}
					}
				},
				{
					"name": "Create Crm Tag",
					"value": "Create Crm Tag",
					"action": "Create CRM Tag",
					"description": "Create a new crm.tag record. Uses Odoo `create` method.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/crm.tag"
						}
					}
				},
				{
					"name": "Get Crm Tag",
					"value": "Get Crm Tag",
					"action": "Get CRM Tag by ID",
					"description": "Read a single crm.tag record by ID. Uses Odoo `read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/crm.tag/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Crm Tag",
					"value": "Update Crm Tag",
					"action": "Update CRM Tag",
					"description": "Update an existing crm.tag record. Uses Odoo `write` method.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/crm.tag/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete Crm Tag",
					"value": "Delete Crm Tag",
					"action": "Delete CRM Tag",
					"description": "Delete a crm.tag record. Uses Odoo `unlink` method.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/crm.tag/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Call Crm Tag",
					"value": "Call Crm Tag",
					"action": "Call method on CRM Tag",
					"description": "Call any method on a crm.tag record. Uses Odoo `execute_kw` with method name.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/crm.tag/{{$parameter[\"id\"]}}/call"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/crm.lead",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Search Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Search Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Search Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Search Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Search Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Search Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Search Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "POST /api/crm.lead",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Automated Probability",
			"name": "automated_probability",
			"type": "number",
			"default": 0,
			"description": "Automated Probability",
			"routing": {
				"send": {
					"property": "automated_probability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Company Currency",
			"name": "company_currency",
			"type": "number",
			"default": 0,
			"description": "ID of related res.currency",
			"routing": {
				"send": {
					"property": "company_currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Contact Name",
			"name": "contact_name",
			"type": "string",
			"default": "",
			"description": "Contact Name",
			"routing": {
				"send": {
					"property": "contact_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Date Automation Last",
			"name": "date_automation_last",
			"type": "string",
			"default": "",
			"description": "Last Action",
			"routing": {
				"send": {
					"property": "date_automation_last",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Date Closed",
			"name": "date_closed",
			"type": "string",
			"default": "",
			"description": "Closed Date",
			"routing": {
				"send": {
					"property": "date_closed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Date Conversion",
			"name": "date_conversion",
			"type": "string",
			"default": "",
			"description": "Conversion Date",
			"routing": {
				"send": {
					"property": "date_conversion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Date Deadline",
			"name": "date_deadline",
			"type": "string",
			"default": "",
			"description": "Expected Closing",
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Date Open",
			"name": "date_open",
			"type": "string",
			"default": "",
			"description": "Assignment Date",
			"routing": {
				"send": {
					"property": "date_open",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Day Close",
			"name": "day_close",
			"type": "number",
			"default": 0,
			"description": "Days to Close",
			"routing": {
				"send": {
					"property": "day_close",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Day Open",
			"name": "day_open",
			"type": "number",
			"default": 0,
			"description": "Days to Assign",
			"routing": {
				"send": {
					"property": "day_open",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Notes",
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Duplicate Lead Count",
			"name": "duplicate_lead_count",
			"type": "number",
			"default": 0,
			"description": "Potential Duplicate Lead Count",
			"routing": {
				"send": {
					"property": "duplicate_lead_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Duplicate Lead Ids",
			"name": "duplicate_lead_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Potential Duplicate Lead (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "duplicate_lead_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Email Domain Criterion",
			"name": "email_domain_criterion",
			"type": "string",
			"default": "",
			"description": "Email Domain Criterion",
			"routing": {
				"send": {
					"property": "email_domain_criterion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Email From",
			"name": "email_from",
			"type": "string",
			"default": "",
			"description": "Email",
			"routing": {
				"send": {
					"property": "email_from",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Email State",
			"name": "email_state",
			"type": "string",
			"default": "",
			"description": "Email Quality",
			"routing": {
				"send": {
					"property": "email_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Expected Revenue",
			"name": "expected_revenue",
			"type": "number",
			"default": 0,
			"description": "Expected Revenue",
			"routing": {
				"send": {
					"property": "expected_revenue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Iap Enrich Done",
			"name": "iap_enrich_done",
			"type": "boolean",
			"default": true,
			"description": "Enrichment done",
			"routing": {
				"send": {
					"property": "iap_enrich_done",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Is Automated Probability",
			"name": "is_automated_probability",
			"type": "boolean",
			"default": true,
			"description": "Is automated probability?",
			"routing": {
				"send": {
					"property": "is_automated_probability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Is Partner Visible",
			"name": "is_partner_visible",
			"type": "boolean",
			"default": true,
			"description": "Is Partner Visible",
			"routing": {
				"send": {
					"property": "is_partner_visible",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Kanban State",
			"name": "kanban_state",
			"type": "string",
			"default": "",
			"description": "Kanban State",
			"routing": {
				"send": {
					"property": "kanban_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Lang Active Count",
			"name": "lang_active_count",
			"type": "number",
			"default": 0,
			"description": "Lang Active Count",
			"routing": {
				"send": {
					"property": "lang_active_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Lang Code",
			"name": "lang_code",
			"type": "string",
			"default": "",
			"description": "Locale Code",
			"routing": {
				"send": {
					"property": "lang_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Lang ID",
			"name": "lang_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.lang",
			"routing": {
				"send": {
					"property": "lang_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Lead Mining Request ID",
			"name": "lead_mining_request_id",
			"type": "number",
			"default": 0,
			"description": "ID of related crm.iap.lead.mining.request",
			"routing": {
				"send": {
					"property": "lead_mining_request_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Lead Properties",
			"name": "lead_properties",
			"type": "string",
			"default": "",
			"description": "Properties",
			"routing": {
				"send": {
					"property": "lead_properties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Lost Reason ID",
			"name": "lost_reason_id",
			"type": "number",
			"default": 0,
			"description": "ID of related crm.lost.reason",
			"routing": {
				"send": {
					"property": "lost_reason_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Meeting Display Date",
			"name": "meeting_display_date",
			"type": "string",
			"default": "",
			"description": "Meeting Display Date",
			"routing": {
				"send": {
					"property": "meeting_display_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Meeting Display Label",
			"name": "meeting_display_label",
			"type": "string",
			"default": "",
			"description": "Meeting Display Label",
			"routing": {
				"send": {
					"property": "meeting_display_label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
			"description": "Opportunity",
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Partner Email Update",
			"name": "partner_email_update",
			"type": "boolean",
			"default": true,
			"description": "Partner Email will Update",
			"routing": {
				"send": {
					"property": "partner_email_update",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Partner Is Blacklisted",
			"name": "partner_is_blacklisted",
			"type": "boolean",
			"default": true,
			"description": "Partner is blacklisted",
			"routing": {
				"send": {
					"property": "partner_is_blacklisted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Partner Name",
			"name": "partner_name",
			"type": "string",
			"default": "",
			"description": "Company Name",
			"routing": {
				"send": {
					"property": "partner_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Partner Phone Update",
			"name": "partner_phone_update",
			"type": "boolean",
			"default": true,
			"description": "Partner Phone will Update",
			"routing": {
				"send": {
					"property": "partner_phone_update",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Phone State",
			"name": "phone_state",
			"type": "string",
			"default": "",
			"description": "Phone Quality",
			"routing": {
				"send": {
					"property": "phone_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Probability",
			"name": "probability",
			"type": "number",
			"default": 0,
			"description": "Probability",
			"routing": {
				"send": {
					"property": "probability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Prorated Revenue",
			"name": "prorated_revenue",
			"type": "number",
			"default": 0,
			"description": "Prorated Revenue",
			"routing": {
				"send": {
					"property": "prorated_revenue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Quotation Count",
			"name": "quotation_count",
			"type": "number",
			"default": 0,
			"description": "Number of Quotations",
			"routing": {
				"send": {
					"property": "quotation_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Recurring Plan",
			"name": "recurring_plan",
			"type": "number",
			"default": 0,
			"description": "ID of related crm.recurring.plan",
			"routing": {
				"send": {
					"property": "recurring_plan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Recurring Revenue",
			"name": "recurring_revenue",
			"type": "number",
			"default": 0,
			"description": "Recurring Revenues",
			"routing": {
				"send": {
					"property": "recurring_revenue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Recurring Revenue Monthly",
			"name": "recurring_revenue_monthly",
			"type": "number",
			"default": 0,
			"description": "Expected MRR",
			"routing": {
				"send": {
					"property": "recurring_revenue_monthly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Recurring Revenue Monthly Prorated",
			"name": "recurring_revenue_monthly_prorated",
			"type": "number",
			"default": 0,
			"description": "Prorated MRR",
			"routing": {
				"send": {
					"property": "recurring_revenue_monthly_prorated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Recurring Revenue Prorated",
			"name": "recurring_revenue_prorated",
			"type": "number",
			"default": 0,
			"description": "Prorated Recurring Revenues",
			"routing": {
				"send": {
					"property": "recurring_revenue_prorated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Referred",
			"name": "referred",
			"type": "string",
			"default": "",
			"description": "Referred By",
			"routing": {
				"send": {
					"property": "referred",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Reveal ID",
			"name": "reveal_id",
			"type": "string",
			"default": "",
			"description": "Reveal ID",
			"routing": {
				"send": {
					"property": "reveal_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Sale Amount Total",
			"name": "sale_amount_total",
			"type": "number",
			"default": 0,
			"description": "Sum of Orders",
			"routing": {
				"send": {
					"property": "sale_amount_total",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Sale Order Count",
			"name": "sale_order_count",
			"type": "number",
			"default": 0,
			"description": "Number of Sale Orders",
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Show Enrich Button",
			"name": "show_enrich_button",
			"type": "boolean",
			"default": true,
			"description": "Allow manual enrich",
			"routing": {
				"send": {
					"property": "show_enrich_button",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Stage ID",
			"name": "stage_id",
			"type": "number",
			"default": 0,
			"description": "ID of related crm.stage",
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
			"description": "Type",
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "User Company Ids",
			"name": "user_company_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "User Company (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "user_company_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Visitor Ids",
			"name": "visitor_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Web Visitors (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "visitor_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Visitor Page Count",
			"name": "visitor_page_count",
			"type": "number",
			"default": 0,
			"description": "# Page Views",
			"routing": {
				"send": {
					"property": "visitor_page_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Visitor Sessions Count",
			"name": "visitor_sessions_count",
			"type": "number",
			"default": 0,
			"description": "# Sessions",
			"routing": {
				"send": {
					"property": "visitor_sessions_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Website",
			"name": "website",
			"type": "string",
			"default": "",
			"description": "Website",
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Create Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "GET /api/crm.lead/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Get Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Get Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Get Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Get Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/crm.lead/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Automated Probability",
			"name": "automated_probability",
			"type": "number",
			"default": 0,
			"description": "Automated Probability",
			"routing": {
				"send": {
					"property": "automated_probability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Company Currency",
			"name": "company_currency",
			"type": "number",
			"default": 0,
			"description": "ID of related res.currency",
			"routing": {
				"send": {
					"property": "company_currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Contact Name",
			"name": "contact_name",
			"type": "string",
			"default": "",
			"description": "Contact Name",
			"routing": {
				"send": {
					"property": "contact_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Date Automation Last",
			"name": "date_automation_last",
			"type": "string",
			"default": "",
			"description": "Last Action",
			"routing": {
				"send": {
					"property": "date_automation_last",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Date Closed",
			"name": "date_closed",
			"type": "string",
			"default": "",
			"description": "Closed Date",
			"routing": {
				"send": {
					"property": "date_closed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Date Conversion",
			"name": "date_conversion",
			"type": "string",
			"default": "",
			"description": "Conversion Date",
			"routing": {
				"send": {
					"property": "date_conversion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Date Deadline",
			"name": "date_deadline",
			"type": "string",
			"default": "",
			"description": "Expected Closing",
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Date Open",
			"name": "date_open",
			"type": "string",
			"default": "",
			"description": "Assignment Date",
			"routing": {
				"send": {
					"property": "date_open",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Day Close",
			"name": "day_close",
			"type": "number",
			"default": 0,
			"description": "Days to Close",
			"routing": {
				"send": {
					"property": "day_close",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Day Open",
			"name": "day_open",
			"type": "number",
			"default": 0,
			"description": "Days to Assign",
			"routing": {
				"send": {
					"property": "day_open",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Notes",
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Duplicate Lead Count",
			"name": "duplicate_lead_count",
			"type": "number",
			"default": 0,
			"description": "Potential Duplicate Lead Count",
			"routing": {
				"send": {
					"property": "duplicate_lead_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Duplicate Lead Ids",
			"name": "duplicate_lead_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Potential Duplicate Lead (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "duplicate_lead_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Email Domain Criterion",
			"name": "email_domain_criterion",
			"type": "string",
			"default": "",
			"description": "Email Domain Criterion",
			"routing": {
				"send": {
					"property": "email_domain_criterion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Email From",
			"name": "email_from",
			"type": "string",
			"default": "",
			"description": "Email",
			"routing": {
				"send": {
					"property": "email_from",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Email State",
			"name": "email_state",
			"type": "string",
			"default": "",
			"description": "Email Quality",
			"routing": {
				"send": {
					"property": "email_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Expected Revenue",
			"name": "expected_revenue",
			"type": "number",
			"default": 0,
			"description": "Expected Revenue",
			"routing": {
				"send": {
					"property": "expected_revenue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Iap Enrich Done",
			"name": "iap_enrich_done",
			"type": "boolean",
			"default": true,
			"description": "Enrichment done",
			"routing": {
				"send": {
					"property": "iap_enrich_done",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Is Automated Probability",
			"name": "is_automated_probability",
			"type": "boolean",
			"default": true,
			"description": "Is automated probability?",
			"routing": {
				"send": {
					"property": "is_automated_probability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Is Partner Visible",
			"name": "is_partner_visible",
			"type": "boolean",
			"default": true,
			"description": "Is Partner Visible",
			"routing": {
				"send": {
					"property": "is_partner_visible",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Kanban State",
			"name": "kanban_state",
			"type": "string",
			"default": "",
			"description": "Kanban State",
			"routing": {
				"send": {
					"property": "kanban_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Lang Active Count",
			"name": "lang_active_count",
			"type": "number",
			"default": 0,
			"description": "Lang Active Count",
			"routing": {
				"send": {
					"property": "lang_active_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Lang Code",
			"name": "lang_code",
			"type": "string",
			"default": "",
			"description": "Locale Code",
			"routing": {
				"send": {
					"property": "lang_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Lang ID",
			"name": "lang_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.lang",
			"routing": {
				"send": {
					"property": "lang_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Lead Mining Request ID",
			"name": "lead_mining_request_id",
			"type": "number",
			"default": 0,
			"description": "ID of related crm.iap.lead.mining.request",
			"routing": {
				"send": {
					"property": "lead_mining_request_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Lead Properties",
			"name": "lead_properties",
			"type": "string",
			"default": "",
			"description": "Properties",
			"routing": {
				"send": {
					"property": "lead_properties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Lost Reason ID",
			"name": "lost_reason_id",
			"type": "number",
			"default": 0,
			"description": "ID of related crm.lost.reason",
			"routing": {
				"send": {
					"property": "lost_reason_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Meeting Display Date",
			"name": "meeting_display_date",
			"type": "string",
			"default": "",
			"description": "Meeting Display Date",
			"routing": {
				"send": {
					"property": "meeting_display_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Meeting Display Label",
			"name": "meeting_display_label",
			"type": "string",
			"default": "",
			"description": "Meeting Display Label",
			"routing": {
				"send": {
					"property": "meeting_display_label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Opportunity",
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Partner Email Update",
			"name": "partner_email_update",
			"type": "boolean",
			"default": true,
			"description": "Partner Email will Update",
			"routing": {
				"send": {
					"property": "partner_email_update",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Partner Is Blacklisted",
			"name": "partner_is_blacklisted",
			"type": "boolean",
			"default": true,
			"description": "Partner is blacklisted",
			"routing": {
				"send": {
					"property": "partner_is_blacklisted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Partner Name",
			"name": "partner_name",
			"type": "string",
			"default": "",
			"description": "Company Name",
			"routing": {
				"send": {
					"property": "partner_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Partner Phone Update",
			"name": "partner_phone_update",
			"type": "boolean",
			"default": true,
			"description": "Partner Phone will Update",
			"routing": {
				"send": {
					"property": "partner_phone_update",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Phone State",
			"name": "phone_state",
			"type": "string",
			"default": "",
			"description": "Phone Quality",
			"routing": {
				"send": {
					"property": "phone_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Probability",
			"name": "probability",
			"type": "number",
			"default": 0,
			"description": "Probability",
			"routing": {
				"send": {
					"property": "probability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Prorated Revenue",
			"name": "prorated_revenue",
			"type": "number",
			"default": 0,
			"description": "Prorated Revenue",
			"routing": {
				"send": {
					"property": "prorated_revenue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Quotation Count",
			"name": "quotation_count",
			"type": "number",
			"default": 0,
			"description": "Number of Quotations",
			"routing": {
				"send": {
					"property": "quotation_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Recurring Plan",
			"name": "recurring_plan",
			"type": "number",
			"default": 0,
			"description": "ID of related crm.recurring.plan",
			"routing": {
				"send": {
					"property": "recurring_plan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Recurring Revenue",
			"name": "recurring_revenue",
			"type": "number",
			"default": 0,
			"description": "Recurring Revenues",
			"routing": {
				"send": {
					"property": "recurring_revenue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Recurring Revenue Monthly",
			"name": "recurring_revenue_monthly",
			"type": "number",
			"default": 0,
			"description": "Expected MRR",
			"routing": {
				"send": {
					"property": "recurring_revenue_monthly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Recurring Revenue Monthly Prorated",
			"name": "recurring_revenue_monthly_prorated",
			"type": "number",
			"default": 0,
			"description": "Prorated MRR",
			"routing": {
				"send": {
					"property": "recurring_revenue_monthly_prorated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Recurring Revenue Prorated",
			"name": "recurring_revenue_prorated",
			"type": "number",
			"default": 0,
			"description": "Prorated Recurring Revenues",
			"routing": {
				"send": {
					"property": "recurring_revenue_prorated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Referred",
			"name": "referred",
			"type": "string",
			"default": "",
			"description": "Referred By",
			"routing": {
				"send": {
					"property": "referred",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Reveal ID",
			"name": "reveal_id",
			"type": "string",
			"default": "",
			"description": "Reveal ID",
			"routing": {
				"send": {
					"property": "reveal_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Sale Amount Total",
			"name": "sale_amount_total",
			"type": "number",
			"default": 0,
			"description": "Sum of Orders",
			"routing": {
				"send": {
					"property": "sale_amount_total",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Sale Order Count",
			"name": "sale_order_count",
			"type": "number",
			"default": 0,
			"description": "Number of Sale Orders",
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Show Enrich Button",
			"name": "show_enrich_button",
			"type": "boolean",
			"default": true,
			"description": "Allow manual enrich",
			"routing": {
				"send": {
					"property": "show_enrich_button",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Stage ID",
			"name": "stage_id",
			"type": "number",
			"default": 0,
			"description": "ID of related crm.stage",
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"description": "Type",
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "User Company Ids",
			"name": "user_company_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "User Company (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "user_company_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Visitor Ids",
			"name": "visitor_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Web Visitors (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "visitor_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Visitor Page Count",
			"name": "visitor_page_count",
			"type": "number",
			"default": 0,
			"description": "# Page Views",
			"routing": {
				"send": {
					"property": "visitor_page_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Visitor Sessions Count",
			"name": "visitor_sessions_count",
			"type": "number",
			"default": 0,
			"description": "# Sessions",
			"routing": {
				"send": {
					"property": "visitor_sessions_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "Website",
			"name": "website",
			"type": "string",
			"default": "",
			"description": "Website",
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Update Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/crm.lead/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Delete Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Delete Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Delete Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "POST /api/crm.lead/{id}/call",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Call Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Call Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Call Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Call Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Call Crm Lead"
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
						"Crm"
					],
					"operation": [
						"Call Crm Lead"
					]
				}
			}
		},
		{
			"displayName": "GET /api/crm.stage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Search Crm Stage"
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
						"Crm"
					],
					"operation": [
						"Search Crm Stage"
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
						"Crm"
					],
					"operation": [
						"Search Crm Stage"
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
						"Crm"
					],
					"operation": [
						"Search Crm Stage"
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
						"Crm"
					],
					"operation": [
						"Search Crm Stage"
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
						"Crm"
					],
					"operation": [
						"Search Crm Stage"
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
						"Crm"
					],
					"operation": [
						"Search Crm Stage"
					]
				}
			}
		},
		{
			"displayName": "POST /api/crm.stage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Stage"
					]
				}
			}
		},
		{
			"displayName": "Fold",
			"name": "fold",
			"type": "boolean",
			"default": true,
			"description": "Folded in Pipeline",
			"routing": {
				"send": {
					"property": "fold",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Stage"
					]
				}
			}
		},
		{
			"displayName": "Is Won",
			"name": "is_won",
			"type": "boolean",
			"default": true,
			"description": "Is Won Stage?",
			"routing": {
				"send": {
					"property": "is_won",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Stage"
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
			"description": "Stage Name",
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
						"Crm"
					],
					"operation": [
						"Create Crm Stage"
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
						"Crm"
					],
					"operation": [
						"Create Crm Stage"
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
						"Crm"
					],
					"operation": [
						"Create Crm Stage"
					]
				}
			}
		},
		{
			"displayName": "Team Count",
			"name": "team_count",
			"type": "number",
			"default": 0,
			"description": "team_count",
			"routing": {
				"send": {
					"property": "team_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Stage"
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
						"Crm"
					],
					"operation": [
						"Create Crm Stage"
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
						"Crm"
					],
					"operation": [
						"Create Crm Stage"
					]
				}
			}
		},
		{
			"displayName": "GET /api/crm.stage/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Get Crm Stage"
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
						"Crm"
					],
					"operation": [
						"Get Crm Stage"
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
						"Crm"
					],
					"operation": [
						"Get Crm Stage"
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
						"Crm"
					],
					"operation": [
						"Get Crm Stage"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/crm.stage/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Stage"
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
						"Crm"
					],
					"operation": [
						"Update Crm Stage"
					]
				}
			}
		},
		{
			"displayName": "Fold",
			"name": "fold",
			"type": "boolean",
			"default": true,
			"description": "Folded in Pipeline",
			"routing": {
				"send": {
					"property": "fold",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Stage"
					]
				}
			}
		},
		{
			"displayName": "Is Won",
			"name": "is_won",
			"type": "boolean",
			"default": true,
			"description": "Is Won Stage?",
			"routing": {
				"send": {
					"property": "is_won",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Stage"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Stage Name",
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
						"Crm"
					],
					"operation": [
						"Update Crm Stage"
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
						"Crm"
					],
					"operation": [
						"Update Crm Stage"
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
						"Crm"
					],
					"operation": [
						"Update Crm Stage"
					]
				}
			}
		},
		{
			"displayName": "Team Count",
			"name": "team_count",
			"type": "number",
			"default": 0,
			"description": "team_count",
			"routing": {
				"send": {
					"property": "team_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Stage"
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
						"Crm"
					],
					"operation": [
						"Update Crm Stage"
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
						"Crm"
					],
					"operation": [
						"Update Crm Stage"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/crm.stage/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Delete Crm Stage"
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
						"Crm"
					],
					"operation": [
						"Delete Crm Stage"
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
						"Crm"
					],
					"operation": [
						"Delete Crm Stage"
					]
				}
			}
		},
		{
			"displayName": "POST /api/crm.stage/{id}/call",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Call Crm Stage"
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
						"Crm"
					],
					"operation": [
						"Call Crm Stage"
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
						"Crm"
					],
					"operation": [
						"Call Crm Stage"
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
						"Crm"
					],
					"operation": [
						"Call Crm Stage"
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
						"Crm"
					],
					"operation": [
						"Call Crm Stage"
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
						"Crm"
					],
					"operation": [
						"Call Crm Stage"
					]
				}
			}
		},
		{
			"displayName": "GET /api/crm.tag",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Search Crm Tag"
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
						"Crm"
					],
					"operation": [
						"Search Crm Tag"
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
						"Crm"
					],
					"operation": [
						"Search Crm Tag"
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
						"Crm"
					],
					"operation": [
						"Search Crm Tag"
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
						"Crm"
					],
					"operation": [
						"Search Crm Tag"
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
						"Crm"
					],
					"operation": [
						"Search Crm Tag"
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
						"Crm"
					],
					"operation": [
						"Search Crm Tag"
					]
				}
			}
		},
		{
			"displayName": "POST /api/crm.tag",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Create Crm Tag"
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
						"Crm"
					],
					"operation": [
						"Create Crm Tag"
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
						"Crm"
					],
					"operation": [
						"Create Crm Tag"
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
						"Crm"
					],
					"operation": [
						"Create Crm Tag"
					]
				}
			}
		},
		{
			"displayName": "GET /api/crm.tag/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Get Crm Tag"
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
						"Crm"
					],
					"operation": [
						"Get Crm Tag"
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
						"Crm"
					],
					"operation": [
						"Get Crm Tag"
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
						"Crm"
					],
					"operation": [
						"Get Crm Tag"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/crm.tag/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Update Crm Tag"
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
						"Crm"
					],
					"operation": [
						"Update Crm Tag"
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
						"Crm"
					],
					"operation": [
						"Update Crm Tag"
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
						"Crm"
					],
					"operation": [
						"Update Crm Tag"
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
						"Crm"
					],
					"operation": [
						"Update Crm Tag"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/crm.tag/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Delete Crm Tag"
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
						"Crm"
					],
					"operation": [
						"Delete Crm Tag"
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
						"Crm"
					],
					"operation": [
						"Delete Crm Tag"
					]
				}
			}
		},
		{
			"displayName": "POST /api/crm.tag/{id}/call",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crm"
					],
					"operation": [
						"Call Crm Tag"
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
						"Crm"
					],
					"operation": [
						"Call Crm Tag"
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
						"Crm"
					],
					"operation": [
						"Call Crm Tag"
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
						"Crm"
					],
					"operation": [
						"Call Crm Tag"
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
						"Crm"
					],
					"operation": [
						"Call Crm Tag"
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
						"Crm"
					],
					"operation": [
						"Call Crm Tag"
					]
				}
			}
		},
];
