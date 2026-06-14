import type { INodeProperties } from 'n8n-workflow';

export const productProductDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Product Product"
					]
				}
			},
			"options": [
				{
					"name": "Get Product Product By ID",
					"value": "Get Product Product By ID",
					"action": "Read product.product by ID",
					"description": "Read product.product by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/product.product/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Product Product By ID",
					"value": "Update Product Product By ID",
					"action": "Update product.product by ID",
					"description": "Update product.product by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/product.product/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Product Product By ID",
					"value": "Delete Product Product By ID",
					"action": "Delete product.product by ID",
					"description": "Delete product.product by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/product.product/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/product.product/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product Product"
					],
					"operation": [
						"Get Product Product By ID"
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
						"Product Product"
					],
					"operation": [
						"Get Product Product By ID"
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
						"Product Product"
					],
					"operation": [
						"Get Product Product By ID"
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
						"Product Product"
					],
					"operation": [
						"Get Product Product By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/product.product/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product Product"
					],
					"operation": [
						"Update Product Product By ID"
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
						"Product Product"
					],
					"operation": [
						"Update Product Product By ID"
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
						"Product Product"
					],
					"operation": [
						"Update Product Product By ID"
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
						"Product Product"
					],
					"operation": [
						"Update Product Product By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/product.product/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product Product"
					],
					"operation": [
						"Delete Product Product By ID"
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
						"Product Product"
					],
					"operation": [
						"Delete Product Product By ID"
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
						"Product Product"
					],
					"operation": [
						"Delete Product Product By ID"
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
						"Product Product"
					],
					"operation": [
						"Delete Product Product By ID"
					]
				}
			}
		},
];
