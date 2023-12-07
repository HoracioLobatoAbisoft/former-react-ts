import { useEffect, useState } from "react";
import { httpGetTotaleProvisorio } from "../services/Services";
import { ObjCarrello } from "../../formProdottoV1/interface/ObjCarrrello";
import { DataGetTotaleProvisorio } from "../Interfaces/totaleProvvisorio";
import { enOperationFrame } from "../../../enHelpers/enOperationFrame";
import { useNavigate } from "react-router-dom";
import { GLOBAL_CONFIG } from "../../../_config/global";
import useHelpers from "../helpers/useHelpers";
import { getTotaleProvisorio } from "../helpers/servicesHelpers";
import { ISegliConsegnaData } from "../Interfaces/Corriere";
import { DataLocalPagamento } from "../Interfaces/TipoPagamento";

const useCarrelloStep2 = () => {

    const navigate = useNavigate();
    const {  getLocalCarrelloHelper, handleOperationFrame } = useHelpers();
    //*States Primarios

    //*States Secundarios
    const [TotaleProvisorio, setTotaleProvisorio] = useState<DataGetTotaleProvisorio>();
    //*States booleanos
    const [loading, setLoading] = useState(false);

    //*Storage
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
        const localCarrello = await getLocalCarrelloHelper();
        handleTotaleProvisorio(localCarrello.idUt, localCarrello.TotalPeso, 0, localCarrello.TotalPrezo);
        handleOperationFrame(enOperationFrame.counterCarrello, { count: String(localCarrello.arrayCarrello.length), data: localCarrello.arrayCarrello });
        setLoading(false);
    }
    //*Funciones handle 
    const handleTotaleProvisorio = async (idUt: number, TotalePeso: number, cero: number, TotalePrezzo: number) => {
        setLoading(true);
        const scontoLocal = localStorage.getItem('sc');
        const responseTotale = await getTotaleProvisorio(idUt, TotalePeso, 0, TotalePrezzo, scontoL, radioPagamento, radioConsegna,capConsegna);
        setTotaleProvisorio(responseTotale);
        setLoading(false);
    }

    const handleTotaleChange = () => {
        handleOperationFrame(enOperationFrame.reliadUrl, 'carrello-consegna')
        //navigate('../carrelloStp3')
    }

    useEffect(() => {
        getLocalCarrello();
    }, [])


    return {
        //*States
        TotaleProvisorio, loading,
        //*Funciones
        handleTotaleChange,
    }
}

export default useCarrelloStep2