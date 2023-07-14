import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import './../styles/acorcdion.css'
import { DataGetTotaleProvisorio } from '../Interfaces/totaleProvvisorio';
import { useNavigate } from 'react-router-dom';

type PropsTotale ={
    TotalPrezo:number
    TotaleProvisorio: DataGetTotaleProvisorio | undefined
    setStepperStep: React.Dispatch<React.SetStateAction<number>>
    changebuttonstep: (number: number) => string;
    setSteptext: React.Dispatch<React.SetStateAction<string>>
    step:number
}

const TotaleProvvisorio = ({TotalPrezo,TotaleProvisorio, setStepperStep, changebuttonstep, setSteptext, step}:PropsTotale) => {
    const navigate = useNavigate();
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
                            <td className="px-[10px]">€ {TotaleProvisorio? TotaleProvisorio.prezzoTotaleOrdini:"00"  },00</td>
                        </tr>

                        <tr>
                            <td className="px-[10px]">
                                Spedizioni:
                            </td>
                            <td className="px-[10px]">€ {TotaleProvisorio?TotaleProvisorio.spedizioni:"00"},00</td>
                        </tr>
                        <tr>
                            <td className="px-[10px]">
                                IVA (22%):
                            </td>
                            <td className="px-[10px]">€ {TotaleProvisorio?TotaleProvisorio.iva:"00,00"}</td>
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
                            <td className="px-[10px]">
                                <b>€ {TotaleProvisorio?TotaleProvisorio.totaleOridini:"00,00"}</b>
                            </td>
                        </tr>
                    </tbody></table>
                <center>
                    <button onClick={()=>{setStepperStep(step+1); setSteptext(changebuttonstep(step+1))}} className="text-[14px] w-[170px] my-[10px] h-[30px] rounded-[4px] bg-[#d6e03d] text-center p-[5px] ">{changebuttonstep(step+1)}</button>
                </center>
            </div>
            <div className="mt-[30px] w-full">
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
                    <AccordionDetails>
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
                    <AccordionDetails>
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
                    <AccordionDetails>
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
                    <AccordionDetails>
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
                    <AccordionDetails>
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
                    <AccordionDetails>
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