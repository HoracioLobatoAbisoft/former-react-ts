import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import useITuoiOrdini from '../hooks/useITuoiOrdini';
import { GLOBAL_CONFIG } from '../../../_config/global';
import AcordionLavori from './AcordionLavori';

const ITouiOrdini = () => {

    const { listOrdini, pageOrdini } = useITuoiOrdini();

    return (
        <>
            {
                listOrdini.map((item, index) => (
                    <Accordion key={index}>
                        <AccordionSummary
                            //expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{ display: 'flex', gap: 2, }}
                        >
                            <div className="">+</div>
                            <div className="flex gap-1">
                                <img src={GLOBAL_CONFIG.IMG_IP + "/" + item.iconaCorriere} alt="" />
                                <div className={`bg-[${item.coloreStatoHtml}] w-[25px]
                                h-[25px] rounded border-[1px] border-[#aaa]`}> </div>
                                <span className=""></span>
                            </div>
                            <div className="">{item.statoStr}</div>
                            <div className="">{`N° ${item.idConsegnaView} del ${item.inseritoStr}`}</div>
                            <div className={`bg-[${item.dataOrdineClasse}]`}>{item.giornoStr}</div>
                            <div className="">{item.corriereStr}</div>
                            <div className="">{item.count}</div>
                            <div className=''>{item.importoTotNettoStr}</div>
                        </AccordionSummary>
                        <AccordionDetails >
                            <div className="flex">
                                <div className="">
                                    <b>Riepilogo Ordine</b>
                                    <p className={`bg-[${item.dataOrdineClasse}]`}>Data Consegna {item.giornoStr} {item.dataOrdineLabel}</p>
                                    <p className="">N° Lavori {item.count}</p>
                                    <p className="">Corriere {item.corriereStr}</p>
                                    <p className="">{`(Colli ${item.numeroColliStr}, Peso ${item.pesoKG} kg ±)`}</p>
                                    <p className="">Indirizzo {item.indirizzoStr}</p>
                                    <p className=""> Pagamento {item.pagamentoStr}</p>

                                </div>
                                <div className="">
                                    <p className={`bg-[${item.coloreStatoHtml}]`}>{item.statoStr}</p>
                                    <p className="">Totale Lavori: € {item.importoTotOrdiniNettoOriginaleStr}</p>
                                    <p className="">Totale Spedizioni: € {item.importoConsegnaStr}</p>
                                    <p className="">IVA (22%): € {item.importoTotIvaStr}</p>
                                    <p className="">TOTALE: € {item.importoTotStr}</p>
                                </div>
                            </div>
                            <b>LAVORI NELL' ORDINE</b><br />
                            Qui trovi l'elenco dei lavori che sono contenuti in questo Ordine.
                            <AcordionLavori listLavori={item.listLavori}/>
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </>


    )
}

export default ITouiOrdini