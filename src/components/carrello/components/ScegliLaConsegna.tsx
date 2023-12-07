import TotaleProvvisorio from "./TotaleProvvisorio"
import '../styles/ScegliLaConsegna.css'
import { ChangeEvent, useEffect, useState } from "react"
import { DataGetTotaleProvisorio } from "../Interfaces/totaleProvvisorio";
import { DataGetIndirizzo } from "../Interfaces/Indirizzo";
import { DataGetAlleghiPDF } from "../Interfaces/dateAlleghiPDF";
import { ObjCarrello } from "../../formProdottoV1/interface/ObjCarrrello";
import { enOperationFrame } from "../../../enHelpers/enOperationFrame";
import { DataResponseGetUtente } from "../../../interface/Utente";
import ContinuaGliAcquisti from "./ContinuaGliAcquisti";
import { DataGetCaricaCorriere } from "../Interfaces/CaricaCorriere";
import { CorrDaUsare, DataGgetCorriereSelezionata, DateConsegna } from "../Interfaces/Corriere";
import { GLOBAL_CONFIG } from "../../../_config/global";
import { DateFormatItWDMY } from "../../../Helpers/formatDates";
import React from "react";

type PropsScegliLaConsegna = {
    TotaleProvisorio: DataGetTotaleProvisorio | undefined
    setStepperStep: React.Dispatch<React.SetStateAction<number>>
    changebuttonstep: (number: number) => string;
    setSteptext: React.Dispatch<React.SetStateAction<string>>
    step: number;
    indirizzoList: DataGetIndirizzo[];
    alleghiPDF: DataGetAlleghiPDF | undefined;
    indexScandeza: number
    arrayCarrello: ObjCarrello[];
    dataUtente: DataResponseGetUtente | undefined;
    setRadio: React.Dispatch<React.SetStateAction<number>>
    radio: number;
    caricaCorriere: DataGetCaricaCorriere[];
    getTotaleProvisorio: (idUt: number, TotalePeso: number, cero: number, TotalePrezzo: number, Sconto: number | null, tipoPagamento: number, IdCorriere: number, cap?: string) => Promise<DataGetTotaleProvisorio | undefined>;
    dataTotale: {
        TotalPrezo: number;
        TotalPeso: number;
        idUt: number;
        desconto: number;
    }
    radioPagamento: number;
    setTotaleProvisorio: React.Dispatch<React.SetStateAction<DataGetTotaleProvisorio | undefined>>;
    corriereSelezionata: DataGgetCorriereSelezionata | undefined;
    handleGetCorriereSelezionata: (IdCorriere?: number | undefined, Cap?: string | undefined, IdPrev?: number | undefined, IdFormProd?: number | undefined, IdTipoCarta?: number | undefined, IdColoreStampa?: number | undefined) => Promise<void>
    handleScandeza: (Cap: string) => Promise<void>;
    handleAquistaOra: () => Promise<void>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    alertEmail: boolean;
}

type indirizoJson = {
    cap: string,
    nome: string,
    id: number
}
const ScegliLaConsegna = ({ TotaleProvisorio, setStepperStep, changebuttonstep, setSteptext, step, indirizzoList, alleghiPDF, indexScandeza, arrayCarrello, dataUtente, radio, setRadio, caricaCorriere, getTotaleProvisorio, dataTotale, radioPagamento, setTotaleProvisorio, corriereSelezionata, handleGetCorriereSelezionata, handleScandeza, handleAquistaOra, email, setEmail, alertEmail }: PropsScegliLaConsegna) => {


    const handleRadio = async (i: number) => {
        setRadio(i)
        console.log(i)
        if (dataUtente) {
            const scontoLocal = localStorage.getItem('sc')
            const responseGetTotaleProvisorio = await getTotaleProvisorio(dataUtente.idUt, dataTotale.TotalPeso, 0, dataTotale.TotalPrezo, scontoLocal === undefined ? null : Number(scontoLocal), radioPagamento, i);
            setTotaleProvisorio(responseGetTotaleProvisorio);
        }
        if (i == 1) {
            var indid = indirizzoList.find(x => x.predefinito == true);
            localStorage.setItem('indid', String(indid?.idIndirizzo));
            localStorage.setItem('ind', String(`${indid?.nome} ${indid?.riassunto}`))
        } else {
            localStorage.removeItem('indid')
            localStorage.removeItem('ind')
        }
        localStorage.setItem('cons', String(i))
        ////console.log(i)
    }

    // const handleScandeza = () => {
    //     const date1 = arrayCarrello[indexScandeza].scadenza?.date1;
    //     const date2 = arrayCarrello[indexScandeza].scadenza?.date2;
    //     if (radio === 1 && date1 !== undefined) {
    //         const dateNew = new Date(date1)
    //         return dateNew.toLocaleDateString('it-IT', {
    //             weekday: 'long',
    //             day: 'numeric',
    //             month: 'long',
    //             year: 'numeric'
    //         });
    //     }
    //     if (radio === 0 && date2 !== undefined) {
    //         const dateNew = new Date(date2)

    //         return dateNew.toLocaleDateString('it-IT', {
    //             weekday: 'long',
    //             day: 'numeric',
    //             month: 'long',
    //             year: 'numeric'
    //         });
    //     }
    //     return '';
    // };

    const handleAggiungiIndirizzo = () => {
        window.parent.postMessage({ operation: enOperationFrame.redirectAggiungiIndirizzo }, GLOBAL_CONFIG.IMG_IP);
    }

    const handleUseMiaMail = () => {
        setEmail(String(dataUtente?.email));
        localStorage.setItem('mil', String(dataUtente?.email))
    }

    const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
        //localStorage.setItem('mil', event.target.value)
    }

    const handleCapTotaleProvisorio = async (event: ChangeEvent<HTMLSelectElement>) => {

        const selectedValue: indirizoJson = JSON.parse(event.target.value);
        ////console.log('valoeCap',selectedValue)

        const IdPrev = arrayCarrello[indexScandeza].idPrev;
        const IdFormProd = arrayCarrello[indexScandeza].IdFormProd;
        const IdTipoCarta = arrayCarrello[indexScandeza].IdTipoCarta;
        const IdColoreStampa = arrayCarrello[indexScandeza].IdColoreStampa;
        
        await handleGetCorriereSelezionata(radio, selectedValue.cap, Number(IdPrev), Number(IdFormProd), Number(IdTipoCarta), Number(IdColoreStampa))

        if (dataUtente) {
            const scontoLocal = localStorage.getItem('sc')
            const responseGetTotaleProvisorio = await getTotaleProvisorio(dataUtente.idUt, dataTotale.TotalPeso, 0, dataTotale.TotalPrezo, scontoLocal === undefined ? null : Number(scontoLocal), radioPagamento, radio, selectedValue.cap);
            setTotaleProvisorio(responseGetTotaleProvisorio)
        }


        localStorage.setItem('ind', selectedValue.nome)
        localStorage.setItem('indid', String(selectedValue.id))
    }


    const handleDateConsegne = (dateConsegna: DateConsegna | undefined) => {
        const code = arrayCarrello[indexScandeza].code;
        switch (code) {
            case "F":
                if (radio == 0) {
                    localStorage.setItem('gro', String(dateConsegna?.dataFastProduzione));
                    localStorage.setItem('prv', String(dateConsegna?.dataFast));
                    return DateFormatItWDMY(dateConsegna?.dataFastProduzione);
                } else {
                    localStorage.setItem('gro', String(dateConsegna?.dataFastProduzione));
                    localStorage.setItem('prv', String(dateConsegna?.dataFast));
                    return DateFormatItWDMY(dateConsegna?.dataFast);
                }
            case "N":
                if (radio == 0) {
                    localStorage.setItem('prv', String(dateConsegna?.dataNormale));
                    localStorage.setItem('gro', String(dateConsegna?.dataNormaleProduzione))
                    return DateFormatItWDMY(dateConsegna?.dataNormaleProduzione);
                } else {
                    localStorage.setItem('gro', String(dateConsegna?.dataNormaleProduzione))
                    localStorage.setItem('prv', String(dateConsegna?.dataNormale));
                    return DateFormatItWDMY(dateConsegna?.dataNormale);
                }
            case "S":
                if (radio == 0) {
                    localStorage.setItem('prv', String(dateConsegna?.dataSlow));
                    localStorage.setItem('gro', String(dateConsegna?.dataSlowProduzione))
                    return DateFormatItWDMY(dateConsegna?.dataSlowProduzione);
                } else {
                    localStorage.setItem('prv', String(dateConsegna?.dataSlow));
                    localStorage.setItem('prv', String(dateConsegna?.dataSlow));
                    return DateFormatItWDMY(dateConsegna?.dataSlow);
                }
            default:
                return ""
        }
    }


    const scandeza = handleDateConsegne(corriereSelezionata?.dateConsegna);
    localStorage.setItem('scande', String(scandeza))

    useEffect(() => {
        //handleScandeza()
        handleGetCorriereSelezionata();
        handleDateConsegne(corriereSelezionata?.dateConsegna);
        const consLocal = localStorage.getItem('cons');
        if (consLocal) {
            setRadio(Number(consLocal));
        } else {
            localStorage.setItem('cons', '1');
        }
        localStorage.setItem('pzo', String(TotaleProvisorio?.pesoKG))

    }, [])

    return (
        <div className="flex scegli-container">
            <div className="w-[73%]">
                <div className="flex w-full justify-between text-[13px]">
                    <h3 className="text-[14px] font-bold  flex gap-1"><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCarrello16.png`} width={16} height={16} /> Scegli la Consegna </h3>
                    <span className="bg-[#009ec9] font-bold uppercase px-[2px] h-full text-white rounded">React V^18.2.0</span>
                </div>
                <hr className="border border-[#aaa] my-1" />
                <div className="information">
                    {caricaCorriere.map((item, i) => (
                        <React.Fragment key={i}>
                            <div className="mt-[5px]" >
                                <img key={i} src={`${GLOBAL_CONFIG.IMG_IP}${radio === item.idCorriere ? `/img/icoCheck.gif` : `/img/pixel.gif`}`} alt="" className="w-[17px] h-[11px]" />
                                <input key={i} type="radio" checked={radio === item.idCorriere ? true : false} onChange={() => handleRadio(item.idCorriere)} />
                                <label key={i} htmlFor="" className="ms-[5px]"><strong>{item.descrizione}</strong></label>
                                <br />
                                <span key={i} style={{ 'fontSize': 12 }}>
                                    <i key={i} dangerouslySetInnerHTML={{ __html: String(item.label) }}></i>
                                </span>
                                <br />
                            </div>

                        </React.Fragment>
                    ))
                    }
                    {radio == 0 ?
                        <div className="retiroInfo mt-[10px]">
                            <p className="text-[12px]"><strong>INDIRIZZO DI RITIRO</strong></p>
                            <span style={{ 'fontSize': 12 }}>L'indirizzo per il ritiro presso la nostra sede di Roma è:</span>
                            <div style={{ 'width': 300, 'fontSize': '13px', marginTop: '10px', marginBottom: '8px' }}>
                                <strong>Tipografia Former</strong>, Via Cassia, 2010 - 00123 Roma
                            </div>
                            <span style={{ 'fontSize': 12 }}>La merce potrà essere ritirata presso la nostra sede di Roma (Peso complessivo {TotaleProvisorio?.pesoKG} kg ±)  </span>
                        </div>
                        :
                        <div className=" w-full ps-[10px] mt-[15px]">
                            <p className=" text-[12px] font-bold">INDIRIZZO DI CONSEGNA</p>
                            <p className=" text-[12px]">Scegli un Indirizzo per la consegna tra quelli che hai inserito o aggiungine uno nuovo</p>
                            <select id="" className="text-[13.333px] mt-[10px] w-[450px] mx-[2px] h-[24px] outline-none border border-[#aaa]" onChange={handleCapTotaleProvisorio}>
                                <option value={JSON.stringify({ cap: dataUtente?.cap, nome: `${dataUtente?.nominativo}: ${dataUtente?.indirizzo} - ${dataUtente?.cap} - ${dataUtente?.cap} ${dataUtente?.citta} (${dataUtente?.provincia})`, id: 0 })}>{dataUtente?.nominativo}, {dataUtente?.indirizzo} - {dataUtente?.cap} {dataUtente?.citta} ({dataUtente?.provincia})</option>
                                {indirizzoList.map((elem, i) => {
                                    return (
                                        <option selected={elem.predefinito == true} key={i} value={JSON.stringify({ cap: elem.cap, nome: `${elem.nome}: ${elem.riassunto}`, id: elem.idIndirizzo })} defaultValue={elem.cap}>{elem.nome} : {elem.riassunto} {`${elem.predefinito ? '(predefinito)' : ''}`}</option>
                                    )
                                })}
                            </select>
                            <a className="text-[12px] cursor-pointer font-normal bg-[#f58220] px-[4px] py-[2px]" onClick={handleAggiungiIndirizzo}>Aggiungi Indirizzo</a>
                            <p className="text-[12px] mt-[8px]">Il corriere che le consegnerà il suo ordine è <b>{corriereSelezionata?.corrDaUsare.nomePulito}</b> (Peso complessivo {TotaleProvisorio?.pesoKG} kg ±)</p>
                        </div>
                    }

                </div>
                <div className="consegna mt-[10px]">
                    <div className="center-title " style={{ 'margin': 0, marginBottom: 15, 'fontSize': 14 }}>
                        <div style={{ 'backgroundColor': '#d6e03d', 'padding': '0px 5px', 'fontSize': '12px' }}>
                            <strong>DATA DI CONSEGNA PREVISTA  <span className="text-[16px] capitalize">{handleDateConsegne(corriereSelezionata?.dateConsegna)}</span></strong>
                        </div>
                    </div>
                    <span style={{ 'fontSize': 12 }}>
                        La data di consegna è calcolata in relazione all'evasione dell'intero ordine
                    </span>
                    <div className="center-title">
                        <div>
                            <span>
                                <strong>
                                    SE ordini e alleghi i file PDF <span style={{ 'color': 'green' }}>entro le ore 18.00 di {alleghiPDF?.entro} ({alleghiPDF?.ore}).</span>
                                </strong>
                            </span>
                        </div>
                    </div>
                    <span style={{ 'fontSize': 12 }}>
                        In caso contrario la data di consegna verrà ricalcolata automaticamente nel momento in cui allegherai tutti i file ai lavori dell'ordine.
                    </span>
                </div>
                {(corriereSelezionata && corriereSelezionata.pnlTrace == true && radio === 1) &&
                    <div className="border leading-6 border-[#aaa] rounded-[5px] text-[12px] h-[92px] w-[700px] mt-[10px] p-[20px]">
                        <p>Vuoi ricevere tramite email gli aggiornamenti sullo stato della spedizione dal Corriere?</p>
                        <p>Indica qui una email dove ricevere le notifiche <input className="text-[13px] mx-[2px] w-[207px] h-[21px] 3outline-none border border-[#aaa]" type="email" placeholder="Indica un email per ricevere aggiornamenti sulla spedizione dal corriere" value={email} onChange={handleEmail} /> <a className="text-[12px] cursor-pointer font-normal bg-[#f58220] px-[4px] py-[2px]" onClick={() => { handleUseMiaMail() }}>Usa la mia mail</a></p>
                        {alertEmail &&
                            <p className="text-[15px] font-bold text-[red] text-center">Attenzione! L'email non sembra valida</p>   
                        }
                    </div>
                }

                <ContinuaGliAcquisti changebuttonstep={changebuttonstep} step={step} />

            </div>
            <div className="w-[23%]">
                {<TotaleProvvisorio TotaleProvisorio={TotaleProvisorio} setStepperStep={setStepperStep} changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step} handleAquistaOra={handleAquistaOra} />}
            </div>
        </div >
    )
}

export default ScegliLaConsegna

