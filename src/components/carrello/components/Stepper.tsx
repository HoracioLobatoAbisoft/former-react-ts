import { GLOBAL_CONFIG } from "../../../_config/global";
import '../styles/imgInfo.css'
type PropsStep = {
    stepNumber: number
}



const Stepper = ({ stepNumber }: PropsStep) => {
    //const cphase3 = {`${GLOBAL_CONFIG.IMG_IP}/img/StrisciaCarrello_"+ cphase2 + ".png"  ;
    const phase = `${GLOBAL_CONFIG.IMG_IP}/img/StrisciaCarrello_${stepNumber}.png`;
    return (
        <div className="mt-[15px] mb-[10px]  flex justify-center relative " >
            <div className="hasTooltip">
                <img src={phase} className="" data-hasqtip="9" aria-describedby="qtip-9" />
                <div className="containTooltip">
                    <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCarrelloW.png`} className="imgToltip" width={25} height={25} />
                    <h4>Carrello</h4><br />
                    <b >1) Controlla il carrello</b><br />
                    Controlla i prodotti che hai inserito nel carrello e clicca su 'ALLEGA I FILE' per continuare<br />
                    <b >2) Allega i file</b><br />
                    I file si potranno allegare (per il momento) solo DOPO la conclusione dell'ordine. Clicca su 'SCEGLI LA CONSEGNA' per continuare<br />
                    <b >3) Scegli la Consegna</b><br />
                    Seleziona il tipo di consegna che desideri e clicca su 'SCEGLI IL PAGAMENTO' per continuare<br />
                    <b >4) Scegli il Pagamento</b><br />
                    Seleziona il tipo di forma di pagamento tra quelle disponibili e clicca su 'RIVEDI E ACQUISTA' per continuare<br />
                    <b >5) Completa l' Ordine</b><br />
                    Rivedi e controlla il tuo Ordine e clicca su 'ACQUISTA ORA' per completare l' Ordine
                </div>
            </div>
        </div>
    )
}

export default Stepper