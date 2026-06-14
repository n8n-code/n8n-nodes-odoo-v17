import type { INodeProperties } from 'n8n-workflow';

export const mrpBomDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp Bom"
					]
				}
			},
			"options": [
				{
					"name": "Get Mrp Bom By ID",
					"value": "Get Mrp Bom By ID",
					"action": "Read mrp.bom by ID",
					"description": "Read mrp.bom by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/mrp.bom/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Mrp Bom By ID",
					"value": "Update Mrp Bom By ID",
					"action": "Update mrp.bom by ID",
					"description": "Update mrp.bom by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/mrp.bom/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Mrp Bom By ID",
					"value": "Delete Mrp Bom By ID",
					"action": "Delete mrp.bom by ID",
					"description": "Delete mrp.bom by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/mrp.bom/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/mrp.bom/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp Bom"
					],
					"operation": [
						"Get Mrp Bom By ID"
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
						"Mrp Bom"
					],
					"operation": [
						"Get Mrp Bom By ID"
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
						"Mrp Bom"
					],
					"operation": [
						"Get Mrp Bom By ID"
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
						"Mrp Bom"
					],
					"operation": [
						"Get Mrp Bom By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/mrp.bom/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp Bom"
					],
					"operation": [
						"Update Mrp Bom By ID"
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
						"Mrp Bom"
					],
					"operation": [
						"Update Mrp Bom By ID"
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
						"Mrp Bom"
					],
					"operation": [
						"Update Mrp Bom By ID"
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
						"Mrp Bom"
					],
					"operation": [
						"Update Mrp Bom By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/mrp.bom/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp Bom"
					],
					"operation": [
						"Delete Mrp Bom By ID"
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
						"Mrp Bom"
					],
					"operation": [
						"Delete Mrp Bom By ID"
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
						"Mrp Bom"
					],
					"operation": [
						"Delete Mrp Bom By ID"
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
						"Mrp Bom"
					],
					"operation": [
						"Delete Mrp Bom By ID"
					]
				}
			}
		},
];
