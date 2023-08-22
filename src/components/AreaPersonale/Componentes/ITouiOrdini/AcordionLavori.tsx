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
                <Accordion key={index}>
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
                            <div className="">
                                {item.showSVG == false ?
                                    <img src={"	https://tipografiaformer.it/listino/img/" + item.boxImgRif } alt="" /> :
                                    <img src="" alt="" className="" />
                                }

                                <div className="">
                                    <p className="">Nome lavoro: {item.nomeLavoro}</p>
                                    <p className="">Quantità: {item.qtaStr}</p>
                                    <p className="">Prodotto: {item.nomeProdotto}</p>
                                    <p className=""></p>
                                    <p className=""></p>
                                    <p className=""></p>
                                    <p className=""></p>
                                    <p className=""></p>
                                    <p className=""></p>
                                    <p className=""></p>
                                    <p className=""></p>
                                    <p className=""></p>
                                </div>

                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            ))}
        </>

    )
}

export default AcordionLavori