import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { ListLavori } from '../../Interfaces/OrdiniIntarface';
import { GLOBAL_CONFIG } from '../../../../_config/global';
import '../../styles/acordion.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';

type PropsAcordionLavori = {
    listLavori: ListLavori[],
    handleRedirectToDetaglioLavoro: Function;
    handleNewTagListinoTemplate: Function;
    handleDeleteLavoro: Function;
    width: string | number
}
//AreaPersonale/iTuoiOrdini
const AcordionLavori = ({ listLavori, handleRedirectToDetaglioLavoro, handleNewTagListinoTemplate, handleDeleteLavoro, width }: PropsAcordionLavori) => {


    const [expanded, setExpanded] = useState<string>('')

    const handleAcordion = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        if (panel === expanded) {
            setExpanded('')
        } else {
            setExpanded(panel)

        }
    }

    return (
        <div className='w-full'>
            {listLavori.map((item, index) => (
                <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleAcordion(`panel${index}`)}>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{ bgcolor: '#f1f1f1', border: 1, borderColor: '#aaa', borderRadius: 1, display: 'flex', alignItems: 'center', padding: 0, height: '15px', width: width }}
                        className='acodion-lavori w-full'

                    >
                        <div className={` flex w-[100%] items-center justify-between px-[1em]`}>
                            <div className="flex flew-row justify-center items-center w-[85px]">
                                <span className='font-bold text-[12px] ml-[10px]'>
                                    {expanded === `panel${index}` ?
                                        <RemoveIcon sx={{ fontSize: 15 }} /> :
                                        <AddIcon sx={{ fontSize: 15 }} />

                                    }
                                </span>
                                <div className="mx-[5px] w-[40px]  flex justify-center items-center" >
                                    <img src={GLOBAL_CONFIG.IMG_IP + "/" + item.iconaStato} alt="" />
                                </div>
                                <div style={{ 'backgroundColor': item.coloreStatoHTMLO }} className="w-[35px] h-[25px] rounded border border-[#aaa]"></div>
                            </div>

                            <div className="flex w-[268px] px-[2px]">
                                <span className='text-[11px] font-bold'>
                                    {item.title}
                                </span>
                            </div>
                            <div className="w-[160px] flex justify-end ">
                                <span className='text-[11px] font-bold text-[red]'>
                                    {
                                        //(item.stato == 5 && item.idOrdineWeb != 0 && item.omaggio != 1) ? "ALLEGARE I FILE!" : "EFFETTUA IL PAGAMENTO! "
                                        (item.stato == 5 && item.idOrdineWeb != 0 && item.omaggio != 1) ? "ALLEGARE I FILE!" : item.stato == 15 ? "EFFETTUA IL PAGAMENTO!  " : ''
                                    }
                                </span>
                            </div>
                            <div className="w-[70px] flex justify-end">
                                <span className='font-bold text-[11px]'>
                                    {`${item.nOrdineStr}`}
                                </span>
                            </div>
                            <div className="w-[110px] flex justify-end bg">
                                <span className='font-bold text-[11px]'>
                                    {item.omaggio ? "OMAGGIO" : `${item.importoNettoStr}`}
                                </span>
                            </div>


                        </div>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{ bgcolor: "", display: '', fontSize: 11, width: width, border: '1px solid #ddd', }}
                    >
                        <div className="">
                            <div className="flex flex-row">
                                <div className='w-[100px]'>
                                    {item.showSVG == false ?
                                        <img src={`${GLOBAL_CONFIG.IMG_IP}/listino/img/` + item.boxImgRif} alt="" className='w-[100px] h-[100px]' /> :
                                        <img src="" alt="" className="" />
                                    }
                                </div>
                                <div className="w-[450px] ml-[2px] flex flex-col gap-[5px]">
                                    <p className="flex">
                                        <span className='w-[82px] text-[11px]'>
                                            Nome ordini:
                                        </span>
                                        <span className='text-[11px] font-bold'>
                                            {item.nomeLavoro}
                                        </span>
                                    </p>
                                    <p className="flex">
                                        <span className='w-[82px] text-[11px]'>
                                            Quantità:
                                        </span>
                                        <span className='text-[11px] font-bold'>
                                            {item.qtaStr}
                                        </span>
                                    </p>
                                    <p className="flex">
                                        <span className='w-[82px] text-[11px]'>
                                            Prodotto:
                                        </span>
                                        <span className='text-[11px] font-bold'>
                                            {item.nomeProdotto}
                                        </span>
                                    </p>
                                    <p className="flex">
                                        {item.preventizioneIdReparto != 4 ? <>
                                            <span className='w-[82px] text-[11px]'>
                                                Dimensioni:
                                            </span>
                                            <span className='text-[11px] font-bold'>
                                                {`${item.dimensioniStr}`}
                                            </span>
                                        </> : null}
                                    </p>
                                    <p className="flex">
                                        {
                                            item.ifOrientamento ? <>
                                                <span className='w-[82px] text-[11px]'>
                                                    Orientamento:
                                                </span>
                                                <span className='text-[11px] font-bold'>
                                                    {`${item.orientamentoSelezionatoStr}`}
                                                </span>

                                            </>
                                                :
                                                null
                                        }
                                    </p>
                                    <p className="flex">
                                        {
                                            item.preventizioneIdReparto != 4 ?
                                                <>
                                                    <span className='w-[82px] text-[11px]'>
                                                        Supporto:
                                                    </span>
                                                    <span className='text-[11px] font-bold'>
                                                        {`${item.supportoStr}`}
                                                    </span>
                                                </>
                                                :
                                                null
                                        }
                                    </p>
                                    <p className="flex">
                                        <span className='w-[82px] text-[11px]'>
                                            Stampa:
                                        </span>
                                        <span className='text-[11px] font-bold'>
                                            {item.coloriStampaStr}
                                        </span>
                                    </p>
                                    <p className="flex">
                                        {
                                            item.ifFogli ?
                                                <>
                                                    <span className='w-[82px] text-[11px]'>
                                                        {`${item.fogliLabel}:`}
                                                    </span>
                                                    <span className='text-[11px] font-bold'>
                                                        {`${item.nFogliVisStr} ${item.labelCopertina}`}
                                                    </span>
                                                </>
                                                :
                                                null
                                        }
                                    </p>
                                    {item.boxLavorazioni.length > 0 ?
                                        item.boxLavorazioni.map((elem, i) => (
                                            <p className="flex" key={i}>
                                                {(i == 0)
                                                    &&
                                                    <span className='w-[82px] text-[11px]'>
                                                        Opzioni:
                                                    </span>}
                                                <span className={`${i == 0 ? '' : 'ml-[100px]'} text-[11px] font-bold`}>
                                                    {elem}
                                                </span>
                                            </p>

                                        )) : null

                                    }
                                    <p className="flex">
                                        <span className='w-[82px] text-[11px]'>
                                            Imballo:
                                        </span>
                                        <span className='text-[11px]'>
                                            Colli <b>
                                                {item.colliStr}
                                            </b>, Peso <b> {item.pesoStr} </b> kg ±
                                        </span>
                                    </p>
                                    <p className="flex">
                                        {
                                            item.idCoupon ? <>
                                                <span className='w-[82px] text-[11px]'>
                                                    Coupon:
                                                </span>
                                                <span className='text-[11px] font-bold'>
                                                    {`${item.importoTotaleScontiStrO}`}
                                                </span>
                                            </>
                                                :
                                                null
                                        }
                                    </p>
                                    <p className="flex mt-1">
                                        <div className='ml-[82px] p-[3px] text-[18px] font-bold rounded bg-[#d6e03d] flex items-center'>
                                            <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoPrezzo.png`} className='w-[20px] h-[25px]' />
                                            <span className='ml-1'>
                                                {item.omaggio != 1 ? `${item.importoNettoStr} ${item.promo ? `Promo ${item.promo} % ` : ''}` : ''}
                                            </span>
                                        </div>
                                    </p>
                                    <p className="flex">
                                        {
                                            item.ifNote ?
                                                <>
                                                    <span className='w-[82px] text-[11px]'>
                                                        Note:
                                                    </span>
                                                    <span className='w-[300px] bg-[#f1f1f1]'>
                                                        {`${item.noteOrd}`}
                                                    </span>
                                                </>

                                                :
                                                null
                                        }
                                    </p>
                                </div>
                                <div className="w-[150px]">
                                    {item.idOrdineWeb ?
                                        <>
                                            <p
                                                className={`flex justify-center`}
                                            >
                                                <span className={`bg-[${item.coloreStatoHTMLO}] ${item.omaggio == 1 ? 'text-[white]' : ''} min-w-[118px] text-center text-[11px] tracking-wide font-bold  py-[3px] px-[10px] border border-[#aaa] rounded-[3px]`} style={{background:item.coloreStatoHTMLO}}>
                                                    {item.statoStrO}
                                                </span>
                                            </p>
                                            <p className="flex justify-center mt-[8px]">
                                                <span className={`text-[11px]`}>
                                                    N° Ordini: {item.nOrdineStr}
                                                </span>
                                            </p>
                                            <div className='flex justify-center'>
                                                {item.anteprimaWeb.length > 0 ?
                                                    <img src={`${GLOBAL_CONFIG.IMG_IP}/ordini/${item.idOrdineWeb}/${item.anteprimaWeb}`} alt="" />
                                                    :
                                                    <img src={`${GLOBAL_CONFIG.IMG_IP}/img/NoAnteprima.png`} alt="" className="" />

                                                }
                                            </div>

                                        </>
                                        : null
                                    }
                                </div>
                            </div>
                            <div className="flex border-[#d6e03d] border-[1px] bg-[#f58220] h-[1px] mt-[20px]">
                            </div>
                            <div className="w-full  flex gap-2 justify-end mt-[10px]">
                                {item.idOrdineWeb ?
                                    <>
                                        {item.stato == 5 && item.omaggio != 1 ?
                                            <button
                                                className="flex items-center rounded p-[2px] px-[4px] bg-[#e70031] hover:bg-[#ff5829]"
                                                onClick={() => handleRedirectToDetaglioLavoro(item.idOrdineWeb)}
                                            >
                                                <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoAttach16.png`} alt="" />
                                                <b>INVIA I FILE</b>
                                            </button>
                                            : null
                                        }
                                        {item.omaggio != 1 ?
                                            <button
                                                className="flex items-center rounded p-[2px] px-[4px] bg-[#ffd30c] hover:bg-[#ffe055]"
                                                onClick={() => handleRedirectToDetaglioLavoro(item.idOrdineWeb)}
                                            >
                                                <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoFreccia16.png`} alt="" />Vai al Dettaglio Ordini
                                            </button>
                                            : null
                                        }
                                    </>
                                    : null
                                }
                                {item.pathTemplate.length > 0 && item.omaggio != 1 ?
                                    <button
                                        className="flex items-center rounded p-[2px] px-[4px] bg-[#ffd30c] hover:bg-[#ffe055]"
                                        onClick={() => handleNewTagListinoTemplate(item.pathTemplate)}
                                    >
                                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoInfo16.png`} />
                                        Scarica il Template
                                    </button>
                                    : null
                                }
                                <button
                                    className="flex items-center rounded p-[2px] px-[4px] bg-[#ffd30c] hover:bg-[#ffe055]"
                                    onClick={() => handleDeleteLavoro(item.idOrdineWeb)}
                                >
                                    <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCestino16.png`} />
                                    Elimina ordini
                                </button>
                            </div>

                        </div>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>

    )
}

export default AcordionLavori