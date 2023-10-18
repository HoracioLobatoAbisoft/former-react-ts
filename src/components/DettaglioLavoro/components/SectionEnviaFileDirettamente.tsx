import { GLOBAL_CONFIG } from "../../../_config/global";
import RowFileEnviatoDirettamente from "./RowFileEnviatoDirettamente";


type SectionEnviaFileDirettamenteProps = {

}
const SectionEnviaFileDirettamente = ({ }: SectionEnviaFileDirettamenteProps) => {
    return (<>
        <div className="w-full bg-[orange] my-[5px] flex justify-between">
            <div>
                <span className="text-[14px] text-[white] font-bold ml-[20px]">
                    INVIO FILE
                </span>
            </div>
            <div className="flex flex-row justify-center items-center">
                <span className="text-[14px] text-[white] font-bold mr-[20px]">
                    INVIO FILE
                </span>
            </div>

        </div>
        <div className="w-full rounded-[5px] border justify-center items-center p-[10px] my-[5px]">
            <div className="text-justify text-[11px] my-[10px]">
                <p>
                    Scegli i file dal tuo computer e premi il tasto <b>Invia File</b> Non uscire da questa pagina finchè il caricamento non è terminato.

                </p>
            </div>
            <div className="w-full flex flex-row">
                <div className="w-[140px] flex items-center justify-center">
                    <button className="flex flex-row justify-center items-center bg-[red] rounded-[5px] p-[5px]">
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoupload20w.png`} className="w-[22px] h-[22px]" />
                        <span className="font-bold text-[white] text-[11px] px-[2px]">
                            Invia File
                        </span>
                    </button>
                </div>
                <div className="w-[650px] bg-[red]">
                    <RowFileEnviatoDirettamente
                        nome="test"
                        type="Fronted"
                    />
                    <RowFileEnviatoDirettamente
                        nome="test"
                        type="Retro"
                    />

                </div>

            </div>
        </div>
    </>)
}

export default SectionEnviaFileDirettamente;