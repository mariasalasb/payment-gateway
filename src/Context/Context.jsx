import { createContext, useState } from 'react'

export const TadContext = createContext()

export const ContextProvider = ({children}) => {
    const [show,setShow] = useState({display:'none'})

    const mostrarDatosPersonales = ()=>{
        setShow({display:'block'});
    }

    const ocultarDatosPersonales = ()=>{
        setShow({display:'none'});
    }

    const [payment,setPayment] = useState({display:'block'})

    const mostrarFormularioPago = ()=>{
        setPayment({display:'none'});
        setConfirmed({display:'block'});
    }

    const [confirmed,setConfirmed] = useState({display:'none'})
    
    return(
        <TadContext.Provider value={{show,mostrarDatosPersonales,ocultarDatosPersonales,payment,confirmed,mostrarFormularioPago}}>
            {children}
        </TadContext.Provider>
    )
}

export default ContextProvider


