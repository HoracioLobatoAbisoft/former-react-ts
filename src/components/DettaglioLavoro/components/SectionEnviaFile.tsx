import { GLOBAL_CONFIG } from "../../../_config/global";
import Divider from '@mui/material/Divider';

type PropsEnviaFile = {
    selectedFile: File | null;
    setSelectedFIle: React.Dispatch<React.SetStateAction<File | null>>;
    idInput: string;
    uploadOk: boolean;
    setUploadOk: React.Dispatch<React.SetStateAction<boolean>>;
    uploadOkStr: string;
    setUploadOkStr: React.Dispatch<React.SetStateAction<string>>;
    clearSelectFile: (idElement: string) => void
}

const SectionEnviaFile = ({ selectedFile, setSelectedFIle, idInput, setUploadOk, uploadOk, setUploadOkStr, uploadOkStr, clearSelectFile }: PropsEnviaFile) => {

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            if (selectedFile.type === 'application/pdf') {
                setSelectedFIle(selectedFile);
                // Hacer algo con el archivo PDF seleccionado
            } else {
                alert('Por favor, selecciona un archivo PDF válido.');
            }
        }
    };
    return (
        <div className="w-full flex flex-col gap-2">
            <div className="flex gap-2 py-[10px]">
                <input
                    type="file"
                    hidden
                    accept=".pdf"
                    onChange={handleFileSelect}
                    style={{ display: 'none' }}

                    id={idInput}
                    ref={(input) => input && input.setAttribute('multiple', 'false')}
                />
                <button className="text-[11px]  h-[30px] rounded-[5px] border-[2px] border-[#000] px-[6px] bg-[#f0f0f0]" onClick={() => document.getElementById(idInput)?.click()}>Scegli File (Max 50Mb)</button>
            </div>
            {selectedFile != null ?
                <div className="w-[399px] mt-[2px] flex justify-between  border-[1px] border-[#ededed] " >
                    <div className="p-[10px] border-r border-r-[#ededed]">
                        <img src={"https://www.tipografiaformer.it/CuteWebUI_Uploader_Resource.axd?type=file&file=circle.png&_ver=638299872000000000"} width="16" height="16" className=""></img>
                    </div>
                    <p className="p-[10px]">
                        {selectedFile.name}
                    </p>
                    {uploadOkStr === 'ok' ?
                        <button className="p-[10px] border-l border-l-[#ededed] " onClick={() => { }}>
                            <img src={"https://www.tipografiaformer.it/CuteWebUI_Uploader_Resource.axd?type=file&file=uploadok.png&_ver=638303634931082757"} width="16" height="16"></img>
                        </button>
                        :
                        <button className="p-[10px] border-l border-l-[#ededed] " onClick={() => { setSelectedFIle(null); clearSelectFile(idInput) }}>
                            <img src={"https://www.tipografiaformer.it/CuteWebUI_Uploader_Resource.axd?type=file&file=stop.png&_ver=638299872000000000"} width="16" height="16"></img>
                        </button>

                    }
                </div> : null
            }
            {uploadOk === true ?
                <div className="ml-[10px] w-[400px] text-center text-[13px] " style={{ background: 'linear-gradient(0deg, rgba(5,199,5,1) 0%, rgba(20,171,21,1) 15%, rgba(56,128,57,1) 45%, rgba(56,128,57,1) 56%, rgba(45,156,44,1) 90%, rgba(4,164,10,1) 100%)' }}>100%</div> : null
            }
            {/* <p className="p-[10px]">Uploading Doc1.pdf. 53.9 KB of 53.9 KB at 1458KB/s; 1 seconds remaining</p> */}
            {/* <div className="">
                    <button className="text-[14px] h-[px] rounded-[2px] border-[.5px] border-[#aaa] px-[6px] bg-[#f0f0f0]">Anulla</button>
                </div> */}
        </div>
    )
}

export default SectionEnviaFile;