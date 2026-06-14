import type { INodeProperties } from 'n8n-workflow';

export const resPartnerBankDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Res Partner Bank"
					]
				}
			},
			"options": [
				{
					"name": "Get Res Partner Bank By ID",
					"value": "Get Res Partner Bank By ID",
					"action": "Read res.partner.bank by ID",
					"description": "Read res.partner.bank by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/res.partner.bank/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Update Res Partner Bank By ID",
					"value": "Update Res Partner Bank By ID",
					"action": "Update res.partner.bank by ID",
					"description": "Update res.partner.bank by ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/res.partner.bank/{{$parameter[\"record_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Res Partner Bank By ID",
					"value": "Delete Res Partner Bank By ID",
					"action": "Delete res.partner.bank by ID",
					"description": "Delete res.partner.bank by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/res.partner.bank/{{$parameter[\"record_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/res.partner.bank/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Res Partner Bank"
					],
					"operation": [
						"Get Res Partner Bank By ID"
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
						"Res Partner Bank"
					],
					"operation": [
						"Get Res Partner Bank By ID"
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
						"Res Partner Bank"
					],
					"operation": [
						"Get Res Partner Bank By ID"
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
						"Res Partner Bank"
					],
					"operation": [
						"Get Res Partner Bank By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/res.partner.bank/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Res Partner Bank"
					],
					"operation": [
						"Update Res Partner Bank By ID"
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
						"Res Partner Bank"
					],
					"operation": [
						"Update Res Partner Bank By ID"
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
						"Res Partner Bank"
					],
					"operation": [
						"Update Res Partner Bank By ID"
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
						"Res Partner Bank"
					],
					"operation": [
						"Update Res Partner Bank By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/res.partner.bank/{record_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Res Partner Bank"
					],
					"operation": [
						"Delete Res Partner Bank By ID"
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
						"Res Partner Bank"
					],
					"operation": [
						"Delete Res Partner Bank By ID"
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
						"Res Partner Bank"
					],
					"operation": [
						"Delete Res Partner Bank By ID"
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
						"Res Partner Bank"
					],
					"operation": [
						"Delete Res Partner Bank By ID"
					]
				}
			}
		},
];
