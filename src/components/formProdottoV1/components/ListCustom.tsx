import React, { useState } from "react";
import { OptionsSelect } from "../../formProdotto/interfaces/prodotto";
import { BsInfoCircleFill } from "react-icons/bs";
import { Collapse } from "react-collapse";

interface Props {
  label: string;
  options: OptionsSelect[];
}

const ListCustom = ({ label, options }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [option, setOption] = useState(0);
  const [iView, setIView] = useState<Number | null>(null);


  const [isHovered, setIsHovered] = useState(false);
  const setHoveredState = (stateBool: boolean) => {
    setIsHovered(stateBool);
  };
  console.log("asdfadsf", options)
  // return (
  //   <div className=" pb-2 w-full flex flex-col ">
  //     <div className="w-full flex gap-5">
  //       <h2 className="font- text-xs mb-1 w-[38%]">{label}</h2>
  //       <div className="flex w-full justify-between">
  // <ul className="w-full text-xs">
  // {options.map((item, i) => {
  //   return (
  //     <>
  //     <li
  //       className="flex w-full items-center justify-between rounded-xl p-1 mt-3"
  //       key={i}
  //     >
  //       {item.label}
  //       <span
  //         key={i}
  //         className={`${
  //           !isHovered ? "opacity-70" : "opacity-100"
  //         } text-xs text-gray-800 cursor-pointer relative`}
  //         onMouseOver={() => {setIView(i)}}
  //         onMouseOut={() => {setIView(null)}}
  //         onMouseEnter={() => setHoveredState(true)}
  //        onMouseLeave={() => setHoveredState(false)}
  //       >                    
  //         <BsInfoCircleFill />
  //       </span>
  //     </li>
  //     {(iView == i ) && (
  //       <div className="absolute mt-5 mr-10 bg-black text-white rounded-md shadow-md p-4 h-auto w-3/4 max-w-3/4">
  //         <div className="flex">
  //           <div className="w-48 max-w-full">
  //             <img
  //               src={`http://95.110.133.251:5051/listino/` + item?.image}
  //               alt=""
  //             />
  //           </div>
  //           <div className="ml-4">
  //             <div className="mb-3">
  //               <h2 className="text-yellow-400 capitalize">{item.label}</h2>
  //               <hr className="border border-white" />
  //             </div>
  //             <p className="max-w-[500px] text-justify text-white">{item.description}</p>
  //           </div>
  //         </div>
  //       </div>
  //     )}
  //     </>
  //   );
  // })}
  // </ul>
  //       </div>
  //     </div>

  //     {/* <Collapse isOpened={!isCollapsed}>
  //       <div className="w-3/4 max-w-3/4 bg-black bg-opacity-80 p-4 shadow-custom rounded relative ">
  //         <div className="row">
  //           <div className="col md:col-5 lg:col-4">
  //             <div className="w-48 max-w-full h-full">
  //               <img
  //                 src="https://www.biaginionline.it/96079-thickbox_default/cartoncino-bristol-a3-rosso-fabriano-lr-gr220.jpg"
  //                 alt=""
  //               />
  //             </div>
  //           </div>
  //           <div className="col md:col-7 lg:col-8">
  //             <div className="relative mb-3">
  //               <h2 className="text-yellow-400 capitalize">
  //                 {/* {options[option].label} */}
  //               {/* </h2>
  //             </div>

  //             <p className="max-w-[500px] text-justify text-white">
  //               {/* {options[option].description} */}
  //            {/* </p>
  //           </div>
  //         </div>
  //       </div>
  //     </Collapse> */}
  //   </div>
  // );

  return (
    <>
      {/* // <tr className="">
    //   <td className="w-[95px] p-[1px] text-[12px] text-[arial] font-normal">{label}</td>
    //   <td className=" text-[14px] border-b-[2px] border-[#f1f1f1] bg-[#f1f1f1]" colSpan={2}> */}
      {
        options.map((item, i) => {
          return (
            <>
              <tr className="" key={i}>
                <td className="w-[95px] p-[1px] text-[12px]  font-normal">{i===0?label:''}</td>
                <td className="border-b-[2px]  border-[#fff] px-[10px] py-[6px] text-[14px] bg-[#f1f1f1]">
                  {item.label}
                </td>
                <td
                  className={` w-[6%]  p-[6px] border-none text-xs text-gray-800 cursor-pointer relative ${!isHovered && i != iView?'':''}`}
                  onMouseOver={() => { setIView(i) }}
                  onMouseOut={() => { setIView(null) }}
                  // onMouseEnter={() => setHoveredState(true)}
                  // onMouseLeave={() => setHoveredState(false)} 
                  >
                  <img src="http://95.110.133.251:5051/img/icoInfo20.png" style={{transform:'scale(1.3)',}}/>
                </td>

              </tr>
              {(iView == i) && (
                <div className="absolute mt-5 mr-10 bg-black text-white rounded-md shadow-md p-4 h-auto w-3/4 max-w-3/4">
                  <div className="flex">
                    <div className="w-48 max-w-full">
                      <img
                        src={`http://95.110.133.251:5051/listino/` + item?.image}
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="mb-3">
                        <h2 className="text-yellow-400 capitalize">{item.label}</h2>
                        <hr className="border border-white" />
                      </div>
                      <p className="max-w-[500px] text-justify text-white">{item.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </>


            // <>
            //   <ul className="flex justify-between">
            //     <li className=" px-[5px] py-[4px] "
            //       key={i}>
            //       {item.label}
            //     </li>
            //     <span
            //       key={i}
            // className={`bg-[#ffffff] w-[6%] border-none text-xs text-gray-800 cursor-pointer relative`}
            // onMouseOver={() => { setIView(i) }}
            // onMouseOut={() => { setIView(null) }}
            // onMouseEnter={() => setHoveredState(true)}
            // onMouseLeave={() => setHoveredState(false)}
            //     >
            //       <BsInfoCircleFill width={'100%'} height={'100%'} />
            //     </span>
            //   </ul>
            //   {(iView == i) && (
            //     <div className="absolute mt-5 mr-10 bg-black text-white rounded-md shadow-md p-4 h-auto w-3/4 max-w-3/4">
            //       <div className="flex">
            //         <div className="w-48 max-w-full">
            //           <img
            //             src={`http://95.110.133.251:5051/listino/` + item?.image}
            //             alt=""
            //           />
            //         </div>
            //         <div className="ml-4">
            //           <div className="mb-3">
            //             <h2 className="text-yellow-400 capitalize">{item.label}</h2>
            //             <hr className="border border-white" />
            //           </div>
            //           <p className="max-w-[500px] text-justify text-white">{item.description}</p>
            //         </div>
            //       </div>
            //     </div>
            //   )}
            // </>
          );
        })
      }
      {/* //   </td>
    // </tr> */}
    </>
  )
};

export default ListCustom;
