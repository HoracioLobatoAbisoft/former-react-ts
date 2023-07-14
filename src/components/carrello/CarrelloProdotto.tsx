import { ObjCarrello } from "../formProdottoV1/interface/ObjCarrrello"
import AllegaIFile from "./components/AllegaIFile"
import CompletaLOrdine from "./components/CompletaLOrdine"
import Riepilogo from "./components/Riepilogo"
import ScegliIlPagamento from "./components/ScegliIlPagamento"
import ScegliLaConsegna from "./components/ScegliLaConsegna"
import Stepper from "./components/Stepper"
import useCarrello from "./hooks/useCarrello"

const CarrelloProdotto = () => {

    const {arrayCarrello,TotalPrezo,countLavori,TotaleProvisorio,handleDeleteAllCarrello,setArrayCarrello} = useCarrello()

    return (
        <div>
            <Stepper />
            <Riepilogo ArrayLocalCarrello={arrayCarrello} countLavori={countLavori} TotalPrezo={TotalPrezo} TotaleProvisorio={TotaleProvisorio} handleDeleteAllCarrello={handleDeleteAllCarrello} setArrayLocalCarrello={setArrayCarrello}/>
            {/* <AllegaIFile/> */}
            {/* <ScegliLaConsegna/> */}
            {/* <ScegliIlPagamento/> */}
            {/* <CompletaLOrdine/> */}
        </div>
    )
}

export default CarrelloProdotto