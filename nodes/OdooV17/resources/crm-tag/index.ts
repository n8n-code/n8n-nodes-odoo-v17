import type { INodeProperties } from 'n8n-workflow';

export const crmTagDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Crm Tag"
					]
				}
			},
			"options": [
				{
					"name": "Get Crm Tag By ID",
					"value": "Get Crm Tag By ID",
					"action": "Read crm.tag by ID",
					"description": "Read crm.tag by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/crm.tag/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Crm Tag By ID",
					"value": "Update Crm Tag By ID",
					"action": "Update crm.tag by ID",
					"description": "Update crm.tag by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/crm.tag/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Crm Tag By ID",
					"value": "Delete Crm Tag By ID",
					"action": "Delete crm.tag by ID",
					"description": "Delete crm.tag by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/crm.tag/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/crm.tag/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crm Tag"
					],
					"operation": [
						"Get Crm Tag By ID"
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
						"Crm Tag"
					],
					"operation": [
						"Get Crm Tag By ID"
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
						"Crm Tag"
					],
					"operation": [
						"Get Crm Tag By ID"
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
						"Crm Tag"
					],
					"operation": [
						"Get Crm Tag By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/crm.tag/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crm Tag"
					],
					"operation": [
						"Update Crm Tag By ID"
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
						"Crm Tag"
					],
					"operation": [
						"Update Crm Tag By ID"
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
						"Crm Tag"
					],
					"operation": [
						"Update Crm Tag By ID"
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
						"Crm Tag"
					],
					"operation": [
						"Update Crm Tag By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/crm.tag/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crm Tag"
					],
					"operation": [
						"Delete Crm Tag By ID"
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
						"Crm Tag"
					],
					"operation": [
						"Delete Crm Tag By ID"
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
						"Crm Tag"
					],
					"operation": [
						"Delete Crm Tag By ID"
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
						"Crm Tag"
					],
					"operation": [
						"Delete Crm Tag By ID"
					]
				}
			}
		},
];
