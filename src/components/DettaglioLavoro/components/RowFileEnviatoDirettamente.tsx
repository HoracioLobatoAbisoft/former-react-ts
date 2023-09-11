import { useRef, useState } from "react";
import { GLOBAL_CONFIG } from "../../../_config/global";
import { useNavigate } from "react-router-dom";
type RowFileEnviatoDirettamenteProps = {
    type: string;
    nome: string;
}

const RowFileEnviatoDirettamente = ({type, nome}: RowFileEnviatoDirettamenteProps) => {
    const navigate = useNavigate()
    const ref = useRef<HTMLInputElement>(null);
    // 1. add state for tracking the selected files
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    // 2. pass the click event to the hidden input element to trigger the file selection.
    const handleClick = () => {
        ref.current?.click();
    };

    // 3. convert FileList to File[]
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.currentTarget.files ?? []);
        setSelectedFiles(files);
    };

    const removeFile = (index: number) => {
        setSelectedFiles(selectedFiles.filter((e:any,i:number)=>index != i))
    }
    return(
        <>
        <div className="w-full flex flex-row my-[10px] bg-[white] ">
            <div className="w-[100px] flex flex-row items-center justify-end">
                <span className="text-[11px] font-bold pr-[5px]">
                    {type}:
                </span>
                <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoFileTypePDF.png`} className="w-[16px] h-[16px]"/>
            </div>
            <div className="ml-[15px] text-[11px] ">
                <div className="w-full flex flex-row">
                    <label 
                        htmlFor="fileInput" 
                        className="border rounded-[5px] p-[10px] bg-[#f1f1f1]" 
                        onClick={()=>handleClick()}
                    >
                        Scegli File (Max 50Mb)
                    </label>
                    <input 
                        type="file"  
                        ref={ref}
                        name="fileInput" 
                        className="invisible" 
                        onChange={handleChange}
                    />
                </div>
                {
                    selectedFiles.map((file:any, i:number)=>{
                        return<>
                            <div className="w-full mt-[5px]">
                                <div className="flex flex-row text-[11px]  w-[400px] border">
                                    <div className="w-[36px] border-r p-[10px]">
                                        <img 
                                            src={`${GLOBAL_CONFIG.IMG_IP}/CuteWebUI_Uploader_Resource.axd?type=file&file=circle.png&_ver=638299872000000000`}
                                            className={`w-[11px] h-[11px]`}
                                        />
                                    </div>
                                    <div className="w-[328px] flex items-center">
                                        <span className="mx-[2px]">
                                            {file.name} .
                                        </span>
                                    </div>
                                    <div className="w-[36px] border-l p-[10px]">
                                        <img 
                                            src={`${GLOBAL_CONFIG.IMG_IP}/CuteWebUI_Uploader_Resource.axd?type=file&file=stop.png&_ver=638299872000000000`}
                                            className={`w-[11px] h-[11px]`}
                                            onClick={()=>removeFile(i)}
                                        />
                                    </div>
                                </div>
                                
                            </div>
                        </>
                    })
                }
                
            </div>
        </div>
        </>
    )
}

export default RowFileEnviatoDirettamente;