import { useEffect, useState } from "react";
import { DataGetTotaleProvisorio } from "../Interfaces/totaleProvvisorio";
import { getTotaleProvisorio } from "../helpers/servicesHelpers";
import useHelpers from "../helpers/useHelpers";
import { ObjCarrello } from "../../formProdottoV1/interface/ObjCarrrello";
import { ISegliConsegnaData } from "../Interfaces/Corriere";
import { DataLocalPagamento } from "../Interfaces/TipoPagamento";
import { enOperationFrame } from "../../../enHelpers/enOperationFrame";
import { DataOrdineStep5, DataOrdineVoid } from "../Interfaces/DataTotaleORdineStep5.d";
import { DataPostAquistaOra } from "../Interfaces/AquistaOra";
import { httpPostAquistaOra } from "../services/Services";
import { GLOBAL_CONFIG } from "../../../_config/global";
import { httpGetUtente } from "../../../services/UtenteService";
import { DataResponseGetUtente, ResponseGetUtente } from "../../../interface/Utente";

const dataDefault = {
    TotalPrezo: 0,
    TotalPeso: 0,
    idUt: 0,
    desconto: 0,
    Colli: 0,
}

const useCarrelloStep5 = () => {

    const { getLocalCarrelloHelper, handleOperationFrame } = useHelpers();

    //*States primarios
    const [arrayCarrello, setArrayCarrello] = useState<ObjCarrello[]>([])

    //*States secundarios
    const [TotaleProvisorio, setTotaleProvisorio] = useState<DataGetTotaleProvisorio>();
    const [dataTotale, setDataTotale] = useState(dataDefault)
    const [dataOrdine, setDataOrdine] = useState<DataOrdineStep5>(DataOrdineVoid)
    const [consenga, setConsenga] = useState<ISegliConsegnaData>();
    const [pagamento, setPagamento] = useState<DataLocalPagamento>();
    const [dataUtente, setdataUtente] = useState<DataResponseGetUtente>()

    //*States booleanos
    const [loading, setLoading] = useState(false);

    //*Storage

    const localConsegna = localStorage.getItem('cons');
    const localConsegnaObj: ISegliConsegnaData = localConsegna ? JSON.parse(localConsegna) : {};
    const radioConsegna = localConsegnaObj.dataCorriere ? localConsegnaObj.dataCorriere.metodoDiConsegna.idMetodoConsegna : 1;
    const capConsegna = localConsegnaObj.dataCorriere ? localConsegnaObj.dataIndirizzo?.cap : "";

    const localPagamento = localStorage.getItem('tp')
    const localPagamentoObj: DataLocalPagamento = localPagamento ? JSON.parse(localPagamento) : {};
    const radioPagamento = localPagamentoObj.tipoPagamento ? localPagamentoObj.tipoPagamento.idTipoPagamento : localConsegnaObj.dataIndirizzo?.cap ? 8 : 5;
    const scontoL = localPagamentoObj.dataSconto? localPagamentoObj.dataSconto.importoFisso : null


    const handleData = async () => {
        setLoading(true);
        //debugger
        const localCarrello = getLocalCarrelloHelper();
        setArrayCarrello(localCarrello.arrayCarrello);
        await handleTotaleProvisorio(localCarrello.idUt, localCarrello.TotalPeso, 0, localCarrello.TotalPrezo, radioPagamento, radioConsegna, capConsegna)
        localConsegnaObj.pesoTotale =  localCarrello.TotalPeso;
        //setDataOrdine(localConsegnaObj?.dataCorriere.);
        await getDataUtn(localCarrello.idUt)
        setDataTotale({ Colli: localCarrello.Colli, idUt: localCarrello.idUt, TotalPeso: localCarrello.TotalPeso, TotalPrezo: localCarrello.TotalPrezo, desconto: 0 })
        setArrayCarrello(localCarrello.arrayCarrello);
        setConsenga(localConsegnaObj);
        setPagamento(localPagamentoObj);
        handleOperationFrame(enOperationFrame.counterCarrello, { count: String(localCarrello.arrayCarrello.length), data: localCarrello.arrayCarrello });
        setLoading(false);
    }

    //*Funciones handle Secundarias
    const handleTotaleProvisorio = async (idUt: number, TotalePeso: number, cero: number, TotalePrezzo: number, radioPagamento: number, radioConsegna: number, cap?: string) => {
        setLoading(true);
        const responseTotale = await getTotaleProvisorio(idUt, TotalePeso, 0, TotalePrezzo, scontoL, radioPagamento, radioConsegna, cap);
        setTotaleProvisorio(responseTotale);
        setLoading(false);
    }

    const getDataUtn = async (idUt: number) => {
        try {
            const responseDataUtn = await httpGetUtente(idUt);
            setdataUtente(responseDataUtn.data)
        } catch (error) {
            //console.log(error)
        }
    }

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

    const deleteItem = async (id: number) => {
        const confirme = confirm('Sicuro di voler eliminare questo Lavoro? Verrà modificato anche il relativo Ordine');
        if (confirme) {
            setLoading(true);
            arrayCarrello.splice(id, 1);
            setArrayCarrello([...arrayCarrello]);
            localStorage.setItem('c', JSON.stringify([...arrayCarrello]))
            handleData();
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
            }
            handleOperationFrame(enOperationFrame.counterCarrello, { count: String(arrayCarrello.length), data: arrayCarrello });
            setLoading(false);
        }
    }

    const handleTotaleChange =async () =>{
        setLoading(true);
        const data: DataPostAquistaOra = {
            aquistaOraDTO: {
                dataPrevistaOriginale: consenga?.dataCorriere?.metodoDiConsegna.idMetodoConsegna == 0 ? String(consenga?.dateConsenga?.dateProduzione) : String(consenga?.dateConsenga?.date),
                emailNotificheCorriere: String(consenga?.email),
                giorno:  String(consenga!.dateConsenga!.dateProduzione),
                idCorriere: Number(consenga?.dataCorriere?.idCorriere),
                idIndirizzo: Number(consenga?.dataIndirizzo?.idIndirizzo),
                idPagam: Number(pagamento?.tipoPagamento?.idTipoPagamento),
                idUt: dataTotale.idUt,
                importoNetto: Number(TotaleProvisorio?.spedizioni),
                numColli: dataTotale.Colli,
                periodoPagam: Number(pagamento?.tipoPagamento?.periodoPagamento),
                peso: dataTotale.TotalPeso,
                idIndirizzoUtn:dataUtente?.idIndirizzo ? dataUtente.idIndirizzo : 0,
            },
            ordineDataDTO: arrayCarrello,
        }
        
        const responsePostAquistaOra = await httpPostAquistaOra(data);
        if (responsePostAquistaOra) {
            setLoading(false);
            window.parent.postMessage({ operation: enOperationFrame.reliadUrl, uri: 'ordine-confermato' }, GLOBAL_CONFIG.IMG_IP);
            handleOperationFrame(enOperationFrame.counterCarrello, '0');
            localStorage.clear();
        }
    }

    const handleRetornaProdotto =async (i: number, uri: string) => {
        const confirme = confirm('Sicuro di voler eliminare questo Lavoro dal Carrello?');
        if (confirme) {
            const updateCarrello = [...arrayCarrello]
            updateCarrello.splice(i, 1);
            setArrayCarrello(updateCarrello);
            localStorage.setItem('c', JSON.stringify(updateCarrello));

            
            await handleData()
            // await getTotaleProvisorio(dataTotale.idUt, dataTotale.TotalPeso, 0, dataTotale.TotalPrezo, null, radioPagamento, radioConsegna);
            
            window.parent.postMessage({ uri: uri, operation: enOperationFrame.reliadUrl }, GLOBAL_CONFIG.IMG_IP);
        }
    }

    useEffect(() => {
        handleData();
    }, [])


    return {
        //*States
        arrayCarrello, loading, TotaleProvisorio,consenga,pagamento,
        //*Handle
        handleDeleteAllCarrello,handleTotaleChange,deleteItem,handleRetornaProdotto,handleOperationFrame,
    }
}

export default useCarrelloStep5