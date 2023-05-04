import React from 'react';
import { useParams } from 'react-router';
import '../../Components/Payment/Payment.css'

function ImportantInfo() {
    const {paymentmethod}=useParams()

    const accreditation_time = paymentmethod==='rapipago'? '72' : 
                                paymentmethod==='homebanking'? '24' :
                                paymentmethod==='tarjetadecredito'? '24' :'';

    return (
        <div className="second_container important_modal">
            <h3><i className="fas fa-info-circle"></i> Información Importante</h3>
            <p className="accreditation_time">Se acredita dentro de las {accreditation_time} horas de realizado el pago.</p>
        </div>
    )
}

export default ImportantInfo
