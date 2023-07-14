import React from 'react'
import TotaleProvvisorio from './TotaleProvvisorio'
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import Container from '@mui/material/Container';
import { Grid, TextField, Button } from '@mui/material';
import { DataGetTotaleProvisorio } from "../Interfaces/totaleProvvisorio";
type PropsScegliIlPagamento = {
    TotaleProvisorio: DataGetTotaleProvisorio | undefined
    setStepperStep: React.Dispatch<React.SetStateAction<number>>
    changebuttonstep: (number: number) => string;
    setSteptext: React.Dispatch<React.SetStateAction<string>>
    step: number
}
const ScegliIlPagamento = ({ TotaleProvisorio, setStepperStep, changebuttonstep, setSteptext, step}:PropsScegliIlPagamento) => {
    return (
        <div className='flex gap-5'>
            <div className="w-[73%]">
                <h2 className='text-[14px] font-bold flex gap-2'><img src="https://localhost:44311/img/icoPrezzo16.png" className='w-[13px] h-[16px]' /> Scegli il Pagamento</h2>
                <hr className='my-[5px] border-[1px]'/>
                <div className="border border-[#aaa] rounded-[5px] px-[10px] py-[10px]">
                    <div className="flex gap-2">
                        <span className='text-[#68af68]'>✔</span>
                        <img src="https://localhost:44311/img/payment/icoPP.png" className='w-[32pxpx] h-[32px]' />
                        <div className="">
                            <input type="radio" />
                            <label htmlFor="" className='text-[14px] font-bold ml-[3px]'>PayPal,</label>
                            <p className='text-[12px]'>Utilizza il tuo conto PayPal o una Carta di Credito per pagare il tuo ordine.</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <span className='text-[#68af68]'>✔</span>
                        <img src="https://localhost:44311/img/payment/icoBB.png" className='w-[32pxpx] h-[32px]' />
                        <div className="">
                            <input type="radio" />
                            <label htmlFor="" className='text-[14px] font-bold ml-[3px]'>Bonifico Bancario Anticipato,</label>
                            <p className='text-[12px]'>Per i pagamenti tramite Bonifico Bancario la stampa inizierà solo dopo l' avvenuto accredito. Di conseguenza la consegna slitterà di 2-3 giorni.</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <span className='text-[#68af68]'>✔</span>
                        <img src="https://localhost:44311/img/payment/icoContrassegno.png" className='w-[32pxpx] h-[32px]' />
                        <div className="">
                            <input type="radio" />
                            <label htmlFor="" className='text-[14px] font-bold ml-[3px]'>Contrassegno,</label>
                            <p className="text-[12px]">Paga direttamente al momento del ritiro del pacco. (* Può comportare una maggiorazione di € 5,00)</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <span className='text-[#68af68]'>✔</span>
                        <img src="https://localhost:44311/img/payment/icoBB60.png" className='w-[32pxpx] h-[32px]' />
                        <div className="">
                            <input type="radio" />
                            <label htmlFor="" className='text-[14px] font-bold ml-[3px]'>60 giorni data fattura,</label>
                            <p className="text-[12px]">Effettua un Bonifico Bancario a 60 giorni dalla data della fattura</p>
                        </div>
                    </div>
                </div>
                <div className="border border-[#aaa] rounded-[5px] px-[10px] py-[10px] mt-[10px] flex flex-col gap-4">
                    <h2 className="flex gap-3"><img src="https://localhost:44311/img/icoCoupon20.png" className='w-[16px] h-[16px]' /><span className="px-[3px] bg-[#1aaf5d] text-[#fff] text-[14px] rounded-[3px] font-[400]">COUPON DI SCONTO</span></h2>
                    <div className=" flex gap-3 w-full justify-center">
                        <p className="text-[12px]">Hai un Coupon di Sconto? Inserisci qui il codice e ti verrà applicato</p>
                        <input type="text" className="border rounded-[2px] border-[#000]  h-[21px]" />
                        <a className="text-[12px] bg-[#f58220] h-[20px] py-[2px] px-[4px]">Applica</a>
                    </div>
                    <div className="flex justify-end gap-2 text-[12px]">
                        <a className='flex  cursor-pointer'><img src="https://localhost:44311/img/icoMieiCoupon20.png" className='w-[16px] h-[12px] ' /> Vai ai tuoi Coupon di Sconto</a>
                        <a className='flex cursor-pointer'><img src="https://localhost:44311/img/icoInfo16.png" className='w-[16px] h-[16px] ' /> Cosa e' un Coupon di sconto?</a>
                    </div>
                </div>
                <p className=" text-[12px] mt-[15px]">Se vuoi completare l'acquisto clicca su <b>RIVEDI E ACQUISTA</b> </p>
                <p className=" text-[12px] mt-[10px]">Se vuoi ordinare altri prodotti clicca qui e <span className='text-[16px] text-[#f58220] font-bold cursor-pointer'>Continua gli acquisti.</span> </p>
            </div>
            <div className="w-[23%]">
                <TotaleProvvisorio  TotaleProvisorio={TotaleProvisorio} setStepperStep={setStepperStep} changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step}/>
            </div>
        </div>
    )
}

export default ScegliIlPagamento