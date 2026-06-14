import type { INodeProperties } from 'n8n-workflow';

export const crmStageDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Crm Stage"
					]
				}
			},
			"options": [
				{
					"name": "Get Crm Stage By ID",
					"value": "Get Crm Stage By ID",
					"action": "Read crm.stage by ID",
					"description": "Read crm.stage by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/crm.stage/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Crm Stage By ID",
					"value": "Update Crm Stage By ID",
					"action": "Update crm.stage by ID",
					"description": "Update crm.stage by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/crm.stage/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Crm Stage By ID",
					"value": "Delete Crm Stage By ID",
					"action": "Delete crm.stage by ID",
					"description": "Delete crm.stage by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/crm.stage/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/crm.stage/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crm Stage"
					],
					"operation": [
						"Get Crm Stage By ID"
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
						"Crm Stage"
					],
					"operation": [
						"Get Crm Stage By ID"
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
						"Crm Stage"
					],
					"operation": [
						"Get Crm Stage By ID"
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
						"Crm Stage"
					],
					"operation": [
						"Get Crm Stage By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/crm.stage/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crm Stage"
					],
					"operation": [
						"Update Crm Stage By ID"
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
						"Crm Stage"
					],
					"operation": [
						"Update Crm Stage By ID"
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
						"Crm Stage"
					],
					"operation": [
						"Update Crm Stage By ID"
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
						"Crm Stage"
					],
					"operation": [
						"Update Crm Stage By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/crm.stage/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crm Stage"
					],
					"operation": [
						"Delete Crm Stage By ID"
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
						"Crm Stage"
					],
					"operation": [
						"Delete Crm Stage By ID"
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
						"Crm Stage"
					],
					"operation": [
						"Delete Crm Stage By ID"
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
						"Crm Stage"
					],
					"operation": [
						"Delete Crm Stage By ID"
					]
				}
			}
		},
];
