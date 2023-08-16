import { GLOBAL_CONFIG } from "../../../_config/global";
import { enOperationFrame } from "../../../enHelpers/enOperationFrame";

type ProspGliAquisti = {
    changebuttonstep: (step: number) => string;
    step: number;
}

const ContinuaGliAcquisti = ({step,changebuttonstep}: ProspGliAquisti) => {

    const handleIndexReload  = () => {
        window.parent.postMessage({ operation: enOperationFrame.returnIndex}, GLOBAL_CONFIG.IMG_IP);
    }

    return (
        <div>
            <p style={{'marginTop': '15px' }}>
                <span style={{ 'fontSize': 12}}>Se vuoi completare l'acquisto clicca su <strong> {changebuttonstep(step+1)}</strong></span>
            </p>
            <p style={{'marginTop': '10px' }}>
                <span style={{ 'fontSize': 12, marginTop: 40 }}>Se vuoi ordinare altri prodotti clicca qui e</span> <a href="" style={{ 'fontSize': '16px', 'color': '#f58220', 'fontWeight': 'bold' }} onClick={handleIndexReload}>Continua gli acquisti.</a>
            </p>
        </div>
    )
}

export default ContinuaGliAcquisti