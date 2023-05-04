import React from 'react'
import { useContext } from 'react';
import { TadContext } from '../../../Context/Context';
import { Link } from 'react-router-dom';
import { intent } from '../../../Intents/intent';
import Button from '../../Button/Button'
import './PaymentMethods.css'
import  { Analytics } from 'aws-amplify';
import ReactGA from 'react-ga';

function PaymentMethods() {
    /*{intent.map((item)=>{
                return(
                  <Button  action={item.procedure.paymentChannel}/>
                )})}*/

/*{intent.map((item)=>{
           console.log(item,'item');
           item.procedure.paymentChannel.map((subitem)=>{
            console.log(subitem);
            })})} */
    const {mostrarDatosPersonales}=useContext(TadContext);

    const gaEventTC =()=>{
      ReactGA.event({
        category: 'Button',
        action: 'Click',
        label: 'Tarjeta de Crédito'
      });
    };

    const gaEventR =()=>{
      ReactGA.event({
        category: 'Button',
        action: 'Click',
        label: 'Rapipago'
      });
    };

    const gaEventHB =()=>{
      ReactGA.event({
        category: 'Button',
        action: 'Click',
        label: 'Home Banking'
      });
    };

    return <>
      <div className="second_container  payment_methods">
      {intent.map((item)=>{
                return(<>
                  <Link to ='/pago/rapipago' onClick={()=>{mostrarDatosPersonales();Analytics.record('Rapipago'); gaEventR()}} >
                    <Button classButton={'payment_method_button'} type={item.procedure.paymentChannel[0]}/>
                  </Link>
                  <Link to ='/pago/tarjetadecredito' onClick={()=>{mostrarDatosPersonales();Analytics.record('Tarjeta de credito');gaEventTC()}}>
                    <Button classButton={'payment_method_button'}  type={item.procedure.paymentChannel[1]}/>
                  </Link>
                  <Link to ='/pago/homebanking' onClick={()=>{mostrarDatosPersonales();Analytics.record('Home banking'); gaEventHB()}}>
                    <Button classButton={'payment_method_button'}  type={item.procedure.paymentChannel[2]}/>
                  </Link>
                  </>
                )})}
      </div>
  </>;
}

export default PaymentMethods
