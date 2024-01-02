import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';
import { SvgImage } from '../../formProdottoV1/interface/svgImage';
import { ImageCustom } from '../../formProdottoV1/components/ImageCustom';
import '../styles/acorcdion.css'
import { ObjCarrello } from '../../formProdottoV1/interface/ObjCarrrello';
import { useEffect, useState } from 'react';
import { formatNumber } from '../../../services/NumberFormat';
import { numberFormat } from '../../../Helpers/formatNumber';
import { enRepartoWeb } from '../../../enHelpers/enRepartoWeb';
import { GLOBAL_CONFIG } from '../../../_config/global';
import RemoveIcon from '@mui/icons-material/Remove';
import { enOperationFrame } from '../../../enHelpers/enOperationFrame';


type PropsAcordionCarrello = {
    ArrayLocalCarrello: ObjCarrello[];
    handleDeleteAllCarrello: () => void
    handleRetornaProdotto: (i: number, uri: string) => void
    setArrayLocalCarrello: React.Dispatch<React.SetStateAction<ObjCarrello[]>>;
    deleteItem: (i: number) => void
    setStepperStep?: React.Dispatch<React.SetStateAction<number>> | null
    step?: number;
    handleOperationFrame?: (operation: enOperationFrame, uri?: any, nav?: string | undefined) => void
}

const AcordionCarrello = ({ ArrayLocalCarrello, handleDeleteAllCarrello, handleRetornaProdotto, setArrayLocalCarrello, deleteItem, step = 0, setStepperStep = null, handleOperationFrame }: PropsAcordionCarrello) => {

    const [expanded, setExpanded] = useState<string>('panel0')

    const handleAcordion = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        if (panel === expanded) {
            setExpanded('')
        } else {
            setExpanded(panel)

        }
    }

    useEffect(() => {
        if (step === 5) { setExpanded('') };
    }, [])


    return (
        <div className=" border border-[#aaa] rounded-[5px] ">
            <div className="flex justify-between pe-[10px] rounded-[5px]  bg-[#f1f1f1] ps-[30px]  py-[10px] h-[40px] text-[12px]">
                <h5 className="flex gap-1"><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCarrello16.png`} className='h-[16px] w-[16px]' /> <b>CARRELLO ACQUISTI: {ArrayLocalCarrello.length}</b> Lavoro/i contenuti in questo Ordine.</h5>
                {step !== 5 && <a className="cursor-pointer flex hover:underline" onClick={() => { handleDeleteAllCarrello() }}><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoDel20.png`} /> Svuota il Carrello</a>}

            </div>
            <hr className=" border-[#aaa]" />
            <b className="text-[12px] ms-[10px]"> LAVORI NELL' ORDINE</b>
            <div className="px-[10px] pb-[10px] flex flex-col gap-1">
                {
                    ArrayLocalCarrello.map((elem, i) => {
                        return (
                            <Accordion key={i} expanded={expanded === `panel${i}`} onChange={handleAcordion(`panel${i}`)}>
                                <AccordionSummary className='carrello' sx={{ bgcolor: '#f1f1f1', border: 1, borderColor: '#aaa', borderRadius: 1, display: 'flex', alignItems: 'center' }}>
                                    <div className=" w-[10%] flex" id='acordion'>
                                        {expanded === `panel${i}` ?
                                            <RemoveIcon sx={{ fontSize: 18 }} /> :
                                            <AddIcon sx={{ fontSize: 18 }} />
                                        }
                                    </div>
                                    <div className=" w-full flex justify-between text-[11px] font-semibold">
                                        <div className="flex gap-3">
                                            <div className="bg-[#FF0000] w-[20px] h-[20px] border border-[#aaa] rounded-[3px]"></div>
                                            <p className="">{elem.qta} {elem.descrizione}</p>
                                        </div>
                                        <p className="">€ {formatNumber(Number(elem.prezzo))} + iva</p>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails sx={{ bgcolor: "", display: '', fontSize: 11, width: '100%', border: '1px solid #ddd' }}>
                                    <div className="w-full flex gap-2">

                                        {elem.svgImg ? <ImageCustom svgImage={elem.svgImg} /> : <img src={`https://tipografiaformer.it/listino/img/${elem.img}`} className='w-[100px] h-[100px] ' alt="" />}

                                        <div className=" flex gap-5 w-full ">
                                            <div className="flex flex-col gap-[1.5px]">
                                                <p className="">Nome lavoro:</p>
                                                <p className="">Quantità:</p>
                                                <p className="">Prodotto:</p>
                                                <p className="">{elem.idReparto != enRepartoWeb.Ricamo ? 'Dimensioni:' : null}</p>
                                                <p className="">{elem.orientamiento && 'Orientamento:'}</p>
                                                <p className="">Supporto:</p>
                                                <p className="">Stampa:</p>
                                                {elem.showFogli && <p className="">{elem.labelFogli} : </p>}
                                                {Array.isArray(elem.stampaOPZ) &&
                                                    elem.stampaOPZ.map((e, i) => {
                                                        return (
                                                            <p className={`${i == 0 ? '' : "text-white"}`} key={e}>Opzioni: </p>
                                                        );
                                                    })}
                                                <p className="">Imballo:</p>
                                                <p className="mt-[60px]"></p>
                                                <p className="">{elem.note && "Note:"}</p>
                                            </div>
                                            <div className="font-bold w-[70%] flex flex-col gap-[1.5px]">
                                                <p className={`${elem.nome ? "" : "text-white"}`}>{elem.nome ? elem.nome : "--"} </p>
                                                <p className="">{numberFormat(elem?.qta, undefined, 0, 0)}</p>
                                                <p className="w-full">{numberFormat(elem.qta, undefined, 0, 0)} {elem.prodotto} </p>
                                                <p className="">{elem.idReparto != enRepartoWeb.Ricamo ? elem.dimencioni : null}</p>
                                                <p className="">{elem.orientamiento && elem.orientamiento}</p>
                                                <p className="">{elem.suporto}</p>
                                                <p className="">{elem.stampa}</p>
                                                <p className="">{elem.showFogli && elem.fogli}</p>
                                                <p className="">
                                                    {Array.isArray(elem.stampaOPZ) &&
                                                        elem.stampaOPZ.map(e => {
                                                            return (
                                                                <ul className='list-disc' key={e}>
                                                                    <li>
                                                                        <b>{e}</b>
                                                                    </li>
                                                                </ul>
                                                            );
                                                        })}
                                                </p>
                                                <p className="font-normal">Colli <b>{elem.colli}</b>, Peso <b>{elem.peso}</b> kg ±</p>
                                                <div className='flex items-center gap-1'>
                                                    <div className="flex flex-row min-w-[140px] bg-[#d6e03d] mt-[15px]  h-[30px] py-[2px] px-[5px] text-[18px] rounded-[5px] items-center justify-center">
                                                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoPrezzo.png`} className='w-[20px] h-[25px]' /> <b className='ml-1'>€ {formatNumber(Number(elem.prezzo))} + iva </b>
                                                    </div>
                                                    {(elem.promo && elem.code === "S" )&&
                                                        <div className="bg-[#009ec9] text-white rounded-[3px] p-[2px] text-[11px] font-normal  mt-[9px]">
                                                            <span className='m-0 p-0'>Promo {elem.percentualePromo} %</span>
                                                        </div>
                                                    }
                                                </div>
                                                <p className="bg-[#f1f1f1] font-normal mt-[15px] w-[75%]">
                                                    {elem.note}
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                    <hr className='border border-[#d6e03d] mt-[23px]' />
                                    <div className="flex justify-end mt-[6px] gap-3">
                                        {elem.pdfTemplate != "" && <a href={`https://tipografiaformer.it/listino/template/${elem.pdfTemplate}`} className="flex min-w-[100px] gap-1 p-[4px] rounded-[5px] bg-[#ffe055] cursor-pointer " target='_blank'>
                                            <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoInfo16.png`} />
                                            <span className='min-w-[95px]'>
                                                Scarica il Template
                                            </span>
                                        </a>}
                                        <a className="flex gap-1 p-[4px] rounded-[5px] bg-[#ffe055] cursor-pointer" onClick={() => handleRetornaProdotto(i, String(elem.nomeUrl))}>
                                            <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCestinoGo16.png`} />
                                            <span className=' min-w-[175px]'>
                                                Elimina dal carrello e vai al Prodotto
                                            </span>
                                        </a>
                                        <a onClick={() => deleteItem(i)} className="flex gap-1 p-[4px] rounded-[5px] bg-[#ffe055] cursor-pointer">
                                            <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCestino16.png`} />
                                            <span className='min-w-[100px]'>
                                                Elimina dal carrello
                                            </span>
                                        </a>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })}
            </div>
            {
                (step == 5 && handleOperationFrame) &&
                <div>
                    <a className="w-95 flex justify-end hover:underline cursor-pointer" style={{ 'fontSize': 12, 'margin': 10 }} onClick={() => handleOperationFrame(enOperationFrame.reliadUrl, 'carrello')}>
                        Modifica
                    </a>
                </div>
            }
        </div >
    )
}

export default AcordionCarrello