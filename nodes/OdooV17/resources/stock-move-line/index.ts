import type { INodeProperties } from 'n8n-workflow';

export const stockMoveLineDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Move Line"
					]
				}
			},
			"options": [
				{
					"name": "Get Stock Move Line By ID",
					"value": "Get Stock Move Line By ID",
					"action": "Read stock.move.line by ID",
					"description": "Read stock.move.line by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/stock.move.line/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Stock Move Line By ID",
					"value": "Update Stock Move Line By ID",
					"action": "Update stock.move.line by ID",
					"description": "Update stock.move.line by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/stock.move.line/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Stock Move Line By ID",
					"value": "Delete Stock Move Line By ID",
					"action": "Delete stock.move.line by ID",
					"description": "Delete stock.move.line by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/stock.move.line/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/stock.move.line/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Move Line"
					],
					"operation": [
						"Get Stock Move Line By ID"
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
						"Stock Move Line"
					],
					"operation": [
						"Get Stock Move Line By ID"
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
						"Stock Move Line"
					],
					"operation": [
						"Get Stock Move Line By ID"
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
						"Stock Move Line"
					],
					"operation": [
						"Get Stock Move Line By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/stock.move.line/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Move Line"
					],
					"operation": [
						"Update Stock Move Line By ID"
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
						"Stock Move Line"
					],
					"operation": [
						"Update Stock Move Line By ID"
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
						"Stock Move Line"
					],
					"operation": [
						"Update Stock Move Line By ID"
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
						"Stock Move Line"
					],
					"operation": [
						"Update Stock Move Line By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/stock.move.line/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Move Line"
					],
					"operation": [
						"Delete Stock Move Line By ID"
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
						"Stock Move Line"
					],
					"operation": [
						"Delete Stock Move Line By ID"
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
						"Stock Move Line"
					],
					"operation": [
						"Delete Stock Move Line By ID"
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
						"Stock Move Line"
					],
					"operation": [
						"Delete Stock Move Line By ID"
					]
				}
			}
		},
];
