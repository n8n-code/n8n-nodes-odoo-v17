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
					"name": "Create Hr Department",
					"value": "Create Hr Department",
					"action": "Create Department",
					"description": "Create a new hr.department record. Uses Odoo `create` method.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/hr.department"
						}
					}
				},
				{
					"name": "Get Hr Department",
					"value": "Get Hr Department",
					"action": "Get Department by ID",
					"description": "Read a single hr.department record by ID. Uses Odoo `read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/hr.department/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Hr Department",
					"value": "Update Hr Department",
					"action": "Update Department",
					"description": "Update an existing hr.department record. Uses Odoo `write` method.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/hr.department/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete Hr Department",
					"value": "Delete Hr Department",
					"action": "Delete Department",
					"description": "Delete a hr.department record. Uses Odoo `unlink` method.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/hr.department/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Call Hr Department",
					"value": "Call Hr Department",
					"action": "Call method on Department",
					"description": "Call any method on a hr.department record. Uses Odoo `execute_kw` with method name.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/hr.department/{{$parameter[\"id\"]}}/call"
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
					"name": "Create Hr Employee",
					"value": "Create Hr Employee",
					"action": "Create Employee",
					"description": "Create a new hr.employee record. Uses Odoo `create` method.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/hr.employee"
						}
					}
				},
				{
					"name": "Get Hr Employee",
					"value": "Get Hr Employee",
					"action": "Get Employee by ID",
					"description": "Read a single hr.employee record by ID. Uses Odoo `read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/hr.employee/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Hr Employee",
					"value": "Update Hr Employee",
					"action": "Update Employee",
					"description": "Update an existing hr.employee record. Uses Odoo `write` method.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/hr.employee/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete Hr Employee",
					"value": "Delete Hr Employee",
					"action": "Delete Employee",
					"description": "Delete a hr.employee record. Uses Odoo `unlink` method.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/hr.employee/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Call Hr Employee",
					"value": "Call Hr Employee",
					"action": "Call method on Employee",
					"description": "Call any method on a hr.employee record. Uses Odoo `execute_kw` with method name.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/hr.employee/{{$parameter[\"id\"]}}/call"
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
					"name": "Create Hr Job",
					"value": "Create Hr Job",
					"action": "Create Job Position",
					"description": "Create a new hr.job record. Uses Odoo `create` method.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/hr.job"
						}
					}
				},
				{
					"name": "Get Hr Job",
					"value": "Get Hr Job",
					"action": "Get Job Position by ID",
					"description": "Read a single hr.job record by ID. Uses Odoo `read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/hr.job/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Hr Job",
					"value": "Update Hr Job",
					"action": "Update Job Position",
					"description": "Update an existing hr.job record. Uses Odoo `write` method.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/hr.job/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete Hr Job",
					"value": "Delete Hr Job",
					"action": "Delete Job Position",
					"description": "Delete a hr.job record. Uses Odoo `unlink` method.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/hr.job/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Call Hr Job",
					"value": "Call Hr Job",
					"action": "Call method on Job Position",
					"description": "Call any method on a hr.job record. Uses Odoo `execute_kw` with method name.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/hr.job/{{$parameter[\"id\"]}}/call"
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
						"Hr"
					],
					"operation": [
						"Search Hr Department"
					]
				}
			}
		},
		{
			"displayName": "POST /api/hr.department",
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
						"Create Hr Department"
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
						"Create Hr Department"
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
						"Create Hr Department"
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
						"Create Hr Department"
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
						"Create Hr Department"
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
						"Create Hr Department"
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
						"Create Hr Department"
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
						"Create Hr Department"
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
						"Create Hr Department"
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
						"Create Hr Department"
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
						"Create Hr Department"
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
						"Create Hr Department"
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
						"Create Hr Department"
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
						"Create Hr Department"
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
						"Create Hr Department"
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
						"Create Hr Department"
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
						"Create Hr Department"
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
						"Create Hr Department"
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
						"Create Hr Department"
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
						"Create Hr Department"
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
						"Create Hr Department"
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
						"Create Hr Department"
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
						"Create Hr Department"
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
						"Hr"
					],
					"operation": [
						"Create Hr Department"
					]
				}
			}
		},
		{
			"displayName": "GET /api/hr.department/{id}",
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
						"Get Hr Department"
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
						"Hr"
					],
					"operation": [
						"Get Hr Department"
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
						"Hr"
					],
					"operation": [
						"Get Hr Department"
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
						"Hr"
					],
					"operation": [
						"Get Hr Department"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/hr.department/{id}",
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
						"Update Hr Department"
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
						"Hr"
					],
					"operation": [
						"Update Hr Department"
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
						"Update Hr Department"
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
						"Update Hr Department"
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
						"Update Hr Department"
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
						"Update Hr Department"
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
						"Update Hr Department"
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
						"Update Hr Department"
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
						"Update Hr Department"
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
						"Update Hr Department"
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
						"Update Hr Department"
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
						"Update Hr Department"
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
						"Update Hr Department"
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
						"Update Hr Department"
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
						"Update Hr Department"
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
						"Update Hr Department"
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
						"Update Hr Department"
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
						"Update Hr Department"
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
						"Update Hr Department"
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
						"Update Hr Department"
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
						"Update Hr Department"
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
						"Update Hr Department"
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
						"Update Hr Department"
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
						"Update Hr Department"
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
						"Hr"
					],
					"operation": [
						"Update Hr Department"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/hr.department/{id}",
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
						"Delete Hr Department"
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
						"Hr"
					],
					"operation": [
						"Delete Hr Department"
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
						"Hr"
					],
					"operation": [
						"Delete Hr Department"
					]
				}
			}
		},
		{
			"displayName": "POST /api/hr.department/{id}/call",
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
						"Call Hr Department"
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
						"Hr"
					],
					"operation": [
						"Call Hr Department"
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
						"Hr"
					],
					"operation": [
						"Call Hr Department"
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
						"Hr"
					],
					"operation": [
						"Call Hr Department"
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
						"Hr"
					],
					"operation": [
						"Call Hr Department"
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
						"Hr"
					],
					"operation": [
						"Call Hr Department"
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
						"Hr"
					],
					"operation": [
						"Search Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "POST /api/hr.employee",
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
					]
				}
			}
		},
		{
			"required": true,
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
					]
				}
			}
		},
		{
			"required": true,
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Create Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Create Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "GET /api/hr.employee/{id}",
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
						"Get Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Get Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Get Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Get Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/hr.employee/{id}",
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
						"Update Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Update Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Update Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/hr.employee/{id}",
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
						"Delete Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Delete Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Delete Hr Employee"
					]
				}
			}
		},
		{
			"displayName": "POST /api/hr.employee/{id}/call",
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
						"Call Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Call Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Call Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Call Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Call Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Call Hr Employee"
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
						"Hr"
					],
					"operation": [
						"Search Hr Job"
					]
				}
			}
		},
		{
			"displayName": "POST /api/hr.job",
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
						"Create Hr Job"
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
						"Create Hr Job"
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
						"Create Hr Job"
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
						"Create Hr Job"
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
						"Create Hr Job"
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
						"Create Hr Job"
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
						"Create Hr Job"
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
						"Create Hr Job"
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
						"Create Hr Job"
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
						"Create Hr Job"
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
						"Create Hr Job"
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
						"Create Hr Job"
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
						"Create Hr Job"
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
						"Create Hr Job"
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
						"Create Hr Job"
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
						"Create Hr Job"
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
						"Create Hr Job"
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
						"Create Hr Job"
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
						"Create Hr Job"
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
						"Create Hr Job"
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
						"Create Hr Job"
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
						"Create Hr Job"
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
						"Hr"
					],
					"operation": [
						"Create Hr Job"
					]
				}
			}
		},
		{
			"displayName": "GET /api/hr.job/{id}",
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
						"Get Hr Job"
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
						"Hr"
					],
					"operation": [
						"Get Hr Job"
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
						"Hr"
					],
					"operation": [
						"Get Hr Job"
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
						"Hr"
					],
					"operation": [
						"Get Hr Job"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/hr.job/{id}",
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
						"Update Hr Job"
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
						"Hr"
					],
					"operation": [
						"Update Hr Job"
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
						"Update Hr Job"
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
						"Update Hr Job"
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
						"Update Hr Job"
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
						"Update Hr Job"
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
						"Update Hr Job"
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
						"Update Hr Job"
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
						"Update Hr Job"
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
						"Update Hr Job"
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
						"Update Hr Job"
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
						"Update Hr Job"
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
						"Update Hr Job"
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
						"Update Hr Job"
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
						"Update Hr Job"
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
						"Update Hr Job"
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
						"Update Hr Job"
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
						"Update Hr Job"
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
						"Update Hr Job"
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
						"Update Hr Job"
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
						"Update Hr Job"
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
						"Update Hr Job"
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
						"Update Hr Job"
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
						"Hr"
					],
					"operation": [
						"Update Hr Job"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/hr.job/{id}",
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
						"Delete Hr Job"
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
						"Hr"
					],
					"operation": [
						"Delete Hr Job"
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
						"Hr"
					],
					"operation": [
						"Delete Hr Job"
					]
				}
			}
		},
		{
			"displayName": "POST /api/hr.job/{id}/call",
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
						"Call Hr Job"
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
						"Hr"
					],
					"operation": [
						"Call Hr Job"
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
						"Hr"
					],
					"operation": [
						"Call Hr Job"
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
						"Hr"
					],
					"operation": [
						"Call Hr Job"
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
						"Hr"
					],
					"operation": [
						"Call Hr Job"
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
						"Hr"
					],
					"operation": [
						"Call Hr Job"
					]
				}
			}
		},
];
