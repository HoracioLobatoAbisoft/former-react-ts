import React, { useEffect, useState } from 'react'
import OrdiniService from '../../ordini/services/OrdiniServices'
import { dataIndirizzo } from '../Interfaces/IndirizziCorriereInferface'

const IndirizziCorriereHooks = () => {

    const [indirizoList, setIndirizzoList] = useState<dataIndirizzo[]>()

    

    useEffect(() => {
        OrdiniService.getOrdiniIndirizo(14).then(R=>{console.log(R?.data.data); setIndirizzoList(R?.data.data)})
    }, [])
    

    

    return {
        indirizoList
    }
}

export default IndirizziCorriereHooks