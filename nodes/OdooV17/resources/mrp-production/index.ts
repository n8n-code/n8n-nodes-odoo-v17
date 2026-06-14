import type { INodeProperties } from 'n8n-workflow';

export const mrpProductionDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp Production"
					]
				}
			},
			"options": [
				{
					"name": "Get Mrp Production By ID",
					"value": "Get Mrp Production By ID",
					"action": "Read mrp.production by ID",
					"description": "Read mrp.production by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/mrp.production/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Mrp Production By ID",
					"value": "Update Mrp Production By ID",
					"action": "Update mrp.production by ID",
					"description": "Update mrp.production by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/mrp.production/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Mrp Production By ID",
					"value": "Delete Mrp Production By ID",
					"action": "Delete mrp.production by ID",
					"description": "Delete mrp.production by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/mrp.production/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/mrp.production/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp Production"
					],
					"operation": [
						"Get Mrp Production By ID"
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
						"Mrp Production"
					],
					"operation": [
						"Get Mrp Production By ID"
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
						"Mrp Production"
					],
					"operation": [
						"Get Mrp Production By ID"
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
						"Mrp Production"
					],
					"operation": [
						"Get Mrp Production By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/mrp.production/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp Production"
					],
					"operation": [
						"Update Mrp Production By ID"
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
						"Mrp Production"
					],
					"operation": [
						"Update Mrp Production By ID"
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
						"Mrp Production"
					],
					"operation": [
						"Update Mrp Production By ID"
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
						"Mrp Production"
					],
					"operation": [
						"Update Mrp Production By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/mrp.production/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp Production"
					],
					"operation": [
						"Delete Mrp Production By ID"
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
						"Mrp Production"
					],
					"operation": [
						"Delete Mrp Production By ID"
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
						"Mrp Production"
					],
					"operation": [
						"Delete Mrp Production By ID"
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
						"Mrp Production"
					],
					"operation": [
						"Delete Mrp Production By ID"
					]
				}
			}
		},
];
