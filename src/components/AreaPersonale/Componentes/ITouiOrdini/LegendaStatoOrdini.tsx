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
                    <div className={`w-[25px] h-[25px] rounded border border-[#aaa] bg-[${color}]`}></div>
                </div>
                <div className="ml-[1px]">
                    <p className="font-bold text-[12px]">
                        {title}
                    </p>
                    <p className="text-[12px]">
                        {description}
                    </p>
                </div>
            </div>
        </>
    )
}

const LegendaStatoOrdini = () => {
    return (
        <>
        <div className="w-[790px] bg-[#ffffff] ">
            <p className="ml-[15px] mt-[15px] text-[12px]">
                Vuoi sapere cosa significano gli Stati degli Ordini? Ecco una spiegazione dettagliata di ogni stato.
            </p>
            <InfoRowColor
                color="#f58220"
                title={`INSERITO`}
                description={`Gli ordini in questo stato sono stati acquistati dal Carrello.`}
            />
            <InfoRowColor
                color="#e81616"
                title={`IN ATTESA DI PAGAMENTO`}
                description={` 
                    Gli ordini in questo stato sono in attesa che tu effettui il pagamento.
                    Puoi effettuare il pagamento dal dettaglio dell'ordine con pochi click.
                `}
            />
            <InfoRowColor
                color="#d6e03d"
                title={`IN LAVORAZIONE`}
                description={`
                    Gli ordini in questo stato sono entrati nel processo produttivo.
                `}
            />
            <InfoRowColor
                color="#b6ddc7"
                title={`IN CONSEGNA`}
                description={`
                    Gli ordini in questo stato sono in Consegna.
                `}
            />
            <InfoRowColor
                color="#3cb3c2"
                title={`CONSEGNATO`}
                description={`
                    Gli ordini in questo stato sono stati Ritirati o Consegnati come da tue indicazioni.
                `}
            />
            <InfoRowColor
                color="#00ff00"
                title={`PAGATO`}
                description={`
                    Gli ordini in questo stato sono stati pagati.
                `}
            />
            <div className="w-full justify-center my-[30px]">
                <p className="text-center text-[12px]">
                    ....................................................................................................................................
                </p>
            </div>
            <p className="text-[12px] ml-[15px] mb-[15px]">
                Vuoi sapere cosa significano i simboli accanto a ogni ordine? Ecco una spiegazione dettagliata di ogni simbolo.
            </p>
            <p className="flex flex-row items-center text-[12px] ml-[15px]  mt-[5px]">
                <img src={GLOBAL_CONFIG.IMG_IP + "/img/icoRitiroCli20.png"} alt="" />
                Per gli ordini con questo simbolo accanto hai scelto 
                <span className='mx-[2px] font-bold'>
                    RITIRO CLIENTE
                </span>
            </p>
            <p className="flex flex-row items-center text-[12px] ml-[15px]  mt-[5px]">
                <img src={GLOBAL_CONFIG.IMG_IP + "/img/icoCorriere20.png"} alt="" />
                Per gli ordini con questo simbolo accanto hai scelto di ricevere l'ordine tramite un 
                <span className='mx-[2px] font-bold'>
                    NOSTRO CORRIERE
                </span>
            </p>
            <p className="flex flex-row items-center text-[12px] ml-[15px]  mt-[5px]">
                <img src={GLOBAL_CONFIG.IMG_IP + "/img/icoPacco20.png"} alt="" />
                Per gli ordini con questo simbolo accanto hai scelto di inviare un 
                <span className='mx-[2px] font-bold'>
                    TUO CORRIERE
                </span>
                a ritirare l'ordine
            </p>

            <div className="w-full justify-center my-[30px]">
                <p className="text-center text-[12px]">
                    ....................................................................................................................................
                </p>
            </div>
            <p className="text-[12px] ml-[15px] mb-[15px]">
                Vuoi sapere cosa significano i colori della data di consegna? Ecco una spiegazione dettagliata di ogni colore
            </p>
            <div className='w-full flex flex-row items-center'>
                <div className='w-[250px]'>
                    <p className='ml-[15px]'>
                        <span className='text-[12px] p-[3px] bg-[orange] rounded font-bold'>
                            29/08/2023 Consegna PREVISTA
                        </span>
                    </p>
                   
                    
                </div>
                <div className='w-[490px]'>
                    <p className='text-[12px]'>
                    La data della consegna è quella  <b>PREVISTA</b> al momento dell'inserimento dell'ordine.
                    </p>
                </div>

            </div>
            <div className='w-full flex flex-row items-center'>
                <div className='w-[250px]'>
                    <p className='ml-[15px]'>
                        <span className='text-[12px] p-[3px] bg-[green] rounded font-bold text-[white]'>
                            29/08/2023 Consegna CONFERMATA
                        </span>
                    </p>
                </div>
                <div className='w-[490px]'>
                    <p className='text-[12px]'>
                    La data della consegna è <b>CONFERMATA </b> dal reparto produzione, e verrà rispettata salvo complicazioni eccezionali.
                    </p>
                </div>
            </div>
            <div className='w-full flex flex-row items-center mb-[15px]'>
                <div className='w-[250px]'>
                    <p className='ml-[15px]'>
                        <span className='text-[12px] p-[3px] bg-[purple] rounded font-bold text-[white]'>
                            29/08/2023 Consegna GARANTITA
                        </span>
                    </p>
                </div>
                <div className='w-[490px]'>
                    <p className='text-[12px]'>
                    La data della consegna è <b>GARANTITA </b> dal reparto produzione, e verrà rispettata salvo complicazioni eccezionali.
                    </p>
                </div>
            </div>

            
        </div>
       
        </>
    )
}

export default LegendaStatoOrdini;