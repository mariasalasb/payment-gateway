import React from 'react'
import { useParams } from 'react-router'
import HomeBankingDetails from './HomeBankingDetails'
import './Confirmation.css'
import  { Analytics } from 'aws-amplify';
import {useEffect} from 'react';
import ReactGA from 'react-ga';
import '../../Components/Payment/Payment.css'
import ImportantInfo from '../ImportantInfo/ImportantInfo';
import {intent} from '../../Intents/intent.js'

function Confirmation() {

    const {paymentmethod}=useParams()

    const RapiPago=()=>{
        useEffect(()=>{
            Analytics.record('Confirmacion RapiPago');
            const selected = document.getElementById("total-with-taxes").innerHTML;
            //console.log(selected);
            ReactGA.set({ metric1: selected });    
            ReactGA.pageview('/confirmacionRapipago');
          },[])

        return <>
            <p>El cupón se ha generado correctamente, verifica tu correo electrónico</p>
        </>
    }
    const HomeBanking=()=>{
        useEffect(()=>{
            Analytics.record('Confirmacion Home Banking');
            const selected = document.getElementById("total-with-taxes").innerHTML;
            //console.log(selected);
            ReactGA.set({ metric1: selected });    
            ReactGA.pageview('/confirmacionHomeBanking');
          },[])

        return <>
            <h3>Su transacción con Pago Mis Cuentas fue procesada correctamente</h3>
            <p>Código de operación: </p>
        </>
    }
    const CreditCard=()=>{
        useEffect(()=>{
            Analytics.record('Confirmacion Tarjeta de Credito');
            const selected = document.getElementById("total-with-taxes").innerHTML;
            //console.log(selected);
            ReactGA.set({ metric1: selected });    
            ReactGA.pageview('/confirmacionTarjetaCredito');          
          },[])

        return <>
            <h3>Su pago con Visa fue procesado correctamente</h3>
            <p>En breve recibirá un mail con el comprobante de la operación.</p>
        </>
    }

    const Item = paymentmethod==='rapipago'? RapiPago : 
                paymentmethod==='homebanking'? HomeBanking :
                paymentmethod==='tarjetadecredito'? CreditCard :'';

    return (
        <div>
            <ImportantInfo/>
            <div className="confirmation_component" >
                <h2>Operación finalizada <i className="fas fa-check-circle"></i></h2>
                <Item/>
            </div>
            <HomeBankingDetails />
        </div>
    )
}

export default Confirmation
