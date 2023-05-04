import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { personal_data } from './PersonalDataItems'
import Input from '../Input/Input'
import Select from '../Select/Select'
import { transaction_data } from '../MainContainer/TransactionData'
import FirstContainer from '../FirstContainer/FirstContainer'
import Button from '../Button/Button'
import './PersonalDataForm.css'
import  { Analytics } from 'aws-amplify';
import ReactGA from 'react-ga';
 

function PersonalDataForm() {
    

    useEffect(()=>{
        Analytics.record('Formulario Datos Personales')
        ReactGA.pageview('/datospersonales');
        //var selected = document.getElementById("PersonType");
        //ReactGA.set({ dimension2: selected.value });
      },[])
      
    const gaEventSaveData =()=>{
        ReactGA.event({
            category: 'Button',
            action: 'Click',
            label: 'Guardar Datos Personales'
        });
    }
      

    return (
        <div>
            <FirstContainer item={transaction_data[0]}/>
            <br/>
            <form className="personal_data">
                {personal_data.map((item)=>{
                    if(item.type==="text" ||item.type==="number" ){
                        return(<div className={item.class}>
                            <p>{item.placeholder}</p>
                            <Input name={item.name}  type={item.type} value={item.intent} />
                        </div>)
                    }else if(item.type==="select"){
                        return(<div className={item.class}>
                            <p>{item.placeholder}</p>
                            <Select id={item.name} value={item.intent} options={item.options}/>
                        </div>) 
                    } 
                })}
                <p>* Datos obligatorios</p>
            </form>
            <br/>
            <Link to="/"><Button classButton={'cancel_button'} action={'CANCELAR'} /></Link>
            <Button classButton={'save_button'} action={'GUARDAR'} onClick={()=>{Analytics.record('Datos Personales Modificados');gaEventSaveData()}}/>
        </div>
    )
}

export default PersonalDataForm
