import React, { useState } from "react";
import { OptionsSelect } from "../../formProdotto/interfaces/prodotto";
import { BsInfoCircleFill } from "react-icons/bs";
import { Collapse } from "react-collapse";
import { GLOBAL_CONFIG } from "../../../_config/global";

interface Props {
  label: string;
  options: OptionsSelect[];
}

const ListCustom = ({ label, options }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [option, setOption] = useState(0);
  const [iView, setIView] = useState<Number | null>(null);


  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {
        options.map((item, i) => {
          return (
            <tr key={i}>
              <td className="w-[100px] p-[1px] text-[12px] font-normal">{i === 0 ? label : ''}</td>
              <td className={`  px-[10px] py-[6px] text-[14px] bg-[#f1f1f1] border-b-[2px]  border-[#fff] hover:shadow-[0_0px_0px_1.5px_#d6e03d_inset]`}  >
                {item.label}
              </td>
              <td
                className={` p-[6px]`}
                onMouseOver={() => { setIView(i) }}
                onMouseOut={() => { setIView(null) }}
              // onMouseEnter={() => setHoveredState(true)}
              // onMouseLeave={() => setHoveredState(false)} 
              >
                <span className="text-xs  text-gray-800  relative">
                  <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoInfo20.png`} style={{ transform: 'scale(1.3)', }} />
                </span>
                {(iView == i) && (
                  <div className="absolute right-0 left-1 max-w-[400px] min-w-[200px] mt-5 me-[35%] bg-[#000] text-white rounded-[4px] shadow-md p-4  text-[11px] z-10">
                    <div className="flex gap-1 leading-[12px]" style={{ wordWrap: 'break-word', direction: 'ltr' }}>
                      <img
                        src={`${GLOBAL_CONFIG.IMG_IP}/listino/img/` + item?.image}
                        alt=""
                        className="w-[128px] h-[128px]"
                      />
                      <div className="flex flex-col " style={{ wordWrap: 'break-word', direction: 'ltr' }}>
                        <div className="">
                          <h2 className="text-[12px] font-[400] text-[#d6e03d] border-b border-[#fff] mb-[2em]">{item.label}</h2>
                          {/* <hr className="border border-white" /> */}
                        </div>
                        <p className="text-justify text-white">{item.description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </td>

            </tr>


          )
        }

        )
      }
    </>
  )
};

export default ListCustom;
