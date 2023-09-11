import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { ListLavori } from '../../Interfaces/OrdiniIntarface';
import { GLOBAL_CONFIG } from '../../../../_config/global';
import '../../styles/acordion.css'
import useITuoiLavori from '../../hooks/useITuoiLavori';
import { useEffect } from 'react';
type PropsAcordionLavori = {
    width:string | number
}
//AreaPersonale/iTuoiOrdini
const AcordionLavori = ({  width }: PropsAcordionLavori) => {
    const {listLavori, pageLavori, handleGetLavori, handleRedirectToDetaglioLavoro, handleNewTagListinoTemplate, handleDeleteLavoro} = useITuoiLavori()
    
    return (<>
    <div className='w-[790px] p-[10px]'>
        <div className='w-full'>
            <p className='text-[12px] text-justify w-full mt-[10px]'>
                Da qui puoi consultare lo stato dei tuoi lavori ed essere sempre informato sulla fase di lavorazione. 
                Lo stato dei lavori viene aggiornato all' incirca 
                <span className='mx-[2px] font-bold'>
                    ogni 15 minuti.
                </span> 
            </p>
            <p className='text-[12px] text-justify w-full mt-[15px]'>
                Clicca sul 
                <span className='mx-[2px] font-bold'>+</span>
                che vedi accanto a ogni Lavoro per visualizzare il dettaglio e le operazioni che puoi effettuare.
            </p>
            <div className='w-full mt-[15px]'>
                <div className='w-full flex flex-row'>
                    <span className='text-[red] text-[12px] w-[100px] px-[3px] text-right'>STATO</span>
                    <span className='text-[red] text-[12px] w-[500px] px-[3px]'>PRODOTTO ACQUISTATO</span>
                    <span className='text-[red] text-[12px] w-[70px] text-center'>LAVORO</span>
                    <span className='text-[red] text-[12px] w-[110px] text-center'>IMPORTO NETTO</span>
                </div>

            </div>
        </div>
         <div className='w-full'>
            {
               //*/
            listLavori?.map((item, index) => (
                <Accordion key={`index-${index}`}>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{ bgcolor: '#f1f1f1', border: 1, borderColor: '#aaa', borderRadius: 1, display: 'flex', alignItems: 'center', padding: 0, height: '15px', width: 770 }}
                        className='acodion-lavori w-full'
                    >
                        <div className={` flex w-[100%] items-center`}>
                            <div className="flex w-[100px] items-center">
                                <span className='font-bold text-[12px] ml-[10px]'>
                                    +
                                </span>
                                <div className="mx-[5px] flex w-[40px] flex justify-center items-center">
                                    <img src={GLOBAL_CONFIG.IMG_IP + "/" + item.iconaStato} alt="" />
                                </div>
                                <div style={{ 'backgroundColor': item.coloreStatoHTMLO }} className="w-[25px] h-[25px] rounded border border-[#aaa]"></div>

                            </div>
                           

                            <div className="w-[320px]">
                                <span className='text-[11px] font-bold'>
                                    {item.nomeProdotto}
                                </span>
                            </div>
                            <div className=" w-[160px] flex justify-center">
                                <span className='text-[11px] font-bold text-[red]'>
                                    {(item.stato == 5 && item.omaggio != 1) ? "ALLEGARE I FILE!" : "EFFETTUA IL PAGAMENTO! "}
                                </span>
                            </div>
                            <div className=" w-[70px] flex justify-center">
                                <span className='w-full text-[11px] font-bold text-[red] text-right'>
                                    {item.nOrdineStr}
                                </span>
                            </div>
                            <div className="w-[113px] flex justify-end px-[3px]">
                                <span className='font-bold text-[11px] text-right'>
                                    {item.omaggio ? "OMAGGIO" : `€ ${item.importoNettoStr} + iva`}
                                </span>
                            </div>

                        </div>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{ bgcolor: "", display: '', fontSize: 11, width: 770, border: '1px solid #ddd', }}
                    >
                        <div className="">
                            <div className="flex flex-row">
                                <div className='w-[100px]'>
                                    {item.showSVG == false ?
                                        <img src={"	https://tipografiaformer.it/listino/img/" + item.boxImgRif} alt="" className='w-[100px] h-[100px]' /> :
                                        <img src="" alt="" className="" />
                                    }
                                </div>
                                <div className="w-[450px] ml-[2px] flex flex-col gap-[5px]">
                                    <p className="flex">
                                        <span className='w-[82px] text-[11px]'>
                                            Nome lavoro:
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
                                            <p className="flex">
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
                                        <div className='ml-[82px] p-[3px] text-[18px] font-bold rounded bg-[#d6e03d] flex flex-row'>
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
                                    {
                                        
                                    item.idOrdineWeb ?
                                        <>
                                            <p
                                                className={`flex justify-center`}
                                            >
                                                <span className={`bg-[${item.coloreStatoHTMLO}] ${item.omaggio == 1 ? 'text-[white]' : ''} min-w-[118px] text-center text-[11px] tracking-wide font-bold  py-[3px] px-[10px] border border-[#aaa] rounded-[3px]`}>
                                                    {item.statoStrO}
                                                </span>
                                            </p>
                                            
                                            <div className='flex justify-center'>
                                                {item.anteprimaWeb.length > 0 ?
                                                    <img src={`https://tipografiaformer.it/ordini/${item.idOrdineWeb}/${item.anteprimaWeb}`} alt="" />
                                                    :
                                                    <img src={`https://tipografiaformer.it/img/NoAnteprima.png`} alt="" className="" />

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
                                                onClick={() => {}}
                                            >
                                                <img src="https://tipografiaformer.it/img/icoAttach16.png" alt="" />
                                                <b>INVIA I FILE</b>
                                            </button>
                                            : null
                                        }
                                        {item.omaggio != 1 ?
                                            <button
                                                className="flex items-center rounded p-[2px] px-[4px] bg-[#ffd30c] hover:bg-[#ffe055]"
                                                onClick={() => {
                                                    handleRedirectToDetaglioLavoro(item.idOrdineWeb)
                                                }}
                                            >
                                                <img src="https://tipografiaformer.it/img/icoFreccia16.png" alt="" />Vai al Dettaglio Lavoro
                                            </button>
                                            : null
                                        }
                                    </>
                                    : null
                                }
                                {item.pathTemplate.length > 0 && item.omaggio != 1 ?
                                    <button
                                        className="flex items-center rounded p-[2px] px-[4px] bg-[#ffd30c] hover:bg-[#ffe055]"
                                        onClick={() => {
                                            handleNewTagListinoTemplate(item.pathTemplate)
                                        }}
                                    >
                                        <img src="https://tipografiaformer.it/img/icoInfo16.png" />
                                        Scarica il Template
                                    </button>
                                    : null
                                }
                                <button
                                    className="flex items-center rounded p-[2px] px-[4px] bg-[#ffd30c] hover:bg-[#ffe055]"
                                    onClick={() => {
                                        handleDeleteLavoro(item.idOrdineWeb)
                                    }}
                                >
                                    <img src="https://tipografiaformer.it/img/icoCestino16.png" />
                                    Elimina lavoro
                                </button>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            ))
            //*/
            }
        </div>
        <div className='w-full'>
            <span className=''>
                Vai alla pagina
            </span>
        </div>
        <div className="w-full flex overflow-x-auto">
            {
            pageLavori.map((item, index) => (
                <a key={item} className="text-[12px] hover:underline cursor-pointer py-[5px] px-[10px] bg-[#2b2b2b] text-white border-[1px] border-[#aaa] rounded-[3px]" onClick={() => { handleGetLavori(item) }}>{item}</a>
            ))
            }
        </div>
    </div>
         

    </>
       

    )
}

export default AcordionLavori