import type { INodeProperties } from 'n8n-workflow';

export const accountPaymentDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Account Payment"
					]
				}
			},
			"options": [
				{
					"name": "Get Account Payment By ID",
					"value": "Get Account Payment By ID",
					"action": "Read account.payment by ID",
					"description": "Read account.payment by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/account.payment/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Account Payment By ID",
					"value": "Update Account Payment By ID",
					"action": "Update account.payment by ID",
					"description": "Update account.payment by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/account.payment/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Account Payment By ID",
					"value": "Delete Account Payment By ID",
					"action": "Delete account.payment by ID",
					"description": "Delete account.payment by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/account.payment/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/account.payment/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Payment"
					],
					"operation": [
						"Get Account Payment By ID"
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
						"Account Payment"
					],
					"operation": [
						"Get Account Payment By ID"
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
						"Account Payment"
					],
					"operation": [
						"Get Account Payment By ID"
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
						"Account Payment"
					],
					"operation": [
						"Get Account Payment By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/account.payment/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Payment"
					],
					"operation": [
						"Update Account Payment By ID"
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
						"Account Payment"
					],
					"operation": [
						"Update Account Payment By ID"
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
						"Account Payment"
					],
					"operation": [
						"Update Account Payment By ID"
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
						"Account Payment"
					],
					"operation": [
						"Update Account Payment By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/account.payment/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Payment"
					],
					"operation": [
						"Delete Account Payment By ID"
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
						"Account Payment"
					],
					"operation": [
						"Delete Account Payment By ID"
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
						"Account Payment"
					],
					"operation": [
						"Delete Account Payment By ID"
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
						"Account Payment"
					],
					"operation": [
						"Delete Account Payment By ID"
					]
				}
			}
		},
];
