import type { INodeProperties } from 'n8n-workflow';

export const crmLeadDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Crm Lead"
					]
				}
			},
			"options": [
				{
					"name": "Get Crm Lead By ID",
					"value": "Get Crm Lead By ID",
					"action": "Read crm.lead by ID",
					"description": "Read crm.lead by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/crm.lead/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Crm Lead By ID",
					"value": "Update Crm Lead By ID",
					"action": "Update crm.lead by ID",
					"description": "Update crm.lead by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/crm.lead/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Crm Lead By ID",
					"value": "Delete Crm Lead By ID",
					"action": "Delete crm.lead by ID",
					"description": "Delete crm.lead by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/crm.lead/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/crm.lead/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crm Lead"
					],
					"operation": [
						"Get Crm Lead By ID"
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
						"Crm Lead"
					],
					"operation": [
						"Get Crm Lead By ID"
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
						"Crm Lead"
					],
					"operation": [
						"Get Crm Lead By ID"
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
						"Crm Lead"
					],
					"operation": [
						"Get Crm Lead By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/crm.lead/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crm Lead"
					],
					"operation": [
						"Update Crm Lead By ID"
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
						"Crm Lead"
					],
					"operation": [
						"Update Crm Lead By ID"
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
						"Crm Lead"
					],
					"operation": [
						"Update Crm Lead By ID"
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
						"Crm Lead"
					],
					"operation": [
						"Update Crm Lead By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/crm.lead/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crm Lead"
					],
					"operation": [
						"Delete Crm Lead By ID"
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
						"Crm Lead"
					],
					"operation": [
						"Delete Crm Lead By ID"
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
						"Crm Lead"
					],
					"operation": [
						"Delete Crm Lead By ID"
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
						"Crm Lead"
					],
					"operation": [
						"Delete Crm Lead By ID"
					]
				}
			}
		},
];
