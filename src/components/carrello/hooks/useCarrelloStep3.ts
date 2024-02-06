import { useEffect, useState } from "react";
import { DataGetCaricaCorriere } from "../Interfaces/CaricaCorriere";
import { getCaricaCorriere, getDataUtn, getDatesAlleghiPDF, getIndirizzoUt, getTotaleProvisorio } from "../helpers/servicesHelpers";
import useHelpers from "../helpers/useHelpers";
import { DataGetTotaleProvisorio } from "../Interfaces/totaleProvvisorio";
import { DataGetIndirizzo } from "../Interfaces/Indirizzo";
import { DataResponseGetUtente } from "../../../interface/Utente";
import { ObjCarrello } from "../../formProdottoV1/interface/ObjCarrrello";
import { httpGetCorriereSelezionata } from "../services/Services";
import { DataGgetCorriereSelezionata, DateConsegna, IDataConsegna, ISegliConsegnaData } from "../Interfaces/Corriere";
import { DataGetAlleghiPDF } from "../Interfaces/dateAlleghiPDF";
import { enOperationFrame } from "../../../enHelpers/enOperationFrame";
import { DataLocalPagamento } from "../Interfaces/TipoPagamento";
import { IFormIndirizzo } from "../../AreaPersonale/Componentes/Indirizzo/interfaces/IFormIndirizo";
import { httpGetCaricaLocalita, httpGetCaricaNazioni, httpPostIndirizzo } from "../../AreaPersonale/Componentes/Indirizzo/services/serviceIndirizo";
import { DataGetNazioni } from "../../AreaPersonale/Componentes/Indirizzo/interfaces/GetCaricaNazioni";
import { DataGetLocalita } from "../../AreaPersonale/Componentes/Indirizzo/interfaces/GetCaricaLocalita";

const valuesFormIndirizzo: IFormIndirizzo = {
    cap: '',
    destinatario: '',
    idCap: 0,
    idNazione: 0,
    indirizzo: '',
    referimento: '',
    idut: 0,
    localitaCap: '',
    telefono: '',
}

const useCarrelloStep3 = () => {
    //*States Primarios
    const [caricaCorriere, setCaricaCorriere] = useState<DataGetCaricaCorriere[]>([]);
    const [indirizzoList, setIndirizzoList] = useState<DataGetIndirizzo[]>([])
    const [arrayCarrello, setArrayCarrello] = useState<ObjCarrello[]>([]);
    const [listNazionii, setListNazionii] = useState<DataGetNazioni[]>([]);
    const [listLocalita, setListLocalita] = useState<DataGetLocalita[]>([])
    //*States Secundarios
    const [TotaleProvisorio, setTotaleProvisorio] = useState<DataGetTotaleProvisorio>();
    const [dataUtente, setDataUtente] = useState<DataResponseGetUtente>()
    const [dataConsegna, setDataConsegna] = useState<IDataConsegna>();
    const [corriereSelezionata, setCorriereSelezionata] = useState<DataGgetCorriereSelezionata>()
    const [alleghiPDF, setAlleghiPDF] = useState<DataGetAlleghiPDF>();

    //*States booleanos
    const [loading, setLoading] = useState(false);
    const [firstLoad, setFirstLoad] = useState(true);
    const [openFormIndirizzo, setOpenFormIndirizzo] = useState(false)
    //*States Change
    const [inputConsegna, setInputConsegna] = useState(1);
    const [valueCap, setValueCap] = useState('');
    const [emailValue, setEmailValue] = useState<string | undefined>('');
    const [error, setError] = useState(false)
    //*States Number
    const [indexScandeza, setIndezScandeza] = useState<number>(0);
    //*States Object
    const [dataCarrello, setdataCarrello] = useState({
        idUt: 0,
        TotalPeso: 0,
        TotalPrezo: 0,
        Colli: 0,
    })
    const [valuesIndirizzo, setValuesIndirizzo] = useState(valuesFormIndirizzo)
    //*Storage
    const localConsegna = localStorage.getItem('cons');
    const localConsegnaObj: ISegliConsegnaData = localConsegna ? JSON.parse(localConsegna) : {};
    var radioConsegna = localConsegnaObj.dataCorriere ? localConsegnaObj.dataCorriere.metodoDiConsegna.idMetodoConsegna : -1;
    const capConsegna = localConsegnaObj.dataCorriere ? localConsegnaObj.dataIndirizzo?.cap : "";

    const localPagamento = localStorage.getItem('tp')
    const localPagamentoObj: DataLocalPagamento = localPagamento ? JSON.parse(localPagamento) : {};
    var radioPagamento = localPagamentoObj.tipoPagamento ? localPagamentoObj.tipoPagamento.idTipoPagamento : -1;
    const scontoL = localPagamentoObj.dataSconto ? localPagamentoObj.dataSconto.importoFisso : null

    const { getLocalCarrelloHelper, handleOperationFrame } = useHelpers();

    //*Handle Data
    const handleData = async () => {
        setLoading(true)
        const localCarrello = getLocalCarrelloHelper();
        const utenteData = await handleGetDataUt(localCarrello.idUt);
        radioPagamento = radioPagamento == -1 ? Number(utenteData?.idPagamento) : radioPagamento;

        const responseCaricaCorriere = await getCaricaCorriere(localCarrello.idUt);
        setCaricaCorriere(responseCaricaCorriere.data);
        setdataCarrello({ idUt: localCarrello.idUt, Colli: localCarrello.Colli, TotalPeso: localCarrello.TotalPeso, TotalPrezo: localCarrello.TotalPrezo })

        const listIndi = await handleListIndirizo(localCarrello.idUt);
        setIndezScandeza(localCarrello.mayorFecha1);
        setArrayCarrello(localCarrello.arrayCarrello);
        if (listIndi != undefined) {
            radioConsegna = listIndi.length > 0 ? 1 : 0;
            setInputConsegna(radioConsegna);
            var capVar: undefined | string = undefined;
            if (capConsegna == undefined || capConsegna == "") {
                capVar = listIndi.find(x => x.predefinito == true)?.cap
                // <option value={dataUtente?.cap}>{dataUtente?.nominativo}, {dataUtente?.indirizzo} - {dataUtente?.cap} {dataUtente?.citta} ({dataUtente?.provincia})</option>
                if (utenteData) {
                    const dataInd: DataGetIndirizzo = {
                        cap: utenteData.cap,
                        destinatario: utenteData.nominativo,
                        idIndirizzo: 0,
                        indirisso: utenteData.indirizzo,
                        localitaStr: '',
                        nazioneStr: '',
                        nome: utenteData.nominativo,
                        predefinito: true,
                        riassunto: utenteData.indirizzo + "," + utenteData.cap ?? '' + "," + utenteData.citta + utenteData.provincia,
                        telefono: '',
                    }
                    setIndirizzoList([...listIndi, dataInd]);
                }

                if (!listIndi.some(x => x.predefinito) && utenteData) {
                    setValueCap(utenteData.cap);
                    capVar = utenteData.cap;
                } else {
                    setValueCap(String(capVar));
                }

            } else {
                console.log('aca')
                setValueCap(capConsegna)
                capVar = capConsegna;

            }
            //console.log(capVar)
            if (capVar != undefined) {
                await handleScandeza(capVar, localCarrello.arrayCarrello, localCarrello.mayorFecha1, radioConsegna, localCarrello.idUt);
                handleTotaleProvisorio(localCarrello.idUt, localCarrello.TotalPeso, 0, localCarrello.TotalPrezo, radioPagamento, radioConsegna, capVar);
            }
        }
        const ore = await getDatesAlleghiPDF()
        setAlleghiPDF(ore);
        handleOperationFrame(enOperationFrame.counterCarrello, { count: String(localCarrello.arrayCarrello.length), data: localCarrello.arrayCarrello });
        setLoading(false);
    }
    //*Handle Funciones Primarias
    const handleChangeRadioConsegna = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = evt.target;
        setFirstLoad(false);
        setInputConsegna(Number(value));
    }

    const handleChangeSelectIndirizzo = (evt: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = evt.target;
        setFirstLoad(false);
        console.log(value);
        setValueCap(value);
    }

    const handleChangeEmail = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = evt.target;
        setEmailValue(value);
    }

    const handleChangeIndirizzo = (evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = evt.target;
        setFirstLoad(false);
        setValuesIndirizzo({ ...valuesIndirizzo, [name]: value })
    }

    //*Funciones handle Secundarias
    const handleTotaleProvisorio = async (idUt: number, TotalePeso: number, cero: number, TotalePrezzo: number, radioPagamento: number, radioConsegna: number, cap?: string) => {
        setLoading(true);
        const responseTotale = await getTotaleProvisorio(idUt, TotalePeso, 0, TotalePrezzo, scontoL, radioPagamento, radioConsegna, cap);
        setTotaleProvisorio(responseTotale);
        setLoading(false);
    }
    const handleListIndirizo = async (IdUt: number) => {
        try {
            setLoading(true);
            const response = await getIndirizzoUt(IdUt);
            if (response) {

                setIndirizzoList(response);
                return response;
            }
        } catch (error) {
            throw new Error(String(error))
        } finally {
            setLoading(false)
        }
    }

    const handleGetDataUt = async (IdUt: number) => {
        try {
            const response = await getDataUtn(IdUt);
            setDataUtente(response)
            return response;
        } catch (error) {

        } finally {

        }
    }

    const handleScandeza = async (Cap: string | undefined, arrCarrello: ObjCarrello[], index: number, consegnaRadio: number, idUt: number) => {
        //setLoading(true)
        const base = arrCarrello[index].base;
        const produndita = arrCarrello[index].produndita;
        const altezza = arrCarrello[index].altezza;

        const IdPrev = arrCarrello[index].idPrev;
        const IdFormProd = arrCarrello[index].IdFormProd;
        const IdTipoCarta = arrCarrello[index].IdTipoCarta;
        const IdColoreStampa = arrCarrello[index].IdColoreStampa;
        const code = arrCarrello[index].code;

        const responseDateConsegna = await httpGetCorriereSelezionata(consegnaRadio, Cap ? Cap : 'null', Number(IdPrev), Number(IdFormProd), Number(IdTipoCarta), Number(IdColoreStampa), idUt, base, produndita, altezza);
        setCorriereSelezionata(responseDateConsegna.data);

        handleSelectedDataConsegna(String(code), responseDateConsegna.data.dateConsegna);
        //setLoading(false);
    };

    const handleSelectedDataConsegna = (code: string, dateConsegna: DateConsegna) => {

        var Dates: IDataConsegna = {
            date: new Date(),
            dateProduzione: new Date(),
            dateProduzioneStr: "",
            dateStr: "",
        }

        switch (code) {
            case "F":
                const yearDataFast = new Date(dateConsegna.dataFast).getFullYear();
                Dates = {
                    date: dateConsegna.dataFast,
                    dateProduzione: dateConsegna.dataFastProduzione,
                    dateProduzioneStr: `${dateConsegna.giornoStrFP} ${dateConsegna.giornoIntFP} ${dateConsegna.meseF} ${yearDataFast}`,
                    dateStr: `${dateConsegna.giornoStrF} ${dateConsegna.giornoIntF} ${dateConsegna.meseF} ${yearDataFast}`
                }
                setDataConsegna(Dates);
                return Dates
                //localStorage.setItem('datecons', JSON.stringify(Dates));
                break;
            case "N":
                const yearDataNormale = new Date(dateConsegna.dataNormale).getFullYear();
                Dates = {
                    date: dateConsegna.dataNormale,
                    dateProduzione: dateConsegna.dataNormaleProduzione,
                    dateProduzioneStr: `${dateConsegna.giornoStrNP} ${dateConsegna.giornoIntNP} ${dateConsegna.meseN} ${yearDataNormale}`,
                    dateStr: `${dateConsegna.giornoStrN} ${dateConsegna.giornoIntN} ${dateConsegna.meseN} ${yearDataNormale}`
                }
                setDataConsegna(Dates);
                return Dates

                //localStorage.setItem('datecons', JSON.stringify(Dates));
                break;
            case "S":
                const yearDataSlow = new Date(dateConsegna.dataSlow).getFullYear();
                Dates = {
                    date: dateConsegna.dataSlow,
                    dateProduzione: dateConsegna.dataSlowProduzione,
                    dateProduzioneStr: `${dateConsegna.giornoStrSP} ${dateConsegna.giornoIntSP} ${dateConsegna.meseS} ${yearDataSlow}`,
                    dateStr: `${dateConsegna.giornoStrS} ${dateConsegna.giornoIntS} ${dateConsegna.meseS} ${yearDataSlow}`
                }
                setDataConsegna(Dates);
                return Dates

                //localStorage.setItem('datecons', JSON.stringify(Dates));
                break;
            default:
                return
        }
    }

    const handleUseMiaMail = () => {
        setEmailValue(dataUtente?.email);
    }

    const handleTotaleChange = () => {
        if (emailValue != undefined && emailValue != "") {
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const okEmail = regexEmail.test(emailValue);
            if (!okEmail) {
                setEmailValue(undefined);
                return;
            }
        }

        var dataInd: DataGetIndirizzo | undefined;
        if (inputConsegna == 0) {
            dataInd = {
                cap: "",
                destinatario: "",
                idIndirizzo: 0,
                indirisso: "",
                localitaStr: '',
                nazioneStr: '',
                nome: "",
                predefinito: true,
                riassunto: "<b style='font-size:16px'>Tipografia Former</b>, Via Cassia, 2010 - 00123 Roma",
                telefono: '',
            }
        } else {
            dataInd = indirizzoList.find(x => x.cap == valueCap)
        }

        const data: ISegliConsegnaData = {
            dataCorriere: corriereSelezionata?.corrDaUsare,
            dataIndirizzo: dataInd,
            dateConsenga: dataConsegna,
            pesoTotale: dataCarrello.TotalPeso,
            email: emailValue,
        }
        localStorage.setItem('cons', JSON.stringify(data));

        handleOperationFrame(enOperationFrame.reliadUrl, 'carrello-pagamento');
    }

    const handleOpenFormIndirizzo = async () => {
        try {
            const responseLocalita = await httpGetCaricaNazioni();
            setListNazionii(responseLocalita.data);
            setValuesIndirizzo({ ...valuesIndirizzo, idut: dataCarrello.idUt })
        } catch (error) {

        } finally {
            setOpenFormIndirizzo(true);
        }
    }

    const handleCloseFormIndirizzo = () => {
        setOpenFormIndirizzo(false);
        setValuesIndirizzo(valuesFormIndirizzo)
    }

    const handleSalvaIndirizzo = async () => {
        setLoading(true)
        setOpenFormIndirizzo(false);
        const { destinatario, idCap, idNazione, idut, indirizzo, referimento, telefono, cap, localitaCap } = valuesIndirizzo;
        var err = false;
        if (destinatario.length == 0 || indirizzo.length == 0 || referimento.length == 0) { setError(true); err = true; }
        if (idNazione == 0) {
            if (cap?.length == 0 || idCap == 0) { setError(true); err = true }
        } else {
            if (localitaCap?.length == 0) { setError(true); err = true }
        }

        if (!err) {
            const responsePost = await httpPostIndirizzo(valuesIndirizzo);
            if (responsePost.data) { handleListIndirizo(idut) }
        }
        setLoading(false);
    }

    //*Efects helpers
    const efectRadioConsegna = async () => {
        await handleTotaleProvisorio(dataCarrello.idUt, dataCarrello.TotalPeso, 0, dataCarrello.TotalPrezo, radioPagamento, inputConsegna, valueCap);
        await handleScandeza(valueCap, arrayCarrello, indexScandeza, inputConsegna, dataCarrello.idUt);
    }

    const efectSelectIndirizzo = async () => {
        setLoading(true)
        await handleScandeza(valueCap, arrayCarrello, indexScandeza, inputConsegna, dataCarrello.idUt);
        await handleTotaleProvisorio(dataCarrello.idUt, dataCarrello.TotalPeso, 0, dataCarrello.TotalPrezo, radioPagamento, inputConsegna, valueCap)
        setLoading(false)
    }

    const efectChangeCapIndirizzo = async () => {
        setLoading(true);
        try {
            const response = await httpGetCaricaLocalita(String(valuesIndirizzo.cap));
            setListLocalita(response.data);
        } catch (error) {

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        handleData();
    }, [])

    useEffect(() => {
        if (firstLoad) return;
        efectRadioConsegna();
    }, [inputConsegna])

    useEffect(() => {
        if (firstLoad) return;
        efectSelectIndirizzo();
    }, [valueCap])

    useEffect(() => {

        if (firstLoad) return;
        const timerId = setTimeout(() => {
            efectChangeCapIndirizzo();
        }, 800);
        return () => clearTimeout(timerId);
    }, [valuesIndirizzo.cap])


    return {
        //*States
        caricaCorriere, TotaleProvisorio, inputConsegna, loading, indirizzoList, dataUtente, corriereSelezionata, dataConsegna, alleghiPDF, emailValue, valueCap, valuesIndirizzo, listNazionii, openFormIndirizzo, listLocalita, error,
        //*Funciones
        handleTotaleChange, handleChangeRadioConsegna, handleChangeSelectIndirizzo, handleOperationFrame, handleChangeEmail, handleUseMiaMail, handleOpenFormIndirizzo, handleChangeIndirizzo, handleCloseFormIndirizzo, handleSalvaIndirizzo,
    }
}

export default useCarrelloStep3