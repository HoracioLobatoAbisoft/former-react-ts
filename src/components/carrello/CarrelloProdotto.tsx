import { textFieldClasses } from "@mui/material"
import { ObjCarrello } from "../formProdottoV1/interface/ObjCarrrello"
import AllegaIFile from "./components/AllegaIFile"
import CompletaLOrdine from "./components/CompletaLOrdine"
import Riepilogo from "./components/Riepilogo"
import ScegliIlPagamento from "./components/ScegliIlPagamento"
import ScegliLaConsegna from "./components/ScegliLaConsegna"
import Stepper from "./components/Stepper"
import useCarrello from "./hooks/useCarrello"
import Effettuato from "./components/Effettuato"
import { useEffect, useState } from "react"
import Cerca from "../Cerca/Cerca"
import LoadingBackdrop from "../loadingBackdrop"
const changebuttonstep = (step: number) => {
    let textreturn = "";
    if (step === 1) {
        textreturn = "REPILOGO";
    } else if (step === 2) {
        textreturn = "ALLEGA I FILE";
    } else if (step === 3) {
        textreturn = "SCEGLI LA CONSEGNA";
    } else if (step === 4) {
        textreturn = "SCEGLI IL PAGAMENTO";
    } else if (step === 5) {
        textreturn = "RIVEDI E ACQUISTA";
    } else if (step === 6) {
        textreturn = "ACQUISTA ORA"
    } else if (step === 7) {
        //console.log("aca cayo en 7");
    }
    return textreturn;
}

const CarrelloProdotto = () => {


    const { arrayCarrello, TotaleProvisorio, handleDeleteAllCarrello, handleRetornaProdotto, setArrayCarrello, deleteItem, handleReturnIndex, indirizzoList, alleghiPDF, indexScandeza, dataUtente, radio, setRadio, tipoPagamento, radioPagamento, setRadioPagamento, getAplicaCouponSconto, dataTotale, messageCoupon, setMessageCoupon, setShowInputCoupon, showInputCoupon, getTotaleProvisorio, setTotaleProvisorio, handleRadioPagamento, caricaCorriere, corriereSelezionata, handleGetCorriereSelezionata, handleScandeza, postAquistaOra, handleAquistaOra, setStep, setSteptext, step, steptext, handleShow, dataOrdine,getMetodiPagamento,
        setDataOrdine,loading,setTipoPagamento } = useCarrello()


    const itemPage: { [key: number]: any } = {
        1: <Riepilogo deleteItem={deleteItem} ArrayLocalCarrello={arrayCarrello} TotaleProvisorio={TotaleProvisorio} handleDeleteAllCarrello={handleDeleteAllCarrello} handleRetornaProdotto={handleRetornaProdotto} setArrayLocalCarrello={setArrayCarrello} setStepperStep={setStep} changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step} handleAquistaOra={handleAquistaOra} />,
        2: <AllegaIFile TotaleProvisorio={TotaleProvisorio} setStepperStep={setStep} changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step} handleAquistaOra={handleAquistaOra} />,
        3: <ScegliLaConsegna arrayCarrello={arrayCarrello} TotaleProvisorio={TotaleProvisorio} setStepperStep={setStep} changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step} indirizzoList={indirizzoList} alleghiPDF={alleghiPDF} indexScandeza={indexScandeza} dataUtente={dataUtente} radio={radio} setRadio={setRadio} caricaCorriere={caricaCorriere} getTotaleProvisorio={getTotaleProvisorio} dataTotale={dataTotale} radioPagamento={radioPagamento} setTotaleProvisorio={setTotaleProvisorio} corriereSelezionata={corriereSelezionata} handleGetCorriereSelezionata={handleGetCorriereSelezionata} handleScandeza={handleScandeza} handleAquistaOra={handleAquistaOra} />,
        4: <ScegliIlPagamento TotaleProvisorio={TotaleProvisorio} setStepperStep={setStep} changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step} tipoPagamento={tipoPagamento} setTipoPagamento={setTipoPagamento} radioPagamento={radioPagamento} setRadioPagamento={setRadioPagamento} getAplicaCouponSconto={getAplicaCouponSconto} setArrayCarrello={setArrayCarrello} dataUtente={dataUtente} dataTotale={dataTotale} arrayCarrello={arrayCarrello} messageCoupon={messageCoupon} setMessageCoupon={setMessageCoupon} showInputCoupon={showInputCoupon} setShowInputCoupon={setShowInputCoupon} getTotaleProvisorio={getTotaleProvisorio} setTotaleProvisorio={setTotaleProvisorio} handleRadioPagamento={handleRadioPagamento} radio={radio} handleAquistaOra={handleAquistaOra} getMetodiPagamento={getMetodiPagamento}/>,
        5: <CompletaLOrdine deleteItem={deleteItem} dataTotale={dataTotale} ArrayLocalCarrello={arrayCarrello} TotaleProvisorio={TotaleProvisorio} handleDeleteAllCarrello={handleDeleteAllCarrello} handleRetornaProdotto={handleRetornaProdotto} setArrayLocalCarrello={setArrayCarrello} setStepperStep={setStep} changebuttonstep={changebuttonstep} setSteptext={setSteptext} step={step} postAquistaOra={postAquistaOra} handleAquistaOra={handleAquistaOra} dataOrdine={dataOrdine} setDataOrdine={setDataOrdine} />,
        6: <Effettuato />
    }

    return (
        <div className="w-full h-full">
            <LoadingBackdrop
                isOpen={loading}
                x={1}
                sx={{
                    bgcolor: "rgba(225,225,225,0.4)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    pr: 8,
                    zIndex:1000
                }}
            />
            {/* <Cerca/> */}
            <Stepper stepNumber={step} />
            {itemPage[step]}
        </div>
    )

}

export default CarrelloProdotto