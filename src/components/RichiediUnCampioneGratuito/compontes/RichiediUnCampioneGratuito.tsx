import { GLOBAL_CONFIG } from "../../../_config/global";
import './../styles/RichiediStyle.css'
import { Link } from "react-router-dom";
type RichiediUnCampioneGratuitoProps = {
    prodotto: any | undefined;
}

const RichiediUnCampioneGratuito = ({prodotto}: RichiediUnCampioneGratuitoProps) => {
return (<>
    <div className="w-[790px]">

        <div className="w-full p-[20px]">
            <div className="w-full flex flex-row">
                <img src={`${GLOBAL_CONFIG.IMG_IP}/img/Campione/Titolo1.png`} alt="" className="w-[184px] h-[28px]"/>
            </div>
            <div className="w-full flex flex-row mt-[32px]">
                <div className="w-[600px]">
                    <p className="w-full flex">
                        Scegliere il materiale più idoneo per avere un prodotto di qualità e funzionale non è facile. Lo sappiamo bene!
                    </p>
                    <p className="w-full flex mt-[16px]">
                        Scegliere il supporto cartaceo su cui realizzarlo ancora meno. 
                        I nostri prodotti sono proposti con le grammature di carta più idonee,
                        ma se non sei convinto o vuoi toccare con mano la consistenza della carta noi ti inviamo gratuitamente
                    </p>
                </div>
                <div className="w-[180px]">
                    <img src={`${GLOBAL_CONFIG.IMG_IP}/img/campione/img1.png`} alt="" className="w-[160px] h-[154px]"/>
                </div>
            </div>
            <div className="w-full flex flex-row mt-[32px] justify-center">
                <img src={`${GLOBAL_CONFIG.IMG_IP}/img/Campione/Titolo2.png`} alt="" className="w-[184px] h-[28px]"/>
            </div>
            <div className="w-full mt-[32px]">
                <p className="">
                    già da noi realizzato che ha le stesse caratteristiche di quello da Voi richiesto.
                </p>
                <p className="mt-[16px]">
                    Una sicurezza in più per non sbagliare!
                </p>
            </div>
            <div className="w-full mt-[16px] border rounded-[5px] bg-[#f8f8f8]">
                <p className="w-full flex items-center justify-center text-center mt-[16px]">
                    <span>
                        Campione Richiesto: 
                    </span>
                    <span className="ml-[5px] font-bold text-[25px]">
                        {prodotto.label}
                    </span>
                </p>
                <div className="w-full flex items-center justify-center mt-[16px] mb-[16px]">
                    <Link to={`/campione-gratuito-registrata`}>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/btnRichiedi.png`} alt="" className="w-[118px] h-[28px] btnRichiedi"/>
                    </Link>
                </div>
            </div>

            

        

        </div>
    </div>
</>)
}
export default RichiediUnCampioneGratuito;


