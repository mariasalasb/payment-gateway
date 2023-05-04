import React from 'react'
import { order_data } from './OrderData'
import './Summary.css'
import FirstContainer from '../FirstContainer/FirstContainer'
import SecondContainer from '../SecondContainer/SecondContainer'
import { useContext } from 'react';
import { TadContext } from '../../Context/Context';


function OrderSummary() {
    const {show}=useContext(TadContext);
    return(
        <div>
            {order_data.map((item)=>{
                if (item.type==='Contact'){
                    return (
                        <div>
                            <FirstContainer id="summary_color" item={item} style={show}/>
                            <SecondContainer dataType={item.type}/>
                        </div>
                    )
                }{
                    return (
                        <>
                        <FirstContainer id="summary_color" item={item}/>
                        <SecondContainer dataType={item.type}/>
                        </>
                    )
                }
                
            })}
        </div>
    )
}

export default OrderSummary
