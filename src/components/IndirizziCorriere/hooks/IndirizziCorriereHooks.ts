import React, { useEffect, useState, useContext } from 'react'
import OrdiniService from '../../ordini/services/OrdiniServices'
import { dataIndirizzo } from '../Interfaces/IndirizziCorriereInferface'


const IndirizziCorriereHooks = (idUdt:string) => {

    
    
    const [indirizoList, setIndirizzoList] = useState<dataIndirizzo[]>()

    

    useEffect(() => {
        
        OrdiniService.getOrdiniIndirizo(idUdt).then(R=>{console.log(R?.data.data); setIndirizzoList(R?.data.data)})
    }, [])
    

    

    return {
        indirizoList
    }
}

export default IndirizziCorriereHooks