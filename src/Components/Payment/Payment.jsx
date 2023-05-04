import React,{useEffect} from 'react'
import { useContext } from 'react';
import { TadContext } from '../../Context/Context';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router'
import './Payment.css'
import Button from '../Button/Button';
import HomeBankingForm from './HomeBankinForm/HomeBankingForm';
import CreditCardForm from './CreditCardForm/CreditCardForm';
import Confirmation from '../Confirmation/Confirmation';
import imagehomebanking from '../../assets/pmc.png'
import  { Analytics } from 'aws-amplify';
import ReactGA from 'react-ga';
import ImportantInfo from '../ImportantInfo/ImportantInfo';

function Payment() {
    const {paymentmethod}=useParams()

    const {ocultarDatosPersonales,payment,confirmed,mostrarFormularioPago}=useContext(TadContext);

    const title = paymentmethod==='rapipago'? 'Rapipago' : 
                  paymentmethod==='homebanking'? 'Home Banking' :
                  paymentmethod==='tarjetadecredito'? 'Tarjeta de Crédito' : '';

    const accreditation_time = paymentmethod==='rapipago'? '72' : 
                               paymentmethod==='homebanking'? '24' :
                               paymentmethod==='tarjetadecredito'? '24' :'';           

    const HomeBanking=()=>{
        useEffect(()=>{
            ReactGA.pageview('/pago/homebanking');
          },[])
    
        return <div>
            <img  src={imagehomebanking} className='margin_botton'/>
            <HomeBankingForm/>
        </div>
    }

    const CreditCard=()=>{
        useEffect(()=>{
            ReactGA.pageview('/pago/tarjetadecredito');
          },[])

        return <>
            <CreditCardForm/>
        </>
    }

    const NullComponent=()=>{
        useEffect(()=>{
            ReactGA.pageview('/pago/rapipago');
          },[])

        return <>
            <Link to ={`/confirmacion/${paymentmethod}`} >
                <Button action={buttonPayAction} classButton={'pay_button'}/>
            </Link>
        </>
    }

    const CreditCardTop=()=>{
        return <>
            <h4 className='margin_botton'>Ingresá la información de pago</h4>
        </>
    }

    const EmptyTop=()=>{
        return <>
        </>
    }
    
    const PaymentAccess=paymentmethod==='homebanking'? HomeBanking :
                        paymentmethod==='tarjetadecredito'? CreditCard: NullComponent;
    
    const buttonPayAction = paymentmethod==='homebanking'? 'CONFIRMAR' : 
                            paymentmethod==='tarjetadecredito'? 'PAGAR' :'GENERAR CUPÓN' ;
    
    const CardImage = paymentmethod==='tarjetadecredito'? CreditCardTop : EmptyTop ;

    const gaEventChangeMethod =()=>{
        ReactGA.event({
          category: 'Button',
          action: 'Click',
          label: `Cambiar` + title
        });
      };

    return (
        <div>
            <div className="second_container" style={payment}>
                <h4 className="payment_title">{title}</h4><br/>
                <Link to="/"  onClick={()=>{ocultarDatosPersonales();Analytics.record(`Cambiar` + title);gaEventChangeMethod()}} >CAMBIAR</Link>
            </div>
            <ImportantInfo/>
            <div style={payment}>
                <CardImage/>
                <PaymentAccess/>
            </div>
        </div>
    )
}

export default Payment
