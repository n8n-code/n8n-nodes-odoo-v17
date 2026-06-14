import type { INodeProperties } from 'n8n-workflow';

export const hrEmployeeDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Hr Employee"
					]
				}
			},
			"options": [
				{
					"name": "Get Hr Employee By ID",
					"value": "Get Hr Employee By ID",
					"action": "Read hr.employee by ID",
					"description": "Read hr.employee by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/hr.employee/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Hr Employee By ID",
					"value": "Update Hr Employee By ID",
					"action": "Update hr.employee by ID",
					"description": "Update hr.employee by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/hr.employee/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Hr Employee By ID",
					"value": "Delete Hr Employee By ID",
					"action": "Delete hr.employee by ID",
					"description": "Delete hr.employee by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/hr.employee/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/hr.employee/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Hr Employee"
					],
					"operation": [
						"Get Hr Employee By ID"
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
						"Hr Employee"
					],
					"operation": [
						"Get Hr Employee By ID"
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
						"Hr Employee"
					],
					"operation": [
						"Get Hr Employee By ID"
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
						"Hr Employee"
					],
					"operation": [
						"Get Hr Employee By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/hr.employee/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Hr Employee"
					],
					"operation": [
						"Update Hr Employee By ID"
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
						"Hr Employee"
					],
					"operation": [
						"Update Hr Employee By ID"
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
						"Hr Employee"
					],
					"operation": [
						"Update Hr Employee By ID"
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
						"Hr Employee"
					],
					"operation": [
						"Update Hr Employee By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/hr.employee/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Hr Employee"
					],
					"operation": [
						"Delete Hr Employee By ID"
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
						"Hr Employee"
					],
					"operation": [
						"Delete Hr Employee By ID"
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
						"Hr Employee"
					],
					"operation": [
						"Delete Hr Employee By ID"
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
						"Hr Employee"
					],
					"operation": [
						"Delete Hr Employee By ID"
					]
				}
			}
		},
];
