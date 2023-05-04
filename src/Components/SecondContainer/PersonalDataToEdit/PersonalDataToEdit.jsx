import React from 'react'
import { Link } from 'react-router-dom';
import { intent } from '../../../Intents/intent';
import Button from '../../Button/Button'
import './PersonalDataToEdit.css'
import ReactGA from 'react-ga';


function PersonalDataToEdit() {
    const gaEventViewData =()=>{
      ReactGA.event({
        category: 'Button',
        action: 'Click',
        label: 'Visualizar Datos Personales'
      });
    }
    return <>
      <div className="second_container personal_info grid">
      {intent.map((item)=>{
                return(<>
                  <h4 className="last_name_first_name">{item.taxPayer.surname} {item.taxPayer.name}</h4>
                  <Link to="/datospersonales"><Button classButton={'button_edit'} type={'edit'} action={'EDITAR'}/></Link>
                  <p className="cuil">{item.taxPayer.identification.type} {item.taxPayer.identification.number}</p>
                  <p className="mail">{item.taxPayer.contacts.email}</p>
                  <p className="address">{item.taxPayer.address.streetName} {item.taxPayer.address.streetNumber} ({item.taxPayer.address.postalCode}) {item.taxPayer.address.apartment}</p></>
                )})}
      </div>
  </>
}

export default PersonalDataToEdit
