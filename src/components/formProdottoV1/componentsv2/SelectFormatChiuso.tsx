import React from 'react'
import { GLOBAL_CONFIG } from '../../../_config/global'

type Props = {
    idBaseEtiquete: string | undefined;
    idAltezaEtiquete: string | undefined;
    valueBase: string | number;
    valueAlteza: string | number;
    formatoDinamico: string;
    valueProfundita: string | number;
}

const SelectFormatChiuso = ({ formatoDinamico, idBaseEtiquete, valueAlteza = 0, valueBase = 0, valueProfundita = 0, idAltezaEtiquete }: Props) => {

    const SelectFormato = () => {
        switch (idBaseEtiquete) {
            case "0":
                return (
                    <select name="" id="" className="border-[1px] w-full border-[#ddd] font-[open sans] py-[3px]">
                        <option value="">{
                            // handleOptionsFormat()
                            `${valueBase=== "" ? '0' : valueBase} x ${valueAlteza === "" ? "0":valueAlteza} x ${valueProfundita === "" ? "0" : valueProfundita} (chiuso)`
                        }
                        </option>
                    </select>)
            default:
                return (
                    <select name="" id="" className="border-[1px] w-full border-[#ddd] font-[open sans] py-[3px]">
                        <option value="">
                            {`${idBaseEtiquete} x ${idAltezaEtiquete} (${formatoDinamico})`}
                        </option>
                    </select>)
                break;
        }
    }

    return (
        <tr>
            <td className="w-[95px] p-[1px] text-[12px]  font-normal">Formato</td>
            <td className="border-b-[2px] border-[#fff] px-[10px] py-[6px] text-[14px] bg-[#f1f1f1] 
                            hover:shadow-[0_0px_0px_1.5px_#d6e03d_inset]">
                {SelectFormato()}
            </td>
            <td className=" p-[6px]">
                <span
                    className={` text-gray-800 cursor-pointer text-xs`}
                >
                    <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoInfo20.png`} style={{ transform: 'scale(1.3)', }} />
                </span>
            </td>
        </tr>
    )
}

export default SelectFormatChiuso