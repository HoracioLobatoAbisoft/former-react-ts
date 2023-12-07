import { useEffect, useState } from 'react'
import { ObjCarrello } from '../../formProdottoV1/interface/ObjCarrrello';
import { httpGetUtente } from '../../../services/UtenteService';
import { DataResponseGetUtente } from '../../../interface/Utente';
import { enOperationFrame } from '../../../enHelpers/enOperationFrame';
import { useNavigate } from 'react-router-dom';
import { GLOBAL_CONFIG } from '../../../_config/global';
import { httpGetTotaleProvisorio } from '../services/Services';
import { DataGetTotaleProvisorio } from '../Interfaces/totaleProvvisorio';
import { DataOrdineStep5, DataOrdineVoid } from '../Interfaces/DataTotaleORdineStep5.d';
import { getTotaleProvisorio } from '../helpers/servicesHelpers';
import useHelpers from '../helpers/useHelpers';
import { ISegliConsegnaData } from '../Interfaces/Corriere';
import { DataLocalPagamento } from '../Interfaces/TipoPagamento';

const dataDefault = {
    TotalPrezo: 0,
    TotalPeso: 0,
    idUt: 0,
    desconto: 0,
    Colli: 0,
}

const useCarrelloStep1 = () => {

    const navigate = useNavigate();
    const { getLocalCarrelloHelper, handleOperationFrame } = useHelpers()
    //*States primarios
    const [arrayCarrello, setArrayCarrello] = useState<ObjCarrello[]>([]);

    //*States secundarios
    const [dataTotale, setDataTotale] = useState(dataDefault)
    const [dataUtente, setdataUtente] = useState<DataResponseGetUtente>()
    const [TotaleProvisorio, setTotaleProvisorio] = useState<DataGetTotaleProvisorio>()
    const [dataOrdine, setDataOrdine] = useState<DataOrdineStep5>(DataOrdineVoid)


    //*States booleanos
    const [loading, setLoading] = useState(false);

    //*States Numericos
    const [indexScandeza, setIndezScandeza] = useState<number>(0);

    //*States Strings

    const localPagamento = localStorage.getItem('tp')
    const localPagamentoObj: DataLocalPagamento = localPagamento ? JSON.parse(localPagamento) : {};
    const radioPagamento = localPagamentoObj.tipoPagamento ? localPagamentoObj.tipoPagamento.idTipoPagamento : 5;
    const scontoL = localPagamentoObj.dataSconto? localPagamentoObj.dataSconto.importoFisso : null

    const localConsegna = localStorage.getItem('cons');
    const localConsegnaObj: ISegliConsegnaData = localConsegna ? JSON.parse(localConsegna) : {};
    const radioConsegna = localConsegnaObj.dataCorriere ? localConsegnaObj.dataCorriere.idCorriere : 1;
    const capConsegna = localConsegnaObj.dataCorriere ? localConsegnaObj.dataIndirizzo?.cap : undefined;


    const getLocalCarrello = async () => {
        setLoading(true);
        const localCarrello = getLocalCarrelloHelper();
        setArrayCarrello(localCarrello.arrayCarrello);
        setDataTotale({ Colli: localCarrello.Colli, idUt: localCarrello.idUt, TotalPeso: localCarrello.TotalPeso, TotalPrezo: localCarrello.TotalPrezo, desconto: 0 })
        handleTotaleProvisorio(localCarrello.idUt, localCarrello.TotalPeso, 0, localCarrello.TotalPrezo);
        handleOperationFrame(enOperationFrame.counterCarrello, { count: String(localCarrello.arrayCarrello.length), data: localCarrello.arrayCarrello });
        setLoading(false);
    }

    const deleteItem = async (id: number) => {
        const confirme = confirm('Sicuro di voler eliminare questo Lavoro? Verrà modificato anche il relativo Ordine');
        if (confirme) {
            setLoading(true);
            arrayCarrello.splice(id, 1);
            setArrayCarrello([...arrayCarrello]);
            localStorage.setItem('c', JSON.stringify([...arrayCarrello]))
            await getLocalCarrello();
            const carr = JSON.parse(String(localStorage.getItem('c')));
            if (carr.length < 1 && arrayCarrello.length < 1) {
                setDataTotale({
                    TotalPrezo: 0,
                    TotalPeso: 0,
                    idUt: 0,
                    desconto: 0,
                    Colli: 0,
                });
                handleDeleteAllCarrello();
            } else {
                handleOperationFrame(enOperationFrame.counterCarrello, { count: String(arrayCarrello.length), data: arrayCarrello });
                setLoading(false);
            }
        }
    }



    //*Funciones handle
    const handleDeleteAllCarrello = () => {
        setLoading(true);
        localStorage.removeItem('c');
        localStorage.removeItem('m');
        localStorage.removeItem('sc')
        localStorage.clear();
        handleOperationFrame(enOperationFrame.counterCarrello, '0');
        handleOperationFrame(enOperationFrame.reliadUrl, 'carrello');
        setArrayCarrello([]);
        setTotaleProvisorio(undefined)
        setLoading(false);
    }

    const handleTotaleProvisorio = async (idUt: number, TotalePeso: number, cero: number, TotalePrezzo: number,) => {
        setLoading(true);
        const responseTotale = await getTotaleProvisorio(idUt, TotalePeso, 0, TotalePrezzo, scontoL, radioPagamento, radioConsegna,capConsegna);
        setTotaleProvisorio(responseTotale);
        setLoading(false);
    }

    const handleRetornaProdotto = async (i: number, uri: string) => {
        const confirme = confirm('Sicuro di voler eliminare questo Lavoro dal Carrello?');
        if (confirme) {
            const updateCarrello = [...arrayCarrello]
            updateCarrello.splice(i, 1);
            setArrayCarrello(updateCarrello);
            localStorage.setItem('c', JSON.stringify(updateCarrello));

            await getLocalCarrello()
            // await getTotaleProvisorio(dataTotale.idUt, dataTotale.TotalPeso, 0, dataTotale.TotalPrezo, null, radioPagamento, radioConsegna);

            window.parent.postMessage({ uri: uri, operation: enOperationFrame.reliadUrl }, GLOBAL_CONFIG.IMG_IP);
        }
    }

    const handleTotaleChange = () => {
        console.log('entro')
        handleOperationFrame(enOperationFrame.reliadUrl, 'carrello-file');
        //navigate('../carrelloStp2')
    }

    useEffect(() => {
        getLocalCarrello();
    }, [])

    return {
        //*States
        arrayCarrello, loading, TotaleProvisorio,
        //*Funciones
        deleteItem, handleDeleteAllCarrello, handleRetornaProdotto, setArrayCarrello, handleTotaleChange
    }
}

export default useCarrelloStep1