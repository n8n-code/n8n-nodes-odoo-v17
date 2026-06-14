import type { INodeProperties } from 'n8n-workflow';

export const stockWarehouseDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Warehouse"
					]
				}
			},
			"options": [
				{
					"name": "Get Stock Warehouse By ID",
					"value": "Get Stock Warehouse By ID",
					"action": "Read stock.warehouse by ID",
					"description": "Read stock.warehouse by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/stock.warehouse/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Stock Warehouse By ID",
					"value": "Update Stock Warehouse By ID",
					"action": "Update stock.warehouse by ID",
					"description": "Update stock.warehouse by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/stock.warehouse/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Stock Warehouse By ID",
					"value": "Delete Stock Warehouse By ID",
					"action": "Delete stock.warehouse by ID",
					"description": "Delete stock.warehouse by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/stock.warehouse/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/stock.warehouse/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Warehouse"
					],
					"operation": [
						"Get Stock Warehouse By ID"
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
						"Stock Warehouse"
					],
					"operation": [
						"Get Stock Warehouse By ID"
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
						"Stock Warehouse"
					],
					"operation": [
						"Get Stock Warehouse By ID"
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
						"Stock Warehouse"
					],
					"operation": [
						"Get Stock Warehouse By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/stock.warehouse/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Warehouse"
					],
					"operation": [
						"Update Stock Warehouse By ID"
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
						"Stock Warehouse"
					],
					"operation": [
						"Update Stock Warehouse By ID"
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
						"Stock Warehouse"
					],
					"operation": [
						"Update Stock Warehouse By ID"
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
						"Stock Warehouse"
					],
					"operation": [
						"Update Stock Warehouse By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/stock.warehouse/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Warehouse"
					],
					"operation": [
						"Delete Stock Warehouse By ID"
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
						"Stock Warehouse"
					],
					"operation": [
						"Delete Stock Warehouse By ID"
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
						"Stock Warehouse"
					],
					"operation": [
						"Delete Stock Warehouse By ID"
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
						"Stock Warehouse"
					],
					"operation": [
						"Delete Stock Warehouse By ID"
					]
				}
			}
		},
];
