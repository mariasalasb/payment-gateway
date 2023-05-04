import React from 'react'
import './Input.css'

function Input({name,type,placeholder,onChange,className,value}) {
    return (
        <>
            <input 
              name={name}
              type={type}
              placeholder={placeholder}
              onChange={onChange}
              className={className}
              value={value}
            />
        </>
    )
}

export default Input
