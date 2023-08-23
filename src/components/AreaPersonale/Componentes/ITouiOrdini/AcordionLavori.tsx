import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { ListLavori } from '../../Interfaces/OrdiniIntarface';
import { GLOBAL_CONFIG } from '../../../../_config/global';

type PropsAcordionLavori = {
    listLavori: ListLavori[]
}
//AreaPersonale/iTuoiOrdini
const AcordionLavori = ({ listLavori }: PropsAcordionLavori) => {
    return (
        <>
            {listLavori.map((item, index) => (
                <Accordion key={item.idOrdineWeb }>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <div className="flex justify-center items-center gap-2"> + <img src={GLOBAL_CONFIG.IMG_IP + "/" + item.iconaStato} alt="" /></div>
                        <div style={{ 'backgroundColor': item.coloreStatoHTMLO }} className="w-[25px] h-[25px] rounded border border-[#aaa]"></div>
                        <div className="">{item.title}</div>
                        <div className="">{(item.stato == 5 && item.idOrdineWeb != 0 && item.omaggio != 1) ? "ALLEGARE I FILE!" : "EFFETTUA IL PAGAMENTO! "}</div>
                        <div className="">{item.omaggio ? "OMAGGIO" : `${item.importoNettoStr}`}</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="">
                            <div className="flex">
                                {item.showSVG == false ?
                                    <img src={"	https://tipografiaformer.it/listino/img/" + item.boxImgRif} alt="" /> :
                                    <img src="" alt="" className="" />
                                }

                                <div className="">
                                    <p className="">Nome lavoro: {item.nomeLavoro}</p>
                                    <p className="">Quantità: {item.qtaStr}</p>
                                    <p className="">Prodotto: {item.nomeProdotto}</p>
                                    <p className="">{item.preventizioneIdReparto != 4 ? `Dimensioni: ${item.dimensioniStr}` : ''}</p>
                                    <p className="">{item.ifOrientamento ? `Orientamento: ${item.orientamentoSelezionatoStr}` : ""} </p>
                                    <p className="">{item.preventizioneIdReparto != 4 ? `Supporto: ${item.supportoStr}` : ""}</p>
                                    <p className="">Stampa: {item.coloriStampaStr}</p>
                                    <p className="">{item.ifFogli ? ` ${item.fogliLabel} : ${item.nFogliVisStr} ${item.labelCopertina}` : ""}</p>
                                    {item.boxLavorazioni.length > 0 ?

                                        item.boxLavorazioni.map((elem, i) => (
                                            <p className="">{i == 0 ? 'Opzioni:' : ''} {elem}</p>

                                        )) : null

                                    }
                                    <p className="">Imballo: Colli {item.colliStr}, Peso {item.pesoStr} kg ±</p>
                                    <p className="">{item.idCoupon ? `Coupon: ${item.importoTotaleScontiStrO}` : ''}</p>
                                    <p className="bg-yellow-300">{item.omaggio != 1 ? `${item.importoNettoStr} ${item.promo ? `Promo ${item.promo} % ` : ''}` : ''}</p>
                                    <p className="">{item.ifNote ? `Note: ${item.noteOrd}` : ''}</p>
                                </div>
                                <div className="">
                                    {item.idOrdineWeb ?
                                        <>
                                            <p style={{ 'backgroundColor': item.coloreStatoHTMLO, 'color': item.omaggio == 1 ? 'white' : '' }} className="">{item.statoStrO}</p>
                                            <p className="">N° Lavoro: {item.nOrdineStr}</p>
                                            {item.anteprimaWeb.length > 0 ?
                                                <img src={`https://tipografiaformer.it/ordini/${item.idOrdineWeb}/${item.anteprimaWeb}`} alt="" />
                                                :
                                                <img src={`https://tipografiaformer.it/img/NoAnteprima.png`} alt="" className="" />

                                            }
                                        </>
                                        : null
                                    }
                                </div>
                            </div>
                            <div className="w-full  flex gap-2">
                                {item.idOrdineWeb ?
                                    <>
                                        {item.stato == 5 && item.omaggio != 1 ?
                                            <button className="flex"><img src="https://tipografiaformer.it/img/icoAttach16.png" alt="" /><b>INVIA I FILE</b></button>
                                            : null
                                        }
                                        {item.omaggio != 1 ?
                                            <button className="flex"><img src="https://tipografiaformer.it/img/icoFreccia16.png" alt="" />Vai al Dettaglio Lavoro</button>
                                            : null
                                        }
                                    </>
                                    : null
                                }
                                {item.pathTemplate.length > 0 && item.omaggio != 1 ?
                                    <button className="flex"><img src="https://tipografiaformer.it/img/icoInfo16.png" />Scarica il Template</button>
                                    : null
                                }
                                <button className="flex"><img src="https://tipografiaformer.it/img/icoCestino16.png" />Elimina lavoro</button>
                            </div>

                        </div>
                    </AccordionDetails>
                </Accordion>
            ))}
        </>

    )
}

export default AcordionLavori