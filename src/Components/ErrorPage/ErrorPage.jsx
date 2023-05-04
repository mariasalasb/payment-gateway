import React from 'react'
import { useParams } from 'react-router'
import './ErrorPage.css'
import  { Analytics } from 'aws-amplify';
import {useEffect} from 'react';
import ReactGA from 'react-ga';
import '../../Components/Payment/Payment.css'
import ImportantInfo from '../ImportantInfo/ImportantInfo';

function ErrorPage() {

    const {paymentmethod}=useParams()
    const selected = document.getElementById("total-with-taxes").innerHTML;

    const RapiPago=()=>{
        useEffect(()=>{
            Analytics.record('Error RapiPago');
            ReactGA.set({ metric1: selected });    
            ReactGA.pageview('/errorRapipago');
          },[])
        
        return <>
            <p>El cupón no pudo ser generado correctamente.</p>
        </>
    }
    const HomeBanking=()=>{
        useEffect(()=>{
            Analytics.record('Error Home Banking');
            ReactGA.set({ metric1: selected });    
            ReactGA.pageview('/errorHomeBanking');
          },[])

        return <>
            <h3>Su transacción con Pago Mis Cuentas no pudo ser completada</h3>
        </>
    }
    const CreditCard=()=>{
        useEffect(()=>{
            Analytics.record('Error Tarjeta de Credito');
            ReactGA.set({ metric1: selected });    
            ReactGA.pageview('/errorTarjetaCredito');
          },[])

        return <>
            <h3>Su pago con Visa no pudo ser procesado</h3>
        </>
    }

    const Item = paymentmethod==='rapipago'? RapiPago : 
                paymentmethod==='homebanking'? HomeBanking :
                paymentmethod==='tarjetadecredito'? CreditCard :'';

    return (
        <div>
            <ImportantInfo/>
            <div className="error_component" >
                <h2><i className="fas fa-info-circle"></i>Tu operación no pudo ser completada</h2>
                <Item/>
            </div>
        </div>
    )
}

export default ErrorPage