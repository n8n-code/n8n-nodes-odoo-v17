import type { INodeProperties } from 'n8n-workflow';

export const resPartnerCategoryDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Res Partner Category"
					]
				}
			},
			"options": [
				{
					"name": "Get Res Partner Category By ID",
					"value": "Get Res Partner Category By ID",
					"action": "Read res.partner.category by ID",
					"description": "Read res.partner.category by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/res.partner.category/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Res Partner Category By ID",
					"value": "Update Res Partner Category By ID",
					"action": "Update res.partner.category by ID",
					"description": "Update res.partner.category by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/res.partner.category/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Res Partner Category By ID",
					"value": "Delete Res Partner Category By ID",
					"action": "Delete res.partner.category by ID",
					"description": "Delete res.partner.category by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/res.partner.category/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/res.partner.category/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Res Partner Category"
					],
					"operation": [
						"Get Res Partner Category By ID"
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
						"Res Partner Category"
					],
					"operation": [
						"Get Res Partner Category By ID"
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
						"Res Partner Category"
					],
					"operation": [
						"Get Res Partner Category By ID"
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
						"Res Partner Category"
					],
					"operation": [
						"Get Res Partner Category By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/res.partner.category/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Res Partner Category"
					],
					"operation": [
						"Update Res Partner Category By ID"
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
						"Res Partner Category"
					],
					"operation": [
						"Update Res Partner Category By ID"
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
						"Res Partner Category"
					],
					"operation": [
						"Update Res Partner Category By ID"
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
						"Res Partner Category"
					],
					"operation": [
						"Update Res Partner Category By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/res.partner.category/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Res Partner Category"
					],
					"operation": [
						"Delete Res Partner Category By ID"
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
						"Res Partner Category"
					],
					"operation": [
						"Delete Res Partner Category By ID"
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
						"Res Partner Category"
					],
					"operation": [
						"Delete Res Partner Category By ID"
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
						"Res Partner Category"
					],
					"operation": [
						"Delete Res Partner Category By ID"
					]
				}
			}
		},
];
