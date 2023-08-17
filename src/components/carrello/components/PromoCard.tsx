import { Link } from "react-router-dom";
import { GLOBAL_CONFIG } from "../../../_config/global";

const PromoCard = () =>{
    return <>
    <div className="col col-12 promo-card-container risultatoRicerca">
        <div className="row">
            <div className="col col-3">
                <img src={`${GLOBAL_CONFIG.IMG_IP}/listino/img/Buste-11-x-23-Strip-20200206144252320613.png`}/>
            </div>
            <div className="col col-9">
                <div className="row">
                    <div className="col col-9">
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
                            <div className="col col-12 mt-[10px]">
                                <div className="boxPromo">
                                    <p className="flex flex-row text-[15px]">
                                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoPromo20.png`} className="h-[16px] w-[16px]"/> 
                                        <b className="labPromo font-bold mx-1">Promo</b> Prodotto in promozione con sconto del <b className="labPromo font-bold mx-1">10%</b>
                                    </p>
                                    <p className="text-[10px] mt-1">
                                        * Valido fino al 13/08/2023 salvo esaurimento scorte
                                    </p>
                                </div>
                            </div>
                            <div className="col col-12 mt-[10px]">
                                <div className="">
                                    <p className="flex flex-row text-[12px] items-center justity-center">
                                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoStarFull.png`} className="h-[26px] w-[26px]"/> 
                                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoStarFull.png`} className="h-[26px] w-[26px]"/> 
                                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoStarHalf.png`} className="h-[26px] w-[26px]"/> 
                                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoStarEmpty.png`} className="h-[26px] w-[26px]"/> 
                                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoStarEmpty.png`} className="h-[26px] w-[26px]"/> 
                                        <span className="font-bold ml-2 mr-1">
                                            {`${1}`}
                                        </span>
                                        <span>
                                            recensioni
                                        </span>
                                    </p>
                                    {
                                      1
                                      &&
                                      <p className="flex flex-row text-[12px] items-center justity-center mt-[5px] pl-[15px]">
                                        4,8 su 5 stelle
                                      </p>

                                        
                                    }
                                   
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col col-3 bg-[red]">

                    </div>
                </div>
                <div className="row">
                    <hr />
                </div>
            </div>
        </div>


    </div>
    </>
}

export default PromoCard;