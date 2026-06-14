import type { INodeProperties } from 'n8n-workflow';

export const hrDepartmentDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Hr Department"
					]
				}
			},
			"options": [
				{
					"name": "Get Hr Department By ID",
					"value": "Get Hr Department By ID",
					"action": "Read hr.department by ID",
					"description": "Read hr.department by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/hr.department/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Hr Department By ID",
					"value": "Update Hr Department By ID",
					"action": "Update hr.department by ID",
					"description": "Update hr.department by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/hr.department/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Hr Department By ID",
					"value": "Delete Hr Department By ID",
					"action": "Delete hr.department by ID",
					"description": "Delete hr.department by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/hr.department/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/hr.department/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Hr Department"
					],
					"operation": [
						"Get Hr Department By ID"
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
						"Hr Department"
					],
					"operation": [
						"Get Hr Department By ID"
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
						"Hr Department"
					],
					"operation": [
						"Get Hr Department By ID"
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
						"Hr Department"
					],
					"operation": [
						"Get Hr Department By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/hr.department/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Hr Department"
					],
					"operation": [
						"Update Hr Department By ID"
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
						"Hr Department"
					],
					"operation": [
						"Update Hr Department By ID"
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
						"Hr Department"
					],
					"operation": [
						"Update Hr Department By ID"
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
						"Hr Department"
					],
					"operation": [
						"Update Hr Department By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/hr.department/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Hr Department"
					],
					"operation": [
						"Delete Hr Department By ID"
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
						"Hr Department"
					],
					"operation": [
						"Delete Hr Department By ID"
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
						"Hr Department"
					],
					"operation": [
						"Delete Hr Department By ID"
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
						"Hr Department"
					],
					"operation": [
						"Delete Hr Department By ID"
					]
				}
			}
		},
];
