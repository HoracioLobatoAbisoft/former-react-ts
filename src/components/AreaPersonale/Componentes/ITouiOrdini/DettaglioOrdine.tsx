import { GLOBAL_CONFIG } from "../../../../_config/global"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useDettaglioOrdine from "../../hooks/useDettaglioOrdine";
import AcordionLavori from "./AcordionLavori";

const DettaglioOrdine = () => {

    //AreaPersonale/iTuoiOrdini

    const { ordiniData, handleDeleteLavoro, handleNewTagListinoTemplate, handleRedirectToDetaglioOrdini } = useDettaglioOrdine()

    return (
        <div className="w-full  h-full font-[Arial]">
            <div className="text-[11px] flex gap-[2px] text-white justify-center">
                <b className="bg-[#aaa] py-[5px] px-[10px] text-center rounded-[5px]">1) Aggiungi al Carrello</b>
                <b className="bg-[#aaa] py-[5px] px-[10px] text-center rounded-[5px]">2) ORDINA</b>
                <b className="bg-[#aaa] py-[5px] px-[10px] text-center rounded-[5px]">3) Effettua il Pagamento</b>
                <b className="bg-[#aaa] py-[5px] px-[10px] text-center rounded-[5px]">4) Allega i File</b>
                <b className="bg-[#aaa] py-[5px] px-[10px] text-center rounded-[5px]">5) Noi verifichiamo i File</b>
                <b className="bg-[#aaa] py-[5px] px-[10px] text-center rounded-[5px]">6) Realizziamo il Prodotto</b>
                <b className="bg-[#aaa] py-[5px] px-[10px] text-center rounded-[5px]">7) Ricevi il tuo Ordine</b>
            </div>
            <div className="">
                <h4 className="flex my-[13px] ms-[80px] text-[13px] items-center text-[#f58220] font-bold gap-1">
                    <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCart50.png`} className="w-[50px] h-[26px]" />
                    DETTAGLIO DEL TUO ORDINE N°
                    <b className="text-black">{ordiniData?.idConsegnaView} </b> del <b className="text-black"> {ordiniData?.dataInserimentoStr}</b>
                </h4>
                <hr className="border border-[#f58220] mx-[110px] mt-[3px] mb-[5.5px]" />
                <div className="mx-[110px] text-[11px]">
                    <h4 className="font-bold tracking-wide">Riepilogo Ordine</h4>
                    <div className="flex justify-between">
                        <div className="w-full bg- flex gap-[5em] ps-[1px]">
                            <div className="leading-[20px]">
                                <p className="">N° Ordine</p>
                                <p className="">Data Ordine</p>
                                <p className="">N° Lavori</p>
                                <p className="">Pagamento</p>
                            </div>
                            <div className="text-[14px] font-bold">
                                <p className="">{ordiniData?.idConsegnaView}</p>
                                <p className="">{ordiniData?.dataInserimentoStr}</p>
                                <p className="">{ordiniData?.count}</p>
                                <p className="">{ordiniData?.pagamentoStr}</p>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full flex justify-end text-[11px] pr-[2em] mb-[1.5em]">
                                <p className="tracking-wide font-bold bg-[#E81616] py-[3px] px-[10px] border border-[#aaa] rounded-[3px]">In attesa di Pagamento</p>
                            </div>
                            <div className="flex w-full justify-end">
                                <div className="flex gap-[5em] text-justify items-end">
                                    <div className="">
                                        <p className="">Totale Lavori:</p>
                                        <p className="">Totale Spedizioni:</p>
                                        <p className="">IVA (22%):</p>
                                        <p className="">TOTALE:</p>
                                    </div>
                                    <div className="text-end font-bold">
                                        <p className="">€ {ordiniData?.importoTotOrdiniNettoOriginaleStr}</p>
                                        <p className="">€ {ordiniData?.importoConsegnaStr}</p>
                                        <p className="">€ {ordiniData?.importoTotIvaStr}</p>
                                        <p className="">€ {ordiniData?.importoTotStr}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full leading-3 bg-">
                        <h4 className="font-bold">LAVORI NELL' ORDINE</h4>
                        <p className="">Qui trovi l'elenco dei lavori che sono contenuti in questo Ordine.</p>
                        <div className="w-full ">
                            <AcordionLavori listLavori={ordiniData ? ordiniData.listLavori : []} handleDeleteLavoro={handleDeleteLavoro} handleNewTagListinoTemplate={handleNewTagListinoTemplate} handleRedirectToDetaglioLavoro={handleRedirectToDetaglioOrdini} width={'100%'} />
                        </div>
                    </div>
                    <div className="">
                        <h4 className="text-[12px] font-[700] leading-[22px] h-[22px] mt-[5px] mb-[10px] pt-[2px] pl-[20px] uppercase text-[#fff] bg-[#f58220]">RIEPILOGO CONSEGNA</h4>
                        <div className="w-full">
                            <h4 className="font-bold tracking-wide">Riepilogo Consegna</h4>
                            <div className="flex gap-[2.5em]">
                                <div className="">
                                    <p className="">Data Consegna</p>
                                    <p className="">Corriere</p>
                                    <p className="text-white">Indirizzo</p>
                                    <p className="">Indirizzo</p>
                                </div>
                                <div className="font-bold">
                                    <p className={`p-[2px] rounded-[3px] text-black text-center bg-[${ordiniData?.dataOrdineClasse}] `}>{ordiniData?.dateConsegna}{ordiniData?.dataOrdineLabel}</p>
                                    <p className="">{ordiniData?.corriereStr}</p>
                                    <p className="">(<span className="font-normal">Colli</span> {ordiniData?.numeroColliStr},<span className="font-normal">Peso</span>  {ordiniData?.pesoKG} <span className="font-normal">kg ±</span>)</p>
                                    <p className="">{ordiniData?.indirizzoStr}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="">
                        <h4 className="text-[12px] font-[700] leading-[22px] h-[22px] mt-[5px] mb-[10px] pt-[2px] pl-[20px] uppercase text-[#fff] bg-[#f58220]">PAGAMENTO</h4>
                        <p className="">Puoi effettuare il pagamento di questo ordine tramite:</p>
                        {ordiniData?.pagabile &&
                            <div className="mb-[10px] p-[20px] rounded-[5px] border border-[#aaa] mt-[10px]">
                                <p className="flex gap-1 items-center tracking-wide">
                                    <img src={`${GLOBAL_CONFIG.IMG_IP}/img/payment/icoPP.png`} alt="Pagamento con PayPal" className="rounded-[3px]" />
                                    <b>PAGA CON PAYPAL</b>
                                </p>
                                <p className="mt-[1.5em]">Tipografia Former accetta il pagamento attraverso il circuito sicuro PayPal.</p>
                                <center>
                                    <button className="mt-[1.5em] bg-[#d6e03d] font-bold tex-[11px] leading-[30px] w-[120px] h-[30px] text-center rounded-[3px] hover:bg-[#f1fc45]">PAGA ADESSO</button>
                                </center>
                                <div className="flex items-center mt-[2em]">
                                    <div className=" leading-[13px]">
                                        <p className=""><b>PayPal</b>, società del gruppo eBay, consente a chiunque possieda un indirizzo e-mail di inviare e ricevere pagamenti online in modo facile, veloce e sicuro.</p>
                                        <p className="">La registrazione al servizio e l'invio di denaro sono gratuiti ed è possibile effettuare pagamenti istantanei in tutta sicurezza con la propria carta di credito.</p>
                                    </div>
                                    <img src={`${GLOBAL_CONFIG.IMG_IP}/img/PPVerified.png`} />
                                </div>
                                <div className="mt-[1.2em]">
                                    <p className=""><b>Tipografia</b> Former non ha accesso in nessun modo ai dati della tua Carta di Credito o ai tuoi dati di accesso a PayPal</p>
                                    <p className="mt-[1em]">Pagando tramite <b>PayPal</b> il suo ordine passerà automaticamente <b>In Lavorazione</b> appena effettuerà il pagamento.</p>
                                </div>
                            </div>
                        }

                        <div className=" p-[20px] rounded-[5px] border border-[#aaa] mt-[10px]">
                            <p className="flex gap-1 items-center tracking-wide">
                                <img src={`${GLOBAL_CONFIG.IMG_IP}/img/payment/icoBB.png`} alt="Pagamento con PayPal" className="rounded-[3px]" />
                                <b>PAGA CON BONIFICO BANCARIOL</b>
                            </p>
                            <p className="mt-[.8em]">Potrà eseguire il pagamento tramite Bonifico Bancario utilizzando i seguenti dati:</p>
                            <div className="ml-[30px] mt-[1.2em]">
                                Causale: <b>Pagamento Ordine Online 245369</b><br />
                                Banca di Credito Cooperativo della Provincia Romana<br />
                                Conto corrente intestato a <b>Tipografia Former S.r.l.</b><br />
                                IBAN: IT 11 H 08787 39091 000000034748<br />
                                <br /><br />
                            </div>
                            <p className="">Una volta effettuato il versamento, sarà necessario inviare i dati identificativi del pagamento (CRO) e la ricevuta del bonifico all'indirizzo email <a href="" className="hover:underline"><b>pagamenti@tipografiaformer.it</b></a></p>
                            <p className="mt-[1em]">Provvederemo alla registrazione del versamento nell'arco di circa 3 gg. lavorativi.</p>
                        </div>
                    </div>
                    <div className=" mt-[5px]">
                        <h4 className="text-[12px] font-[700] leading-[22px] h-[22px] mb-[10px] pt-[2px] pl-[20px] uppercase text-[#fff] bg-[#f58220]">PAGAMENTO</h4>
                        <p className="">Da qui puoi scaricare il documento fiscale relativo al tuo ordine in formato <b>PDF</b>
                        </p>
                        <p className="flex  items-center justify-center mt-[.8em]">
                            <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoPDF32.png`} alt="Documento fiscale in PDF" className="roundedBorder" />
                            Documento fiscale non ancora disponibile
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DettaglioOrdine