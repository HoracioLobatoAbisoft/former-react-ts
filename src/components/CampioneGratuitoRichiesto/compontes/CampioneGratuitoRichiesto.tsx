import { GLOBAL_CONFIG } from "../../../_config/global";
import './../styles/RichiediStyle.css'

type CampioneGratuitoRichiestoProps = {
    prodotto: any | undefined;
}

const CampioneGratuitoRichiesto = ({prodotto}: CampioneGratuitoRichiestoProps) => {
return (<>
    <div className="w-[780px]">
        <div className="w-full p-[20px]">
            <p className="w-full text-[30px] font-bold text-center">
                Campione Gratuito Richiesto!
            </p>
            <p className="w-full mt-[16px]">
                Abbiamo registrato correttamente la tua richiesta! Ti invieremo quanto prima un campione gratuito al tuo indirizzo predefinito.
            </p>
            <p className="w-full mt-[16px]">
                Grazie,
            </p>
            <p className="font-bold">
                Lo staff Tipografia Former
            </p>
        </div>
    </div>
</>)
}
export default CampioneGratuitoRichiesto;


