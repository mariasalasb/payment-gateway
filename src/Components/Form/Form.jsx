import React from 'react'
import Input from '../Input/Input'
import Select from '../Select/Select'


function Form({item}) {
    if(item.type==="text" ||item.type==="number" ){
        return(<>
            <Input name={item.name} placeholder={item.placeholder} type={item.type} className={item.class}/>
        </>)
    }else if(item.type==="select"){
        return(
            <Select placeholder={item.placeholder} name={item.name} className={item.class}/>
        ) 
    } 
}

export default Form
