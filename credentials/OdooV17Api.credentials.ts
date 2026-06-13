import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class OdooV17Api implements ICredentialType {
        name = 'N8nDevOdooV17Api';

        displayName = 'Odoo V17 API';

        icon: Icon = { light: 'file:../nodes/OdooV17/odoo-v17.png', dark: 'file:../nodes/OdooV17/odoo-v17.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://your-odoo-instance.com',
                        required: true,
                        placeholder: 'https://your-odoo-instance.com',
                        description: 'The base URL of your Odoo V17 API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
