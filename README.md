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
<summary><b>Account</b> (35 operations)</summary>

- Get Search read Account
- Put Upsert Account
- Get Account by ID
- Delete Account
- Post Call method on Account
- Get Search read Journal
- Put Upsert Journal
- Get Journal by ID
- Delete Journal
- Post Call method on Journal
- Get Search read Journal Entry
- Put Upsert Move
- Get Journal Entry by ID
- Delete Journal Entry
- Post Call method on Journal Entry
- Get Search read Journal Item
- Put Upsert Line
- Get Journal Item by ID
- Delete Journal Item
- Post Call method on Journal Item
- Get Search read Payments
- Put Upsert Payment
- Get Payments by ID
- Delete Payments
- Post Call method on Payments
- Get Search read Tax
- Put Upsert Tax
- Get Tax by ID
- Delete Tax
- Post Call method on Tax
- Get Search read Tax Group
- Put Upsert Group
- Get Tax Group by ID
- Delete Tax Group
- Post Call method on Tax Group

</details>

<details>
<summary><b>Crm</b> (15 operations)</summary>

- Get Search read Lead Opportunity
- Put Upsert Lead
- Get Lead Opportunity by ID
- Delete Lead Opportunity
- Post Call method on Lead Opportunity
- Get Search read CRM Stages
- Put Upsert Stage
- Get CRM Stages by ID
- Delete CRM Stages
- Post Call method on CRM Stages
- Get Search read CRM Tag
- Put Upsert Tag
- Get CRM Tag by ID
- Delete CRM Tag
- Post Call method on CRM Tag

</details>

<details>
<summary><b>Hr</b> (15 operations)</summary>

- Get Search read Department
- Put Upsert Department
- Get Department by ID
- Delete Department
- Post Call method on Department
- Get Search read Employee
- Put Upsert Employee
- Get Employee by ID
- Delete Employee
- Post Call method on Employee
- Get Search read Job Position
- Put Upsert Job
- Get Job Position by ID
- Delete Job Position
- Post Call method on Job Position

</details>

<details>
<summary><b>Mail</b> (10 operations)</summary>

- Get Search read Message
- Put Upsert Message
- Get Message by ID
- Delete Message
- Post Call method on Message
- Get Search read Email Thread
- Put Upsert Thread
- Get Email Thread by ID
- Delete Email Thread
- Post Call method on Email Thread

</details>

<details>
<summary><b>Mrp</b> (15 operations)</summary>

- Get Search read Bill of Material
- Put Upsert Bom
- Get Bill of Material by ID
- Delete Bill of Material
- Post Call method on Bill of Material
- Get Search read Production Order
- Put Upsert Production
- Get Production Order by ID
- Delete Production Order
- Post Call method on Production Order
- Get Search read Work Order
- Put Upsert Workorder
- Get Work Order by ID
- Delete Work Order
- Post Call method on Work Order

</details>

<details>
<summary><b>Pos</b> (20 operations)</summary>

- Get Search read Point of Sale Configuration
- Put Upsert Config
- Get Point of Sale Configuration by ID
- Delete Point of Sale Configuration
- Post Call method on Point of Sale Configuration
- Get Search read Point of Sale Orders
- Put Upsert Order
- Get Point of Sale Orders by ID
- Delete Point of Sale Orders
- Post Call method on Point of Sale Orders
- Get Search read Point of Sale Order Lines
- Put Upsert Line
- Get Point of Sale Order Lines by ID
- Delete Point of Sale Order Lines
- Post Call method on Point of Sale Order Lines
- Get Search read Point of Sale Session
- Put Upsert Session
- Get Point of Sale Session by ID
- Delete Point of Sale Session
- Post Call method on Point of Sale Session

</details>

<details>
<summary><b>Product</b> (25 operations)</summary>

- Get Search read Product Attribute
- Put Upsert Attribute
- Get Product Attribute by ID
- Delete Product Attribute
- Post Call method on Product Attribute
- Get Search read Attribute Value
- Put Upsert Value
- Get Attribute Value by ID
- Delete Attribute Value
- Post Call method on Attribute Value
- Get Search read Product Category
- Put Upsert Category
- Get Product Category by ID
- Delete Product Category
- Post Call method on Product Category
- Get Search read Product Variant
- Put Upsert Product
- Get Product Variant by ID
- Delete Product Variant
- Post Call method on Product Variant
- Get Search read Product
- Put Upsert Template
- Get Product by ID
- Delete Product
- Post Call method on Product

</details>

<details>
<summary><b>Project</b> (10 operations)</summary>

- Get Search read Project
- Put Upsert Project
- Get Project by ID
- Delete Project
- Post Call method on Project
- Get Search read Task
- Put Upsert Task
- Get Task by ID
- Delete Task
- Post Call method on Task

</details>

<details>
<summary><b>Purchase</b> (10 operations)</summary>

- Get Search read Purchase Order
- Put Upsert Order
- Get Purchase Order by ID
- Delete Purchase Order
- Post Call method on Purchase Order
- Get Search read Purchase Order Line
- Put Upsert Line
- Get Purchase Order Line by ID
- Delete Purchase Order Line
- Post Call method on Purchase Order Line

</details>

<details>
<summary><b>Res</b> (15 operations)</summary>

- Get Search read Contact
- Put Upsert Partner
- Get Contact by ID
- Delete Contact
- Post Call method on Contact
- Get Search read Bank Accounts
- Put Upsert Bank
- Get Bank Accounts by ID
- Delete Bank Accounts
- Post Call method on Bank Accounts
- Get Search read Partner Tags
- Put Upsert Category
- Get Partner Tags by ID
- Delete Partner Tags
- Post Call method on Partner Tags

</details>

<details>
<summary><b>Sale</b> (10 operations)</summary>

- Get Search read Sales Order
- Put Upsert Order
- Get Sales Order by ID
- Delete Sales Order
- Post Call method on Sales Order
- Get Search read Sales Order Line
- Put Upsert Line
- Get Sales Order Line by ID
- Delete Sales Order Line
- Post Call method on Sales Order Line

</details>

<details>
<summary><b>Stock</b> (35 operations)</summary>

- Get Search read Inventory Locations
- Put Upsert Location
- Get Inventory Locations by ID
- Delete Inventory Locations
- Post Call method on Inventory Locations
- Get Search read Stock Move
- Put Upsert Move
- Get Stock Move by ID
- Delete Stock Move
- Post Call method on Stock Move
- Get Search read Product Moves Stock Move Line
- Put Upsert Line
- Get Product Moves Stock Move Line by ID
- Delete Product Moves Stock Move Line
- Post Call method on Product Moves Stock Move Line
- Get Search read Transfer
- Put Upsert Picking
- Get Transfer by ID
- Delete Transfer
- Post Call method on Transfer
- Get Search read Picking Type
- Put Upsert Type
- Get Picking Type by ID
- Delete Picking Type
- Post Call method on Picking Type
- Get Search read Quants
- Put Upsert Quant
- Get Quants by ID
- Delete Quants
- Post Call method on Quants
- Get Search read Warehouse
- Put Upsert Warehouse
- Get Warehouse by ID
- Delete Warehouse
- Post Call method on Warehouse

</details>

<details>
<summary><b>Uom</b> (10 operations)</summary>

- Get Search read Product UoM Categories
- Put Upsert Category
- Get Product UoM Categories by ID
- Delete Product UoM Categories
- Post Call method on Product UoM Categories
- Get Search read Product Unit of Measure
- Put Upsert Uom
- Get Product Unit of Measure by ID
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
