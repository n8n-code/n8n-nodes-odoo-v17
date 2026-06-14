import type { INodeProperties } from 'n8n-workflow';

export const saleOrderDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Sale Order"
					]
				}
			},
			"options": [
				{
					"name": "Get Sale Order By ID",
					"value": "Get Sale Order By ID",
					"action": "Read sale.order by ID",
					"description": "Read sale.order by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/sale.order/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Sale Order By ID",
					"value": "Update Sale Order By ID",
					"action": "Update sale.order by ID",
					"description": "Update sale.order by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/sale.order/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Sale Order By ID",
					"value": "Delete Sale Order By ID",
					"action": "Delete sale.order by ID",
					"description": "Delete sale.order by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/sale.order/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/sale.order/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sale Order"
					],
					"operation": [
						"Get Sale Order By ID"
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
						"Sale Order"
					],
					"operation": [
						"Get Sale Order By ID"
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
						"Sale Order"
					],
					"operation": [
						"Get Sale Order By ID"
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
						"Sale Order"
					],
					"operation": [
						"Get Sale Order By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/sale.order/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sale Order"
					],
					"operation": [
						"Update Sale Order By ID"
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
						"Sale Order"
					],
					"operation": [
						"Update Sale Order By ID"
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
						"Sale Order"
					],
					"operation": [
						"Update Sale Order By ID"
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
						"Sale Order"
					],
					"operation": [
						"Update Sale Order By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/sale.order/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sale Order"
					],
					"operation": [
						"Delete Sale Order By ID"
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
						"Sale Order"
					],
					"operation": [
						"Delete Sale Order By ID"
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
						"Sale Order"
					],
					"operation": [
						"Delete Sale Order By ID"
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
						"Sale Order"
					],
					"operation": [
						"Delete Sale Order By ID"
					]
				}
			}
		},
];
