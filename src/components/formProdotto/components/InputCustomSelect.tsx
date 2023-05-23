import { BsInfoCircleFill } from "react-icons/bs"
import { OptionsSelect } from "../interfaces/prodotto";

interface Props {
  label: string;
  options: OptionsSelect[]
}
export const InputCustomSelect = ({ label, options }: Props) => {
  return (
    <div className="flex space-x-4 items-center py-[2px] pl-1 ">
      <h2 className=" text-base min-w-[120px]">{label} </h2>
      <div className="bg-gray-200 py-2 px-4 w-1/2 md:w-[380px]">
        <select className="text-xs w-full placeholder-gray-500 px-4  border-gray-400 py-1 focus:outline-none">
          {
            options.map(({ label, value }) => (
              <option value={value}>{label}</option>
            ))
          }
        </select>
      </div>
      <span className="text-sm text-gray-800">
        <BsInfoCircleFill />
      </span>
    </div>
  )
}
