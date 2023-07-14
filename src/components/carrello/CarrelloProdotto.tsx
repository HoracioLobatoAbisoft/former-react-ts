import { ObjCarrello } from "../formProdottoV1/interface/ObjCarrrello"
import AllegaIFile from "./components/AllegaIFile"
import CompletaLOrdine from "./components/CompletaLOrdine"
import Riepilogo from "./components/Riepilogo"
import ScegliIlPagamento from "./components/ScegliIlPagamento"
import ScegliLaConsegna from "./components/ScegliLaConsegna"
import Stepper from "./components/Stepper"
import useCarrello from "./hooks/useCarrello"

const CarrelloProdotto = () => {

    const {arrayCarrello,TotaleProvisorio,handleDeleteAllCarrello,handleRetornaProdotto,setArrayCarrello,deleteItem} = useCarrello()
    //const {arrayCarrello,TotalPrezo,countLavori,TotaleProvisorio,handleDeleteAllCarrello,} = useCarrello()

    return (
        <div>
            <Stepper />
            <Riepilogo ArrayLocalCarrello={arrayCarrello} TotaleProvisorio={TotaleProvisorio} handleDeleteAllCarrello={handleDeleteAllCarrello} handleRetornaProdotto = {handleRetornaProdotto} setArrayLocalCarrello={setArrayCarrello} deleteItem={deleteItem}/>
            {/* <AllegaIFile/> */}
            {/* <ScegliLaConsegna/> */}
            {/* <ScegliIlPagamento/> */}
            {/* <CompletaLOrdine/> */}
        </div>
    )
}

export default CarrelloProdotto