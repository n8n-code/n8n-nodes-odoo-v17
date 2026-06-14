import type { INodeProperties } from 'n8n-workflow';

export const stockPickingDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Picking"
					]
				}
			},
			"options": [
				{
					"name": "Get Stock Picking By ID",
					"value": "Get Stock Picking By ID",
					"action": "Read stock.picking by ID",
					"description": "Read stock.picking by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/stock.picking/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Stock Picking By ID",
					"value": "Update Stock Picking By ID",
					"action": "Update stock.picking by ID",
					"description": "Update stock.picking by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/stock.picking/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Stock Picking By ID",
					"value": "Delete Stock Picking By ID",
					"action": "Delete stock.picking by ID",
					"description": "Delete stock.picking by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/stock.picking/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/stock.picking/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Picking"
					],
					"operation": [
						"Get Stock Picking By ID"
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
						"Stock Picking"
					],
					"operation": [
						"Get Stock Picking By ID"
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
						"Stock Picking"
					],
					"operation": [
						"Get Stock Picking By ID"
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
						"Stock Picking"
					],
					"operation": [
						"Get Stock Picking By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/stock.picking/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Picking"
					],
					"operation": [
						"Update Stock Picking By ID"
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
						"Stock Picking"
					],
					"operation": [
						"Update Stock Picking By ID"
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
						"Stock Picking"
					],
					"operation": [
						"Update Stock Picking By ID"
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
						"Stock Picking"
					],
					"operation": [
						"Update Stock Picking By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/stock.picking/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Picking"
					],
					"operation": [
						"Delete Stock Picking By ID"
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
						"Stock Picking"
					],
					"operation": [
						"Delete Stock Picking By ID"
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
						"Stock Picking"
					],
					"operation": [
						"Delete Stock Picking By ID"
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
						"Stock Picking"
					],
					"operation": [
						"Delete Stock Picking By ID"
					]
				}
			}
		},
];
