import { GLOBAL_CONFIG } from "../../_config/global"
import { enOperationFrame } from "../../enHelpers/enOperationFrame";
import TootilpText from "./components/TootilpText";
import useCerca from "./hook/useCerca"
import Tooltip from '@mui/material/Tooltip'

const Cerca = () => {

    const { notifiche, carrello, seTooltipArea, tooltipArea, handleOperationFrame } = useCerca();

    return (
        <div className="w-full text-[11px] flex flex-col items-center overflow-hidden box-border px-[10px] relative">
            {/* <div className="w-full ">
                <div className="flex items-center gap-4">
                    <div className="">
                        <button>
                            <img src={GLOBAL_CONFIG.IMG_IP + "/img/logo.png"} />
                        </button>
                    </div>
                    <div className="text-[16px]">
                        <h3 className="">
                            Benvenuto{" "}
                            <b className="font-normal text-white bg-[#009ec9] py-[3px] px-[6px]">
                                Dimmagine s.r.l.
                            </b>
                            <button className="font-semibold text-[#009ec9]">,Esci</button>{" "}
                        </h3>
                    </div>
                    <div className="">
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                    </div>
                </div>
                <div className=""></div>
            </div> */}
            <div className="w-full flex items-center overflow-hidden box-border px-[10px] relative">
                <img
                    src={`${GLOBAL_CONFIG.IMG_IP}/img/lblCosaStaiCercando.png`}
                    alt=""
                    className="mr-[20px] ml[5px] pt-[14px] pb-[10px] ps-[6px]"
                />
                <div className="flex ">
                    <input
                        type="text"
                        className="text-[14px] indent-[10px] focus:outline-none w-[445px] h-[26px] border-[#c1c1c1] border-[1px] border-t border-b border-l border-r-0"
                    />
                    <button className="h-[26px] ">
                        <img
                            src={GLOBAL_CONFIG.IMG_IP + "/img/btnCercaSmall.png"}
                            alt=""
                        />
                    </button>
                </div>
                <div className="w-full flex justify-end gap-1 relative">
                    <button
                        className="text-[11px] text-white flex gap-1 py-[2px] font-bold uppercase leading-[30px] overflow-hidden w-[120px] h-[30px] text-center bg-[#2b2b2b] rounded-[4px]"
                        onMouseEnter={() => seTooltipArea(true)}
                        onMouseLeave={() => seTooltipArea(false)}
                    >
                        <img src={GLOBAL_CONFIG.IMG_IP + "/img/icoLock32W.png"} alt="" />
                        Area Riservata
                    </button>
                    <button
                        className="text-[11px]  flex gap-1 justify-center py-[2px] font-bold uppercase leading-[30px] overflow-hidden w-[120px] h-[30px] text-center bg-[#d6e03d] rounded-[4px]"
                        onClick={() =>
                            handleOperationFrame(
                                enOperationFrame.hiddenPage,
                                undefined,
                                "/carrello"
                            )
                        }
                    >
                        <img
                            src={GLOBAL_CONFIG.IMG_IP + "/img/icoCarrello32.png"}
                            alt=""
                        />
                        Carrello
                        <div className=" ">
                            <span className="p-[3px] rounded-[5px] bg-[red] text-white">
                                {carrello.length}
                            </span>
                        </div>
                    </button>
                    <button className="text-[11px] flex justify-evenly items-center  py-[2px] font-bold uppercase leading-[30px] w-[55px] h-[30px] overflow-hidden text-center bg-[#d6e03d] rounded-[4px]">
                        <img
                            src={GLOBAL_CONFIG.IMG_IP + "/img/icoNotifica24.png"}
                            alt=""
                        />
                        <div className=" ">
                            <span className="p-[3px] rounded-[5px] bg-[red] text-white">
                                {notifiche?.count}
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cerca