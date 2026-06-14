import type { INodeProperties } from 'n8n-workflow';

export const mailThreadDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Mail Thread"
					]
				}
			},
			"options": [
				{
					"name": "Get Mail Thread By ID",
					"value": "Get Mail Thread By ID",
					"action": "Read mail.thread by ID",
					"description": "Read mail.thread by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/mail.thread/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Mail Thread By ID",
					"value": "Update Mail Thread By ID",
					"action": "Update mail.thread by ID",
					"description": "Update mail.thread by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/mail.thread/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Mail Thread By ID",
					"value": "Delete Mail Thread By ID",
					"action": "Delete mail.thread by ID",
					"description": "Delete mail.thread by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/mail.thread/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/mail.thread/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mail Thread"
					],
					"operation": [
						"Get Mail Thread By ID"
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
						"Mail Thread"
					],
					"operation": [
						"Get Mail Thread By ID"
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
						"Mail Thread"
					],
					"operation": [
						"Get Mail Thread By ID"
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
						"Mail Thread"
					],
					"operation": [
						"Get Mail Thread By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/mail.thread/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mail Thread"
					],
					"operation": [
						"Update Mail Thread By ID"
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
						"Mail Thread"
					],
					"operation": [
						"Update Mail Thread By ID"
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
						"Mail Thread"
					],
					"operation": [
						"Update Mail Thread By ID"
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
						"Mail Thread"
					],
					"operation": [
						"Update Mail Thread By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/mail.thread/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mail Thread"
					],
					"operation": [
						"Delete Mail Thread By ID"
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
						"Mail Thread"
					],
					"operation": [
						"Delete Mail Thread By ID"
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
						"Mail Thread"
					],
					"operation": [
						"Delete Mail Thread By ID"
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
						"Mail Thread"
					],
					"operation": [
						"Delete Mail Thread By ID"
					]
				}
			}
		},
];
