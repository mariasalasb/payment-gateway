export const homebanking_data=[
    
    {
        name:'Cardholder',
        type:'text',
        placeholder:'Nombre del titular de la cuenta',
        class:''
    },
    {
        name:'DocType',
        type:'select',
        placeholder:'Tipo de documento',
        class:'select_half_width',
        options:[
            {option:'DNI'},
            {option:'CUIL'},
        ]
    },
    {
        name:'DocNumber',
        type:'text',
        subtype:'input',
        placeholder:'Número de documento',
        class:'input_half_width'
    },
    {
        name:'Mail',
        type:'text',
        placeholder:'Email',
        class:''
    },
    {
        name:'Bank',
        type:'select',
        placeholder:'Banco',
        class:'',
        options:[
            {
                option: 'Macro',
            },
            {
                option: 'BBVA',
            }
        ]
    }
]