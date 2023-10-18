import { Link } from "react-router-dom";
import { GLOBAL_CONFIG } from "../../../../_config/global";
import { enOperationFrame } from "../../../../enHelpers/enOperationFrame";
const SideBarAreaPersonale = () =>{ 

    const handleLink = (href:string) =>{
        window.parent.postMessage({ operation: enOperationFrame.reliadUrl, uri:href}, GLOBAL_CONFIG.IMG_IP);
    }

    return(<>
        <div className="flex">
            <div className="row">
                <div className="col col-12">
                    <div className="flex  border-[0.1px] bg-[#000] "/>
                </div>
                <div className="col col-12 mt-[5px]">
                    <span className="ml-[20px] text font-bold text-[14px]">
                        AREA PERSONALE
                    </span>
                </div>
                <div className="col col-12 mt-[5px]">
                    <div className="flex  border-[0.1px] bg-[#000] "/>
                </div>
                <div className="col col-12 mt-[5px]">
                    <span className="ml-[20px] text font-bold text-[14px]">
                        Profilo
                    </span>
                </div>
                <div className="col col-12">
                    <a  className="flex flex-row items-center mt-1 cursor-pointer" onClick={()=>handleLink('i-tuoi-dati')}>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoUt20B.png`} className="ml-[5px] w-[25px] h-[21px]"/>
                        <span className="ml-1 text-[12px]">
                            - Il tuo Profilo
                        </span>
                    </a>
                </div>
                <div className="col col-12">
                    <a  className="flex flex-row items-center mt-1 cursor-pointer" onClick={()=>handleLink('i-tuoi-dati')}>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoPwd20.png`} className="ml-[5px] w-[25px] h-[21px]"/>
                        <span className="ml-1 text-[12px]">
                            - Cambio Password
                        </span>
                    </a>
                </div>
                <div className="col col-12">
                    <a  className="flex flex-row items-center mt-1 cursor-pointer" onClick={()=>handleLink('aggiorna-dati-fiscali')}>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/_icoDatiFiscali20.png`} className="ml-[5px] w-[25px] h-[21px]"/>
                        <span className="ml-1 text-[12px]">
                            - Aggiorna Dati Fiscali
                        </span>
                    </a>
                </div>
                <div className="col col-12">
                    <a className="flex flex-row items-center mt-1 cursor-pointer" onClick={()=>handleLink('indirizzi-spedizione')}>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoInd20.png`} className="ml-[5px] w-[25px] h-[21px]"/>
                        <span className="ml-1 text-[12px]">
                            - Indirizzi e Corriere
                        </span>
                    </a>
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
                    <a  className="flex flex-row items-center mt-1 cursor-pointer" onClick={()=>handleLink('i-tuoi-coupon-di-sconto')}>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoMieiCoupon20.png`} className="ml-[5px] w-[25px] h-[21px]"/>
                        <span className="ml-1 text-[12px]">
                            - I tuoi Coupon di Sconto
                        </span>
                    </a>
                </div>
                <div className="col col-12">
                    <a  className="flex flex-row items-center mt-1 cursor-pointer" onClick={()=>handleLink('offerte-e-promozioni')}>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoOfferte16.png`} className="ml-[5px] w-[25px] h-[21px]"/>
                        <span className="ml-1 text-[12px]">
                            - Offerte e Promozioni
                        </span>
                    </a>
                </div>
                <div className="col col-12">
                    <a  className="flex flex-row items-center mt-1 cursor-pointer" onClick={()=>handleLink('le-tue-fatture')}>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoPdf20.png`} className="ml-[5px] w-[25px] h-[21px]"/>
                        <span className="ml-1 text-[12px]">
                            - Le tue Fatture
                        </span>
                    </a>
                </div>
                <div className="col col-12 mt-[15px]">
                    <span className="ml-[20px] text font-bold text-[14px]">
                        Listino PDF
                    </span>
                </div>
                <div className="col col-12">
                    <a href="http://listini.tipografiaformer.it/" target="_blank" className="flex flex-row items-center mt-[2px]">
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoPdf20.png`} className="ml-[5px] w-[25px] h-[21px]"/>
                        <span className="ml-1 text-[12px]">
                            - Crea il tuo listino
                        </span>
                    </a>
                </div>
                <div className="col col-12 mt-[15px]">
                    <span className="ml-[20px] text font-bold text-[14px]">
                        Recensioni
                    </span>
                </div>
                <div className="col col-12">
                    <a  className="flex flex-row items-center mt-[2px] cursor-pointer" onClick={()=>handleLink('le-tue-recensioni')}>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icorecensione.png`} className="ml-[5px] w-[25px] h-[21px]"/>
                        <span className="ml-1 text-[12px]">
                            - Le tue Recensioni
                        </span>
                    </a>
                </div>
                <div className="col col-12 mt-[5px]">
                    <div className="flex  border-[0.1px] bg-[#000] "/>
                </div>
                <div className="col col-12 mt-[5px]">
                    <span className="ml-[20px] text font-bold text-[14px]">
                        AIUTO
                    </span>
                </div>
                <div className="col col-12">
                    <a  className="flex flex-row items-center mt-1 cursor-pointer" onClick={()=>handleLink('assistenza-clienti')}>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <span className="ml-1 text-[12px]">
                            Contattaci
                        </span>
                    </a>
                </div>
                <div className="col col-12">
                    <a  className="flex flex-row items-center mt-1 cursor-pointer" onClick={()=>handleLink('le-nostre-lavorazioni')}>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <span className="ml-1 text-[12px]">
                            Le nostre lavorazioni
                        </span>
                    </a>
                </div>
                <div className="col col-12">
                    <a  className="flex flex-row items-center mt-1 cursor-pointer" onClick={()=>handleLink('glossario-tipografico')}>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <span className="ml-1 text-[12px]">
                            Glossario Tipografico
                        </span>
                    </a>
                </div>
                <div className="col col-12">
                    <a className="flex flex-row items-center mt-1 cursor-pointer" onClick={()=>handleLink('suggerimenti-per-inviarci-i-file')}>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="ml-[20px] w-[5px] h-[6px]"/>
                        <span className="ml-1 text-[12px]">
                            Come creare file perfetti
                        </span>
                    </a>
                </div>
                <div className="col col-12 mt-[5px]">
                    <div className="flex  border-[0.1px] "/>
                </div>
                <div className="col col-12">
                    <a href="https://www.google.com/chrome/" target="_blank" className="flex flex-row items-center mt-[20px]">
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/btnHomeBrowser.png`} className="ml-[15px] w-[15
                            8px] h-[60px]"/>
                    </a>
                </div>
                <div className="col col-12">
                    <a href={`${GLOBAL_CONFIG.IMG_IP}/suggerimenti-per-inviarci-i-file`} target="_blank" className="flex flex-row items-center mt-[12px]">
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/btnHomeInvioFile.png`} className="ml-[15px] w-[188px] h-[60px]"/>
                    </a>
                </div>
                
            </div>
        </div>
    </>)
}

export default SideBarAreaPersonale;

