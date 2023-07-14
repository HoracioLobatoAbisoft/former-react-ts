import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';
import { SvgImage } from '../../formProdottoV1/interface/svgImage';
import { ImageCustom } from '../../formProdottoV1/components/ImageCustom';
import '../styles/acorcdion.css'
import { ObjCarrello } from '../../formProdottoV1/interface/ObjCarrrello';
import { useState } from 'react';



type PropsAcordionCarrello = {
    ArrayLocalCarrello: ObjCarrello[];
    countLavori: number
    TotalPrezo: number
    handleDeleteAllCarrello: () => void
    handleRetornaProdotto: (i: number) => void
    setArrayLocalCarrello: React.Dispatch<React.SetStateAction<ObjCarrello[]>>;
    setStepperStep?: React.Dispatch<React.SetStateAction<number>> | null
    step?: number
}

const AcordionCarrello = ({ ArrayLocalCarrello, countLavori, TotalPrezo, handleDeleteAllCarrello, handleRetornaProdotto, setArrayLocalCarrello, step=0, setStepperStep=null }: PropsAcordionCarrello) => {
    
    const deleteItem = (id: number) => {
        ArrayLocalCarrello.splice(id, 1);
        setArrayLocalCarrello([...ArrayLocalCarrello]);
        localStorage.setItem('c', JSON.stringify([...ArrayLocalCarrello]))
    }
    return (
        <div className=" border border-[#aaa] rounded-[5px] ">
            <div className="flex justify-between pe-[10px] rounded-[5px]  bg-[#f1f1f1] ps-[30px]  py-[10px] h-[40px] text-[12px]">
                <h5 className="flex gap-1"><img src="https://localhost:44311/img/icoCarrello16.png" width={16} height={16} /> <b>CARRELLO ACQUISTI: {ArrayLocalCarrello.length}</b> Lavoro/i contenuti in questo Ordine.</h5>
                <a className="cursor-pointer flex hover:underline" onClick={() => { handleDeleteAllCarrello() }}><img src="https://localhost:44311/img/icoDel20.png" /> Svuota il Carrello</a>
            </div>
            <hr className=" border-[#aaa]" />
            <b className="text-[12px] ms-[10px]"> LAVORI NELL' ORDINE</b>
            <div className="px-[10px] pb-[10px] flex flex-col gap-1">
                {

                    ArrayLocalCarrello.map((elem, i) => {
                        return (
                            <Accordion key={i} >
                                <AccordionSummary className='carrello' aria-controls="panel1d-content" id="panel1d-header" sx={{ bgcolor: '#f1f1f1', border: 1, borderColor: '#aaa', borderRadius: 1, display: 'flex', alignItems: 'center' }}>
                                    <div className=" w-[10%] flex">
                                        <AddIcon sx={{ fontSize: 18 }} />
                                    </div>
                                    <div className=" w-full flex justify-between text-[11px] font-semibold">
                                        <div className="flex gap-3">
                                            <div className="bg-[#FF0000] w-[20px] h-[20px] border border-[#aaa] rounded-[3px]"></div>
                                            <p className="">{elem.qta} {elem.descrizione}</p>
                                        </div>
                                        <p className="">€ {elem.prezzo},00 + iva</p>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails sx={{ bgcolor: "", display: '', fontSize: 11, }}>
                                    <div className="w-full flex gap-2">
                                        {/* <ImageCustom svgImage={imgSvg} /> */}
                                        <img src={`https://tipografiaformer.it/listino/img/${elem.img}`} className='w-[100px] h-[100px] ' alt="" />
                                        <div className=" flex gap-5 w-full">
                                            <div className="">
                                                <p className="">Nome lavoro:</p>
                                                <p className="">Quantità:</p>
                                                <p className="">Prodotto:</p>
                                                <p className="">Dimensioni:</p>
                                                <p className="">Orientamento:</p>
                                                <p className="">Supporto:</p>
                                                <p className="">Stampa:</p>
                                                {Array.isArray(elem.stampaOPZ) &&
                                                    elem.stampaOPZ.map((e, i) => {
                                                        if (e !== "-") {
                                                            return (
                                                                <p className={`${i == 0 ? " " : "text-white"}`} key={e}>{i == 0 ? "Opzioni:" : "--"}</p>
                                                            );
                                                        }
                                                        return null;
                                                    })}

                                                <p className="">Imballo:</p>
                                                <p className="mt-[60px]"></p>
                                                <p className="">{elem.note && "Note:"}</p>
                                            </div>
                                            <div className="font-bold w-[50%]">
                                                <p className={`${elem.nome ? "" : "text-white"}`}>{elem.nome ? elem.nome : "--"} </p>
                                                <p className="">{elem.qta}</p>
                                                <p className="">{elem.prodotto}</p>
                                                <p className="">{elem.dimencioni}</p>
                                                <p className="">{elem.orientamiento}</p>
                                                <p className="">{elem.suporto}</p>
                                                <p className="">{elem.stampa}</p>
                                                <p className="">
                                                    {Array.isArray(elem.stampaOPZ) &&
                                                        elem.stampaOPZ.map(e => {
                                                            if (e !== "-") {
                                                                return (
                                                                    <ul className='list-disc' key={e}>
                                                                        <li>
                                                                            <b>{e}</b>
                                                                        </li>
                                                                    </ul>
                                                                );
                                                            }
                                                            return null;
                                                        })}
                                                </p>
                                                <p className="">Colli {elem.colli}, Peso {elem.peso} kg ±</p>
                                                <div className="flex mt-[15px] bg-[#d6e03d] w-[151px] h-[30px] p-[5px] text-[18px] rounded-[5px] items-center">
                                                    <img src="https://localhost:44311/img/icoPrezzo.png" className='w-[20px] h-[25px]' /> <b>€ {elem.prezzo},00 + iva</b>
                                                </div>
                                                <p className="bg-[#f1f1f1] font-normal mt-[15px]">
                                                    {elem.note}
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                    <hr className='border border-[#d6e03d] mt-[23px]' />
                                    <div className="flex justify-end mt-[6px] gap-3">
                                        <a className="flex gap-1 p-[4px] rounded-[5px] bg-[#ffe055] cursor-pointer"><img src="https://localhost:44311/img/icoInfo16.png" /> Scarica il Template</a>
                                        <a className="flex gap-1 p-[4px] rounded-[5px] bg-[#ffe055] cursor-pointer" onClick={() => handleRetornaProdotto(i)}><img src="https://localhost:44311/img/icoCestinoGo16.png" />Elimina dal carrello e vai al Prodotto</a>

                                        <a onClick={() => deleteItem(i)} className="flex gap-1 p-[4px] rounded-[5px] bg-[#ffe055] cursor-pointer"><img src="https://localhost:44311/img/icoCestino16.png" />Elimina dal carrello</a>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })}

            </div>
            {
                (step !=0 && setStepperStep!=null) && 
                <div>
                    <a className="w-95 flex justify-end hover:underline cursor-pointer" style={{'fontSize':12, 'margin':10}} onClick={()=>setStepperStep(1)}>
                        Modifica
                    </a>
                </div>                                
            }            
        </div>
    )
}

export default AcordionCarrello