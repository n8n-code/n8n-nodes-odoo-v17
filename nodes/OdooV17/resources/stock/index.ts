import type { INodeProperties } from 'n8n-workflow';

export const stockDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					]
				}
			},
			"options": [
				{
					"name": "Search Stock Location",
					"value": "Search Stock Location",
					"action": "Search & read Inventory Locations",
					"description": "Search and read stock.location records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/stock.location"
						}
					}
				},
				{
					"name": "Upsert Stock Location",
					"value": "Upsert Stock Location",
					"action": "Upsert Location",
					"description": "Create or update stock.location record.\n\nSearch by complete_name (Full Location Path) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/stock.location"
						}
					}
				},
				{
					"name": "Search Stock Move",
					"value": "Search Stock Move",
					"action": "Search & read Stock Move",
					"description": "Search and read stock.move records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/stock.move"
						}
					}
				},
				{
					"name": "Upsert Stock Move",
					"value": "Upsert Stock Move",
					"action": "Upsert Move",
					"description": "Create or update stock.move record.\n\nSearch by name (Move Reference) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/stock.move"
						}
					}
				},
				{
					"name": "Search Stock Move Line",
					"value": "Search Stock Move Line",
					"action": "Search & read Product Moves (Stock Move Line)",
					"description": "Search and read stock.move.line records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/stock.move.line"
						}
					}
				},
				{
					"name": "Upsert Stock Move Line",
					"value": "Upsert Stock Move Line",
					"action": "Upsert Line",
					"description": "Create or update stock.move.line record.\n\nSearch by name (Move Line Description) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/stock.move.line"
						}
					}
				},
				{
					"name": "Search Stock Picking",
					"value": "Search Stock Picking",
					"action": "Search & read Transfer",
					"description": "Search and read stock.picking records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/stock.picking"
						}
					}
				},
				{
					"name": "Upsert Stock Picking",
					"value": "Upsert Stock Picking",
					"action": "Upsert Picking",
					"description": "Create or update stock.picking record.\n\nSearch by name (Picking Reference) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/stock.picking"
						}
					}
				},
				{
					"name": "Search Stock Picking Type",
					"value": "Search Stock Picking Type",
					"action": "Search & read Picking Type",
					"description": "Search and read stock.picking.type records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/stock.picking.type"
						}
					}
				},
				{
					"name": "Upsert Stock Picking Type",
					"value": "Upsert Stock Picking Type",
					"action": "Upsert Type",
					"description": "Create or update stock.picking.type record.\n\nSearch by name (Picking Type Name) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/stock.picking.type"
						}
					}
				},
				{
					"name": "Search Stock Quant",
					"value": "Search Stock Quant",
					"action": "Search & read Quants",
					"description": "Search and read stock.quant records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/stock.quant"
						}
					}
				},
				{
					"name": "Upsert Stock Quant",
					"value": "Upsert Stock Quant",
					"action": "Upsert Quant",
					"description": "Create or update stock.quant record.\n\nSearch by id (Quant ID) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/stock.quant"
						}
					}
				},
				{
					"name": "Search Stock Warehouse",
					"value": "Search Stock Warehouse",
					"action": "Search & read Warehouse",
					"description": "Search and read stock.warehouse records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/stock.warehouse"
						}
					}
				},
				{
					"name": "Upsert Stock Warehouse",
					"value": "Upsert Stock Warehouse",
					"action": "Upsert Warehouse",
					"description": "Create or update stock.warehouse record.\n\nSearch by name (Warehouse Name) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/stock.warehouse"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/stock.location",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Search Stock Location"
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
						"Stock"
					],
					"operation": [
						"Search Stock Location"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,complete_usage,usage,id",
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
						"Stock"
					],
					"operation": [
						"Search Stock Location"
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
						"Stock"
					],
					"operation": [
						"Search Stock Location"
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
						"Stock"
					],
					"operation": [
						"Search Stock Location"
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
						"Stock"
					],
					"operation": [
						"Search Stock Location"
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
						"Stock"
					],
					"operation": [
						"Search Stock Location"
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
						"Stock"
					],
					"operation": [
						"Search Stock Location"
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
						"Stock"
					],
					"operation": [
						"Search Stock Location"
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
						"Stock"
					],
					"operation": [
						"Search Stock Location"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/stock.location",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{\n  \"complete_name\": \"WH/Stock\"\n}",
			"description": "Search criteria to find existing record by Full Location Path",
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
					]
				}
			}
		},
		{
			"displayName": "Barcode",
			"name": "barcode",
			"type": "string",
			"default": "",
			"description": "Barcode",
			"routing": {
				"send": {
					"property": "barcode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
					]
				}
			}
		},
		{
			"displayName": "Child Internal Location Ids",
			"name": "child_internal_location_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Internal locations among descendants (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "child_internal_location_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "comment",
			"type": "string",
			"default": "",
			"description": "Additional Information",
			"routing": {
				"send": {
					"property": "comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
					]
				}
			}
		},
		{
			"displayName": "Complete Name",
			"name": "complete_name",
			"type": "string",
			"default": "",
			"description": "Full Location Name",
			"routing": {
				"send": {
					"property": "complete_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
					]
				}
			}
		},
		{
			"displayName": "Cyclic Inventory Frequency",
			"name": "cyclic_inventory_frequency",
			"type": "number",
			"default": 0,
			"description": "Inventory Frequency (Days)",
			"routing": {
				"send": {
					"property": "cyclic_inventory_frequency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
					]
				}
			}
		},
		{
			"displayName": "Forecast Weight",
			"name": "forecast_weight",
			"type": "number",
			"default": 0,
			"description": "Forecasted Weight",
			"routing": {
				"send": {
					"property": "forecast_weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
					]
				}
			}
		},
		{
			"displayName": "Last Inventory Date",
			"name": "last_inventory_date",
			"type": "string",
			"default": "",
			"description": "Last Effective Inventory",
			"routing": {
				"send": {
					"property": "last_inventory_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
					]
				}
			}
		},
		{
			"displayName": "Location ID",
			"name": "location_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "location_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Location Name",
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
					]
				}
			}
		},
		{
			"displayName": "Net Weight",
			"name": "net_weight",
			"type": "number",
			"default": 0,
			"description": "Net Weight",
			"routing": {
				"send": {
					"property": "net_weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
					]
				}
			}
		},
		{
			"displayName": "Next Inventory Date",
			"name": "next_inventory_date",
			"type": "string",
			"default": "",
			"description": "Next Expected Inventory",
			"routing": {
				"send": {
					"property": "next_inventory_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
					]
				}
			}
		},
		{
			"displayName": "Parent Path",
			"name": "parent_path",
			"type": "string",
			"default": "",
			"description": "Parent Path",
			"routing": {
				"send": {
					"property": "parent_path",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
					]
				}
			}
		},
		{
			"displayName": "Posx",
			"name": "posx",
			"type": "number",
			"default": 0,
			"description": "Corridor (X)",
			"routing": {
				"send": {
					"property": "posx",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
					]
				}
			}
		},
		{
			"displayName": "Posy",
			"name": "posy",
			"type": "number",
			"default": 0,
			"description": "Shelves (Y)",
			"routing": {
				"send": {
					"property": "posy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
					]
				}
			}
		},
		{
			"displayName": "Posz",
			"name": "posz",
			"type": "number",
			"default": 0,
			"description": "Height (Z)",
			"routing": {
				"send": {
					"property": "posz",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
					]
				}
			}
		},
		{
			"displayName": "Removal Strategy ID",
			"name": "removal_strategy_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.removal",
			"routing": {
				"send": {
					"property": "removal_strategy_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
					]
				}
			}
		},
		{
			"displayName": "Replenish Location",
			"name": "replenish_location",
			"type": "boolean",
			"default": true,
			"description": "Replenish Location",
			"routing": {
				"send": {
					"property": "replenish_location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
					]
				}
			}
		},
		{
			"displayName": "Return Location",
			"name": "return_location",
			"type": "boolean",
			"default": true,
			"description": "Is a Return Location?",
			"routing": {
				"send": {
					"property": "return_location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
					]
				}
			}
		},
		{
			"displayName": "Scrap Location",
			"name": "scrap_location",
			"type": "boolean",
			"default": true,
			"description": "Is a Scrap Location?",
			"routing": {
				"send": {
					"property": "scrap_location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
					]
				}
			}
		},
		{
			"displayName": "Storage Category ID",
			"name": "storage_category_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.storage.category",
			"routing": {
				"send": {
					"property": "storage_category_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
					]
				}
			}
		},
		{
			"displayName": "Usage",
			"name": "usage",
			"type": "string",
			"default": "",
			"description": "Location Type",
			"routing": {
				"send": {
					"property": "usage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
					]
				}
			}
		},
		{
			"displayName": "Valuation In Account ID",
			"name": "valuation_in_account_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "valuation_in_account_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
					]
				}
			}
		},
		{
			"displayName": "Valuation Out Account ID",
			"name": "valuation_out_account_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "valuation_out_account_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
					]
				}
			}
		},
		{
			"displayName": "Warehouse ID",
			"name": "warehouse_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.warehouse",
			"routing": {
				"send": {
					"property": "warehouse_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Location"
					]
				}
			}
		},
		{
			"displayName": "GET /api/stock.move",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Search Stock Move"
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
						"Stock"
					],
					"operation": [
						"Search Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,state,product_id,product_uom_qty,id",
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
						"Stock"
					],
					"operation": [
						"Search Stock Move"
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
						"Stock"
					],
					"operation": [
						"Search Stock Move"
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
						"Stock"
					],
					"operation": [
						"Search Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order, e.g. 'name asc' or 'create_date desc'",
			"default": "create_date desc",
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
						"Stock"
					],
					"operation": [
						"Search Stock Move"
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
						"Stock"
					],
					"operation": [
						"Search Stock Move"
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
						"Stock"
					],
					"operation": [
						"Search Stock Move"
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
						"Stock"
					],
					"operation": [
						"Search Stock Move"
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
						"Stock"
					],
					"operation": [
						"Search Stock Move"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/stock.move",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{\n  \"name\": \"Move/001\"\n}",
			"description": "Search criteria to find existing record by Move Reference",
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Additional",
			"name": "additional",
			"type": "boolean",
			"default": true,
			"description": "Whether the move was added after the picking's confirmation",
			"routing": {
				"send": {
					"property": "additional",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Analytic Account Line Ids",
			"name": "analytic_account_line_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Analytic Account Line (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "analytic_account_line_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Availability",
			"name": "availability",
			"type": "number",
			"default": 0,
			"description": "Forecasted Quantity",
			"routing": {
				"send": {
					"property": "availability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Bom Line ID",
			"name": "bom_line_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mrp.bom.line",
			"routing": {
				"send": {
					"property": "bom_line_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Byproduct ID",
			"name": "byproduct_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mrp.bom.byproduct",
			"routing": {
				"send": {
					"property": "byproduct_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Consume Unbuild ID",
			"name": "consume_unbuild_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mrp.unbuild",
			"routing": {
				"send": {
					"property": "consume_unbuild_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Cost Share",
			"name": "cost_share",
			"type": "number",
			"default": 0,
			"description": "Cost Share (%)",
			"routing": {
				"send": {
					"property": "cost_share",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Created Production ID",
			"name": "created_production_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mrp.production",
			"routing": {
				"send": {
					"property": "created_production_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Created Purchase Line Ids",
			"name": "created_purchase_line_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Created Purchase Order Lines (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "created_purchase_line_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"type": "string",
			"default": "",
			"description": "Date Scheduled",
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Date Deadline",
			"name": "date_deadline",
			"type": "string",
			"default": "",
			"description": "Deadline",
			"routing": {
				"send": {
					"property": "date_deadline",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Delay Alert Date",
			"name": "delay_alert_date",
			"type": "string",
			"default": "",
			"description": "Delay Alert Date",
			"routing": {
				"send": {
					"property": "delay_alert_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Description Bom Line",
			"name": "description_bom_line",
			"type": "string",
			"default": "",
			"description": "Kit",
			"routing": {
				"send": {
					"property": "description_bom_line",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Description Picking",
			"name": "description_picking",
			"type": "string",
			"default": "",
			"description": "Description of Picking",
			"routing": {
				"send": {
					"property": "description_picking",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Display Assign Serial",
			"name": "display_assign_serial",
			"type": "boolean",
			"default": true,
			"description": "Display Assign Serial",
			"routing": {
				"send": {
					"property": "display_assign_serial",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Display Import Lot",
			"name": "display_import_lot",
			"type": "boolean",
			"default": true,
			"description": "Display Import Lot",
			"routing": {
				"send": {
					"property": "display_import_lot",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Forecast Availability",
			"name": "forecast_availability",
			"type": "number",
			"default": 0,
			"description": "Forecast Availability",
			"routing": {
				"send": {
					"property": "forecast_availability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Forecast Expected Date",
			"name": "forecast_expected_date",
			"type": "string",
			"default": "",
			"description": "Forecasted Expected date",
			"routing": {
				"send": {
					"property": "forecast_expected_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "group_id",
			"type": "number",
			"default": 0,
			"description": "ID of related procurement.group",
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Has Tracking",
			"name": "has_tracking",
			"type": "string",
			"default": "",
			"description": "Product with Tracking",
			"routing": {
				"send": {
					"property": "has_tracking",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Is Done",
			"name": "is_done",
			"type": "boolean",
			"default": true,
			"description": "Done",
			"routing": {
				"send": {
					"property": "is_done",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Is Initial Demand Editable",
			"name": "is_initial_demand_editable",
			"type": "boolean",
			"default": true,
			"description": "Is initial demand editable",
			"routing": {
				"send": {
					"property": "is_initial_demand_editable",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Is Inventory",
			"name": "is_inventory",
			"type": "boolean",
			"default": true,
			"description": "Inventory",
			"routing": {
				"send": {
					"property": "is_inventory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Is Locked",
			"name": "is_locked",
			"type": "boolean",
			"default": true,
			"description": "Is Locked",
			"routing": {
				"send": {
					"property": "is_locked",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Is Quantity Done Editable",
			"name": "is_quantity_done_editable",
			"type": "boolean",
			"default": true,
			"description": "Is quantity done editable",
			"routing": {
				"send": {
					"property": "is_quantity_done_editable",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Location Dest ID",
			"name": "location_dest_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "location_dest_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Location Dest Usage",
			"name": "location_dest_usage",
			"type": "string",
			"default": "",
			"description": "Destination Location Type",
			"routing": {
				"send": {
					"property": "location_dest_usage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Location ID",
			"name": "location_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "location_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Location Usage",
			"name": "location_usage",
			"type": "string",
			"default": "",
			"description": "Source Location Type",
			"routing": {
				"send": {
					"property": "location_usage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Lot Ids",
			"name": "lot_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Serial Numbers (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "lot_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Manual Consumption",
			"name": "manual_consumption",
			"type": "boolean",
			"default": true,
			"description": "Manual Consumption",
			"routing": {
				"send": {
					"property": "manual_consumption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Move Dest Ids",
			"name": "move_dest_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Destination Moves (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "move_dest_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Move Lines Count",
			"name": "move_lines_count",
			"type": "number",
			"default": 0,
			"description": "Move Lines Count",
			"routing": {
				"send": {
					"property": "move_lines_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Move Orig Ids",
			"name": "move_orig_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Original Move (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "move_orig_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Description",
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Next Serial",
			"name": "next_serial",
			"type": "string",
			"default": "",
			"description": "First SN",
			"routing": {
				"send": {
					"property": "next_serial",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Next Serial Count",
			"name": "next_serial_count",
			"type": "number",
			"default": 0,
			"description": "Number of SN",
			"routing": {
				"send": {
					"property": "next_serial_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Operation ID",
			"name": "operation_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mrp.routing.workcenter",
			"routing": {
				"send": {
					"property": "operation_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Order Finished Lot ID",
			"name": "order_finished_lot_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.lot",
			"routing": {
				"send": {
					"property": "order_finished_lot_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Orderpoint ID",
			"name": "orderpoint_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.warehouse.orderpoint",
			"routing": {
				"send": {
					"property": "orderpoint_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Origin",
			"name": "origin",
			"type": "string",
			"default": "",
			"description": "Source Document",
			"routing": {
				"send": {
					"property": "origin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Origin Returned Move ID",
			"name": "origin_returned_move_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.move",
			"routing": {
				"send": {
					"property": "origin_returned_move_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Package Level ID",
			"name": "package_level_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.package_level",
			"routing": {
				"send": {
					"property": "package_level_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Picked",
			"name": "picked",
			"type": "boolean",
			"default": true,
			"description": "Picked",
			"routing": {
				"send": {
					"property": "picked",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Picking Code",
			"name": "picking_code",
			"type": "string",
			"default": "",
			"description": "Type of Operation",
			"routing": {
				"send": {
					"property": "picking_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Picking ID",
			"name": "picking_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.picking",
			"routing": {
				"send": {
					"property": "picking_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Picking Type Entire Packs",
			"name": "picking_type_entire_packs",
			"type": "boolean",
			"default": true,
			"description": "Move Entire Packages",
			"routing": {
				"send": {
					"property": "picking_type_entire_packs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Picking Type ID",
			"name": "picking_type_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.picking.type",
			"routing": {
				"send": {
					"property": "picking_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"type": "string",
			"default": "",
			"description": "Priority",
			"routing": {
				"send": {
					"property": "priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Procure Method",
			"name": "procure_method",
			"type": "string",
			"default": "",
			"description": "Supply Method",
			"routing": {
				"send": {
					"property": "procure_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Product Packaging ID",
			"name": "product_packaging_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.packaging",
			"routing": {
				"send": {
					"property": "product_packaging_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Product Packaging Qty",
			"name": "product_packaging_qty",
			"type": "number",
			"default": 0,
			"description": "Reserved Packaging Quantity",
			"routing": {
				"send": {
					"property": "product_packaging_qty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Product Packaging Quantity",
			"name": "product_packaging_quantity",
			"type": "number",
			"default": 0,
			"description": "Done Packaging Quantity",
			"routing": {
				"send": {
					"property": "product_packaging_quantity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Product Qty",
			"name": "product_qty",
			"type": "number",
			"default": 0,
			"description": "Real Quantity",
			"routing": {
				"send": {
					"property": "product_qty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Product Qty Available",
			"name": "product_qty_available",
			"type": "number",
			"default": 0,
			"description": "Product On Hand Quantity",
			"routing": {
				"send": {
					"property": "product_qty_available",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Product Tmpl ID",
			"name": "product_tmpl_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.template",
			"routing": {
				"send": {
					"property": "product_tmpl_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Product Type",
			"name": "product_type",
			"type": "string",
			"default": "",
			"description": "Product Type",
			"routing": {
				"send": {
					"property": "product_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Product Uom",
			"name": "product_uom",
			"type": "number",
			"default": 0,
			"description": "ID of related uom.uom",
			"routing": {
				"send": {
					"property": "product_uom",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Product Uom Qty",
			"name": "product_uom_qty",
			"type": "number",
			"default": 0,
			"description": "Demand",
			"routing": {
				"send": {
					"property": "product_uom_qty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Product Virtual Available",
			"name": "product_virtual_available",
			"type": "number",
			"default": 0,
			"description": "Product Forecasted Quantity",
			"routing": {
				"send": {
					"property": "product_virtual_available",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Production ID",
			"name": "production_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mrp.production",
			"routing": {
				"send": {
					"property": "production_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Propagate Cancel",
			"name": "propagate_cancel",
			"type": "boolean",
			"default": true,
			"description": "Propagate cancel and split",
			"routing": {
				"send": {
					"property": "propagate_cancel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Raw Material Production ID",
			"name": "raw_material_production_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mrp.production",
			"routing": {
				"send": {
					"property": "raw_material_production_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"description": "Reference",
			"routing": {
				"send": {
					"property": "reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Reservation Date",
			"name": "reservation_date",
			"type": "string",
			"default": "",
			"description": "Date to Reserve",
			"routing": {
				"send": {
					"property": "reservation_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Restrict Partner ID",
			"name": "restrict_partner_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "restrict_partner_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Route Ids",
			"name": "route_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Destination route (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "route_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Rule ID",
			"name": "rule_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.rule",
			"routing": {
				"send": {
					"property": "rule_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Sale Line ID",
			"name": "sale_line_id",
			"type": "number",
			"default": 0,
			"description": "ID of related sale.order.line",
			"routing": {
				"send": {
					"property": "sale_line_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Scrap ID",
			"name": "scrap_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.scrap",
			"routing": {
				"send": {
					"property": "scrap_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Scrapped",
			"name": "scrapped",
			"type": "boolean",
			"default": true,
			"description": "Scrapped",
			"routing": {
				"send": {
					"property": "scrapped",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Should Consume Qty",
			"name": "should_consume_qty",
			"type": "number",
			"default": 0,
			"description": "Quantity To Consume",
			"routing": {
				"send": {
					"property": "should_consume_qty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Show Details Visible",
			"name": "show_details_visible",
			"type": "boolean",
			"default": true,
			"description": "Details Visible",
			"routing": {
				"send": {
					"property": "show_details_visible",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Show Lots M 2 O",
			"name": "show_lots_m2o",
			"type": "boolean",
			"default": true,
			"description": "Show lot_id",
			"routing": {
				"send": {
					"property": "show_lots_m2o",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Show Lots Text",
			"name": "show_lots_text",
			"type": "boolean",
			"default": true,
			"description": "Show lot_name",
			"routing": {
				"send": {
					"property": "show_lots_text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Show Operations",
			"name": "show_operations",
			"type": "boolean",
			"default": true,
			"description": "Show Detailed Operations",
			"routing": {
				"send": {
					"property": "show_operations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Show Quant",
			"name": "show_quant",
			"type": "boolean",
			"default": true,
			"description": "Show Quant",
			"routing": {
				"send": {
					"property": "show_quant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Show Reserved",
			"name": "show_reserved",
			"type": "boolean",
			"default": true,
			"description": "Show Reserved",
			"routing": {
				"send": {
					"property": "show_reserved",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "To Refund",
			"name": "to_refund",
			"type": "boolean",
			"default": true,
			"description": "Update quantities on SO/PO",
			"routing": {
				"send": {
					"property": "to_refund",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Unbuild ID",
			"name": "unbuild_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mrp.unbuild",
			"routing": {
				"send": {
					"property": "unbuild_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Unit Factor",
			"name": "unit_factor",
			"type": "number",
			"default": 0,
			"description": "Unit Factor",
			"routing": {
				"send": {
					"property": "unit_factor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Warehouse ID",
			"name": "warehouse_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.warehouse",
			"routing": {
				"send": {
					"property": "warehouse_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"type": "number",
			"default": 0,
			"description": "Weight",
			"routing": {
				"send": {
					"property": "weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "Workorder ID",
			"name": "workorder_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mrp.workorder",
			"routing": {
				"send": {
					"property": "workorder_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Move"
					]
				}
			}
		},
		{
			"displayName": "GET /api/stock.move.line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Search Stock Move Line"
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
						"Stock"
					],
					"operation": [
						"Search Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,product_id,state,qty_done,id",
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
						"Stock"
					],
					"operation": [
						"Search Stock Move Line"
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
						"Stock"
					],
					"operation": [
						"Search Stock Move Line"
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
						"Stock"
					],
					"operation": [
						"Search Stock Move Line"
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
						"Stock"
					],
					"operation": [
						"Search Stock Move Line"
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
						"Stock"
					],
					"operation": [
						"Search Stock Move Line"
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
						"Stock"
					],
					"operation": [
						"Search Stock Move Line"
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
						"Stock"
					],
					"operation": [
						"Search Stock Move Line"
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
						"Stock"
					],
					"operation": [
						"Search Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/stock.move.line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{\n  \"name\": \"Move/001-1\"\n}",
			"description": "Search criteria to find existing record by Move Line Description",
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Carrier ID",
			"name": "carrier_id",
			"type": "number",
			"default": 0,
			"description": "ID of related delivery.carrier",
			"routing": {
				"send": {
					"property": "carrier_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Consume Line Ids",
			"name": "consume_line_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Consume Line (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "consume_line_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Description Bom Line",
			"name": "description_bom_line",
			"type": "string",
			"default": "",
			"description": "Kit",
			"routing": {
				"send": {
					"property": "description_bom_line",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Description Picking",
			"name": "description_picking",
			"type": "string",
			"default": "",
			"description": "Description picking",
			"routing": {
				"send": {
					"property": "description_picking",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Destination Country Code",
			"name": "destination_country_code",
			"type": "string",
			"default": "",
			"description": "Destination Country",
			"routing": {
				"send": {
					"property": "destination_country_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Is Inventory",
			"name": "is_inventory",
			"type": "boolean",
			"default": true,
			"description": "Inventory",
			"routing": {
				"send": {
					"property": "is_inventory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Is Locked",
			"name": "is_locked",
			"type": "boolean",
			"default": true,
			"description": "Is Locked",
			"routing": {
				"send": {
					"property": "is_locked",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Location Dest ID",
			"name": "location_dest_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "location_dest_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Location Dest Usage",
			"name": "location_dest_usage",
			"type": "string",
			"default": "",
			"description": "Destination Location Type",
			"routing": {
				"send": {
					"property": "location_dest_usage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Location ID",
			"name": "location_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "location_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Location Usage",
			"name": "location_usage",
			"type": "string",
			"default": "",
			"description": "Source Location Type",
			"routing": {
				"send": {
					"property": "location_usage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Lot ID",
			"name": "lot_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.lot",
			"routing": {
				"send": {
					"property": "lot_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Lot Name",
			"name": "lot_name",
			"type": "string",
			"default": "",
			"description": "Lot/Serial Number Name",
			"routing": {
				"send": {
					"property": "lot_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Lots Visible",
			"name": "lots_visible",
			"type": "boolean",
			"default": true,
			"description": "Lots Visible",
			"routing": {
				"send": {
					"property": "lots_visible",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Move ID",
			"name": "move_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.move",
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Origin",
			"name": "origin",
			"type": "string",
			"default": "",
			"description": "Source",
			"routing": {
				"send": {
					"property": "origin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Owner ID",
			"name": "owner_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "owner_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Package ID",
			"name": "package_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.quant.package",
			"routing": {
				"send": {
					"property": "package_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Package Level ID",
			"name": "package_level_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.package_level",
			"routing": {
				"send": {
					"property": "package_level_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Picked",
			"name": "picked",
			"type": "boolean",
			"default": true,
			"description": "Picked",
			"routing": {
				"send": {
					"property": "picked",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Picking Code",
			"name": "picking_code",
			"type": "string",
			"default": "",
			"description": "Type of Operation",
			"routing": {
				"send": {
					"property": "picking_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Picking ID",
			"name": "picking_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.picking",
			"routing": {
				"send": {
					"property": "picking_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Picking Location Dest ID",
			"name": "picking_location_dest_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "picking_location_dest_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Picking Location ID",
			"name": "picking_location_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "picking_location_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Picking Partner ID",
			"name": "picking_partner_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "picking_partner_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Picking Type Entire Packs",
			"name": "picking_type_entire_packs",
			"type": "boolean",
			"default": true,
			"description": "Move Entire Packages",
			"routing": {
				"send": {
					"property": "picking_type_entire_packs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Picking Type ID",
			"name": "picking_type_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.picking.type",
			"routing": {
				"send": {
					"property": "picking_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Picking Type Use Create Lots",
			"name": "picking_type_use_create_lots",
			"type": "boolean",
			"default": true,
			"description": "Create New Lots/Serial Numbers",
			"routing": {
				"send": {
					"property": "picking_type_use_create_lots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Picking Type Use Existing Lots",
			"name": "picking_type_use_existing_lots",
			"type": "boolean",
			"default": true,
			"description": "Use Existing Lots/Serial Numbers",
			"routing": {
				"send": {
					"property": "picking_type_use_existing_lots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Produce Line Ids",
			"name": "produce_line_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Produce Line (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "produce_line_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Product Category Name",
			"name": "product_category_name",
			"type": "string",
			"default": "",
			"description": "Product Category",
			"routing": {
				"send": {
					"property": "product_category_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Product Packaging Qty",
			"name": "product_packaging_qty",
			"type": "number",
			"default": 0,
			"description": "Reserved Packaging Quantity",
			"routing": {
				"send": {
					"property": "product_packaging_qty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Production ID",
			"name": "production_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mrp.production",
			"routing": {
				"send": {
					"property": "production_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Quant ID",
			"name": "quant_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.quant",
			"routing": {
				"send": {
					"property": "quant_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Quantity Product Uom",
			"name": "quantity_product_uom",
			"type": "number",
			"default": 0,
			"description": "Quantity in Product UoM",
			"routing": {
				"send": {
					"property": "quantity_product_uom",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"description": "Reference",
			"routing": {
				"send": {
					"property": "reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Result Package ID",
			"name": "result_package_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.quant.package",
			"routing": {
				"send": {
					"property": "result_package_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Sale Price",
			"name": "sale_price",
			"type": "number",
			"default": 0,
			"description": "Sale Price",
			"routing": {
				"send": {
					"property": "sale_price",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Tracking",
			"name": "tracking",
			"type": "string",
			"default": "",
			"description": "Tracking",
			"routing": {
				"send": {
					"property": "tracking",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "Workorder ID",
			"name": "workorder_id",
			"type": "number",
			"default": 0,
			"description": "ID of related mrp.workorder",
			"routing": {
				"send": {
					"property": "workorder_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Move Line"
					]
				}
			}
		},
		{
			"displayName": "GET /api/stock.picking",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Search Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Search Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,state,partner_id,picking_type_id,id",
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
						"Stock"
					],
					"operation": [
						"Search Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Search Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Search Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order, e.g. 'name asc' or 'create_date desc'",
			"default": "scheduled_date desc",
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
						"Stock"
					],
					"operation": [
						"Search Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Search Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Search Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Search Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Search Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/stock.picking",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{\n  \"name\": \"WH/OUT/001\"\n}",
			"description": "Search criteria to find existing record by Picking Reference",
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Backorder ID",
			"name": "backorder_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.picking",
			"routing": {
				"send": {
					"property": "backorder_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Carrier ID",
			"name": "carrier_id",
			"type": "number",
			"default": 0,
			"description": "ID of related delivery.carrier",
			"routing": {
				"send": {
					"property": "carrier_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Carrier Price",
			"name": "carrier_price",
			"type": "number",
			"default": 0,
			"description": "Shipping Cost",
			"routing": {
				"send": {
					"property": "carrier_price",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Carrier Tracking Ref",
			"name": "carrier_tracking_ref",
			"type": "string",
			"default": "",
			"description": "Tracking Reference",
			"routing": {
				"send": {
					"property": "carrier_tracking_ref",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Carrier Tracking URL",
			"name": "carrier_tracking_url",
			"type": "string",
			"default": "",
			"description": "Tracking URL",
			"routing": {
				"send": {
					"property": "carrier_tracking_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"type": "string",
			"default": "",
			"description": "Creation Date",
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Date Deadline",
			"name": "date_deadline",
			"type": "string",
			"default": "",
			"description": "Deadline",
			"routing": {
				"send": {
					"property": "date_deadline",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Date Done",
			"name": "date_done",
			"type": "string",
			"default": "",
			"description": "Date of Transfer",
			"routing": {
				"send": {
					"property": "date_done",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Delay Alert Date",
			"name": "delay_alert_date",
			"type": "string",
			"default": "",
			"description": "Delay Alert Date",
			"routing": {
				"send": {
					"property": "delay_alert_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Delivery Type",
			"name": "delivery_type",
			"type": "string",
			"default": "",
			"description": "Provider",
			"routing": {
				"send": {
					"property": "delivery_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Destination Country Code",
			"name": "destination_country_code",
			"type": "string",
			"default": "",
			"description": "Destination Country",
			"routing": {
				"send": {
					"property": "destination_country_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "group_id",
			"type": "number",
			"default": 0,
			"description": "ID of related procurement.group",
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Has Deadline Issue",
			"name": "has_deadline_issue",
			"type": "boolean",
			"default": true,
			"description": "Is late",
			"routing": {
				"send": {
					"property": "has_deadline_issue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Has Kits",
			"name": "has_kits",
			"type": "boolean",
			"default": true,
			"description": "Has Kits",
			"routing": {
				"send": {
					"property": "has_kits",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Has Packages",
			"name": "has_packages",
			"type": "boolean",
			"default": true,
			"description": "Has Packages",
			"routing": {
				"send": {
					"property": "has_packages",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Has Scrap Move",
			"name": "has_scrap_move",
			"type": "boolean",
			"default": true,
			"description": "Has Scrap Moves",
			"routing": {
				"send": {
					"property": "has_scrap_move",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Has Tracking",
			"name": "has_tracking",
			"type": "boolean",
			"default": true,
			"description": "Has Tracking",
			"routing": {
				"send": {
					"property": "has_tracking",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Hide Picking Type",
			"name": "hide_picking_type",
			"type": "boolean",
			"default": true,
			"description": "Hide Picking Type",
			"routing": {
				"send": {
					"property": "hide_picking_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Is Locked",
			"name": "is_locked",
			"type": "boolean",
			"default": true,
			"description": "Is Locked",
			"routing": {
				"send": {
					"property": "is_locked",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Is Return Picking",
			"name": "is_return_picking",
			"type": "boolean",
			"default": true,
			"description": "Is Return Picking",
			"routing": {
				"send": {
					"property": "is_return_picking",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Is Signed",
			"name": "is_signed",
			"type": "boolean",
			"default": true,
			"description": "Is Signed",
			"routing": {
				"send": {
					"property": "is_signed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "JSON Popover",
			"name": "json_popover",
			"type": "string",
			"default": "",
			"description": "JSON data for the popover widget",
			"routing": {
				"send": {
					"property": "json_popover",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Location Dest ID",
			"name": "location_dest_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "location_dest_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Location ID",
			"name": "location_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "location_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Lot ID",
			"name": "lot_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.lot",
			"routing": {
				"send": {
					"property": "lot_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Move Line Exist",
			"name": "move_line_exist",
			"type": "boolean",
			"default": true,
			"description": "Has Pack Operations",
			"routing": {
				"send": {
					"property": "move_line_exist",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Move Type",
			"name": "move_type",
			"type": "string",
			"default": "",
			"description": "Shipping Policy",
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Reference",
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Note",
			"name": "note",
			"type": "string",
			"default": "",
			"description": "Notes",
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Origin",
			"name": "origin",
			"type": "string",
			"default": "",
			"description": "Source Document",
			"routing": {
				"send": {
					"property": "origin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Owner ID",
			"name": "owner_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "owner_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Package Ids",
			"name": "package_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Packages (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "package_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Picking Properties",
			"name": "picking_properties",
			"type": "string",
			"default": "",
			"description": "Properties",
			"routing": {
				"send": {
					"property": "picking_properties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Picking Type Code",
			"name": "picking_type_code",
			"type": "string",
			"default": "",
			"description": "Type of Operation",
			"routing": {
				"send": {
					"property": "picking_type_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Picking Type Entire Packs",
			"name": "picking_type_entire_packs",
			"type": "boolean",
			"default": true,
			"description": "Move Entire Packages",
			"routing": {
				"send": {
					"property": "picking_type_entire_packs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Picking Type ID",
			"name": "picking_type_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.picking.type",
			"routing": {
				"send": {
					"property": "picking_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Printed",
			"name": "printed",
			"type": "boolean",
			"default": true,
			"description": "Printed",
			"routing": {
				"send": {
					"property": "printed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"type": "string",
			"default": "",
			"description": "Priority",
			"routing": {
				"send": {
					"property": "priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Products Availability",
			"name": "products_availability",
			"type": "string",
			"default": "",
			"description": "Product Availability",
			"routing": {
				"send": {
					"property": "products_availability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Products Availability State",
			"name": "products_availability_state",
			"type": "string",
			"default": "",
			"description": "Products Availability State",
			"routing": {
				"send": {
					"property": "products_availability_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Return Count",
			"name": "return_count",
			"type": "number",
			"default": 0,
			"description": "# Returns",
			"routing": {
				"send": {
					"property": "return_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Return ID",
			"name": "return_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.picking",
			"routing": {
				"send": {
					"property": "return_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Sale ID",
			"name": "sale_id",
			"type": "number",
			"default": 0,
			"description": "ID of related sale.order",
			"routing": {
				"send": {
					"property": "sale_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Scheduled Date",
			"name": "scheduled_date",
			"type": "string",
			"default": "",
			"description": "Scheduled Date",
			"routing": {
				"send": {
					"property": "scheduled_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Shipping Weight",
			"name": "shipping_weight",
			"type": "number",
			"default": 0,
			"description": "Weight for Shipping",
			"routing": {
				"send": {
					"property": "shipping_weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Show Allocation",
			"name": "show_allocation",
			"type": "boolean",
			"default": true,
			"description": "Show Allocation",
			"routing": {
				"send": {
					"property": "show_allocation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Show Check Availability",
			"name": "show_check_availability",
			"type": "boolean",
			"default": true,
			"description": "Show Check Availability",
			"routing": {
				"send": {
					"property": "show_check_availability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Show Clear Qty Button",
			"name": "show_clear_qty_button",
			"type": "boolean",
			"default": true,
			"description": "Show Clear Qty Button",
			"routing": {
				"send": {
					"property": "show_clear_qty_button",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Show Lots Text",
			"name": "show_lots_text",
			"type": "boolean",
			"default": true,
			"description": "Show Lots Text",
			"routing": {
				"send": {
					"property": "show_lots_text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Show Operations",
			"name": "show_operations",
			"type": "boolean",
			"default": true,
			"description": "Show Detailed Operations",
			"routing": {
				"send": {
					"property": "show_operations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Show Reserved",
			"name": "show_reserved",
			"type": "boolean",
			"default": true,
			"description": "Pre-fill Detailed Operations",
			"routing": {
				"send": {
					"property": "show_reserved",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Show Set Qty Button",
			"name": "show_set_qty_button",
			"type": "boolean",
			"default": true,
			"description": "Show Set Qty Button",
			"routing": {
				"send": {
					"property": "show_set_qty_button",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Signature",
			"name": "signature",
			"type": "string",
			"default": "",
			"description": "Signature",
			"routing": {
				"send": {
					"property": "signature",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Use Create Lots",
			"name": "use_create_lots",
			"type": "boolean",
			"default": true,
			"description": "Create New Lots/Serial Numbers",
			"routing": {
				"send": {
					"property": "use_create_lots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Use Existing Lots",
			"name": "use_existing_lots",
			"type": "boolean",
			"default": true,
			"description": "Use Existing Lots/Serial Numbers",
			"routing": {
				"send": {
					"property": "use_existing_lots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"type": "number",
			"default": 0,
			"description": "Weight",
			"routing": {
				"send": {
					"property": "weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Weight Bulk",
			"name": "weight_bulk",
			"type": "number",
			"default": 0,
			"description": "Bulk Weight",
			"routing": {
				"send": {
					"property": "weight_bulk",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "Weight Uom Name",
			"name": "weight_uom_name",
			"type": "string",
			"default": "",
			"description": "Weight unit of measure label",
			"routing": {
				"send": {
					"property": "weight_uom_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking"
					]
				}
			}
		},
		{
			"displayName": "GET /api/stock.picking.type",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Search Stock Picking Type"
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
						"Stock"
					],
					"operation": [
						"Search Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,code,warehouse_id,id",
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
						"Stock"
					],
					"operation": [
						"Search Stock Picking Type"
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
						"Stock"
					],
					"operation": [
						"Search Stock Picking Type"
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
						"Stock"
					],
					"operation": [
						"Search Stock Picking Type"
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
						"Stock"
					],
					"operation": [
						"Search Stock Picking Type"
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
						"Stock"
					],
					"operation": [
						"Search Stock Picking Type"
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
						"Stock"
					],
					"operation": [
						"Search Stock Picking Type"
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
						"Stock"
					],
					"operation": [
						"Search Stock Picking Type"
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
						"Stock"
					],
					"operation": [
						"Search Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/stock.picking.type",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{\n  \"name\": \"Delivery Orders\"\n}",
			"description": "Search criteria to find existing record by Picking Type Name",
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Auto Print Delivery Slip",
			"name": "auto_print_delivery_slip",
			"type": "boolean",
			"default": true,
			"description": "Auto Print Delivery Slip",
			"routing": {
				"send": {
					"property": "auto_print_delivery_slip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Auto Print Done Mrp Lot",
			"name": "auto_print_done_mrp_lot",
			"type": "boolean",
			"default": true,
			"description": "Auto Print Produced Lot Label",
			"routing": {
				"send": {
					"property": "auto_print_done_mrp_lot",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Auto Print Done Mrp Product Labels",
			"name": "auto_print_done_mrp_product_labels",
			"type": "boolean",
			"default": true,
			"description": "Auto Print Produced Product Labels",
			"routing": {
				"send": {
					"property": "auto_print_done_mrp_product_labels",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Auto Print Done Production Order",
			"name": "auto_print_done_production_order",
			"type": "boolean",
			"default": true,
			"description": "Auto Print Done Production Order",
			"routing": {
				"send": {
					"property": "auto_print_done_production_order",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Auto Print Generated Mrp Lot",
			"name": "auto_print_generated_mrp_lot",
			"type": "boolean",
			"default": true,
			"description": "Auto Print Generated Lot/SN Label",
			"routing": {
				"send": {
					"property": "auto_print_generated_mrp_lot",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Auto Print Lot Labels",
			"name": "auto_print_lot_labels",
			"type": "boolean",
			"default": true,
			"description": "Auto Print Lot/SN Labels",
			"routing": {
				"send": {
					"property": "auto_print_lot_labels",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Auto Print Mrp Reception Report",
			"name": "auto_print_mrp_reception_report",
			"type": "boolean",
			"default": true,
			"description": "Auto Print Allocation Report",
			"routing": {
				"send": {
					"property": "auto_print_mrp_reception_report",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Auto Print Mrp Reception Report Labels",
			"name": "auto_print_mrp_reception_report_labels",
			"type": "boolean",
			"default": true,
			"description": "Auto Print Allocation Report Labels",
			"routing": {
				"send": {
					"property": "auto_print_mrp_reception_report_labels",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Auto Print Package Label",
			"name": "auto_print_package_label",
			"type": "boolean",
			"default": true,
			"description": "Auto Print Package Label",
			"routing": {
				"send": {
					"property": "auto_print_package_label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Auto Print Packages",
			"name": "auto_print_packages",
			"type": "boolean",
			"default": true,
			"description": "Auto Print Packages",
			"routing": {
				"send": {
					"property": "auto_print_packages",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Auto Print Product Labels",
			"name": "auto_print_product_labels",
			"type": "boolean",
			"default": true,
			"description": "Auto Print Product Labels",
			"routing": {
				"send": {
					"property": "auto_print_product_labels",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Auto Print Reception Report",
			"name": "auto_print_reception_report",
			"type": "boolean",
			"default": true,
			"description": "Auto Print Reception Report",
			"routing": {
				"send": {
					"property": "auto_print_reception_report",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Auto Print Reception Report Labels",
			"name": "auto_print_reception_report_labels",
			"type": "boolean",
			"default": true,
			"description": "Auto Print Reception Report Labels",
			"routing": {
				"send": {
					"property": "auto_print_reception_report_labels",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Auto Print Return Slip",
			"name": "auto_print_return_slip",
			"type": "boolean",
			"default": true,
			"description": "Auto Print Return Slip",
			"routing": {
				"send": {
					"property": "auto_print_return_slip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Auto Show Reception Report",
			"name": "auto_show_reception_report",
			"type": "boolean",
			"default": true,
			"description": "Show Reception Report at Validation",
			"routing": {
				"send": {
					"property": "auto_show_reception_report",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Barcode",
			"name": "barcode",
			"type": "string",
			"default": "",
			"description": "Barcode",
			"routing": {
				"send": {
					"property": "barcode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "code",
			"type": "string",
			"default": "",
			"description": "Type of Operation",
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Count Mo Late",
			"name": "count_mo_late",
			"type": "number",
			"default": 0,
			"description": "Number of Manufacturing Orders Late",
			"routing": {
				"send": {
					"property": "count_mo_late",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Count Mo Todo",
			"name": "count_mo_todo",
			"type": "number",
			"default": 0,
			"description": "Number of Manufacturing Orders to Process",
			"routing": {
				"send": {
					"property": "count_mo_todo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Count Mo Waiting",
			"name": "count_mo_waiting",
			"type": "number",
			"default": 0,
			"description": "Number of Manufacturing Orders Waiting",
			"routing": {
				"send": {
					"property": "count_mo_waiting",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Count Picking",
			"name": "count_picking",
			"type": "number",
			"default": 0,
			"description": "Count Picking",
			"routing": {
				"send": {
					"property": "count_picking",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Count Picking Backorders",
			"name": "count_picking_backorders",
			"type": "number",
			"default": 0,
			"description": "Count Picking Backorders",
			"routing": {
				"send": {
					"property": "count_picking_backorders",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Count Picking Draft",
			"name": "count_picking_draft",
			"type": "number",
			"default": 0,
			"description": "Count Picking Draft",
			"routing": {
				"send": {
					"property": "count_picking_draft",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Count Picking Late",
			"name": "count_picking_late",
			"type": "number",
			"default": 0,
			"description": "Count Picking Late",
			"routing": {
				"send": {
					"property": "count_picking_late",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Count Picking Ready",
			"name": "count_picking_ready",
			"type": "number",
			"default": 0,
			"description": "Count Picking Ready",
			"routing": {
				"send": {
					"property": "count_picking_ready",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Count Picking Waiting",
			"name": "count_picking_waiting",
			"type": "number",
			"default": 0,
			"description": "Count Picking Waiting",
			"routing": {
				"send": {
					"property": "count_picking_waiting",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Create Backorder",
			"name": "create_backorder",
			"type": "string",
			"default": "",
			"description": "Create Backorder",
			"routing": {
				"send": {
					"property": "create_backorder",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Default Location Dest ID",
			"name": "default_location_dest_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "default_location_dest_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Default Location Return ID",
			"name": "default_location_return_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "default_location_return_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Default Location Src ID",
			"name": "default_location_src_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "default_location_src_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Done Mrp Lot Label To Print",
			"name": "done_mrp_lot_label_to_print",
			"type": "string",
			"default": "",
			"description": "Lot/SN Label to Print",
			"routing": {
				"send": {
					"property": "done_mrp_lot_label_to_print",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Generated Mrp Lot Label To Print",
			"name": "generated_mrp_lot_label_to_print",
			"type": "string",
			"default": "",
			"description": "Generated Lot/SN Label to Print",
			"routing": {
				"send": {
					"property": "generated_mrp_lot_label_to_print",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Hide Reservation Method",
			"name": "hide_reservation_method",
			"type": "boolean",
			"default": true,
			"description": "Hide Reservation Method",
			"routing": {
				"send": {
					"property": "hide_reservation_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Lot Label Format",
			"name": "lot_label_format",
			"type": "string",
			"default": "",
			"description": "Lot Label Format to auto-print",
			"routing": {
				"send": {
					"property": "lot_label_format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Mrp Product Label To Print",
			"name": "mrp_product_label_to_print",
			"type": "string",
			"default": "",
			"description": "Product Label to Print",
			"routing": {
				"send": {
					"property": "mrp_product_label_to_print",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Operation Type",
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Package Label To Print",
			"name": "package_label_to_print",
			"type": "string",
			"default": "",
			"description": "Package Label to Print",
			"routing": {
				"send": {
					"property": "package_label_to_print",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Picking Properties Definition",
			"name": "picking_properties_definition",
			"type": "string",
			"default": "",
			"description": "Picking Properties",
			"routing": {
				"send": {
					"property": "picking_properties_definition",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Print Label",
			"name": "print_label",
			"type": "boolean",
			"default": true,
			"description": "Print Label",
			"routing": {
				"send": {
					"property": "print_label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Product Label Format",
			"name": "product_label_format",
			"type": "string",
			"default": "",
			"description": "Product Label Format to auto-print",
			"routing": {
				"send": {
					"property": "product_label_format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Reservation Days Before",
			"name": "reservation_days_before",
			"type": "number",
			"default": 0,
			"description": "Days",
			"routing": {
				"send": {
					"property": "reservation_days_before",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Reservation Days Before Priority",
			"name": "reservation_days_before_priority",
			"type": "number",
			"default": 0,
			"description": "Days when starred",
			"routing": {
				"send": {
					"property": "reservation_days_before_priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Reservation Method",
			"name": "reservation_method",
			"type": "string",
			"default": "",
			"description": "Reservation Method",
			"routing": {
				"send": {
					"property": "reservation_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Return Picking Type ID",
			"name": "return_picking_type_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.picking.type",
			"routing": {
				"send": {
					"property": "return_picking_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Sequence Code",
			"name": "sequence_code",
			"type": "string",
			"default": "",
			"description": "Sequence Prefix",
			"routing": {
				"send": {
					"property": "sequence_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Sequence ID",
			"name": "sequence_id",
			"type": "number",
			"default": 0,
			"description": "ID of related ir.sequence",
			"routing": {
				"send": {
					"property": "sequence_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Show Entire Packs",
			"name": "show_entire_packs",
			"type": "boolean",
			"default": true,
			"description": "Move Entire Packages",
			"routing": {
				"send": {
					"property": "show_entire_packs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Show Operations",
			"name": "show_operations",
			"type": "boolean",
			"default": true,
			"description": "Show Detailed Operations",
			"routing": {
				"send": {
					"property": "show_operations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Show Picking Type",
			"name": "show_picking_type",
			"type": "boolean",
			"default": true,
			"description": "Show Picking Type",
			"routing": {
				"send": {
					"property": "show_picking_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Show Reserved",
			"name": "show_reserved",
			"type": "boolean",
			"default": true,
			"description": "Pre-fill Detailed Operations",
			"routing": {
				"send": {
					"property": "show_reserved",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Use Auto Consume Components Lots",
			"name": "use_auto_consume_components_lots",
			"type": "boolean",
			"default": true,
			"description": "Consume Reserved Lots/Serial Numbers automatically",
			"routing": {
				"send": {
					"property": "use_auto_consume_components_lots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Use Create Components Lots",
			"name": "use_create_components_lots",
			"type": "boolean",
			"default": true,
			"description": "Create New Lots/Serial Numbers for Components",
			"routing": {
				"send": {
					"property": "use_create_components_lots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Use Create Lots",
			"name": "use_create_lots",
			"type": "boolean",
			"default": true,
			"description": "Create New Lots/Serial Numbers",
			"routing": {
				"send": {
					"property": "use_create_lots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Use Existing Lots",
			"name": "use_existing_lots",
			"type": "boolean",
			"default": true,
			"description": "Use Existing Lots/Serial Numbers",
			"routing": {
				"send": {
					"property": "use_existing_lots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "Warehouse ID",
			"name": "warehouse_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.warehouse",
			"routing": {
				"send": {
					"property": "warehouse_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Picking Type"
					]
				}
			}
		},
		{
			"displayName": "GET /api/stock.quant",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Search Stock Quant"
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
						"Stock"
					],
					"operation": [
						"Search Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "product_id,location_id,quantity,reserved_quantity,id",
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
						"Stock"
					],
					"operation": [
						"Search Stock Quant"
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
						"Stock"
					],
					"operation": [
						"Search Stock Quant"
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
						"Stock"
					],
					"operation": [
						"Search Stock Quant"
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
						"Stock"
					],
					"operation": [
						"Search Stock Quant"
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
						"Stock"
					],
					"operation": [
						"Search Stock Quant"
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
						"Stock"
					],
					"operation": [
						"Search Stock Quant"
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
						"Stock"
					],
					"operation": [
						"Search Stock Quant"
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
						"Stock"
					],
					"operation": [
						"Search Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/stock.quant",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
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
			"description": "Search criteria to find existing record by Quant ID",
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "Available Quantity",
			"name": "available_quantity",
			"type": "number",
			"default": 0,
			"description": "Available Quantity",
			"routing": {
				"send": {
					"property": "available_quantity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "Cost Method",
			"name": "cost_method",
			"type": "string",
			"default": "",
			"description": "Costing Method",
			"routing": {
				"send": {
					"property": "cost_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "Cyclic Inventory Frequency",
			"name": "cyclic_inventory_frequency",
			"type": "number",
			"default": 0,
			"description": "Inventory Frequency (Days)",
			"routing": {
				"send": {
					"property": "cyclic_inventory_frequency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "In Date",
			"name": "in_date",
			"type": "string",
			"default": "",
			"description": "Incoming Date",
			"routing": {
				"send": {
					"property": "in_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "Inventory Date",
			"name": "inventory_date",
			"type": "string",
			"default": "",
			"description": "Scheduled Date",
			"routing": {
				"send": {
					"property": "inventory_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "Inventory Diff Quantity",
			"name": "inventory_diff_quantity",
			"type": "number",
			"default": 0,
			"description": "Difference",
			"routing": {
				"send": {
					"property": "inventory_diff_quantity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "Inventory Quantity",
			"name": "inventory_quantity",
			"type": "number",
			"default": 0,
			"description": "Counted Quantity",
			"routing": {
				"send": {
					"property": "inventory_quantity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "Inventory Quantity Auto Apply",
			"name": "inventory_quantity_auto_apply",
			"type": "number",
			"default": 0,
			"description": "Inventoried Quantity",
			"routing": {
				"send": {
					"property": "inventory_quantity_auto_apply",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "Inventory Quantity Set",
			"name": "inventory_quantity_set",
			"type": "boolean",
			"default": true,
			"description": "Inventory Quantity Set",
			"routing": {
				"send": {
					"property": "inventory_quantity_set",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "Is Outdated",
			"name": "is_outdated",
			"type": "boolean",
			"default": true,
			"description": "Quantity has been moved since last count",
			"routing": {
				"send": {
					"property": "is_outdated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "Last Count Date",
			"name": "last_count_date",
			"type": "string",
			"default": "",
			"description": "Last Count Date",
			"routing": {
				"send": {
					"property": "last_count_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "Location ID",
			"name": "location_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "location_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "Lot ID",
			"name": "lot_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.lot",
			"routing": {
				"send": {
					"property": "lot_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "Lot Properties",
			"name": "lot_properties",
			"type": "string",
			"default": "",
			"description": "Properties",
			"routing": {
				"send": {
					"property": "lot_properties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "On Hand",
			"name": "on_hand",
			"type": "boolean",
			"default": true,
			"description": "On Hand",
			"routing": {
				"send": {
					"property": "on_hand",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "Owner ID",
			"name": "owner_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.partner",
			"routing": {
				"send": {
					"property": "owner_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "Package ID",
			"name": "package_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.quant.package",
			"routing": {
				"send": {
					"property": "package_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"type": "string",
			"default": "",
			"description": "Favorite",
			"routing": {
				"send": {
					"property": "priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "Product Categ ID",
			"name": "product_categ_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.category",
			"routing": {
				"send": {
					"property": "product_categ_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "Product Tmpl ID",
			"name": "product_tmpl_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.template",
			"routing": {
				"send": {
					"property": "product_tmpl_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "Reserved Quantity",
			"name": "reserved_quantity",
			"type": "number",
			"default": 0,
			"description": "Reserved Quantity",
			"routing": {
				"send": {
					"property": "reserved_quantity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "Sn Duplicated",
			"name": "sn_duplicated",
			"type": "boolean",
			"default": true,
			"description": "Duplicated Serial Number",
			"routing": {
				"send": {
					"property": "sn_duplicated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "Storage Category ID",
			"name": "storage_category_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.storage.category",
			"routing": {
				"send": {
					"property": "storage_category_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "Tracking",
			"name": "tracking",
			"type": "string",
			"default": "",
			"description": "Tracking",
			"routing": {
				"send": {
					"property": "tracking",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "number",
			"default": 0,
			"description": "Value",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "Warehouse ID",
			"name": "warehouse_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.warehouse",
			"routing": {
				"send": {
					"property": "warehouse_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Quant"
					]
				}
			}
		},
		{
			"displayName": "GET /api/stock.warehouse",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Search Stock Warehouse"
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
						"Stock"
					],
					"operation": [
						"Search Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,code,company_id,id",
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
						"Stock"
					],
					"operation": [
						"Search Stock Warehouse"
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
						"Stock"
					],
					"operation": [
						"Search Stock Warehouse"
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
						"Stock"
					],
					"operation": [
						"Search Stock Warehouse"
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
						"Stock"
					],
					"operation": [
						"Search Stock Warehouse"
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
						"Stock"
					],
					"operation": [
						"Search Stock Warehouse"
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
						"Stock"
					],
					"operation": [
						"Search Stock Warehouse"
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
						"Stock"
					],
					"operation": [
						"Search Stock Warehouse"
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
						"Stock"
					],
					"operation": [
						"Search Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/stock.warehouse",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "_key",
			"type": "json",
			"default": "{\n  \"name\": \"Warehouse 1\"\n}",
			"description": "Search criteria to find existing record by Warehouse Name",
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Buy Pull ID",
			"name": "buy_pull_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.rule",
			"routing": {
				"send": {
					"property": "buy_pull_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Buy To Resupply",
			"name": "buy_to_resupply",
			"type": "boolean",
			"default": true,
			"description": "Buy to Resupply",
			"routing": {
				"send": {
					"property": "buy_to_resupply",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "code",
			"type": "string",
			"default": "",
			"description": "Short Name",
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Crossdock Route ID",
			"name": "crossdock_route_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.route",
			"routing": {
				"send": {
					"property": "crossdock_route_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Delivery Route ID",
			"name": "delivery_route_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.route",
			"routing": {
				"send": {
					"property": "delivery_route_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Delivery Steps",
			"name": "delivery_steps",
			"type": "string",
			"default": "",
			"description": "Outgoing Shipments",
			"routing": {
				"send": {
					"property": "delivery_steps",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "In Type ID",
			"name": "in_type_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.picking.type",
			"routing": {
				"send": {
					"property": "in_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Int Type ID",
			"name": "int_type_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.picking.type",
			"routing": {
				"send": {
					"property": "int_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Lot Stock ID",
			"name": "lot_stock_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "lot_stock_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Manu Type ID",
			"name": "manu_type_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.picking.type",
			"routing": {
				"send": {
					"property": "manu_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Manufacture Mto Pull ID",
			"name": "manufacture_mto_pull_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.rule",
			"routing": {
				"send": {
					"property": "manufacture_mto_pull_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Manufacture Pull ID",
			"name": "manufacture_pull_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.rule",
			"routing": {
				"send": {
					"property": "manufacture_pull_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Manufacture Steps",
			"name": "manufacture_steps",
			"type": "string",
			"default": "",
			"description": "Manufacture",
			"routing": {
				"send": {
					"property": "manufacture_steps",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Manufacture To Resupply",
			"name": "manufacture_to_resupply",
			"type": "boolean",
			"default": true,
			"description": "Manufacture to Resupply",
			"routing": {
				"send": {
					"property": "manufacture_to_resupply",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Mto Pull ID",
			"name": "mto_pull_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.rule",
			"routing": {
				"send": {
					"property": "mto_pull_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Warehouse",
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Out Type ID",
			"name": "out_type_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.picking.type",
			"routing": {
				"send": {
					"property": "out_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Pack Type ID",
			"name": "pack_type_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.picking.type",
			"routing": {
				"send": {
					"property": "pack_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Pbm Loc ID",
			"name": "pbm_loc_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "pbm_loc_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Pbm Mto Pull ID",
			"name": "pbm_mto_pull_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.rule",
			"routing": {
				"send": {
					"property": "pbm_mto_pull_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Pbm Route ID",
			"name": "pbm_route_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.route",
			"routing": {
				"send": {
					"property": "pbm_route_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Pbm Type ID",
			"name": "pbm_type_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.picking.type",
			"routing": {
				"send": {
					"property": "pbm_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Pick Type ID",
			"name": "pick_type_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.picking.type",
			"routing": {
				"send": {
					"property": "pick_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Pos Type ID",
			"name": "pos_type_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.picking.type",
			"routing": {
				"send": {
					"property": "pos_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Reception Route ID",
			"name": "reception_route_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.route",
			"routing": {
				"send": {
					"property": "reception_route_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Reception Steps",
			"name": "reception_steps",
			"type": "string",
			"default": "",
			"description": "Incoming Shipments",
			"routing": {
				"send": {
					"property": "reception_steps",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Resupply Wh Ids",
			"name": "resupply_wh_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Resupply From (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "resupply_wh_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Route Ids",
			"name": "route_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Routes (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "route_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Sam Loc ID",
			"name": "sam_loc_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "sam_loc_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Sam Rule ID",
			"name": "sam_rule_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.rule",
			"routing": {
				"send": {
					"property": "sam_rule_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Sam Type ID",
			"name": "sam_type_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.picking.type",
			"routing": {
				"send": {
					"property": "sam_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "View Location ID",
			"name": "view_location_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "view_location_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Wh Input Stock Loc ID",
			"name": "wh_input_stock_loc_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "wh_input_stock_loc_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Wh Output Stock Loc ID",
			"name": "wh_output_stock_loc_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "wh_output_stock_loc_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Wh Pack Stock Loc ID",
			"name": "wh_pack_stock_loc_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "wh_pack_stock_loc_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
		{
			"displayName": "Wh Qc Stock Loc ID",
			"name": "wh_qc_stock_loc_id",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "wh_qc_stock_loc_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
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
						"Stock"
					],
					"operation": [
						"Upsert Stock Warehouse"
					]
				}
			}
		},
];
