import { GLOBAL_CONFIG } from "../../../_config/global";
import PromoCard from "./PromoCard";
const Promo = () =>{
    return <>
        <div>
            <div className="row">
                <div className="col col-12">
                    <img src={`${GLOBAL_CONFIG.IMG_IP}/img/titoloOfferte.png`}/>
                </div>
                <div className="col col-12">
                    <p className="text-[14px]">
                        In questa pagina trovi tutti i prodotti in <span> PROMO </span>. Approfittane e risparmia sull' acquisto dei nostri prodotti!
                    </p>
                </div>
                <div className="col col-12">
                    <div className="row">
                        <PromoCard/>
                    </div>

                </div>
            </div>
        </div>
    </>
}

export default Promo;