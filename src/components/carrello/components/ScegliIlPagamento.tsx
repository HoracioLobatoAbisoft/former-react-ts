import React, { useEffect, useState } from 'react'
import TotaleProvvisorio from './TotaleProvvisorio'
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import Container from '@mui/material/Container';
import { Grid, TextField, Button } from '@mui/material';
import { DataGetTotaleProvisorio } from "../Interfaces/totaleProvvisorio";
import ContinuaGliAcquisti from './ContinuaGliAcquisti';
import { DataGetTipoPagamenti } from '../Interfaces/TipoPagamento';
import { DataGetAplicaCouponSconto } from '../Interfaces/CouponSconto';
import { ObjCarrello } from '../../formProdottoV1/interface/ObjCarrrello';
import { DataResponseGetUtente } from '../../../interface/Utente';
import { enOperationFrame } from '../../../enHelpers/enOperationFrame';
import ModalSegliPagamento from './ModalSegliPagamento';
import { GLOBAL_CONFIG } from '../../../_config/global';
import { httpGetMetodiPagamento } from '../services/Services';
type PropsScegliIlPagamento = {
    TotaleProvisorio: DataGetTotaleProvisorio | undefined
    setStepperStep: React.Dispatch<React.SetStateAction<number>>
    changebuttonstep: (number: number) => string;
    setSteptext: React.Dispatch<React.SetStateAction<string>>
    step: number;
    tipoPagamento: DataGetTipoPagamenti[]
    setRadioPagamento: React.Dispatch<React.SetStateAction<number>>;
    radioPagamento: number;
    getAplicaCouponSconto: (codice: string, tipoUtn: number | undefined, totalLavori: number, ordines: ObjCarrello[]) => Promise<DataGetAplicaCouponSconto>;
    setArrayCarrello: React.Dispatch<React.SetStateAction<ObjCarrello[]>>;
    dataUtente: DataResponseGetUtente | undefined;
    dataTotale: {
        TotalPrezo: number;
        TotalPeso: number;
        idUt: number;
        Colli: number;
    }
    arrayCarrello: ObjCarrello[];
    messageCoupon: string
    setMessageCoupon: React.Dispatch<React.SetStateAction<string>>;
    setShowInputCoupon: React.Dispatch<React.SetStateAction<boolean>>;
    showInputCoupon: boolean;
    getTotaleProvisorio: (idUt: number, TotalePeso: number, cero: number, TotalePrezzo: number, Sconto: number | null, tp: number, IdCorriere: number) => Promise<DataGetTotaleProvisorio | undefined>;
    setTotaleProvisorio: React.Dispatch<React.SetStateAction<DataGetTotaleProvisorio | undefined>>;
    handleRadioPagamento: (idIp: number) => Promise<void>;
    radio: number;
    handleAquistaOra: () => Promise<void>;
    setTipoPagamento: React.Dispatch<React.SetStateAction<DataGetTipoPagamenti[]>>;
    getMetodiPagamento: (IdUt: number, TotaleCarrello: number, IdMetodoConsegnaScelto: number) => Promise<DataGetTipoPagamenti[]>
}
const ScegliIlPagamento = ({ TotaleProvisorio, setStepperStep, changebuttonstep, setSteptext, step, tipoPagamento, radioPagamento, setRadioPagamento, getAplicaCouponSconto, setArrayCarrello, dataUtente, dataTotale, arrayCarrello, messageCoupon, setMessageCoupon, setShowInputCoupon, showInputCoupon, getTotaleProvisorio, setTotaleProvisorio, handleRadioPagamento, radio, handleAquistaOra, setTipoPagamento,getMetodiPagamento }: PropsScegliIlPagamento) => {

    const [codice, setCodice] = useState<string>('')
    const [openModal, setOpenModal] = useState<boolean>(false)
    const handleCodice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCodice(event.target.value)
    }

    const handleAplicaCouponSconto = async () => {
        const responseGetAplicaCouponSconto = await getAplicaCouponSconto(codice, dataUtente?.tipo, dataTotale.TotalPrezo, arrayCarrello)
        setMessageCoupon(responseGetAplicaCouponSconto.message);
        if (responseGetAplicaCouponSconto.newOrdines.length) {
            localStorage.setItem('sc', String(responseGetAplicaCouponSconto.importoFisso));
            if (dataUtente) {
                const scontoLocal = localStorage.getItem('sc');
                const responseCouponSconto = await getTotaleProvisorio(dataUtente.idUt, dataTotale.TotalPeso, 0, dataTotale.TotalPrezo, Number(scontoLocal), radioPagamento, radio)

                setTotaleProvisorio(responseCouponSconto);
            }
            setArrayCarrello(responseGetAplicaCouponSconto.newOrdines);
            localStorage.setItem('c', JSON.stringify(responseGetAplicaCouponSconto.newOrdines));
            localStorage.setItem('m', JSON.stringify(responseGetAplicaCouponSconto.message));
            setShowInputCoupon(responseGetAplicaCouponSconto.showInput);
        }

    }

    const handleITuoiCouponSconto = () => {
        window.parent.postMessage({ operation: enOperationFrame.redirectITuopiCouponSconto }, GLOBAL_CONFIG.IMG_IP);
    }

    const effectAsync = async () => {
        if (dataUtente) {
            const consLocal = localStorage.getItem('cons');
            
            const responseMetodiPagamento = await getMetodiPagamento(dataUtente.idUt, dataTotale.TotalPrezo, Number(consLocal) )
            setTipoPagamento(responseMetodiPagamento);
        }

    }

    useEffect(() => {
        const corr = tipoPagamento.find(x => x.idTipoPagamento == 5);
        //const colli = dataTotale.Colli;
        console.log(corr)
        localStorage.setItem('tp', String(corr?.titulo));
        localStorage.setItem('tpI', String(corr?.imgRif));
        localStorage.setItem('tpD', String(corr?.descrizione));
        localStorage.setItem('tppr', String(corr?.periodoPagamento));
        localStorage.setItem('tpDI', String(corr?.idTipoPagamento));
        localStorage.setItem('tpDI', String(corr?.idTipoPagamento));
        effectAsync();
        //localStorage.setItem('cll',String(colli));
    }, [])


    return (
        <div className='flex gap-5'>
            <div className="w-[73%]">
                <h2 className='text-[14px] font-bold flex gap-2'><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoPrezzo16.png"`} className='w-[13px] h-[16px]' /> Scegli il Pagamento</h2>
                <hr className='my-[5px] border-[1px]' />
                <div className="border border-[#aaa] rounded-[5px] px-[10px] py-[10px]">
                    {tipoPagamento.map((item, index) => (
                        <div className="flex gap-2" key={index}>
                            <span className={`${item.idTipoPagamento == radioPagamento ? 'text-[#68af68]' : 'text-[#fff]'}`}>✔</span>
                            <img src={`${GLOBAL_CONFIG.IMG_IP}/${item.imgRif}`} className='w-[32pxpx] h-[32px]' />
                            <div className="">
                                <input type="radio" onChange={() => handleRadioPagamento(item.idTipoPagamento)} checked={item.idTipoPagamento == radioPagamento} value={item.idTipoPagamento} />
                                <label htmlFor="" className='text-[14px] font-bold ml-[3px]'>{item.titulo} </label>
                                <p className='text-[12px]'>{item.descrizione} {item.idTipoPagamento === 8 ? "(* Può comportare una maggiorazione di € 5,00)" : null}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="border border-[#aaa] rounded-[5px] px-[10px] py-[10px] mt-[10px] flex flex-col gap-[6px]">
                    <h2 className="flex gap-2"><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCoupon20.png`} className='w-[16px] h-[16px] ms-[2px]' /><span className="px-[4px]  bg-[#1aaf5d] py-0 text-[#fff] text-[14px] rounded-[3px] font-[400]">COUPON DI SCONTO</span></h2>
                    {showInputCoupon == false && localStorage.getItem('m') == undefined ?
                        <div className=" flex gap-3 w-full justify-center">
                            <p className="text-[11.5px]">Hai un Coupon di Sconto? Inserisci qui il codice e ti verrà applicato</p>
                            <input type="text" className="ms-4 border rounded-[2px] border-[#000]  h-[21px]" onChange={handleCodice} maxLength={30} />
                            <a className="text-[12px] ms-1 bg-[#f58220] h-[20px] py-[2px] px-[4px] cursor-pointer" onClick={handleAplicaCouponSconto}>Applica</a>
                        </div> : null
                    }
                    <p className="text-[12px] flex justify-center text-[red] font-bold">{localStorage.getItem('m') ? localStorage.getItem('m') : messageCoupon}</p>
                    <div className="flex justify-end gap-2 text-[12px]">
                        <a className='flex  cursor-pointer hover:underline' onClick={handleITuoiCouponSconto}><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoMieiCoupon20.png`} className='w-[16px] h-[12px] ' /> Vai ai tuoi Coupon di Sconto</a>
                        <ModalSegliPagamento openModal={openModal} setOpenModal={setOpenModal} />
                        <a className='flex cursor-pointer hover:underline' onClick={() => setOpenModal(true)}><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoInfo16.png`} className='w-[16px] h-[16px] ' /> Cosa e' un Coupon di sconto?</a>
                    </div>
                </div>
                <ContinuaGliAcquisti changebuttonstep={changebuttonstep} step={step} />
            </div>
            <div className="w-[23%]">
                <TotaleProvvisorio TotaleProvisorio={TotaleProvisorio} setStepperStep={setStepperStep} changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step} handleAquistaOra={handleAquistaOra} />
            </div>
        </div>
    )
}

export default ScegliIlPagamento