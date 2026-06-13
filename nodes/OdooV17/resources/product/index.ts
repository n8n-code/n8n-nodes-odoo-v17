import type { INodeProperties } from 'n8n-workflow';

export const productDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					]
				}
			},
			"options": [
				{
					"name": "Search Product Attribute",
					"value": "Search Product Attribute",
					"action": "Search & read Product Attribute",
					"description": "Search and read product.attribute records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/product.attribute"
						}
					}
				},
				{
					"name": "Upsert Product Attribute",
					"value": "Upsert Product Attribute",
					"action": "Upsert Attribute",
					"description": "Create or update product.attribute record.\n\nSearch by name (Attribute Name) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/product.attribute"
						}
					}
				},
				{
					"name": "Get Product Attribute",
					"value": "Get Product Attribute",
					"action": "Get Product Attribute by ID",
					"description": "Read a single product.attribute record by ID. Uses Odoo `read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/product.attribute/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete Product Attribute",
					"value": "Delete Product Attribute",
					"action": "Delete Product Attribute",
					"description": "Delete a product.attribute record. Uses Odoo `unlink` method.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/product.attribute/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Call Product Attribute",
					"value": "Call Product Attribute",
					"action": "Call method on Product Attribute",
					"description": "Call any method on a product.attribute record. Uses Odoo `execute_kw` with method name.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/product.attribute/{{$parameter[\"id\"]}}/call"
						}
					}
				},
				{
					"name": "Search Product Attribute Value",
					"value": "Search Product Attribute Value",
					"action": "Search & read Attribute Value",
					"description": "Search and read product.attribute.value records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/product.attribute.value"
						}
					}
				},
				{
					"name": "Upsert Product Attribute Value",
					"value": "Upsert Product Attribute Value",
					"action": "Upsert Value",
					"description": "Create or update product.attribute.value record.\n\nSearch by name (Attribute Value Name) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/product.attribute.value"
						}
					}
				},
				{
					"name": "Get Product Attribute Value",
					"value": "Get Product Attribute Value",
					"action": "Get Attribute Value by ID",
					"description": "Read a single product.attribute.value record by ID. Uses Odoo `read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/product.attribute.value/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete Product Attribute Value",
					"value": "Delete Product Attribute Value",
					"action": "Delete Attribute Value",
					"description": "Delete a product.attribute.value record. Uses Odoo `unlink` method.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/product.attribute.value/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Call Product Attribute Value",
					"value": "Call Product Attribute Value",
					"action": "Call method on Attribute Value",
					"description": "Call any method on a product.attribute.value record. Uses Odoo `execute_kw` with method name.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/product.attribute.value/{{$parameter[\"id\"]}}/call"
						}
					}
				},
				{
					"name": "Search Product Category",
					"value": "Search Product Category",
					"action": "Search & read Product Category",
					"description": "Search and read product.category records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/product.category"
						}
					}
				},
				{
					"name": "Upsert Product Category",
					"value": "Upsert Product Category",
					"action": "Upsert Category",
					"description": "Create or update product.category record.\n\nSearch by name (Category Name) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/product.category"
						}
					}
				},
				{
					"name": "Get Product Category",
					"value": "Get Product Category",
					"action": "Get Product Category by ID",
					"description": "Read a single product.category record by ID. Uses Odoo `read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/product.category/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete Product Category",
					"value": "Delete Product Category",
					"action": "Delete Product Category",
					"description": "Delete a product.category record. Uses Odoo `unlink` method.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/product.category/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Call Product Category",
					"value": "Call Product Category",
					"action": "Call method on Product Category",
					"description": "Call any method on a product.category record. Uses Odoo `execute_kw` with method name.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/product.category/{{$parameter[\"id\"]}}/call"
						}
					}
				},
				{
					"name": "Search Product Product",
					"value": "Search Product Product",
					"action": "Search & read Product Variant",
					"description": "Search and read product.product records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/product.product"
						}
					}
				},
				{
					"name": "Upsert Product Product",
					"value": "Upsert Product Product",
					"action": "Upsert Product",
					"description": "Create or update product.product record.\n\nSearch by barcode (Barcode (unique)) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/product.product"
						}
					}
				},
				{
					"name": "Get Product Product",
					"value": "Get Product Product",
					"action": "Get Product Variant by ID",
					"description": "Read a single product.product record by ID. Uses Odoo `read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/product.product/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete Product Product",
					"value": "Delete Product Product",
					"action": "Delete Product Variant",
					"description": "Delete a product.product record. Uses Odoo `unlink` method.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/product.product/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Call Product Product",
					"value": "Call Product Product",
					"action": "Call method on Product Variant",
					"description": "Call any method on a product.product record. Uses Odoo `execute_kw` with method name.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/product.product/{{$parameter[\"id\"]}}/call"
						}
					}
				},
				{
					"name": "Search Product Template",
					"value": "Search Product Template",
					"action": "Search & read Product",
					"description": "Search and read product.template records. Uses Odoo `search_read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/product.template"
						}
					}
				},
				{
					"name": "Upsert Product Template",
					"value": "Upsert Product Template",
					"action": "Upsert Template",
					"description": "Create or update product.template record.\n\nSearch by name (Product Name) from `_key`. If found → update with data fields, if not → create new record.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/product.template"
						}
					}
				},
				{
					"name": "Get Product Template",
					"value": "Get Product Template",
					"action": "Get Product by ID",
					"description": "Read a single product.template record by ID. Uses Odoo `read` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/product.template/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete Product Template",
					"value": "Delete Product Template",
					"action": "Delete Product",
					"description": "Delete a product.template record. Uses Odoo `unlink` method.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/product.template/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Call Product Template",
					"value": "Call Product Template",
					"action": "Call method on Product",
					"description": "Call any method on a product.template record. Uses Odoo `execute_kw` with method name.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/product.template/{{$parameter[\"id\"]}}/call"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/product.attribute",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Search Product Attribute"
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
						"Product"
					],
					"operation": [
						"Search Product Attribute"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,default_code,list_price",
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
						"Product"
					],
					"operation": [
						"Search Product Attribute"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 80,
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
						"Product"
					],
					"operation": [
						"Search Product Attribute"
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
						"Product"
					],
					"operation": [
						"Search Product Attribute"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order, e.g. 'name asc' or 'create_date desc'",
			"default": "",
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
						"Product"
					],
					"operation": [
						"Search Product Attribute"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Product"
					],
					"operation": [
						"Search Product Attribute"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/product.attribute",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Attribute"
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
			"description": "Search criteria to find existing record by Attribute Name",
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
						"Product"
					],
					"operation": [
						"Upsert Product Attribute"
					]
				}
			}
		},
		{
			"displayName": "Create Variant",
			"name": "create_variant",
			"type": "string",
			"default": "",
			"description": "Variants Creation Mode",
			"routing": {
				"send": {
					"property": "create_variant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Attribute"
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
						"Product"
					],
					"operation": [
						"Upsert Product Attribute"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Attribute",
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
						"Product"
					],
					"operation": [
						"Upsert Product Attribute"
					]
				}
			}
		},
		{
			"displayName": "Number Related Products",
			"name": "number_related_products",
			"type": "number",
			"default": 0,
			"description": "Number Related Products",
			"routing": {
				"send": {
					"property": "number_related_products",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Attribute"
					]
				}
			}
		},
		{
			"displayName": "Product Tmpl Ids",
			"name": "product_tmpl_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Related Products (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "product_tmpl_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Attribute"
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
						"Product"
					],
					"operation": [
						"Upsert Product Attribute"
					]
				}
			}
		},
		{
			"displayName": "Visibility",
			"name": "visibility",
			"type": "string",
			"default": "",
			"description": "Visibility",
			"routing": {
				"send": {
					"property": "visibility",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Attribute"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Product"
					],
					"operation": [
						"Upsert Product Attribute"
					]
				}
			}
		},
		{
			"displayName": "GET /api/product.attribute/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Get Product Attribute"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Record ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Get Product Attribute"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "",
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
						"Product"
					],
					"operation": [
						"Get Product Attribute"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Product"
					],
					"operation": [
						"Get Product Attribute"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/product.attribute/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Delete Product Attribute"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Record ID to delete",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Delete Product Attribute"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Product"
					],
					"operation": [
						"Delete Product Attribute"
					]
				}
			}
		},
		{
			"displayName": "POST /api/product.attribute/{id}/call",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Call Product Attribute"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Call Product Attribute"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Method",
			"name": "method",
			"type": "string",
			"default": "action_confirm",
			"description": "Method name to call",
			"routing": {
				"send": {
					"property": "method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Call Product Attribute"
					]
				}
			}
		},
		{
			"displayName": "Args",
			"name": "args",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Positional arguments",
			"routing": {
				"send": {
					"property": "args",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Call Product Attribute"
					]
				}
			}
		},
		{
			"displayName": "Kwargs",
			"name": "kwargs",
			"type": "json",
			"default": "{}",
			"description": "Keyword arguments",
			"routing": {
				"send": {
					"property": "kwargs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Call Product Attribute"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Product"
					],
					"operation": [
						"Call Product Attribute"
					]
				}
			}
		},
		{
			"displayName": "GET /api/product.attribute.value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Search Product Attribute Value"
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
						"Product"
					],
					"operation": [
						"Search Product Attribute Value"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,default_code,list_price",
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
						"Product"
					],
					"operation": [
						"Search Product Attribute Value"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 80,
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
						"Product"
					],
					"operation": [
						"Search Product Attribute Value"
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
						"Product"
					],
					"operation": [
						"Search Product Attribute Value"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order, e.g. 'name asc' or 'create_date desc'",
			"default": "",
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
						"Product"
					],
					"operation": [
						"Search Product Attribute Value"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Product"
					],
					"operation": [
						"Search Product Attribute Value"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/product.attribute.value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Attribute Value"
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
			"description": "Search criteria to find existing record by Attribute Value Name",
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
						"Product"
					],
					"operation": [
						"Upsert Product Attribute Value"
					]
				}
			}
		},
		{
			"displayName": "Attribute ID",
			"name": "attribute_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.attribute",
			"routing": {
				"send": {
					"property": "attribute_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Attribute Value"
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
						"Product"
					],
					"operation": [
						"Upsert Product Attribute Value"
					]
				}
			}
		},
		{
			"displayName": "Default Extra Price",
			"name": "default_extra_price",
			"type": "number",
			"default": 0,
			"description": "Default Extra Price",
			"routing": {
				"send": {
					"property": "default_extra_price",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Attribute Value"
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
						"Product"
					],
					"operation": [
						"Upsert Product Attribute Value"
					]
				}
			}
		},
		{
			"displayName": "HTML Color",
			"name": "html_color",
			"type": "string",
			"default": "",
			"description": "Color",
			"routing": {
				"send": {
					"property": "html_color",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Attribute Value"
					]
				}
			}
		},
		{
			"displayName": "Image",
			"name": "image",
			"type": "string",
			"default": "",
			"description": "Image",
			"routing": {
				"send": {
					"property": "image",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Attribute Value"
					]
				}
			}
		},
		{
			"displayName": "Is Custom",
			"name": "is_custom",
			"type": "boolean",
			"default": true,
			"description": "Is custom value",
			"routing": {
				"send": {
					"property": "is_custom",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Attribute Value"
					]
				}
			}
		},
		{
			"displayName": "Is Used On Products",
			"name": "is_used_on_products",
			"type": "boolean",
			"default": true,
			"description": "Used on Products",
			"routing": {
				"send": {
					"property": "is_used_on_products",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Attribute Value"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Value",
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
						"Product"
					],
					"operation": [
						"Upsert Product Attribute Value"
					]
				}
			}
		},
		{
			"displayName": "Pav Attribute Line Ids",
			"name": "pav_attribute_line_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Lines (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "pav_attribute_line_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Attribute Value"
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
						"Product"
					],
					"operation": [
						"Upsert Product Attribute Value"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Product"
					],
					"operation": [
						"Upsert Product Attribute Value"
					]
				}
			}
		},
		{
			"displayName": "GET /api/product.attribute.value/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Get Product Attribute Value"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Record ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Get Product Attribute Value"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "",
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
						"Product"
					],
					"operation": [
						"Get Product Attribute Value"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Product"
					],
					"operation": [
						"Get Product Attribute Value"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/product.attribute.value/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Delete Product Attribute Value"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Record ID to delete",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Delete Product Attribute Value"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Product"
					],
					"operation": [
						"Delete Product Attribute Value"
					]
				}
			}
		},
		{
			"displayName": "POST /api/product.attribute.value/{id}/call",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Call Product Attribute Value"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Call Product Attribute Value"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Method",
			"name": "method",
			"type": "string",
			"default": "action_confirm",
			"description": "Method name to call",
			"routing": {
				"send": {
					"property": "method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Call Product Attribute Value"
					]
				}
			}
		},
		{
			"displayName": "Args",
			"name": "args",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Positional arguments",
			"routing": {
				"send": {
					"property": "args",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Call Product Attribute Value"
					]
				}
			}
		},
		{
			"displayName": "Kwargs",
			"name": "kwargs",
			"type": "json",
			"default": "{}",
			"description": "Keyword arguments",
			"routing": {
				"send": {
					"property": "kwargs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Call Product Attribute Value"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Product"
					],
					"operation": [
						"Call Product Attribute Value"
					]
				}
			}
		},
		{
			"displayName": "GET /api/product.category",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Search Product Category"
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
						"Product"
					],
					"operation": [
						"Search Product Category"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,default_code,list_price",
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
						"Product"
					],
					"operation": [
						"Search Product Category"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 80,
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
						"Product"
					],
					"operation": [
						"Search Product Category"
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
						"Product"
					],
					"operation": [
						"Search Product Category"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order, e.g. 'name asc' or 'create_date desc'",
			"default": "",
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
						"Product"
					],
					"operation": [
						"Search Product Category"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Product"
					],
					"operation": [
						"Search Product Category"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/product.category",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Category"
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
			"description": "Search criteria to find existing record by Category Name",
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
						"Product"
					],
					"operation": [
						"Upsert Product Category"
					]
				}
			}
		},
		{
			"displayName": "Complete Name",
			"name": "complete_name",
			"type": "string",
			"default": "",
			"description": "Complete Name",
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
						"Product"
					],
					"operation": [
						"Upsert Product Category"
					]
				}
			}
		},
		{
			"displayName": "Filter For Stock Putaway Rule",
			"name": "filter_for_stock_putaway_rule",
			"type": "boolean",
			"default": true,
			"description": "stock.putaway.rule",
			"routing": {
				"send": {
					"property": "filter_for_stock_putaway_rule",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Category"
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
						"Product"
					],
					"operation": [
						"Upsert Product Category"
					]
				}
			}
		},
		{
			"displayName": "Packaging Reserve Method",
			"name": "packaging_reserve_method",
			"type": "string",
			"default": "",
			"description": "Reserve Packagings",
			"routing": {
				"send": {
					"property": "packaging_reserve_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Category"
					]
				}
			}
		},
		{
			"displayName": "Parent ID",
			"name": "parent_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.category",
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
						"Product"
					],
					"operation": [
						"Upsert Product Category"
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
						"Product"
					],
					"operation": [
						"Upsert Product Category"
					]
				}
			}
		},
		{
			"displayName": "Product Count",
			"name": "product_count",
			"type": "number",
			"default": 0,
			"description": "# Products",
			"routing": {
				"send": {
					"property": "product_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Category"
					]
				}
			}
		},
		{
			"displayName": "Product Properties Definition",
			"name": "product_properties_definition",
			"type": "string",
			"default": "",
			"description": "Product Properties",
			"routing": {
				"send": {
					"property": "product_properties_definition",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Category"
					]
				}
			}
		},
		{
			"displayName": "Property Account Creditor Price Difference Categ",
			"name": "property_account_creditor_price_difference_categ",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "property_account_creditor_price_difference_categ",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Category"
					]
				}
			}
		},
		{
			"displayName": "Property Account Expense Categ ID",
			"name": "property_account_expense_categ_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "property_account_expense_categ_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Category"
					]
				}
			}
		},
		{
			"displayName": "Property Account Income Categ ID",
			"name": "property_account_income_categ_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "property_account_income_categ_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Category"
					]
				}
			}
		},
		{
			"displayName": "Property Cost Method",
			"name": "property_cost_method",
			"type": "string",
			"default": "",
			"description": "Costing Method",
			"routing": {
				"send": {
					"property": "property_cost_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Category"
					]
				}
			}
		},
		{
			"displayName": "Property Stock Account Input Categ ID",
			"name": "property_stock_account_input_categ_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "property_stock_account_input_categ_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Category"
					]
				}
			}
		},
		{
			"displayName": "Property Stock Account Output Categ ID",
			"name": "property_stock_account_output_categ_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "property_stock_account_output_categ_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Category"
					]
				}
			}
		},
		{
			"displayName": "Property Stock Account Production Cost ID",
			"name": "property_stock_account_production_cost_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "property_stock_account_production_cost_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Category"
					]
				}
			}
		},
		{
			"displayName": "Property Stock Journal",
			"name": "property_stock_journal",
			"type": "number",
			"default": 0,
			"description": "ID of related account.journal",
			"routing": {
				"send": {
					"property": "property_stock_journal",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Category"
					]
				}
			}
		},
		{
			"displayName": "Property Stock Valuation Account ID",
			"name": "property_stock_valuation_account_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "property_stock_valuation_account_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Category"
					]
				}
			}
		},
		{
			"displayName": "Property Valuation",
			"name": "property_valuation",
			"type": "string",
			"default": "",
			"description": "Inventory Valuation",
			"routing": {
				"send": {
					"property": "property_valuation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Category"
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
						"Product"
					],
					"operation": [
						"Upsert Product Category"
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
						"Product"
					],
					"operation": [
						"Upsert Product Category"
					]
				}
			}
		},
		{
			"displayName": "Total Route Ids",
			"name": "total_route_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Total routes (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "total_route_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Category"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Product"
					],
					"operation": [
						"Upsert Product Category"
					]
				}
			}
		},
		{
			"displayName": "GET /api/product.category/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Get Product Category"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Record ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Get Product Category"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "",
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
						"Product"
					],
					"operation": [
						"Get Product Category"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Product"
					],
					"operation": [
						"Get Product Category"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/product.category/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Delete Product Category"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Record ID to delete",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Delete Product Category"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Product"
					],
					"operation": [
						"Delete Product Category"
					]
				}
			}
		},
		{
			"displayName": "POST /api/product.category/{id}/call",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Call Product Category"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Call Product Category"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Method",
			"name": "method",
			"type": "string",
			"default": "action_confirm",
			"description": "Method name to call",
			"routing": {
				"send": {
					"property": "method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Call Product Category"
					]
				}
			}
		},
		{
			"displayName": "Args",
			"name": "args",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Positional arguments",
			"routing": {
				"send": {
					"property": "args",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Call Product Category"
					]
				}
			}
		},
		{
			"displayName": "Kwargs",
			"name": "kwargs",
			"type": "json",
			"default": "{}",
			"description": "Keyword arguments",
			"routing": {
				"send": {
					"property": "kwargs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Call Product Category"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Product"
					],
					"operation": [
						"Call Product Category"
					]
				}
			}
		},
		{
			"displayName": "GET /api/product.product",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Search Product Product"
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
						"Product"
					],
					"operation": [
						"Search Product Product"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,default_code,list_price",
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
						"Product"
					],
					"operation": [
						"Search Product Product"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 80,
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
						"Product"
					],
					"operation": [
						"Search Product Product"
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
						"Product"
					],
					"operation": [
						"Search Product Product"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order, e.g. 'name asc' or 'create_date desc'",
			"default": "",
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
						"Product"
					],
					"operation": [
						"Search Product Product"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Product"
					],
					"operation": [
						"Search Product Product"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/product.product",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
			"description": "Search criteria to find existing record by Barcode (unique)",
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Accessory Product Ids",
			"name": "accessory_product_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Accessory Products (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "accessory_product_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Account Tag Ids",
			"name": "account_tag_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Account Tags (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "account_tag_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Additional Product Tag Ids",
			"name": "additional_product_tag_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Additional Product Tags (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "additional_product_tag_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "All Product Tag Ids",
			"name": "all_product_tag_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "All Product Tag (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "all_product_tag_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Allow Out Of Stock Order",
			"name": "allow_out_of_stock_order",
			"type": "boolean",
			"default": true,
			"description": "Continue selling when out-of-stock",
			"routing": {
				"send": {
					"property": "allow_out_of_stock_order",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Alternative Product Ids",
			"name": "alternative_product_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Alternative Products (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "alternative_product_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Available In Pos",
			"name": "available_in_pos",
			"type": "boolean",
			"default": true,
			"description": "Available in POS",
			"routing": {
				"send": {
					"property": "available_in_pos",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Available Threshold",
			"name": "available_threshold",
			"type": "number",
			"default": 0,
			"description": "Show Threshold",
			"routing": {
				"send": {
					"property": "available_threshold",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Avg Cost",
			"name": "avg_cost",
			"type": "number",
			"default": 0,
			"description": "Average Cost",
			"routing": {
				"send": {
					"property": "avg_cost",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Base Unit Count",
			"name": "base_unit_count",
			"type": "number",
			"default": 0,
			"description": "Base Unit Count",
			"routing": {
				"send": {
					"property": "base_unit_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Base Unit ID",
			"name": "base_unit_id",
			"type": "number",
			"default": 0,
			"description": "ID of related website.base.unit",
			"routing": {
				"send": {
					"property": "base_unit_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Base Unit Name",
			"name": "base_unit_name",
			"type": "string",
			"default": "",
			"description": "Base Unit Name",
			"routing": {
				"send": {
					"property": "base_unit_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Base Unit Price",
			"name": "base_unit_price",
			"type": "number",
			"default": 0,
			"description": "Price Per Unit",
			"routing": {
				"send": {
					"property": "base_unit_price",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Bom Count",
			"name": "bom_count",
			"type": "number",
			"default": 0,
			"description": "# Bill of Material",
			"routing": {
				"send": {
					"property": "bom_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Can Be Expensed",
			"name": "can_be_expensed",
			"type": "boolean",
			"default": true,
			"description": "Can be Expensed",
			"routing": {
				"send": {
					"property": "can_be_expensed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Can Image 1024 Be Zoomed",
			"name": "can_image_1024_be_zoomed",
			"type": "boolean",
			"default": true,
			"description": "Can Image 1024 be zoomed",
			"routing": {
				"send": {
					"property": "can_image_1024_be_zoomed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Can Image Variant 1024 Be Zoomed",
			"name": "can_image_variant_1024_be_zoomed",
			"type": "boolean",
			"default": true,
			"description": "Can Variant Image 1024 be zoomed",
			"routing": {
				"send": {
					"property": "can_image_variant_1024_be_zoomed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Can Publish",
			"name": "can_publish",
			"type": "boolean",
			"default": true,
			"description": "Can Publish",
			"routing": {
				"send": {
					"property": "can_publish",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Categ ID",
			"name": "categ_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.category",
			"routing": {
				"send": {
					"property": "categ_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "code",
			"type": "string",
			"default": "",
			"description": "Reference",
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Combination Indices",
			"name": "combination_indices",
			"type": "string",
			"default": "",
			"description": "Combination Indices",
			"routing": {
				"send": {
					"property": "combination_indices",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Combo Ids",
			"name": "combo_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Combinations (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "combo_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Compare List Price",
			"name": "compare_list_price",
			"type": "number",
			"default": 0,
			"description": "Compare to Price",
			"routing": {
				"send": {
					"property": "compare_list_price",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Cost Currency ID",
			"name": "cost_currency_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.currency",
			"routing": {
				"send": {
					"property": "cost_currency_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Country Of Origin",
			"name": "country_of_origin",
			"type": "number",
			"default": 0,
			"description": "ID of related res.country",
			"routing": {
				"send": {
					"property": "country_of_origin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Default Code",
			"name": "default_code",
			"type": "string",
			"default": "",
			"description": "Internal Reference",
			"routing": {
				"send": {
					"property": "default_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Description Ecommerce",
			"name": "description_ecommerce",
			"type": "string",
			"default": "",
			"description": "eCommerce Description",
			"routing": {
				"send": {
					"property": "description_ecommerce",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Description Picking",
			"name": "description_picking",
			"type": "string",
			"default": "",
			"description": "Description on Picking",
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Description Pickingin",
			"name": "description_pickingin",
			"type": "string",
			"default": "",
			"description": "Description on Receptions",
			"routing": {
				"send": {
					"property": "description_pickingin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Description Pickingout",
			"name": "description_pickingout",
			"type": "string",
			"default": "",
			"description": "Description on Delivery Orders",
			"routing": {
				"send": {
					"property": "description_pickingout",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Description Purchase",
			"name": "description_purchase",
			"type": "string",
			"default": "",
			"description": "Purchase Description",
			"routing": {
				"send": {
					"property": "description_purchase",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Description Sale",
			"name": "description_sale",
			"type": "string",
			"default": "",
			"description": "Sales Description",
			"routing": {
				"send": {
					"property": "description_sale",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Description Self Order",
			"name": "description_self_order",
			"type": "string",
			"default": "",
			"description": "Product Description for Self Order",
			"routing": {
				"send": {
					"property": "description_self_order",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Detailed Type",
			"name": "detailed_type",
			"type": "string",
			"default": "",
			"description": "Product Type",
			"routing": {
				"send": {
					"property": "detailed_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Expense Policy",
			"name": "expense_policy",
			"type": "string",
			"default": "",
			"description": "Re-Invoice Expenses",
			"routing": {
				"send": {
					"property": "expense_policy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Expense Policy Tooltip",
			"name": "expense_policy_tooltip",
			"type": "string",
			"default": "",
			"description": "Expense Policy Tooltip",
			"routing": {
				"send": {
					"property": "expense_policy_tooltip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Free Qty",
			"name": "free_qty",
			"type": "number",
			"default": 0,
			"description": "Free To Use Quantity ",
			"routing": {
				"send": {
					"property": "free_qty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Has Available Route Ids",
			"name": "has_available_route_ids",
			"type": "boolean",
			"default": true,
			"description": "Routes can be selected on this product",
			"routing": {
				"send": {
					"property": "has_available_route_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Has Configurable Attributes",
			"name": "has_configurable_attributes",
			"type": "boolean",
			"default": true,
			"description": "Is a configurable product",
			"routing": {
				"send": {
					"property": "has_configurable_attributes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Hs Code",
			"name": "hs_code",
			"type": "string",
			"default": "",
			"description": "HS Code",
			"routing": {
				"send": {
					"property": "hs_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Image 1024",
			"name": "image_1024",
			"type": "string",
			"default": "",
			"description": "Image 1024",
			"routing": {
				"send": {
					"property": "image_1024",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Image 128",
			"name": "image_128",
			"type": "string",
			"default": "",
			"description": "Image 128",
			"routing": {
				"send": {
					"property": "image_128",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Image 1920",
			"name": "image_1920",
			"type": "string",
			"default": "",
			"description": "Image",
			"routing": {
				"send": {
					"property": "image_1920",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Image 256",
			"name": "image_256",
			"type": "string",
			"default": "",
			"description": "Image 256",
			"routing": {
				"send": {
					"property": "image_256",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Image 512",
			"name": "image_512",
			"type": "string",
			"default": "",
			"description": "Image 512",
			"routing": {
				"send": {
					"property": "image_512",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Image Variant 1024",
			"name": "image_variant_1024",
			"type": "string",
			"default": "",
			"description": "Variant Image 1024",
			"routing": {
				"send": {
					"property": "image_variant_1024",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Image Variant 128",
			"name": "image_variant_128",
			"type": "string",
			"default": "",
			"description": "Variant Image 128",
			"routing": {
				"send": {
					"property": "image_variant_128",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Image Variant 1920",
			"name": "image_variant_1920",
			"type": "string",
			"default": "",
			"description": "Variant Image",
			"routing": {
				"send": {
					"property": "image_variant_1920",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Image Variant 256",
			"name": "image_variant_256",
			"type": "string",
			"default": "",
			"description": "Variant Image 256",
			"routing": {
				"send": {
					"property": "image_variant_256",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Image Variant 512",
			"name": "image_variant_512",
			"type": "string",
			"default": "",
			"description": "Variant Image 512",
			"routing": {
				"send": {
					"property": "image_variant_512",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Incoming Qty",
			"name": "incoming_qty",
			"type": "number",
			"default": 0,
			"description": "Incoming",
			"routing": {
				"send": {
					"property": "incoming_qty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Invoice Policy",
			"name": "invoice_policy",
			"type": "string",
			"default": "",
			"description": "Invoicing Policy",
			"routing": {
				"send": {
					"property": "invoice_policy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Is Kits",
			"name": "is_kits",
			"type": "boolean",
			"default": true,
			"description": "Is Kits",
			"routing": {
				"send": {
					"property": "is_kits",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Is Product Variant",
			"name": "is_product_variant",
			"type": "boolean",
			"default": true,
			"description": "Is Product Variant",
			"routing": {
				"send": {
					"property": "is_product_variant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Is Published",
			"name": "is_published",
			"type": "boolean",
			"default": true,
			"description": "Is Published",
			"routing": {
				"send": {
					"property": "is_published",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Is Seo Optimized",
			"name": "is_seo_optimized",
			"type": "boolean",
			"default": true,
			"description": "SEO optimized",
			"routing": {
				"send": {
					"property": "is_seo_optimized",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Product Code",
			"name": "l10n_id_product_code",
			"type": "number",
			"default": 0,
			"description": "ID of related l10n_id_efaktur_coretax.product.code",
			"routing": {
				"send": {
					"property": "l10n_id_product_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "List Price",
			"name": "list_price",
			"type": "number",
			"default": 0,
			"description": "Sales Price",
			"routing": {
				"send": {
					"property": "list_price",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Lot Properties Definition",
			"name": "lot_properties_definition",
			"type": "string",
			"default": "",
			"description": "Lot Properties",
			"routing": {
				"send": {
					"property": "lot_properties_definition",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Lst Price",
			"name": "lst_price",
			"type": "number",
			"default": 0,
			"description": "Sales Price",
			"routing": {
				"send": {
					"property": "lst_price",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Mrp Product Qty",
			"name": "mrp_product_qty",
			"type": "number",
			"default": 0,
			"description": "Manufactured",
			"routing": {
				"send": {
					"property": "mrp_product_qty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Nbr Moves In",
			"name": "nbr_moves_in",
			"type": "number",
			"default": 0,
			"description": "Nbr Moves In",
			"routing": {
				"send": {
					"property": "nbr_moves_in",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Nbr Moves Out",
			"name": "nbr_moves_out",
			"type": "number",
			"default": 0,
			"description": "Nbr Moves Out",
			"routing": {
				"send": {
					"property": "nbr_moves_out",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Nbr Reordering Rules",
			"name": "nbr_reordering_rules",
			"type": "number",
			"default": 0,
			"description": "Reordering Rules",
			"routing": {
				"send": {
					"property": "nbr_reordering_rules",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Optional Product Ids",
			"name": "optional_product_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Optional Products (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "optional_product_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Out Of Stock Message",
			"name": "out_of_stock_message",
			"type": "string",
			"default": "",
			"description": "Out-of-Stock Message",
			"routing": {
				"send": {
					"property": "out_of_stock_message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Outgoing Qty",
			"name": "outgoing_qty",
			"type": "number",
			"default": 0,
			"description": "Outgoing",
			"routing": {
				"send": {
					"property": "outgoing_qty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Partner Ref",
			"name": "partner_ref",
			"type": "string",
			"default": "",
			"description": "Customer Ref",
			"routing": {
				"send": {
					"property": "partner_ref",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Pos Categ Ids",
			"name": "pos_categ_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Point of Sale Category (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "pos_categ_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Price Extra",
			"name": "price_extra",
			"type": "number",
			"default": 0,
			"description": "Variant Price Extra",
			"routing": {
				"send": {
					"property": "price_extra",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Pricelist Item Count",
			"name": "pricelist_item_count",
			"type": "number",
			"default": 0,
			"description": "Number of price rules",
			"routing": {
				"send": {
					"property": "pricelist_item_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Product Catalog Product Is In Sale Order",
			"name": "product_catalog_product_is_in_sale_order",
			"type": "boolean",
			"default": true,
			"description": "Product Catalog Product Is In Sale Order",
			"routing": {
				"send": {
					"property": "product_catalog_product_is_in_sale_order",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Product Document Count",
			"name": "product_document_count",
			"type": "number",
			"default": 0,
			"description": "Documents Count",
			"routing": {
				"send": {
					"property": "product_document_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Product Properties",
			"name": "product_properties",
			"type": "string",
			"default": "",
			"description": "Properties",
			"routing": {
				"send": {
					"property": "product_properties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Product Tag Ids",
			"name": "product_tag_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Product Template Tags (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "product_tag_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Product Template Attribute Value Ids",
			"name": "product_template_attribute_value_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Attribute Values (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "product_template_attribute_value_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Product Template Variant Value Ids",
			"name": "product_template_variant_value_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Variant Values (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "product_template_variant_value_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Product Tooltip",
			"name": "product_tooltip",
			"type": "string",
			"default": "",
			"description": "Product Tooltip",
			"routing": {
				"send": {
					"property": "product_tooltip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Product Variant Count",
			"name": "product_variant_count",
			"type": "number",
			"default": 0,
			"description": "# Product Variants",
			"routing": {
				"send": {
					"property": "product_variant_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Product Variant ID",
			"name": "product_variant_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.product",
			"routing": {
				"send": {
					"property": "product_variant_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "project_id",
			"type": "number",
			"default": 0,
			"description": "ID of related project.project",
			"routing": {
				"send": {
					"property": "project_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Project Template ID",
			"name": "project_template_id",
			"type": "number",
			"default": 0,
			"description": "ID of related project.project",
			"routing": {
				"send": {
					"property": "project_template_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Property Account Creditor Price Difference",
			"name": "property_account_creditor_price_difference",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "property_account_creditor_price_difference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Property Account Expense ID",
			"name": "property_account_expense_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "property_account_expense_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Property Account Income ID",
			"name": "property_account_income_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "property_account_income_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Property Stock Inventory",
			"name": "property_stock_inventory",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "property_stock_inventory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Property Stock Production",
			"name": "property_stock_production",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "property_stock_production",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Public Categ Ids",
			"name": "public_categ_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Website Product Category (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "public_categ_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Purchase Line Warn",
			"name": "purchase_line_warn",
			"type": "string",
			"default": "",
			"description": "Purchase Order Line Warning",
			"routing": {
				"send": {
					"property": "purchase_line_warn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Purchase Line Warn Msg",
			"name": "purchase_line_warn_msg",
			"type": "string",
			"default": "",
			"description": "Message for Purchase Order Line",
			"routing": {
				"send": {
					"property": "purchase_line_warn_msg",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Purchase Method",
			"name": "purchase_method",
			"type": "string",
			"default": "",
			"description": "Control Policy",
			"routing": {
				"send": {
					"property": "purchase_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Purchase Ok",
			"name": "purchase_ok",
			"type": "boolean",
			"default": true,
			"description": "Can be Purchased",
			"routing": {
				"send": {
					"property": "purchase_ok",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Purchased Product Qty",
			"name": "purchased_product_qty",
			"type": "number",
			"default": 0,
			"description": "Purchased",
			"routing": {
				"send": {
					"property": "purchased_product_qty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Qty Available",
			"name": "qty_available",
			"type": "number",
			"default": 0,
			"description": "Quantity On Hand",
			"routing": {
				"send": {
					"property": "qty_available",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Quantity Svl",
			"name": "quantity_svl",
			"type": "number",
			"default": 0,
			"description": "Quantity Svl",
			"routing": {
				"send": {
					"property": "quantity_svl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Rating Avg",
			"name": "rating_avg",
			"type": "number",
			"default": 0,
			"description": "Average Rating",
			"routing": {
				"send": {
					"property": "rating_avg",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Rating Avg Text",
			"name": "rating_avg_text",
			"type": "string",
			"default": "",
			"description": "Rating Avg Text",
			"routing": {
				"send": {
					"property": "rating_avg_text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Rating Count",
			"name": "rating_count",
			"type": "number",
			"default": 0,
			"description": "Rating count",
			"routing": {
				"send": {
					"property": "rating_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Rating Last Feedback",
			"name": "rating_last_feedback",
			"type": "string",
			"default": "",
			"description": "Rating Last Feedback",
			"routing": {
				"send": {
					"property": "rating_last_feedback",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Rating Last Image",
			"name": "rating_last_image",
			"type": "string",
			"default": "",
			"description": "Rating Last Image",
			"routing": {
				"send": {
					"property": "rating_last_image",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Rating Last Text",
			"name": "rating_last_text",
			"type": "string",
			"default": "",
			"description": "Rating Text",
			"routing": {
				"send": {
					"property": "rating_last_text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Rating Last Value",
			"name": "rating_last_value",
			"type": "number",
			"default": 0,
			"description": "Rating Last Value",
			"routing": {
				"send": {
					"property": "rating_last_value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Rating Percentage Satisfaction",
			"name": "rating_percentage_satisfaction",
			"type": "number",
			"default": 0,
			"description": "Rating Satisfaction",
			"routing": {
				"send": {
					"property": "rating_percentage_satisfaction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Reordering Max Qty",
			"name": "reordering_max_qty",
			"type": "number",
			"default": 0,
			"description": "Reordering Max Qty",
			"routing": {
				"send": {
					"property": "reordering_max_qty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Reordering Min Qty",
			"name": "reordering_min_qty",
			"type": "number",
			"default": 0,
			"description": "Reordering Min Qty",
			"routing": {
				"send": {
					"property": "reordering_min_qty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Responsible ID",
			"name": "responsible_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.users",
			"routing": {
				"send": {
					"property": "responsible_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Ribbon ID",
			"name": "ribbon_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.ribbon",
			"routing": {
				"send": {
					"property": "ribbon_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Route From Categ Ids",
			"name": "route_from_categ_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Category Routes (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "route_from_categ_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Sale Delay",
			"name": "sale_delay",
			"type": "number",
			"default": 0,
			"description": "Customer Lead Time",
			"routing": {
				"send": {
					"property": "sale_delay",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Sale Line Warn",
			"name": "sale_line_warn",
			"type": "string",
			"default": "",
			"description": "Sales Order Line",
			"routing": {
				"send": {
					"property": "sale_line_warn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Sale Line Warn Msg",
			"name": "sale_line_warn_msg",
			"type": "string",
			"default": "",
			"description": "Message for Sales Order Line",
			"routing": {
				"send": {
					"property": "sale_line_warn_msg",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Sale Ok",
			"name": "sale_ok",
			"type": "boolean",
			"default": true,
			"description": "Can be Sold",
			"routing": {
				"send": {
					"property": "sale_ok",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Sales Count",
			"name": "sales_count",
			"type": "number",
			"default": 0,
			"description": "Sold",
			"routing": {
				"send": {
					"property": "sales_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Self Order Available",
			"name": "self_order_available",
			"type": "boolean",
			"default": true,
			"description": "Available in Self Order",
			"routing": {
				"send": {
					"property": "self_order_available",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Seo Name",
			"name": "seo_name",
			"type": "string",
			"default": "",
			"description": "Seo name",
			"routing": {
				"send": {
					"property": "seo_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Service Policy",
			"name": "service_policy",
			"type": "string",
			"default": "",
			"description": "Service Invoicing Policy",
			"routing": {
				"send": {
					"property": "service_policy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Service To Purchase",
			"name": "service_to_purchase",
			"type": "boolean",
			"default": true,
			"description": "Subcontract Service",
			"routing": {
				"send": {
					"property": "service_to_purchase",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Service Tracking",
			"name": "service_tracking",
			"type": "string",
			"default": "",
			"description": "Create on Order",
			"routing": {
				"send": {
					"property": "service_tracking",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Service Type",
			"name": "service_type",
			"type": "string",
			"default": "",
			"description": "Track Service",
			"routing": {
				"send": {
					"property": "service_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Show Availability",
			"name": "show_availability",
			"type": "boolean",
			"default": true,
			"description": "Show availability Qty",
			"routing": {
				"send": {
					"property": "show_availability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Show Forecasted Qty Status Button",
			"name": "show_forecasted_qty_status_button",
			"type": "boolean",
			"default": true,
			"description": "Show Forecasted Qty Status Button",
			"routing": {
				"send": {
					"property": "show_forecasted_qty_status_button",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Show On Hand Qty Status Button",
			"name": "show_on_hand_qty_status_button",
			"type": "boolean",
			"default": true,
			"description": "Show On Hand Qty Status Button",
			"routing": {
				"send": {
					"property": "show_on_hand_qty_status_button",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Standard Price",
			"name": "standard_price",
			"type": "number",
			"default": 0,
			"description": "Cost",
			"routing": {
				"send": {
					"property": "standard_price",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Standard Price Update Warning",
			"name": "standard_price_update_warning",
			"type": "string",
			"default": "",
			"description": "Standard Price Update Warning",
			"routing": {
				"send": {
					"property": "standard_price_update_warning",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Stock Notification Partner Ids",
			"name": "stock_notification_partner_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Back in stock Notifications (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "stock_notification_partner_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Supplier Taxes ID",
			"name": "supplier_taxes_id",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Vendor Taxes (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "supplier_taxes_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Tax String",
			"name": "tax_string",
			"type": "string",
			"default": "",
			"description": "Tax String",
			"routing": {
				"send": {
					"property": "tax_string",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Taxes ID",
			"name": "taxes_id",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Customer Taxes (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "taxes_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "To Weight",
			"name": "to_weight",
			"type": "boolean",
			"default": true,
			"description": "To Weigh With Scale",
			"routing": {
				"send": {
					"property": "to_weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Total Value",
			"name": "total_value",
			"type": "number",
			"default": 0,
			"description": "Total Value",
			"routing": {
				"send": {
					"property": "total_value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Uom ID",
			"name": "uom_id",
			"type": "number",
			"default": 0,
			"description": "ID of related uom.uom",
			"routing": {
				"send": {
					"property": "uom_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Uom Name",
			"name": "uom_name",
			"type": "string",
			"default": "",
			"description": "Unit of Measure Name",
			"routing": {
				"send": {
					"property": "uom_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Uom Po ID",
			"name": "uom_po_id",
			"type": "number",
			"default": 0,
			"description": "ID of related uom.uom",
			"routing": {
				"send": {
					"property": "uom_po_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Used In Bom Count",
			"name": "used_in_bom_count",
			"type": "number",
			"default": 0,
			"description": "# BoM Where Used",
			"routing": {
				"send": {
					"property": "used_in_bom_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Valid Ean",
			"name": "valid_ean",
			"type": "boolean",
			"default": true,
			"description": "Barcode is valid EAN",
			"routing": {
				"send": {
					"property": "valid_ean",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Valid Product Template Attribute Line Ids",
			"name": "valid_product_template_attribute_line_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Valid Product Attribute Lines (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "valid_product_template_attribute_line_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Valuation",
			"name": "valuation",
			"type": "string",
			"default": "",
			"description": "Inventory Valuation",
			"routing": {
				"send": {
					"property": "valuation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Value Svl",
			"name": "value_svl",
			"type": "number",
			"default": 0,
			"description": "Value Svl",
			"routing": {
				"send": {
					"property": "value_svl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Virtual Available",
			"name": "virtual_available",
			"type": "number",
			"default": 0,
			"description": "Forecasted Quantity",
			"routing": {
				"send": {
					"property": "virtual_available",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Visible Expense Policy",
			"name": "visible_expense_policy",
			"type": "boolean",
			"default": true,
			"description": "Re-Invoice Policy visible",
			"routing": {
				"send": {
					"property": "visible_expense_policy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Volume",
			"name": "volume",
			"type": "number",
			"default": 0,
			"description": "Volume",
			"routing": {
				"send": {
					"property": "volume",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Volume Uom Name",
			"name": "volume_uom_name",
			"type": "string",
			"default": "",
			"description": "Volume unit of measure label",
			"routing": {
				"send": {
					"property": "volume_uom_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Website Description",
			"name": "website_description",
			"type": "string",
			"default": "",
			"description": "Description for the website",
			"routing": {
				"send": {
					"property": "website_description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Website Meta Description",
			"name": "website_meta_description",
			"type": "string",
			"default": "",
			"description": "Website meta description",
			"routing": {
				"send": {
					"property": "website_meta_description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Website Meta Keywords",
			"name": "website_meta_keywords",
			"type": "string",
			"default": "",
			"description": "Website meta keywords",
			"routing": {
				"send": {
					"property": "website_meta_keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Website Meta Og Img",
			"name": "website_meta_og_img",
			"type": "string",
			"default": "",
			"description": "Website opengraph image",
			"routing": {
				"send": {
					"property": "website_meta_og_img",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Website Meta Title",
			"name": "website_meta_title",
			"type": "string",
			"default": "",
			"description": "Website meta title",
			"routing": {
				"send": {
					"property": "website_meta_title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Website Published",
			"name": "website_published",
			"type": "boolean",
			"default": true,
			"description": "Visible on current website",
			"routing": {
				"send": {
					"property": "website_published",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Website Ribbon ID",
			"name": "website_ribbon_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.ribbon",
			"routing": {
				"send": {
					"property": "website_ribbon_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Website Sequence",
			"name": "website_sequence",
			"type": "number",
			"default": 0,
			"description": "Website Sequence",
			"routing": {
				"send": {
					"property": "website_sequence",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Website Size X",
			"name": "website_size_x",
			"type": "number",
			"default": 0,
			"description": "Size X",
			"routing": {
				"send": {
					"property": "website_size_x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Website Size Y",
			"name": "website_size_y",
			"type": "number",
			"default": 0,
			"description": "Size Y",
			"routing": {
				"send": {
					"property": "website_size_y",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Website URL",
			"name": "website_url",
			"type": "string",
			"default": "",
			"description": "Website URL",
			"routing": {
				"send": {
					"property": "website_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Product"
					],
					"operation": [
						"Upsert Product Product"
					]
				}
			}
		},
		{
			"displayName": "GET /api/product.product/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Get Product Product"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Record ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Get Product Product"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "",
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
						"Product"
					],
					"operation": [
						"Get Product Product"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Product"
					],
					"operation": [
						"Get Product Product"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/product.product/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Delete Product Product"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Record ID to delete",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Delete Product Product"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Product"
					],
					"operation": [
						"Delete Product Product"
					]
				}
			}
		},
		{
			"displayName": "POST /api/product.product/{id}/call",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Call Product Product"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Call Product Product"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Method",
			"name": "method",
			"type": "string",
			"default": "action_confirm",
			"description": "Method name to call",
			"routing": {
				"send": {
					"property": "method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Call Product Product"
					]
				}
			}
		},
		{
			"displayName": "Args",
			"name": "args",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Positional arguments",
			"routing": {
				"send": {
					"property": "args",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Call Product Product"
					]
				}
			}
		},
		{
			"displayName": "Kwargs",
			"name": "kwargs",
			"type": "json",
			"default": "{}",
			"description": "Keyword arguments",
			"routing": {
				"send": {
					"property": "kwargs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Call Product Product"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Product"
					],
					"operation": [
						"Call Product Product"
					]
				}
			}
		},
		{
			"displayName": "GET /api/product.template",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Search Product Template"
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
						"Product"
					],
					"operation": [
						"Search Product Template"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "name,default_code,list_price",
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
						"Product"
					],
					"operation": [
						"Search Product Template"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 80,
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
						"Product"
					],
					"operation": [
						"Search Product Template"
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
						"Product"
					],
					"operation": [
						"Search Product Template"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order, e.g. 'name asc' or 'create_date desc'",
			"default": "",
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
						"Product"
					],
					"operation": [
						"Search Product Template"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Product"
					],
					"operation": [
						"Search Product Template"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/product.template",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
			"description": "Search criteria to find existing record by Product Name",
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Accessory Product Ids",
			"name": "accessory_product_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Accessory Products (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "accessory_product_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Account Tag Ids",
			"name": "account_tag_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Account Tags (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "account_tag_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Allow Out Of Stock Order",
			"name": "allow_out_of_stock_order",
			"type": "boolean",
			"default": true,
			"description": "Continue selling when out-of-stock",
			"routing": {
				"send": {
					"property": "allow_out_of_stock_order",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Alternative Product Ids",
			"name": "alternative_product_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Alternative Products (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "alternative_product_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Available In Pos",
			"name": "available_in_pos",
			"type": "boolean",
			"default": true,
			"description": "Available in POS",
			"routing": {
				"send": {
					"property": "available_in_pos",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Available Threshold",
			"name": "available_threshold",
			"type": "number",
			"default": 0,
			"description": "Show Threshold",
			"routing": {
				"send": {
					"property": "available_threshold",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Base Unit Count",
			"name": "base_unit_count",
			"type": "number",
			"default": 0,
			"description": "Base Unit Count",
			"routing": {
				"send": {
					"property": "base_unit_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Base Unit ID",
			"name": "base_unit_id",
			"type": "number",
			"default": 0,
			"description": "ID of related website.base.unit",
			"routing": {
				"send": {
					"property": "base_unit_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Base Unit Name",
			"name": "base_unit_name",
			"type": "string",
			"default": "",
			"description": "Base Unit Name",
			"routing": {
				"send": {
					"property": "base_unit_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Base Unit Price",
			"name": "base_unit_price",
			"type": "number",
			"default": 0,
			"description": "Price Per Unit",
			"routing": {
				"send": {
					"property": "base_unit_price",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Bom Count",
			"name": "bom_count",
			"type": "number",
			"default": 0,
			"description": "# Bill of Material",
			"routing": {
				"send": {
					"property": "bom_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Can Be Expensed",
			"name": "can_be_expensed",
			"type": "boolean",
			"default": true,
			"description": "Can be Expensed",
			"routing": {
				"send": {
					"property": "can_be_expensed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Can Image 1024 Be Zoomed",
			"name": "can_image_1024_be_zoomed",
			"type": "boolean",
			"default": true,
			"description": "Can Image 1024 be zoomed",
			"routing": {
				"send": {
					"property": "can_image_1024_be_zoomed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Can Publish",
			"name": "can_publish",
			"type": "boolean",
			"default": true,
			"description": "Can Publish",
			"routing": {
				"send": {
					"property": "can_publish",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Categ ID",
			"name": "categ_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.category",
			"routing": {
				"send": {
					"property": "categ_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Combo Ids",
			"name": "combo_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Combinations (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "combo_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Compare List Price",
			"name": "compare_list_price",
			"type": "number",
			"default": 0,
			"description": "Compare to Price",
			"routing": {
				"send": {
					"property": "compare_list_price",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Cost Currency ID",
			"name": "cost_currency_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.currency",
			"routing": {
				"send": {
					"property": "cost_currency_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Country Of Origin",
			"name": "country_of_origin",
			"type": "number",
			"default": 0,
			"description": "ID of related res.country",
			"routing": {
				"send": {
					"property": "country_of_origin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Default Code",
			"name": "default_code",
			"type": "string",
			"default": "",
			"description": "Internal Reference",
			"routing": {
				"send": {
					"property": "default_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Description Ecommerce",
			"name": "description_ecommerce",
			"type": "string",
			"default": "",
			"description": "eCommerce Description",
			"routing": {
				"send": {
					"property": "description_ecommerce",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Description Picking",
			"name": "description_picking",
			"type": "string",
			"default": "",
			"description": "Description on Picking",
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Description Pickingin",
			"name": "description_pickingin",
			"type": "string",
			"default": "",
			"description": "Description on Receptions",
			"routing": {
				"send": {
					"property": "description_pickingin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Description Pickingout",
			"name": "description_pickingout",
			"type": "string",
			"default": "",
			"description": "Description on Delivery Orders",
			"routing": {
				"send": {
					"property": "description_pickingout",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Description Purchase",
			"name": "description_purchase",
			"type": "string",
			"default": "",
			"description": "Purchase Description",
			"routing": {
				"send": {
					"property": "description_purchase",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Description Sale",
			"name": "description_sale",
			"type": "string",
			"default": "",
			"description": "Sales Description",
			"routing": {
				"send": {
					"property": "description_sale",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Description Self Order",
			"name": "description_self_order",
			"type": "string",
			"default": "",
			"description": "Product Description for Self Order",
			"routing": {
				"send": {
					"property": "description_self_order",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Detailed Type",
			"name": "detailed_type",
			"type": "string",
			"default": "",
			"description": "Product Type",
			"routing": {
				"send": {
					"property": "detailed_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Expense Policy",
			"name": "expense_policy",
			"type": "string",
			"default": "",
			"description": "Re-Invoice Expenses",
			"routing": {
				"send": {
					"property": "expense_policy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Expense Policy Tooltip",
			"name": "expense_policy_tooltip",
			"type": "string",
			"default": "",
			"description": "Expense Policy Tooltip",
			"routing": {
				"send": {
					"property": "expense_policy_tooltip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Has Available Route Ids",
			"name": "has_available_route_ids",
			"type": "boolean",
			"default": true,
			"description": "Routes can be selected on this product",
			"routing": {
				"send": {
					"property": "has_available_route_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Has Configurable Attributes",
			"name": "has_configurable_attributes",
			"type": "boolean",
			"default": true,
			"description": "Is a configurable product",
			"routing": {
				"send": {
					"property": "has_configurable_attributes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Hs Code",
			"name": "hs_code",
			"type": "string",
			"default": "",
			"description": "HS Code",
			"routing": {
				"send": {
					"property": "hs_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Image 1024",
			"name": "image_1024",
			"type": "string",
			"default": "",
			"description": "Image 1024",
			"routing": {
				"send": {
					"property": "image_1024",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Image 128",
			"name": "image_128",
			"type": "string",
			"default": "",
			"description": "Image 128",
			"routing": {
				"send": {
					"property": "image_128",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Image 1920",
			"name": "image_1920",
			"type": "string",
			"default": "",
			"description": "Image",
			"routing": {
				"send": {
					"property": "image_1920",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Image 256",
			"name": "image_256",
			"type": "string",
			"default": "",
			"description": "Image 256",
			"routing": {
				"send": {
					"property": "image_256",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Image 512",
			"name": "image_512",
			"type": "string",
			"default": "",
			"description": "Image 512",
			"routing": {
				"send": {
					"property": "image_512",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Incoming Qty",
			"name": "incoming_qty",
			"type": "number",
			"default": 0,
			"description": "Incoming",
			"routing": {
				"send": {
					"property": "incoming_qty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Invoice Policy",
			"name": "invoice_policy",
			"type": "string",
			"default": "",
			"description": "Invoicing Policy",
			"routing": {
				"send": {
					"property": "invoice_policy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Is Kits",
			"name": "is_kits",
			"type": "boolean",
			"default": true,
			"description": "Is Kits",
			"routing": {
				"send": {
					"property": "is_kits",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Is Product Variant",
			"name": "is_product_variant",
			"type": "boolean",
			"default": true,
			"description": "Is a product variant",
			"routing": {
				"send": {
					"property": "is_product_variant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Is Published",
			"name": "is_published",
			"type": "boolean",
			"default": true,
			"description": "Is Published",
			"routing": {
				"send": {
					"property": "is_published",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Is Seo Optimized",
			"name": "is_seo_optimized",
			"type": "boolean",
			"default": true,
			"description": "SEO optimized",
			"routing": {
				"send": {
					"property": "is_seo_optimized",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "L 10 N ID Product Code",
			"name": "l10n_id_product_code",
			"type": "number",
			"default": 0,
			"description": "ID of related l10n_id_efaktur_coretax.product.code",
			"routing": {
				"send": {
					"property": "l10n_id_product_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "List Price",
			"name": "list_price",
			"type": "number",
			"default": 0,
			"description": "Sales Price",
			"routing": {
				"send": {
					"property": "list_price",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Mrp Product Qty",
			"name": "mrp_product_qty",
			"type": "number",
			"default": 0,
			"description": "Manufactured",
			"routing": {
				"send": {
					"property": "mrp_product_qty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Nbr Moves In",
			"name": "nbr_moves_in",
			"type": "number",
			"default": 0,
			"description": "Nbr Moves In",
			"routing": {
				"send": {
					"property": "nbr_moves_in",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Nbr Moves Out",
			"name": "nbr_moves_out",
			"type": "number",
			"default": 0,
			"description": "Nbr Moves Out",
			"routing": {
				"send": {
					"property": "nbr_moves_out",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Nbr Reordering Rules",
			"name": "nbr_reordering_rules",
			"type": "number",
			"default": 0,
			"description": "Reordering Rules",
			"routing": {
				"send": {
					"property": "nbr_reordering_rules",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Optional Product Ids",
			"name": "optional_product_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Optional Products (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "optional_product_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Out Of Stock Message",
			"name": "out_of_stock_message",
			"type": "string",
			"default": "",
			"description": "Out-of-Stock Message",
			"routing": {
				"send": {
					"property": "out_of_stock_message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Outgoing Qty",
			"name": "outgoing_qty",
			"type": "number",
			"default": 0,
			"description": "Outgoing",
			"routing": {
				"send": {
					"property": "outgoing_qty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Pos Categ Ids",
			"name": "pos_categ_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Point of Sale Category (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "pos_categ_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Pricelist Item Count",
			"name": "pricelist_item_count",
			"type": "number",
			"default": 0,
			"description": "Number of price rules",
			"routing": {
				"send": {
					"property": "pricelist_item_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Product Document Count",
			"name": "product_document_count",
			"type": "number",
			"default": 0,
			"description": "Documents Count",
			"routing": {
				"send": {
					"property": "product_document_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Product Properties",
			"name": "product_properties",
			"type": "string",
			"default": "",
			"description": "Properties",
			"routing": {
				"send": {
					"property": "product_properties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Product Tag Ids",
			"name": "product_tag_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Product Template Tags (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "product_tag_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Product Tooltip",
			"name": "product_tooltip",
			"type": "string",
			"default": "",
			"description": "Product Tooltip",
			"routing": {
				"send": {
					"property": "product_tooltip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Product Variant Count",
			"name": "product_variant_count",
			"type": "number",
			"default": 0,
			"description": "# Product Variants",
			"routing": {
				"send": {
					"property": "product_variant_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Product Variant ID",
			"name": "product_variant_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.product",
			"routing": {
				"send": {
					"property": "product_variant_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "project_id",
			"type": "number",
			"default": 0,
			"description": "ID of related project.project",
			"routing": {
				"send": {
					"property": "project_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Project Template ID",
			"name": "project_template_id",
			"type": "number",
			"default": 0,
			"description": "ID of related project.project",
			"routing": {
				"send": {
					"property": "project_template_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Property Account Creditor Price Difference",
			"name": "property_account_creditor_price_difference",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "property_account_creditor_price_difference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Property Account Expense ID",
			"name": "property_account_expense_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "property_account_expense_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Property Account Income ID",
			"name": "property_account_income_id",
			"type": "number",
			"default": 0,
			"description": "ID of related account.account",
			"routing": {
				"send": {
					"property": "property_account_income_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Property Stock Inventory",
			"name": "property_stock_inventory",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "property_stock_inventory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Property Stock Production",
			"name": "property_stock_production",
			"type": "number",
			"default": 0,
			"description": "ID of related stock.location",
			"routing": {
				"send": {
					"property": "property_stock_production",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Public Categ Ids",
			"name": "public_categ_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Website Product Category (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "public_categ_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Purchase Line Warn",
			"name": "purchase_line_warn",
			"type": "string",
			"default": "",
			"description": "Purchase Order Line Warning",
			"routing": {
				"send": {
					"property": "purchase_line_warn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Purchase Line Warn Msg",
			"name": "purchase_line_warn_msg",
			"type": "string",
			"default": "",
			"description": "Message for Purchase Order Line",
			"routing": {
				"send": {
					"property": "purchase_line_warn_msg",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Purchase Method",
			"name": "purchase_method",
			"type": "string",
			"default": "",
			"description": "Control Policy",
			"routing": {
				"send": {
					"property": "purchase_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Purchase Ok",
			"name": "purchase_ok",
			"type": "boolean",
			"default": true,
			"description": "Can be Purchased",
			"routing": {
				"send": {
					"property": "purchase_ok",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Purchased Product Qty",
			"name": "purchased_product_qty",
			"type": "number",
			"default": 0,
			"description": "Purchased",
			"routing": {
				"send": {
					"property": "purchased_product_qty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Qty Available",
			"name": "qty_available",
			"type": "number",
			"default": 0,
			"description": "Quantity On Hand",
			"routing": {
				"send": {
					"property": "qty_available",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Rating Avg",
			"name": "rating_avg",
			"type": "number",
			"default": 0,
			"description": "Average Rating",
			"routing": {
				"send": {
					"property": "rating_avg",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Rating Avg Text",
			"name": "rating_avg_text",
			"type": "string",
			"default": "",
			"description": "Rating Avg Text",
			"routing": {
				"send": {
					"property": "rating_avg_text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Rating Count",
			"name": "rating_count",
			"type": "number",
			"default": 0,
			"description": "Rating count",
			"routing": {
				"send": {
					"property": "rating_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Rating Last Feedback",
			"name": "rating_last_feedback",
			"type": "string",
			"default": "",
			"description": "Rating Last Feedback",
			"routing": {
				"send": {
					"property": "rating_last_feedback",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Rating Last Image",
			"name": "rating_last_image",
			"type": "string",
			"default": "",
			"description": "Rating Last Image",
			"routing": {
				"send": {
					"property": "rating_last_image",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Rating Last Text",
			"name": "rating_last_text",
			"type": "string",
			"default": "",
			"description": "Rating Text",
			"routing": {
				"send": {
					"property": "rating_last_text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Rating Last Value",
			"name": "rating_last_value",
			"type": "number",
			"default": 0,
			"description": "Rating Last Value",
			"routing": {
				"send": {
					"property": "rating_last_value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Rating Percentage Satisfaction",
			"name": "rating_percentage_satisfaction",
			"type": "number",
			"default": 0,
			"description": "Rating Satisfaction",
			"routing": {
				"send": {
					"property": "rating_percentage_satisfaction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Reordering Max Qty",
			"name": "reordering_max_qty",
			"type": "number",
			"default": 0,
			"description": "Reordering Max Qty",
			"routing": {
				"send": {
					"property": "reordering_max_qty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Reordering Min Qty",
			"name": "reordering_min_qty",
			"type": "number",
			"default": 0,
			"description": "Reordering Min Qty",
			"routing": {
				"send": {
					"property": "reordering_min_qty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Responsible ID",
			"name": "responsible_id",
			"type": "number",
			"default": 0,
			"description": "ID of related res.users",
			"routing": {
				"send": {
					"property": "responsible_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Route From Categ Ids",
			"name": "route_from_categ_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Category Routes (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "route_from_categ_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Sale Delay",
			"name": "sale_delay",
			"type": "number",
			"default": 0,
			"description": "Customer Lead Time",
			"routing": {
				"send": {
					"property": "sale_delay",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Sale Line Warn",
			"name": "sale_line_warn",
			"type": "string",
			"default": "",
			"description": "Sales Order Line",
			"routing": {
				"send": {
					"property": "sale_line_warn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Sale Line Warn Msg",
			"name": "sale_line_warn_msg",
			"type": "string",
			"default": "",
			"description": "Message for Sales Order Line",
			"routing": {
				"send": {
					"property": "sale_line_warn_msg",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Sale Ok",
			"name": "sale_ok",
			"type": "boolean",
			"default": true,
			"description": "Can be Sold",
			"routing": {
				"send": {
					"property": "sale_ok",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Sales Count",
			"name": "sales_count",
			"type": "number",
			"default": 0,
			"description": "Sold",
			"routing": {
				"send": {
					"property": "sales_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Self Order Available",
			"name": "self_order_available",
			"type": "boolean",
			"default": true,
			"description": "Available in Self Order",
			"routing": {
				"send": {
					"property": "self_order_available",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Seo Name",
			"name": "seo_name",
			"type": "string",
			"default": "",
			"description": "Seo name",
			"routing": {
				"send": {
					"property": "seo_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Service Policy",
			"name": "service_policy",
			"type": "string",
			"default": "",
			"description": "Service Invoicing Policy",
			"routing": {
				"send": {
					"property": "service_policy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Service To Purchase",
			"name": "service_to_purchase",
			"type": "boolean",
			"default": true,
			"description": "Subcontract Service",
			"routing": {
				"send": {
					"property": "service_to_purchase",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Service Tracking",
			"name": "service_tracking",
			"type": "string",
			"default": "",
			"description": "Create on Order",
			"routing": {
				"send": {
					"property": "service_tracking",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Service Type",
			"name": "service_type",
			"type": "string",
			"default": "",
			"description": "Track Service",
			"routing": {
				"send": {
					"property": "service_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Show Availability",
			"name": "show_availability",
			"type": "boolean",
			"default": true,
			"description": "Show availability Qty",
			"routing": {
				"send": {
					"property": "show_availability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Show Forecasted Qty Status Button",
			"name": "show_forecasted_qty_status_button",
			"type": "boolean",
			"default": true,
			"description": "Show Forecasted Qty Status Button",
			"routing": {
				"send": {
					"property": "show_forecasted_qty_status_button",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Show On Hand Qty Status Button",
			"name": "show_on_hand_qty_status_button",
			"type": "boolean",
			"default": true,
			"description": "Show On Hand Qty Status Button",
			"routing": {
				"send": {
					"property": "show_on_hand_qty_status_button",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Standard Price",
			"name": "standard_price",
			"type": "number",
			"default": 0,
			"description": "Cost",
			"routing": {
				"send": {
					"property": "standard_price",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Supplier Taxes ID",
			"name": "supplier_taxes_id",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Vendor Taxes (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "supplier_taxes_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Tax String",
			"name": "tax_string",
			"type": "string",
			"default": "",
			"description": "Tax String",
			"routing": {
				"send": {
					"property": "tax_string",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Taxes ID",
			"name": "taxes_id",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Customer Taxes (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "taxes_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "To Weight",
			"name": "to_weight",
			"type": "boolean",
			"default": true,
			"description": "To Weigh With Scale",
			"routing": {
				"send": {
					"property": "to_weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Uom ID",
			"name": "uom_id",
			"type": "number",
			"default": 0,
			"description": "ID of related uom.uom",
			"routing": {
				"send": {
					"property": "uom_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Uom Name",
			"name": "uom_name",
			"type": "string",
			"default": "",
			"description": "Unit of Measure Name",
			"routing": {
				"send": {
					"property": "uom_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Uom Po ID",
			"name": "uom_po_id",
			"type": "number",
			"default": 0,
			"description": "ID of related uom.uom",
			"routing": {
				"send": {
					"property": "uom_po_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Used In Bom Count",
			"name": "used_in_bom_count",
			"type": "number",
			"default": 0,
			"description": "# of BoM Where is Used",
			"routing": {
				"send": {
					"property": "used_in_bom_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Valid Product Template Attribute Line Ids",
			"name": "valid_product_template_attribute_line_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Valid Product Attribute Lines (Many2many → list of IDs)",
			"routing": {
				"send": {
					"property": "valid_product_template_attribute_line_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Valuation",
			"name": "valuation",
			"type": "string",
			"default": "",
			"description": "Inventory Valuation",
			"routing": {
				"send": {
					"property": "valuation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Virtual Available",
			"name": "virtual_available",
			"type": "number",
			"default": 0,
			"description": "Forecasted Quantity",
			"routing": {
				"send": {
					"property": "virtual_available",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Visible Expense Policy",
			"name": "visible_expense_policy",
			"type": "boolean",
			"default": true,
			"description": "Re-Invoice Policy visible",
			"routing": {
				"send": {
					"property": "visible_expense_policy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Volume",
			"name": "volume",
			"type": "number",
			"default": 0,
			"description": "Volume",
			"routing": {
				"send": {
					"property": "volume",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Volume Uom Name",
			"name": "volume_uom_name",
			"type": "string",
			"default": "",
			"description": "Volume unit of measure label",
			"routing": {
				"send": {
					"property": "volume_uom_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Website Description",
			"name": "website_description",
			"type": "string",
			"default": "",
			"description": "Description for the website",
			"routing": {
				"send": {
					"property": "website_description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Website Meta Description",
			"name": "website_meta_description",
			"type": "string",
			"default": "",
			"description": "Website meta description",
			"routing": {
				"send": {
					"property": "website_meta_description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Website Meta Keywords",
			"name": "website_meta_keywords",
			"type": "string",
			"default": "",
			"description": "Website meta keywords",
			"routing": {
				"send": {
					"property": "website_meta_keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Website Meta Og Img",
			"name": "website_meta_og_img",
			"type": "string",
			"default": "",
			"description": "Website opengraph image",
			"routing": {
				"send": {
					"property": "website_meta_og_img",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Website Meta Title",
			"name": "website_meta_title",
			"type": "string",
			"default": "",
			"description": "Website meta title",
			"routing": {
				"send": {
					"property": "website_meta_title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Website Published",
			"name": "website_published",
			"type": "boolean",
			"default": true,
			"description": "Visible on current website",
			"routing": {
				"send": {
					"property": "website_published",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Website Ribbon ID",
			"name": "website_ribbon_id",
			"type": "number",
			"default": 0,
			"description": "ID of related product.ribbon",
			"routing": {
				"send": {
					"property": "website_ribbon_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Website Sequence",
			"name": "website_sequence",
			"type": "number",
			"default": 0,
			"description": "Website Sequence",
			"routing": {
				"send": {
					"property": "website_sequence",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Website Size X",
			"name": "website_size_x",
			"type": "number",
			"default": 0,
			"description": "Size X",
			"routing": {
				"send": {
					"property": "website_size_x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Website Size Y",
			"name": "website_size_y",
			"type": "number",
			"default": 0,
			"description": "Size Y",
			"routing": {
				"send": {
					"property": "website_size_y",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Website URL",
			"name": "website_url",
			"type": "string",
			"default": "",
			"description": "Website URL",
			"routing": {
				"send": {
					"property": "website_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Product"
					],
					"operation": [
						"Upsert Product Template"
					]
				}
			}
		},
		{
			"displayName": "GET /api/product.template/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Get Product Template"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Record ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Get Product Template"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Comma-separated field names to return",
			"default": "",
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
						"Product"
					],
					"operation": [
						"Get Product Template"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Product"
					],
					"operation": [
						"Get Product Template"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/product.template/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Delete Product Template"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Record ID to delete",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Delete Product Template"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Product"
					],
					"operation": [
						"Delete Product Template"
					]
				}
			}
		},
		{
			"displayName": "POST /api/product.template/{id}/call",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Call Product Template"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Call Product Template"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Method",
			"name": "method",
			"type": "string",
			"default": "action_confirm",
			"description": "Method name to call",
			"routing": {
				"send": {
					"property": "method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Call Product Template"
					]
				}
			}
		},
		{
			"displayName": "Args",
			"name": "args",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Positional arguments",
			"routing": {
				"send": {
					"property": "args",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Call Product Template"
					]
				}
			}
		},
		{
			"displayName": "Kwargs",
			"name": "kwargs",
			"type": "json",
			"default": "{}",
			"description": "Keyword arguments",
			"routing": {
				"send": {
					"property": "kwargs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Call Product Template"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_odoo_xmlrpc",
			"type": "string",
			"default": "",
			"description": "Use Odoo XML-RPC authenticate() to get UID, then use UID:password for calls.",
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
						"Product"
					],
					"operation": [
						"Call Product Template"
					]
				}
			}
		},
];
