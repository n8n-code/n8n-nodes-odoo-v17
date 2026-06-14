import type { INodeProperties } from 'n8n-workflow';

export const accountTaxDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Account Tax"
					]
				}
			},
			"options": [
				{
					"name": "Get Account Tax By ID",
					"value": "Get Account Tax By ID",
					"action": "Read account.tax by ID",
					"description": "Read account.tax by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/account.tax/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Account Tax By ID",
					"value": "Update Account Tax By ID",
					"action": "Update account.tax by ID",
					"description": "Update account.tax by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/account.tax/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Account Tax By ID",
					"value": "Delete Account Tax By ID",
					"action": "Delete account.tax by ID",
					"description": "Delete account.tax by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/account.tax/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/account.tax/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Tax"
					],
					"operation": [
						"Get Account Tax By ID"
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
						"Account Tax"
					],
					"operation": [
						"Get Account Tax By ID"
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
						"Account Tax"
					],
					"operation": [
						"Get Account Tax By ID"
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
						"Account Tax"
					],
					"operation": [
						"Get Account Tax By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/account.tax/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Tax"
					],
					"operation": [
						"Update Account Tax By ID"
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
						"Account Tax"
					],
					"operation": [
						"Update Account Tax By ID"
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
						"Account Tax"
					],
					"operation": [
						"Update Account Tax By ID"
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
						"Account Tax"
					],
					"operation": [
						"Update Account Tax By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/account.tax/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Tax"
					],
					"operation": [
						"Delete Account Tax By ID"
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
						"Account Tax"
					],
					"operation": [
						"Delete Account Tax By ID"
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
						"Account Tax"
					],
					"operation": [
						"Delete Account Tax By ID"
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
						"Account Tax"
					],
					"operation": [
						"Delete Account Tax By ID"
					]
				}
			}
		},
];
