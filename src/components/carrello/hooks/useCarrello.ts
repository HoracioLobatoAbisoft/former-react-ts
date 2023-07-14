import React, { useEffect, useState } from 'react'
import { ObjCarrello } from '../../formProdottoV1/interface/ObjCarrrello';
import { httpGetTotaleProvisorio } from '../services/Services';
import { DataGetTotaleProvisorio } from '../Interfaces/totaleProvvisorio';
import { enOperationFrame } from '../../../enHelpers/enOperationFrame';

const useCarrello = () => {

    const [TotaleProvisorio, setTotaleProvisorio] = useState<DataGetTotaleProvisorio>()
    const [arrayCarrello, setArrayCarrello] = useState<ObjCarrello[]>([]);
    const [dataTotale, setDataTotale] = useState({
        TotalPrezo: 0,
        TotalPeso: 0,
        idUt: 0,
    })



    const getLocalCarrello = () => {
        const LocalCarrello = localStorage.getItem('c');
        let ArrayLocalCarrello: ObjCarrello[] = [];
        let TotalPrezo = 0;
        let countLavori = 0;
        let TotalPeso = 0;
        let idUt = 0;
        if (LocalCarrello) {
            ArrayLocalCarrello = JSON.parse(LocalCarrello);
            console.log('Carello', ArrayLocalCarrello)
            setArrayCarrello(ArrayLocalCarrello);
        }
        //countLavori = ArrayLocalCarrello.length;
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

        dataTotale.idUt = idUt;
        dataTotale.TotalPeso = TotalPeso;
        dataTotale.TotalPrezo = TotalPrezo;

    }

    const getTotaleProvisorio = async () => {
        try {
            const responseProvisorio = await httpGetTotaleProvisorio(dataTotale.idUt, dataTotale.TotalPeso, 0, dataTotale.TotalPrezo);
            setTotaleProvisorio(responseProvisorio.data)

        } catch (error) {
            console.log('error use Carrello ', error)
        }
    }
    /*
        *Funciones handle
    */

    const deleteItem = (id: number) => {
        arrayCarrello.splice(id, 1);
        setArrayCarrello([...arrayCarrello]);
        localStorage.setItem('c', JSON.stringify([...arrayCarrello]))
        getLocalCarrello();
        getTotaleProvisorio();
    }

    const handleDeleteAllCarrello = () => {
        localStorage.removeItem('c');
        setArrayCarrello([]);
        setTotaleProvisorio(undefined)
    }

    const handleRetornaProdotto = (i: number,uri:string) => {
        const updateCarrello = [...arrayCarrello]
        updateCarrello.splice(i, 1);
        setArrayCarrello(updateCarrello);
        localStorage.setItem('c', JSON.stringify(updateCarrello))
        getLocalCarrello();
        getTotaleProvisorio();
        window.parent.postMessage({ uri:uri, operation : enOperationFrame.reliadUrl }, 'https://localhost:44311/');
    }

    useEffect(() => {
        getLocalCarrello();
        getTotaleProvisorio();
    }, [])


    return {
        arrayCarrello,
        TotaleProvisorio,
        handleDeleteAllCarrello,
        handleRetornaProdotto,
        setArrayCarrello,
        deleteItem,
    }
}

export default useCarrello