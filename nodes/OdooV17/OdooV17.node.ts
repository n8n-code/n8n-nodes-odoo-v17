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
		...fieldsDescription
                ],
        };
}
