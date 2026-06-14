import type { INodeProperties } from 'n8n-workflow';

export const accountAccountDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Account Account"
					]
				}
			},
			"options": [
				{
					"name": "Get Account Account By ID",
					"value": "Get Account Account By ID",
					"action": "Read account.account by ID",
					"description": "Read account.account by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/account.account/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Account Account By ID",
					"value": "Update Account Account By ID",
					"action": "Update account.account by ID",
					"description": "Update account.account by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/account.account/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Account Account By ID",
					"value": "Delete Account Account By ID",
					"action": "Delete account.account by ID",
					"description": "Delete account.account by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/account.account/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/account.account/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Account"
					],
					"operation": [
						"Get Account Account By ID"
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
						"Account Account"
					],
					"operation": [
						"Get Account Account By ID"
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
						"Account Account"
					],
					"operation": [
						"Get Account Account By ID"
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
						"Account Account"
					],
					"operation": [
						"Get Account Account By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/account.account/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Account"
					],
					"operation": [
						"Update Account Account By ID"
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
						"Account Account"
					],
					"operation": [
						"Update Account Account By ID"
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
						"Account Account"
					],
					"operation": [
						"Update Account Account By ID"
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
						"Account Account"
					],
					"operation": [
						"Update Account Account By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/account.account/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Account"
					],
					"operation": [
						"Delete Account Account By ID"
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
						"Account Account"
					],
					"operation": [
						"Delete Account Account By ID"
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
						"Account Account"
					],
					"operation": [
						"Delete Account Account By ID"
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
						"Account Account"
					],
					"operation": [
						"Delete Account Account By ID"
					]
				}
			}
		},
];
