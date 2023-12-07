import { GLOBAL_CONFIG } from "../../../_config/global";
import { enOperationFrame } from "../../../enHelpers/enOperationFrame";
import { ObjCarrello } from "../../formProdottoV1/interface/ObjCarrrello";

type ProspGliAquisti = {
    changebuttonstep?: (step: number) => string ;
    step: number;
    ArrayLocalCarrello?: ObjCarrello[]
    text?:string;
}

const ContinuaGliAcquisti = ({ step, changebuttonstep, ArrayLocalCarrello,text }: ProspGliAquisti) => {

    const handleIndexReload = () => {
        window.parent.postMessage({ operation: enOperationFrame.reliadUrl ,uri:'' }, GLOBAL_CONFIG.IMG_IP);
    }

    return (
        <div>
            {ArrayLocalCarrello && ArrayLocalCarrello.length > 0 || step > 1 ? <p style={{ 'marginTop': '15px' }}>
                <span style={{ 'fontSize': 12 }}>Se vuoi completare l'acquisto clicca su <strong> {text}</strong></span>
            </p> : null}

            <p style={{ 'marginTop': '10px' }}>
                <span style={{ 'fontSize': 12, marginTop: 40 }}>{ArrayLocalCarrello && ArrayLocalCarrello.length > 0 ? 'Se vuoi ordinare altri prodotti clicca qui e' : "Il tuo carrello è vuoto, clicca qui e"}</span> <button style={{ 'fontSize': '16px', 'color': '#f58220', 'fontWeight': 'bold' }} onClick={handleIndexReload}>Continua gli acquisti.</button>
            </p>
        </div>
    )
}

export default ContinuaGliAcquisti