import { useState } from "react";
import { GLOBAL_CONFIG } from "../../../_config/global";
import { useNavigate } from "react-router-dom";
import SectionEnviaFile from "./SectionEnviaFile";
import { DataGetDetaglioLavoro } from "../interfaces/GetDetaglioLavoro";
type RowFileEnviatoProps = {
    dataLavoro: DataGetDetaglioLavoro | undefined;
    selectedFronte: File | null;
    setSelectedFronte: React.Dispatch<React.SetStateAction<File | null>>;
    selectedRetro: File | null;
    setSelectedRetro: React.Dispatch<React.SetStateAction<File | null>>;
    handlePutUploadFileLavoro: () => Promise<void>;
    uploadOk: boolean ;
    setUploadOk: React.Dispatch<React.SetStateAction<boolean>>;
    uploadOkStr: string;
    setUploadOkStr: React.Dispatch<React.SetStateAction<string>>

}

const RowFileEnviato = ({ dataLavoro,selectedFronte,setSelectedFronte,selectedRetro,setSelectedRetro,handlePutUploadFileLavoro,setUploadOk,uploadOk,setUploadOkStr,uploadOkStr }: RowFileEnviatoProps) => {
    const navigate = useNavigate()

    return (
        <div className="font-['Arial']">
            <h4 className="w-full bg-[#f58220] text-white uppercase   mt-[5px] mb-[10px] pt-[2px] pl-[20px] text-[12px] font-bold flex justify-between">
                Invia i file direttamente
                <a href="" className="flex items-end text-[10px] font-[400]\ p-[3px] hover:underline text-white rounded-[5px]">
                    <img src={GLOBAL_CONFIG.IMG_IP + "/img/icoUploadW16.png"} />
                    <b>Indicazioni su come inviarci i file</b>
                </a>
            </h4>
            <div className="mt-[10px] border-[1px] border-[#aaa] rounded-[5px] ">
                <p className="text-[11px] p-[10px]">
                    Scegli i file dal tuo computer e premi il tasto <b>Invia File</b>. Non uscire da questa pagina finchè il caricamento non è terminato.
                </p>
                <div className="w-full flex gap-3 pb-[10px]">
                    <div className="w-[160px]  flex items-center justify-center p-[10px] bg">
                        <button className="bg-[red] text-white flex justify-center uppercase text-[11px] font-bold leading-[30px] w-[120px] h-[30px] ml-[3px] text-center rounded"onClick={()=>handlePutUploadFileLavoro()}><img src={GLOBAL_CONFIG.IMG_IP + "/img/icoupload20w.png"} /> Invia File</button>
                        
                    </div>
                    <div className="text-[11px] flex flex-col items-end">
                        <div className="flex items-center gap-2">
                            <p className="p-[10px]"><b>Fronte: </b></p>
                            <img src={GLOBAL_CONFIG.IMG_IP + "/img/icoFileTypePDF.png"} className="h-[16px] mr-[1px] ml-[3px]"></img>
                            <SectionEnviaFile selectedFile={selectedFronte} setSelectedFIle={setSelectedFronte} idInput="fronte" uploadOk={uploadOk} setUploadOk={setUploadOk} uploadOkStr={uploadOkStr} setUploadOkStr={setUploadOkStr}/>
                        </div>
                        {dataLavoro?.fronteRetro ?
                            <div className="flex items-center gap-2">
                                <p className="p-[10px]"><b>Retro: </b></p>
                                <img src={GLOBAL_CONFIG.IMG_IP + "/img/icoFileTypePDF.png"} className="h-[16px] mr-[1px] ml-[3px]"></img>
                                <SectionEnviaFile selectedFile={selectedRetro} setSelectedFIle={setSelectedRetro} idInput="retro" uploadOk={uploadOk} setUploadOk={setUploadOk} uploadOkStr={uploadOkStr} setUploadOkStr={setUploadOkStr}/>
                            </div>
                            : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RowFileEnviato;