import type { INodeProperties } from 'n8n-workflow';

export const mrpWorkorderDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp Workorder"
					]
				}
			},
			"options": [
				{
					"name": "Get Mrp Workorder By ID",
					"value": "Get Mrp Workorder By ID",
					"action": "Read mrp.workorder by ID",
					"description": "Read mrp.workorder by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/mrp.workorder/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Mrp Workorder By ID",
					"value": "Update Mrp Workorder By ID",
					"action": "Update mrp.workorder by ID",
					"description": "Update mrp.workorder by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/mrp.workorder/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Mrp Workorder By ID",
					"value": "Delete Mrp Workorder By ID",
					"action": "Delete mrp.workorder by ID",
					"description": "Delete mrp.workorder by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/mrp.workorder/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/mrp.workorder/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp Workorder"
					],
					"operation": [
						"Get Mrp Workorder By ID"
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
						"Mrp Workorder"
					],
					"operation": [
						"Get Mrp Workorder By ID"
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
						"Mrp Workorder"
					],
					"operation": [
						"Get Mrp Workorder By ID"
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
						"Mrp Workorder"
					],
					"operation": [
						"Get Mrp Workorder By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/mrp.workorder/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp Workorder"
					],
					"operation": [
						"Update Mrp Workorder By ID"
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
						"Mrp Workorder"
					],
					"operation": [
						"Update Mrp Workorder By ID"
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
						"Mrp Workorder"
					],
					"operation": [
						"Update Mrp Workorder By ID"
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
						"Mrp Workorder"
					],
					"operation": [
						"Update Mrp Workorder By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/mrp.workorder/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mrp Workorder"
					],
					"operation": [
						"Delete Mrp Workorder By ID"
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
						"Mrp Workorder"
					],
					"operation": [
						"Delete Mrp Workorder By ID"
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
						"Mrp Workorder"
					],
					"operation": [
						"Delete Mrp Workorder By ID"
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
						"Mrp Workorder"
					],
					"operation": [
						"Delete Mrp Workorder By ID"
					]
				}
			}
		},
];
