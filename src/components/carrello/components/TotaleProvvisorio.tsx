import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import './../styles/acorcdion.css'
import { DataGetTotaleProvisorio } from '../Interfaces/totaleProvvisorio';
import { formatNumber } from '../../../services/NumberFormat';
import { useNavigate } from 'react-router-dom';
import { GLOBAL_CONFIG } from '../../../_config/global';
import useCarrello from '../hooks/useCarrello';
type PropsTotale = {
    TotaleProvisorio: DataGetTotaleProvisorio | undefined
    setStepperStep: React.Dispatch<React.SetStateAction<number>>
    changebuttonstep: (number: number) => string;
    setSteptext: React.Dispatch<React.SetStateAction<string>>
    step: number;
    handleAquistaOra: () => Promise<void>
}

// const TotaleProvvisorio = ({TotaleProvisorio}:PropsTotale) => {
const TotaleProvvisorio = ({ TotaleProvisorio, setStepperStep, changebuttonstep, setSteptext, step,handleAquistaOra }: PropsTotale) => {
    const navigate = useNavigate();

    const scontoLocal = localStorage.getItem('sc')
    const {handleReturnIndex} = useCarrello();
    return (
        <div className="">
            <div className="bg-[#f1f1f1] w-full text-[14px] mt-[30px] rounded-[3px] p-[10px]">
                <table className="w-full mt-[5px] ">
                    <tbody ><tr >
                        <td colSpan={2} className="text-center px-[10px]  "><b>Totale Provvisorio</b></td>
                    </tr>
                        <tr>
                            <td colSpan={2} className="">
                                <hr className="border border-[#d6e03d]  mb-[7px]" />
                            </td>
                        </tr>

                        <tr>
                            <td className="px-[10px]">
                                Totale Lavori:
                            </td>
                            <td className="px-[10px] text-end">€ {TotaleProvisorio ? formatNumber(TotaleProvisorio.prezzoTotaleOrdini) : "00,00"}</td>
                        </tr>
                        {scontoLocal ?
                            <>
                                <tr>
                                    <td className="px-[10px]">
                                        Totale Sconto:
                                    </td>
                                    <td className="px-[10px] text-end text-[red] font-semibold"> - € {TotaleProvisorio ? formatNumber(Number(scontoLocal)) : "00,00"}</td>
                                </tr>
                                <tr>
                                    <td className="px-[10px]">
                                        Totale Netto:
                                    </td>
                                    <td className="px-[10px] text-end">€ {TotaleProvisorio ? formatNumber(TotaleProvisorio.totalNeto) : "00,00"}</td>
                                </tr>
                            </>:null
                            }
                        <tr>
                            <td className="px-[10px] ">
                                Spedizioni:
                            </td>
                            <td className="px-[10px] text-end">€ {TotaleProvisorio ? formatNumber(TotaleProvisorio.spedizioni) : "00,00"}</td>
                        </tr>

                        <tr>
                            <td className="px-[10px] ">
                                IVA (22%):
                            </td>
                            <td className="px-[10px] text-end">€ {TotaleProvisorio ? formatNumber(TotaleProvisorio.iva) : "00,00"}</td>
                        </tr>
                        <tr>
                            <td colSpan={2} className="px-[10px]">
                                <hr className="border border-[#d6e03d]  mb-[10px]" />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-[10px]">
                                <b>Totale ordine</b>
                            </td>
                            <td className="px-[10px] text-end">
                                <b>€ {TotaleProvisorio ? formatNumber(TotaleProvisorio.totaleOridini) : "00,00"}</b>
                            </td>
                        </tr>
                    </tbody></table>
                <center>
                    {/* <button onClick={() => { handleAquistaOra() ;setStepperStep(step + 1) ; setSteptext(changebuttonstep(step + 1)) }} className="text-[14px] w-[180px] my-[10px] h-[30px] rounded-[4px] bg-[#d6e03d] text-center p-[5px] "><b>{changebuttonstep(step + 1)}</b></button> */}
                    <button 
                        onClick={() => {handleAquistaOra() ; setStepperStep(step + 1); setSteptext(changebuttonstep(step + 1));  }} 
                        className="text-[14px] w-[180px] my-[10px] h-[30px] rounded-[4px] bg-[#d6e03d] text-center p-[5px] "
                    >
                        <b>{changebuttonstep(step + 1)}</b>
                    </button>
                </center>
            </div>
            {
                step == 5&&<>
                    <div className='mt-[38px] w-full'>
                    <center>
                        {/* <button onClick={() => { handleAquistaOra() ;setStepperStep(step + 1) ; setSteptext(changebuttonstep(step + 1)) }} className="text-[14px] w-[180px] my-[10px] h-[30px] rounded-[4px] bg-[#d6e03d] text-center p-[5px] "><b>{changebuttonstep(step + 1)}</b></button> */}
                        <button 
                            onClick={() => { handleReturnIndex() }} 
                            className="text-[14px] w-[180px] my-[10px] h-[30px] rounded-[4px] bg-[#f58220] text-center p-[5px] "
                        >
                            <div className='flex flex-row px-[3px] items-center justify-center'>
                                <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCarrelloW.png`} className='h-[16px] w-[16px]' />
                                <span className=' ml-1 text-[white] font-bold'>{`CONTINUA ACQUISTI`}</span>
                            </div>
                        </button>
                    </center>
                    </div>
                </>
            }
            <div></div>
            <div className="mt-[38px] w-full">
                <h2 className="text-[14px] font-bold text-center border-b-[2px]  border-[#d6e03d] mb-[5px]">Informazioni sul Carrello</h2>
                <Accordion sx={{ width: "100%", }}>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className='summary'
                        sx={{ fontSize: 11, bgcolor: "#f1f1f1", border: '1px solid #aaa', borderRadius: "3px", }}
                    >
                        <p className='m-0 py-[5px] ps-[7px] w-full flex gap-1 text-justify pe-[5px]'><AddIcon sx={{ fontSize: 15 }} /> Come funziona il Carrello?</p>
                    </AccordionSummary>
                    <AccordionDetails sx={{ border:'1px solid #ddd'}}>
                        <div className="text-[11px]" >
                            <b className='text-[#f58220]'>1) Controlla il carrello</b><br />
                            Controlla i prodotti che hai inserito nel carrello e clicca su 'ALLEGA I FILE' per continuare<br />
                            <b className='text-[#f58220]'>2) Allega i file</b><br />
                            I file si potranno allegare (per il momento) solo DOPO la conclusione dell'ordine. Clicca su 'SCEGLI LA CONSEGNA' per continuare<br />
                            <b className='text-[#f58220]'>3) Scegli la Consegna</b><br />
                            Seleziona il tipo di consegna che desideri e clicca su 'SCEGLI IL PAGAMENTO' per continuare<br />
                            <b className='text-[#f58220]'>4) Scegli il Pagamento</b><br />
                            Seleziona il tipo di forma di pagamento tra quelle disponibili e clicca su 'RIVEDI E ACQUISTA' per continuare<br />
                            <b className='text-[#f58220]'>5) Completa l' Ordine</b><br />
                            Rivedi e controlla il tuo Ordine e clicca su 'ACQUISTA ORA' per completare l' Ordine
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ width: "100%" }}>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className='summary'
                        sx={{ fontSize: 11, bgcolor: "#f1f1f1", border: '1px solid #aaa', borderRadius: "3px" }}
                    >
                        <p className=' py-[5px] ps-[7px] flex gap-1 text-justify pe-[5px]'><AddIcon sx={{ fontSize: 15 }} /> Quando posso allegare i file PDF ai lavori contenuti nell'ordine?</p>
                    </AccordionSummary>
                    <AccordionDetails sx={{ border:'1px solid #ddd'}}>
                        <div className='text-[11px] text-justify'>
                            Una volta completato l'ordine, ed eventualmente effettuato il pagamento (se sceglierai una modalità di pagamento anticipata), potrai allegare i file PDF entrando nel dettaglio di ogni lavoro dalla sezione <b>'I tuoi lavori'</b>.
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ width: "100%" }}>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className='summary'
                        sx={{ fontSize: 11, bgcolor: "#f1f1f1", border: '1px solid #aaa', borderRadius: "3px" }}
                    >
                        <p className='py-[5px] ps-[7px] flex gap-1 text-justify pe-[5px]'><AddIcon sx={{ fontSize: 15 }} /> Come posso utilizzare un Coupon di Sconto?</p>
                    </AccordionSummary>
                    <AccordionDetails sx={{ border:'1px solid #ddd'}}>
                        <div className='text-[11px] text-justify'>
                            Puoi trovare tutte le informazioni necessarie sui Coupon di sconto nella pagina dedicata <a className="text-[#f58220] cursor-pointer">cliccando qui</a><br /><br />
                            Se hai un Coupon di sconto puoi inserirlo nella sezione del Carrello relativa al Pagamento
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ width: "100%" }}>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className='summary'
                        sx={{ fontSize: 11, bgcolor: "#f1f1f1", border: '1px solid #aaa', borderRadius: "3px" }}
                    >
                        <p className='py-[5px] ps-[7px] flex gap-1 text-justify pe-[5px]'><AddIcon sx={{ fontSize: 15 }} /> Perchè il mio Carrello è vuoto?</p>
                    </AccordionSummary>
                    <AccordionDetails sx={{ border:'1px solid #ddd'}}>
                        <div className='text-[11px] text-justify'>
                            Per inserire dei prodotti nel carrello, vai nella scheda del prodotto che ti interessa e clicca sul pulsante<b>'Aggiungi al Carrello'</b>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ width: "100%" }}>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className='summary'
                        sx={{ fontSize: 11, bgcolor: "#f1f1f1", border: '1px solid #aaa', borderRadius: "3px" }}
                    >
                        <p className='py-[5px] ps-[7px] flex gap-1 text-justify pe-[5px]'><AddIcon sx={{ fontSize: 15 }} /> Dove posso scegliere il tipo di Consegna che preferisco?</p>
                    </AccordionSummary>
                    <AccordionDetails sx={{ border:'1px solid #ddd'}}>
                        <div className='text-[11px] text-justify'>
                            Nella sezione del carrello <b>"Scegli la Consegna"</b> potrai selezionare il tipo di consegna che preferisci.<br /><br /> Potrai anche specificare un indirizzo di consegna differente da quello fornito al momento della registrazione.
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ width: "100%" }}>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className='summary'
                        sx={{ fontSize: 11, bgcolor: "#f1f1f1", border: '1px solid #aaa', borderRadius: "3px" }}
                    >
                        <p className='py-[5px] ps-[7px] text-justify pe-[5px] flex gap-1 items-center '><AddIcon sx={{ fontSize: 15 }} /> In che modo posso pagare il mio ordine? </p>
                    </AccordionSummary>
                    <AccordionDetails sx={{ border:'1px solid #ddd'}}>
                        <div className='text-[11px] text-justify'>
                            Nella sezione del carrello <b>"Scegli il Pagamento"</b> potrai scegliere la modalità di pagamento che preferisci.<br /><br /> Se hai a disposizione un Coupon di sconto potrai inserirlo in modo che il tuo sconto venga applicato all'ordine.
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>

    )
}

export default TotaleProvvisorio