import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { accountDescription } from './resources/account';
import { crmDescription } from './resources/crm';
import { hrDescription } from './resources/hr';
import { mailDescription } from './resources/mail';
import { mrpDescription } from './resources/mrp';
import { posDescription } from './resources/pos';
import { productDescription } from './resources/product';
import { projectDescription } from './resources/project';
import { purchaseDescription } from './resources/purchase';
import { resDescription } from './resources/res';
import { saleDescription } from './resources/sale';
import { stockDescription } from './resources/stock';
import { uomDescription } from './resources/uom';
import { fieldsDescription } from './resources/fields';
import { accountAccountDescription } from './resources/account-account';
import { accountJournalDescription } from './resources/account-journal';
import { accountMoveDescription } from './resources/account-move';
import { accountMoveLineDescription } from './resources/account-move-line';
import { accountPaymentDescription } from './resources/account-payment';
import { accountTaxDescription } from './resources/account-tax';
import { accountTaxGroupDescription } from './resources/account-tax-group';
import { crmLeadDescription } from './resources/crm-lead';
import { crmStageDescription } from './resources/crm-stage';
import { crmTagDescription } from './resources/crm-tag';
import { hrDepartmentDescription } from './resources/hr-department';
import { hrEmployeeDescription } from './resources/hr-employee';
import { hrJobDescription } from './resources/hr-job';
import { mailMessageDescription } from './resources/mail-message';
import { mailThreadDescription } from './resources/mail-thread';
import { mrpBomDescription } from './resources/mrp-bom';
import { mrpProductionDescription } from './resources/mrp-production';
import { mrpWorkorderDescription } from './resources/mrp-workorder';
import { posConfigDescription } from './resources/pos-config';
import { posOrderDescription } from './resources/pos-order';
import { posOrderLineDescription } from './resources/pos-order-line';
import { posSessionDescription } from './resources/pos-session';
import { productAttributeDescription } from './resources/product-attribute';
import { productAttributeValueDescription } from './resources/product-attribute-value';
import { productCategoryDescription } from './resources/product-category';
import { productProductDescription } from './resources/product-product';
import { productTemplateDescription } from './resources/product-template';
import { projectProjectDescription } from './resources/project-project';
import { projectTaskDescription } from './resources/project-task';
import { purchaseOrderDescription } from './resources/purchase-order';
import { purchaseOrderLineDescription } from './resources/purchase-order-line';
import { resPartnerDescription } from './resources/res-partner';
import { resPartnerBankDescription } from './resources/res-partner-bank';
import { resPartnerCategoryDescription } from './resources/res-partner-category';
import { saleOrderDescription } from './resources/sale-order';
import { saleOrderLineDescription } from './resources/sale-order-line';
import { stockLocationDescription } from './resources/stock-location';
import { stockMoveDescription } from './resources/stock-move';
import { stockMoveLineDescription } from './resources/stock-move-line';
import { stockPickingDescription } from './resources/stock-picking';
import { stockPickingTypeDescription } from './resources/stock-picking-type';
import { stockQuantDescription } from './resources/stock-quant';
import { stockWarehouseDescription } from './resources/stock-warehouse';
import { uomCategoryDescription } from './resources/uom-category';
import { uomUomDescription } from './resources/uom-uom';

export class OdooV17 implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Odoo V17',
                name: 'N8nDevOdooV17',
                icon: { light: 'file:./odoo-v17.png', dark: 'file:./odoo-v17.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Odoo v17 is an all-in-one open-source ERP for managing all aspects of business in a single platform',
                defaults: { name: 'Odoo V17' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevOdooV17Api',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Account",
					"value": "Account",
					"description": "Operations on account.* models"
				},
				{
					"name": "Crm",
					"value": "Crm",
					"description": "Operations on crm.* models"
				},
				{
					"name": "Hr",
					"value": "Hr",
					"description": "Operations on hr.* models"
				},
				{
					"name": "Mail",
					"value": "Mail",
					"description": "Operations on mail.* models"
				},
				{
					"name": "Mrp",
					"value": "Mrp",
					"description": "Operations on mrp.* models"
				},
				{
					"name": "Pos",
					"value": "Pos",
					"description": "Operations on pos.* models"
				},
				{
					"name": "Product",
					"value": "Product",
					"description": "Operations on product.* models"
				},
				{
					"name": "Project",
					"value": "Project",
					"description": "Operations on project.* models"
				},
				{
					"name": "Purchase",
					"value": "Purchase",
					"description": "Operations on purchase.* models"
				},
				{
					"name": "Res",
					"value": "Res",
					"description": "Operations on res.* models"
				},
				{
					"name": "Sale",
					"value": "Sale",
					"description": "Operations on sale.* models"
				},
				{
					"name": "Stock",
					"value": "Stock",
					"description": "Operations on stock.* models"
				},
				{
					"name": "Uom",
					"value": "Uom",
					"description": "Operations on uom.* models"
				},
				{
					"name": "Fields",
					"value": "Fields",
					"description": ""
				},
				{
					"name": "Account Account",
					"value": "Account Account",
					"description": ""
				},
				{
					"name": "Account Journal",
					"value": "Account Journal",
					"description": ""
				},
				{
					"name": "Account Move",
					"value": "Account Move",
					"description": ""
				},
				{
					"name": "Account Move Line",
					"value": "Account Move Line",
					"description": ""
				},
				{
					"name": "Account Payment",
					"value": "Account Payment",
					"description": ""
				},
				{
					"name": "Account Tax",
					"value": "Account Tax",
					"description": ""
				},
				{
					"name": "Account Tax Group",
					"value": "Account Tax Group",
					"description": ""
				},
				{
					"name": "Crm Lead",
					"value": "Crm Lead",
					"description": ""
				},
				{
					"name": "Crm Stage",
					"value": "Crm Stage",
					"description": ""
				},
				{
					"name": "Crm Tag",
					"value": "Crm Tag",
					"description": ""
				},
				{
					"name": "Hr Department",
					"value": "Hr Department",
					"description": ""
				},
				{
					"name": "Hr Employee",
					"value": "Hr Employee",
					"description": ""
				},
				{
					"name": "Hr Job",
					"value": "Hr Job",
					"description": ""
				},
				{
					"name": "Mail Message",
					"value": "Mail Message",
					"description": ""
				},
				{
					"name": "Mail Thread",
					"value": "Mail Thread",
					"description": ""
				},
				{
					"name": "Mrp Bom",
					"value": "Mrp Bom",
					"description": ""
				},
				{
					"name": "Mrp Production",
					"value": "Mrp Production",
					"description": ""
				},
				{
					"name": "Mrp Workorder",
					"value": "Mrp Workorder",
					"description": ""
				},
				{
					"name": "Pos Config",
					"value": "Pos Config",
					"description": ""
				},
				{
					"name": "Pos Order",
					"value": "Pos Order",
					"description": ""
				},
				{
					"name": "Pos Order Line",
					"value": "Pos Order Line",
					"description": ""
				},
				{
					"name": "Pos Session",
					"value": "Pos Session",
					"description": ""
				},
				{
					"name": "Product Attribute",
					"value": "Product Attribute",
					"description": ""
				},
				{
					"name": "Product Attribute Value",
					"value": "Product Attribute Value",
					"description": ""
				},
				{
					"name": "Product Category",
					"value": "Product Category",
					"description": ""
				},
				{
					"name": "Product Product",
					"value": "Product Product",
					"description": ""
				},
				{
					"name": "Product Template",
					"value": "Product Template",
					"description": ""
				},
				{
					"name": "Project Project",
					"value": "Project Project",
					"description": ""
				},
				{
					"name": "Project Task",
					"value": "Project Task",
					"description": ""
				},
				{
					"name": "Purchase Order",
					"value": "Purchase Order",
					"description": ""
				},
				{
					"name": "Purchase Order Line",
					"value": "Purchase Order Line",
					"description": ""
				},
				{
					"name": "Res Partner",
					"value": "Res Partner",
					"description": ""
				},
				{
					"name": "Res Partner Bank",
					"value": "Res Partner Bank",
					"description": ""
				},
				{
					"name": "Res Partner Category",
					"value": "Res Partner Category",
					"description": ""
				},
				{
					"name": "Sale Order",
					"value": "Sale Order",
					"description": ""
				},
				{
					"name": "Sale Order Line",
					"value": "Sale Order Line",
					"description": ""
				},
				{
					"name": "Stock Location",
					"value": "Stock Location",
					"description": ""
				},
				{
					"name": "Stock Move",
					"value": "Stock Move",
					"description": ""
				},
				{
					"name": "Stock Move Line",
					"value": "Stock Move Line",
					"description": ""
				},
				{
					"name": "Stock Picking",
					"value": "Stock Picking",
					"description": ""
				},
				{
					"name": "Stock Picking Type",
					"value": "Stock Picking Type",
					"description": ""
				},
				{
					"name": "Stock Quant",
					"value": "Stock Quant",
					"description": ""
				},
				{
					"name": "Stock Warehouse",
					"value": "Stock Warehouse",
					"description": ""
				},
				{
					"name": "Uom Category",
					"value": "Uom Category",
					"description": ""
				},
				{
					"name": "Uom Uom",
					"value": "Uom Uom",
					"description": ""
				}
			],
			"default": ""
		},
		...accountDescription,
		...crmDescription,
		...hrDescription,
		...mailDescription,
		...mrpDescription,
		...posDescription,
		...productDescription,
		...projectDescription,
		...purchaseDescription,
		...resDescription,
		...saleDescription,
		...stockDescription,
		...uomDescription,
		...fieldsDescription,
		...accountAccountDescription,
		...accountJournalDescription,
		...accountMoveDescription,
		...accountMoveLineDescription,
		...accountPaymentDescription,
		...accountTaxDescription,
		...accountTaxGroupDescription,
		...crmLeadDescription,
		...crmStageDescription,
		...crmTagDescription,
		...hrDepartmentDescription,
		...hrEmployeeDescription,
		...hrJobDescription,
		...mailMessageDescription,
		...mailThreadDescription,
		...mrpBomDescription,
		...mrpProductionDescription,
		...mrpWorkorderDescription,
		...posConfigDescription,
		...posOrderDescription,
		...posOrderLineDescription,
		...posSessionDescription,
		...productAttributeDescription,
		...productAttributeValueDescription,
		...productCategoryDescription,
		...productProductDescription,
		...productTemplateDescription,
		...projectProjectDescription,
		...projectTaskDescription,
		...purchaseOrderDescription,
		...purchaseOrderLineDescription,
		...resPartnerDescription,
		...resPartnerBankDescription,
		...resPartnerCategoryDescription,
		...saleOrderDescription,
		...saleOrderLineDescription,
		...stockLocationDescription,
		...stockMoveDescription,
		...stockMoveLineDescription,
		...stockPickingDescription,
		...stockPickingTypeDescription,
		...stockQuantDescription,
		...stockWarehouseDescription,
		...uomCategoryDescription,
		...uomUomDescription
                ],
        };
}
