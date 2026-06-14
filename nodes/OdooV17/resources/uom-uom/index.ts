import type { INodeProperties } from 'n8n-workflow';

export const uomUomDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Uom Uom"
					]
				}
			},
			"options": [
				{
					"name": "Get Uom Uom By ID",
					"value": "Get Uom Uom By ID",
					"action": "Read uom.uom by ID",
					"description": "Read uom.uom by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/uom.uom/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Uom Uom By ID",
					"value": "Update Uom Uom By ID",
					"action": "Update uom.uom by ID",
					"description": "Update uom.uom by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/uom.uom/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Uom Uom By ID",
					"value": "Delete Uom Uom By ID",
					"action": "Delete uom.uom by ID",
					"description": "Delete uom.uom by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/uom.uom/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/uom.uom/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Uom Uom"
					],
					"operation": [
						"Get Uom Uom By ID"
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
						"Uom Uom"
					],
					"operation": [
						"Get Uom Uom By ID"
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
						"Uom Uom"
					],
					"operation": [
						"Get Uom Uom By ID"
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
						"Uom Uom"
					],
					"operation": [
						"Get Uom Uom By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/uom.uom/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Uom Uom"
					],
					"operation": [
						"Update Uom Uom By ID"
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
						"Uom Uom"
					],
					"operation": [
						"Update Uom Uom By ID"
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
						"Uom Uom"
					],
					"operation": [
						"Update Uom Uom By ID"
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
						"Uom Uom"
					],
					"operation": [
						"Update Uom Uom By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/uom.uom/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Uom Uom"
					],
					"operation": [
						"Delete Uom Uom By ID"
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
						"Uom Uom"
					],
					"operation": [
						"Delete Uom Uom By ID"
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
						"Uom Uom"
					],
					"operation": [
						"Delete Uom Uom By ID"
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
						"Uom Uom"
					],
					"operation": [
						"Delete Uom Uom By ID"
					]
				}
			}
		},
];
