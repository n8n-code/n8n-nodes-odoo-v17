import type { INodeProperties } from 'n8n-workflow';

export const accountMoveLineDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Account Move Line"
					]
				}
			},
			"options": [
				{
					"name": "Get Account Move Line By ID",
					"value": "Get Account Move Line By ID",
					"action": "Read account.move.line by ID",
					"description": "Read account.move.line by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/account.move.line/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Account Move Line By ID",
					"value": "Update Account Move Line By ID",
					"action": "Update account.move.line by ID",
					"description": "Update account.move.line by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/account.move.line/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Account Move Line By ID",
					"value": "Delete Account Move Line By ID",
					"action": "Delete account.move.line by ID",
					"description": "Delete account.move.line by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/account.move.line/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/account.move.line/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Move Line"
					],
					"operation": [
						"Get Account Move Line By ID"
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
						"Account Move Line"
					],
					"operation": [
						"Get Account Move Line By ID"
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
						"Account Move Line"
					],
					"operation": [
						"Get Account Move Line By ID"
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
						"Account Move Line"
					],
					"operation": [
						"Get Account Move Line By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/account.move.line/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Move Line"
					],
					"operation": [
						"Update Account Move Line By ID"
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
						"Account Move Line"
					],
					"operation": [
						"Update Account Move Line By ID"
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
						"Account Move Line"
					],
					"operation": [
						"Update Account Move Line By ID"
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
						"Account Move Line"
					],
					"operation": [
						"Update Account Move Line By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/account.move.line/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Move Line"
					],
					"operation": [
						"Delete Account Move Line By ID"
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
						"Account Move Line"
					],
					"operation": [
						"Delete Account Move Line By ID"
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
						"Account Move Line"
					],
					"operation": [
						"Delete Account Move Line By ID"
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
						"Account Move Line"
					],
					"operation": [
						"Delete Account Move Line By ID"
					]
				}
			}
		},
];
