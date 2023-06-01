import { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";

interface Props {
  label: string;
  name: string;
  classWhidtInput?: string;
  classCustomLabel?: string;
  info?: boolean;
  disabled?: boolean;
  placeHolder?: string;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  on?: boolean;
  mm?:boolean;
}
export const InputCustom = ({
  label,
  classWhidtInput = "",
  info,
  placeHolder = "",
  name,
  handleChange,
  disabled = false,
  classCustomLabel,
  on = true,
  mm = true,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const setHoveredState = (stateBool: boolean) => {
    setIsHovered(stateBool);
  };
  // return (
  //   <div className=" w-full mt-1">
  //     <div className="w-full flex  gap-5">
  //       <h2 className={`font- w-[38%] capitalize text-xs ${classCustomLabel ? classCustomLabel : 'font-'} font- mb-1`}>{label}</h2>
  //       <div className="flex w-full justify-between">
  // <input
  //   name={name}
  //   disabled={disabled}
  //   placeholder={placeHolder}
  //   type="number"
  //   className={`rounded-3xl block text-xs  text-gray-700 border outline-none  border-gray-200
  //   py-1 px-4 my-1 leading-tight ${classWhidtInput ? classWhidtInput : ""
  //     }`}
  //   onBlur={on ? handleChange : undefined}
  //   onChange={!on ? handleChange : undefined}
  // />
  // {!info && (
  //   <span
  //   className={`${
  //     !isHovered ? "opacity-70" : "opacity-100"
  //   } text-xs text-gray-800 cursor-pointer relative `}
  //   onMouseEnter={() => setHoveredState(true)}
  //   onMouseLeave={() => setHoveredState(false)}
  // >
  //   <BsInfoCircleFill />
  // </span>
  // )}
  //       </div>
  //     </div>
  // {isHovered && (
  //   <div className="absolute right-0 mr-10 bg-black text-white rounded-md shadow-md p-4 h-auto min-w-1/4 max-w-3/4">
  //   <div className="flex">
  //     <div className="ml-4">
  //       <div className="mb-3">
  //         <h2 className="text-yellow-400 capitalize">
  //           Misure
  //         </h2>
  //         <hr className="border border-white" />
  //       </div>

  //       <p className="max-w-[500px] text-justify text-white">
  //         {(name === "base") && <span>Inserisci la <strong className="text-white">BASE (mm)</strong> del formato che desideri realizzare</span>}
  //         {(name === "depth") && <span>Inserisci la <strong className="text-white">PROFONDITÀ (mm)</strong> del formato che desideri realizzare</span>}
  //         {(name === "height") && <span>Inserisci la <strong className="text-white">ALTEZZA (mm)</strong> del formato che desideri realizzare</span>}
  //       </p>
  //     </div>
  //   </div>
  // </div>

  // )}
  //   </div>
  // );

  return (
    <tr className="boder border-b-4 border-[#ffff]">
      <td className={`${''} ${classCustomLabel ? classCustomLabel : 'w-[95px] p-[1px] text-[12px] text-[arial] font-normal'}`}>{label}</td>
      <td className="px-[5px] py-[4px] text-[14px] border-[2px] border-[#f1f1f1] bg-[#f1f1f1] w-[300px]">
        <input
          name={name}
          disabled={disabled}
          placeholder={placeHolder}
          type="number"
          className={` ${classWhidtInput ? classWhidtInput : "border-[1px] px-[2px] py-[1px]  border-[#ddd] font-[open sans] text-end"
            }`}
          onBlur={on ? handleChange : undefined}
          onChange={!on ? handleChange : undefined}
        /> {mm?'(mm)':""}
      </td>
      <td className="">
        {!info && (
          <span
            className={`text-xs text-gray-800 cursor-pointer relative `}
            onMouseEnter={() => setHoveredState(true)}
            onMouseLeave={() => setHoveredState(false)}
          >
            <BsInfoCircleFill />
          </span>
        )}
        {isHovered && (
          <div className="absolute right-0 mr-10 bg-black text-white rounded-md shadow-md p-4 h-auto min-w-1/4 max-w-3/4">
            <div className="flex">
              <div className="ml-4">
                <div className="mb-3">
                  <h2 className="text-yellow-400 capitalize">
                    Misure
                  </h2>
                  <hr className="border border-white" />
                </div>

                <p className="max-w-[500px] text-justify text-white">
                  {(name === "base") && <span>Inserisci la <strong className="text-white">BASE (mm)</strong> del formato che desideri realizzare</span>}
                  {(name === "depth") && <span>Inserisci la <strong className="text-white">PROFONDITÀ (mm)</strong> del formato che desideri realizzare</span>}
                  {(name === "height") && <span>Inserisci la <strong className="text-white">ALTEZZA (mm)</strong> del formato che desideri realizzare</span>}
                </p>
              </div>
            </div>
          </div>

        )}
      </td>
    </tr>
  )

};
