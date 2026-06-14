import type { INodeProperties } from 'n8n-workflow';

export const projectTaskDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Project Task"
					]
				}
			},
			"options": [
				{
					"name": "Get Project Task By ID",
					"value": "Get Project Task By ID",
					"action": "Read project.task by ID",
					"description": "Read project.task by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/project.task/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Project Task By ID",
					"value": "Update Project Task By ID",
					"action": "Update project.task by ID",
					"description": "Update project.task by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/project.task/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Project Task By ID",
					"value": "Delete Project Task By ID",
					"action": "Delete project.task by ID",
					"description": "Delete project.task by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/project.task/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/project.task/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Task"
					],
					"operation": [
						"Get Project Task By ID"
					]
				}
			}
		},
		{
			"displayName": "Record ID",
			"name": "record_id",
			"required": true,
			"description": "Record ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Task"
					],
					"operation": [
						"Get Project Task By ID"
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
						"Project Task"
					],
					"operation": [
						"Get Project Task By ID"
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
						"Project Task"
					],
					"operation": [
						"Get Project Task By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/project.task/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Task"
					],
					"operation": [
						"Update Project Task By ID"
					]
				}
			}
		},
		{
			"displayName": "Record ID",
			"name": "record_id",
			"required": true,
			"description": "Record ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Task"
					],
					"operation": [
						"Update Project Task By ID"
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
						"Project Task"
					],
					"operation": [
						"Update Project Task By ID"
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
						"Project Task"
					],
					"operation": [
						"Update Project Task By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/project.task/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Task"
					],
					"operation": [
						"Delete Project Task By ID"
					]
				}
			}
		},
		{
			"displayName": "Record ID",
			"name": "record_id",
			"required": true,
			"description": "Record ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Task"
					],
					"operation": [
						"Delete Project Task By ID"
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
						"Project Task"
					],
					"operation": [
						"Delete Project Task By ID"
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
						"Project Task"
					],
					"operation": [
						"Delete Project Task By ID"
					]
				}
			}
		},
];
