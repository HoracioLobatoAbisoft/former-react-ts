import { GLOBAL_CONFIG } from "../../_config/global"
import { enOperationFrame } from "../../enHelpers/enOperationFrame"
import LoadingBackdrop from "../loadingBackdrop"
import AcordionCarrello from "./components/AcordionCarrello"
import Stepper from "./components/Stepper"
import TotaleProdotto from "./components/TotaleProdotto"
import useCarrelloStep5 from "./hooks/useCarrelloStep5"

const CarrelloStp5 = () => {

    const {TotaleProvisorio,arrayCarrello,loading,handleDeleteAllCarrello,consenga,pagamento,handleTotaleChange,deleteItem,handleRetornaProdotto,handleOperationFrame} = useCarrelloStep5();

    return (
        <div className="w-full h-full">
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
            <Stepper stepNumber={5} />
            <div className="flex gap-5">
                <div className="w-[73%]">
                    <div className="flex w-full justify-between text-[13px]">
                        <h3 className="text-[14px] font-bold  flex gap-1"><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCarrello16.png`} width={16} height={16} /> Riepilogo Ordine</h3>
                        <span className="bg-[#009ec9] font-bold uppercase px-[2px] h-full text-white rounded">React V^18.2.0</span>
                    </div>
                    <hr className="border border-[#aaa] my-1" />
                    <AcordionCarrello handleRetornaProdotto={handleRetornaProdotto} ArrayLocalCarrello={arrayCarrello} handleDeleteAllCarrello={handleDeleteAllCarrello} setArrayLocalCarrello={()=>{}} deleteItem={deleteItem} step={5} handleOperationFrame={handleOperationFrame}/>
                    <div className="mt-[25px]">
                        <h2 className="text-[13px] font-bold border-b-[1px]  border-[#aaa] mb-[10px] flex gap-1">
                            <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoAttach16.png`} className='w-[16px] h-[16px]' />File allegati
                        </h2>
                        <div className="border border-[#aaa] ps-[15px] py-[5px] text-[12px] rounded-[5px] bg-[#f1f1f1]">
                            Una volta completato l'ordine, ed eventualmente effettuato il pagamento (se sceglierai una modalità di pagamento anticipata), potrai allegare i file PDF entrando nel dettaglio di ogni lavoro dalla sezione <b>'I tuoi ordini'</b>.
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
                                    <p className="">{consenga?.email && 'Email notifiche:'}</p>
                                </div>
                                <div className=" leading-6">
                                    <p className=" text-start  w-[100%] text-[16px]  font-bold capitalize "> <span className="bg-[#d6e03d] ps-[1px]">{consenga?.dataCorriere?.metodoDiConsegna?.idMetodoConsegna == 0 ? consenga.dateConsenga?.dateProduzioneStr : consenga?.dateConsenga?.dateStr}</span></p>
                                    <p className="text-[16px] font-bold">{consenga?.dataCorriere?.metodoDiConsegna.descrizione}</p>
                                    <p className="">{ `${consenga?.dataIndirizzo?.nome} : ${consenga?.dataIndirizzo?.riassunto}` }</p>
                                    <p className="">{consenga?.pesoTotale} kg ±</p>
                                    <p className="">{consenga?.email}</p>
                                </div>
                            </div>
                            <div className="w-full flex justify-end pe-[10px]">
                                <a className="cursor-pointer hover:underline" style={{ 'fontSize': 11 }} onClick={() => handleOperationFrame(enOperationFrame.reliadUrl,'carrello-consegna')}>
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
                                <img src={`${GLOBAL_CONFIG.IMG_IP}/${pagamento?.tipoPagamento?.imgRif}`} className='w-[32pxpx] h-[32px] ' />
                                <div className="">
                                    <p className='text-[14px] font-bold ml-[] mb-1'>{pagamento?.tipoPagamento?.titulo}</p>
                                    <p className="text-[12px]">{pagamento?.tipoPagamento?.descrizione}</p>
                                    {/*!sconto*/ true && <a className="block mt-[15px] hover:underline cursor-pointer" onClick={() => { handleOperationFrame(enOperationFrame.reliadUrl,'carrello-pagamento')}}>Se vuoi utilizzare un <span className="text-[green] font-bold ">Coupon di Sconto</span> clicca qui</a>}

                                </div>

                            </div>
                            <div className="w-full flex justify-end pe-[10px]">
                                <a className="mt-[2px] cursor-pointer hover:underline" style={{ 'fontSize': 11 }} onClick={() => handleOperationFrame(enOperationFrame.reliadUrl,'carrello-pagamento')}>
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
                    <TotaleProdotto TotaleProvisorio={TotaleProvisorio} handleTotaleChange={handleTotaleChange} textBtn={'ACQUISTA ORA'} showContinueBuyBtn />
                </div>
            </div>
        </div>

    )
}

export default CarrelloStp5