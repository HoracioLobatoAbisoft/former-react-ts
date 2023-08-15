import React, { useState } from 'react'
import TotaleProvvisorio from './TotaleProvvisorio'
import Container from '@mui/material/Container';
import { DataGetTotaleProvisorio } from '../Interfaces/totaleProvvisorio';
import ContinuaGliAcquisti from './ContinuaGliAcquisti';
import { GLOBAL_CONFIG } from '../../../_config/global';

type PropsTotale = {
    TotaleProvisorio: DataGetTotaleProvisorio | undefined
    setStepperStep: React.Dispatch<React.SetStateAction<number>>
    changebuttonstep: (number: number) => string;
    setSteptext: React.Dispatch<React.SetStateAction<string>>
    step: number;
    handleAquistaOra: () => Promise<void>
}

const AllegaIFile = ({ TotaleProvisorio, setStepperStep, changebuttonstep, setSteptext, step,handleAquistaOra }: PropsTotale) => {


    return (
        <div className='flex gap-5  '>
            <div className="w-[73%]">
                <h2 className="text-[14px] font-bold border-b-[1px]  border-[#aaa] mb-[10px] flex gap-1"><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoAttach16.png`} className='w-[16px] h-[16px]' />Allega i file</h2>

                <Container sx={{ border: '1px solid #aaa', width: '95%', borderRadius: '5px', p: '20px' }}>
                    <center>
                        <h2 className='text-[12px] bg-[#d6e03d] w-[138px] p-[4px] font-bold'>
                            COME ALLEGARE I FILE
                        </h2>
                    </center>

                    <br></br>
                    <p className='text-[12px]'>
                        Una volta completato l'ordine, ed eventualmente effettuato il pagamento (se sceglierai una modalità di pagamento anticipata), potrai allegare i file PDF entrando nel dettaglio di ogni lavoro dalla sezione <b>'I tuoi lavori'.</b>
                    </p>
                </Container>
                <ContinuaGliAcquisti changebuttonstep={changebuttonstep} step={step}/>
            </div>
            <div className="w-[23%]">
                <TotaleProvvisorio TotaleProvisorio={TotaleProvisorio} setStepperStep={setStepperStep} changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step}  handleAquistaOra={handleAquistaOra}/>
            </div>
        </div>
    )
}

export default AllegaIFile