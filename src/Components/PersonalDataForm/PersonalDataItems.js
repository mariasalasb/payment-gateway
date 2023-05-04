import { intent } from "../../Intents/intent"

export const personal_data=[
    
    {
        name:'PersonType',
        type:'select',
        placeholder:'Tipo de Persona*',
        class:'full_width',
        options:[
            {option:'Persona Física',selected:'selected'},
            {option:'Persona Jurídica'},
        ]
    },
    {
        name:'Name',
        type:'text',
        placeholder:'Nombre*',
        class:'half_width',
        intent: intent[0].taxPayer.name
    },
    {
        name:'LastName',
        type:'text',
        placeholder:'Apellido*',
        class:'half_width',
        intent:intent[0].taxPayer.surname
    },
    {
        name:'DocType2',
        type:'select',
        placeholder:'Tipo de Documento*',
        class:'half_width',
        intent:intent[0].taxPayer.identification.type,
        options:[
            {option:'Documento Nacional de Identidad'},
            {option:'Libreta cívica'},
            {option:'Cédula de Identidad'},
            {option:'Libreta de Enrolamiento'},
            {option:'Pasaporte'},
            {option:'Clave única de identificación tributaria'},
            {option:'Clave única de identificación laboral',selected:'selected'},
        ]
    },
    {
        name:'Number',
        type:'number',
        placeholder:'Nro*',
        class:'half_width',
        intent:intent[0].taxPayer.identification.number
    },
    {
        name:'Mail',
        type:'text',
        placeholder:'Email*',
        class:'half_width',
        intent:intent[0].taxPayer.contacts.email
    },
    {
        name:'TaxPosition',
        type:'select',
        placeholder:'Posición frente al IVA*',
        class:'half_width',
        options:[
            {option:'Consumidor final', selected:'selected'},
            {option:'Responsable Inscripto'},
            {option:'Monotributista'},
            {option:'Exento'},
            {option:'No Responsable'}
        ]

    },
    {
        name:'Address',
        type:'text',
        placeholder:'Dirección*',
        class:'full_width', 
        intent: intent[0].taxPayer.address.streetName+' '+intent[0].taxPayer.address.streetNumber
    },
    {
        name:'Floor',
        type:'number',
        placeholder:'Piso',
        class:'half_width',
        intent:intent[0].taxPayer.address.floor
    },
    {
        name:'Apartment',
        type:'text',
        placeholder:'Departamento',
        class:'half_width',
        intent:intent[0].taxPayer.address.apartment
    },
    {
        name:'Province',
        type:'text',
        placeholder:'Provincia*',
        class:'half_width',
        intent:intent[0].taxPayer.address.province

    },
    {
        name:'Locality',
        type:'text',
        placeholder:'Localidad*',
        class:'half_width',
        intent:intent[0].taxPayer.address.locality
    },
    {
        name:'PostalCode',
        type:'text',
        placeholder:'CP*',
        class:'third_width',
        intent:intent[0].taxPayer.address.postalCode
    },
    {
        name:'AreaCode',
        type:'number',
        placeholder:'Código de Área*',
        class:'third_width',
        intent:intent[0].taxPayer.contacts.phone.areaCode
    },
    {
        name:'Phone',
        type:'number',
        placeholder:'Teléfono*',
        class:'third_width',
        intent:intent[0].taxPayer.contacts.phone.number
    },
]