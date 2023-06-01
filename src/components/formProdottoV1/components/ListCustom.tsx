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
  const [isHovered, setIsHovered] = useState(false);
  const setHoveredState = (stateBool: boolean) => {
    setIsHovered(stateBool);
  };
  return (
    <div className=" pb-2 w-full flex flex-col ">
      <div className="w-full flex gap-5">
        <h2 className="font- text-xs mb-1 w-[38%]">{label}</h2>
        <div className="flex w-full justify-between">
          <ul className="w-full text-xs">
            {options.map((item, i) => {
              return (
                <li
                  className="flex w-full items-center justify-between rounded-xl p-1"
                  key={i}
                >
                  {item.label}
                  <span
                    className={`${
                      !isHovered ? "opacity-70" : "opacity-100"
                    } text-xs text-gray-800 cursor-pointer relative`}
                    onMouseEnter={() => setHoveredState(true)}
                    onMouseLeave={() => setHoveredState(false)}
                  >                    
                    <BsInfoCircleFill />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {isHovered && (
        <div className="absolute right-0 mt-5 mr-10 bg-black text-white rounded-md shadow-md p-4 h-auto w-3/4 max-w-3/4">
          <div className="flex">
            <div className="w-48 max-w-full">
              <img
                src="https://www.biaginionline.it/96079-thickbox_default/cartoncino-bristol-a3-rosso-fabriano-lr-gr220.jpg"
                alt=""
              />
            </div>
            <div className="ml-4">
              <div className="mb-3">
                <h2 className="text-yellow-400 capitalize">{label}</h2>
                <hr className="border border-white" />
              </div>
              <p className="max-w-[500px] text-justify text-white">options</p>
            </div>
          </div>
        </div>
      )}
      <Collapse isOpened={!isCollapsed}>
        <div className="w-3/4 max-w-3/4 bg-black bg-opacity-80 p-4 shadow-custom rounded relative ">
          <div className="row">
            <div className="col md:col-5 lg:col-4">
              <div className="w-48 max-w-full h-full">
                <img
                  src="https://www.biaginionline.it/96079-thickbox_default/cartoncino-bristol-a3-rosso-fabriano-lr-gr220.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col md:col-7 lg:col-8">
              <div className="relative mb-3">
                <h2 className="text-yellow-400 capitalize">
                  {/* {options[option].label} */}
                </h2>
              </div>

              <p className="max-w-[500px] text-justify text-white">
                {/* {options[option].description} */}
              </p>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default ListCustom;
