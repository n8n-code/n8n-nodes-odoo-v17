import type { INodeProperties } from 'n8n-workflow';

export const productAttributeDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Product Attribute"
					]
				}
			},
			"options": [
				{
					"name": "Get Product Attribute By ID",
					"value": "Get Product Attribute By ID",
					"action": "Read product.attribute by ID",
					"description": "Read product.attribute by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/product.attribute/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Product Attribute By ID",
					"value": "Update Product Attribute By ID",
					"action": "Update product.attribute by ID",
					"description": "Update product.attribute by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/product.attribute/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Product Attribute By ID",
					"value": "Delete Product Attribute By ID",
					"action": "Delete product.attribute by ID",
					"description": "Delete product.attribute by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/product.attribute/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/product.attribute/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product Attribute"
					],
					"operation": [
						"Get Product Attribute By ID"
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
						"Product Attribute"
					],
					"operation": [
						"Get Product Attribute By ID"
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
						"Product Attribute"
					],
					"operation": [
						"Get Product Attribute By ID"
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
						"Product Attribute"
					],
					"operation": [
						"Get Product Attribute By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/product.attribute/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product Attribute"
					],
					"operation": [
						"Update Product Attribute By ID"
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
						"Product Attribute"
					],
					"operation": [
						"Update Product Attribute By ID"
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
						"Product Attribute"
					],
					"operation": [
						"Update Product Attribute By ID"
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
						"Product Attribute"
					],
					"operation": [
						"Update Product Attribute By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/product.attribute/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product Attribute"
					],
					"operation": [
						"Delete Product Attribute By ID"
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
						"Product Attribute"
					],
					"operation": [
						"Delete Product Attribute By ID"
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
						"Product Attribute"
					],
					"operation": [
						"Delete Product Attribute By ID"
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
						"Product Attribute"
					],
					"operation": [
						"Delete Product Attribute By ID"
					]
				}
			}
		},
];
