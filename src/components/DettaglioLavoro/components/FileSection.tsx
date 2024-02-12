import { GLOBAL_CONFIG } from "../../../_config/global";
import { DataGetDetaglioLavoro } from "../interfaces/GetDetaglioLavoro";
import SectionEnviaFile from "./SectionEnviaFile"
import SectionEnviaFileDirettamente from "./SectionEnviaFileDirettamente";
import SectionFileInviato from "./SectionFileInviato"
type FileSectionPros = {
    dataLavoro: DataGetDetaglioLavoro | undefined
}
const FileSection = ({ dataLavoro }: FileSectionPros) => {

    

    return (
        <div className="text-[11px]">
            <h5 className="w-full bg-[#f58220] text-white uppercase leading-[22px]  mt-[5px] mb-[10px] pt-[2px] pl-[20px] text-[12px] font-bold ">
                I FILE CHE CI HAI INVIATO
            </h5>
            <p className="">Qui trovi i file che ci hai inviato. Se i file sono presenti online puoi scaricarli cliccando sul link <b>Scarica <i>{'{e il Nome del File}'}</i></b>.</p>
            <div className="mt-[10px] border-[1px] border-[#aaa] rounded-[5px] pl-[5em]">
                <div className="flex items-center ">
                    <p className="p-[10px]"><b>Fronte: </b></p>
                    <img src={GLOBAL_CONFIG.IMG_IP + "/img/icoFileTypePDF.png"} className="h-[16px] mr-[2em]"></img>
                    <a href={GLOBAL_CONFIG.IMG_IP + "/" +dataLavoro?.hrefFronteHRef } target='_blank' className="flex  hover:underline" ><span className="flex gap-2" dangerouslySetInnerHTML={{ __html: String(dataLavoro?.hrefFronteInnerText) }}></span> </a>
                </div>
                {(dataLavoro?.fronteRetro && dataLavoro.sorgenteRetro > 0) ?
                    <div className="flex items-center ml-[4px]">
                        <p className="p-[10px]"><b>Retro: </b></p>
                        <img src={GLOBAL_CONFIG.IMG_IP + "/img/icoFileTypePDF.png"} className="h-[16px] mr-[2em]"></img>
                        <a href={GLOBAL_CONFIG.IMG_IP +"/" + dataLavoro?.hrefRetroHRef } target='_blank' className="flex  hover:underline  w-full"><span className="flex gap-2" dangerouslySetInnerHTML={{ __html: String(dataLavoro?.hrefRetroInnerText) }}></span></a>
                    </div>
                    : null
                }
            </div>
        </div>
    )
}

export default FileSection;