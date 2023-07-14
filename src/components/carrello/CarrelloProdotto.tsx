import { textFieldClasses } from "@mui/material"
import { ObjCarrello } from "../formProdottoV1/interface/ObjCarrrello"
import AllegaIFile from "./components/AllegaIFile"
import CompletaLOrdine from "./components/CompletaLOrdine"
import Riepilogo from "./components/Riepilogo"
import ScegliIlPagamento from "./components/ScegliIlPagamento"
import ScegliLaConsegna from "./components/ScegliLaConsegna"
import Stepper from "./components/Stepper"
import useCarrello from "./hooks/useCarrello"
import { useState } from "react"
const changebuttonstep = (step: number) => {
    let textreturn = "";
    if (step === 1) {
        textreturn = "REPILOGO";
    } else if (step === 2) {
        textreturn = "ALLEGRA I FILE";
    } else if (step === 3) {
        textreturn = "SCEGLI LA CONSEGNA";
    } else if (step === 4) {
        textreturn = "SCEGLI IL PAGAMENTO";
    } else if (step === 5) {
        textreturn = "COMPLETA L'ORDINE";
    }
    return textreturn;
}
const CarrelloProdotto = () => {

    const [step, setStep] = useState<number>(1);
    const [steptext, setSteptext] = useState<string>("ALLEGRA I FILE");
    const { arrayCarrello, TotaleProvisorio, handleDeleteAllCarrello, handleRetornaProdotto, setArrayCarrello, deleteItem } = useCarrello()
    //const {arrayCarrello,TotalPrezo,countLavori,TotaleProvisorio,handleDeleteAllCarrello,} = useCarrello()    

    if (step === 1) {
        return (

            <div>
                <Stepper stepNumber={step} />
                <Riepilogo ArrayLocalCarrello={arrayCarrello} TotaleProvisorio={TotaleProvisorio} handleDeleteAllCarrello={handleDeleteAllCarrello} handleRetornaProdotto={handleRetornaProdotto} setArrayLocalCarrello={setArrayCarrello} setStepperStep={setStep} changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step} deleteItem={deleteItem} />
                {/* <AllegaIFile/> */}
                {/* <ScegliLaConsegna/> */}
                {/* <ScegliIlPagamento/> */}
                {/* <CompletaLOrdine/> */}
            </div>
        )
    }
    else if (step === 2) {
        return (

            <div>
                <Stepper stepNumber={step} />
                <AllegaIFile TotaleProvisorio={TotaleProvisorio} setStepperStep={setStep} changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step} />
                {/* <ScegliLaConsegna/> */}
                {/* <ScegliIlPagamento/> */}
                {/* <CompletaLOrdine/> */}
            </div>
        )
    }
    else if (step === 3) {
        return (
            <div>
                <Stepper stepNumber={step} />
                <ScegliLaConsegna TotaleProvisorio={TotaleProvisorio} setStepperStep={setStep} changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step} />
                {/* <ScegliIlPagamento/> */}
                {/* <CompletaLOrdine/> */}
            </div>
        )
    }
    else if (step === 4) {
        return (
            <div>
                <Stepper stepNumber={step} />
                <ScegliIlPagamento TotaleProvisorio={TotaleProvisorio} setStepperStep={setStep} changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step} />
                {/* <CompletaLOrdine/> */}
            </div>
        )
    }
    else if (step === 5) {
        return (
            <div>
                <Stepper stepNumber={step} />
                <CompletaLOrdine ArrayLocalCarrello={arrayCarrello} TotaleProvisorio={TotaleProvisorio} handleDeleteAllCarrello={handleDeleteAllCarrello} handleRetornaProdotto={handleRetornaProdotto} setArrayLocalCarrello={setArrayCarrello} setStepperStep={setStep} changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step} />
            </div>
        )
    }
}

export default CarrelloProdotto