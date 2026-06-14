import type { INodeProperties } from 'n8n-workflow';

export const stockPickingTypeDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Picking Type"
					]
				}
			},
			"options": [
				{
					"name": "Get Stock Picking Type By ID",
					"value": "Get Stock Picking Type By ID",
					"action": "Read stock.picking.type by ID",
					"description": "Read stock.picking.type by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/stock.picking.type/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Stock Picking Type By ID",
					"value": "Update Stock Picking Type By ID",
					"action": "Update stock.picking.type by ID",
					"description": "Update stock.picking.type by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/stock.picking.type/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Stock Picking Type By ID",
					"value": "Delete Stock Picking Type By ID",
					"action": "Delete stock.picking.type by ID",
					"description": "Delete stock.picking.type by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/stock.picking.type/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/stock.picking.type/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Picking Type"
					],
					"operation": [
						"Get Stock Picking Type By ID"
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
						"Stock Picking Type"
					],
					"operation": [
						"Get Stock Picking Type By ID"
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
						"Stock Picking Type"
					],
					"operation": [
						"Get Stock Picking Type By ID"
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
						"Stock Picking Type"
					],
					"operation": [
						"Get Stock Picking Type By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/stock.picking.type/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Picking Type"
					],
					"operation": [
						"Update Stock Picking Type By ID"
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
						"Stock Picking Type"
					],
					"operation": [
						"Update Stock Picking Type By ID"
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
						"Stock Picking Type"
					],
					"operation": [
						"Update Stock Picking Type By ID"
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
						"Stock Picking Type"
					],
					"operation": [
						"Update Stock Picking Type By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/stock.picking.type/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Picking Type"
					],
					"operation": [
						"Delete Stock Picking Type By ID"
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
						"Stock Picking Type"
					],
					"operation": [
						"Delete Stock Picking Type By ID"
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
						"Stock Picking Type"
					],
					"operation": [
						"Delete Stock Picking Type By ID"
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
						"Stock Picking Type"
					],
					"operation": [
						"Delete Stock Picking Type By ID"
					]
				}
			}
		},
];
