import { GLOBAL_CONFIG } from "../../_config/global";
import LoadingBackdrop from "../loadingBackdrop"
import AcordionCarrello from "./components/AcordionCarrello";
import ContinuaGliAcquisti from "./components/ContinuaGliAcquisti";
import Stepper from "./components/Stepper";
import TotaleProdotto from "./components/TotaleProdotto";
import useCarrelloStep1 from "./hooks/useCarrelloStep1"

const CarrelloStp1 = () => {

    const { arrayCarrello, deleteItem, handleDeleteAllCarrello, handleRetornaProdotto, loading, setArrayCarrello, TotaleProvisorio, handleTotaleChange } = useCarrelloStep1();

    return (
        <div className="w-full  h-full">
            <LoadingBackdrop
                isOpen={loading}
                x={1}
                sx={{
                    bgcolor: "rgba(225,225,225,0.4)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    pr: 8,
                    zIndex: 1000
                }}
            />
            <Stepper stepNumber={1} />
            <div className="flex gap-[50px]">
                <div className="w-[73%] ">
                    <div className="flex w-full justify-between text-[13px]">
                        <h3 className="flex gap-3  font-bold"><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCarrello16.png`} width={16} height={16} /> CARRELLO </h3>
                        <span className="bg-[#009ec9] font-bold uppercase px-[2px] h-full text-white rounded">React V^18.2.0</span>
                    </div>
                    <hr className="border my-1" />
                    {arrayCarrello.length === 0 ?
                        <div className="h-[260px] border rounded-[5px] border-[#aaa] w-full flex items-center justify-center text-[24px] text-[#f58220] font-bold">Il tuo carrello è vuoto</div> :
                        <AcordionCarrello handleRetornaProdotto={handleRetornaProdotto} ArrayLocalCarrello={arrayCarrello} handleDeleteAllCarrello={handleDeleteAllCarrello} setArrayLocalCarrello={setArrayCarrello} deleteItem={deleteItem} />
                    }
                    <ContinuaGliAcquisti step={1} text='ALLEGA I FILE' />
                </div>
                <div className="w-[22%]">
                    <TotaleProdotto TotaleProvisorio={TotaleProvisorio} handleTotaleChange={handleTotaleChange} textBtn={'ALLEGA I FILE'} />
                </div>
            </div>
        </div>
    )
}

export default CarrelloStp1