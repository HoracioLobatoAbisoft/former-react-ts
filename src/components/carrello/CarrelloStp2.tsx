import React from 'react'
import LoadingBackdrop from '../loadingBackdrop'
import AllegaIFile from './components/AllegaIFile'
import useCarrelloStep2 from './hooks/useCarrelloStep2'
import { Container } from '@mui/material'
import { GLOBAL_CONFIG } from '../../_config/global'
import TotaleProdotto from './components/TotaleProdotto'
import Stepper from './components/Stepper'
import ContinuaGliAcquisti from './components/ContinuaGliAcquisti'

const changebuttonstep = (step: number) => {
    let textreturn = "";
    if (step === 1) {
        textreturn = "REPILOGO";
    } else if (step === 2) {
        textreturn = "ALLEGA I FILE";
    } else if (step === 3) {
        textreturn = "SCEGLI LA CONSEGNA";
    } else if (step === 4) {
        textreturn = "SCEGLI IL PAGAMENTO";
    } else if (step === 5) {
        textreturn = "RIVEDI E ACQUISTA";
    } else if (step === 6) {

        textreturn = "ACQUISTA ORA"
    } else if (step === 7) {
    }
    return textreturn;
}
const CarrelloStp2 = () => {

    const { TotaleProvisorio, handleTotaleChange, loading } = useCarrelloStep2();

    return (
        <div className="w-full h-full">
            <LoadingBackdrop
                isOpen={loading}
                x={1}
                sx={{
                    bgcolor: "rgba(225,225,225,0.4)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    pr: 8,
                    zIndex: 1000
                }}
            />
            <Stepper stepNumber={2} />
            <div className='flex gap-5  '>
                <div className="w-[73%]">
                    <div className="flex w-full justify-between text-[13px]">
                        <h3 className="text-[14px] font-bold  flex gap-1"><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCarrello16.png`} width={16} height={16} /> Allega i file </h3>
                        <span className="bg-[#009ec9] font-bold uppercase px-[2px] h-full text-white rounded">React V^18.2.0</span>
                    </div>
                    <hr className="border border-[#aaa] my-1" />
                    <Container sx={{ border: '1px solid #aaa', width: '100%', borderRadius: '5px', p: '20px' }}>
                        <center>
                            <h2 className='text-[12px] bg-[#d6e03d] w-[138px] p-[4px] font-bold'>
                                COME ALLEGARE I FILE
                            </h2>
                        </center>

                        <br></br>
                        <p className='text-[12px]'>
                            Una volta completato l'ordine, ed eventualmente effettuato il pagamento (se sceglierai una modalità di pagamento anticipata), potrai allegare i file PDF entrando nel dettaglio di ogni lavoro dalla sezione <b>'I tuoi ordini'.</b>
                        </p>
                    </Container>
                    <ContinuaGliAcquisti step={2} text='SCEGLI LA CONSEGNA' />

                </div>
                <div className="w-[23%]">
                    <TotaleProdotto TotaleProvisorio={TotaleProvisorio} handleTotaleChange={handleTotaleChange} textBtn={'SCEGLI LA CONSEGNA'} />

                </div>
            </div>
        </div>
    )
}

export default CarrelloStp2