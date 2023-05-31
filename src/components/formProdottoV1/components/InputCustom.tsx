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
}: Props) => {
  return (
    <div className=" w-full mt-1">
      <div className="w-full flex  gap-5">
        <h2 className={`font- w-[38%] capitalize text-xs ${classCustomLabel ? classCustomLabel : 'font-'} font- mb-1`}>{label}</h2>
        <div className="flex w-full justify-between">
          <input
            name={name}
            disabled={disabled}
            placeholder={placeHolder}
            type="number"
            className={`rounded-3xl block text-xs  text-gray-700 border outline-none  border-gray-200
            py-1 px-4 my-1 leading-tight ${classWhidtInput ? classWhidtInput : ""
              }`}
            onBlur={on ? handleChange : undefined}
            onChange={!on ? handleChange : undefined}
          />
          {!info && (
            <span
              className={`opacity-70 text-xs text-gray-800 ml-2 mb-3 cursor-pointer`}
            >
              <BsInfoCircleFill />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
