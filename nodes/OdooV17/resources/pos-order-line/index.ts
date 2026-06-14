import type { INodeProperties } from 'n8n-workflow';

export const posOrderLineDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Pos Order Line"
					]
				}
			},
			"options": [
				{
					"name": "Get Pos Order Line By ID",
					"value": "Get Pos Order Line By ID",
					"action": "Read pos.order.line by ID",
					"description": "Read pos.order.line by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/pos.order.line/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Pos Order Line By ID",
					"value": "Update Pos Order Line By ID",
					"action": "Update pos.order.line by ID",
					"description": "Update pos.order.line by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/pos.order.line/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Pos Order Line By ID",
					"value": "Delete Pos Order Line By ID",
					"action": "Delete pos.order.line by ID",
					"description": "Delete pos.order.line by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/pos.order.line/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/pos.order.line/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos Order Line"
					],
					"operation": [
						"Get Pos Order Line By ID"
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
						"Pos Order Line"
					],
					"operation": [
						"Get Pos Order Line By ID"
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
						"Pos Order Line"
					],
					"operation": [
						"Get Pos Order Line By ID"
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
						"Pos Order Line"
					],
					"operation": [
						"Get Pos Order Line By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/pos.order.line/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos Order Line"
					],
					"operation": [
						"Update Pos Order Line By ID"
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
						"Pos Order Line"
					],
					"operation": [
						"Update Pos Order Line By ID"
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
						"Pos Order Line"
					],
					"operation": [
						"Update Pos Order Line By ID"
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
						"Pos Order Line"
					],
					"operation": [
						"Update Pos Order Line By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/pos.order.line/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos Order Line"
					],
					"operation": [
						"Delete Pos Order Line By ID"
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
						"Pos Order Line"
					],
					"operation": [
						"Delete Pos Order Line By ID"
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
						"Pos Order Line"
					],
					"operation": [
						"Delete Pos Order Line By ID"
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
						"Pos Order Line"
					],
					"operation": [
						"Delete Pos Order Line By ID"
					]
				}
			}
		},
];
