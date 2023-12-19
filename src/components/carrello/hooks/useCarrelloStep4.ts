import React, { useEffect, useState } from "react";
import { ISegliConsegnaData } from "../Interfaces/Corriere";
import { DataGetTipoPagamenti, DataLocalPagamento } from "../Interfaces/TipoPagamento";
import { getAplicaCouponSconto, getDataUtn, getMetodiPagamento, getTotaleProvisorio } from "../helpers/servicesHelpers";
import useHelpers from "../helpers/useHelpers"
import { DataGetTotaleProvisorio } from "../Interfaces/totaleProvvisorio";
import { DataResponseGetUtente } from "../../../interface/Utente";
import { ObjCarrello } from "../../formProdottoV1/interface/ObjCarrrello";
import { enOperationFrame } from "../../../enHelpers/enOperationFrame";
import { DataGetAplicaCouponSconto } from "../Interfaces/CouponSconto";

const useCarrelloStep4 = () => {

    const { getLocalCarrelloHelper, handleOperationFrame } = useHelpers();

    //*States primarios 
    const [tipoPagamento, setTipoPagamento] = useState<DataGetTipoPagamenti[]>([]);
    const [arrayCarrello, setArrayCarrello] = useState<ObjCarrello[]>([])

    //*States secundarias
    const [TotaleProvisorio, setTotaleProvisorio] = useState<DataGetTotaleProvisorio>();
    const [dataUtente, setDataUtente] = useState<DataResponseGetUtente>();
    const [dataSconto, setDataSconto] = useState<DataGetAplicaCouponSconto>()

    //*States booleanos
    const [loading, setLoading] = useState(false);
    const [firstLoad, setFirstLoad] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [showInputCoupon, setShowInputCoupon] = useState(true)
    //*States values
    const [valuePagamento, setValuePagamento] = useState(5);
    const [valueConsegna, setValueConsegna] = useState(1);
    //*States strings
    const [codeCoupon, setCodeCoupon] = useState('')
    const [messageCoupon, setMessageCoupon] = useState('')
    //*Storage

    const localConsegna = localStorage.getItem('cons');
    const localConsegnaObj: ISegliConsegnaData = localConsegna ? JSON.parse(localConsegna) : {};
    const radioConsegna = localConsegnaObj.dataCorriere ? localConsegnaObj.dataCorriere.metodoDiConsegna.idMetodoConsegna :1;
    const capConsegna = localConsegnaObj.dataCorriere ? localConsegnaObj.dataIndirizzo?.cap : "";

    const localPagamento = localStorage.getItem('tp')
    const localPagamentoObj: DataLocalPagamento = localPagamento ? JSON.parse(localPagamento) : {};
    const radioPagamento = localPagamentoObj.tipoPagamento ? localPagamentoObj.tipoPagamento.idTipoPagamento : localConsegnaObj.dataIndirizzo?.cap ? 8 : 5;
    const scontoL = localPagamentoObj.dataSconto? localPagamentoObj.dataSconto.importoFisso : null
    const showInputL = (localPagamentoObj.dataSconto && localPagamentoObj.dataSconto.importoFisso != 0) ? false : true;


    //*States Object
    const [dataCarrello, setdataCarrello] = useState({
        idUt: 0,
        TotalPeso: 0,
        TotalPrezo: 0,
        Colli: 0,
    })
    //*Handle Data
    const handleData = async () => {
        setLoading(true)
        const localCarrello = getLocalCarrelloHelper();
        const metodiPagamento = await getMetodiPagamento(localCarrello.idUt, localCarrello.TotalPrezo, radioConsegna);
        await handleGetDataUt(localCarrello.idUt);
        setTipoPagamento(metodiPagamento);
        setValuePagamento(radioPagamento)
        setValueConsegna(radioConsegna);
        setArrayCarrello(localCarrello.arrayCarrello)
        setdataCarrello({ Colli: localCarrello.Colli, idUt: localCarrello.idUt, TotalPeso: localCarrello.TotalPeso, TotalPrezo: localCarrello.TotalPrezo })
        await handleTotaleProvisorio(localCarrello.idUt, localCarrello.TotalPeso, 0, localCarrello.TotalPrezo, radioPagamento, radioConsegna, capConsegna,scontoL );
        setDataSconto(localPagamentoObj.dataSconto)
        setShowInputCoupon(showInputL);
        setMessageCoupon(localPagamentoObj.dataSconto?.message ?? "")
        handleOperationFrame(enOperationFrame.counterCarrello, { count: String(localCarrello.arrayCarrello.length), data: localCarrello.arrayCarrello });
        setLoading(false);
    }
    //*Handle primarias
    const handleRadioPagamento = (eve: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = eve.target;
        setFirstLoad(false)
        setValuePagamento(Number(value));
    }

    const handleChangeInputCoupon = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = evt.target;
        setCodeCoupon(value);
    }

    //*Handle Secunadarias
    const handleTotaleProvisorio = async (idUt: number, TotalePeso: number, cero: number, TotalePrezzo: number, radioPagamento: number, radioConsegna: number, cap: string | undefined, sconto: number | null) => {
        setLoading(true);
        const responseTotale = await getTotaleProvisorio(idUt, TotalePeso, 0, TotalePrezzo, sconto, radioPagamento, radioConsegna, cap);
        setTotaleProvisorio(responseTotale);
        setLoading(false);
    }

    const handleGetDataUt = async (IdUt: number) => {
        try {
            const response = await getDataUtn(IdUt);
            setDataUtente(response)
        } catch (error) {

        } finally {

        }
    }

    const handleAplicaCoupon = async () => {
        console.log(codeCoupon);
        setFirstLoad(false)
        const responseCoupon = await getAplicaCouponSconto(codeCoupon, dataUtente?.tipo, dataCarrello.TotalPrezo, arrayCarrello);
        if (responseCoupon.newOrdines.length && dataUtente) {
            await handleTotaleProvisorio(dataCarrello.idUt, dataCarrello.TotalPeso, 0, dataCarrello.TotalPrezo, valuePagamento, valueConsegna, capConsegna, responseCoupon.importoFisso);
            //setArrayCarrello(responseCoupon.newOrdines);
            //localStorage.setItem('c', JSON.stringify(responseCoupon.newOrdines));
            const dataScontoObj: DataGetAplicaCouponSconto = {
                importoFisso: responseCoupon.importoFisso,
                message: responseCoupon.message,
                newOrdines: [],
                showInput: responseCoupon.importoFisso === 0 ? false :true,
            }
            setDataSconto(dataScontoObj)
        }
        console.log(responseCoupon);
        setMessageCoupon(responseCoupon.message);
        setShowInputCoupon(responseCoupon.importoFisso === 0 ? true :false);
        
    }

    const handleTotaleChange = (reaload = true) => {

        const data: DataLocalPagamento = {
            tipoPagamento: tipoPagamento.find(x => x.idTipoPagamento === valuePagamento),
            dataSconto: dataSconto,
        }
        localStorage.setItem('tp', JSON.stringify(data));
        reaload && handleOperationFrame(enOperationFrame.reliadUrl, 'carrello-riepilogo');
    }

    //*effects helpers
    const effectRadioPagamento = async () => {
        setLoading(true);
        await handleTotaleProvisorio(dataCarrello.idUt, dataCarrello.TotalPeso, 0, dataCarrello.TotalPrezo, valuePagamento, valueConsegna, capConsegna, dataSconto?.importoFisso ?? null);
        setLoading(false);
    }


    useEffect(() => {
        handleData();
    }, [])

    useEffect(() => {
        if (firstLoad) return
        console.log('aca')
        handleTotaleChange(false);
    }, [dataSconto])


    useEffect(() => {
        if (firstLoad) return;
        effectRadioPagamento();
    }, [valuePagamento])



    return {
        //*States
        tipoPagamento, valuePagamento, valueConsegna, TotaleProvisorio, openModal, loading, messageCoupon, showInputCoupon,
        //*Handle
        handleRadioPagamento, handleTotaleChange, setOpenModal, handleChangeInputCoupon, handleAplicaCoupon,
    }
}

export default useCarrelloStep4