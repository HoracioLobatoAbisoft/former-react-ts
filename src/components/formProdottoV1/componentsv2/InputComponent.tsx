
import { GLOBAL_CONFIG } from "../../../_config/global";
import {
    InitialValuesProdotto,
    OptionsSelect,
} from "../../formProdotto/interfaces/prodotto";
import useInputComponent from "../hooks/useInputComponent";

type InputComponentProps = {
    options: OptionsSelect[];
    handleChange: (
        evt: React.ChangeEvent<
            HTMLSelectElement
        >
    ) => void;
    value: string | number;
    label: string;
    name: string;
    wSelect?: string;
    idPrev?: string | undefined
    uriImage?: string | undefined;
    //showIcon: boolean;
    //valuesStampaCaldoOpz: Record<string, number>;
};
const InputComponent = ({
    options,
    handleChange,
    value,
    label,
    name,
    wSelect, idPrev, uriImage
}: InputComponentProps) => {

    const { handleHover, hoverIcon, info, showIcon, handleChangeHover } = useInputComponent({ options, value, idPrev });

    return (
        <tr>
            <td className="w-[100px] p-[1px] text-[12px] font-normal">{label}</td>
            <td className="px-[10px] py-[6px] text-[14px] bg-[#f1f1f1] border-b-[2px]  border-[#fff] hover:shadow-[0_0px_0px_1.5px_#d6e03d_inset]">
                <select
                    name={name}
                    value={value}
                    className={`border-[1px] ${wSelect ?? 'w-full'} border-[#ddd] py-[3px] focus:border-none focus:outline-none`}
                    onChange={(evt) => handleChange(evt)}
                >
                    {options.map((item, i) => (
                        <option value={item.value} key={i}>
                            {item.label}
                        </option>
                    ))}
                </select>
            </td>
            <td className=" p-[6px]">
                <span
                    className={`text-xs  text-gray-800   ${showIcon == false ? "opacity-0" : "cursor-pointer"
                        } `}
                    onMouseEnter={() => {
                        showIcon == false ? null : handleHover();
                    }}
                    onMouseLeave={() => handleChangeHover(false)}
                >
                    <img
                        src={`${GLOBAL_CONFIG.IMG_IP}/img/icoInfo20.png`}
                        style={{ transform: "scale(1.1)" }}
                        className=""
                    />
                </span>
                {hoverIcon && (
                    <div className="absolute right-0 max-w-[400px] min-w-[200px] mt-5 me-[35%]  text-white rounded-[4px] shadow-md p-4  text-[11px] z-10" style={{backgroundImage:'-webkit-linear-gradient(top,#4A4A4A 0,#000 100%)'}}>
                        <div
                            className="flex gap-1 leading-[12px]"
                            style={{ wordWrap: "break-word", direction: "ltr" }}
                        >
                            {name === 'valueFormat' ?
                                < img
                                    src={`${GLOBAL_CONFIG.IMG_IP}/listino/img/` + uriImage}
                                    alt=""
                                    className="w-[128px] h-[128px]"
                                /> :
                                <img
                                    src={`${GLOBAL_CONFIG.IMG_IP}/listino/img/` + info?.image}
                                    alt=""
                                    className="w-[128px] h-[128px]"
                                />
                            }
                            <div
                                className="flex flex-col "
                                style={{ wordWrap: "break-word", direction: "ltr" }}
                            >
                                <h2 className="text-[12px] font-[400] text-[#d6e03d] border-b border-[#fff] mb-[2em]">
                                    {info?.label}
                                </h2>
                                <p
                                    className=" text-justify text-white"
                                    dangerouslySetInnerHTML={{
                                        __html: String(info?.description),
                                    }}
                                ></p>
                            </div>
                        </div>
                    </div>
                )}
            </td>
        </tr>
    );
};

export default InputComponent;
