import type { INodeProperties } from 'n8n-workflow';

export const mailDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					]
				}
			},
			"options": [
				{
					"name": "Search Mail Message",
					"value": "Search Mail Message",
					"action": "Search & read Message",
					"description": "Search and read mail.message records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/mail.message"
						}
					}
				},
				{
					"name": "Upsert Mail Message",
					"value": "Upsert Mail Message",
					"action": "Upsert Message",
					"description": "Create or update mail.message record.\n\nSearch by subject (Message Subject) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/mail.message"
						}
					}
				},
				{
					"name": "Search Mail Thread",
					"value": "Search Mail Thread",
					"action": "Search & read Email Thread",
					"description": "Search and read mail.thread records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/mail.thread"
						}
					}
				},
				{
					"name": "Upsert Mail Thread",
					"value": "Upsert Mail Thread",
					"action": "Upsert Thread",
					"description": "Create or update mail.thread record.\n\nSearch by id (Thread ID) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/mail.thread"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/mail.message",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Search Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"description": "Odoo domain filter (JSON array). Each condition is [field, operator, value].\n\n**Operators:**\n- `=` : equals\n- `!=` : not equals\n- `ilike` : contains (case-insensitive)\n- `like` : contains (case-sensitive)\n- `>` `<` `>=` `<=` : comparison\n- `in` : value is in list\n- `not in` : value is not in list\n\n**Examples:**\n\nExact match:\n```\n[[\"name\", \"=\", \"John\"]]\n```\n\nSearch (contains):\n```\n[[\"name\", \"ilike\", \"john\"]]\n```\n\nMultiple conditions (AND):\n```\n[[\"name\", \"ilike\", \"john\"], [\"email\", \"ilike\", \"gmail\"]]\n```\n\nMultiple values (OR):\n```\n[\"|\", [\"name\", \"=\", \"John\"], [\"name\", \"=\", \"Jane\"]]\n```\n\nFilter by state:\n```\n[[\"state\", \"in\", [\"draft\", \"sent\"]]]\n```\n\nComparison:\n```\n[[\"amount_total\", \">=\", 100000]]\n```\n\nCombined:\n```\n[[\"partner_id.name\", \"ilike\", \"admin\"], [\"state\", \"=\", \"sale\"], [\"amount_total\", \">\", 50000]]\n```\n\n**Tip:** Use `GET /api/{model}/fields` to see available field names and types.",
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
						"Mail"
					],
					"operation": [
						"Search Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "subject,model,body,id",
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
						"Mail"
					],
					"operation": [
						"Search Mail Message"
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
						"Mail"
					],
					"operation": [
						"Search Mail Message"
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
						"Mail"
					],
					"operation": [
						"Search Mail Message"
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
						"Mail"
					],
					"operation": [
						"Search Mail Message"
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
						"Mail"
					],
					"operation": [
						"Search Mail Message"
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
						"Mail"
					],
					"operation": [
						"Search Mail Message"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/mail.message",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{\n  \"subject\": \"Hello\"\n}",
			"description": "Search criteria to find existing record by Message Subject",
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
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Attachment Ids",
			"name": "attachment_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Attachments (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "attachment_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Author Avatar",
			"name": "author_avatar",
			"type": "string",
			"default": "",
			"description": "Author's avatar",
			"routing": {
				"send": {
					"property": "author_avatar",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Author Guest ID",
			"name": "author_guest_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mail.guest",
			"routing": {
				"send": {
					"property": "author_guest_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Author ID",
			"name": "author_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "author_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": "",
			"description": "Contents",
			"routing": {
				"send": {
					"property": "body",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
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
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Short description",
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
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Email Add Signature",
			"name": "email_add_signature",
			"type": "boolean",
			"default": true,
			"description": "Email Add Signature",
			"routing": {
				"send": {
					"property": "email_add_signature",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Email From",
			"name": "email_from",
			"type": "string",
			"default": "",
			"description": "From",
			"routing": {
				"send": {
					"property": "email_from",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Email Layout Xmlid",
			"name": "email_layout_xmlid",
			"type": "string",
			"default": "",
			"description": "Layout",
			"routing": {
				"send": {
					"property": "email_layout_xmlid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Has Error",
			"name": "has_error",
			"type": "boolean",
			"default": true,
			"description": "Has error",
			"routing": {
				"send": {
					"property": "has_error",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Has Sms Error",
			"name": "has_sms_error",
			"type": "boolean",
			"default": true,
			"description": "Has SMS error",
			"routing": {
				"send": {
					"property": "has_sms_error",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Is Current User Or Guest Author",
			"name": "is_current_user_or_guest_author",
			"type": "boolean",
			"default": true,
			"description": "Is Current User Or Guest Author",
			"routing": {
				"send": {
					"property": "is_current_user_or_guest_author",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Is Internal",
			"name": "is_internal",
			"type": "boolean",
			"default": true,
			"description": "Employee Only",
			"routing": {
				"send": {
					"property": "is_internal",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Mail Activity Type ID",
			"name": "mail_activity_type_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mail.activity.type",
			"routing": {
				"send": {
					"property": "mail_activity_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Mail Server ID",
			"name": "mail_server_id",
			"type": "number",
			"default": 0,
			"description": "ID of related ir.mail_server",
			"routing": {
				"send": {
					"property": "mail_server_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Message ID",
			"name": "message_id",
			"type": "string",
			"default": "",
			"description": "Message-Id",
			"routing": {
				"send": {
					"property": "message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Message Type",
			"name": "message_type",
			"type": "string",
			"default": "",
			"description": "Type",
			"routing": {
				"send": {
					"property": "message_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Model",
			"name": "model",
			"type": "string",
			"default": "",
			"description": "Related Document Model",
			"routing": {
				"send": {
					"property": "model",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Needaction",
			"name": "needaction",
			"type": "boolean",
			"default": true,
			"description": "Need Action",
			"routing": {
				"send": {
					"property": "needaction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Notified Partner Ids",
			"name": "notified_partner_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Partners with Need Action (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "notified_partner_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Parent Author Name",
			"name": "parent_author_name",
			"type": "string",
			"default": "",
			"description": "Parent Author Name",
			"routing": {
				"send": {
					"property": "parent_author_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Parent Body",
			"name": "parent_body",
			"type": "string",
			"default": "",
			"description": "Parent Body",
			"routing": {
				"send": {
					"property": "parent_body",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Parent ID",
			"name": "parent_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mail.message",
			"routing": {
				"send": {
					"property": "parent_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Partner Ids",
			"name": "partner_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Recipients (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "partner_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Pinned At",
			"name": "pinned_at",
			"type": "string",
			"default": "",
			"description": "Pinned",
			"routing": {
				"send": {
					"property": "pinned_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Preview",
			"name": "preview",
			"type": "string",
			"default": "",
			"description": "Preview",
			"routing": {
				"send": {
					"property": "preview",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Rating Value",
			"name": "rating_value",
			"type": "number",
			"default": 0,
			"description": "Rating Value",
			"routing": {
				"send": {
					"property": "rating_value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Record Alias Domain ID",
			"name": "record_alias_domain_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mail.alias.domain",
			"routing": {
				"send": {
					"property": "record_alias_domain_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Record Company ID",
			"name": "record_company_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.company",
			"routing": {
				"send": {
					"property": "record_company_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Record Name",
			"name": "record_name",
			"type": "string",
			"default": "",
			"description": "Message Record Name",
			"routing": {
				"send": {
					"property": "record_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Reply To",
			"name": "reply_to",
			"type": "string",
			"default": "",
			"description": "Reply-To",
			"routing": {
				"send": {
					"property": "reply_to",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Reply To Force New",
			"name": "reply_to_force_new",
			"type": "boolean",
			"default": true,
			"description": "No threading for answers",
			"routing": {
				"send": {
					"property": "reply_to_force_new",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Res ID",
			"name": "res_id",
			"type": "string",
			"default": "",
			"description": "Related Document ID",
			"routing": {
				"send": {
					"property": "res_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Snailmail Error",
			"name": "snailmail_error",
			"type": "boolean",
			"default": true,
			"description": "Snailmail message in error",
			"routing": {
				"send": {
					"property": "snailmail_error",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Starred",
			"name": "starred",
			"type": "boolean",
			"default": true,
			"description": "Starred",
			"routing": {
				"send": {
					"property": "starred",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Starred Partner Ids",
			"name": "starred_partner_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Favorited By (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "starred_partner_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Subject",
			"name": "subject",
			"type": "string",
			"default": "",
			"description": "Subject",
			"routing": {
				"send": {
					"property": "subject",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "Subtype ID",
			"name": "subtype_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mail.message.subtype",
			"routing": {
				"send": {
					"property": "subtype_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
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
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
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
						"Mail"
					],
					"operation": [
						"Upsert Mail Message"
					]
				}
			}
		},
		{
			"displayName": "GET /api/mail.thread",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Search Mail Thread"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"description": "Odoo domain filter (JSON array). Each condition is [field, operator, value].\n\n**Operators:**\n- `=` : equals\n- `!=` : not equals\n- `ilike` : contains (case-insensitive)\n- `like` : contains (case-sensitive)\n- `>` `<` `>=` `<=` : comparison\n- `in` : value is in list\n- `not in` : value is not in list\n\n**Examples:**\n\nExact match:\n```\n[[\"name\", \"=\", \"John\"]]\n```\n\nSearch (contains):\n```\n[[\"name\", \"ilike\", \"john\"]]\n```\n\nMultiple conditions (AND):\n```\n[[\"name\", \"ilike\", \"john\"], [\"email\", \"ilike\", \"gmail\"]]\n```\n\nMultiple values (OR):\n```\n[\"|\", [\"name\", \"=\", \"John\"], [\"name\", \"=\", \"Jane\"]]\n```\n\nFilter by state:\n```\n[[\"state\", \"in\", [\"draft\", \"sent\"]]]\n```\n\nComparison:\n```\n[[\"amount_total\", \">=\", 100000]]\n```\n\nCombined:\n```\n[[\"partner_id.name\", \"ilike\", \"admin\"], [\"state\", \"=\", \"sale\"], [\"amount_total\", \">\", 50000]]\n```\n\n**Tip:** Use `GET /api/{model}/fields` to see available field names and types.",
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
						"Mail"
					],
					"operation": [
						"Search Mail Thread"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "id",
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
						"Mail"
					],
					"operation": [
						"Search Mail Thread"
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
						"Mail"
					],
					"operation": [
						"Search Mail Thread"
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
						"Mail"
					],
					"operation": [
						"Search Mail Thread"
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
						"Mail"
					],
					"operation": [
						"Search Mail Thread"
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
						"Mail"
					],
					"operation": [
						"Search Mail Thread"
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
						"Mail"
					],
					"operation": [
						"Search Mail Thread"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/mail.thread",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mail"
					],
					"operation": [
						"Upsert Mail Thread"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{\n  \"id\": 1\n}",
			"description": "Search criteria to find existing record by Thread ID",
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
						"Mail"
					],
					"operation": [
						"Upsert Mail Thread"
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
						"Mail"
					],
					"operation": [
						"Upsert Mail Thread"
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
						"Mail"
					],
					"operation": [
						"Upsert Mail Thread"
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
						"Mail"
					],
					"operation": [
						"Upsert Mail Thread"
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
						"Mail"
					],
					"operation": [
						"Upsert Mail Thread"
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
						"Mail"
					],
					"operation": [
						"Upsert Mail Thread"
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
						"Mail"
					],
					"operation": [
						"Upsert Mail Thread"
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
						"Mail"
					],
					"operation": [
						"Upsert Mail Thread"
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
						"Mail"
					],
					"operation": [
						"Upsert Mail Thread"
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
						"Mail"
					],
					"operation": [
						"Upsert Mail Thread"
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
						"Mail"
					],
					"operation": [
						"Upsert Mail Thread"
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
						"Mail"
					],
					"operation": [
						"Upsert Mail Thread"
					]
				}
			}
		},
];
