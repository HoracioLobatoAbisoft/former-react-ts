import { Link } from "react-router-dom";
import RowFileEnviato from "./RowFileEnviato";
import { DataGetDetaglioLavoro } from "../interfaces/GetDetaglioLavoro";
type SectionFileInviatoProps = {
    dataLavoro: DataGetDetaglioLavoro | undefined
}



const SectionFileInviato = ({dataLavoro }: SectionFileInviatoProps) => {
    return (
        <>
            <h5 className="w-full bg-[#f58220] text-white uppercase leading-[22px]  mt-[5px] mb-[10px] pt-[2px] pl-[20px] text-[12px] font-bold ">
                INVIO FILE
            </h5>
            <div className="mt-[10px] border-[1px] border-[#aaa] rounded-[5px] flex items-center justify-center text-[11px] text-center p-[10px]">
                <a >
                    Prima di inviare i file devi effettuare il pagamento dell'ordine in cui hai inserito questo lavoro. <br /><br /><Link to={`/dettaglioOrdine/${dataLavoro?.idConsegna}`} className="hover:underline"><b>CLICCA QUI</b></Link> per andare al dettaglio dell'ordine<br />
                </a>
            </div>
        </>
    )
}

export default SectionFileInviato;