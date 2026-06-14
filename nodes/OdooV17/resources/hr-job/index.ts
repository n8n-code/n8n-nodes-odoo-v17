import type { INodeProperties } from 'n8n-workflow';

export const hrJobDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Hr Job"
					]
				}
			},
			"options": [
				{
					"name": "Get Hr Job By ID",
					"value": "Get Hr Job By ID",
					"action": "Read hr.job by ID",
					"description": "Read hr.job by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/hr.job/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Hr Job By ID",
					"value": "Update Hr Job By ID",
					"action": "Update hr.job by ID",
					"description": "Update hr.job by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/hr.job/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Hr Job By ID",
					"value": "Delete Hr Job By ID",
					"action": "Delete hr.job by ID",
					"description": "Delete hr.job by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/hr.job/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/hr.job/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Hr Job"
					],
					"operation": [
						"Get Hr Job By ID"
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
						"Hr Job"
					],
					"operation": [
						"Get Hr Job By ID"
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
						"Hr Job"
					],
					"operation": [
						"Get Hr Job By ID"
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
						"Hr Job"
					],
					"operation": [
						"Get Hr Job By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/hr.job/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Hr Job"
					],
					"operation": [
						"Update Hr Job By ID"
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
						"Hr Job"
					],
					"operation": [
						"Update Hr Job By ID"
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
						"Hr Job"
					],
					"operation": [
						"Update Hr Job By ID"
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
						"Hr Job"
					],
					"operation": [
						"Update Hr Job By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/hr.job/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Hr Job"
					],
					"operation": [
						"Delete Hr Job By ID"
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
						"Hr Job"
					],
					"operation": [
						"Delete Hr Job By ID"
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
						"Hr Job"
					],
					"operation": [
						"Delete Hr Job By ID"
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
						"Hr Job"
					],
					"operation": [
						"Delete Hr Job By ID"
					]
				}
			}
		},
];
