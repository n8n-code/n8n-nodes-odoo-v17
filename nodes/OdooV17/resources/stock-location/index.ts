import type { INodeProperties } from 'n8n-workflow';

export const stockLocationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Location"
					]
				}
			},
			"options": [
				{
					"name": "Get Stock Location By ID",
					"value": "Get Stock Location By ID",
					"action": "Read stock.location by ID",
					"description": "Read stock.location by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/stock.location/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Stock Location By ID",
					"value": "Update Stock Location By ID",
					"action": "Update stock.location by ID",
					"description": "Update stock.location by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/stock.location/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Stock Location By ID",
					"value": "Delete Stock Location By ID",
					"action": "Delete stock.location by ID",
					"description": "Delete stock.location by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/stock.location/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/stock.location/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Location"
					],
					"operation": [
						"Get Stock Location By ID"
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
						"Stock Location"
					],
					"operation": [
						"Get Stock Location By ID"
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
						"Stock Location"
					],
					"operation": [
						"Get Stock Location By ID"
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
						"Stock Location"
					],
					"operation": [
						"Get Stock Location By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/stock.location/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Location"
					],
					"operation": [
						"Update Stock Location By ID"
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
						"Stock Location"
					],
					"operation": [
						"Update Stock Location By ID"
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
						"Stock Location"
					],
					"operation": [
						"Update Stock Location By ID"
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
						"Stock Location"
					],
					"operation": [
						"Update Stock Location By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/stock.location/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock Location"
					],
					"operation": [
						"Delete Stock Location By ID"
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
						"Stock Location"
					],
					"operation": [
						"Delete Stock Location By ID"
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
						"Stock Location"
					],
					"operation": [
						"Delete Stock Location By ID"
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
						"Stock Location"
					],
					"operation": [
						"Delete Stock Location By ID"
					]
				}
			}
		},
];
