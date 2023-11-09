import { GLOBAL_CONFIG } from "../../_config/global";
import { formatNumber } from "../../services/NumberFormat";
import useBtnCarrello from "./hooks/useBtnCarrello"

const BtnCarrello = () => {

    const { arrayCarrello } = useBtnCarrello();

    return (
        <div className="text-white text-[10px] max-w-[250px] min-w-[250px] ">
            {arrayCarrello.length > 0 ?
                arrayCarrello.map((item, i) => (
                    <div className="flex items-end gap-1 mt-1 justify-between" key={i}>
                        <img src={GLOBAL_CONFIG.IMG_IP +"/listino/img/"+ item.img } alt="" className="w-[32px] h-[32] border-none" />
                        <p className="">{item.prodotto}...</p>
                        <p className="">€ {formatNumber(Number(item.prezzo))}</p>
                    </div>
                ))
                :
                <p className="text-center">Il tuo carrello è vuoto</p>
            }

        </div>
    )
}

export default BtnCarrello