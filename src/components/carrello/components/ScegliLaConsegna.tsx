import TotaleProvvisorio from "./TotaleProvvisorio"
import '../styles/ScegliLaConsegna.css'
import { useState } from "react"
const ScegliLaConsegna = () => {

    const [radio, setRadio] = useState<number>(0)

    const handleRadio = (i: number) => {
        setRadio(i)
        console.log(i)
    }

    return (
        <div className="flex scegli-container">
            <div className="w-[73%]">
                <h1 className="flex gap-2 "><img src="https://localhost:44311/img/icoCorriere20.png" alt="" height={25} width={21} /><strong>Scegli la Consegna</strong></h1>
                <hr className="border-[1px] mt-[5px]" />
                <div className="information">
                    <img src="https://www.tipografiaformer.it/img/pixel.gif" alt="" width={17} height={11} />
                    <input type="radio" checked={radio === 1 ? true : false} onChange={() => handleRadio(1)} />
                    <label htmlFor="" className="ms-[5px]"><strong>COMPRA E RITIRA,</strong></label>
                    <br />
                    <span style={{ 'fontSize': 12 }}>
                        <i>Scegli <strong> Compra e Ritira </strong> e vieni a ritirare il tuo ordine direttamente presso la nostra sede di Roma;</i>
                    </span>
                    <br />
                    <img src="https://www.tipografiaformer.it/img/pixel.gif" alt="" width={17} height={11} />

                    <input type="radio" checked={radio === 2 ? true : false} onChange={() => handleRadio(2)} />
                    <label htmlFor="" className="ms-[5px]"><strong>CON CORRIERE,</strong></label>
                    <br />
                    <span style={{ 'fontSize': 12 }}>
                        <i>Un Corriere da noi incaricato si occuperà di recapitare il tuo ordine all'indirizzo che hai indicato;
                        </i>
                    </span>

                    {radio == 1 ?

                        <div className="retiroInfo">
                            <p className="text-[12px]"><strong>INDIRIZZO DI RITIRO</strong></p>
                            <span style={{ 'fontSize': 12 }}>L'indirizzo per il ritiro presso la nostra sede di Roma è:</span>
                            <div style={{ 'width': 300, 'fontSize': '13px' }}>
                                <strong>Tipografia Former</strong>, Via Cassia, 2010 - 00123 Roma
                            </div>
                            <span style={{ 'fontSize': 12 }}>La merce potrà essere ritirata presso la nostra sede di Roma (Peso complessivo 1 kg ±)  </span>
                        </div>
                        :
                        <div className=" w-full ps-[10px] mt-[15px]">
                            <p className=" text-[12px] font-bold ">INDIRIZZO DI CONSEGNA</p>
                            <p className=" text-[12px]">Scegli un Indirizzo per la consegna tra quelli che hai inserito o aggiungine uno nuovo</p>
                            <select name="" id="" className="text-[13.333px] mt-[5px] w-[450px] mx-[2px] h-[24px] outline-none border border-[#aaa]">
                                <option>asfasSGSDG</option>
                                <option>asfsa</option>
                            </select>
                            <a className="text-[12px] cursor-pointer font-normal bg-[#f58220] px-[4px] py-[2px]">Aggiungi Indirizzo</a>
                            <p className="text-[12px] mt-[8px]">Il corriere che le consegnerà il suo ordine è <b>Corriere GLS </b> (Peso complessivo 1 kg ±)</p>
                        </div>
                    }

                </div>
                <div className="consegna mt-[10px]">
                    <div className="center-title" style={{ 'margin': 15, 'fontSize': 14 }}>
                        <div style={{ 'backgroundColor': '#d6e03d', 'padding': '0px 5px', 'fontSize': '12px' }}>
                            <strong>DATA DI CONSEGNA PREVISTA  <span className="text-[16px]">Giovedì 13 Luglio 2023</span></strong>
                        </div>
                    </div>
                    <span style={{ 'fontSize': 12 }}>
                        La data di consegna è calcolata in relazione all'evasione dell'intero ordine
                    </span>
                    <div className="center-title">
                        <div>
                            <span>
                                <strong>
                                    SE ordini e alleghi i file PDF <span style={{ 'color': 'green' }}>entro le ore 18.00 di oggi (2 minuti).</span>
                                </strong>
                            </span>
                        </div>
                    </div>
                    <span style={{ 'fontSize': 12 }}>
                        In caso contrario la data di consegna verrà ricalcolata automaticamente nel momento in cui allegherai tutti i file ai lavori dell'ordine.
                    </span>
                </div>
                {radio === 2 &&
                    <div className="border leading-6 border-[#aaa] rounded-[5px] text-[12px] h-[92px] w-[700px] mt-[10px] p-[20px]">
                        <p>Vuoi ricevere tramite email gli aggiornamenti sullo stato della spedizione dal Corriere?</p>
                        <p>Indica qui una email dove ricevere le notifiche <input className="text-[13px] mx-[2px] w-[207px] h-[21px] 3outline-none border border-[#aaa]" type="text" placeholder="Indica un email per ricevere aggiornamenti sulla spedizione dal corriere" /> <a className="text-[12px] cursor-pointer font-normal bg-[#f58220] px-[4px] py-[2px]">Usa la mia mail</a></p>
                    </div>
                }

                <div>
                    <br />
                    <span style={{ 'fontSize': 12 }}>Se vuoi completare l'acquisto clicca su <strong> SCEGLI IL PAGAMENTO</strong></span>
                    <br />
                    <span style={{ 'fontSize': 12 }}>Se vuoi ordinare altri prodotti clicca qui e</span> <a href="" style={{ 'fontSize': '16px', 'color': '#f58220', 'fontWeight': 'bold' }}>Continua gli acquisti.</a>
                </div>

            </div>
            <div className="w-[23%]">
                <TotaleProvvisorio />
            </div>
        </div>
    )
}

export default ScegliLaConsegna