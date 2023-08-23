import { GLOBAL_CONFIG } from '../../../../_config/global';
import AcordionLavori from './AcordionLavori';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { OrdineList } from '../../Interfaces/OrdiniIntarface';

type PropsAcordionOrdini = {
    listOrdini: OrdineList[]
    pageOrdini: number[]
}

const AcordionOrdini = ({ listOrdini, pageOrdini }: PropsAcordionOrdini) => {
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
                                <div style={{ 'backgroundColor': `${item.coloreStatoHtml}` }} className={` w-[25px]
                                h-[25px] rounded border-[1px] border-[#aaa]`}> </div>
                                <span className=""></span>
                            </div>
                            <div className="">{item.statoStr}</div>
                            <div className="">{`N° ${item.idConsegnaView} del ${item.inseritoStr}`}</div>
                            <div style={{ 'backgroundColor': `${item.dataOrdineClasse}` }} className={`bg-[]`}>{item.giornoStr}</div>
                            <div className="">{item.corriereStr}</div>
                            <div className="">{item.count}</div>
                            <div className=''>{item.importoTotNettoStr}</div>
                        </AccordionSummary>
                        <AccordionDetails >
                            <div className="flex">
                                <div className="">
                                    <b>Riepilogo Ordine</b>
                                    <p style={{ 'backgroundColor': item.dataOrdineClasse }} className={``}>Data Consegna {item.giornoStr} {item.dataOrdineLabel}</p>
                                    <p className="">N° Lavori {item.count}</p>
                                    <p className="">Corriere {item.corriereStr}</p>
                                    <p className="">{`(Colli ${item.numeroColliStr}, Peso ${item.pesoKG} kg ±)`}</p>
                                    <p className="">Indirizzo {item.indirizzoStr}</p>
                                    <p className=""> Pagamento {item.pagamentoStr}</p>

                                </div>
                                <div className="">
                                    <p style={{ 'backgroundColor': item.coloreStatoHtml }} className={``}>{item.statoStr}</p>
                                    <p className="">Totale Lavori: € {item.importoTotOrdiniNettoOriginaleStr}</p>
                                    <p className="">Totale Spedizioni: € {item.importoConsegnaStr}</p>
                                    <p className="">IVA (22%): € {item.importoTotIvaStr}</p>
                                    <p className="">TOTALE: € {item.importoTotStr}</p>
                                </div>
                            </div>
                            <b>LAVORI NELL' ORDINE</b><br />
                            Qui trovi l'elenco dei lavori che sono contenuti in questo Ordine.
                            <AcordionLavori listLavori={item.listLavori} />
                            <div className="flex">
                                {item.idStatoConsegna == 10 ?
                                    <button className="flex">
                                        <img src="https://tipografiaformer.it/img/icoPrezzo16.png" />
                                        <b>EFFETTUA IL PAGAMENTO</b>
                                    </button>
                                    : item.tracciabile ?
                                        <button className="flex"><img src="https://tipografiaformer.it/img/icoCorriere20.png" width="16" /><b>TRACCIA IL MIO PACCO</b></button>
                                        : null
                                }
                                <button className="flex"><img src="https://tipografiaformer.it/img/icoFreccia16.png" /> Vai al Dettaglio Ordine</button>
                                {item.modificabile &&
                                    <button className="flex"><img src="https://tipografiaformer.it/img/icoCestino16.png" />Elimina Ordine</button>
                                }
                            </div>

                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </>
    )
}

export default AcordionOrdini