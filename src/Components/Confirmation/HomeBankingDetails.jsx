import React from 'react'
import { useParams } from 'react-router'
import './Confirmation.css'

function HomeBankingDetails({style}) {
    const {paymentmethod}=useParams();

    if(paymentmethod==='homebanking' ){
        return (
        <div className="home_banking_details" style={style}>
            <p>Para realizar el pago de la operación usted debe acceder a <b>Pago Mis Cuentas</b></p>
            <br/>
            <p>Seleccione el modo de acceso de su preferencia:</p>
            <br/>
            <p>Acceso con su clave de Pagomiscuentas.com:
                <ul>
                    <li>Ingrese a www.pagomiscuentas.com</li>
                    <li>Seleccione su banco y complete los datos de acceso (Tipo y Número de documento y Clave de Acceso)</li>
                </ul>
            </p>
            <br/>
            <p>Acceso desde su Home Banking:
                <ul>
                    <li>Ingrese al sitio del banco</li>
                    <li>Seleccione Home Banking y complete los datos de acceso (Tipo y Número de documento y Clave de Acceso)</li>
                    <li>Seleccioe la opción Pago de Servicios</li>
                </ul>
            </p>
        </div>
    )}{
        return <></>
    }
}

export default HomeBankingDetails
