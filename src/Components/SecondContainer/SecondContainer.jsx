import React from 'react'
import { useContext } from 'react';
import { TadContext } from '../../Context/Context';
import './SecondContainer.css'
import PersonalData from './PersonalData/PersonalData';
import PaymentMethods from './PaymentMethods/PaymentMethods';
import PersonalDataToEdit from './PersonalDataToEdit/PersonalDataToEdit';
import OrderDetail from './OrderDetail/OrderDetail';
/*import { getFirestore } from '../../servicios/firebaseService'
import 'firebase/firestore'*/

function SecondContainer({dataType}) {
  const {show}=useContext(TadContext);
  
  const component = 
  dataType==='Personal'? <PersonalDataToEdit/>  : 
  dataType==='Payment' ? <PaymentMethods/>: 
  dataType==='Order' ? <OrderDetail/> : 
  dataType==='Contact' ? <PersonalData style={show}/> : PersonalData ;

  return (
    component
  )
}

export default SecondContainer
