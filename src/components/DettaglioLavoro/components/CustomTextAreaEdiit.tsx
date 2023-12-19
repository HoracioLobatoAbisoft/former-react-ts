import { GLOBAL_CONFIG } from "../../../_config/global"
import { FormEditData, SectionEditable } from "../interfaces/PutEditNomeNote"

type PropsCustomTextArea = {
    sectionEditable: SectionEditable
    handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    handlePutModificaNoteNome: () => Promise<void>;
    clearEditSection: () => void;
    dataEdit: FormEditData;
}

const CustomTextAreaEdiit = ({sectionEditable,handleChange,handlePutModificaNoteNome,clearEditSection,dataEdit}:PropsCustomTextArea) => {
    return (
        <div className="w-full flex flex-row my-[5px] justify-center items-center">
            <div className="w-[590px] p-[20px] bg-[#2b2b2b]">
                <div className="w-full flex justify-center items-center">
                    <textarea className="h-[80px] w-[535px] text-[13px]" name={sectionEditable.name} onChange={handleChange}
                    value={sectionEditable.name == "nomeLavoro" ? String(dataEdit.nomeLavoro) : String(dataEdit.note)}>

                    </textarea>
                </div>
                <div className="w-full flex flex-row justify-center mt-[10px]">
                    <button
                        className="flex flex-row bg-[red] rounded mx-[2px] p-[5px]"
                        onClick={() => {handlePutModificaNoteNome()}}
                    >
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCheckOk20.png`} className="w-[16px] h-[16px]" />
                        <span className="text-[11px]">
                            Salva
                        </span>
                    </button>
                    <button
                        className="flex flex-row bg-[red] rounded mx-[2px] p-[5px]"
                        onClick={() => clearEditSection()}
                    >
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoClose20.png`} className="w-[16px] h-[16px]" />
                        <span className="text-[11px]">
                            Chuidi
                        </span>
                    </button>

                </div>

            </div>
        </div>
    )
}

export default CustomTextAreaEdiit