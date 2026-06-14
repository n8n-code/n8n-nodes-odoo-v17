import type { INodeProperties } from 'n8n-workflow';

export const uomDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Uom"
					]
				}
			},
			"options": [
				{
					"name": "Search Uom Category",
					"value": "Search Uom Category",
					"action": "Search & read Product UoM Categories",
					"description": "Search and read uom.category records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/uom.category"
						}
					}
				},
				{
					"name": "Upsert Uom Category",
					"value": "Upsert Uom Category",
					"action": "Upsert Category",
					"description": "Create or update uom.category record.\n\nSearch by name (UoM Category Name) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/uom.category"
						}
					}
				},
				{
					"name": "Search Uom Uom",
					"value": "Search Uom Uom",
					"action": "Search & read Product Unit of Measure",
					"description": "Search and read uom.uom records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/uom.uom"
						}
					}
				},
				{
					"name": "Upsert Uom Uom",
					"value": "Upsert Uom Uom",
					"action": "Upsert Uom",
					"description": "Create or update uom.uom record.\n\nSearch by name (UoM Name) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/uom.uom"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/uom.category",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Uom"
					],
					"operation": [
						"Search Uom Category"
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
						"Uom"
					],
					"operation": [
						"Search Uom Category"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,is_current_group_of_ids,id",
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
						"Uom"
					],
					"operation": [
						"Search Uom Category"
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
						"Uom"
					],
					"operation": [
						"Search Uom Category"
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
						"Uom"
					],
					"operation": [
						"Search Uom Category"
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
						"Uom"
					],
					"operation": [
						"Search Uom Category"
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
						"Uom"
					],
					"operation": [
						"Search Uom Category"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/uom.category",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Uom"
					],
					"operation": [
						"Upsert Uom Category"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{}",
			"description": "Search criteria to find existing record by UoM Category Name",
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
						"Uom"
					],
					"operation": [
						"Upsert Uom Category"
					]
				}
			}
		},
		{
			"displayName": "Is Pos Groupable",
			"name": "is_pos_groupable",
			"type": "boolean",
			"default": true,
			"description": "Group Products in POS",
			"routing": {
				"send": {
					"property": "is_pos_groupable",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Uom"
					],
					"operation": [
						"Upsert Uom Category"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Unit of Measure Category",
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
						"Uom"
					],
					"operation": [
						"Upsert Uom Category"
					]
				}
			}
		},
		{
			"displayName": "Reference Uom ID",
			"name": "reference_uom_id",
			"type": "number",
			"default": 0,
			"description": "ID of related uom.uom",
			"routing": {
				"send": {
					"property": "reference_uom_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Uom"
					],
					"operation": [
						"Upsert Uom Category"
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
						"Uom"
					],
					"operation": [
						"Upsert Uom Category"
					]
				}
			}
		},
		{
			"displayName": "GET /api/uom.uom",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Uom"
					],
					"operation": [
						"Search Uom Uom"
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
						"Uom"
					],
					"operation": [
						"Search Uom Uom"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,category_id,factor,id",
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
						"Uom"
					],
					"operation": [
						"Search Uom Uom"
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
						"Uom"
					],
					"operation": [
						"Search Uom Uom"
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
						"Uom"
					],
					"operation": [
						"Search Uom Uom"
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
						"Uom"
					],
					"operation": [
						"Search Uom Uom"
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
						"Uom"
					],
					"operation": [
						"Search Uom Uom"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/uom.uom",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Uom"
					],
					"operation": [
						"Upsert Uom Uom"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{}",
			"description": "Search criteria to find existing record by UoM Name",
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
						"Uom"
					],
					"operation": [
						"Upsert Uom Uom"
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
						"Uom"
					],
					"operation": [
						"Upsert Uom Uom"
					]
				}
			}
		},
		{
			"displayName": "Category ID",
			"name": "category_id",
			"type": "number",
			"default": 0,
			"description": "ID of related uom.category",
			"routing": {
				"send": {
					"property": "category_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Uom"
					],
					"operation": [
						"Upsert Uom Uom"
					]
				}
			}
		},
		{
			"displayName": "Color",
			"name": "color",
			"type": "number",
			"default": 0,
			"description": "Color",
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
						"Uom"
					],
					"operation": [
						"Upsert Uom Uom"
					]
				}
			}
		},
		{
			"displayName": "Factor",
			"name": "factor",
			"type": "number",
			"default": 0,
			"description": "Ratio",
			"routing": {
				"send": {
					"property": "factor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Uom"
					],
					"operation": [
						"Upsert Uom Uom"
					]
				}
			}
		},
		{
			"displayName": "Factor Inv",
			"name": "factor_inv",
			"type": "number",
			"default": 0,
			"description": "Bigger Ratio",
			"routing": {
				"send": {
					"property": "factor_inv",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Uom"
					],
					"operation": [
						"Upsert Uom Uom"
					]
				}
			}
		},
		{
			"displayName": "Fiscal Country Codes",
			"name": "fiscal_country_codes",
			"type": "string",
			"default": "",
			"description": "Fiscal Country Codes",
			"routing": {
				"send": {
					"property": "fiscal_country_codes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Uom"
					],
					"operation": [
						"Upsert Uom Uom"
					]
				}
			}
		},
		{
			"displayName": "Is Pos Groupable",
			"name": "is_pos_groupable",
			"type": "boolean",
			"default": true,
			"description": "Group Products in POS",
			"routing": {
				"send": {
					"property": "is_pos_groupable",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Uom"
					],
					"operation": [
						"Upsert Uom Uom"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Uom Code",
			"name": "l10n_id_uom_code",
			"type": "number",
			"default": 0,
			"description": "ID of related l10n_id_efaktur_coretax.uom.code",
			"routing": {
				"send": {
					"property": "l10n_id_uom_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Uom"
					],
					"operation": [
						"Upsert Uom Uom"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Unit of Measure",
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
						"Uom"
					],
					"operation": [
						"Upsert Uom Uom"
					]
				}
			}
		},
		{
			"displayName": "Ratio",
			"name": "ratio",
			"type": "number",
			"default": 0,
			"description": "Combined Ratio",
			"routing": {
				"send": {
					"property": "ratio",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Uom"
					],
					"operation": [
						"Upsert Uom Uom"
					]
				}
			}
		},
		{
			"displayName": "Rounding",
			"name": "rounding",
			"type": "number",
			"default": 0,
			"description": "Rounding Precision",
			"routing": {
				"send": {
					"property": "rounding",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Uom"
					],
					"operation": [
						"Upsert Uom Uom"
					]
				}
			}
		},
		{
			"displayName": "Uom Type",
			"name": "uom_type",
			"type": "string",
			"default": "",
			"description": "Type",
			"routing": {
				"send": {
					"property": "uom_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Uom"
					],
					"operation": [
						"Upsert Uom Uom"
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
						"Uom"
					],
					"operation": [
						"Upsert Uom Uom"
					]
				}
			}
		},
];
