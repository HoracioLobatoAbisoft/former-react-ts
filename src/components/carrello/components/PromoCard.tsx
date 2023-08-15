import { Link } from "react-router-dom";
import { GLOBAL_CONFIG } from "../../../_config/global";

const PromoCard = () =>{
    return <>
    <div className="col col-12 promo-card-container">
        <div className="row">
            <div className="col col-3">
                <img src={`${GLOBAL_CONFIG.IMG_IP}/listino/img/Buste-11-x-23-Strip-20200206144252320613.png`}/>
            </div>
            <div className="col col-9">
                <div className="row">
                    <div className="col col-8">
                        <div className="row">
                            <div className="col col-12">
                                <Link to="#" className="font-bold text-[black] text-[14px]">
                                    Buste Intestate 11x23 senza finestra con strip a colori solo fronte
                                </Link>
                            </div>
                            <div className="col col-12">
                                <p className="text-[14px]">
                                    Categoria: Buste intestate
                                </p>
                            </div>
                            <div className="col col-12">
                                <p className="text-[14px]">
                                    Formato: Buste 11 x 23 + Strip
                                </p>
                            </div>
                            <div className="col col-12">
                                <p className="text-[14px]">
                                    Carta: Buste 11 x 23 SENZA finestra
                                </p>
                            </div>
                            <div className="col col-12">
                                <p className="text-[14px]">
                                    Colori: 4+0 a colori solo Fronte 
                                </p>
                            </div>
                            <div className="col col-12">
                                <p className="description-promo-card">
                                    Le nostre buste intestate nel formato 11 x 23 cm sono di altissima qualità, con strip adesivo Busta da lettera Stampa a colori solo fronte
                                </p>
                            </div>
                            <div>
                                <div>
                                    <img src="/img/icoPromo20.png"/> 
                                    <b className="labPromo">Promo</b> Prodotto in promozione con sconto del <b className="labPromo">10%</b><br/>
                                    <span>* Valido fino al 13/08/2023 salvo esaurimento scorte</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <hr/>
                </div>
            </div>
        </div>


    </div>
    </>
}

export default PromoCard;