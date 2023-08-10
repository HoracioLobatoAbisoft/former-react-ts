import { enOperationFrame } from "../../../enHelpers/enOperationFrame";

type ProspGliAquisti = {
    changebuttonstep: (step: number) => string;
    step: number;
}

const ContinuaGliAcquisti = ({step,changebuttonstep}: ProspGliAquisti) => {

    const handleIndexReload  = () => {
        window.parent.postMessage({ operation: enOperationFrame.returnIndex}, 'https://localhost:44311//');
    }

    return (
        <div>
            <br />
            <span style={{ 'fontSize': 12 }}>Se vuoi completare l'acquisto clicca su <strong> {changebuttonstep(step+1)}</strong></span>
            <br />
            <span style={{ 'fontSize': 12 }}>Se vuoi ordinare altri prodotti clicca qui e</span> <a href="" style={{ 'fontSize': '16px', 'color': '#f58220', 'fontWeight': 'bold' }} onClick={handleIndexReload}>Continua gli acquisti.</a>
        </div>
    )
}

export default ContinuaGliAcquisti