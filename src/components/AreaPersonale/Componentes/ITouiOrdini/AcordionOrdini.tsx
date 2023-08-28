import { GLOBAL_CONFIG } from '../../../../_config/global';
import AcordionLavori from './AcordionLavori';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { OrdineList } from '../../Interfaces/OrdiniIntarface';

type PropsAcordionOrdini = {
    listOrdini: OrdineList[]
    pageOrdini: number[];
    handleGetOrdini: (pageNumber: number, idUt?: number) => Promise<void>
}




const AcordionOrdini = ({ listOrdini, pageOrdini,handleGetOrdini }: PropsAcordionOrdini) => {


    return (
        <>
        <div className='w-full bg-white'>
            <div className='flex flex-row'>
                <div className='w- full text-[10px]'>
                    <span className=''>
                    Da qui puoi visualizzare lo stato dei tuoi Ordini. Clicca sul + che vedi accanto a ogni Ordine per visualizzare il dettaglio dell' ordine.
                    </span>
                </div>
            </div>
            <div className='flex flex-row mt-[15px]'>
                <div className='ml-[105px] flex justify-end px-1'>
                    <span className='text-[red] text-[10px] font-bold'>
                        STATO
                    </span>
                </div>
                <div className='ml-[90px] flex justify-end px-1'>
                    <span className='text-[red] text-[10px] font-bold'>
                        ORDINE
                    </span>
                </div>
                <div className='w-[260px] flex justify-start ml-[35px] px-1'>
                    <span className='text-[red] text-[10px] font-bold'>
                     DATA CONSEGNA
                    </span>
                    <span className='text-[red] text-[10px] font-bold ml-[25px]'>
                    CORRIERE
                    </span>
                </div>
                <div className='w-[80px]  flex justify-start'>
                    <span className='text-[red] text-[10px] font-bold'>
                    N° LAVORI
                    </span>
                </div>
                <div className='flex w-[96px] justify-end ml-[10px] px-1'>
                    <span className='text-[red] text-[10px] font-bold'>
                    IMPORTO NETTO

                    </span>
                </div>

            </div>
        </div>
        <div className='w-full bg-white'>
            {
                listOrdini.map((item, index) => (
                    <Accordion 
                        key={index}
                        className={`bg-[red]`}
                      
                    >
                        <AccordionSummary
                            //expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{ bgcolor: '#f1f1f1', border: 1, borderColor: '#aaa', borderRadius: 1, display: 'flex', alignItems: 'center', padding:0, height: '15px', width:'760px' }}
                            className={`arcodion-ordini`}
                        >
                            <div className='w-full flex flex-row items-center hover:font-bold'>
                                <div className="w-[3%]  text-center">+</div>
                                <div className="w-[4%]  items-center justify-center">
                                    <img src={GLOBAL_CONFIG.IMG_IP + "/" + item.iconaCorriere} alt="" />
                                </div>
                                <div className='w-[4%]  items-center justify-center'>
                                    <div 
                                        style={{ 'backgroundColor': `${item.coloreStatoHtml}` }} 
                                        className={` w-[25px] h-[25px] rounded border-[1px] border-[#aaa]`}
                                    />
                                </div>
                                <div className="">
                                    <span className='text-[11px]'>
                                        {item.statoStr}
                                    </span>
                                </div>
                                <div className="ml-[60px]">
                                    <span className='text-[11px] font-bold'>
                                        {`N° ${item.idConsegnaView} del ${item.inseritoStr}`}
                                    </span>
                                </div>
                                <div className='ml-[38px]'>
                                    <span className={`bg-[${item.dataOrdineClasse}] rounded text-[11px] p-[1px] px-[2px] font-bold`}>
                                        {item.giornoStr}
                                    </span>
                                    <span className='ml-[25px] text-[11px]'>
                                        {item.corriereStr}
                                    </span>
                                </div>
                                <div className="ml-[85px] w-[50px] flex justify-center">
                                    <span className='text-[11px]'>
                                        {item.count}
                                    </span>
                                </div>
                                <div className='w-[132px] flex justify-end'>
                                    <span className='font-bold text-[12px]'>
                                        € {Number(item.importoTotNettoStr).toLocaleString('it-IT')} + iva
                                    </span>
                                </div>
                            </div>
                           
                        </AccordionSummary>
                        <AccordionDetails 
                            sx={{ bgcolor: "", display: '', fontSize: 11, width: '760px', border:'1px solid #ddd', }}
                        >
                            <div className="flex w-full p-0">
                                <div className='row m-0 w-full'>
                                    <div className="col m-0 col-9">
                                        <div className='row'>
                                            <div className='col col-12'>
                                                <b>Riepilogo Ordine</b>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col col-4'>
                                                <p>
                                                    Data Consegna
                                                </p>
                                            </div>
                                            <div className='col col-8'>
                                                <span className={`bg-[${item.dataOrdineClasse}] p-1 rounded font-bold`} >
                                                    {item.giornoStr} {item.dataOrdineLabel}
                                                </span>
                                            </div>
                                        </div>
                                        <div className='row mt-1'>
                                            <div className='col col-4'>
                                                <span>
                                                    N° Lavori
                                                </span>
                                            </div>
                                            <div className='col col-8'>
                                                <span className='m-1 font-bold'>
                                                    {item.count}
                                                </span>
                                            </div>
                                        </div>
                                        <div className='row mt-[3px]'>
                                            <div className='col col-4'>
                                                <span>
                                                    Corriere
                                                </span>
                                            </div>
                                            <div className='col col-8'>
                                                <div className='row mt-[3px]'>
                                                    <div className='col col-12'>
                                                        <p className="font-bold"> {item.corriereStr}</p>
                                                    </div>
                                                </div>
                                                <div className='row mt-[3px]'>
                                                    <div className='col col-12'>
                                                        <p className="">{`(Colli ${item.numeroColliStr}, Peso ${item.pesoKG} kg ±)`}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row mt-[3px]'>
                                            <div className='col col-4'>
                                               <span>
                                                    Indirizzo
                                                </span> 
                                            </div>
                                            <div className='col col-8'>
                                                <p className='font-bold'>
                                                    {item.indirizzoStr}
                                                </p>
                                            </div>
                                        </div>
                                        <div className='row mt-[3px]'>
                                            <div className='col col-4'>
                                                <span>
                                                    Pagamento
                                                </span>
                                            </div>
                                            <div className='col col-8'>
                                                <p className='font-bold'>
                                                    {item.pagamentoStr}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-3">
                                        <div className='row mt-[40px]'>
                                            <div className={`col col-12`}>
                                                <div className='flex  justify-center items-center'>
                                                    <span style={{background: item.coloreStatoHtml}} className={`p-1 rounded font-bold`}>
                                                        {item.statoStr}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col col-12'>
                                                <div className='row mt-[3px] justify-end'>
                                                
                                                    <div className='col col-8 px-0'>
                                                        <span>
                                                            Totale Lavori:
                                                        </span>
                                                    </div>
                                                    <div className='col col-3 px-0'>
                                                        <div className='flex  justify-end items-center'>
                                                            <span className='text-end font-bold'>
                                                                € {item.importoTotOrdiniNettoOriginaleStr}
                                                            </span>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className='row mt-[3px] justify-end'>
                                                    <div className='col col-8 px-0'>
                                                        <span>
                                                            Totale Spedizioni:
                                                        </span>
                                                    </div>
                                                    <div className='col col-3 px-0'>
                                                        <div className='flex  justify-end items-center'>
                                                            <span className='text-end font-bold'>
                                                                € {item.importoConsegnaStr}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row mt-[3px] justify-end'>
                                                    <div className='col col-8 px-0'>
                                                        <span>
                                                            IVA (22%):
                                                        </span>
                                                    </div>
                                                    <div className='col col-3 px-0'>
                                                        <div className='flex  justify-end items-center'>
                                                            <span className='text-end font-bold'>
                                                                € {item.importoTotIvaStr}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row mt-[3px] justify-end'>
                                                    <div className='col col-8 px-0 bg-[#d6e03d] border-x-2 border-x-[#fff]'>
                                                        <p className='flex font-bold'>
                                                            TOTALE: 
                                                        </p>
                                                    </div>
                                                    <div className='col col-3 px-0 bg-[#d6e03d] '>
                                                        <div className='flex  justify-end items-center px-0'>
                                                            <p className='text-end font-bold '>
                                                                € {item.importoTotStr}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className='col col-12'>
                                        <div className='row'>
                                            <div className='col col-12'>
                                                <b>LAVORI NELL' ORDINE</b>
                                            </div>
                                            <div className='col col-12'>
                                                <p>
                                                    Qui trovi l'elenco dei lavori che sono contenuti in questo Ordine.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col col-12'>
                                       
                                                <AcordionLavori listLavori={item.listLavori} />

                                        
                                    </div>
                                    <div className="col col-12 mt-[10px] mb-[10px] px-0 pl-[15px]">
                                        <div className="flex border-[#d6e03d] border-[1px] bg-[#f58220] "/>
                                    </div>
                                    <div className='col col-12'>
                                        <div className='row'>
                                            <div className='col col-12 px-0 pr-[3px]'>
                                                <div className="flex mx-0 items-center justify-end">
                                                    {item.idStatoConsegna == 10 ?
                                                        <button className="ml-2 p-[2px] px-[4px] bg-[#e70031] hover:bg-[#ff5829]">
                                                            <img src="https://tipografiaformer.it/img/icoPrezzo16.png" />
                                                            <b>EFFETTUA IL PAGAMENTO</b>
                                                        </button>
                                                        : item.tracciabile ?
                                                            <button className="ml-2 p-1 flex rounded bg-[#ffd30c] hover:bg-[#ffe055]">
                                                                <img src="https://tipografiaformer.it/img/icoCorriere20.png" width="16" />
                                                                <b>TRACCIA IL MIO PACCO</b>
                                                            </button>
                                                            : null
                                                    }
                                                        <button className="ml-2 p-1 flex rounded bg-[#ffd30c] hover:bg-[#ffe055]">
                                                            <img src="https://tipografiaformer.it/img/icoFreccia16.png" /> 
                                                            Vai al Dettaglio Ordine
                                                        </button>
                                                    {item.modificabile &&
                                                        <button className="ml-2 p-1 flex rounded bg-[#ffd30c] hover:bg-[#ffe055]">
                                                            <img src="https://tipografiaformer.it/img/icoCestino16.png" />
                                                            Elimina Ordine
                                                        </button>
                                                    }
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>

                                </div>
                                
                            </div>
                            
                            <br />
                          
                            
                           

                        </AccordionDetails>
                    </Accordion>
                ))
            }
            <p className="">Vai alla pagina </p>
            <div className="w-full flex">
                {pageOrdini.map((item, index) => (
                    <a key={item}  className="text-[12px] hover:underline cursor-pointer py-[5px] px-[10px] bg-[#2b2b2b] text-white border-[1px] border-[#aaa] rounded-[3px]" onClick={()=>{handleGetOrdini(item)}}>{item}</a>
                ))
                }
            </div>
        </div>
        </>
    )
}

export default AcordionOrdini