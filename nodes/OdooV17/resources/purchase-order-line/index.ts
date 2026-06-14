import type { INodeProperties } from 'n8n-workflow';

export const purchaseOrderLineDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase Order Line"
					]
				}
			},
			"options": [
				{
					"name": "Get Purchase Order Line By ID",
					"value": "Get Purchase Order Line By ID",
					"action": "Read purchase.order.line by ID",
					"description": "Read purchase.order.line by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/purchase.order.line/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Purchase Order Line By ID",
					"value": "Update Purchase Order Line By ID",
					"action": "Update purchase.order.line by ID",
					"description": "Update purchase.order.line by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/purchase.order.line/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Purchase Order Line By ID",
					"value": "Delete Purchase Order Line By ID",
					"action": "Delete purchase.order.line by ID",
					"description": "Delete purchase.order.line by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/purchase.order.line/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/purchase.order.line/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase Order Line"
					],
					"operation": [
						"Get Purchase Order Line By ID"
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
						"Purchase Order Line"
					],
					"operation": [
						"Get Purchase Order Line By ID"
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
						"Purchase Order Line"
					],
					"operation": [
						"Get Purchase Order Line By ID"
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
						"Purchase Order Line"
					],
					"operation": [
						"Get Purchase Order Line By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/purchase.order.line/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase Order Line"
					],
					"operation": [
						"Update Purchase Order Line By ID"
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
						"Purchase Order Line"
					],
					"operation": [
						"Update Purchase Order Line By ID"
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
						"Purchase Order Line"
					],
					"operation": [
						"Update Purchase Order Line By ID"
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
						"Purchase Order Line"
					],
					"operation": [
						"Update Purchase Order Line By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/purchase.order.line/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase Order Line"
					],
					"operation": [
						"Delete Purchase Order Line By ID"
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
						"Purchase Order Line"
					],
					"operation": [
						"Delete Purchase Order Line By ID"
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
						"Purchase Order Line"
					],
					"operation": [
						"Delete Purchase Order Line By ID"
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
						"Purchase Order Line"
					],
					"operation": [
						"Delete Purchase Order Line By ID"
					]
				}
			}
		},
];
