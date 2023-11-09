import { Collapse } from "react-collapse";
import { BsInfoCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { OptionsSelect } from "../../formProdotto/interfaces/prodotto";
import './Cube.css'
import { GLOBAL_CONFIG } from "../../../_config/global";
interface Props {
  label: string;
  options: OptionsSelect[];
  name: string;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  valueSelect?: any;
  showIcon: boolean;
  initialState?: any;
  stylePerzonalize?: string;
  valuesStampaCaldoOpz?: Record<string, number>
  defaulSelect?: number | string | null;
}
export const InputCustomSelect = ({
  label,
  options,
  handleChange,
  name,
  valueSelect,
  showIcon,
  initialState,
  stylePerzonalize,
  valuesStampaCaldoOpz,
  defaulSelect
}: Props) => {
  const [position, setPosition] = useState(
    valueSelect === null ? 0 : valueSelect
  );
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [index, setIndex] = useState(0)


  const setHoveredState = (stateBool: boolean) => {
    setIsHovered(stateBool);
  };

  const selected = () => {
    //debugger
    if (initialState != undefined) {
      if (name in initialState) {
        //console.log("asdfasdfsadfadsfasdf", options.find((x: any) => x.value == initialState[name]))
        const fil = options.find((x) => x.value == initialState[name])
        return fil == undefined ? options[0] : fil;
      }
      return options[0]
    }
  }

  const handleInfo = () => {
    //setIndex(i)
  }

  useEffect(() => {
    if (valuesStampaCaldoOpz != undefined && name !== "Format" && name !== "base" && name !== "coloreStampa" && name !== "depth" && name !== "height" && name !== "quantity" && name !== "tipoCarta" && name !== "formatoS" && name !== "facciatePagine" && name !== 'nome' && name !== 'note') {
      //console.log('opcioniList - entro')
      const name = label;
      valuesStampaCaldoOpz[name] = Number(options[0].value);
    }

    selected()
    //console.log('diooooooooooooooooo')

  }, [])

  ////console.log('options',options)

  return (
    <tr className="">
      <td className="w-[100px] p-[1px] text-[12px]  font-normal">
        {label}
      </td>
      <td className={"  px-[10px] py-[6px] text-[14px] bg-[#f1f1f1] border-b-[2px]  border-[#fff] hover:shadow-[0_0px_0px_1.5px_#d6e03d_inset]"}>
        <select name={name} onChange={handleChange} className={`border-[1px] ${stylePerzonalize ? stylePerzonalize : "w-full"} border-[#ddd] py-[3px]`}>
          {
            options.map((elem, i) => (
              <option key={elem.value} selected={defaulSelect == elem.value ? true : false} value={elem.value}>{elem.label}</option>
            ))
          }
        </select>
      </td>
      <td className=" p-[6px]">
        {/* {(showIcon === true && position === 0) ||
          position === undefined ? null : ( */}
        {(name != "orientamiento" && name != "facciatePagine" && selected()?.value != 0) &&
          <span
            className={`text-xs  text-gray-800 cursor-pointer relative`}
            onMouseEnter={() => setHoveredState(true)}
            onMouseLeave={() => setHoveredState(false)}
          >
            <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoInfo20.png`} style={{ transform:'scale(1.3)', }} className=""/>
          </span>
        }
        {isHovered && (
          <div className="absolute right-0 max-w-[400px] min-w-[200px] mt-5 me-[35%] bg-[#000] text-white rounded-[4px] shadow-md p-4  text-[11px] z-10">
            <div className="flex gap-1 leading-[12px]" style={{wordWrap:'break-word',direction:'ltr'}}>
              {/* <img
                  src={
                    options && (position === 0 || position === undefined)
                      ? `https://tipografiaformer.it/listino/img/` + selected()?.image
                      : `https://tipografiaformer.it/listino/img/` +
                      selected()?.image
                  }
                  alt=""
                /> */}
              <img
                src={
                  `${GLOBAL_CONFIG.IMG_IP}/listino/img/` + selected()?.image
                }
                alt=""
                className="w-[128px] h-[128px]"
              />
              {/* <img src={`https://tipografiaformer.it/listino/img/${options[index].image}`} alt="" className="" /> */}
              <div className="flex flex-col " style={{wordWrap:'break-word',direction:'ltr'}}>
                <h2 className="text-[12px] font-[400] text-[#d6e03d] border-b border-[#fff] mb-[2em]">
                  {selected()?.label}
                  {/* {options[index].label} */}
                </h2>
                {/* <hr className="border border-white" /> */}
                <p className=" text-justify text-white" dangerouslySetInnerHTML={{ __html: String(selected()?.description) }}>

                  {/* {options[index].description} */}
                </p>
              </div>
            </div>
          </div>
        )}
      </td>
    </tr>
  )
};
