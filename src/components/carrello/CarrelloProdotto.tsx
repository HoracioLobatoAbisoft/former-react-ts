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
    if(step === 1){
        textreturn = "REPILOGO";
    }else if(step === 2){
        textreturn = "ALLEGRA I FILE";
    }else if(step === 3){
        textreturn = "SCEGLI LA CONSEGNA";
    }else if(step === 4){
        textreturn = "SCEGLI IL PAGAMENTO";
    }else if(step === 5){
        textreturn = "COMPLETA L'ORDINE";
    }
    return textreturn;
}
const CarrelloProdotto = () => {
    
    const [step, setStep] = useState<number>(1);
    const [steptext, setSteptext] = useState<string>("ALLEGRA I FILE");
    const {arrayCarrello,TotalPrezo,countLavori,TotaleProvisorio,handleDeleteAllCarrello,handleRetornaProdotto,setArrayCarrello} = useCarrello();
    const itemPage : {[key:number] : any} = {
        1 : <Riepilogo ArrayLocalCarrello={arrayCarrello} countLavori={countLavori} TotalPrezo={TotalPrezo} TotaleProvisorio={TotaleProvisorio} handleDeleteAllCarrello={handleDeleteAllCarrello} handleRetornaProdotto = {handleRetornaProdotto} setArrayLocalCarrello={setArrayCarrello} setStepperStep={setStep} changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step}/>,
        2 : <AllegaIFile TotalPrezo={TotalPrezo} TotaleProvisorio={TotaleProvisorio} setStepperStep={setStep} changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step}/>,
        3 : <ScegliLaConsegna TotalPrezo={TotalPrezo} TotaleProvisorio={TotaleProvisorio} setStepperStep={setStep}  changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step}/>,
        4 : <ScegliIlPagamento TotalPrezo={TotalPrezo} TotaleProvisorio={TotaleProvisorio} setStepperStep={setStep}  changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step}/>,
        5 : <CompletaLOrdine ArrayLocalCarrello={arrayCarrello} countLavori={countLavori} TotalPrezo={TotalPrezo} TotaleProvisorio={TotaleProvisorio} handleDeleteAllCarrello={handleDeleteAllCarrello} handleRetornaProdotto = {handleRetornaProdotto} setArrayLocalCarrello={setArrayCarrello} setStepperStep={setStep} changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step}/>                                                    
    }
    // const {arrayCarrello,TotalPrezo,countLavori,TotaleProvisorio,handleDeleteAllCarrello,} = useCarrello()    
    return(
        <div>
            <Stepper stepNumber={step}/>
            {itemPage[step]}
        </div>
   )
   //Ya no es necesario el cod de abajo, pero lo dejo por si acaso.
    /*if(step === 1){
        return (
        
            <div>
                <Stepper stepNumber={step}/>
                <Riepilogo ArrayLocalCarrello={arrayCarrello} countLavori={countLavori} TotalPrezo={TotalPrezo} TotaleProvisorio={TotaleProvisorio} handleDeleteAllCarrello={handleDeleteAllCarrello} handleRetornaProdotto = {handleRetornaProdotto} setArrayLocalCarrello={setArrayCarrello} setStepperStep={setStep} changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step}/>
                
            </div>
        )
    }
    else if(step === 2){
        return (
        
            <div>
                <Stepper stepNumber={step}/>
                <AllegaIFile TotalPrezo={TotalPrezo} TotaleProvisorio={TotaleProvisorio} setStepperStep={setStep} changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step}/>                
                
            </div>
        )
    }
    else if(step === 3){
        return(
            <div>
                <Stepper stepNumber={step}/>
                <ScegliLaConsegna TotalPrezo={TotalPrezo} TotaleProvisorio={TotaleProvisorio} setStepperStep={setStep}  changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step}/>            
                
            </div>
        )
    }
    else if(step === 4){
        return(
            <div>
                <Stepper stepNumber={step}/>
                <ScegliIlPagamento TotalPrezo={TotalPrezo} TotaleProvisorio={TotaleProvisorio} setStepperStep={setStep}  changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step}/>               
                
            </div>
        )
    }
    else if(step === 5){
        return(
            <div>
                <Stepper stepNumber={step}/>
                <CompletaLOrdine ArrayLocalCarrello={arrayCarrello} 
                countLavori={countLavori} 
                TotalPrezo={TotalPrezo} 
                TotaleProvisorio={TotaleProvisorio}
                handleDeleteAllCarrello={handleDeleteAllCarrello} 
                handleRetornaProdotto = {handleRetornaProdotto} 
                setArrayLocalCarrello={setArrayCarrello} 
                setStepperStep={setStep} 
                changebuttonstep={changebuttonstep}
                setSteptext={setSteptext} 
                step={step}/>               
            </div>
        )
    }*/
}

export default CarrelloProdotto