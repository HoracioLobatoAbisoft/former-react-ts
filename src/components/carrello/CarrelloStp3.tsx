import { Fragment } from "react"
import { GLOBAL_CONFIG } from "../../_config/global"
import LoadingBackdrop from "../loadingBackdrop"
import Stepper from "./components/Stepper"
import TotaleProdotto from "./components/TotaleProdotto"
import useCarrelloStep3 from "./hooks/useCarrelloStep3"
import { enOperationFrame } from "../../enHelpers/enOperationFrame"
import ContinuaGliAcquisti from "./components/ContinuaGliAcquisti"
import ModalAggiungiIndirizzo from "./components/ModalAggiungiIndirizzo"

const CarrelloStp3 = () => {

    const { caricaCorriere, TotaleProvisorio, handleTotaleChange, handleChangeRadioConsegna, inputConsegna, loading, indirizzoList, dataUtente, dataConsegna, handleChangeSelectIndirizzo, handleOperationFrame, alleghiPDF, corriereSelezionata, handleChangeEmail, handleUseMiaMail, emailValue, valueCap,valuesIndirizzo,handleOpenFormIndirizzo,handleChangeIndirizzo,handleCloseFormIndirizzo,listNazionii ,openFormIndirizzo,listLocalita,handleSalvaIndirizzo,error} = useCarrelloStep3();

    return (
        <div className="w-full h-full">
            <ModalAggiungiIndirizzo {...valuesIndirizzo} handleCloseFormIndirizzo={handleCloseFormIndirizzo} handleChangeIndirizzo={handleChangeIndirizzo} listNazionii={listNazionii} openFormIndirizzo={openFormIndirizzo} listLocalita={listLocalita} handleSalvaIndirizzo={handleSalvaIndirizzo} error={error}/>
            <LoadingBackdrop
                isOpen={loading}
                x={1}
                sx={{
                    bgcolor: "rgba(225,225,225,0.4)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    pr: 8,
                    zIndex: 1000
                }}
            />
            <Stepper stepNumber={3} />
            <div className="flex scegli-container">
                <div className="w-[73%]">
                    <div className="flex w-full justify-between text-[13px]">
                        <h3 className="text-[14px] font-bold  flex gap-1"><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCarrello16.png`} width={16} height={16} /> Scegli la Consegna </h3>
                        <span className="bg-[#009ec9] font-bold uppercase px-[2px] h-full text-white rounded">React V^18.2.0</span>
                    </div>
                    <hr className="border border-[#aaa] my-1" />
                    <div className="information">
                        {caricaCorriere.map((item, i) => (
                            <Fragment key={i}>
                                <div className="mt-[5px]" >
                                    <img  src={`${GLOBAL_CONFIG.IMG_IP}${inputConsegna === item.idCorriere ? `/img/icoCheck.gif` : `/img/pixel.gif`}`} alt="" className="w-[17px] h-[11px]" />
                                    <input  type="radio" checked={inputConsegna === item.idCorriere ? true : false} onChange={handleChangeRadioConsegna} value={item.idCorriere} />
                                    <label  htmlFor="" className="ms-[5px]"><strong>{item.descrizione}</strong></label>
                                    <br />
                                    <span  style={{ 'fontSize': 12 }}>
                                        <i dangerouslySetInnerHTML={{ __html: String(item.label) }}></i>
                                    </span>
                                    <br />
                                </div>
                            </Fragment>
                        ))
                        }
                        {TotaleProvisorio?.spedizioni == 0 ?
                            <div className="retiroInfo mt-[10px]">
                                <p className="text-[12px]"><strong>INDIRIZZO DI RITIRO</strong></p>
                                <span style={{ 'fontSize': 12 }}>L'indirizzo per il ritiro presso la nostra sede di Roma è:</span>
                                <div style={{ 'width': 300, 'fontSize': '13px', marginTop: '10px', marginBottom: '8px' }}>
                                    <strong>Tipografia Former</strong>, Via Cassia, 2010 - 00123 Roma
                                </div>
                                <span style={{ 'fontSize': 12 }}>La merce potrà essere ritirata presso la nostra sede di Roma (Peso complessivo {/*TotaleProvisorio?.pesoKG*/} kg ±)  </span>
                            </div>
                            :
                            <div className=" w-full ps-[10px] mt-[15px]">
                                <p className=" text-[12px] font-bold">INDIRIZZO DI CONSEGNA</p>
                                <p className=" text-[12px]">Scegli un Indirizzo per la consegna tra quelli che hai inserito o aggiungine uno nuovo</p>
                                <select id="" className="text-[13.333px] mt-[10px] w-[450px] mx-[2px] h-[24px] outline-none border border-[#aaa]" onChange={handleChangeSelectIndirizzo}>
                                    <option value={dataUtente?.cap}>{dataUtente?.nominativo}, {dataUtente?.indirizzo} - {dataUtente?.cap} {dataUtente?.citta} ({dataUtente?.provincia})</option>
                                    {indirizzoList.map((elem, i) => {
                                        return (
                                            <option selected={elem.predefinito && elem.cap === valueCap} key={i} value={elem.cap} >{elem.nome} : {elem.riassunto} {`${elem.predefinito ? '(predefinito)' : ''}`}</option>
                                        )
                                    })}
                                </select>
                                <a className="text-[12px] cursor-pointer font-normal bg-[#f58220] px-[4px] py-[2px]" onClick={() =>{handleOpenFormIndirizzo() /*handleOperationFrame(enOperationFrame.reliadUrl, 'aggiungi-indirizzo')*/}}>Aggiungi Indirizzo</a>
                                <p className="text-[12px] mt-[8px]">Il corriere che le consegnerà il suo ordine è <b>{corriereSelezionata?.corrDaUsare.nomePulito}</b> (Peso complessivo {TotaleProvisorio?.pesoKG} kg ±)</p>
                            </div>
                        }

                    </div>
                    <div className="consegna mt-[10px]">
                        <div className="center-title " style={{ 'margin': 0, marginBottom: 15, 'fontSize': 14 }}>
                            <div style={{ 'backgroundColor': '#d6e03d', 'padding': '0px 5px', 'fontSize': '12px' }}>
                                <strong>DATA DI CONSEGNA PREVISTA  <span className="text-[16px] capitalize">{inputConsegna == 0 ? dataConsegna?.dateProduzioneStr : dataConsegna?.dateStr}</span></strong>
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
                    {(corriereSelezionata && corriereSelezionata.pnlTrace == true && inputConsegna == 1) &&
                        <div className="border leading-6 border-[#aaa] rounded-[5px] text-[12px] h-[92px] w-[700px] mt-[10px] p-[20px]">
                            <p>Vuoi ricevere tramite email gli aggiornamenti sullo stato della spedizione dal Corriere?</p>
                            <p>Indica qui una email dove ricevere le notifiche <input className="text-[13px] mx-[2px] w-[207px] h-[21px] 3outline-none border border-[#aaa]" type="email" placeholder="Indica un email per ricevere aggiornamenti sulla spedizione dal corriere" value={emailValue} onChange={handleChangeEmail} /> <a className="text-[12px] cursor-pointer font-normal bg-[#f58220] px-[4px] py-[2px]" onClick={() => { handleUseMiaMail() }}>Usa la mia mail</a></p>
                            {emailValue === undefined &&
                                <p className="text-[15px] font-bold text-[red] text-center">Attenzione! L'email non sembra valida</p>
                            }
                        </div>
                    }

                    <ContinuaGliAcquisti step={3} text='SCEGLI IL PAGAMENTO' />
                </div>
                <div className="w-[23%]">
                    <TotaleProdotto TotaleProvisorio={TotaleProvisorio} handleTotaleChange={handleTotaleChange} textBtn={'SCEGLI IL PAGAMENTO'} />
                </div>
            </div >
        </div>
    )
}

export default CarrelloStp3