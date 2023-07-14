import React, { useState } from 'react'
import TotaleProvvisorio from './TotaleProvvisorio'
import Container from '@mui/material/Container';
import { DataGetTotaleProvisorio } from '../Interfaces/totaleProvvisorio';

type PropsTotale ={
    TotaleProvisorio: DataGetTotaleProvisorio | undefined
    setStepperStep: React.Dispatch<React.SetStateAction<number>>
    changebuttonstep: (number: number) => string;
    setSteptext: React.Dispatch<React.SetStateAction<string>>
    step:number
}

const AllegaIFile = ({TotaleProvisorio, setStepperStep, changebuttonstep, setSteptext, step}:PropsTotale) => {

    
    return (
        <div className='flex gap-5  '>
            <div className="w-[73%]">
                <h2 className="text-[14px] font-bold border-b-[1px]  border-[#aaa] mb-[10px] flex gap-1"><img src="https://localhost:44311/img/icoAttach16.png" className='w-[16px] h-[16px]'/>Allega i file</h2>

                <Container sx={{ border: '1px solid #aaa', width: '95%',borderRadius:'5px',p:'20px' }}>
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
                <br></br>
                <h2 className='text-[11px] mb-[10px]'>
                    Se vuoi completare l'acquisto clicca su <strong>SCEGLI LA CONSEGNA</strong>
                </h2>
                
                <h2 className='text-[11px]'>
                    Se vuoi ordinare altri prodotti clicca qui e
                    <a style={{ 'color': '#f58220','cursor':"pointer",'fontSize': '16px'}}><strong> Continua gli acquisti.</strong></a>
                </h2>
            </div>
            <div className="w-[23%]">
                <TotaleProvvisorio  TotaleProvisorio={TotaleProvisorio} setStepperStep={setStepperStep} changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step}/>
            </div>
        </div>
    )
}

export default AllegaIFile