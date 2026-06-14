import type { INodeProperties } from 'n8n-workflow';

export const stockQuantDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Quant"
					]
				}
			},
			"options": [
				{
					"name": "Get Stock Quant By ID",
					"value": "Get Stock Quant By ID",
					"action": "Read stock.quant by ID",
					"description": "Read stock.quant by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/stock.quant/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Stock Quant By ID",
					"value": "Update Stock Quant By ID",
					"action": "Update stock.quant by ID",
					"description": "Update stock.quant by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/stock.quant/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Stock Quant By ID",
					"value": "Delete Stock Quant By ID",
					"action": "Delete stock.quant by ID",
					"description": "Delete stock.quant by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/stock.quant/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/stock.quant/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Quant"
					],
					"operation": [
						"Get Stock Quant By ID"
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
						"Stock Quant"
					],
					"operation": [
						"Get Stock Quant By ID"
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
						"Stock Quant"
					],
					"operation": [
						"Get Stock Quant By ID"
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
						"Stock Quant"
					],
					"operation": [
						"Get Stock Quant By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/stock.quant/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Quant"
					],
					"operation": [
						"Update Stock Quant By ID"
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
						"Stock Quant"
					],
					"operation": [
						"Update Stock Quant By ID"
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
						"Stock Quant"
					],
					"operation": [
						"Update Stock Quant By ID"
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
						"Stock Quant"
					],
					"operation": [
						"Update Stock Quant By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/stock.quant/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Quant"
					],
					"operation": [
						"Delete Stock Quant By ID"
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
						"Stock Quant"
					],
					"operation": [
						"Delete Stock Quant By ID"
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
						"Stock Quant"
					],
					"operation": [
						"Delete Stock Quant By ID"
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
						"Stock Quant"
					],
					"operation": [
						"Delete Stock Quant By ID"
					]
				}
			}
		},
];
