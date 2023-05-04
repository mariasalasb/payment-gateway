import React from 'react'
import cupon from '../../assets/CuponRapipago.pdf'
import { useParams } from 'react-router'
import './Button.css'

function Button({classButton,action,type, onClick}) {
    const {paymentmethod}=useParams()

    const buttonText = 
        type==='gire'? 'Rapipago'  : 
        type==='decidir' ? 'Tarjeta de crédito': 
        type==='erecauda' ? 'Home banking' : action;

    if(paymentmethod==='rapipago'){
        return (
            <a href={cupon} download><button className={classButton} type={type} onClick={onClick}>{buttonText}</button></a>
        )
    }{
        return (
            <button className={classButton} type={type} onClick={onClick}>{buttonText}</button>
        )
    } 
}

export default Button
