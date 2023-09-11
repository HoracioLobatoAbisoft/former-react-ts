import { GLOBAL_CONFIG } from "../../../_config/global";
import { useNavigate } from "react-router-dom";
type RowFileEnviatoProps = {
    type: string;
    nome: string;
    idDettaglioLavoro: string;
}

const RowFileEnviato = ({type, nome, idDettaglioLavoro}: RowFileEnviatoProps) => {
    const navigate = useNavigate()

    return(
        <>
        <div className="w-full flex flex-row my-[10px] bg-[white] ">
            <div className="w-[100px] flex flex-row items-center justify-end">
                <span className="text-[11px] font-bold pr-[5px]">
                    {type}:
                </span>
                <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoFileTypePDF.png`} className="w-[16px] h-[16px]"/>
            </div>
            <span className="ml-[15px] text-[11px] hover:underline" onClick={()=>navigate(`/${idDettaglioLavoro}/dettaglio-lavoro`)}>
                {nome}
            </span>
        </div>
        </>
    )
}

export default RowFileEnviato;