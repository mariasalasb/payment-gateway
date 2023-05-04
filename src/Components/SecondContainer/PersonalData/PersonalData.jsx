import React from 'react'
import { intent } from '../../../Intents/intent'
import '../../Summary/Summary.css'

function PersonalData({style}) {
    return (
        <div className="summary_items summary_row" style={style}>
            <p className="col-12 align_left bold">{intent[0].taxPayer.surname} {intent[0].taxPayer.name}</p>
            <p className="cuil">{intent[0].taxPayer.identification.type} {intent[0].taxPayer.identification.number}</p>
            <p className="address">{intent[0].taxPayer.address.streetName} {intent[0].taxPayer.address.streetNumber} ({intent[0].taxPayer.address.postalCode}) {intent[0].taxPayer.address.apartment}</p>
            <p className="mail">{intent[0].taxPayer.address.locality}</p>
        </div>
    )
}

export default PersonalData
