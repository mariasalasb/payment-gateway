import React,{useState} from 'react'
import Input from '../../Input/Input'
import Select from '../../Select/Select'
import Form from '../../Form/Form'
import { creditcard_info } from './CreditCardData'
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router'
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import imageTC from '../../../assets/BWTC.png'
import ReactGA from 'react-ga';

function CreditCardForm() {
    const [buyer, setBuyer] = useState({
        CreditNumber:'*',
        Cardholder:'NOMBRE Y APELLIDO',
        ExpirationDate:'**/**',
        cvc: '123',
        issuer:''
    })
    const [focused,setFocused]=useState()
    const {paymentmethod}=useParams()
    const [link, setLink] = useState(`/confirmacion/${paymentmethod}`)

    const handleChange = (event)=>{
      setBuyer({
          ...buyer,
          [event.target.name]: event.target.value
      })
      if(buyer.Cardholder==='Lui'){
        setLink(`/error/${paymentmethod}`);
      }else{
        setLink(`/confirmacion/${paymentmethod}`);
      } 
      setFocused({
        focused: event.target.name
    });
    console.log(focused);

      console.log(buyer);
    };

    const buttonPayAction = paymentmethod==='homebanking'? 'CONFIRMAR' : 
    paymentmethod==='tarjetadecredito'? 'PAGAR' :'GENERAR CUPÓN' ;

    const handleCallback = ({ issuer }, isValid) => {
        /*if (isValid) {
          setBuyer({...buyer, issuer:issuer });
        }*/ //UTIL PARA VER QUE LA TARJETA SEA VALIDA
        setBuyer({...buyer, issuer:issuer });
      };
    
      const issuer=()=>{
          if(buyer.issuer==='' || buyer.issuer==="unknown"){
          }else{
            ReactGA.set({ dimension3: buyer.issuer });
        }
      }

    return (
        <>
        <Card
            number={buyer.CreditNumber}
            name={buyer.Cardholder}
            expiry={buyer.ExpirationDate}
            cvc={buyer.cvc}
            focused={focused}
            callback={handleCallback}
          />
        <br/>
        <p>Tarjetas aceptadas</p>
        <img  src={imageTC} className='margin_botton'/>

            <form action="" method="post" id="formulario">
                {creditcard_info.map((item)=>{
                    if(item.type==="text" ||item.type==="number" ){
                        return(<>
                            <Input  placeholder={item.placeholder} name={item.name} type={item.type} className={item.class} data-decidir={item.dataDecidir} onChange={handleChange}/>
                                </> )
                    }else if(item.type==="select"){
                        return(
                            <Select placeholder={item.placeholder} id={item.name} className={item.class} options={item.options} data-decidir={item.dataDecidir} onChange={handleChange}/>
                        ) 
                    } 
                })}
            </form>
            <Link to ={link} >
                <Button action={buttonPayAction} classButton={'pay_button'} onClick={issuer} />
            </Link>
        </>
    )
}

export default CreditCardForm
