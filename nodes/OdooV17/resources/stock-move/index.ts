import type { INodeProperties } from 'n8n-workflow';

export const stockMoveDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Move"
					]
				}
			},
			"options": [
				{
					"name": "Get Stock Move By ID",
					"value": "Get Stock Move By ID",
					"action": "Read stock.move by ID",
					"description": "Read stock.move by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/stock.move/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Stock Move By ID",
					"value": "Update Stock Move By ID",
					"action": "Update stock.move by ID",
					"description": "Update stock.move by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/stock.move/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Stock Move By ID",
					"value": "Delete Stock Move By ID",
					"action": "Delete stock.move by ID",
					"description": "Delete stock.move by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/stock.move/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/stock.move/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Move"
					],
					"operation": [
						"Get Stock Move By ID"
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
						"Stock Move"
					],
					"operation": [
						"Get Stock Move By ID"
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
						"Stock Move"
					],
					"operation": [
						"Get Stock Move By ID"
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
						"Stock Move"
					],
					"operation": [
						"Get Stock Move By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/stock.move/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Move"
					],
					"operation": [
						"Update Stock Move By ID"
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
						"Stock Move"
					],
					"operation": [
						"Update Stock Move By ID"
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
						"Stock Move"
					],
					"operation": [
						"Update Stock Move By ID"
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
						"Stock Move"
					],
					"operation": [
						"Update Stock Move By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/stock.move/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Move"
					],
					"operation": [
						"Delete Stock Move By ID"
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
						"Stock Move"
					],
					"operation": [
						"Delete Stock Move By ID"
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
						"Stock Move"
					],
					"operation": [
						"Delete Stock Move By ID"
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
						"Stock Move"
					],
					"operation": [
						"Delete Stock Move By ID"
					]
				}
			}
		},
];
