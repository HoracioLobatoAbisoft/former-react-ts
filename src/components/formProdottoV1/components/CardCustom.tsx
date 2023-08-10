import { useEffect, useState } from "react"
import { OptionsSelect } from "../../formProdotto/interfaces/prodotto"
import { GLOBAL_CONFIG } from "../../../_config/global";

interface Props {
    options: OptionsSelect[]
    title: string;
    valueSelect: any
    width?: number;
    height?: number;
}
export const CardCustom = ({ options, title, valueSelect, width = 60, height = 60 }: Props) => {
    const [select, setSelect] = useState<string | number>(0)
    const handleChange = (value: string | number) => {
        setSelect(value);
        valueSelect(value);
    }
    const valueDefect = (i:number ) => {
        if(select !== 0) return false
        if(i === 0) return true 
        return false
    }
    return (
        <div className="flex flex-col w-full h-full ">
            <h2 className="font-bold uppercase mt-1 text-base">{title}</h2>
            <div className="w-full h-full items-center flex justify-center gap-5 overflow-hidden cursor-pointer transition duration-300 delay-150 hover:delay-30" >{
                options.map((elem, i) => {
                    return (
                        <div key={elem.value} onClick={() => handleChange(elem.value)} className={`w-[120px] h-[120px] flex justify-center items-center overflow-hidden hover:bg-gray-100  flex-col rounded-md px-2 py-2 transition delay-150 duration-300 hover:scale-110 ease-in-out ${(elem.value == select || valueDefect(i)) ? " border-main border shadow-lg shadow-orange-200" : "border-gray-300 border"}`}>
                            <img
                                width={width}
                                height={height}
                                src={`${GLOBAL_CONFIG.IMG_IP}/listino/` + elem?.image}
                                alt=""
                            />
                            <p className="text-center text-xs mt-[3px] font-[Arial] leading-[13px] text-[13px] text-gray-500">{elem.label}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>

    )
}