import React,{useState} from 'react'
import { homebanking_data } from './HomeBankingData'
import './HomeBankingForm.css'
import Input from '../../Input/Input'
import Select from '../../Select/Select'
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router'


function HomeBankingForm() {
    const [buyer, setBuyer] = useState({})
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
      console.log(buyer);
    };

    const buttonPayAction = paymentmethod==='homebanking'? 'CONFIRMAR' : 
    paymentmethod==='tarjetadecredito'? 'PAGAR' :'GENERAR CUPÓN' ;

  
    return (
        <>
            <form>
                {homebanking_data.map((item)=>{
                    if(item.type==="text" ||item.type==="number" ){
                        return(<>
                            <Input name={item.name} placeholder={item.placeholder} type={item.type} className={item.class} onChange={handleChange}/>
                        </>)
                    }else if(item.type==="select"){
                        return(
                            <Select placeholder={item.placeholder} name={item.name} className={item.class} options={item.options} onChange={handleChange}/>
                        ) 
                    } 
                })}
            </form>
            <Link to ={link} >
                <Button action={buttonPayAction} classButton={'pay_button'}/>
            </Link>
        </>
    )
}

export default HomeBankingForm
