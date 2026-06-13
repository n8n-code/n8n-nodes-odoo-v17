# @n8n-dev/n8n-nodes-odoo-v17

![odoo-v17 Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-odoo-v17.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-odoo-v17)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing odoo-v17 API integrations by hand.**

Every time you connect n8n to odoo-v17, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to odoo-v17 took 5 minutes, not half a day?**

This node gives you **13+ resources** out of the box: **Account**, **Crm**, **Hr**, **Mail**, **Mrp**, and 8 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-odoo-v17
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-odoo-v17`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **odoo-v17 API** → paste your API key
3. Drag the **odoo-v17** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Account</b> (42 operations)</summary>

- Get Search read Account
- Post Create Account
- Get Account by ID
- Put Update Account
- Delete Account
- Post Call method on Account
- Get Search read Journal
- Post Create Journal
- Get Journal by ID
- Put Update Journal
- Delete Journal
- Post Call method on Journal
- Get Search read Journal Entry
- Post Create Journal Entry
- Get Journal Entry by ID
- Put Update Journal Entry
- Delete Journal Entry
- Post Call method on Journal Entry
- Get Search read Journal Item
- Post Create Journal Item
- Get Journal Item by ID
- Put Update Journal Item
- Delete Journal Item
- Post Call method on Journal Item
- Get Search read Payments
- Post Create Payments
- Get Payments by ID
- Put Update Payments
- Delete Payments
- Post Call method on Payments
- Get Search read Tax
- Post Create Tax
- Get Tax by ID
- Put Update Tax
- Delete Tax
- Post Call method on Tax
- Get Search read Tax Group
- Post Create Tax Group
- Get Tax Group by ID
- Put Update Tax Group
- Delete Tax Group
- Post Call method on Tax Group

</details>

<details>
<summary><b>Crm</b> (18 operations)</summary>

- Get Search read Lead Opportunity
- Post Create Lead Opportunity
- Get Lead Opportunity by ID
- Put Update Lead Opportunity
- Delete Lead Opportunity
- Post Call method on Lead Opportunity
- Get Search read CRM Stages
- Post Create CRM Stages
- Get CRM Stages by ID
- Put Update CRM Stages
- Delete CRM Stages
- Post Call method on CRM Stages
- Get Search read CRM Tag
- Post Create CRM Tag
- Get CRM Tag by ID
- Put Update CRM Tag
- Delete CRM Tag
- Post Call method on CRM Tag

</details>

<details>
<summary><b>Hr</b> (18 operations)</summary>

- Get Search read Department
- Post Create Department
- Get Department by ID
- Put Update Department
- Delete Department
- Post Call method on Department
- Get Search read Employee
- Post Create Employee
- Get Employee by ID
- Put Update Employee
- Delete Employee
- Post Call method on Employee
- Get Search read Job Position
- Post Create Job Position
- Get Job Position by ID
- Put Update Job Position
- Delete Job Position
- Post Call method on Job Position

</details>

<details>
<summary><b>Mail</b> (12 operations)</summary>

- Get Search read Message
- Post Create Message
- Get Message by ID
- Put Update Message
- Delete Message
- Post Call method on Message
- Get Search read Email Thread
- Post Create Email Thread
- Get Email Thread by ID
- Put Update Email Thread
- Delete Email Thread
- Post Call method on Email Thread

</details>

<details>
<summary><b>Mrp</b> (18 operations)</summary>

- Get Search read Bill of Material
- Post Create Bill of Material
- Get Bill of Material by ID
- Put Update Bill of Material
- Delete Bill of Material
- Post Call method on Bill of Material
- Get Search read Production Order
- Post Create Production Order
- Get Production Order by ID
- Put Update Production Order
- Delete Production Order
- Post Call method on Production Order
- Get Search read Work Order
- Post Create Work Order
- Get Work Order by ID
- Put Update Work Order
- Delete Work Order
- Post Call method on Work Order

</details>

<details>
<summary><b>Pos</b> (24 operations)</summary>

- Get Search read Point of Sale Configuration
- Post Create Point of Sale Configuration
- Get Point of Sale Configuration by ID
- Put Update Point of Sale Configuration
- Delete Point of Sale Configuration
- Post Call method on Point of Sale Configuration
- Get Search read Point of Sale Orders
- Post Create Point of Sale Orders
- Get Point of Sale Orders by ID
- Put Update Point of Sale Orders
- Delete Point of Sale Orders
- Post Call method on Point of Sale Orders
- Get Search read Point of Sale Order Lines
- Post Create Point of Sale Order Lines
- Get Point of Sale Order Lines by ID
- Put Update Point of Sale Order Lines
- Delete Point of Sale Order Lines
- Post Call method on Point of Sale Order Lines
- Get Search read Point of Sale Session
- Post Create Point of Sale Session
- Get Point of Sale Session by ID
- Put Update Point of Sale Session
- Delete Point of Sale Session
- Post Call method on Point of Sale Session

</details>

<details>
<summary><b>Product</b> (30 operations)</summary>

- Get Search read Product Attribute
- Post Create Product Attribute
- Get Product Attribute by ID
- Put Update Product Attribute
- Delete Product Attribute
- Post Call method on Product Attribute
- Get Search read Attribute Value
- Post Create Attribute Value
- Get Attribute Value by ID
- Put Update Attribute Value
- Delete Attribute Value
- Post Call method on Attribute Value
- Get Search read Product Category
- Post Create Product Category
- Get Product Category by ID
- Put Update Product Category
- Delete Product Category
- Post Call method on Product Category
- Get Search read Product Variant
- Post Create Product Variant
- Get Product Variant by ID
- Put Update Product Variant
- Delete Product Variant
- Post Call method on Product Variant
- Get Search read Product
- Post Create Product
- Get Product by ID
- Put Update Product
- Delete Product
- Post Call method on Product

</details>

<details>
<summary><b>Project</b> (12 operations)</summary>

- Get Search read Project
- Post Create Project
- Get Project by ID
- Put Update Project
- Delete Project
- Post Call method on Project
- Get Search read Task
- Post Create Task
- Get Task by ID
- Put Update Task
- Delete Task
- Post Call method on Task

</details>

<details>
<summary><b>Purchase</b> (12 operations)</summary>

- Get Search read Purchase Order
- Post Create Purchase Order
- Get Purchase Order by ID
- Put Update Purchase Order
- Delete Purchase Order
- Post Call method on Purchase Order
- Get Search read Purchase Order Line
- Post Create Purchase Order Line
- Get Purchase Order Line by ID
- Put Update Purchase Order Line
- Delete Purchase Order Line
- Post Call method on Purchase Order Line

</details>

<details>
<summary><b>Res</b> (18 operations)</summary>

- Get Search read Contact
- Post Create Contact
- Get Contact by ID
- Put Update Contact
- Delete Contact
- Post Call method on Contact
- Get Search read Bank Accounts
- Post Create Bank Accounts
- Get Bank Accounts by ID
- Put Update Bank Accounts
- Delete Bank Accounts
- Post Call method on Bank Accounts
- Get Search read Partner Tags
- Post Create Partner Tags
- Get Partner Tags by ID
- Put Update Partner Tags
- Delete Partner Tags
- Post Call method on Partner Tags

</details>

<details>
<summary><b>Sale</b> (12 operations)</summary>

- Get Search read Sales Order
- Post Create Sales Order
- Get Sales Order by ID
- Put Update Sales Order
- Delete Sales Order
- Post Call method on Sales Order
- Get Search read Sales Order Line
- Post Create Sales Order Line
- Get Sales Order Line by ID
- Put Update Sales Order Line
- Delete Sales Order Line
- Post Call method on Sales Order Line

</details>

<details>
<summary><b>Stock</b> (42 operations)</summary>

- Get Search read Inventory Locations
- Post Create Inventory Locations
- Get Inventory Locations by ID
- Put Update Inventory Locations
- Delete Inventory Locations
- Post Call method on Inventory Locations
- Get Search read Stock Move
- Post Create Stock Move
- Get Stock Move by ID
- Put Update Stock Move
- Delete Stock Move
- Post Call method on Stock Move
- Get Search read Product Moves Stock Move Line
- Post Create Product Moves Stock Move Line
- Get Product Moves Stock Move Line by ID
- Put Update Product Moves Stock Move Line
- Delete Product Moves Stock Move Line
- Post Call method on Product Moves Stock Move Line
- Get Search read Transfer
- Post Create Transfer
- Get Transfer by ID
- Put Update Transfer
- Delete Transfer
- Post Call method on Transfer
- Get Search read Picking Type
- Post Create Picking Type
- Get Picking Type by ID
- Put Update Picking Type
- Delete Picking Type
- Post Call method on Picking Type
- Get Search read Quants
- Post Create Quants
- Get Quants by ID
- Put Update Quants
- Delete Quants
- Post Call method on Quants
- Get Search read Warehouse
- Post Create Warehouse
- Get Warehouse by ID
- Put Update Warehouse
- Delete Warehouse
- Post Call method on Warehouse

</details>

<details>
<summary><b>Uom</b> (12 operations)</summary>

- Get Search read Product UoM Categories
- Post Create Product UoM Categories
- Get Product UoM Categories by ID
- Put Update Product UoM Categories
- Delete Product UoM Categories
- Post Call method on Product UoM Categories
- Get Search read Product Unit of Measure
- Post Create Product Unit of Measure
- Get Product Unit of Measure by ID
- Put Update Product Unit of Measure
- Delete Product Unit of Measure
- Post Call method on Product Unit of Measure

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from odoo-v17 docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official odoo-v17 OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **odoo-v17** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the odoo-v17 API updates, this node updates too.

---


## License

MIT © [kelvinzer0](https://github.com/n8n-code)
