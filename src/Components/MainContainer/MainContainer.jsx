import React from 'react'
import SecondContainer from '../SecondContainer/SecondContainer'
import { transaction_data } from './TransactionData'
import FirstContainer from '../FirstContainer/FirstContainer'
import './MainContainer.css'

function DatosPersonales() {
    return(
        <div>
        {transaction_data.map((item)=>{
            return (
                <>
                <FirstContainer item={item}/>
                <SecondContainer dataType={item.type}/>
                </>
            )
        })}

        </div>
    )
}

export default DatosPersonales
