import React, { useEffect, useState } from 'react'
import OrdiniService from '../../ordini/services/OrdiniServices'
import { dataIndirizzo } from '../Interfaces/IndirizziCorriereInferface'

const IndirizziCorriereHooks = () => {

    const idUdt =  localStorage.getItem('idUtd')
    
    const [indirizoList, setIndirizzoList] = useState<dataIndirizzo[]>()

    

    useEffect(() => {
        console.log(idUdt)
        OrdiniService.getOrdiniIndirizo(idUdt).then(R=>{console.log(R?.data.data); setIndirizzoList(R?.data.data)})
    }, [])
    

    

    return {
        indirizoList
    }
}

export default IndirizziCorriereHooks