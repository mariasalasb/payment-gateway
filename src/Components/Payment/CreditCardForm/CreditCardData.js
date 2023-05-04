export const creditcard_info=[
    {
        name:'CreditNumber',
        type:'number',
        placeholder:'Número de la tarjeta',
        class:'',
        dataDecidir:'card_number'
    },
    {
        name:'ExpirationDate',
        type:'number',
        placeholder:'Vencimiento MM/AA',
        class:'input_half_width',
        dataDecidir:'card_expiration_month'
    },
    {
        name:'cvc',
        type:'number',
        placeholder:'Código Seg',
        class:'input_half_width',
        dataDecidir:'security_code'
    },
    {
        name:'DocType',
        type:'select',
        placeholder:'Tipo de Documento',
        class:'select_half_width',
        dataDecidir:'card_holder_doc_type',
        options:[
            {option:'DNI'},
            {option:'CUIL'},
        ]
    },
    {
        name:'DocNumber',
        type:'number',
        placeholder:'Número de Documento',
        class:'input_half_width',
        dataDecidir:'card_holder_doc_number'
    },
    {
        name:'Cardholder',
        type:'text',
        placeholder:'Nombre del titular',
        class:'',
        dataDecidir:'card_holder_name'
    }
]