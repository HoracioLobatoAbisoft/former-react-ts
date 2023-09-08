import { GLOBAL_CONFIG } from '../../../../_config/global';

interface InfoRowColorProps {
    children?: React.ReactNode;
    color: string;
    title: string;
    description: string;
    className?: string;
}

const InfoRowColor = ({color, title, description, className}:InfoRowColorProps) => {
    return(
        <>
            <div className="w-full flex flex-row mt-[15px]">
                <div className={`w-[30px] ml-[15px]`}>
                    <div className={`w-[25px] h-[25px] rounded border border-[#aaa] bg-[${(color).toLocaleLowerCase()}]`}></div>
                </div>
                <div className="ml-[1px]">
                    <p className="font-bold text-[12px]">
                        {title}
                    </p>
                    <p className="text-[12px]" dangerouslySetInnerHTML={{ __html: String(description) }}>
                        
                    </p>
                </div>
            </div>
        </>
    )
}

interface CustomSpanProps {
    text: string;
}

const CustomSpan = ({text}: CustomSpanProps)=>{
    return<>
        <span className='text-[white] font-bold text-center px-[10px] py-[5px] bg-[#aaaaaa] rounded-[3px] m-[2px] text-[11px]'>
            {text}
        </span>
    </>
}

const LegendaStatoLavori = () => {
    return (
        <>
        <div className="w-[790px] bg-[#ffffff] ">
            <div className='w-full flex flex-row justify-center mt-[10px]'>
                <CustomSpan text={'1) Aggiungi al Carrello'}/>
                <CustomSpan text={'2) ORDINA'}/>
                <CustomSpan text={'3) Effettua il Pagamento'}/>
                <CustomSpan text={'4) Allega i File'}/>
            </div>
            <div className='w-full flex flex-row justify-center'>
                <CustomSpan text={'5) Noi verifichiamo i File'}/>
                <CustomSpan text={'6) Realizziamo il Prodotto'}/>
                <CustomSpan text={'7) Ricevi il tuo Ordine'}/>
            </div>
            <div className='w-full my-[10px]'>
                <p className='text text-[11px] ml-[10px]'>
                    Vuoi sapere cosa significano gli 
                    <b className='ml-[2px]'>
                        Stati dei Lavori
                    </b>? Ecco una spiegazione dettagliata di ogni stato.
                </p>
            </div>

            <InfoRowColor
                color="#E81616"
                title={`IN ATTESA DI PAGAMENTO`}
                description={`I lavori in questo stato sono pronti per essere messi in produzione e attendono solamente che tu effettui il pagamento.`}
            />
            <InfoRowColor
                color="#FF0000"
                title={`IN ATTESA INVIO FILE`}
                description={` 
                I lavori in questo stato sono in attesa che vengano <b> Allegati i file </b>. Puoi effettuare questa operazione cliccando sul link <b>Vai al Dettaglio</b> <br/> oppure cliccando sul link Invia i File
                `}
            />
            <InfoRowColor
                color="#F58220"
                title={`IN ATTESA DI VERIFICA FILE`}
                description={`
                    
I lavori in questo stato sono in attesa che l'integrità e la congruenza del formato dei file che ci hai inviato venga verificata dal sistema
                `}
            />
            <InfoRowColor
                color="#D6E03D"
                title={`REGISTRATO`}
                description={`
                    I lavori in questo stato sono in produzione, non possono essere modificati e stanno per essere schedulati per la stampa.
                `}
            />
            <InfoRowColor
                color="#646464"
                title={`IN SOSPESO`}
                description={`
                    I lavori in questo stato sono sospesi per vostra o nostra comunicazione.
                `}
            />
            <InfoRowColor
                color="#FFF500"
                title={`IN CODA DI STAMPA`}
                description={`
                    I lavori in questo stato sono nel processo produttivo.
                `}
            />
            <InfoRowColor
                color="#DEDEDE"
                title={`IN STAMPA`}
                description={`
                    I lavori in questo stato sono nel processo produttivo.
                `}
            />
            <InfoRowColor
                color="#DEDEDE"
                title={`IN ATTESA DI FINITURA`}
                description={`
                    I lavori in questo stato sono nel processo produttivo.
                `}
            />
            <InfoRowColor
                color="#DEDEDE"
                title={`INIZIATA FINITURA SU COMMESSA`}
                description={`
                    I lavori in questo stato sono nel processo produttivo.
                `}
            />
            <InfoRowColor
                color="#DEDEDE"
                title={`INIZIATA FINITURA SU COMMESSA`}
                description={`
                    I lavori in questo stato sono nel processo produttivo.
                `}
            />
            <InfoRowColor
                color="#DEDEDE"
                title={`TERMINATA FINITURA SU COMMESSA`}
                description={`
                    I lavori in questo stato sono nel processo produttivo.
                `}
            />
            <InfoRowColor
                color="#DEDEDE"
                title={`INIZIATA FINITURA SU PRODOTTO`}
                description={`
                    I lavori in questo stato sono nel processo produttivo.
                `}
            />
            <InfoRowColor
                color="#DEDEDE"
                title={`TERMINATA FINITURA SU PRODOTTO`}
                description={`
                    I lavori in questo stato sono nel processo produttivo.
                `}
            />
            <InfoRowColor
                color="#D7EDFB"
                title={`IN IMBALLAGGIO`}
                description={`
                    I lavori in questo stato vengono sottoposti al controllo qualità per essere imballati e spediti.
                `}
            />
            <InfoRowColor
                color="#D7EDFB"
                title={`IN IMBALLAGGIO CORRIERE`}
                description={`
                    I lavori in questo stato vengono sottoposti al controllo qualità per essere imballati e spediti con il corriere scelto.
                `}
            />
             <InfoRowColor
                color="#75C5F0"
                title={`PRONTO PER IL RITIRO`}
                description={`
                    I lavori in questo stato sono pronti per essere ritirati presso la nostra sede (se concordato).
                `}
            />
            	
            <InfoRowColor
                color="#F075EC"
                title={`USCITO DAL MAGAZZINO`}
                description={`
                    I lavori in questo stato sono in transito verso l'indirizzo di spedizione.
                `}
            />
            <InfoRowColor
                color="#B6DDC7"
                title={`IN CONSEGNA`}
                description={`
                    I lavori in questo stato sono in transito verso l'indirizzo di spedizione.
                `}
            />
            <InfoRowColor
                color="#3CB3C2"
                title={`CONSEGNATO`}
                description={`
                    I lavori in questo stato sono stati consegnati al destinatario.
                `}
            />
            <InfoRowColor
                color="#00FF00"
                title={`ACCONTO`}
                description={`
                    Per questi lavori è stato corrisposto solo un acconto.
                `}
            />
             <InfoRowColor
                color="#00FF00"
                title={`PAGATO`}
                description={`
                    I lavori in questo stato risultano interamente saldati.
                `}
            />
             <InfoRowColor
                color="white"
                title={`RIFIUTATO`}
                description={`
                    I lavori in questo stato sono stati rifiutati per vostra o nostra comunicazione.
                `}
            />
            <InfoRowColor
                color="white"
                title={`ELIMINATO`}
                description={`
                    I lavori in questo stato sono stati eliminati per vostra o nostra comunicazione.
                `}
            />
            <div className='w-full my-[10px]'>
                <br/>
            </div>

            
        </div>
       
        </>
    )
}

export default LegendaStatoLavori;