import type { INodeProperties } from 'n8n-workflow';

export const accountTaxGroupDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Account Tax Group"
					]
				}
			},
			"options": [
				{
					"name": "Get Account Tax Group By ID",
					"value": "Get Account Tax Group By ID",
					"action": "Read account.tax.group by ID",
					"description": "Read account.tax.group by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/account.tax.group/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Account Tax Group By ID",
					"value": "Update Account Tax Group By ID",
					"action": "Update account.tax.group by ID",
					"description": "Update account.tax.group by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/account.tax.group/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Account Tax Group By ID",
					"value": "Delete Account Tax Group By ID",
					"action": "Delete account.tax.group by ID",
					"description": "Delete account.tax.group by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/account.tax.group/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/account.tax.group/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Tax Group"
					],
					"operation": [
						"Get Account Tax Group By ID"
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
						"Account Tax Group"
					],
					"operation": [
						"Get Account Tax Group By ID"
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
						"Account Tax Group"
					],
					"operation": [
						"Get Account Tax Group By ID"
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
						"Account Tax Group"
					],
					"operation": [
						"Get Account Tax Group By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/account.tax.group/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Tax Group"
					],
					"operation": [
						"Update Account Tax Group By ID"
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
						"Account Tax Group"
					],
					"operation": [
						"Update Account Tax Group By ID"
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
						"Account Tax Group"
					],
					"operation": [
						"Update Account Tax Group By ID"
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
						"Account Tax Group"
					],
					"operation": [
						"Update Account Tax Group By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/account.tax.group/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Tax Group"
					],
					"operation": [
						"Delete Account Tax Group By ID"
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
						"Account Tax Group"
					],
					"operation": [
						"Delete Account Tax Group By ID"
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
						"Account Tax Group"
					],
					"operation": [
						"Delete Account Tax Group By ID"
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
						"Account Tax Group"
					],
					"operation": [
						"Delete Account Tax Group By ID"
					]
				}
			}
		},
];
