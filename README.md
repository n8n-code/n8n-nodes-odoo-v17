# @n8n-dev/n8n-nodes-odoo-v17

![odoo-v17 Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-odoo-v17.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-odoo-v17)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing odoo-v17 API integrations by hand.**

Every time you connect n8n to odoo-v17, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to odoo-v17 took 5 minutes, not half a day?**

This node gives you **14+ resources** out of the box: **Account**, **Crm**, **Hr**, **Mail**, **Mrp**, and 9 more: with full CRUD operations, typed parameters, and zero manual configuration.

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
<summary><b>Account</b> (14 operations)</summary>

- Get Search read Account
- Put Upsert Account
- Get Search read Journal
- Put Upsert Journal
- Get Search read Journal Entry
- Put Upsert Move
- Get Search read Journal Item
- Put Upsert Line
- Get Search read Payments
- Put Upsert Payment
- Get Search read Tax
- Put Upsert Tax
- Get Search read Tax Group
- Put Upsert Group

</details>

<details>
<summary><b>Crm</b> (6 operations)</summary>

- Get Search read Lead Opportunity
- Put Upsert Lead
- Get Search read CRM Stages
- Put Upsert Stage
- Get Search read CRM Tag
- Put Upsert Tag

</details>

<details>
<summary><b>Hr</b> (6 operations)</summary>

- Get Search read Department
- Put Upsert Department
- Get Search read Employee
- Put Upsert Employee
- Get Search read Job Position
- Put Upsert Job

</details>

<details>
<summary><b>Mail</b> (4 operations)</summary>

- Get Search read Message
- Put Upsert Message
- Get Search read Email Thread
- Put Upsert Thread

</details>

<details>
<summary><b>Mrp</b> (6 operations)</summary>

- Get Search read Bill of Material
- Put Upsert Bom
- Get Search read Production Order
- Put Upsert Production
- Get Search read Work Order
- Put Upsert Workorder

</details>

<details>
<summary><b>Pos</b> (8 operations)</summary>

- Get Search read Point of Sale Configuration
- Put Upsert Config
- Get Search read Point of Sale Orders
- Put Upsert Order
- Get Search read Point of Sale Order Lines
- Put Upsert Line
- Get Search read Point of Sale Session
- Put Upsert Session

</details>

<details>
<summary><b>Product</b> (10 operations)</summary>

- Get Search read Product Attribute
- Put Upsert Attribute
- Get Search read Attribute Value
- Put Upsert Value
- Get Search read Product Category
- Put Upsert Category
- Get Search read Product Variant
- Put Upsert Product
- Get Search read Product
- Put Upsert Template

</details>

<details>
<summary><b>Project</b> (4 operations)</summary>

- Get Search read Project
- Put Upsert Project
- Get Search read Task
- Put Upsert Task

</details>

<details>
<summary><b>Purchase</b> (4 operations)</summary>

- Get Search read Purchase Order
- Put Upsert Order
- Get Search read Purchase Order Line
- Put Upsert Line

</details>

<details>
<summary><b>Res</b> (6 operations)</summary>

- Get Search read Contact
- Put Upsert Partner
- Get Search read Bank Accounts
- Put Upsert Bank
- Get Search read Partner Tags
- Put Upsert Category

</details>

<details>
<summary><b>Sale</b> (4 operations)</summary>

- Get Search read Sales Order
- Put Upsert Order
- Get Search read Sales Order Line
- Put Upsert Line

</details>

<details>
<summary><b>Stock</b> (14 operations)</summary>

- Get Search read Inventory Locations
- Put Upsert Location
- Get Search read Stock Move
- Put Upsert Move
- Get Search read Product Moves Stock Move Line
- Put Upsert Line
- Get Search read Transfer
- Put Upsert Picking
- Get Search read Picking Type
- Put Upsert Type
- Get Search read Quants
- Put Upsert Quant
- Get Search read Warehouse
- Put Upsert Warehouse

</details>

<details>
<summary><b>Uom</b> (4 operations)</summary>

- Get Search read Product UoM Categories
- Put Upsert Category
- Get Search read Product Unit of Measure
- Put Upsert Uom

</details>

<details>
<summary><b>Fields</b> (45 operations)</summary>

- Get account account field metadata
- Get account journal field metadata
- Get account move field metadata
- Get account move line field metadata
- Get account payment field metadata
- Get account tax field metadata
- Get account tax group field metadata
- Get crm lead field metadata
- Get crm stage field metadata
- Get crm tag field metadata
- Get hr department field metadata
- Get hr employee field metadata
- Get hr job field metadata
- Get mail message field metadata
- Get mail thread field metadata
- Get mrp bom field metadata
- Get mrp production field metadata
- Get mrp workorder field metadata
- Get pos config field metadata
- Get pos order field metadata
- Get pos order line field metadata
- Get pos session field metadata
- Get product attribute field metadata
- Get product attribute value field metadata
- Get product category field metadata
- Get product product field metadata
- Get product template field metadata
- Get project project field metadata
- Get project task field metadata
- Get purchase order field metadata
- Get purchase order line field metadata
- Get res partner field metadata
- Get res partner bank field metadata
- Get res partner category field metadata
- Get sale order field metadata
- Get sale order line field metadata
- Get stock location field metadata
- Get stock move field metadata
- Get stock move line field metadata
- Get stock picking field metadata
- Get stock picking type field metadata
- Get stock quant field metadata
- Get stock warehouse field metadata
- Get uom category field metadata
- Get uom uom field metadata

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
