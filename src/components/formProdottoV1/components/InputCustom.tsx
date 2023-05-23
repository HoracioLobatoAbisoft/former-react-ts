import { BsInfoCircleFill } from "react-icons/bs";

interface Props {
  label: string;
  name: string;
  classWhidtInput?: string;
  classCustomLabel?: string;
  info?: boolean;
  placeHolder?: string;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}
export const InputCustom = ({
  label,
  classWhidtInput = "",
  info,
  placeHolder = "",
  name,
  handleChange,
  classCustomLabel
}: Props) => {
  return (
    <div className="col col-12 text-left border-[#e2e2e2] border-b">
      <div className="w-full">
        <h2 className={`${classCustomLabel ? classCustomLabel : 'font-normal'} text-base mb-1`}>{label}</h2>
        <div className="flex items-center">
          <input
            name={name}
            placeholder={placeHolder}
            className={`rounded-3xl block text-right  text-gray-700 border outline-none border-gray-200
            py-1 px-4 mb-3 leading-tight ${classWhidtInput ? classWhidtInput : "w-2/5"
              }`}
            onChange={handleChange}
          />
          {!info && (
            <span
              className={`opacity-70 text-base text-gray-800 ml-2 mb-3 cursor-pointer`}
            >
              <BsInfoCircleFill />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
