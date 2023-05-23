import { Collapse } from "react-collapse";
import { BsInfoCircleFill } from "react-icons/bs";
import { useState } from "react";
import { OptionsSelect } from "../../formProdotto/interfaces/prodotto";

interface Props {
  label: string;
  options: OptionsSelect[]
}
export const InputCustomSelect = ({ label, options }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div className="col col-12 pb-2 text-left border-[#e2e2e2] border-b">
      <div className="w-full">
        <h2 className="font-normal text-base mb-1">{label}</h2>
        <div className="flex items-center">
          <select className="rounded-3xl block w-2/3 text-gray-700 border outline-none border-gray-200
          py-1 px-4 mb-3 leading-tight">
            {
              options.map(elem => (
                <option value={elem.value}>{elem.label}</option>
              ))
            }
          </select>
          <span
            className={`${!isCollapsed ? "opacity-100 shadow-md" : "opacity-70"
              } text-base text-gray-800 ml-2 mb-3 cursor-pointer`}
            onClick={() => setIsCollapsed((prev) => !prev)}
          >
            <BsInfoCircleFill />
          </span>
        </div>
      </div>
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
                  What is Lorem Ipsum?
                </h2>
              </div>

              <p className="max-w-[500px] text-justify text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen bookm.
              </p>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};
