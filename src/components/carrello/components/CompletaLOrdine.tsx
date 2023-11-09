import { useEffect, useState } from "react"
import { ImageCustom } from '../../formProdottoV1/components/ImageCustom';
import { SvgImage } from '../../formProdottoV1/interface/svgImage';
import TotaleProvvisorio from './TotaleProvvisorio';
import AcordionCarrello from "./AcordionCarrello";
import { ObjCarrello } from "../../formProdottoV1/interface/ObjCarrrello";
import { DataGetTotaleProvisorio } from "../Interfaces/totaleProvvisorio";
import { GLOBAL_CONFIG } from "../../../_config/global";
import { DataPostAquistaOra, ResponsePostAquistaOra } from "../Interfaces/AquistaOra";
import { DataOrdineStep5 } from "../Interfaces/DataTotaleORdineStep5";
type PropsCompletaLOrdine = {
    ArrayLocalCarrello: ObjCarrello[];
    TotaleProvisorio: DataGetTotaleProvisorio | undefined

    handleDeleteAllCarrello: () => void
    handleRetornaProdotto: (i: number, uri: string) => void
    setArrayLocalCarrello: React.Dispatch<React.SetStateAction<ObjCarrello[]>>

    setStepperStep: React.Dispatch<React.SetStateAction<number>>
    changebuttonstep: (number: number) => string;
    setSteptext: React.Dispatch<React.SetStateAction<string>>
    step: number
    deleteItem: (i: number) => void
    dataTotale: {
        TotalPrezo: number;
        TotalPeso: number;
        idUt: number;
        desconto: number;
        Colli: number;
    };
    postAquistaOra: (data: DataPostAquistaOra) => Promise<ResponsePostAquistaOra>;
    handleAquistaOra: () => Promise<void>;
    dataOrdine:DataOrdineStep5 
    setDataOrdine: React.Dispatch<React.SetStateAction<DataOrdineStep5 >>;
}




const CompletaLOrdine = ({ ArrayLocalCarrello, TotaleProvisorio, handleDeleteAllCarrello, handleRetornaProdotto, setArrayLocalCarrello, setStepperStep, changebuttonstep, setSteptext, step, deleteItem ,dataTotale,postAquistaOra,handleAquistaOra,dataOrdine,setDataOrdine}: PropsCompletaLOrdine) => {


    //const [dataOrdine, setDataOrdine] = useState<dataOrdineStep5>()


    const getDataLocalOrdine = () => {
        const mail = localStorage.getItem('mil')
        const indi = localStorage.getItem('ind')
        const scande = localStorage.getItem('scande')
        const cons = localStorage.getItem('cons')
        const pesokg = localStorage.getItem('pzo')
        const corrie = localStorage.getItem('tp')
        const corrieI = localStorage.getItem('tpI')
        const corrieD = localStorage.getItem("tpD")

        if (cons == '0') {
            setDataOrdine({ ...dataOrdine, consega: cons, email: null, fecha: scande, indirizzo: 'Tipografia Former, Via Cassia, 2010 - 00123 Roma', pesokg: pesokg,corrie,corrieI,corrieD })
            localStorage.removeItem('mil')
        } else {
            setDataOrdine({ ...dataOrdine, consega: cons, email: mail, fecha: scande, indirizzo: indi, pesokg: pesokg,corrie,corrieI,corrieD })
        }
    }

   


    const sconto = localStorage.getItem('sc')

    useEffect(() => {
        getDataLocalOrdine();
    }, [])

    return (
        <div className="flex gap-5">
            <div className="w-[73%]">
                <h3 className="flex gap-3 font-semibold"><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCarrello16.png`} className="w-[20px] h-[20px]" /> Riepilogo Ordine</h3>
                <hr className="border my-2" />
                <AcordionCarrello 
                    deleteItem={deleteItem} 
                    handleRetornaProdotto={handleRetornaProdotto} 
                    ArrayLocalCarrello={ArrayLocalCarrello} 
                    handleDeleteAllCarrello={handleDeleteAllCarrello} 
                    setArrayLocalCarrello={setArrayLocalCarrello} 
                    step={step}
                    setStepperStep={setStepperStep} 
                />
                <div className="mt-[25px]">
                    <h2 className="text-[13px] font-bold border-b-[1px]  border-[#aaa] mb-[10px] flex gap-1">
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoAttach16.png`} className='w-[16px] h-[16px]' />File allegati
                    </h2>
                    <div className="border border-[#aaa] ps-[15px] py-[5px] text-[12px] rounded-[5px] bg-[#f1f1f1]">
                        Una volta completato l'ordine, ed eventualmente effettuato il pagamento (se sceglierai una modalità di pagamento anticipata), potrai allegare i file PDF entrando nel dettaglio di ogni lavoro dalla sezione <b>'I tuoi lavori'</b>.
                    </div>
                </div>
                <div className="mt-[25px]">
                    <h1 className="flex gap-2 text-[13px]"><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCorriere20.png`} alt="" height={25} width={21} /><strong>Consegna</strong></h1>
                    <hr className="border-[1px] my-[5px]" />
                    <div className="text-[12px] border border-[#aaa] ps-[15px] py-[5px] rounded-[5px] bg-[#f1f1f1]">
                        <div className="flex gap-[30px]">
                            <div className="leading-6">
                                <p className="">Data di Consegna Prevista:</p>
                                <p className="">Metodo di Consegna scelto:</p>
                                <p className="">Indirizzo di Consegna: </p>
                                <p className="">Peso Complessivo:</p>
                                <p className="">{dataOrdine?.email && 'Email notifiche:'}</p>
                            </div>
                            <div className=" leading-6">
                                <p className="bg-[#d6e03d] text-center  w-[85%] text-[16px] ps-[1px] font-bold capitalize ">{dataOrdine?.fecha}</p>
                                <p className="text-[16px] font-bold">{dataOrdine && dataOrdine?.consega == '1' ? 'Con Corriere' : 'Compra e Ritira '}</p>
                                <p className="">{dataOrdine?.indirizzo ? dataOrdine?.indirizzo  : 'Tipografia Former, Via Cassia, 2010 - 00123 Roma'}</p>
                                <p className="">{dataOrdine?.pesokg} kg ±</p>
                                <p className="">{dataOrdine?.email}</p>
                            </div>
                        </div>
                        <div className="w-full flex justify-end pe-[10px]">
                            <a className="cursor-pointer hover:underline" style={{ 'fontSize': 11 }} onClick={() => setStepperStep(3)}>
                                Modifica
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-[25px]">
                    <h2 className='text-[14px] font-bold flex gap-2'><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoPrezzo16.png`} className='w-[13px] h-[16px]' />Pagamento</h2>
                    <hr className='my-[5px] border-[1px]' />
                    <div className="flex flex-col justify-between gap-2  h-[128px] text-[12px] border border-[#aaa] ps-[15px] py-[10px] rounded-[5px] bg-[#f1f1f1]">
                        <div className="flex gap-2">
                            {/* <span className='text-[#68af68]'>✔</span> */}
                            <img src={`${GLOBAL_CONFIG.IMG_IP}/${dataOrdine?.corrieI}`} className='w-[32pxpx] h-[32px] ' />
                            <div className="">
                                <p className='text-[14px] font-bold ml-[] mb-1'>{dataOrdine?.corrie}</p>
                                <p className="text-[12px]">{dataOrdine?.corrieD}</p>
                                {!sconto && <a className="block mt-[15px] hover:underline cursor-pointer" onClick={() => setStepperStep(4)}>Se vuoi utilizzare un <span className="text-[green] font-bold ">Coupon di Sconto</span> clicca qui</a>}
                                
                            </div>

                        </div>
                        <div className="w-full flex justify-end pe-[10px]">
                            <a className="mt-[2px] cursor-pointer hover:underline" style={{ 'fontSize': 11 }} onClick={() => setStepperStep(4)}>
                                Modifica
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-[30px] text-[12px]">
                    <h2 className='text-[14px] font-bold flex gap-2'><img src={`${GLOBAL_CONFIG.IMG_IP}/img/IcoInfo20.png`} className='w-[20px] h-[20px]' /> Condizioni di Vendita</h2>
                    <hr className='my-[5px] border-[1px]' />
                    <p className="">Proseguendo con l'ordine si considerano accettate le seguenti clausole contrattuali</p>
                    <div className="h-[180px] text-[10px] mt-[10px] font-[arial] box-border overflow-scroll overflow-x-hidden border border-[#aaa] p-[10px]">
                        <p className="">
                            <b>FILE ALLEGATI AL LAVORO</b>, dopo aver acquistato i lavori che hai nel carrello potrai allegare i file sorgenti con estrema semplicità tramite un apposito modulo o inviandoli tramite email;
                        </p>
                        <p className="mt-[10px]">
                            <b>CLAUSOLA ESONERO RESPONSABILITA'</b>, Tipografia Former non sarà responsabile nei confronti del committente e/o beneficiario della prestazione se diverso, per danni di qualsiasi specie, sia diretti che indiretti, derivanti da eventuali errori, di ogni natura, nella stampa del file inviato dal cliente o derivanti dalla ricezione di materiale sbagliato. In tali casi Tipografia Former sarà tenuta esclusivamente ad effettuare una sola ristampa del materiale qualora l'errore sia imputabile alla qualita della stampa. Parimenti Tipografia Former non sarà responsabile per danni, diretti e indiretti, dovuti alla mancata e/o ritardata consegna del materiale, né sarà responsabile di eventuali deterioramenti dell'imballaggio; in tali casi sarà tenuta esclusivamente ad effettuare una sola ristampa del materiale a condizione che il pacco venga accettato dal cliente "con riserva dei vizi" che dovranno essere elencati sulla ricevuta rilasciata dal corriere e comunicati a Tipografia Former a mezzo fax, a pena di decadenza, entro tre giorni dalla ricezione del plico. Eventuali errori nella stampa o nel confezionamento del materiale vanno segnalati alla email info@tipografiaformer.com con documentazione fotografica digitale allegata, avendo cura di indicare nell'oggetto il numero d'ordine di riferimento, entro tre giorni dalla ricezione del materiale.
                        </p>
                        <p className="mt-[10px]">
                            <b>FORO DI COMPETENZA</b>, Per tutte le controversie relative all'interpretazione e/o all'esecuzione del presente contratto, le parti riconoscono l'esclusiva competenza del foro di Roma, indipendentemente dal luogo di conclusione del contratto, dal domicilio del committente, dal luogo di pagamento anche se per mezzo di tratta e/o di r.b.
                        </p>
                        <p className="mt-[10px]">
                            <b>RESPONSABILITA' DEL COMMITENTE</b>, La committente si assume la paternità dei contenuti oggetto di stampa esonerando la Tipografia Former dall'obbligo di esame degli stessi ed assumendosi, pertanto, qualsiasi responsabilità nei confronti di terzi che dovessero lamentare lesioni all'immagine, onore, decoro, integrità morale o comunque qualsiasi danno patrimoniale e non patrimoniale causalmente collegate alla stampa oggetto di contratto. La Tipografia Former si riserva la chiamata in manleva della committente nell'eventualità in cui domande risarcitorie venissero formulate direttamente nei suoi confronti.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[23%]">
                <TotaleProvvisorio TotaleProvisorio={TotaleProvisorio} setStepperStep={setStepperStep} changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step}  handleAquistaOra={handleAquistaOra}/>
            </div>
        </div>
    )
}

export default CompletaLOrdine