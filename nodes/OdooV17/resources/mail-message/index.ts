import type { INodeProperties } from 'n8n-workflow';

export const mailMessageDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Mail Message"
					]
				}
			},
			"options": [
				{
					"name": "Get Mail Message By ID",
					"value": "Get Mail Message By ID",
					"action": "Read mail.message by ID",
					"description": "Read mail.message by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/mail.message/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Mail Message By ID",
					"value": "Update Mail Message By ID",
					"action": "Update mail.message by ID",
					"description": "Update mail.message by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/mail.message/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Mail Message By ID",
					"value": "Delete Mail Message By ID",
					"action": "Delete mail.message by ID",
					"description": "Delete mail.message by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/mail.message/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/mail.message/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mail Message"
					],
					"operation": [
						"Get Mail Message By ID"
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
						"Mail Message"
					],
					"operation": [
						"Get Mail Message By ID"
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
						"Mail Message"
					],
					"operation": [
						"Get Mail Message By ID"
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
						"Mail Message"
					],
					"operation": [
						"Get Mail Message By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/mail.message/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mail Message"
					],
					"operation": [
						"Update Mail Message By ID"
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
						"Mail Message"
					],
					"operation": [
						"Update Mail Message By ID"
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
						"Mail Message"
					],
					"operation": [
						"Update Mail Message By ID"
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
						"Mail Message"
					],
					"operation": [
						"Update Mail Message By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/mail.message/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mail Message"
					],
					"operation": [
						"Delete Mail Message By ID"
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
						"Mail Message"
					],
					"operation": [
						"Delete Mail Message By ID"
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
						"Mail Message"
					],
					"operation": [
						"Delete Mail Message By ID"
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
						"Mail Message"
					],
					"operation": [
						"Delete Mail Message By ID"
					]
				}
			}
		},
];
