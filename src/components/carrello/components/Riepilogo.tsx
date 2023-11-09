
import { useState } from "react"
import { ImageCustom } from '../../formProdottoV1/components/ImageCustom';
import { SvgImage } from '../../formProdottoV1/interface/svgImage';
import TotaleProvvisorio from './TotaleProvvisorio';
import AcordionCarrello from "./AcordionCarrello";
import { ObjCarrello } from "../../formProdottoV1/interface/ObjCarrrello";
import { DataGetTotaleProvisorio } from "../Interfaces/totaleProvvisorio";
import ContinuaGliAcquisti from "./ContinuaGliAcquisti";
import { GLOBAL_CONFIG } from "../../../_config/global";

type PropsRepilogo = {
    ArrayLocalCarrello: ObjCarrello[];
    TotaleProvisorio: DataGetTotaleProvisorio | undefined
    handleDeleteAllCarrello: () => void
    handleRetornaProdotto: (i: number, uri: string) => void
    setArrayLocalCarrello: React.Dispatch<React.SetStateAction<ObjCarrello[]>>
    deleteItem: (i: number) => void;
    setStepperStep: React.Dispatch<React.SetStateAction<number>>
    changebuttonstep: (number: number) => string;
    setSteptext: React.Dispatch<React.SetStateAction<string>>
    step: number;
    handleAquistaOra: () => Promise<void>;
}

// const Riepilogo = ({ ArrayLocalCarrello, countLavori, TotalPrezo, TotaleProvisorio, handleDeleteAllCarrello,handleRetornaProdotto, }: PropsRepilogo) => {
//     handleDeleteAllCarrello: () => void,
//     setArrayLocalCarrello : any
// }

// const Riepilogo = ({ ArrayLocalCarrello, TotaleProvisorio, handleDeleteAllCarrello, handleRetornaProdotto, setArrayLocalCarrello, deleteItem }: PropsRepilogo) => {
const Riepilogo = ({ ArrayLocalCarrello, TotaleProvisorio, handleDeleteAllCarrello, handleRetornaProdotto, setArrayLocalCarrello, setStepperStep, changebuttonstep, setSteptext, step, deleteItem ,handleAquistaOra}: PropsRepilogo) => {
    const [open, setOpen] = useState(false)
    return (
        <div className="flex gap-[50px]">
            <div className="w-[73%] ">
                <h3 className="flex gap-3"><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCarrello16.png`} width={16} height={16} /> CARRELLO</h3>
                <hr className="border my-1" />
                {ArrayLocalCarrello.length === 0 ?
                    <div className="h-[260px] border rounded-[5px] border-[#aaa] w-full flex items-center justify-center text-[24px] text-[#f58220] font-bold">Il tuo carrello è vuoto</div> :
                    <AcordionCarrello handleRetornaProdotto={handleRetornaProdotto} ArrayLocalCarrello={ArrayLocalCarrello} handleDeleteAllCarrello={handleDeleteAllCarrello} setArrayLocalCarrello={setArrayLocalCarrello} deleteItem={deleteItem} />
                }
                <ContinuaGliAcquisti changebuttonstep={changebuttonstep} step={step} ArrayLocalCarrello={ArrayLocalCarrello}/>
            </div>
            <div className="w-[22%]">
                <TotaleProvvisorio TotaleProvisorio={TotaleProvisorio} setStepperStep={setStepperStep} changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step}  handleAquistaOra={handleAquistaOra} ArrayLocalCarrello={ArrayLocalCarrello}/>
                {/* <div className="w-[20%]">
                    <TotaleProvvisorio TotaleProvisorio={TotaleProvisorio} setStepperStep={setStepperStep} changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step} />
                </div> */}
            </div>
        </div>
    )
}

export default Riepilogo