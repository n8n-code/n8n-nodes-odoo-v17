import type { INodeProperties } from 'n8n-workflow';

export const productTemplateDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Product Template"
					]
				}
			},
			"options": [
				{
					"name": "Get Product Template By ID",
					"value": "Get Product Template By ID",
					"action": "Read product.template by ID",
					"description": "Read product.template by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/product.template/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Product Template By ID",
					"value": "Update Product Template By ID",
					"action": "Update product.template by ID",
					"description": "Update product.template by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/product.template/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Product Template By ID",
					"value": "Delete Product Template By ID",
					"action": "Delete product.template by ID",
					"description": "Delete product.template by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/product.template/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/product.template/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product Template"
					],
					"operation": [
						"Get Product Template By ID"
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
						"Product Template"
					],
					"operation": [
						"Get Product Template By ID"
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
						"Product Template"
					],
					"operation": [
						"Get Product Template By ID"
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
						"Product Template"
					],
					"operation": [
						"Get Product Template By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/product.template/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product Template"
					],
					"operation": [
						"Update Product Template By ID"
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
						"Product Template"
					],
					"operation": [
						"Update Product Template By ID"
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
						"Product Template"
					],
					"operation": [
						"Update Product Template By ID"
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
						"Product Template"
					],
					"operation": [
						"Update Product Template By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/product.template/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product Template"
					],
					"operation": [
						"Delete Product Template By ID"
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
						"Product Template"
					],
					"operation": [
						"Delete Product Template By ID"
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
						"Product Template"
					],
					"operation": [
						"Delete Product Template By ID"
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
						"Product Template"
					],
					"operation": [
						"Delete Product Template By ID"
					]
				}
			}
		},
];
