import React from 'react'
import { intent } from '../../../Intents/intent';
import '../../Summary/Summary.css'

function OrderDetail() {
    const tax_amount = parseFloat(intent[0].procedure.price.amount.amount * intent[0].procedure.price.tax).toFixed(2);
    const show_taxes=intent[0].procedure.price.amount.taxInclude;
    const style = {
        display: show_taxes==='true'? 'none' : 'grid',
        };
    const total_with_taxes= show_taxes==='true'? intent[0].procedure.price.amount.amount : parseFloat(intent[0].procedure.price.amount.amount) + parseFloat(tax_amount);
            
    return (
        <>
        <div className="summary_items">
            <div className="grid summary_row border_botton" >
                <p className="col-9 align_left bold">1 x {intent[0].procedure.name}</p>
                <p className="col-3 align_right">${intent[0].procedure.price.amount.amount}</p>
            </div>
            <div className="grid summary_row border_botton" style={style}>
                <p className="col-9 align_left">IVA</p>
                <p className="col-3 align_right">$ {tax_amount}</p>
            </div>
            <div className="grid summary_row">
                <p className="col-9 align_left">Total:</p>
                <p className="col-3 align_right bold" id="total-with-taxes">{total_with_taxes}</p>
            </div>
        </div>
        <div className="summary_items summary_row">
            <p className="col-12 align_left bold">{intent[0].procedure.comments}</p>
        </div>
        </>
    )
}

export default OrderDetail
