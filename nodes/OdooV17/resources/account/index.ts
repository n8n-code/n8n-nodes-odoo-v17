import type { INodeProperties } from 'n8n-workflow';

export const accountDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					]
				}
			},
			"options": [
				{
					"name": "Search Account Account",
					"value": "Search Account Account",
					"action": "Search & read Account",
					"description": "Search and read account.account records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/account.account"
						}
					}
				},
				{
					"name": "Upsert Account Account",
					"value": "Upsert Account Account",
					"action": "Upsert Account",
					"description": "Create or update account.account record.\n\nSearch by code (Account Code (unique per company)) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/account.account"
						}
					}
				},
				{
					"name": "Search Account Journal",
					"value": "Search Account Journal",
					"action": "Search & read Journal",
					"description": "Search and read account.journal records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/account.journal"
						}
					}
				},
				{
					"name": "Upsert Account Journal",
					"value": "Upsert Account Journal",
					"action": "Upsert Journal",
					"description": "Create or update account.journal record.\n\nSearch by code (Journal Code (unique per company)) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/account.journal"
						}
					}
				},
				{
					"name": "Search Account Move",
					"value": "Search Account Move",
					"action": "Search & read Journal Entry",
					"description": "Search and read account.move records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/account.move"
						}
					}
				},
				{
					"name": "Upsert Account Move",
					"value": "Upsert Account Move",
					"action": "Upsert Move",
					"description": "Create or update account.move record.\n\nSearch by name (Entry Number) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/account.move"
						}
					}
				},
				{
					"name": "Search Account Move Line",
					"value": "Search Account Move Line",
					"action": "Search & read Journal Item",
					"description": "Search and read account.move.line records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/account.move.line"
						}
					}
				},
				{
					"name": "Upsert Account Move Line",
					"value": "Upsert Account Move Line",
					"action": "Upsert Line",
					"description": "Create or update account.move.line record.\n\nSearch by name (Line Description) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/account.move.line"
						}
					}
				},
				{
					"name": "Search Account Payment",
					"value": "Search Account Payment",
					"action": "Search & read Payments",
					"description": "Search and read account.payment records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/account.payment"
						}
					}
				},
				{
					"name": "Upsert Account Payment",
					"value": "Upsert Account Payment",
					"action": "Upsert Payment",
					"description": "Create or update account.payment record.\n\nSearch by name (Payment Number) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/account.payment"
						}
					}
				},
				{
					"name": "Search Account Tax",
					"value": "Search Account Tax",
					"action": "Search & read Tax",
					"description": "Search and read account.tax records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/account.tax"
						}
					}
				},
				{
					"name": "Upsert Account Tax",
					"value": "Upsert Account Tax",
					"action": "Upsert Tax",
					"description": "Create or update account.tax record.\n\nSearch by name (Tax Name) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/account.tax"
						}
					}
				},
				{
					"name": "Search Account Tax Group",
					"value": "Search Account Tax Group",
					"action": "Search & read Tax Group",
					"description": "Search and read account.tax.group records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/account.tax.group"
						}
					}
				},
				{
					"name": "Upsert Account Tax Group",
					"value": "Upsert Account Tax Group",
					"action": "Upsert Group",
					"description": "Create or update account.tax.group record.\n\nSearch by name (Tax Group Name) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/account.tax.group"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/account.account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Account"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"description": "JSON-encoded Odoo domain filter",
			"default": "[[\"name\",\"ilike\",\"test\"]]",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Account"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,code,id",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Account"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Account"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Account"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order, e.g. 'name asc' or 'create_date desc'",
			"default": "code asc",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Account"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Account"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Account"
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
						"Account"
					],
					"operation": [
						"Search Account Account"
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
						"Account"
					],
					"operation": [
						"Search Account Account"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/account.account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{\n  \"code\": \"100000\"\n}",
			"description": "Search criteria to find existing record by Account Code (unique per company)",
			"routing": {
				"send": {
					"property": "_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Account Type",
			"name": "account_type",
			"type": "string",
			"default": "",
			"description": "Type",
			"routing": {
				"send": {
					"property": "account_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Allowed Journal Ids",
			"name": "allowed_journal_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Allowed Journals (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "allowed_journal_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "code",
			"type": "string",
			"default": "",
			"description": "Code",
			"routing": {
				"send": {
					"property": "code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Company Currency ID",
			"name": "company_currency_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.currency",
			"routing": {
				"send": {
					"property": "company_currency_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Company ID",
			"name": "company_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.company",
			"routing": {
				"send": {
					"property": "company_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Currency ID",
			"name": "currency_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.currency",
			"routing": {
				"send": {
					"property": "currency_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Current Balance",
			"name": "current_balance",
			"type": "number",
			"default": 0,
			"description": "Current Balance",
			"routing": {
				"send": {
					"property": "current_balance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Deprecated",
			"name": "deprecated",
			"type": "boolean",
			"default": true,
			"description": "Deprecated",
			"routing": {
				"send": {
					"property": "deprecated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "group_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.group",
			"routing": {
				"send": {
					"property": "group_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Has Message",
			"name": "has_message",
			"type": "boolean",
			"default": true,
			"description": "Has Message",
			"routing": {
				"send": {
					"property": "has_message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Include Initial Balance",
			"name": "include_initial_balance",
			"type": "boolean",
			"default": true,
			"description": "Bring Accounts Balance Forward",
			"routing": {
				"send": {
					"property": "include_initial_balance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Internal Group",
			"name": "internal_group",
			"type": "string",
			"default": "",
			"description": "Internal Group",
			"routing": {
				"send": {
					"property": "internal_group",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Message Attachment Count",
			"name": "message_attachment_count",
			"type": "number",
			"default": 0,
			"description": "Attachment Count",
			"routing": {
				"send": {
					"property": "message_attachment_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Message Has Error",
			"name": "message_has_error",
			"type": "boolean",
			"default": true,
			"description": "Message Delivery error",
			"routing": {
				"send": {
					"property": "message_has_error",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Message Has Error Counter",
			"name": "message_has_error_counter",
			"type": "number",
			"default": 0,
			"description": "Number of errors",
			"routing": {
				"send": {
					"property": "message_has_error_counter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Message Has Sms Error",
			"name": "message_has_sms_error",
			"type": "boolean",
			"default": true,
			"description": "SMS Delivery error",
			"routing": {
				"send": {
					"property": "message_has_sms_error",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Message Is Follower",
			"name": "message_is_follower",
			"type": "boolean",
			"default": true,
			"description": "Is Follower",
			"routing": {
				"send": {
					"property": "message_is_follower",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Message Needaction",
			"name": "message_needaction",
			"type": "boolean",
			"default": true,
			"description": "Action Needed",
			"routing": {
				"send": {
					"property": "message_needaction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Message Needaction Counter",
			"name": "message_needaction_counter",
			"type": "number",
			"default": 0,
			"description": "Number of Actions",
			"routing": {
				"send": {
					"property": "message_needaction_counter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Message Partner Ids",
			"name": "message_partner_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Followers (Partners) (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "message_partner_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Account Name",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Non Trade",
			"name": "non_trade",
			"type": "boolean",
			"default": true,
			"description": "Non Trade",
			"routing": {
				"send": {
					"property": "non_trade",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Note",
			"name": "note",
			"type": "string",
			"default": "",
			"description": "Internal Notes",
			"routing": {
				"send": {
					"property": "note",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Opening Balance",
			"name": "opening_balance",
			"type": "number",
			"default": 0,
			"description": "Opening Balance",
			"routing": {
				"send": {
					"property": "opening_balance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Opening Credit",
			"name": "opening_credit",
			"type": "number",
			"default": 0,
			"description": "Opening Credit",
			"routing": {
				"send": {
					"property": "opening_credit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Opening Debit",
			"name": "opening_debit",
			"type": "number",
			"default": 0,
			"description": "Opening Debit",
			"routing": {
				"send": {
					"property": "opening_debit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Reconcile",
			"name": "reconcile",
			"type": "boolean",
			"default": true,
			"description": "Allow Reconciliation",
			"routing": {
				"send": {
					"property": "reconcile",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Related Taxes Amount",
			"name": "related_taxes_amount",
			"type": "number",
			"default": 0,
			"description": "Related Taxes Amount",
			"routing": {
				"send": {
					"property": "related_taxes_amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Root ID",
			"name": "root_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.root",
			"routing": {
				"send": {
					"property": "root_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Tag Ids",
			"name": "tag_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Tags (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "tag_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Tax Ids",
			"name": "tax_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Default Taxes (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "tax_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "Used",
			"name": "used",
			"type": "boolean",
			"default": true,
			"description": "Used",
			"routing": {
				"send": {
					"property": "used",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Account"
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
						"Account"
					],
					"operation": [
						"Upsert Account Account"
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
						"Account"
					],
					"operation": [
						"Upsert Account Account"
					]
				}
			}
		},
		{
			"displayName": "GET /api/account.journal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"description": "JSON-encoded Odoo domain filter",
			"default": "[[\"name\",\"ilike\",\"test\"]]",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,code,type,id",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order, e.g. 'name asc' or 'create_date desc'",
			"default": "name asc",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Journal"
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
						"Account"
					],
					"operation": [
						"Search Account Journal"
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
						"Account"
					],
					"operation": [
						"Search Account Journal"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/account.journal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{\n  \"code\": \"BNK1\"\n}",
			"description": "Search criteria to find existing record by Journal Code (unique per company)",
			"routing": {
				"send": {
					"property": "_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Access Token",
			"name": "access_token",
			"type": "string",
			"default": "",
			"description": "Security Token",
			"routing": {
				"send": {
					"property": "access_token",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Access URL",
			"name": "access_url",
			"type": "string",
			"default": "",
			"description": "Portal Access URL",
			"routing": {
				"send": {
					"property": "access_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Access Warning",
			"name": "access_warning",
			"type": "string",
			"default": "",
			"description": "Access warning",
			"routing": {
				"send": {
					"property": "access_warning",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Account Control Ids",
			"name": "account_control_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Allowed accounts (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "account_control_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Accounting Date",
			"name": "accounting_date",
			"type": "string",
			"default": "",
			"description": "Accounting Date",
			"routing": {
				"send": {
					"property": "accounting_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
			"description": "Active",
			"routing": {
				"send": {
					"property": "active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Activity Calendar Event ID",
			"name": "activity_calendar_event_id",
			"type": "number",
			"default": 0,
			"description": "ID of related calendar.event",
			"routing": {
				"send": {
					"property": "activity_calendar_event_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Activity Date Deadline",
			"name": "activity_date_deadline",
			"type": "string",
			"default": "",
			"description": "Next Activity Deadline",
			"routing": {
				"send": {
					"property": "activity_date_deadline",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Activity Exception Decoration",
			"name": "activity_exception_decoration",
			"type": "string",
			"default": "",
			"description": "Activity Exception Decoration",
			"routing": {
				"send": {
					"property": "activity_exception_decoration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Activity Exception Icon",
			"name": "activity_exception_icon",
			"type": "string",
			"default": "",
			"description": "Icon",
			"routing": {
				"send": {
					"property": "activity_exception_icon",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Activity State",
			"name": "activity_state",
			"type": "string",
			"default": "",
			"description": "Activity State",
			"routing": {
				"send": {
					"property": "activity_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Activity Summary",
			"name": "activity_summary",
			"type": "string",
			"default": "",
			"description": "Next Activity Summary",
			"routing": {
				"send": {
					"property": "activity_summary",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Activity Type Icon",
			"name": "activity_type_icon",
			"type": "string",
			"default": "",
			"description": "Activity Type Icon",
			"routing": {
				"send": {
					"property": "activity_type_icon",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Activity Type ID",
			"name": "activity_type_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mail.activity.type",
			"routing": {
				"send": {
					"property": "activity_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Activity User ID",
			"name": "activity_user_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.users",
			"routing": {
				"send": {
					"property": "activity_user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Alias Defaults",
			"name": "alias_defaults",
			"type": "string",
			"default": "",
			"description": "Default Values",
			"routing": {
				"send": {
					"property": "alias_defaults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Alias Domain",
			"name": "alias_domain",
			"type": "string",
			"default": "",
			"description": "Alias Domain Name",
			"routing": {
				"send": {
					"property": "alias_domain",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Alias Domain ID",
			"name": "alias_domain_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mail.alias.domain",
			"routing": {
				"send": {
					"property": "alias_domain_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Alias Email",
			"name": "alias_email",
			"type": "string",
			"default": "",
			"description": "Email Alias",
			"routing": {
				"send": {
					"property": "alias_email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Alias ID",
			"name": "alias_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mail.alias",
			"routing": {
				"send": {
					"property": "alias_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Alias Name",
			"name": "alias_name",
			"type": "string",
			"default": "",
			"description": "Alias Name",
			"routing": {
				"send": {
					"property": "alias_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Available Payment Method Ids",
			"name": "available_payment_method_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Available Payment Method (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "available_payment_method_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Bank Acc Number",
			"name": "bank_acc_number",
			"type": "string",
			"default": "",
			"description": "Account Number",
			"routing": {
				"send": {
					"property": "bank_acc_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Bank Account ID",
			"name": "bank_account_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner.bank",
			"routing": {
				"send": {
					"property": "bank_account_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Bank ID",
			"name": "bank_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.bank",
			"routing": {
				"send": {
					"property": "bank_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Bank Statements Source",
			"name": "bank_statements_source",
			"type": "string",
			"default": "",
			"description": "Bank Feeds",
			"routing": {
				"send": {
					"property": "bank_statements_source",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "code",
			"type": "string",
			"default": "",
			"description": "Short Code",
			"routing": {
				"send": {
					"property": "code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Color",
			"name": "color",
			"type": "number",
			"default": 0,
			"description": "Color Index",
			"routing": {
				"send": {
					"property": "color",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Company ID",
			"name": "company_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.company",
			"routing": {
				"send": {
					"property": "company_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Company Partner ID",
			"name": "company_partner_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "company_partner_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Country Code",
			"name": "country_code",
			"type": "string",
			"default": "",
			"description": "Country Code",
			"routing": {
				"send": {
					"property": "country_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Currency ID",
			"name": "currency_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.currency",
			"routing": {
				"send": {
					"property": "currency_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Current Statement Balance",
			"name": "current_statement_balance",
			"type": "number",
			"default": 0,
			"description": "Current Statement Balance",
			"routing": {
				"send": {
					"property": "current_statement_balance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Default Account ID",
			"name": "default_account_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "default_account_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Default Account Type",
			"name": "default_account_type",
			"type": "string",
			"default": "",
			"description": "Default Account Type",
			"routing": {
				"send": {
					"property": "default_account_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Display Alias Fields",
			"name": "display_alias_fields",
			"type": "boolean",
			"default": true,
			"description": "Display Alias Fields",
			"routing": {
				"send": {
					"property": "display_alias_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Entries Count",
			"name": "entries_count",
			"type": "number",
			"default": 0,
			"description": "Entries Count",
			"routing": {
				"send": {
					"property": "entries_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Has Message",
			"name": "has_message",
			"type": "boolean",
			"default": true,
			"description": "Has Message",
			"routing": {
				"send": {
					"property": "has_message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Has Sequence Holes",
			"name": "has_sequence_holes",
			"type": "boolean",
			"default": true,
			"description": "Has Sequence Holes",
			"routing": {
				"send": {
					"property": "has_sequence_holes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Has Statement Lines",
			"name": "has_statement_lines",
			"type": "boolean",
			"default": true,
			"description": "Has Statement Lines",
			"routing": {
				"send": {
					"property": "has_statement_lines",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Invoice Reference Model",
			"name": "invoice_reference_model",
			"type": "string",
			"default": "",
			"description": "Communication Standard",
			"routing": {
				"send": {
					"property": "invoice_reference_model",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Invoice Reference Type",
			"name": "invoice_reference_type",
			"type": "string",
			"default": "",
			"description": "Communication Type",
			"routing": {
				"send": {
					"property": "invoice_reference_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Journal Group Ids",
			"name": "journal_group_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Journal Groups (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "journal_group_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "JSON Activity Data",
			"name": "json_activity_data",
			"type": "string",
			"default": "",
			"description": "Json Activity Data",
			"routing": {
				"send": {
					"property": "json_activity_data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Kanban Dashboard",
			"name": "kanban_dashboard",
			"type": "string",
			"default": "",
			"description": "Kanban Dashboard",
			"routing": {
				"send": {
					"property": "kanban_dashboard",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Kanban Dashboard Graph",
			"name": "kanban_dashboard_graph",
			"type": "string",
			"default": "",
			"description": "Kanban Dashboard Graph",
			"routing": {
				"send": {
					"property": "kanban_dashboard_graph",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Last Statement ID",
			"name": "last_statement_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.bank.statement",
			"routing": {
				"send": {
					"property": "last_statement_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Loss Account ID",
			"name": "loss_account_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "loss_account_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Message Attachment Count",
			"name": "message_attachment_count",
			"type": "number",
			"default": 0,
			"description": "Attachment Count",
			"routing": {
				"send": {
					"property": "message_attachment_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Message Has Error",
			"name": "message_has_error",
			"type": "boolean",
			"default": true,
			"description": "Message Delivery error",
			"routing": {
				"send": {
					"property": "message_has_error",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Message Has Error Counter",
			"name": "message_has_error_counter",
			"type": "number",
			"default": 0,
			"description": "Number of errors",
			"routing": {
				"send": {
					"property": "message_has_error_counter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Message Has Sms Error",
			"name": "message_has_sms_error",
			"type": "boolean",
			"default": true,
			"description": "SMS Delivery error",
			"routing": {
				"send": {
					"property": "message_has_sms_error",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Message Is Follower",
			"name": "message_is_follower",
			"type": "boolean",
			"default": true,
			"description": "Is Follower",
			"routing": {
				"send": {
					"property": "message_is_follower",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Message Needaction",
			"name": "message_needaction",
			"type": "boolean",
			"default": true,
			"description": "Action Needed",
			"routing": {
				"send": {
					"property": "message_needaction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Message Needaction Counter",
			"name": "message_needaction_counter",
			"type": "number",
			"default": 0,
			"description": "Number of Actions",
			"routing": {
				"send": {
					"property": "message_needaction_counter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Message Partner Ids",
			"name": "message_partner_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Followers (Partners) (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "message_partner_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "My Activity Date Deadline",
			"name": "my_activity_date_deadline",
			"type": "string",
			"default": "",
			"description": "My Activity Deadline",
			"routing": {
				"send": {
					"property": "my_activity_date_deadline",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Journal Name",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Payment Sequence",
			"name": "payment_sequence",
			"type": "boolean",
			"default": true,
			"description": "Dedicated Payment Sequence",
			"routing": {
				"send": {
					"property": "payment_sequence",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Profit Account ID",
			"name": "profit_account_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "profit_account_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Refund Sequence",
			"name": "refund_sequence",
			"type": "boolean",
			"default": true,
			"description": "Dedicated Credit Note Sequence",
			"routing": {
				"send": {
					"property": "refund_sequence",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Restrict Mode Hash Table",
			"name": "restrict_mode_hash_table",
			"type": "boolean",
			"default": true,
			"description": "Lock Posted Entries with Hash",
			"routing": {
				"send": {
					"property": "restrict_mode_hash_table",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Sale Activity Note",
			"name": "sale_activity_note",
			"type": "string",
			"default": "",
			"description": "Activity Summary",
			"routing": {
				"send": {
					"property": "sale_activity_note",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Sale Activity Type ID",
			"name": "sale_activity_type_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mail.activity.type",
			"routing": {
				"send": {
					"property": "sale_activity_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Sale Activity User ID",
			"name": "sale_activity_user_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.users",
			"routing": {
				"send": {
					"property": "sale_activity_user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Secure Sequence ID",
			"name": "secure_sequence_id",
			"type": "number",
			"default": 0,
			"description": "ID of related ir.sequence",
			"routing": {
				"send": {
					"property": "secure_sequence_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Selected Payment Method Codes",
			"name": "selected_payment_method_codes",
			"type": "string",
			"default": "",
			"description": "Selected Payment Method Codes",
			"routing": {
				"send": {
					"property": "selected_payment_method_codes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Sequence",
			"name": "sequence",
			"type": "number",
			"default": 0,
			"description": "Sequence",
			"routing": {
				"send": {
					"property": "sequence",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Sequence Override Regex",
			"name": "sequence_override_regex",
			"type": "string",
			"default": "",
			"description": "Sequence Override Regex",
			"routing": {
				"send": {
					"property": "sequence_override_regex",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Show On Dashboard",
			"name": "show_on_dashboard",
			"type": "boolean",
			"default": true,
			"description": "Show journal on dashboard",
			"routing": {
				"send": {
					"property": "show_on_dashboard",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Suspense Account ID",
			"name": "suspense_account_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "suspense_account_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"description": "Type",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
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
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
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
						"Account"
					],
					"operation": [
						"Upsert Account Journal"
					]
				}
			}
		},
		{
			"displayName": "GET /api/account.move",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Move"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"description": "JSON-encoded Odoo domain filter",
			"default": "[[\"name\",\"ilike\",\"test\"]]",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Move"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,partner_id,state,amount_total,id",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Move"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Move"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Move"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order, e.g. 'name asc' or 'create_date desc'",
			"default": "date desc",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Move"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Move"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Move"
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
						"Account"
					],
					"operation": [
						"Search Account Move"
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
						"Account"
					],
					"operation": [
						"Search Account Move"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/account.move",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{\n  \"name\": \"INV/2024/001\"\n}",
			"description": "Search criteria to find existing record by Entry Number",
			"routing": {
				"send": {
					"property": "_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Access Token",
			"name": "access_token",
			"type": "string",
			"default": "",
			"description": "Security Token",
			"routing": {
				"send": {
					"property": "access_token",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Access URL",
			"name": "access_url",
			"type": "string",
			"default": "",
			"description": "Portal Access URL",
			"routing": {
				"send": {
					"property": "access_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Access Warning",
			"name": "access_warning",
			"type": "string",
			"default": "",
			"description": "Access warning",
			"routing": {
				"send": {
					"property": "access_warning",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Activity Calendar Event ID",
			"name": "activity_calendar_event_id",
			"type": "number",
			"default": 0,
			"description": "ID of related calendar.event",
			"routing": {
				"send": {
					"property": "activity_calendar_event_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Activity Date Deadline",
			"name": "activity_date_deadline",
			"type": "string",
			"default": "",
			"description": "Next Activity Deadline",
			"routing": {
				"send": {
					"property": "activity_date_deadline",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Activity Exception Decoration",
			"name": "activity_exception_decoration",
			"type": "string",
			"default": "",
			"description": "Activity Exception Decoration",
			"routing": {
				"send": {
					"property": "activity_exception_decoration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Activity Exception Icon",
			"name": "activity_exception_icon",
			"type": "string",
			"default": "",
			"description": "Icon",
			"routing": {
				"send": {
					"property": "activity_exception_icon",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Activity State",
			"name": "activity_state",
			"type": "string",
			"default": "",
			"description": "Activity State",
			"routing": {
				"send": {
					"property": "activity_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Activity Summary",
			"name": "activity_summary",
			"type": "string",
			"default": "",
			"description": "Next Activity Summary",
			"routing": {
				"send": {
					"property": "activity_summary",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Activity Type Icon",
			"name": "activity_type_icon",
			"type": "string",
			"default": "",
			"description": "Activity Type Icon",
			"routing": {
				"send": {
					"property": "activity_type_icon",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Activity Type ID",
			"name": "activity_type_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mail.activity.type",
			"routing": {
				"send": {
					"property": "activity_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Activity User ID",
			"name": "activity_user_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.users",
			"routing": {
				"send": {
					"property": "activity_user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Always Tax Exigible",
			"name": "always_tax_exigible",
			"type": "boolean",
			"default": true,
			"description": "Always Tax Exigible",
			"routing": {
				"send": {
					"property": "always_tax_exigible",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Amount Paid",
			"name": "amount_paid",
			"type": "number",
			"default": 0,
			"description": "Amount paid",
			"routing": {
				"send": {
					"property": "amount_paid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Amount Residual",
			"name": "amount_residual",
			"type": "number",
			"default": 0,
			"description": "Amount Due",
			"routing": {
				"send": {
					"property": "amount_residual",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Amount Residual Signed",
			"name": "amount_residual_signed",
			"type": "number",
			"default": 0,
			"description": "Amount Due Signed",
			"routing": {
				"send": {
					"property": "amount_residual_signed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Amount Tax",
			"name": "amount_tax",
			"type": "number",
			"default": 0,
			"description": "Tax",
			"routing": {
				"send": {
					"property": "amount_tax",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Amount Tax Signed",
			"name": "amount_tax_signed",
			"type": "number",
			"default": 0,
			"description": "Tax Signed",
			"routing": {
				"send": {
					"property": "amount_tax_signed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Amount Total",
			"name": "amount_total",
			"type": "number",
			"default": 0,
			"description": "Total",
			"routing": {
				"send": {
					"property": "amount_total",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Amount Total In Currency Signed",
			"name": "amount_total_in_currency_signed",
			"type": "number",
			"default": 0,
			"description": "Total in Currency Signed",
			"routing": {
				"send": {
					"property": "amount_total_in_currency_signed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Amount Total Signed",
			"name": "amount_total_signed",
			"type": "number",
			"default": 0,
			"description": "Total Signed",
			"routing": {
				"send": {
					"property": "amount_total_signed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Amount Total Words",
			"name": "amount_total_words",
			"type": "string",
			"default": "",
			"description": "Amount total in words",
			"routing": {
				"send": {
					"property": "amount_total_words",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Amount Untaxed",
			"name": "amount_untaxed",
			"type": "number",
			"default": 0,
			"description": "Untaxed Amount",
			"routing": {
				"send": {
					"property": "amount_untaxed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Amount Untaxed Signed",
			"name": "amount_untaxed_signed",
			"type": "number",
			"default": 0,
			"description": "Untaxed Amount Signed",
			"routing": {
				"send": {
					"property": "amount_untaxed_signed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Authorized Transaction Ids",
			"name": "authorized_transaction_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Authorized Transactions (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "authorized_transaction_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Auto Post",
			"name": "auto_post",
			"type": "string",
			"default": "",
			"description": "Auto-post",
			"routing": {
				"send": {
					"property": "auto_post",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Auto Post Origin ID",
			"name": "auto_post_origin_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.move",
			"routing": {
				"send": {
					"property": "auto_post_origin_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Auto Post Until",
			"name": "auto_post_until",
			"type": "string",
			"default": "",
			"description": "Auto-post until",
			"routing": {
				"send": {
					"property": "auto_post_until",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Bank Partner ID",
			"name": "bank_partner_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "bank_partner_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Campaign ID",
			"name": "campaign_id",
			"type": "number",
			"default": 0,
			"description": "ID of related utm.campaign",
			"routing": {
				"send": {
					"property": "campaign_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Commercial Partner ID",
			"name": "commercial_partner_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "commercial_partner_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Company Currency ID",
			"name": "company_currency_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.currency",
			"routing": {
				"send": {
					"property": "company_currency_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Company ID",
			"name": "company_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.company",
			"routing": {
				"send": {
					"property": "company_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Country Code",
			"name": "country_code",
			"type": "string",
			"default": "",
			"description": "Country Code",
			"routing": {
				"send": {
					"property": "country_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Currency ID",
			"name": "currency_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.currency",
			"routing": {
				"send": {
					"property": "currency_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"type": "string",
			"default": "",
			"description": "Date",
			"routing": {
				"send": {
					"property": "date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Delivery Date",
			"name": "delivery_date",
			"type": "string",
			"default": "",
			"description": "Delivery Date",
			"routing": {
				"send": {
					"property": "delivery_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Direction Sign",
			"name": "direction_sign",
			"type": "number",
			"default": 0,
			"description": "Direction Sign",
			"routing": {
				"send": {
					"property": "direction_sign",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Display Inactive Currency Warning",
			"name": "display_inactive_currency_warning",
			"type": "boolean",
			"default": true,
			"description": "Display Inactive Currency Warning",
			"routing": {
				"send": {
					"property": "display_inactive_currency_warning",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Display Qr Code",
			"name": "display_qr_code",
			"type": "boolean",
			"default": true,
			"description": "Display QR-code",
			"routing": {
				"send": {
					"property": "display_qr_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Duplicated Ref Ids",
			"name": "duplicated_ref_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Duplicated Ref (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "duplicated_ref_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Expense Sheet ID",
			"name": "expense_sheet_id",
			"type": "number",
			"default": 0,
			"description": "ID of related hr.expense.sheet",
			"routing": {
				"send": {
					"property": "expense_sheet_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Fiscal Position ID",
			"name": "fiscal_position_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.fiscal.position",
			"routing": {
				"send": {
					"property": "fiscal_position_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Has Message",
			"name": "has_message",
			"type": "boolean",
			"default": true,
			"description": "Has Message",
			"routing": {
				"send": {
					"property": "has_message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Has Reconciled Entries",
			"name": "has_reconciled_entries",
			"type": "boolean",
			"default": true,
			"description": "Has Reconciled Entries",
			"routing": {
				"send": {
					"property": "has_reconciled_entries",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Hide Post Button",
			"name": "hide_post_button",
			"type": "boolean",
			"default": true,
			"description": "Hide Post Button",
			"routing": {
				"send": {
					"property": "hide_post_button",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Highest Name",
			"name": "highest_name",
			"type": "string",
			"default": "",
			"description": "Highest Name",
			"routing": {
				"send": {
					"property": "highest_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Inalterable Hash",
			"name": "inalterable_hash",
			"type": "string",
			"default": "",
			"description": "Inalterability Hash",
			"routing": {
				"send": {
					"property": "inalterable_hash",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Incoterm Location",
			"name": "incoterm_location",
			"type": "string",
			"default": "",
			"description": "Incoterm Location",
			"routing": {
				"send": {
					"property": "incoterm_location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Invoice Cash Rounding ID",
			"name": "invoice_cash_rounding_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.cash.rounding",
			"routing": {
				"send": {
					"property": "invoice_cash_rounding_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Invoice Date",
			"name": "invoice_date",
			"type": "string",
			"default": "",
			"description": "Invoice/Bill Date",
			"routing": {
				"send": {
					"property": "invoice_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Invoice Date Due",
			"name": "invoice_date_due",
			"type": "string",
			"default": "",
			"description": "Due Date",
			"routing": {
				"send": {
					"property": "invoice_date_due",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Invoice Filter Type Domain",
			"name": "invoice_filter_type_domain",
			"type": "string",
			"default": "",
			"description": "Invoice Filter Type Domain",
			"routing": {
				"send": {
					"property": "invoice_filter_type_domain",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Invoice Has Outstanding",
			"name": "invoice_has_outstanding",
			"type": "boolean",
			"default": true,
			"description": "Invoice Has Outstanding",
			"routing": {
				"send": {
					"property": "invoice_has_outstanding",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Invoice Incoterm ID",
			"name": "invoice_incoterm_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.incoterms",
			"routing": {
				"send": {
					"property": "invoice_incoterm_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Invoice Origin",
			"name": "invoice_origin",
			"type": "string",
			"default": "",
			"description": "Origin",
			"routing": {
				"send": {
					"property": "invoice_origin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Invoice Outstanding Credits Debits Widget",
			"name": "invoice_outstanding_credits_debits_widget",
			"type": "string",
			"default": "",
			"description": "Invoice Outstanding Credits Debits Widget",
			"routing": {
				"send": {
					"property": "invoice_outstanding_credits_debits_widget",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Invoice Partner Display Name",
			"name": "invoice_partner_display_name",
			"type": "string",
			"default": "",
			"description": "Invoice Partner Display Name",
			"routing": {
				"send": {
					"property": "invoice_partner_display_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Invoice Payment Term ID",
			"name": "invoice_payment_term_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.payment.term",
			"routing": {
				"send": {
					"property": "invoice_payment_term_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Invoice Payments Widget",
			"name": "invoice_payments_widget",
			"type": "string",
			"default": "",
			"description": "Invoice Payments Widget",
			"routing": {
				"send": {
					"property": "invoice_payments_widget",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Invoice PDF Report File",
			"name": "invoice_pdf_report_file",
			"type": "string",
			"default": "",
			"description": "PDF File",
			"routing": {
				"send": {
					"property": "invoice_pdf_report_file",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Invoice PDF Report ID",
			"name": "invoice_pdf_report_id",
			"type": "number",
			"default": 0,
			"description": "ID of related ir.attachment",
			"routing": {
				"send": {
					"property": "invoice_pdf_report_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Invoice Source Email",
			"name": "invoice_source_email",
			"type": "string",
			"default": "",
			"description": "Source Email",
			"routing": {
				"send": {
					"property": "invoice_source_email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Invoice User ID",
			"name": "invoice_user_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.users",
			"routing": {
				"send": {
					"property": "invoice_user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Invoice Vendor Bill ID",
			"name": "invoice_vendor_bill_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.move",
			"routing": {
				"send": {
					"property": "invoice_vendor_bill_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Is Being Sent",
			"name": "is_being_sent",
			"type": "boolean",
			"default": true,
			"description": "Is Being Sent",
			"routing": {
				"send": {
					"property": "is_being_sent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Is Move Sent",
			"name": "is_move_sent",
			"type": "boolean",
			"default": true,
			"description": "Is Move Sent",
			"routing": {
				"send": {
					"property": "is_move_sent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Is Storno",
			"name": "is_storno",
			"type": "boolean",
			"default": true,
			"description": "Is Storno",
			"routing": {
				"send": {
					"property": "is_storno",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Journal ID",
			"name": "journal_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.journal",
			"routing": {
				"send": {
					"property": "journal_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Attachment ID",
			"name": "l10n_id_attachment_id",
			"type": "number",
			"default": 0,
			"description": "ID of related ir.attachment",
			"routing": {
				"send": {
					"property": "l10n_id_attachment_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Coretax Add Info 07",
			"name": "l10n_id_coretax_add_info_07",
			"type": "string",
			"default": "",
			"description": "L10N Id Coretax Add Info 07",
			"routing": {
				"send": {
					"property": "l10n_id_coretax_add_info_07",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Coretax Add Info 08",
			"name": "l10n_id_coretax_add_info_08",
			"type": "string",
			"default": "",
			"description": "L10N Id Coretax Add Info 08",
			"routing": {
				"send": {
					"property": "l10n_id_coretax_add_info_08",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Coretax Custom Doc",
			"name": "l10n_id_coretax_custom_doc",
			"type": "string",
			"default": "",
			"description": "L10N Id Coretax Custom Doc",
			"routing": {
				"send": {
					"property": "l10n_id_coretax_custom_doc",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Coretax Document",
			"name": "l10n_id_coretax_document",
			"type": "number",
			"default": 0,
			"description": "ID of related l10n_id_efaktur_coretax.document",
			"routing": {
				"send": {
					"property": "l10n_id_coretax_document",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Coretax Efaktur Available",
			"name": "l10n_id_coretax_efaktur_available",
			"type": "boolean",
			"default": true,
			"description": "L10N Id Coretax Efaktur Available",
			"routing": {
				"send": {
					"property": "l10n_id_coretax_efaktur_available",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Coretax Facility Info 07",
			"name": "l10n_id_coretax_facility_info_07",
			"type": "string",
			"default": "",
			"description": "L10N Id Coretax Facility Info 07",
			"routing": {
				"send": {
					"property": "l10n_id_coretax_facility_info_07",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Coretax Facility Info 08",
			"name": "l10n_id_coretax_facility_info_08",
			"type": "string",
			"default": "",
			"description": "L10N Id Coretax Facility Info 08",
			"routing": {
				"send": {
					"property": "l10n_id_coretax_facility_info_08",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID CSV Created",
			"name": "l10n_id_csv_created",
			"type": "boolean",
			"default": true,
			"description": "CSV Created",
			"routing": {
				"send": {
					"property": "l10n_id_csv_created",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Kode Transaksi",
			"name": "l10n_id_kode_transaksi",
			"type": "string",
			"default": "",
			"description": "Kode Transaksi",
			"routing": {
				"send": {
					"property": "l10n_id_kode_transaksi",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Need Kode Transaksi",
			"name": "l10n_id_need_kode_transaksi",
			"type": "boolean",
			"default": true,
			"description": "L10N Id Need Kode Transaksi",
			"routing": {
				"send": {
					"property": "l10n_id_need_kode_transaksi",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Replace Invoice ID",
			"name": "l10n_id_replace_invoice_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.move",
			"routing": {
				"send": {
					"property": "l10n_id_replace_invoice_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Tax Number",
			"name": "l10n_id_tax_number",
			"type": "string",
			"default": "",
			"description": "Tax Number",
			"routing": {
				"send": {
					"property": "l10n_id_tax_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Made Sequence Hole",
			"name": "made_sequence_hole",
			"type": "boolean",
			"default": true,
			"description": "Made Sequence Hole",
			"routing": {
				"send": {
					"property": "made_sequence_hole",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Medium ID",
			"name": "medium_id",
			"type": "number",
			"default": 0,
			"description": "ID of related utm.medium",
			"routing": {
				"send": {
					"property": "medium_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Message Attachment Count",
			"name": "message_attachment_count",
			"type": "number",
			"default": 0,
			"description": "Attachment Count",
			"routing": {
				"send": {
					"property": "message_attachment_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Message Has Error",
			"name": "message_has_error",
			"type": "boolean",
			"default": true,
			"description": "Message Delivery error",
			"routing": {
				"send": {
					"property": "message_has_error",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Message Has Error Counter",
			"name": "message_has_error_counter",
			"type": "number",
			"default": 0,
			"description": "Number of errors",
			"routing": {
				"send": {
					"property": "message_has_error_counter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Message Has Sms Error",
			"name": "message_has_sms_error",
			"type": "boolean",
			"default": true,
			"description": "SMS Delivery error",
			"routing": {
				"send": {
					"property": "message_has_sms_error",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Message Is Follower",
			"name": "message_is_follower",
			"type": "boolean",
			"default": true,
			"description": "Is Follower",
			"routing": {
				"send": {
					"property": "message_is_follower",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Message Main Attachment ID",
			"name": "message_main_attachment_id",
			"type": "number",
			"default": 0,
			"description": "ID of related ir.attachment",
			"routing": {
				"send": {
					"property": "message_main_attachment_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Message Needaction",
			"name": "message_needaction",
			"type": "boolean",
			"default": true,
			"description": "Action Needed",
			"routing": {
				"send": {
					"property": "message_needaction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Message Needaction Counter",
			"name": "message_needaction_counter",
			"type": "number",
			"default": 0,
			"description": "Number of Actions",
			"routing": {
				"send": {
					"property": "message_needaction_counter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Message Partner Ids",
			"name": "message_partner_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Followers (Partners) (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "message_partner_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Move Type",
			"name": "move_type",
			"type": "string",
			"default": "",
			"description": "Type",
			"routing": {
				"send": {
					"property": "move_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "My Activity Date Deadline",
			"name": "my_activity_date_deadline",
			"type": "string",
			"default": "",
			"description": "My Activity Deadline",
			"routing": {
				"send": {
					"property": "my_activity_date_deadline",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Number",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Narration",
			"name": "narration",
			"type": "string",
			"default": "",
			"description": "Terms and Conditions",
			"routing": {
				"send": {
					"property": "narration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Need Cancel Request",
			"name": "need_cancel_request",
			"type": "boolean",
			"default": true,
			"description": "Need Cancel Request",
			"routing": {
				"send": {
					"property": "need_cancel_request",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Needed Terms",
			"name": "needed_terms",
			"type": "string",
			"default": "",
			"description": "Needed Terms",
			"routing": {
				"send": {
					"property": "needed_terms",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Needed Terms Dirty",
			"name": "needed_terms_dirty",
			"type": "boolean",
			"default": true,
			"description": "Needed Terms Dirty",
			"routing": {
				"send": {
					"property": "needed_terms_dirty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Partner Bank ID",
			"name": "partner_bank_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner.bank",
			"routing": {
				"send": {
					"property": "partner_bank_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Partner Credit",
			"name": "partner_credit",
			"type": "number",
			"default": 0,
			"description": "Partner Credit",
			"routing": {
				"send": {
					"property": "partner_credit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Partner Credit Warning",
			"name": "partner_credit_warning",
			"type": "string",
			"default": "",
			"description": "Partner Credit Warning",
			"routing": {
				"send": {
					"property": "partner_credit_warning",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Partner ID",
			"name": "partner_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "partner_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Partner Shipping ID",
			"name": "partner_shipping_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "partner_shipping_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Payment ID",
			"name": "payment_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.payment",
			"routing": {
				"send": {
					"property": "payment_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Payment Reference",
			"name": "payment_reference",
			"type": "string",
			"default": "",
			"description": "Payment Reference",
			"routing": {
				"send": {
					"property": "payment_reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Payment State",
			"name": "payment_state",
			"type": "string",
			"default": "",
			"description": "Payment Status",
			"routing": {
				"send": {
					"property": "payment_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Payment Term Details",
			"name": "payment_term_details",
			"type": "string",
			"default": "",
			"description": "Payment Term Details",
			"routing": {
				"send": {
					"property": "payment_term_details",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Pos Refunded Invoice Ids",
			"name": "pos_refunded_invoice_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Pos Refunded Invoice (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "pos_refunded_invoice_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Posted Before",
			"name": "posted_before",
			"type": "boolean",
			"default": true,
			"description": "Posted Before",
			"routing": {
				"send": {
					"property": "posted_before",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Purchase ID",
			"name": "purchase_id",
			"type": "number",
			"default": 0,
			"description": "ID of related purchase.order",
			"routing": {
				"send": {
					"property": "purchase_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Purchase Order Count",
			"name": "purchase_order_count",
			"type": "number",
			"default": 0,
			"description": "Purchase Order Count",
			"routing": {
				"send": {
					"property": "purchase_order_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Purchase Vendor Bill ID",
			"name": "purchase_vendor_bill_id",
			"type": "number",
			"default": 0,
			"description": "ID of related purchase.bill.union",
			"routing": {
				"send": {
					"property": "purchase_vendor_bill_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Qr Code Method",
			"name": "qr_code_method",
			"type": "string",
			"default": "",
			"description": "Payment QR-code",
			"routing": {
				"send": {
					"property": "qr_code_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Quick Edit Mode",
			"name": "quick_edit_mode",
			"type": "boolean",
			"default": true,
			"description": "Quick Edit Mode",
			"routing": {
				"send": {
					"property": "quick_edit_mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Quick Edit Total Amount",
			"name": "quick_edit_total_amount",
			"type": "number",
			"default": 0,
			"description": "Total (Tax inc.)",
			"routing": {
				"send": {
					"property": "quick_edit_total_amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Quick Encoding Vals",
			"name": "quick_encoding_vals",
			"type": "json",
			"default": "{}",
			"description": "Quick Encoding Vals",
			"routing": {
				"send": {
					"property": "quick_encoding_vals",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Ref",
			"name": "ref",
			"type": "string",
			"default": "",
			"description": "Reference",
			"routing": {
				"send": {
					"property": "ref",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Restrict Mode Hash Table",
			"name": "restrict_mode_hash_table",
			"type": "boolean",
			"default": true,
			"description": "Lock Posted Entries with Hash",
			"routing": {
				"send": {
					"property": "restrict_mode_hash_table",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Reversed Entry ID",
			"name": "reversed_entry_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.move",
			"routing": {
				"send": {
					"property": "reversed_entry_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Sale Order Count",
			"name": "sale_order_count",
			"type": "number",
			"default": 0,
			"description": "Sale Order Count",
			"routing": {
				"send": {
					"property": "sale_order_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Secure Sequence Number",
			"name": "secure_sequence_number",
			"type": "number",
			"default": 0,
			"description": "Inalteralbility No Gap Sequence #",
			"routing": {
				"send": {
					"property": "secure_sequence_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Send And Print Values",
			"name": "send_and_print_values",
			"type": "json",
			"default": "{}",
			"description": "Send And Print Values",
			"routing": {
				"send": {
					"property": "send_and_print_values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Sequence Number",
			"name": "sequence_number",
			"type": "number",
			"default": 0,
			"description": "Sequence Number",
			"routing": {
				"send": {
					"property": "sequence_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Sequence Prefix",
			"name": "sequence_prefix",
			"type": "string",
			"default": "",
			"description": "Sequence Prefix",
			"routing": {
				"send": {
					"property": "sequence_prefix",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Show Commercial Partner Warning",
			"name": "show_commercial_partner_warning",
			"type": "boolean",
			"default": true,
			"description": "Show Commercial Partner Warning",
			"routing": {
				"send": {
					"property": "show_commercial_partner_warning",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Show Delivery Date",
			"name": "show_delivery_date",
			"type": "boolean",
			"default": true,
			"description": "Show Delivery Date",
			"routing": {
				"send": {
					"property": "show_delivery_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Show Discount Details",
			"name": "show_discount_details",
			"type": "boolean",
			"default": true,
			"description": "Show Discount Details",
			"routing": {
				"send": {
					"property": "show_discount_details",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Show Name Warning",
			"name": "show_name_warning",
			"type": "boolean",
			"default": true,
			"description": "Show Name Warning",
			"routing": {
				"send": {
					"property": "show_name_warning",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Show Payment Term Details",
			"name": "show_payment_term_details",
			"type": "boolean",
			"default": true,
			"description": "Show Payment Term Details",
			"routing": {
				"send": {
					"property": "show_payment_term_details",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Show Reset To Draft Button",
			"name": "show_reset_to_draft_button",
			"type": "boolean",
			"default": true,
			"description": "Show Reset To Draft Button",
			"routing": {
				"send": {
					"property": "show_reset_to_draft_button",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Show Update Fpos",
			"name": "show_update_fpos",
			"type": "boolean",
			"default": true,
			"description": "Has Fiscal Position Changed",
			"routing": {
				"send": {
					"property": "show_update_fpos",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Source ID",
			"name": "source_id",
			"type": "number",
			"default": 0,
			"description": "ID of related utm.source",
			"routing": {
				"send": {
					"property": "source_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"type": "string",
			"default": "",
			"description": "Status",
			"routing": {
				"send": {
					"property": "state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Statement ID",
			"name": "statement_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.bank.statement",
			"routing": {
				"send": {
					"property": "statement_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Statement Line ID",
			"name": "statement_line_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.bank.statement.line",
			"routing": {
				"send": {
					"property": "statement_line_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Stock Move ID",
			"name": "stock_move_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.move",
			"routing": {
				"send": {
					"property": "stock_move_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "String To Hash",
			"name": "string_to_hash",
			"type": "string",
			"default": "",
			"description": "String To Hash",
			"routing": {
				"send": {
					"property": "string_to_hash",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Suitable Journal Ids",
			"name": "suitable_journal_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Suitable Journal (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "suitable_journal_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Tax Calculation Rounding Method",
			"name": "tax_calculation_rounding_method",
			"type": "string",
			"default": "",
			"description": "Tax calculation rounding method",
			"routing": {
				"send": {
					"property": "tax_calculation_rounding_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Tax Cash Basis Origin Move ID",
			"name": "tax_cash_basis_origin_move_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.move",
			"routing": {
				"send": {
					"property": "tax_cash_basis_origin_move_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Tax Cash Basis Rec ID",
			"name": "tax_cash_basis_rec_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.partial.reconcile",
			"routing": {
				"send": {
					"property": "tax_cash_basis_rec_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Tax Country Code",
			"name": "tax_country_code",
			"type": "string",
			"default": "",
			"description": "Tax Country Code",
			"routing": {
				"send": {
					"property": "tax_country_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Tax Country ID",
			"name": "tax_country_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.country",
			"routing": {
				"send": {
					"property": "tax_country_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Tax Lock Date Message",
			"name": "tax_lock_date_message",
			"type": "string",
			"default": "",
			"description": "Tax Lock Date Message",
			"routing": {
				"send": {
					"property": "tax_lock_date_message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Tax Totals",
			"name": "tax_totals",
			"type": "string",
			"default": "",
			"description": "Invoice Totals",
			"routing": {
				"send": {
					"property": "tax_totals",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Team ID",
			"name": "team_id",
			"type": "number",
			"default": 0,
			"description": "ID of related crm.team",
			"routing": {
				"send": {
					"property": "team_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "To Check",
			"name": "to_check",
			"type": "boolean",
			"default": true,
			"description": "To Check",
			"routing": {
				"send": {
					"property": "to_check",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Transaction Ids",
			"name": "transaction_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Transactions (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "transaction_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Type Name",
			"name": "type_name",
			"type": "string",
			"default": "",
			"description": "Type Name",
			"routing": {
				"send": {
					"property": "type_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Ubl Cii XML File",
			"name": "ubl_cii_xml_file",
			"type": "string",
			"default": "",
			"description": "UBL/CII File",
			"routing": {
				"send": {
					"property": "ubl_cii_xml_file",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Ubl Cii XML ID",
			"name": "ubl_cii_xml_id",
			"type": "number",
			"default": 0,
			"description": "ID of related ir.attachment",
			"routing": {
				"send": {
					"property": "ubl_cii_xml_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.users",
			"routing": {
				"send": {
					"property": "user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "Website ID",
			"name": "website_id",
			"type": "number",
			"default": 0,
			"description": "ID of related website",
			"routing": {
				"send": {
					"property": "website_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move"
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
						"Account"
					],
					"operation": [
						"Upsert Account Move"
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
						"Account"
					],
					"operation": [
						"Upsert Account Move"
					]
				}
			}
		},
		{
			"displayName": "GET /api/account.move.line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"description": "JSON-encoded Odoo domain filter",
			"default": "[[\"name\",\"ilike\",\"test\"]]",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,account_id,debit,credit,id",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order, e.g. 'name asc' or 'create_date desc'",
			"default": "id asc",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Move Line"
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
						"Account"
					],
					"operation": [
						"Search Account Move Line"
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
						"Account"
					],
					"operation": [
						"Search Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/account.move.line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{\n  \"name\": \"INV/2024/001-1\"\n}",
			"description": "Search criteria to find existing record by Line Description",
			"routing": {
				"send": {
					"property": "_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Account ID",
			"name": "account_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "account_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Account Internal Group",
			"name": "account_internal_group",
			"type": "string",
			"default": "",
			"description": "Internal Group",
			"routing": {
				"send": {
					"property": "account_internal_group",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Account Root ID",
			"name": "account_root_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.root",
			"routing": {
				"send": {
					"property": "account_root_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Account Type",
			"name": "account_type",
			"type": "string",
			"default": "",
			"description": "Internal Type",
			"routing": {
				"send": {
					"property": "account_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Amount Currency",
			"name": "amount_currency",
			"type": "number",
			"default": 0,
			"description": "Amount in Currency",
			"routing": {
				"send": {
					"property": "amount_currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Amount Residual",
			"name": "amount_residual",
			"type": "number",
			"default": 0,
			"description": "Residual Amount",
			"routing": {
				"send": {
					"property": "amount_residual",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Amount Residual Currency",
			"name": "amount_residual_currency",
			"type": "number",
			"default": 0,
			"description": "Residual Amount in Currency",
			"routing": {
				"send": {
					"property": "amount_residual_currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Analytic Distribution",
			"name": "analytic_distribution",
			"type": "json",
			"default": "{}",
			"description": "Analytic Distribution",
			"routing": {
				"send": {
					"property": "analytic_distribution",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Analytic Distribution Search",
			"name": "analytic_distribution_search",
			"type": "json",
			"default": "{}",
			"description": "Analytic Distribution Search",
			"routing": {
				"send": {
					"property": "analytic_distribution_search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Analytic Precision",
			"name": "analytic_precision",
			"type": "number",
			"default": 0,
			"description": "Analytic Precision",
			"routing": {
				"send": {
					"property": "analytic_precision",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Balance",
			"name": "balance",
			"type": "number",
			"default": 0,
			"description": "Balance",
			"routing": {
				"send": {
					"property": "balance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Blocked",
			"name": "blocked",
			"type": "boolean",
			"default": true,
			"description": "No Follow-up",
			"routing": {
				"send": {
					"property": "blocked",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Cogs Origin ID",
			"name": "cogs_origin_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.move.line",
			"routing": {
				"send": {
					"property": "cogs_origin_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Company Currency ID",
			"name": "company_currency_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.currency",
			"routing": {
				"send": {
					"property": "company_currency_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Company ID",
			"name": "company_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.company",
			"routing": {
				"send": {
					"property": "company_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Compute All Tax",
			"name": "compute_all_tax",
			"type": "string",
			"default": "",
			"description": "Compute All Tax",
			"routing": {
				"send": {
					"property": "compute_all_tax",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Compute All Tax Dirty",
			"name": "compute_all_tax_dirty",
			"type": "boolean",
			"default": true,
			"description": "Compute All Tax Dirty",
			"routing": {
				"send": {
					"property": "compute_all_tax_dirty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Credit",
			"name": "credit",
			"type": "number",
			"default": 0,
			"description": "Credit",
			"routing": {
				"send": {
					"property": "credit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Cumulated Balance",
			"name": "cumulated_balance",
			"type": "number",
			"default": 0,
			"description": "Cumulated Balance",
			"routing": {
				"send": {
					"property": "cumulated_balance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Currency ID",
			"name": "currency_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.currency",
			"routing": {
				"send": {
					"property": "currency_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Currency Rate",
			"name": "currency_rate",
			"type": "number",
			"default": 0,
			"description": "Currency Rate",
			"routing": {
				"send": {
					"property": "currency_rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"type": "string",
			"default": "",
			"description": "Date",
			"routing": {
				"send": {
					"property": "date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Date Maturity",
			"name": "date_maturity",
			"type": "string",
			"default": "",
			"description": "Due Date",
			"routing": {
				"send": {
					"property": "date_maturity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Debit",
			"name": "debit",
			"type": "number",
			"default": 0,
			"description": "Debit",
			"routing": {
				"send": {
					"property": "debit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Discount",
			"name": "discount",
			"type": "number",
			"default": 0,
			"description": "Discount (%)",
			"routing": {
				"send": {
					"property": "discount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Discount Allocation Dirty",
			"name": "discount_allocation_dirty",
			"type": "boolean",
			"default": true,
			"description": "Discount Allocation Dirty",
			"routing": {
				"send": {
					"property": "discount_allocation_dirty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Discount Allocation Key",
			"name": "discount_allocation_key",
			"type": "string",
			"default": "",
			"description": "Discount Allocation Key",
			"routing": {
				"send": {
					"property": "discount_allocation_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Discount Allocation Needed",
			"name": "discount_allocation_needed",
			"type": "string",
			"default": "",
			"description": "Discount Allocation Needed",
			"routing": {
				"send": {
					"property": "discount_allocation_needed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Discount Amount Currency",
			"name": "discount_amount_currency",
			"type": "number",
			"default": 0,
			"description": "Discount amount in Currency",
			"routing": {
				"send": {
					"property": "discount_amount_currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Discount Balance",
			"name": "discount_balance",
			"type": "number",
			"default": 0,
			"description": "Discount Balance",
			"routing": {
				"send": {
					"property": "discount_balance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Discount Date",
			"name": "discount_date",
			"type": "string",
			"default": "",
			"description": "Discount Date",
			"routing": {
				"send": {
					"property": "discount_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Display Type",
			"name": "display_type",
			"type": "string",
			"default": "",
			"description": "Display Type",
			"routing": {
				"send": {
					"property": "display_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Distribution Analytic Account Ids",
			"name": "distribution_analytic_account_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Distribution Analytic Account (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "distribution_analytic_account_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Epd Dirty",
			"name": "epd_dirty",
			"type": "boolean",
			"default": true,
			"description": "Epd Dirty",
			"routing": {
				"send": {
					"property": "epd_dirty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Epd Key",
			"name": "epd_key",
			"type": "string",
			"default": "",
			"description": "Epd Key",
			"routing": {
				"send": {
					"property": "epd_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Epd Needed",
			"name": "epd_needed",
			"type": "string",
			"default": "",
			"description": "Epd Needed",
			"routing": {
				"send": {
					"property": "epd_needed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Expense ID",
			"name": "expense_id",
			"type": "number",
			"default": 0,
			"description": "ID of related hr.expense",
			"routing": {
				"send": {
					"property": "expense_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Full Reconcile ID",
			"name": "full_reconcile_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.full.reconcile",
			"routing": {
				"send": {
					"property": "full_reconcile_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Group Tax ID",
			"name": "group_tax_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.tax",
			"routing": {
				"send": {
					"property": "group_tax_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Invoice Date",
			"name": "invoice_date",
			"type": "string",
			"default": "",
			"description": "Invoice/Bill Date",
			"routing": {
				"send": {
					"property": "invoice_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Is Account Reconcile",
			"name": "is_account_reconcile",
			"type": "boolean",
			"default": true,
			"description": "Account Reconcile",
			"routing": {
				"send": {
					"property": "is_account_reconcile",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Is Downpayment",
			"name": "is_downpayment",
			"type": "boolean",
			"default": true,
			"description": "Is Downpayment",
			"routing": {
				"send": {
					"property": "is_downpayment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Is Refund",
			"name": "is_refund",
			"type": "boolean",
			"default": true,
			"description": "Is Refund",
			"routing": {
				"send": {
					"property": "is_refund",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Is Same Currency",
			"name": "is_same_currency",
			"type": "boolean",
			"default": true,
			"description": "Is Same Currency",
			"routing": {
				"send": {
					"property": "is_same_currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Is Storno",
			"name": "is_storno",
			"type": "boolean",
			"default": true,
			"description": "Company Storno Accounting",
			"routing": {
				"send": {
					"property": "is_storno",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Journal ID",
			"name": "journal_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.journal",
			"routing": {
				"send": {
					"property": "journal_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Matching Number",
			"name": "matching_number",
			"type": "string",
			"default": "",
			"description": "Matching #",
			"routing": {
				"send": {
					"property": "matching_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Move ID",
			"name": "move_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.move",
			"routing": {
				"send": {
					"property": "move_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Move Name",
			"name": "move_name",
			"type": "string",
			"default": "",
			"description": "Number",
			"routing": {
				"send": {
					"property": "move_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Move Type",
			"name": "move_type",
			"type": "string",
			"default": "",
			"description": "Type",
			"routing": {
				"send": {
					"property": "move_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Label",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Need Vehicle",
			"name": "need_vehicle",
			"type": "boolean",
			"default": true,
			"description": "Need Vehicle",
			"routing": {
				"send": {
					"property": "need_vehicle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Parent State",
			"name": "parent_state",
			"type": "string",
			"default": "",
			"description": "Status",
			"routing": {
				"send": {
					"property": "parent_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Partner ID",
			"name": "partner_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "partner_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Payment Date",
			"name": "payment_date",
			"type": "string",
			"default": "",
			"description": "Payment Date",
			"routing": {
				"send": {
					"property": "payment_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Payment ID",
			"name": "payment_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.payment",
			"routing": {
				"send": {
					"property": "payment_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Price Subtotal",
			"name": "price_subtotal",
			"type": "number",
			"default": 0,
			"description": "Subtotal",
			"routing": {
				"send": {
					"property": "price_subtotal",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Price Total",
			"name": "price_total",
			"type": "number",
			"default": 0,
			"description": "Total",
			"routing": {
				"send": {
					"property": "price_total",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Price Unit",
			"name": "price_unit",
			"type": "number",
			"default": 0,
			"description": "Unit Price",
			"routing": {
				"send": {
					"property": "price_unit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Product ID",
			"name": "product_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.product",
			"routing": {
				"send": {
					"property": "product_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Product Uom Category ID",
			"name": "product_uom_category_id",
			"type": "number",
			"default": 0,
			"description": "ID of related uom.category",
			"routing": {
				"send": {
					"property": "product_uom_category_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Product Uom ID",
			"name": "product_uom_id",
			"type": "number",
			"default": 0,
			"description": "ID of related uom.uom",
			"routing": {
				"send": {
					"property": "product_uom_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Purchase Line ID",
			"name": "purchase_line_id",
			"type": "number",
			"default": 0,
			"description": "ID of related purchase.order.line",
			"routing": {
				"send": {
					"property": "purchase_line_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Purchase Order ID",
			"name": "purchase_order_id",
			"type": "number",
			"default": 0,
			"description": "ID of related purchase.order",
			"routing": {
				"send": {
					"property": "purchase_order_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Quantity",
			"name": "quantity",
			"type": "number",
			"default": 0,
			"description": "Quantity",
			"routing": {
				"send": {
					"property": "quantity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Reconcile Model ID",
			"name": "reconcile_model_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.reconcile.model",
			"routing": {
				"send": {
					"property": "reconcile_model_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Reconciled",
			"name": "reconciled",
			"type": "boolean",
			"default": true,
			"description": "Reconciled",
			"routing": {
				"send": {
					"property": "reconciled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Ref",
			"name": "ref",
			"type": "string",
			"default": "",
			"description": "Reference",
			"routing": {
				"send": {
					"property": "ref",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Sale Line Ids",
			"name": "sale_line_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Sales Order Lines (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "sale_line_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Sequence",
			"name": "sequence",
			"type": "number",
			"default": 0,
			"description": "Sequence",
			"routing": {
				"send": {
					"property": "sequence",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Statement ID",
			"name": "statement_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.bank.statement",
			"routing": {
				"send": {
					"property": "statement_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Statement Line ID",
			"name": "statement_line_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.bank.statement.line",
			"routing": {
				"send": {
					"property": "statement_line_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Tax Base Amount",
			"name": "tax_base_amount",
			"type": "number",
			"default": 0,
			"description": "Base Amount",
			"routing": {
				"send": {
					"property": "tax_base_amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Tax Calculation Rounding Method",
			"name": "tax_calculation_rounding_method",
			"type": "string",
			"default": "",
			"description": "Tax calculation rounding method",
			"routing": {
				"send": {
					"property": "tax_calculation_rounding_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Tax Group ID",
			"name": "tax_group_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.tax.group",
			"routing": {
				"send": {
					"property": "tax_group_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Tax Ids",
			"name": "tax_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Taxes (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "tax_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Tax Key",
			"name": "tax_key",
			"type": "string",
			"default": "",
			"description": "Tax Key",
			"routing": {
				"send": {
					"property": "tax_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Tax Line ID",
			"name": "tax_line_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.tax",
			"routing": {
				"send": {
					"property": "tax_line_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Tax Repartition Line ID",
			"name": "tax_repartition_line_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.tax.repartition.line",
			"routing": {
				"send": {
					"property": "tax_repartition_line_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Tax Tag Ids",
			"name": "tax_tag_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Tags (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "tax_tag_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Tax Tag Invert",
			"name": "tax_tag_invert",
			"type": "boolean",
			"default": true,
			"description": "Invert Tags",
			"routing": {
				"send": {
					"property": "tax_tag_invert",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Term Key",
			"name": "term_key",
			"type": "string",
			"default": "",
			"description": "Term Key",
			"routing": {
				"send": {
					"property": "term_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "Vehicle ID",
			"name": "vehicle_id",
			"type": "number",
			"default": 0,
			"description": "ID of related fleet.vehicle",
			"routing": {
				"send": {
					"property": "vehicle_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
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
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
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
						"Account"
					],
					"operation": [
						"Upsert Account Move Line"
					]
				}
			}
		},
		{
			"displayName": "GET /api/account.payment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"description": "JSON-encoded Odoo domain filter",
			"default": "[[\"name\",\"ilike\",\"test\"]]",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,state,amount,id",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order, e.g. 'name asc' or 'create_date desc'",
			"default": "date desc",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Payment"
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
						"Account"
					],
					"operation": [
						"Search Account Payment"
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
						"Account"
					],
					"operation": [
						"Search Account Payment"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/account.payment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{\n  \"name\": \"PAY/2024/001\"\n}",
			"description": "Search criteria to find existing record by Payment Number",
			"routing": {
				"send": {
					"property": "_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Access Token",
			"name": "access_token",
			"type": "string",
			"default": "",
			"description": "Security Token",
			"routing": {
				"send": {
					"property": "access_token",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Access URL",
			"name": "access_url",
			"type": "string",
			"default": "",
			"description": "Portal Access URL",
			"routing": {
				"send": {
					"property": "access_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Access Warning",
			"name": "access_warning",
			"type": "string",
			"default": "",
			"description": "Access warning",
			"routing": {
				"send": {
					"property": "access_warning",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Activity Calendar Event ID",
			"name": "activity_calendar_event_id",
			"type": "number",
			"default": 0,
			"description": "ID of related calendar.event",
			"routing": {
				"send": {
					"property": "activity_calendar_event_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Activity Date Deadline",
			"name": "activity_date_deadline",
			"type": "string",
			"default": "",
			"description": "Next Activity Deadline",
			"routing": {
				"send": {
					"property": "activity_date_deadline",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Activity Exception Decoration",
			"name": "activity_exception_decoration",
			"type": "string",
			"default": "",
			"description": "Activity Exception Decoration",
			"routing": {
				"send": {
					"property": "activity_exception_decoration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Activity Exception Icon",
			"name": "activity_exception_icon",
			"type": "string",
			"default": "",
			"description": "Icon",
			"routing": {
				"send": {
					"property": "activity_exception_icon",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Activity State",
			"name": "activity_state",
			"type": "string",
			"default": "",
			"description": "Activity State",
			"routing": {
				"send": {
					"property": "activity_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Activity Summary",
			"name": "activity_summary",
			"type": "string",
			"default": "",
			"description": "Next Activity Summary",
			"routing": {
				"send": {
					"property": "activity_summary",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Activity Type Icon",
			"name": "activity_type_icon",
			"type": "string",
			"default": "",
			"description": "Activity Type Icon",
			"routing": {
				"send": {
					"property": "activity_type_icon",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Activity Type ID",
			"name": "activity_type_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mail.activity.type",
			"routing": {
				"send": {
					"property": "activity_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Activity User ID",
			"name": "activity_user_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.users",
			"routing": {
				"send": {
					"property": "activity_user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Always Tax Exigible",
			"name": "always_tax_exigible",
			"type": "boolean",
			"default": true,
			"description": "Always Tax Exigible",
			"routing": {
				"send": {
					"property": "always_tax_exigible",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"type": "number",
			"default": 0,
			"description": "Amount",
			"routing": {
				"send": {
					"property": "amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Amount Available For Refund",
			"name": "amount_available_for_refund",
			"type": "number",
			"default": 0,
			"description": "Amount Available For Refund",
			"routing": {
				"send": {
					"property": "amount_available_for_refund",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Amount Company Currency Signed",
			"name": "amount_company_currency_signed",
			"type": "number",
			"default": 0,
			"description": "Amount Company Currency Signed",
			"routing": {
				"send": {
					"property": "amount_company_currency_signed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Amount Paid",
			"name": "amount_paid",
			"type": "number",
			"default": 0,
			"description": "Amount paid",
			"routing": {
				"send": {
					"property": "amount_paid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Amount Residual",
			"name": "amount_residual",
			"type": "number",
			"default": 0,
			"description": "Amount Due",
			"routing": {
				"send": {
					"property": "amount_residual",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Amount Residual Signed",
			"name": "amount_residual_signed",
			"type": "number",
			"default": 0,
			"description": "Amount Due Signed",
			"routing": {
				"send": {
					"property": "amount_residual_signed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Amount Signed",
			"name": "amount_signed",
			"type": "number",
			"default": 0,
			"description": "Amount Signed",
			"routing": {
				"send": {
					"property": "amount_signed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Amount Tax",
			"name": "amount_tax",
			"type": "number",
			"default": 0,
			"description": "Tax",
			"routing": {
				"send": {
					"property": "amount_tax",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Amount Tax Signed",
			"name": "amount_tax_signed",
			"type": "number",
			"default": 0,
			"description": "Tax Signed",
			"routing": {
				"send": {
					"property": "amount_tax_signed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Amount Total",
			"name": "amount_total",
			"type": "number",
			"default": 0,
			"description": "Total",
			"routing": {
				"send": {
					"property": "amount_total",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Amount Total In Currency Signed",
			"name": "amount_total_in_currency_signed",
			"type": "number",
			"default": 0,
			"description": "Total in Currency Signed",
			"routing": {
				"send": {
					"property": "amount_total_in_currency_signed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Amount Total Signed",
			"name": "amount_total_signed",
			"type": "number",
			"default": 0,
			"description": "Total Signed",
			"routing": {
				"send": {
					"property": "amount_total_signed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Amount Total Words",
			"name": "amount_total_words",
			"type": "string",
			"default": "",
			"description": "Amount total in words",
			"routing": {
				"send": {
					"property": "amount_total_words",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Amount Untaxed",
			"name": "amount_untaxed",
			"type": "number",
			"default": 0,
			"description": "Untaxed Amount",
			"routing": {
				"send": {
					"property": "amount_untaxed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Amount Untaxed Signed",
			"name": "amount_untaxed_signed",
			"type": "number",
			"default": 0,
			"description": "Untaxed Amount Signed",
			"routing": {
				"send": {
					"property": "amount_untaxed_signed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Authorized Transaction Ids",
			"name": "authorized_transaction_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Authorized Transactions (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "authorized_transaction_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Auto Post",
			"name": "auto_post",
			"type": "string",
			"default": "",
			"description": "Auto-post",
			"routing": {
				"send": {
					"property": "auto_post",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Auto Post Origin ID",
			"name": "auto_post_origin_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.move",
			"routing": {
				"send": {
					"property": "auto_post_origin_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Auto Post Until",
			"name": "auto_post_until",
			"type": "string",
			"default": "",
			"description": "Auto-post until",
			"routing": {
				"send": {
					"property": "auto_post_until",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Available Journal Ids",
			"name": "available_journal_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Available Journal (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "available_journal_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Available Partner Bank Ids",
			"name": "available_partner_bank_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Available Partner Bank (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "available_partner_bank_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Available Payment Method Line Ids",
			"name": "available_payment_method_line_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Available Payment Method Line (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "available_payment_method_line_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Bank Partner ID",
			"name": "bank_partner_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "bank_partner_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Campaign ID",
			"name": "campaign_id",
			"type": "number",
			"default": 0,
			"description": "ID of related utm.campaign",
			"routing": {
				"send": {
					"property": "campaign_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Commercial Partner ID",
			"name": "commercial_partner_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "commercial_partner_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Company Currency ID",
			"name": "company_currency_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.currency",
			"routing": {
				"send": {
					"property": "company_currency_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Company ID",
			"name": "company_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.company",
			"routing": {
				"send": {
					"property": "company_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Country Code",
			"name": "country_code",
			"type": "string",
			"default": "",
			"description": "Country Code",
			"routing": {
				"send": {
					"property": "country_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Currency ID",
			"name": "currency_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.currency",
			"routing": {
				"send": {
					"property": "currency_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"type": "string",
			"default": "",
			"description": "Date",
			"routing": {
				"send": {
					"property": "date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Delivery Date",
			"name": "delivery_date",
			"type": "string",
			"default": "",
			"description": "Delivery Date",
			"routing": {
				"send": {
					"property": "delivery_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Destination Account ID",
			"name": "destination_account_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "destination_account_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Destination Journal ID",
			"name": "destination_journal_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.journal",
			"routing": {
				"send": {
					"property": "destination_journal_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Direction Sign",
			"name": "direction_sign",
			"type": "number",
			"default": 0,
			"description": "Direction Sign",
			"routing": {
				"send": {
					"property": "direction_sign",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Display Inactive Currency Warning",
			"name": "display_inactive_currency_warning",
			"type": "boolean",
			"default": true,
			"description": "Display Inactive Currency Warning",
			"routing": {
				"send": {
					"property": "display_inactive_currency_warning",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Display Qr Code",
			"name": "display_qr_code",
			"type": "boolean",
			"default": true,
			"description": "Display QR-code",
			"routing": {
				"send": {
					"property": "display_qr_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Duplicated Ref Ids",
			"name": "duplicated_ref_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Duplicated Ref (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "duplicated_ref_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Expense Sheet ID",
			"name": "expense_sheet_id",
			"type": "number",
			"default": 0,
			"description": "ID of related hr.expense.sheet",
			"routing": {
				"send": {
					"property": "expense_sheet_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Fiscal Position ID",
			"name": "fiscal_position_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.fiscal.position",
			"routing": {
				"send": {
					"property": "fiscal_position_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Force Outstanding Account ID",
			"name": "force_outstanding_account_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "force_outstanding_account_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Has Message",
			"name": "has_message",
			"type": "boolean",
			"default": true,
			"description": "Has Message",
			"routing": {
				"send": {
					"property": "has_message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Has Reconciled Entries",
			"name": "has_reconciled_entries",
			"type": "boolean",
			"default": true,
			"description": "Has Reconciled Entries",
			"routing": {
				"send": {
					"property": "has_reconciled_entries",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Hide Post Button",
			"name": "hide_post_button",
			"type": "boolean",
			"default": true,
			"description": "Hide Post Button",
			"routing": {
				"send": {
					"property": "hide_post_button",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Highest Name",
			"name": "highest_name",
			"type": "string",
			"default": "",
			"description": "Highest Name",
			"routing": {
				"send": {
					"property": "highest_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Inalterable Hash",
			"name": "inalterable_hash",
			"type": "string",
			"default": "",
			"description": "Inalterability Hash",
			"routing": {
				"send": {
					"property": "inalterable_hash",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Incoterm Location",
			"name": "incoterm_location",
			"type": "string",
			"default": "",
			"description": "Incoterm Location",
			"routing": {
				"send": {
					"property": "incoterm_location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Invoice Cash Rounding ID",
			"name": "invoice_cash_rounding_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.cash.rounding",
			"routing": {
				"send": {
					"property": "invoice_cash_rounding_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Invoice Date",
			"name": "invoice_date",
			"type": "string",
			"default": "",
			"description": "Invoice/Bill Date",
			"routing": {
				"send": {
					"property": "invoice_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Invoice Date Due",
			"name": "invoice_date_due",
			"type": "string",
			"default": "",
			"description": "Due Date",
			"routing": {
				"send": {
					"property": "invoice_date_due",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Invoice Filter Type Domain",
			"name": "invoice_filter_type_domain",
			"type": "string",
			"default": "",
			"description": "Invoice Filter Type Domain",
			"routing": {
				"send": {
					"property": "invoice_filter_type_domain",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Invoice Has Outstanding",
			"name": "invoice_has_outstanding",
			"type": "boolean",
			"default": true,
			"description": "Invoice Has Outstanding",
			"routing": {
				"send": {
					"property": "invoice_has_outstanding",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Invoice Incoterm ID",
			"name": "invoice_incoterm_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.incoterms",
			"routing": {
				"send": {
					"property": "invoice_incoterm_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Invoice Origin",
			"name": "invoice_origin",
			"type": "string",
			"default": "",
			"description": "Origin",
			"routing": {
				"send": {
					"property": "invoice_origin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Invoice Outstanding Credits Debits Widget",
			"name": "invoice_outstanding_credits_debits_widget",
			"type": "string",
			"default": "",
			"description": "Invoice Outstanding Credits Debits Widget",
			"routing": {
				"send": {
					"property": "invoice_outstanding_credits_debits_widget",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Invoice Partner Display Name",
			"name": "invoice_partner_display_name",
			"type": "string",
			"default": "",
			"description": "Invoice Partner Display Name",
			"routing": {
				"send": {
					"property": "invoice_partner_display_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Invoice Payment Term ID",
			"name": "invoice_payment_term_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.payment.term",
			"routing": {
				"send": {
					"property": "invoice_payment_term_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Invoice Payments Widget",
			"name": "invoice_payments_widget",
			"type": "string",
			"default": "",
			"description": "Invoice Payments Widget",
			"routing": {
				"send": {
					"property": "invoice_payments_widget",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Invoice PDF Report File",
			"name": "invoice_pdf_report_file",
			"type": "string",
			"default": "",
			"description": "PDF File",
			"routing": {
				"send": {
					"property": "invoice_pdf_report_file",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Invoice PDF Report ID",
			"name": "invoice_pdf_report_id",
			"type": "number",
			"default": 0,
			"description": "ID of related ir.attachment",
			"routing": {
				"send": {
					"property": "invoice_pdf_report_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Invoice Source Email",
			"name": "invoice_source_email",
			"type": "string",
			"default": "",
			"description": "Source Email",
			"routing": {
				"send": {
					"property": "invoice_source_email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Invoice User ID",
			"name": "invoice_user_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.users",
			"routing": {
				"send": {
					"property": "invoice_user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Invoice Vendor Bill ID",
			"name": "invoice_vendor_bill_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.move",
			"routing": {
				"send": {
					"property": "invoice_vendor_bill_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Is Being Sent",
			"name": "is_being_sent",
			"type": "boolean",
			"default": true,
			"description": "Is Being Sent",
			"routing": {
				"send": {
					"property": "is_being_sent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Is Donation",
			"name": "is_donation",
			"type": "boolean",
			"default": true,
			"description": "Is Donation",
			"routing": {
				"send": {
					"property": "is_donation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Is Internal Transfer",
			"name": "is_internal_transfer",
			"type": "boolean",
			"default": true,
			"description": "Internal Transfer",
			"routing": {
				"send": {
					"property": "is_internal_transfer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Is Matched",
			"name": "is_matched",
			"type": "boolean",
			"default": true,
			"description": "Is Matched With a Bank Statement",
			"routing": {
				"send": {
					"property": "is_matched",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Is Move Sent",
			"name": "is_move_sent",
			"type": "boolean",
			"default": true,
			"description": "Is Move Sent",
			"routing": {
				"send": {
					"property": "is_move_sent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Is Reconciled",
			"name": "is_reconciled",
			"type": "boolean",
			"default": true,
			"description": "Is Reconciled",
			"routing": {
				"send": {
					"property": "is_reconciled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Is Storno",
			"name": "is_storno",
			"type": "boolean",
			"default": true,
			"description": "Is Storno",
			"routing": {
				"send": {
					"property": "is_storno",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Journal ID",
			"name": "journal_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.journal",
			"routing": {
				"send": {
					"property": "journal_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Attachment ID",
			"name": "l10n_id_attachment_id",
			"type": "number",
			"default": 0,
			"description": "ID of related ir.attachment",
			"routing": {
				"send": {
					"property": "l10n_id_attachment_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Coretax Add Info 07",
			"name": "l10n_id_coretax_add_info_07",
			"type": "string",
			"default": "",
			"description": "L10N Id Coretax Add Info 07",
			"routing": {
				"send": {
					"property": "l10n_id_coretax_add_info_07",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Coretax Add Info 08",
			"name": "l10n_id_coretax_add_info_08",
			"type": "string",
			"default": "",
			"description": "L10N Id Coretax Add Info 08",
			"routing": {
				"send": {
					"property": "l10n_id_coretax_add_info_08",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Coretax Custom Doc",
			"name": "l10n_id_coretax_custom_doc",
			"type": "string",
			"default": "",
			"description": "L10N Id Coretax Custom Doc",
			"routing": {
				"send": {
					"property": "l10n_id_coretax_custom_doc",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Coretax Document",
			"name": "l10n_id_coretax_document",
			"type": "number",
			"default": 0,
			"description": "ID of related l10n_id_efaktur_coretax.document",
			"routing": {
				"send": {
					"property": "l10n_id_coretax_document",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Coretax Efaktur Available",
			"name": "l10n_id_coretax_efaktur_available",
			"type": "boolean",
			"default": true,
			"description": "L10N Id Coretax Efaktur Available",
			"routing": {
				"send": {
					"property": "l10n_id_coretax_efaktur_available",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Coretax Facility Info 07",
			"name": "l10n_id_coretax_facility_info_07",
			"type": "string",
			"default": "",
			"description": "L10N Id Coretax Facility Info 07",
			"routing": {
				"send": {
					"property": "l10n_id_coretax_facility_info_07",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Coretax Facility Info 08",
			"name": "l10n_id_coretax_facility_info_08",
			"type": "string",
			"default": "",
			"description": "L10N Id Coretax Facility Info 08",
			"routing": {
				"send": {
					"property": "l10n_id_coretax_facility_info_08",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID CSV Created",
			"name": "l10n_id_csv_created",
			"type": "boolean",
			"default": true,
			"description": "CSV Created",
			"routing": {
				"send": {
					"property": "l10n_id_csv_created",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Kode Transaksi",
			"name": "l10n_id_kode_transaksi",
			"type": "string",
			"default": "",
			"description": "Kode Transaksi",
			"routing": {
				"send": {
					"property": "l10n_id_kode_transaksi",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Need Kode Transaksi",
			"name": "l10n_id_need_kode_transaksi",
			"type": "boolean",
			"default": true,
			"description": "L10N Id Need Kode Transaksi",
			"routing": {
				"send": {
					"property": "l10n_id_need_kode_transaksi",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Replace Invoice ID",
			"name": "l10n_id_replace_invoice_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.move",
			"routing": {
				"send": {
					"property": "l10n_id_replace_invoice_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Tax Number",
			"name": "l10n_id_tax_number",
			"type": "string",
			"default": "",
			"description": "Tax Number",
			"routing": {
				"send": {
					"property": "l10n_id_tax_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Made Sequence Hole",
			"name": "made_sequence_hole",
			"type": "boolean",
			"default": true,
			"description": "Made Sequence Hole",
			"routing": {
				"send": {
					"property": "made_sequence_hole",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Medium ID",
			"name": "medium_id",
			"type": "number",
			"default": 0,
			"description": "ID of related utm.medium",
			"routing": {
				"send": {
					"property": "medium_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Message Attachment Count",
			"name": "message_attachment_count",
			"type": "number",
			"default": 0,
			"description": "Attachment Count",
			"routing": {
				"send": {
					"property": "message_attachment_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Message Has Error",
			"name": "message_has_error",
			"type": "boolean",
			"default": true,
			"description": "Message Delivery error",
			"routing": {
				"send": {
					"property": "message_has_error",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Message Has Error Counter",
			"name": "message_has_error_counter",
			"type": "number",
			"default": 0,
			"description": "Number of errors",
			"routing": {
				"send": {
					"property": "message_has_error_counter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Message Has Sms Error",
			"name": "message_has_sms_error",
			"type": "boolean",
			"default": true,
			"description": "SMS Delivery error",
			"routing": {
				"send": {
					"property": "message_has_sms_error",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Message Is Follower",
			"name": "message_is_follower",
			"type": "boolean",
			"default": true,
			"description": "Is Follower",
			"routing": {
				"send": {
					"property": "message_is_follower",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Message Main Attachment ID",
			"name": "message_main_attachment_id",
			"type": "number",
			"default": 0,
			"description": "ID of related ir.attachment",
			"routing": {
				"send": {
					"property": "message_main_attachment_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Message Needaction",
			"name": "message_needaction",
			"type": "boolean",
			"default": true,
			"description": "Action Needed",
			"routing": {
				"send": {
					"property": "message_needaction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Message Needaction Counter",
			"name": "message_needaction_counter",
			"type": "number",
			"default": 0,
			"description": "Number of Actions",
			"routing": {
				"send": {
					"property": "message_needaction_counter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Message Partner Ids",
			"name": "message_partner_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Followers (Partners) (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "message_partner_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Move ID",
			"name": "move_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.move",
			"routing": {
				"send": {
					"property": "move_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Move Type",
			"name": "move_type",
			"type": "string",
			"default": "",
			"description": "Type",
			"routing": {
				"send": {
					"property": "move_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "My Activity Date Deadline",
			"name": "my_activity_date_deadline",
			"type": "string",
			"default": "",
			"description": "My Activity Deadline",
			"routing": {
				"send": {
					"property": "my_activity_date_deadline",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Number",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Narration",
			"name": "narration",
			"type": "string",
			"default": "",
			"description": "Terms and Conditions",
			"routing": {
				"send": {
					"property": "narration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Need Cancel Request",
			"name": "need_cancel_request",
			"type": "boolean",
			"default": true,
			"description": "Need Cancel Request",
			"routing": {
				"send": {
					"property": "need_cancel_request",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Needed Terms",
			"name": "needed_terms",
			"type": "string",
			"default": "",
			"description": "Needed Terms",
			"routing": {
				"send": {
					"property": "needed_terms",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Needed Terms Dirty",
			"name": "needed_terms_dirty",
			"type": "boolean",
			"default": true,
			"description": "Needed Terms Dirty",
			"routing": {
				"send": {
					"property": "needed_terms_dirty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Outstanding Account ID",
			"name": "outstanding_account_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "outstanding_account_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Paired Internal Transfer Payment ID",
			"name": "paired_internal_transfer_payment_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.payment",
			"routing": {
				"send": {
					"property": "paired_internal_transfer_payment_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Partner Bank ID",
			"name": "partner_bank_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner.bank",
			"routing": {
				"send": {
					"property": "partner_bank_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Partner Credit",
			"name": "partner_credit",
			"type": "number",
			"default": 0,
			"description": "Partner Credit",
			"routing": {
				"send": {
					"property": "partner_credit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Partner Credit Warning",
			"name": "partner_credit_warning",
			"type": "string",
			"default": "",
			"description": "Partner Credit Warning",
			"routing": {
				"send": {
					"property": "partner_credit_warning",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Partner ID",
			"name": "partner_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "partner_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Partner Shipping ID",
			"name": "partner_shipping_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "partner_shipping_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Partner Type",
			"name": "partner_type",
			"type": "string",
			"default": "",
			"description": "Partner Type",
			"routing": {
				"send": {
					"property": "partner_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Payment ID",
			"name": "payment_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.payment",
			"routing": {
				"send": {
					"property": "payment_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Payment Method Code",
			"name": "payment_method_code",
			"type": "string",
			"default": "",
			"description": "Code",
			"routing": {
				"send": {
					"property": "payment_method_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Payment Method ID",
			"name": "payment_method_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.payment.method",
			"routing": {
				"send": {
					"property": "payment_method_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Payment Method Line ID",
			"name": "payment_method_line_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.payment.method.line",
			"routing": {
				"send": {
					"property": "payment_method_line_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Payment Reference",
			"name": "payment_reference",
			"type": "string",
			"default": "",
			"description": "Payment Reference",
			"routing": {
				"send": {
					"property": "payment_reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Payment State",
			"name": "payment_state",
			"type": "string",
			"default": "",
			"description": "Payment Status",
			"routing": {
				"send": {
					"property": "payment_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Payment Term Details",
			"name": "payment_term_details",
			"type": "string",
			"default": "",
			"description": "Payment Term Details",
			"routing": {
				"send": {
					"property": "payment_term_details",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Payment Token ID",
			"name": "payment_token_id",
			"type": "number",
			"default": 0,
			"description": "ID of related payment.token",
			"routing": {
				"send": {
					"property": "payment_token_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Payment Transaction ID",
			"name": "payment_transaction_id",
			"type": "number",
			"default": 0,
			"description": "ID of related payment.transaction",
			"routing": {
				"send": {
					"property": "payment_transaction_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Payment Type",
			"name": "payment_type",
			"type": "string",
			"default": "",
			"description": "Payment Type",
			"routing": {
				"send": {
					"property": "payment_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Pos Order ID",
			"name": "pos_order_id",
			"type": "number",
			"default": 0,
			"description": "ID of related pos.order",
			"routing": {
				"send": {
					"property": "pos_order_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Pos Payment Method ID",
			"name": "pos_payment_method_id",
			"type": "number",
			"default": 0,
			"description": "ID of related pos.payment.method",
			"routing": {
				"send": {
					"property": "pos_payment_method_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Pos Refunded Invoice Ids",
			"name": "pos_refunded_invoice_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Pos Refunded Invoice (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "pos_refunded_invoice_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Pos Session ID",
			"name": "pos_session_id",
			"type": "number",
			"default": 0,
			"description": "ID of related pos.session",
			"routing": {
				"send": {
					"property": "pos_session_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Posted Before",
			"name": "posted_before",
			"type": "boolean",
			"default": true,
			"description": "Posted Before",
			"routing": {
				"send": {
					"property": "posted_before",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Purchase ID",
			"name": "purchase_id",
			"type": "number",
			"default": 0,
			"description": "ID of related purchase.order",
			"routing": {
				"send": {
					"property": "purchase_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Purchase Order Count",
			"name": "purchase_order_count",
			"type": "number",
			"default": 0,
			"description": "Purchase Order Count",
			"routing": {
				"send": {
					"property": "purchase_order_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Purchase Vendor Bill ID",
			"name": "purchase_vendor_bill_id",
			"type": "number",
			"default": 0,
			"description": "ID of related purchase.bill.union",
			"routing": {
				"send": {
					"property": "purchase_vendor_bill_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Qr Code",
			"name": "qr_code",
			"type": "string",
			"default": "",
			"description": "QR Code URL",
			"routing": {
				"send": {
					"property": "qr_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Qr Code Method",
			"name": "qr_code_method",
			"type": "string",
			"default": "",
			"description": "Payment QR-code",
			"routing": {
				"send": {
					"property": "qr_code_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Quick Edit Mode",
			"name": "quick_edit_mode",
			"type": "boolean",
			"default": true,
			"description": "Quick Edit Mode",
			"routing": {
				"send": {
					"property": "quick_edit_mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Quick Edit Total Amount",
			"name": "quick_edit_total_amount",
			"type": "number",
			"default": 0,
			"description": "Total (Tax inc.)",
			"routing": {
				"send": {
					"property": "quick_edit_total_amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Quick Encoding Vals",
			"name": "quick_encoding_vals",
			"type": "json",
			"default": "{}",
			"description": "Quick Encoding Vals",
			"routing": {
				"send": {
					"property": "quick_encoding_vals",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Reconciled Bill Ids",
			"name": "reconciled_bill_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Reconciled Bills (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "reconciled_bill_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Reconciled Bills Count",
			"name": "reconciled_bills_count",
			"type": "number",
			"default": 0,
			"description": "# Reconciled Bills",
			"routing": {
				"send": {
					"property": "reconciled_bills_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Reconciled Invoice Ids",
			"name": "reconciled_invoice_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Reconciled Invoices (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "reconciled_invoice_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Reconciled Invoices Count",
			"name": "reconciled_invoices_count",
			"type": "number",
			"default": 0,
			"description": "# Reconciled Invoices",
			"routing": {
				"send": {
					"property": "reconciled_invoices_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Reconciled Invoices Type",
			"name": "reconciled_invoices_type",
			"type": "string",
			"default": "",
			"description": "Reconciled Invoices Type",
			"routing": {
				"send": {
					"property": "reconciled_invoices_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Reconciled Statement Line Ids",
			"name": "reconciled_statement_line_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Reconciled Statement Lines (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "reconciled_statement_line_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Reconciled Statement Lines Count",
			"name": "reconciled_statement_lines_count",
			"type": "number",
			"default": 0,
			"description": "# Reconciled Statement Lines",
			"routing": {
				"send": {
					"property": "reconciled_statement_lines_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Ref",
			"name": "ref",
			"type": "string",
			"default": "",
			"description": "Reference",
			"routing": {
				"send": {
					"property": "ref",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Refunds Count",
			"name": "refunds_count",
			"type": "number",
			"default": 0,
			"description": "Refunds Count",
			"routing": {
				"send": {
					"property": "refunds_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Require Partner Bank Account",
			"name": "require_partner_bank_account",
			"type": "boolean",
			"default": true,
			"description": "Require Partner Bank Account",
			"routing": {
				"send": {
					"property": "require_partner_bank_account",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Restrict Mode Hash Table",
			"name": "restrict_mode_hash_table",
			"type": "boolean",
			"default": true,
			"description": "Lock Posted Entries with Hash",
			"routing": {
				"send": {
					"property": "restrict_mode_hash_table",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Reversed Entry ID",
			"name": "reversed_entry_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.move",
			"routing": {
				"send": {
					"property": "reversed_entry_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Sale Order Count",
			"name": "sale_order_count",
			"type": "number",
			"default": 0,
			"description": "Sale Order Count",
			"routing": {
				"send": {
					"property": "sale_order_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Secure Sequence Number",
			"name": "secure_sequence_number",
			"type": "number",
			"default": 0,
			"description": "Inalteralbility No Gap Sequence #",
			"routing": {
				"send": {
					"property": "secure_sequence_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Send And Print Values",
			"name": "send_and_print_values",
			"type": "json",
			"default": "{}",
			"description": "Send And Print Values",
			"routing": {
				"send": {
					"property": "send_and_print_values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Sequence Number",
			"name": "sequence_number",
			"type": "number",
			"default": 0,
			"description": "Sequence Number",
			"routing": {
				"send": {
					"property": "sequence_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Sequence Prefix",
			"name": "sequence_prefix",
			"type": "string",
			"default": "",
			"description": "Sequence Prefix",
			"routing": {
				"send": {
					"property": "sequence_prefix",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Show Commercial Partner Warning",
			"name": "show_commercial_partner_warning",
			"type": "boolean",
			"default": true,
			"description": "Show Commercial Partner Warning",
			"routing": {
				"send": {
					"property": "show_commercial_partner_warning",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Show Delivery Date",
			"name": "show_delivery_date",
			"type": "boolean",
			"default": true,
			"description": "Show Delivery Date",
			"routing": {
				"send": {
					"property": "show_delivery_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Show Discount Details",
			"name": "show_discount_details",
			"type": "boolean",
			"default": true,
			"description": "Show Discount Details",
			"routing": {
				"send": {
					"property": "show_discount_details",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Show Name Warning",
			"name": "show_name_warning",
			"type": "boolean",
			"default": true,
			"description": "Show Name Warning",
			"routing": {
				"send": {
					"property": "show_name_warning",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Show Partner Bank Account",
			"name": "show_partner_bank_account",
			"type": "boolean",
			"default": true,
			"description": "Show Partner Bank Account",
			"routing": {
				"send": {
					"property": "show_partner_bank_account",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Show Payment Term Details",
			"name": "show_payment_term_details",
			"type": "boolean",
			"default": true,
			"description": "Show Payment Term Details",
			"routing": {
				"send": {
					"property": "show_payment_term_details",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Show Reset To Draft Button",
			"name": "show_reset_to_draft_button",
			"type": "boolean",
			"default": true,
			"description": "Show Reset To Draft Button",
			"routing": {
				"send": {
					"property": "show_reset_to_draft_button",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Show Update Fpos",
			"name": "show_update_fpos",
			"type": "boolean",
			"default": true,
			"description": "Has Fiscal Position Changed",
			"routing": {
				"send": {
					"property": "show_update_fpos",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Source ID",
			"name": "source_id",
			"type": "number",
			"default": 0,
			"description": "ID of related utm.source",
			"routing": {
				"send": {
					"property": "source_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Source Payment ID",
			"name": "source_payment_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.payment",
			"routing": {
				"send": {
					"property": "source_payment_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"type": "string",
			"default": "",
			"description": "Status",
			"routing": {
				"send": {
					"property": "state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Statement ID",
			"name": "statement_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.bank.statement",
			"routing": {
				"send": {
					"property": "statement_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Statement Line ID",
			"name": "statement_line_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.bank.statement.line",
			"routing": {
				"send": {
					"property": "statement_line_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Stock Move ID",
			"name": "stock_move_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.move",
			"routing": {
				"send": {
					"property": "stock_move_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "String To Hash",
			"name": "string_to_hash",
			"type": "string",
			"default": "",
			"description": "String To Hash",
			"routing": {
				"send": {
					"property": "string_to_hash",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Suitable Journal Ids",
			"name": "suitable_journal_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Suitable Journal (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "suitable_journal_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Suitable Payment Token Ids",
			"name": "suitable_payment_token_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Suitable Payment Token (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "suitable_payment_token_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Tax Calculation Rounding Method",
			"name": "tax_calculation_rounding_method",
			"type": "string",
			"default": "",
			"description": "Tax calculation rounding method",
			"routing": {
				"send": {
					"property": "tax_calculation_rounding_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Tax Cash Basis Origin Move ID",
			"name": "tax_cash_basis_origin_move_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.move",
			"routing": {
				"send": {
					"property": "tax_cash_basis_origin_move_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Tax Cash Basis Rec ID",
			"name": "tax_cash_basis_rec_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.partial.reconcile",
			"routing": {
				"send": {
					"property": "tax_cash_basis_rec_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Tax Country Code",
			"name": "tax_country_code",
			"type": "string",
			"default": "",
			"description": "Tax Country Code",
			"routing": {
				"send": {
					"property": "tax_country_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Tax Country ID",
			"name": "tax_country_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.country",
			"routing": {
				"send": {
					"property": "tax_country_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Tax Lock Date Message",
			"name": "tax_lock_date_message",
			"type": "string",
			"default": "",
			"description": "Tax Lock Date Message",
			"routing": {
				"send": {
					"property": "tax_lock_date_message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Tax Totals",
			"name": "tax_totals",
			"type": "string",
			"default": "",
			"description": "Invoice Totals",
			"routing": {
				"send": {
					"property": "tax_totals",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Team ID",
			"name": "team_id",
			"type": "number",
			"default": 0,
			"description": "ID of related crm.team",
			"routing": {
				"send": {
					"property": "team_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "To Check",
			"name": "to_check",
			"type": "boolean",
			"default": true,
			"description": "To Check",
			"routing": {
				"send": {
					"property": "to_check",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Transaction Ids",
			"name": "transaction_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Transactions (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "transaction_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Type Name",
			"name": "type_name",
			"type": "string",
			"default": "",
			"description": "Type Name",
			"routing": {
				"send": {
					"property": "type_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Ubl Cii XML File",
			"name": "ubl_cii_xml_file",
			"type": "string",
			"default": "",
			"description": "UBL/CII File",
			"routing": {
				"send": {
					"property": "ubl_cii_xml_file",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Ubl Cii XML ID",
			"name": "ubl_cii_xml_id",
			"type": "number",
			"default": 0,
			"description": "ID of related ir.attachment",
			"routing": {
				"send": {
					"property": "ubl_cii_xml_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Use Electronic Payment Method",
			"name": "use_electronic_payment_method",
			"type": "boolean",
			"default": true,
			"description": "Use Electronic Payment Method",
			"routing": {
				"send": {
					"property": "use_electronic_payment_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.users",
			"routing": {
				"send": {
					"property": "user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "Website ID",
			"name": "website_id",
			"type": "number",
			"default": 0,
			"description": "ID of related website",
			"routing": {
				"send": {
					"property": "website_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
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
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
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
						"Account"
					],
					"operation": [
						"Upsert Account Payment"
					]
				}
			}
		},
		{
			"displayName": "GET /api/account.tax",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"description": "JSON-encoded Odoo domain filter",
			"default": "[[\"name\",\"ilike\",\"test\"]]",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,amount,type,id",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order, e.g. 'name asc' or 'create_date desc'",
			"default": "name asc",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Tax"
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
						"Account"
					],
					"operation": [
						"Search Account Tax"
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
						"Account"
					],
					"operation": [
						"Search Account Tax"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/account.tax",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{\n  \"name\": \"PPN 11%\"\n}",
			"description": "Search criteria to find existing record by Tax Name",
			"routing": {
				"send": {
					"property": "_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
			"description": "Active",
			"routing": {
				"send": {
					"property": "active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"type": "number",
			"default": 0,
			"description": "Amount",
			"routing": {
				"send": {
					"property": "amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Amount Type",
			"name": "amount_type",
			"type": "string",
			"default": "",
			"description": "Tax Computation",
			"routing": {
				"send": {
					"property": "amount_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Analytic",
			"name": "analytic",
			"type": "boolean",
			"default": true,
			"description": "Include in Analytic Cost",
			"routing": {
				"send": {
					"property": "analytic",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Cash Basis Transition Account ID",
			"name": "cash_basis_transition_account_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "cash_basis_transition_account_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Children Tax Ids",
			"name": "children_tax_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Children Taxes (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "children_tax_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Company ID",
			"name": "company_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.company",
			"routing": {
				"send": {
					"property": "company_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Country Code",
			"name": "country_code",
			"type": "string",
			"default": "",
			"description": "Country Code",
			"routing": {
				"send": {
					"property": "country_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Country ID",
			"name": "country_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.country",
			"routing": {
				"send": {
					"property": "country_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Description",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Has Message",
			"name": "has_message",
			"type": "boolean",
			"default": true,
			"description": "Has Message",
			"routing": {
				"send": {
					"property": "has_message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Hide Tax Exigibility",
			"name": "hide_tax_exigibility",
			"type": "boolean",
			"default": true,
			"description": "Hide Use Cash Basis Option",
			"routing": {
				"send": {
					"property": "hide_tax_exigibility",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Include Base Amount",
			"name": "include_base_amount",
			"type": "boolean",
			"default": true,
			"description": "Affect Base of Subsequent Taxes",
			"routing": {
				"send": {
					"property": "include_base_amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Invoice Label",
			"name": "invoice_label",
			"type": "string",
			"default": "",
			"description": "Label on Invoices",
			"routing": {
				"send": {
					"property": "invoice_label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Is Base Affected",
			"name": "is_base_affected",
			"type": "boolean",
			"default": true,
			"description": "Base Affected by Previous Taxes",
			"routing": {
				"send": {
					"property": "is_base_affected",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Is Used",
			"name": "is_used",
			"type": "boolean",
			"default": true,
			"description": "Tax used",
			"routing": {
				"send": {
					"property": "is_used",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Message Attachment Count",
			"name": "message_attachment_count",
			"type": "number",
			"default": 0,
			"description": "Attachment Count",
			"routing": {
				"send": {
					"property": "message_attachment_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Message Has Error",
			"name": "message_has_error",
			"type": "boolean",
			"default": true,
			"description": "Message Delivery error",
			"routing": {
				"send": {
					"property": "message_has_error",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Message Has Error Counter",
			"name": "message_has_error_counter",
			"type": "number",
			"default": 0,
			"description": "Number of errors",
			"routing": {
				"send": {
					"property": "message_has_error_counter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Message Has Sms Error",
			"name": "message_has_sms_error",
			"type": "boolean",
			"default": true,
			"description": "SMS Delivery error",
			"routing": {
				"send": {
					"property": "message_has_sms_error",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Message Is Follower",
			"name": "message_is_follower",
			"type": "boolean",
			"default": true,
			"description": "Is Follower",
			"routing": {
				"send": {
					"property": "message_is_follower",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Message Needaction",
			"name": "message_needaction",
			"type": "boolean",
			"default": true,
			"description": "Action Needed",
			"routing": {
				"send": {
					"property": "message_needaction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Message Needaction Counter",
			"name": "message_needaction_counter",
			"type": "number",
			"default": 0,
			"description": "Number of Actions",
			"routing": {
				"send": {
					"property": "message_needaction_counter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Message Partner Ids",
			"name": "message_partner_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Followers (Partners) (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "message_partner_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Tax Name",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Name Searchable",
			"name": "name_searchable",
			"type": "string",
			"default": "",
			"description": "Name Searchable",
			"routing": {
				"send": {
					"property": "name_searchable",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Price Include",
			"name": "price_include",
			"type": "boolean",
			"default": true,
			"description": "Included in Price",
			"routing": {
				"send": {
					"property": "price_include",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Repartition Lines Str",
			"name": "repartition_lines_str",
			"type": "string",
			"default": "",
			"description": "Repartition Lines",
			"routing": {
				"send": {
					"property": "repartition_lines_str",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Sequence",
			"name": "sequence",
			"type": "number",
			"default": 0,
			"description": "Sequence",
			"routing": {
				"send": {
					"property": "sequence",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Tax Exigibility",
			"name": "tax_exigibility",
			"type": "string",
			"default": "",
			"description": "Tax Exigibility",
			"routing": {
				"send": {
					"property": "tax_exigibility",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Tax Group ID",
			"name": "tax_group_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.tax.group",
			"routing": {
				"send": {
					"property": "tax_group_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Tax Scope",
			"name": "tax_scope",
			"type": "string",
			"default": "",
			"description": "Tax Scope",
			"routing": {
				"send": {
					"property": "tax_scope",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "Type Tax Use",
			"name": "type_tax_use",
			"type": "string",
			"default": "",
			"description": "Tax Type",
			"routing": {
				"send": {
					"property": "type_tax_use",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
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
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
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
						"Account"
					],
					"operation": [
						"Upsert Account Tax"
					]
				}
			}
		},
		{
			"displayName": "GET /api/account.tax.group",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Tax Group"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"description": "JSON-encoded Odoo domain filter",
			"default": "[[\"name\",\"ilike\",\"test\"]]",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Tax Group"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,id",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Tax Group"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Tax Group"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Tax Group"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order, e.g. 'name asc' or 'create_date desc'",
			"default": "name asc",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Tax Group"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Exact match on name field",
			"default": "John Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Tax Group"
					]
				}
			}
		},
		{
			"displayName": "Name Like",
			"name": "name_like",
			"description": "Search name (case-insensitive partial match)",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name_like",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Search Account Tax Group"
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
						"Account"
					],
					"operation": [
						"Search Account Tax Group"
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
						"Account"
					],
					"operation": [
						"Search Account Tax Group"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/account.tax.group",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax Group"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{\n  \"name\": \"Tax Group\"\n}",
			"description": "Search criteria to find existing record by Tax Group Name",
			"routing": {
				"send": {
					"property": "_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax Group"
					]
				}
			}
		},
		{
			"displayName": "Advance Tax Payment Account ID",
			"name": "advance_tax_payment_account_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "advance_tax_payment_account_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax Group"
					]
				}
			}
		},
		{
			"displayName": "Company ID",
			"name": "company_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.company",
			"routing": {
				"send": {
					"property": "company_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax Group"
					]
				}
			}
		},
		{
			"displayName": "Country Code",
			"name": "country_code",
			"type": "string",
			"default": "",
			"description": "Country Code",
			"routing": {
				"send": {
					"property": "country_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax Group"
					]
				}
			}
		},
		{
			"displayName": "Country ID",
			"name": "country_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.country",
			"routing": {
				"send": {
					"property": "country_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax Group"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Name",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax Group"
					]
				}
			}
		},
		{
			"displayName": "Preceding Subtotal",
			"name": "preceding_subtotal",
			"type": "string",
			"default": "",
			"description": "Preceding Subtotal",
			"routing": {
				"send": {
					"property": "preceding_subtotal",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax Group"
					]
				}
			}
		},
		{
			"displayName": "Sequence",
			"name": "sequence",
			"type": "number",
			"default": 0,
			"description": "Sequence",
			"routing": {
				"send": {
					"property": "sequence",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax Group"
					]
				}
			}
		},
		{
			"displayName": "Tax Payable Account ID",
			"name": "tax_payable_account_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "tax_payable_account_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax Group"
					]
				}
			}
		},
		{
			"displayName": "Tax Receivable Account ID",
			"name": "tax_receivable_account_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "tax_receivable_account_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Upsert Account Tax Group"
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
						"Account"
					],
					"operation": [
						"Upsert Account Tax Group"
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
						"Account"
					],
					"operation": [
						"Upsert Account Tax Group"
					]
				}
			}
		},
];
