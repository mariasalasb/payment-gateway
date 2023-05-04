import React,{useEffect} from 'react'
import './Select.css'
import ReactGA from 'react-ga';

function Select({placeholder,name,className,options,id}) {

        return (
            <select className={className} name={name} id={id}>
                <option disabled selected>{placeholder}</option>
                {options.map((item)=>{
                    if(item.selected==="selected"){
                        return(
                        <option value={item.option} selected>{item.option}</option>
                    )}
                    else{
                        return(
                        <option value={item.option}>{item.option}</option>
                    )}
                    
                })}
            </select>
        )
}

export default Select
