import { GLOBAL_CONFIG } from "../../../_config/global";
import PromoCard from "./PromoCard";
import useCarrello from "../hooks/useCarrello";
import { useEffect } from "react";
const Promo = () =>{
    const {promoList, getPromo} = useCarrello();
    useEffect(()=>{
        getPromo();
    },[])
    return <>
        <div>
            <div className="row">
                <div className="col col-12">
                    <img src={`${GLOBAL_CONFIG.IMG_IP}/img/titoloOfferte.png`}/>
                </div>
                <div className="col col-12 mt-[20px] mb-[20px]">
                    <p className="text-[14px]">
                        In questa pagina trovi tutti i prodotti in <span className="labPromo"> PROMO</span>. Approfittane e risparmia sull' acquisto dei nostri prodotti!
                    </p>
                </div>
                <div className="col col-12">
                    <div className="row">
                        {
                            promoList.map((e,i)=>{
                                return (
                                        <>
                                         <PromoCard
                                            key={i}
                                            promo={e}
                                         />
                                        </>
                                    )
                            }
                               
                            )
                        }
                       
                    </div>

                </div>
            </div>
        </div>
    </>
}

export default Promo;