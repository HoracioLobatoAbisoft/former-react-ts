import React, { useEffect, useState } from 'react'
import { ObjCarrello } from '../../formProdottoV1/interface/ObjCarrrello';
import { httpGetTotaleProvisorio } from '../services/Services';
import { DataGetTotaleProvisorio } from '../Interfaces/totaleProvvisorio';

const useCarrello = () => {

    const [TotaleProvisorio, setTotaleProvisorio] = useState<DataGetTotaleProvisorio>()
    const [arrayCarrello, setArrayCarrello] = useState<ObjCarrello[]>([]);

        const LocalCarrello = localStorage.getItem('c');
        let ArrayLocalCarrello: ObjCarrello[] = [];
        let TotalPrezo = 0;
        let countLavori = 0;
        let TotalPeso = 0;
        let idUt = 0;

    const getLocalCarrello = () => {
        if (LocalCarrello) {
            ArrayLocalCarrello = JSON.parse(LocalCarrello);
            console.log('Carello', ArrayLocalCarrello)
            setArrayCarrello(ArrayLocalCarrello);
        }
        countLavori = ArrayLocalCarrello.length;
        ArrayLocalCarrello.map((lem, i) => {
            if (lem.prezzo != undefined) {
                TotalPrezo += lem.prezzo
            }
            if (lem.peso != undefined) {
                TotalPeso += lem.peso
            }
            if (lem.idUt != undefined) {
                idUt = Number(lem.idUt);
            }
        })
    }

    const getTotaleProvisorio = async () => {
        try {
            const responseProvisorio = await httpGetTotaleProvisorio(idUt, TotalPeso, 0, TotalPrezo);
            setTotaleProvisorio(responseProvisorio.data)

        } catch (error) {
            console.log('error use Carrello ', error)
        }
    }


    /*
        *Funciones handle
    */

    const handleDeleteAllCarrello = () => {
        localStorage.removeItem('c');
        setArrayCarrello([]);
    }

    useEffect(() => {
        getLocalCarrello();
        getTotaleProvisorio();
    }, [])


    return {
        arrayCarrello,
        TotalPrezo,
        countLavori,
        TotaleProvisorio,
        handleDeleteAllCarrello,
    }
}

export default useCarrello