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
        textreturn = "RIVEDI E ACQUISTA";
    } else if (step === 6){
        textreturn = "ACQUISTA ORA"
    }
    return textreturn;
}
const CarrelloProdotto = () => {

    const [step, setStep] = useState<number>(1);
    const [steptext, setSteptext] = useState<string>("ALLEGRA I FILE");
    const { arrayCarrello, TotaleProvisorio, handleDeleteAllCarrello, handleRetornaProdotto, setArrayCarrello, deleteItem,handleReturnIndex,indirizzoList,alleghiPDF,indexScandeza,dataUtente,radio,setRadio,tipoPagamento,radioPagamento,setRadioPagamento,getAplicaCouponSconto,dataTotale,messageCoupon,setMessageCoupon,setShowInputCoupon,showInputCoupon,getTotaleProvisorio,setTotaleProvisorio,handleRadioPagamento,caricaCorriere,corriereSelezionata,handleGetCorriereSelezionata,handleScandeza } = useCarrello()
    //const {arrayCarrello,TotalPrezo,countLavori,TotaleProvisorio,handleDeleteAllCarrello,} = useCarrello()    

    // if (step === 1) {
    // const {arrayCarrello,TotalPrezo,countLavori,TotaleProvisorio,handleDeleteAllCarrello,handleRetornaProdotto,setArrayCarrello} = useCarrello();
    const itemPage: { [key: number]: any } = {
        1: <Riepilogo deleteItem={deleteItem} ArrayLocalCarrello={arrayCarrello} TotaleProvisorio={TotaleProvisorio} handleDeleteAllCarrello={handleDeleteAllCarrello} handleRetornaProdotto={handleRetornaProdotto} setArrayLocalCarrello={setArrayCarrello} setStepperStep={setStep} changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step} />,
        2: <AllegaIFile TotaleProvisorio={TotaleProvisorio} setStepperStep={setStep} changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step} />,
        3: <ScegliLaConsegna arrayCarrello={arrayCarrello} TotaleProvisorio={TotaleProvisorio} setStepperStep={setStep}  changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step} indirizzoList={indirizzoList} alleghiPDF={alleghiPDF} indexScandeza={indexScandeza} dataUtente={dataUtente} radio={radio} setRadio={setRadio} caricaCorriere={caricaCorriere} getTotaleProvisorio={getTotaleProvisorio} dataTotale={dataTotale} radioPagamento={radioPagamento} setTotaleProvisorio={setTotaleProvisorio} corriereSelezionata={corriereSelezionata} handleGetCorriereSelezionata={handleGetCorriereSelezionata} handleScandeza={handleScandeza}/>,
        4: <ScegliIlPagamento TotaleProvisorio={TotaleProvisorio} setStepperStep={setStep} changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step} tipoPagamento={tipoPagamento} radioPagamento={radioPagamento} setRadioPagamento={setRadioPagamento} getAplicaCouponSconto={getAplicaCouponSconto} setArrayCarrello={setArrayCarrello} dataUtente={dataUtente} dataTotale={dataTotale} arrayCarrello={arrayCarrello} messageCoupon={messageCoupon} setMessageCoupon={setMessageCoupon} showInputCoupon={showInputCoupon} setShowInputCoupon={setShowInputCoupon} getTotaleProvisorio={getTotaleProvisorio} setTotaleProvisorio={setTotaleProvisorio} handleRadioPagamento={handleRadioPagamento} radio={radio} />,
        5: <CompletaLOrdine deleteItem={deleteItem} ArrayLocalCarrello={arrayCarrello} TotaleProvisorio={TotaleProvisorio} handleDeleteAllCarrello={handleDeleteAllCarrello} handleRetornaProdotto={handleRetornaProdotto} setArrayLocalCarrello={setArrayCarrello} setStepperStep={setStep} changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step} />
    }
    // const {arrayCarrello,TotalPrezo,countLavori,TotaleProvisorio,handleDeleteAllCarrello,} = useCarrello()    
    return (
        <div>
            <Stepper stepNumber={step} />
            {itemPage[step]}
        </div>
    )

}

export default CarrelloProdotto