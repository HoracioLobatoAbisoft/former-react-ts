import { Collapse } from "react-collapse";
import { BsInfoCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { OptionsSelect } from "../../formProdotto/interfaces/prodotto";

interface Props {
  label: string;
  options: OptionsSelect[];
  name: string;
  handleChange: any;
  valueSelect?: any;
  showIcon: boolean;
}
export const InputCustomSelect = ({
  label,
  options,
  handleChange,
  name,
  valueSelect,
  showIcon,
}: Props) => {
  const [position, setPosition] = useState(
    valueSelect === null ? 0 : valueSelect
  );
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const setHoveredState = (stateBool: boolean) => {
    setIsHovered(stateBool);
  };
  //console.log("werewrewr",position,valueSelect)
  // useEffect(() => {
  //   if(valueSelect != null) {setPosition(valueSelect); showIcon=true}
  // }, [valueSelect]);
  // return (
  //   <div className="border-[#e2e2e2] border-b flex w-full flex-col pt-3 ">
  //     <div className="w-full flex justify-between gap-5 items-center mb-3">
  //       <h2 className="font- text-xs w-[28%]">{label}</h2>
  //       <div className="flex w-[72%] justify-between ">
  //         <div className="w-full bg-[#f1f1f1] px-[10px] py-[4px]">
  //           <select name={name} onChange={handleChange} className="block  text-gray-700 border outline-none border-gray-200
  //         px-3 leading-tight text-[14px] font-[open sans]">
  //             {
  //               options.map((elem, i) => (
  //                 <option key={elem.value} value={elem.value} >{elem.label}</option>
  //               ))
  //             }
  //           </select>
  //         </div>

  //         {(showIcon === true && position === 0) ||
  //           position === undefined ? null : (
  //           <span
  //             className={`text-xs ${!isHovered ? "opacity-70" : "opacity-100"
  //               } text-base text-gray-800 cursor-pointer relative`}
  //             onMouseEnter={() => setHoveredState(true)}
  //             onMouseLeave={() => setHoveredState(false)}
  //           >
  //             <BsInfoCircleFill />
  //           </span>
  //         )}
  //       </div>
  //     </div>
  // {isHovered && (
  //   <div className="absolute right-0 mt-5 me-[35%] bg-black text-white rounded-md shadow-md p-4 h-auto w-2/1 max-w-2/1">
  //     <div className="flex">
  //       <div className="w-48 max-w-full">
  //         <img
  //           src={
  //             options && (position === 0 || position === undefined)
  //               ? `https://localhost:44311/listino/` + options[0]?.image
  //               : `https://localhost:44311/listino/` +
  //               options.find((x) => Number(x.value) === Number(position))?.image
  //           }
  //           alt=""
  //         />
  //       </div>
  //       <div className="ml-4">
  //         <div className="mb-3">
  //           <h2 className="text-yellow-400 capitalize">
  //             {options[position]?.label}
  //           </h2>
  //           <hr className="border border-white" />
  //         </div>
  //         <p className="max-w-[500px] text-justify text-white">
  //           {options[position]?.description}
  //         </p>
  //       </div>
  //     </div>
  //   </div>

  // )}
  //     {/* <Collapse isOpened={!isCollapsed}>
  //       <div className="w-3/4 max-w-3/4 bg-black bg-opacity-80 p-4 shadow-custom rounded relative ">
  //         <div className="row">
  //           <div className="col md:col-5 lg:col-4">
  //             <div className="w-48 max-w-full h-full">
  //               <img
  //                 src={
  //                   options && (position === 0 || position === undefined)
  //                     ? `https://localhost:44311/listino/` + options[0]?.image
  //                     : `https://localhost:44311/listino/` +
  //                       options.find(
  //                         (x) => Number(x.value) === Number(position)
  //                       )?.image
  //                 }
  //                 alt=""
  //               />
  //             </div>
  //           </div>
  //           <div className="col md:col-7 lg:col-8">
  //             <div className="relative mb-3">
  //               <h2 className="text-yellow-400 capitalize">

  //                 {options[position]?.label}
  //               </h2>
  //             </div>
  //             <p className="max-w-[500px] text-justify text-white">
  //               {

  //                 options[position]?.description
  //               }
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </Collapse> */}
  //   </div>
  // );
  return (
    <tr className="">
      <td className="w-[95px] p-[1px] text-[12px] text-[arial] font-normal">
        {label}
      </td>
      <td className="px-[5px] py-[4px] text-[14px] border-[2px] border-[#f1f1f1] bg-[#f1f1f1]">
        <select name={name} onChange={handleChange} className="border-[1px] w-full border-[#ddd] font-[open sans]">
          {
            options.map((elem, i) => (
              <option key={elem.value} value={elem.value} >{elem.label}</option>
            ))
          }
        </select>
      </td>
      <td className="">
        {(showIcon === true && position === 0) ||
          position === undefined ? null : (
          <span
            className={`text-xs ${!isHovered ? "opacity-70" : "opacity-100"
              } text-base text-gray-800 cursor-pointer relative`}
            onMouseEnter={() => setHoveredState(true)}
            onMouseLeave={() => setHoveredState(false)}
          >
            <BsInfoCircleFill />
          </span>
        )}
        {isHovered && (
          <div className="absolute right-0 mt-5 me-[35%] bg-black text-white rounded-md shadow-md p-4 h-auto w-2/1 max-w-2/1">
            <div className="flex">
              <div className="w-48 max-w-full">
                <img
                  src={
                    options && (position === 0 || position === undefined)
                      ? `https://localhost:44311/listino/` + options[0]?.image
                      : `https://localhost:44311/listino/` +
                      options.find((x) => Number(x.value) === Number(position))?.image
                  }
                  alt=""
                />
              </div>
              <div className="ml-4">
                <div className="mb-3">
                  <h2 className="text-yellow-400 capitalize">
                    {options[position]?.label}
                  </h2>
                  <hr className="border border-white" />
                </div>
                <p className="max-w-[500px] text-justify text-white">
                  {options[position]?.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </td>
    </tr>
  )
};
