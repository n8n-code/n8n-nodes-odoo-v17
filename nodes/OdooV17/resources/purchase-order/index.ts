import type { INodeProperties } from 'n8n-workflow';

export const purchaseOrderDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase Order"
					]
				}
			},
			"options": [
				{
					"name": "Get Purchase Order By ID",
					"value": "Get Purchase Order By ID",
					"action": "Read purchase.order by ID",
					"description": "Read purchase.order by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/purchase.order/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Purchase Order By ID",
					"value": "Update Purchase Order By ID",
					"action": "Update purchase.order by ID",
					"description": "Update purchase.order by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/purchase.order/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Purchase Order By ID",
					"value": "Delete Purchase Order By ID",
					"action": "Delete purchase.order by ID",
					"description": "Delete purchase.order by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/purchase.order/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/purchase.order/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase Order"
					],
					"operation": [
						"Get Purchase Order By ID"
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
						"Purchase Order"
					],
					"operation": [
						"Get Purchase Order By ID"
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
						"Purchase Order"
					],
					"operation": [
						"Get Purchase Order By ID"
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
						"Purchase Order"
					],
					"operation": [
						"Get Purchase Order By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/purchase.order/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase Order"
					],
					"operation": [
						"Update Purchase Order By ID"
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
						"Purchase Order"
					],
					"operation": [
						"Update Purchase Order By ID"
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
						"Purchase Order"
					],
					"operation": [
						"Update Purchase Order By ID"
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
						"Purchase Order"
					],
					"operation": [
						"Update Purchase Order By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/purchase.order/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase Order"
					],
					"operation": [
						"Delete Purchase Order By ID"
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
						"Purchase Order"
					],
					"operation": [
						"Delete Purchase Order By ID"
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
						"Purchase Order"
					],
					"operation": [
						"Delete Purchase Order By ID"
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
						"Purchase Order"
					],
					"operation": [
						"Delete Purchase Order By ID"
					]
				}
			}
		},
];
