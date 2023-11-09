import { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { DataDisablesProfundita } from "../interface/disabledProfundita";
import { GLOBAL_CONFIG } from "../../../_config/global";

interface Props {
  label: string;
  name: string;
  classWhidtInput?: string;
  classCustomLabel?: string;
  info?: boolean;
  disabled?: DataDisablesProfundita | undefined;
  placeHolder?: string;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  fn: (evt: React.ChangeEvent<HTMLInputElement>) => void
  on?: boolean;
  mm?: boolean;
  xx?: boolean;
  metrics: string;
  value: string | number;
  maxLengt: number;
}
export const InputCustom = ({
  label,
  classWhidtInput = "",
  info,
  placeHolder = "",
  name,
  handleChange,
  disabled,
  classCustomLabel,
  on = true,
  mm = true,
  xx ,
  fn,
  metrics, value, maxLengt
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const setHoveredState = (stateBool: boolean) => {
    setIsHovered(stateBool);
  };

  return (
    <tr className="">
      <td className={` ${''} ${classCustomLabel ? classCustomLabel : 'w-[95px] p-[1px] text-[12px] text-[arial] font-normal'}`}>{label}</td>
      <td className="border-[2px] border-[#fff] px-[10px] py-[6px] text-[14px] bg-[#f1f1f1] hover:shadow-[0_0px_0px_1.5px_#d6e03d_inset] ">
        <input
          type="text"
          maxLength={maxLengt}
          name={name}
          disabled={disabled?.disabled}
          //defaultValue={disabled?.txt_Profundita}
          placeholder={placeHolder}
          value={value}
          className={`disabled:border-gray-300 focus:outline-none border-[0.1px] px-[3px] py-[]  border-gray-500 rounded-[2px]   ${classWhidtInput ? classWhidtInput : "text-end"
            }`}
          onBlur={fn}
          onChange={handleChange}
        /> 
        {(mm && name != 'valueQuantita')?
          ` (${metrics})` : ""}
        {
          (value === "" && name != 'valueQuantita') ?<span className="text-[red]">*</span> : ''  
        }
      </td>
      <td className=" p-[6px]">
        {!info && (
          <span
            className={`text-xs text-gray-800 cursor-pointer relative `}
            onMouseEnter={() => setHoveredState(true)}
            onMouseLeave={() => setHoveredState(false)}
          >
            <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoInfo20.png`} style={{ transform: 'scale(1.3)', }} />
          </span>
        )}
        {isHovered && (
          <div className="absolute right-0 max-w-[400px] min-w-[200px] mt-5 me-[35%] bg-[#000] text-white rounded-[4px] shadow-md p-4  text-[11px] z-10">
            <div className="flex gap-1 leading-[12px]" style={{ wordWrap: 'break-word', direction: 'ltr' }}>
              <div className="">
                <div className="flex flex-col " style={{ wordWrap: 'break-word', direction: 'ltr' }}>
                  <h2 className="text-[12px] font-[400] text-[#d6e03d] border-b border-[#fff] mb-[2em]">
                    Misure
                  </h2>
                  {/* <hr className="border border-white" /> */}
                </div>
                <p className="">
                  {(name === "valueBase") && <span>Inserisci la <strong className="text-justify text-white">BASE (mm) </strong> del formato che desideri realizzare</span>}
                  {(name === "valueProfundita") && <span>Inserisci la <strong className="text-justify text-white">PROFONDITÀ (mm) </strong> del formato che desideri realizzare</span>}
                  {(name === "valueAltezza") && <span>Inserisci la <strong className="text-justify text-white">ALTEZZA (mm) </strong> del formato che desideri realizzare</span>}
                </p>
              </div>
            </div>
          </div>

        )}
      </td>
    </tr>
  )

};
