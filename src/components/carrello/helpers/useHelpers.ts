import { useNavigate } from "react-router-dom";
import { GLOBAL_CONFIG } from "../../../_config/global";
import { enOperationFrame } from "../../../enHelpers/enOperationFrame";
import { ObjCarrello } from "../../formProdottoV1/interface/ObjCarrrello";
import { httpGetUtente } from "../../../services/UtenteService";

const useHelpers = () => {
    const navigate = useNavigate();


    const handleOperationFrame = (operation: enOperationFrame, uri?: any, nav?: string) => {

    
        window.parent.postMessage({ color: 'bg_hidden', operation: operation, uri: uri }, GLOBAL_CONFIG.IMG_IP);
        if (nav) {
            navigate(nav);
        }
    }

    const getLocalCarrelloHelper = () => {
        const LocalCarrello = localStorage.getItem('c');
        let ArrayLocalCarrello: ObjCarrello[] = [];
        let TotalPrezo = 0;
        let TotalPeso = 0;
        let idUt = 0;
        let Colli = 0;
        let mayorFecha1;
        if (LocalCarrello) {
            ArrayLocalCarrello = JSON.parse(LocalCarrello);
            mayorFecha1 = ArrayLocalCarrello.length > 0
                ? ArrayLocalCarrello.reduce((mayor, obj, index) => {
                    if (obj && obj.scadenza) {
                        const fecha1 = new Date(obj.scadenza.date);
                        if (!mayor || fecha1 > mayor.fecha1) {
                            mayor = { fecha1, index };
                        }
                    }
                    return mayor;
                }, { fecha1: new Date(0), index: -1 })
                : null;
        }
        ArrayLocalCarrello.map((lem, i) => {
            if (lem.prezzo != undefined) {
    
                TotalPrezo += lem.prezzo
            }
            if (lem.peso != undefined) {
                TotalPeso += lem.peso
            }
            if (lem.idUt != undefined) {
                idUt = Number(lem.idUt);
            }
            if (lem.colli != undefined) {
                Colli += lem.colli;
            }
        })
    
    
        const carrelloData = {
            arrayCarrello: ArrayLocalCarrello,
            TotalPrezo: TotalPrezo,
            TotalPeso: TotalPeso,
            idUt: idUt,
            Colli: Colli,
            mayorFecha1: mayorFecha1 ? mayorFecha1.index : 0,
        }
    
        return carrelloData;
    }

    

    return {
        getLocalCarrelloHelper,handleOperationFrame,
    }
}

export default useHelpers



