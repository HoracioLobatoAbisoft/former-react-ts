import React, { ChangeEvent, useEffect, useState } from 'react'
import { ObjCarrello } from '../../formProdottoV1/interface/ObjCarrrello';
import { httpGetAplicaCouponSconto, httpGetCaricaCorriere, httpGetCorriereSelezionata, httpGetDatesAlleghiPDF, httpGetIndirizzo, httpGetMetodiPagamento, httpGetTotaleProvisorio } from '../services/Services';
import { DataGetTotaleProvisorio } from '../Interfaces/totaleProvvisorio';
import { enOperationFrame } from '../../../enHelpers/enOperationFrame';
import { DataGetIndirizzo } from '../Interfaces/Indirizzo';
import { DataGetAlleghiPDF, DateEntrega } from '../Interfaces/dateAlleghiPDF';
import { httpGetUtente } from '../../../services/UtenteService';
import { DataResponseGetUtente } from '../../../interface/Utente';
import { DataGetTipoPagamenti } from '../Interfaces/TipoPagamento';
import { DataGetCaricaCorriere } from '../Interfaces/CaricaCorriere';
import { DataGgetCorriereSelezionata } from '../Interfaces/Corriere';
import { GLOBAL_CONFIG } from '../../../_config/global';

const useCarrello = () => {


    const [TotaleProvisorio, setTotaleProvisorio] = useState<DataGetTotaleProvisorio>()
    const [arrayCarrello, setArrayCarrello] = useState<ObjCarrello[]>([]);
    const [indirizzoList, setIndirizzoList] = useState<DataGetIndirizzo[]>([])
    const [alleghiPDF, setAlleghiPDF] = useState<DataGetAlleghiPDF>();
    const [scadenza, setScadenza] = useState<DateEntrega>()
    const [tipoPagamento, setTipoPagamento] = useState<DataGetTipoPagamenti[]>([])
    const [messageCoupon, setMessageCoupon] = useState<string>("")
    const [showInputCoupon, setShowInputCoupon] = useState<boolean>(false)
    const [indexScandeza, setIndezScandeza] = useState<number>(0);
    const [radio, setRadio] = useState<number>(1)
    const [radioPagamento, setRadioPagamento] = useState<number>(5)
    const [dataUtente, setdataUtente] = useState<DataResponseGetUtente>()
    const [caricaCorriere, setCaricaCorriere] = useState<DataGetCaricaCorriere[]>([])
    const [corriereSelezionata, setCorriereSelezionata] = useState<DataGgetCorriereSelezionata>()

    const [dataTotale, setDataTotale] = useState({
        TotalPrezo: 0,
        TotalPeso: 0,
        idUt: 0,
        desconto: 0,
    })


    // * FUNCIONES GETTER 

    // const encontrarFechaMaxima = (fecha1: string, fecha2: string) => {
    //     return new Date(Math.max(new Date(fecha1).getTime(), new Date(fecha2).getTime()));
    // };

    const getLocalCarrello = async () => {
        const LocalCarrello = localStorage.getItem('c');
        let ArrayLocalCarrello: ObjCarrello[] = [];
        let TotalPrezo = 0;
        let countLavori = 0;
        let TotalPeso = 0;
        let idUt = 0;
        if (LocalCarrello) {
            ArrayLocalCarrello = JSON.parse(LocalCarrello);
            //console.log('Carello', ArrayLocalCarrello)
            ArrayLocalCarrello.reverse();
            setArrayCarrello(ArrayLocalCarrello);
            const mayorFecha1 = ArrayLocalCarrello.length > 0
                ? ArrayLocalCarrello.reduce((mayor, obj, index) => {
                    if (obj && obj.scadenza) {
                        const fecha1 = new Date(obj.scadenza.date1);
                        if (!mayor || fecha1 > mayor.fecha1) {
                            mayor = { fecha1, index };
                        }
                    }
                    return mayor;
                }, { fecha1: new Date(0), index: -1 })
                : null;
            //console.log(mayorFecha1?.index);
            setIndezScandeza(mayorFecha1 ? mayorFecha1.index : 0)
            //setScadenza(ArrayLocalCarrello[0].scadenza);
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
        getDataUtn(idUt);
        dataTotale.idUt = idUt;
        dataTotale.TotalPeso = TotalPeso;
        dataTotale.TotalPrezo = TotalPrezo;

        const responseMetodiPagamento = await getMetodiPagamento(idUt, dataTotale.TotalPrezo, radio)
        setTipoPagamento(responseMetodiPagamento);
        const responseCaricaCorriere = await getCaricaCorriere(idUt);
        setCaricaCorriere(responseCaricaCorriere.data);
    }

    const getDataUtn = async (idUt: number) => {
        try {
            const responseDataUtn = await httpGetUtente(idUt);
            setdataUtente(responseDataUtn.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getTotaleProvisorio = async (idUt: number, TotalePeso: number, cero: number, TotalePrezzo: number, Sconto: number | null, tipoPagamento: number, IdCorriere: number, cap?: string) => {
        try {
            //console.log('lavori',dataTotale.TotalPrezo)
            const responseProvisorio = await httpGetTotaleProvisorio(idUt, TotalePeso, cero, TotalePrezzo, Sconto, tipoPagamento, IdCorriere, cap);
            return responseProvisorio.data;
        } catch (error) {
            console.log('error use Carrello ', error)
        }
    }

    const getIndirizzoUt = async () => {
        try {
            const responseIndirizzo = await httpGetIndirizzo(dataTotale.idUt);
            setIndirizzoList(responseIndirizzo.data);

        } catch (error) {
            console.log('error use IndirizzoUt Carrello', error)
        }
    }

    const getDatesAlleghiPDF = async () => {
        try {
            const responseOreMinuti = await httpGetDatesAlleghiPDF();
            setAlleghiPDF(responseOreMinuti.data)
        } catch (error) {
            console.log('error use getDatesAlleghiPDF Carrello', error)
        }
    }

    const getMetodiPagamento = async (IdUt: number, TotaleCarrello: number, IdMetodoConsegnaScelto: number) => {
        const responseMetodiPagamento = await httpGetMetodiPagamento(IdUt, TotaleCarrello, IdMetodoConsegnaScelto);
        return (responseMetodiPagamento.data)
    }

    const getAplicaCouponSconto = async (codice: string, tipoUtn: number | undefined, totalLavori: number, ordines: ObjCarrello[]) => {
        const responseAplicaCouponSconto = await httpGetAplicaCouponSconto(codice, tipoUtn, totalLavori, ordines);
        return responseAplicaCouponSconto.data
    }

    const getCaricaCorriere = async (IdUtCC: number) => {
        const responseCaricaCorriere = await httpGetCaricaCorriere(IdUtCC);
        return responseCaricaCorriere;
    }

    const getCorriereSelezionata = async (IdCorriereCS: number, CapCS: string,IdPrevCS?:number,IdFormProdCS?:number,IdTipoCartaCS?:number,IdColoreStampaCS?:number) => {
        const responseCorriereSelezionata = await httpGetCorriereSelezionata(IdCorriereCS, CapCS,IdPrevCS,IdFormProdCS,IdTipoCartaCS,IdColoreStampaCS)
        return responseCorriereSelezionata;
    }



    /*
        *Funciones handle
    */

    const deleteItem =async (id: number) => {
        arrayCarrello.splice(id, 1);
        setArrayCarrello([...arrayCarrello]);
        localStorage.setItem('c', JSON.stringify([...arrayCarrello]))
        getLocalCarrello();
        const responseGetTotaleProvisorio = await getTotaleProvisorio(dataTotale.idUt, dataTotale.TotalPeso, 0, dataTotale.TotalPrezo, null, radioPagamento, radio);

        setTotaleProvisorio(responseGetTotaleProvisorio)
    }

    const handleDeleteAllCarrello = () => {
        localStorage.removeItem('c');
        localStorage.removeItem('m');
        localStorage.removeItem('sc')
        localStorage.clear();
        setArrayCarrello([]);
        setTotaleProvisorio(undefined)
    }

    const handleRetornaProdotto = (i: number, uri: string) => {
        window.parent.postMessage({ uri: uri, operation: enOperationFrame.reliadUrl }, GLOBAL_CONFIG.IMG_IP);
        const updateCarrello = [...arrayCarrello]
        updateCarrello.splice(i, 1);
        setArrayCarrello(updateCarrello);
        localStorage.setItem('c', JSON.stringify(updateCarrello))
        getLocalCarrello();
        getTotaleProvisorio(dataTotale.idUt, dataTotale.TotalPeso, 0, dataTotale.TotalPrezo, null, radioPagamento, radio);
    }

    const handleReturnIndex = () => {
        window.parent.postMessage({ operation: enOperationFrame.returnIndex }, GLOBAL_CONFIG.IMG_IP);
    }

    const handleTotaleProvisorio = async () => {
        const scontoLocal = localStorage.getItem('sc')
        const responseTotale = await getTotaleProvisorio(dataTotale.idUt, dataTotale.TotalPeso, 0, dataTotale.TotalPrezo, scontoLocal == undefined ? null : Number(scontoLocal), radioPagamento, radio);
        setTotaleProvisorio(responseTotale)
    }

    const handleRadioPagamento = async (idIp: number) => {
        setRadioPagamento(idIp);
        const corr = tipoPagamento.find(x=>x.idTipoPagamento == idIp)?.titulo;
        const corrI = tipoPagamento.find(x=>x.idTipoPagamento == idIp)?.imgRif;
        const corrD = tipoPagamento.find(x=>x.idTipoPagamento == idIp)?.descrizione;
        localStorage.setItem('tp',String(corr))
        localStorage.setItem('tpI',String(corrI));
        localStorage.setItem('tpD',String(corrD));
        const scontoLocal = localStorage.getItem('sc')
        const responseTotale = await getTotaleProvisorio(dataTotale.idUt, dataTotale.TotalPeso, 0, dataTotale.TotalPrezo, scontoLocal == undefined ? null : Number(scontoLocal), idIp, radio);
        setTotaleProvisorio(responseTotale)
    }

    const handleGetCorriereSelezionata = async (IdCorriere?: number, Cap?: string , IdPrev?:number,IdFormProd?:number,IdTipoCarta?:number,IdColoreStampa?:number) => {
        //debugger
        //console.log('cap',Cap)
        const carrello = arrayCarrello[indexScandeza];
        const responseIndirizzo = await httpGetIndirizzo(dataTotale.idUt);
        const responseGetCorreore = await getCorriereSelezionata(IdCorriere === undefined ? radio : IdCorriere, Cap === undefined ? String(responseIndirizzo.data.find(x => x.predefinito == true)?.cap) : Cap,IdPrev === undefined ? Number(carrello.idPrev) : IdPrev,IdFormProd === undefined?  Number(carrello.IdFormProd): IdFormProd,IdTipoCarta === undefined ? Number(carrello.IdTipoCarta) : IdTipoCarta, IdColoreStampa  === undefined ? Number(carrello.IdColoreStampa): IdColoreStampa)

        setCorriereSelezionata(responseGetCorreore.data)

    }

    const handleShow = async () => {
        console.log(' step mando 6')
        window.parent.postMessage({ operation: enOperationFrame.show }, GLOBAL_CONFIG.IMG_IP);
    }

    

    const handleScandeza = async (Cap:string ) => {
        // const date1 = arrayCarrello[indexScandeza].scadenza?.date1;
        // const date2 = arrayCarrello[indexScandeza].scadenza?.date2;
        // if (radio === 1 && date1 !== undefined) {
        //     const dateNew = new Date(date1)
        //     return dateNew.toLocaleDateString('it-IT', {
        //         weekday: 'long',
        //         day: 'numeric',
        //         month: 'long',
        //         year: 'numeric'
        //     });
        // }
        // if (radio === 0 && date2 !== undefined) {
        //     const dateNew = new Date(date2)

        //     return dateNew.toLocaleDateString('it-IT', {
        //         weekday: 'long',
        //         day: 'numeric',
        //         month: 'long',
        //         year: 'numeric'
        //     });
        // }

        const IdPrev = arrayCarrello[indexScandeza].idPrev;
        const IdFormProd = arrayCarrello[indexScandeza].IdFormProd;
        const IdTipoCarta = arrayCarrello[indexScandeza].IdTipoCarta;
        const IdColoreStampa = arrayCarrello[indexScandeza].IdColoreStampa;

        const responseDateConsegna = await getCorriereSelezionata(radio,Cap,Number(IdPrev),Number(IdFormProd),Number(IdTipoCarta),Number(IdColoreStampa))

        setCorriereSelezionata(responseDateConsegna.data);

        //return '';

    };

    /**
     * *Funciones efectHelpers
     */ 

    useEffect(() => {
        getLocalCarrello();
        handleTotaleProvisorio();
        getDatesAlleghiPDF();
        getIndirizzoUt();
        
        
        localStorage.setItem('cons','1');
    }, [])


    return {
        arrayCarrello,
        TotaleProvisorio,
        setTotaleProvisorio,
        handleDeleteAllCarrello,
        handleRetornaProdotto,
        setArrayCarrello,
        deleteItem,
        handleReturnIndex,
        indirizzoList,
        alleghiPDF,
        scadenza,
        indexScandeza,
        dataUtente,
        setRadio,
        radio,
        tipoPagamento,
        setRadioPagamento,
        radioPagamento,
        getAplicaCouponSconto,
        dataTotale,
        messageCoupon,
        setMessageCoupon,
        showInputCoupon,
        setShowInputCoupon,
        getTotaleProvisorio,
        handleRadioPagamento,
        caricaCorriere,
        corriereSelezionata,
        handleGetCorriereSelezionata,
        handleScandeza,
        handleShow
    }
}

export default useCarrello