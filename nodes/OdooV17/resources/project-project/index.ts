import type { INodeProperties } from 'n8n-workflow';

export const projectProjectDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Project Project"
					]
				}
			},
			"options": [
				{
					"name": "Get Project Project By ID",
					"value": "Get Project Project By ID",
					"action": "Read project.project by ID",
					"description": "Read project.project by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/project.project/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Project Project By ID",
					"value": "Update Project Project By ID",
					"action": "Update project.project by ID",
					"description": "Update project.project by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/project.project/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Project Project By ID",
					"value": "Delete Project Project By ID",
					"action": "Delete project.project by ID",
					"description": "Delete project.project by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/project.project/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/project.project/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Project"
					],
					"operation": [
						"Get Project Project By ID"
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
						"Project Project"
					],
					"operation": [
						"Get Project Project By ID"
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
						"Project Project"
					],
					"operation": [
						"Get Project Project By ID"
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
						"Project Project"
					],
					"operation": [
						"Get Project Project By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/project.project/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Project"
					],
					"operation": [
						"Update Project Project By ID"
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
						"Project Project"
					],
					"operation": [
						"Update Project Project By ID"
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
						"Project Project"
					],
					"operation": [
						"Update Project Project By ID"
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
						"Project Project"
					],
					"operation": [
						"Update Project Project By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/project.project/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Project"
					],
					"operation": [
						"Delete Project Project By ID"
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
						"Project Project"
					],
					"operation": [
						"Delete Project Project By ID"
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
						"Project Project"
					],
					"operation": [
						"Delete Project Project By ID"
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
						"Project Project"
					],
					"operation": [
						"Delete Project Project By ID"
					]
				}
			}
		},
];
