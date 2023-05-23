import { BsInfoCircleFill } from "react-icons/bs";
interface Props {
  label: string;
  classCustomLabel?: string;
  widthCustomInput?: string;
  notRequired?: boolean;
  value: any
}
export const InputCustom = ({
  label,
  classCustomLabel = "",
  widthCustomInput = "",
  notRequired,
  value
}: Props) => {
  return (
    <div className="flex space-x-4 items-center py-[2px] pl-1 ">
      <h2 className={`text-base min-w-[120px] ${classCustomLabel}`}>
        {label}{" "}
      </h2>
      <div className="bg-gray-200 py-2 px-4 w-1/2 md:w-[380px]">
        <input
          type="text"
          value={value}

          className={`text-xs placeholder-gray-500 px-4 border border-solid border-gray-800 py-1 focus:outline-none ${widthCustomInput}`}
        />{" "}
        {!notRequired && (
          <>
            <span>(mm)</span>{" "}
            <span className="text-red-600 text-xl font-bold">*</span>
          </>
        )}
      </div>
      <span className="text-sm text-gray-800">
        <BsInfoCircleFill />
      </span>
    </div>
  );
};
