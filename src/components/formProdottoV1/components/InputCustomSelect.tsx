import { Collapse } from "react-collapse";
import { BsInfoCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { OptionsSelect } from "../../formProdotto/interfaces/prodotto";

interface Props {
  label: string;
  options: OptionsSelect[]
  name:string;
  handleChange: any;
  valueSelect?:any;
  showIcon:boolean;
}
export const InputCustomSelect = ({ label, options,handleChange,name,valueSelect, showIcon }: Props) => {

  const [position, setPosition] = useState(valueSelect === null?0:valueSelect)
  const [isCollapsed, setIsCollapsed] = useState(true);
  //console.log("werewrewr",position,valueSelect)
  useEffect(() => {
    if(valueSelect != null) {setPosition(valueSelect); showIcon=true}
  }, [valueSelect]);
  return (
    <div className="col col-12 pb-2 border-[#e2e2e2] border-b flex w-full flex-col">
      <div className="w-full flex flex-col ">
        <h2 className="font-bold uppercase my-1 text-base mb-1">{label}</h2>
        <div className="flex w-full">
          <select name={name} onChange={handleChange} className="rounded-3xl block w-2/3 text-gray-700 border outline-none border-gray-200
          py-1 px-4 mb-3 leading-tight">
            {
              options.map((elem,i) => (
                <option key={elem.value} value={elem.value} >{elem.label}</option>
              ))
            }
          </select>
          {
           ( showIcon===true &&position === 0 || position === undefined) ?null: <span
                className={`${!isCollapsed ? "opacity-100 shadow-md" : "opacity-70"
                  } text-base text-gray-800 ml-2 mb-3 cursor-pointer`}
                onClick={() => setIsCollapsed((prev) => !prev)}
              >
                <BsInfoCircleFill />
              </span>
          }
         
        </div>
      </div>
      <Collapse isOpened={!isCollapsed}>
        <div className="w-3/4 max-w-3/4 bg-black bg-opacity-80 p-4 shadow-custom rounded relative ">
          <div className="row">
            <div className="col md:col-5 lg:col-4">
              <div className="w-48 max-w-full h-full">
                <img
                  src={options && (position === 0 || position === undefined)?`https://localhost:44311/listino/`+options[0]?.image:`https://localhost:44311/listino/`+options.find(x => Number(x.value) === Number(position))?.image}
                  alt=""
                />
              </div>
            </div>
            <div className="col md:col-7 lg:col-8">
              <div className="relative mb-3">
                <h2 className="text-yellow-400 capitalize">
                {options && (position === 0 || position === undefined) ?options[0]?.label:options.find(x => Number(x.value) === Number(position))?.label
                }
                </h2>
              </div>
              <p className="max-w-[500px] text-justify text-white">
                {
                 options && (position === 0 || position === undefined)?options[0]?.description:options.find(x => Number(x.value) === Number(position))?.description
                //options[position].description

                }
              </p>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};
