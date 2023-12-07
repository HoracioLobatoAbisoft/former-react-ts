import { GLOBAL_CONFIG } from "../../_config/global"
import useCampioneGratuito from "./hooks/useCampioneGratuito"

const CampioneGratuito = () => {

    const {campioneText} = useCampioneGratuito();

    return (
        <div className="w-full h-full text-[14px]">
            <div className="flex w-full justify-between">
                <img src={GLOBAL_CONFIG.IMG_IP + "/img/Campione/Titolo1.png"} />
                <p className="bg-[#009ec9] font-bold uppercase px-[2px] h-full rounded text-white">React V^18.2.0</p>
            </div>
            <div className="  flex mt-[3.5em] gap-4">
                <p className="text-justify">
                    Scegliere il materiale più idoneo per avere un prodotto di qualità e funzionale non è facile. Lo sappiamo bene! <br /><br />Scegliere il supporto cartaceo su cui realizzarlo ancora meno. I nostri prodotti sono proposti con le grammature di carta più idonee, ma se non sei convinto o vuoi toccare con mano la consistenza della carta noi ti inviamo gratuitamente
                </p>
                <img src={GLOBAL_CONFIG.IMG_IP + "/img/campione/img1.png"} />
            </div>
            <center><img src={GLOBAL_CONFIG.IMG_IP + "/img/Campione/Titolo2.png"} className="mt-[2em]" /></center>
            <br />
            <p className="">già da noi realizzato che ha le stesse caratteristiche di quello da Voi richiesto.</p>
            <br />
            <p className="">Una sicurezza in più per non sbagliare!</p>
            <br />
            <div className="w-full  text-[11px] px-[5px] py-[3em] border-[1px] border-[#aaa] rounded-[5px] bg-[#f8f8f8] text-center">
                <p className="">Campione Richiesto: <span className="text-lg font-bold">{campioneText}</span></p>
                <button className="border-none ">
                    <img src={GLOBAL_CONFIG.IMG_IP + "/img/btnRichiedi.png"} alt="" />
                </button>
            </div>
        </div>
    )
}

export default CampioneGratuito