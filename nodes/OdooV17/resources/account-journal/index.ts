import type { INodeProperties } from 'n8n-workflow';

export const accountJournalDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Account Journal"
					]
				}
			},
			"options": [
				{
					"name": "Get Account Journal By ID",
					"value": "Get Account Journal By ID",
					"action": "Read account.journal by ID",
					"description": "Read account.journal by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/account.journal/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Account Journal By ID",
					"value": "Update Account Journal By ID",
					"action": "Update account.journal by ID",
					"description": "Update account.journal by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/account.journal/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Account Journal By ID",
					"value": "Delete Account Journal By ID",
					"action": "Delete account.journal by ID",
					"description": "Delete account.journal by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/account.journal/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/account.journal/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Journal"
					],
					"operation": [
						"Get Account Journal By ID"
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
						"Account Journal"
					],
					"operation": [
						"Get Account Journal By ID"
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
						"Account Journal"
					],
					"operation": [
						"Get Account Journal By ID"
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
						"Account Journal"
					],
					"operation": [
						"Get Account Journal By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/account.journal/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Journal"
					],
					"operation": [
						"Update Account Journal By ID"
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
						"Account Journal"
					],
					"operation": [
						"Update Account Journal By ID"
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
						"Account Journal"
					],
					"operation": [
						"Update Account Journal By ID"
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
						"Account Journal"
					],
					"operation": [
						"Update Account Journal By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/account.journal/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Journal"
					],
					"operation": [
						"Delete Account Journal By ID"
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
						"Account Journal"
					],
					"operation": [
						"Delete Account Journal By ID"
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
						"Account Journal"
					],
					"operation": [
						"Delete Account Journal By ID"
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
						"Account Journal"
					],
					"operation": [
						"Delete Account Journal By ID"
					]
				}
			}
		},
];
