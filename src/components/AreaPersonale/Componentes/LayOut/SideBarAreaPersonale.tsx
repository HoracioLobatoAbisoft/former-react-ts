import { Link } from "react-router-dom";
import { GLOBAL_CONFIG } from "../../../../_config/global";
const SideBarAreaPersonale = () =>{
    return(<>
        <div className="flex">
            <div className="row">
                <div className="col col-12">
                    <div className="flex border border-[0.1px] bg-[#000] "/>
                </div>
                <div className="col col-12 mt-[5px]">
                    <span className="ml-[20px] text font-bold text-[14px]">
                        AREA PERSONALE
                    </span>
                </div>
                <div className="col col-12 mt-[5px]">
                    <div className="flex border border-[0.1px] bg-[#000] "/>
                </div>
                <div className="col col-12 mt-[5px]">
                    <span className="ml-[20px] text font-bold text-[14px]">
                        Profilo
                    </span>
                </div>
                <div className="col col-12">
                    <Link to={'#'} className="flex flex-row items-center mt-1">
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoUt20B.png`} className="ml-[5px] w-[25px] h-[21px]"/>
                        <span className="ml-1 text-[12px]">
                            - Il tuo Profilo
                        </span>
                    </Link>
                </div>
                <div className="col col-12">
                    <Link to={'#'} className="flex flex-row items-center mt-1">
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoPwd20.png`} className="ml-[5px] w-[25px] h-[21px]"/>
                        <span className="ml-1 text-[12px]">
                            - Cambio Password
                        </span>
                    </Link>
                </div>
                <div className="col col-12">
                    <Link to={'#'} className="flex flex-row items-center mt-1">
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/_icoDatiFiscali20.png`} className="ml-[5px] w-[25px] h-[21px]"/>
                        <span className="ml-1 text-[12px]">
                            - Aggiorna Dati Fiscali
                        </span>
                    </Link>
                </div>
                <div className="col col-12">
                    <Link to={'#'} className="flex flex-row items-center mt-1">
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoInd20.png`} className="ml-[5px] w-[25px] h-[21px]"/>
                        <span className="ml-1 text-[12px]">
                            - Indirizzi e Corriere
                        </span>
                    </Link>
                </div>
                <div className="col col-12 mt-[15px]">
                    <span className="ml-[20px] text font-bold text-[14px]">
                        Ordini
                    </span>
                </div>
                <div className="col col-12">
                    <Link to={'/AreaPersonale/iTuoiOrdini'} className="flex flex-row items-center mt-[2px]">
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCarrello20.png`} className="ml-[5px] w-[25px] h-[21px]"/>
                        <span className="ml-1 text-[12px]">
                            - I tuoi Ordini
                        </span>
                    </Link>
                </div>
                <div className="col col-12">
                    <Link to={'/AreaPersonale/iTuoiLavori'} className="flex flex-row items-center mt-1">
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoLavoro20.png`} className="ml-[5px] w-[25px] h-[21px]"/>
                        <span className="ml-1 text-[12px]">
                            - I tuoi Lavori
                        </span>
                    </Link>
                </div>
                <div className="col col-12">
                    <Link to={'#'} className="flex flex-row items-center mt-1">
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoMieiCoupon20.png`} className="ml-[5px] w-[25px] h-[21px]"/>
                        <span className="ml-1 text-[12px]">
                            - I tuoi Coupon di Sconto
                        </span>
                    </Link>
                </div>
                <div className="col col-12">
                    <Link to={'#'} className="flex flex-row items-center mt-1">
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoOfferte16.png`} className="ml-[5px] w-[25px] h-[21px]"/>
                        <span className="ml-1 text-[12px]">
                            - Offerte e Promozioni
                        </span>
                    </Link>
                </div>
                <div className="col col-12">
                    <Link to={'#'} className="flex flex-row items-center mt-1">
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoPdf20.png`} className="ml-[5px] w-[25px] h-[21px]"/>
                        <span className="ml-1 text-[12px]">
                            - Le tue Fatture
                        </span>
                    </Link>
                </div>
                <div className="col col-12 mt-[15px]">
                    <span className="ml-[20px] text font-bold text-[14px]">
                        Listino PDF
                    </span>
                </div>
                <div className="col col-12">
                    <Link to={'#'} className="flex flex-row items-center mt-[2px]">
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoPdf20.png`} className="ml-[5px] w-[25px] h-[21px]"/>
                        <span className="ml-1 text-[12px]">
                            - Crea il tuo listino
                        </span>
                    </Link>
                </div>
                <div className="col col-12 mt-[15px]">
                    <span className="ml-[20px] text font-bold text-[14px]">
                        Recensioni
                    </span>
                </div>
                <div className="col col-12">
                    <Link to={'#'} className="flex flex-row items-center mt-[2px]">
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icorecensione.png`} className="ml-[5px] w-[25px] h-[21px]"/>
                        <span className="ml-1 text-[12px]">
                            - Le tue Recensioni
                        </span>
                    </Link>
                </div>
                <div className="col col-12 mt-[5px]">
                    <div className="flex border border-[0.1px] bg-[#000] "/>
                </div>
                <div className="col col-12 mt-[5px]">
                    <span className="ml-[20px] text font-bold text-[14px]">
                        AIUTO
                    </span>
                </div>
                <div className="col col-12">
                    <Link to={'#'} className="flex flex-row items-center mt-1">
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <span className="ml-1 text-[12px]">
                            Contattaci
                        </span>
                    </Link>
                </div>
                <div className="col col-12">
                    <Link to={'#'} className="flex flex-row items-center mt-1">
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <span className="ml-1 text-[12px]">
                            Le nostre lavorazioni
                        </span>
                    </Link>
                </div>
                <div className="col col-12">
                    <Link to={'#'} className="flex flex-row items-center mt-1">
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <span className="ml-1 text-[12px]">
                            Glossario Tipografico
                        </span>
                    </Link>
                </div>
                <div className="col col-12">
                    <Link to={'#'} className="flex flex-row items-center mt-1">
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <span className="ml-1 text-[12px]">
                            Come creare file perfetti
                        </span>
                    </Link>
                </div>
                <div className="col col-12 mt-[5px]">
                    <div className="flex border border-[0.1px] "/>
                </div>
                <div className="col col-12">
                    <Link to={'#'} className="flex flex-row items-center mt-[20px]">
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/btnHomeBrowser.png`} className="ml-[15px] w-[15
                            8px] h-[60px]"/>
                    </Link>
                </div>
                <div className="col col-12">
                    <Link to={'#'} className="flex flex-row items-center mt-[12px]">
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/btnHomeInvioFile.png`} className="ml-[15px] w-[188px] h-[60px]"/>
                    </Link>
                </div>
                
            </div>
        </div>
    </>)
}

export default SideBarAreaPersonale;