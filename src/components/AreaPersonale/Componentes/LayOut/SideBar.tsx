import { Link } from "react-router-dom";
import { GLOBAL_CONFIG } from "../../../../_config/global";
const SideBarAreaPersonale = () =>{
    return(<>
        <div className="flex">
            <div className="row">
                <div className="col col-12">
                    <Link to={'#'} className="flex flex-row">
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="bg-[green] w-[5px] h-[6px]"/>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoElenco.png`} className="bg-[green] w-[5px] h-[6px]"/>
                        <span>
                            - Il tuo Profilo
                        </span>
                    </Link>
                </div>

            </div>
        </div>
    </>)
}

export default SideBarAreaPersonale;