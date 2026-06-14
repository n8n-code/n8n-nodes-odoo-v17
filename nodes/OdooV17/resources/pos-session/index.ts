import type { INodeProperties } from 'n8n-workflow';

export const posSessionDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Pos Session"
					]
				}
			},
			"options": [
				{
					"name": "Get Pos Session By ID",
					"value": "Get Pos Session By ID",
					"action": "Read pos.session by ID",
					"description": "Read pos.session by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/pos.session/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Pos Session By ID",
					"value": "Update Pos Session By ID",
					"action": "Update pos.session by ID",
					"description": "Update pos.session by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/pos.session/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Pos Session By ID",
					"value": "Delete Pos Session By ID",
					"action": "Delete pos.session by ID",
					"description": "Delete pos.session by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/pos.session/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/pos.session/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos Session"
					],
					"operation": [
						"Get Pos Session By ID"
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
						"Pos Session"
					],
					"operation": [
						"Get Pos Session By ID"
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
						"Pos Session"
					],
					"operation": [
						"Get Pos Session By ID"
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
						"Pos Session"
					],
					"operation": [
						"Get Pos Session By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/pos.session/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos Session"
					],
					"operation": [
						"Update Pos Session By ID"
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
						"Pos Session"
					],
					"operation": [
						"Update Pos Session By ID"
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
						"Pos Session"
					],
					"operation": [
						"Update Pos Session By ID"
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
						"Pos Session"
					],
					"operation": [
						"Update Pos Session By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/pos.session/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pos Session"
					],
					"operation": [
						"Delete Pos Session By ID"
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
						"Pos Session"
					],
					"operation": [
						"Delete Pos Session By ID"
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
						"Pos Session"
					],
					"operation": [
						"Delete Pos Session By ID"
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
						"Pos Session"
					],
					"operation": [
						"Delete Pos Session By ID"
					]
				}
			}
		},
];
