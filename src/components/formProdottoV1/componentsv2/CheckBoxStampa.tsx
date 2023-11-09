
import { OptionsSelect } from '../../formProdotto/interfaces/prodotto';
import useCheckbox from '../hooks/useCheckbox';
import useInputComponent from '../hooks/useInputComponent';
type Props = {
    options: OptionsSelect[];
    handleChange: (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => void;
    value: Record<string, number>;
    label: string;
    name: string;
    //showIcon: boolean;
    //valuesStampaCaldoOpz: Record<string, number>;
};
const CheckBoxStampa = ({handleChange,label,name,options,value}:Props) => {
    const {hoverState,setHoverState} = useCheckbox({});
    
    //console.log(value);

    return (
        <div className=" p-0 m-0 mt-[2px] mb-[40px] relative">
            <h4 className="bg-[#e8e8e8] mb-1 text-[12.5px] p-0 m-0 ps-[20px] pt-[4px] font-normal uppercase">{label}</h4>
            <div className="flex gap-3 items-center  justify-center row relative">
                {
                    options.map((elem, i) => {
                        return (
                            <div className="flex flex-col gap-y-1 col-[1.8] justify-center" key={i}>
                                <input
                                    type="checkbox"
                                    name={elem.label}
                                    value={elem.value}
                                    checked={!!value[elem.label]}
                                    onChange={handleChange}
                                    id={elem.label}
                                />
                                <label htmlFor={elem.label}>
                                    <img 
                                        onMouseEnter={() => setHoverState(elem)}
                                        onMouseLeave={() => setHoverState(undefined)}
                                        src={`https://tipografiaformer.it/listino/img/${elem.image}`} alt="" className={`w-[77px]  hover:border-[#d6e03d] cursor-pointer rounded border-[3px] ${/*selectedOption*/0 == i ? 'border-[#d6e03d]' : 'border-[#fff]'}`} />
                                </label>
                            </div>
                        )
                    })
                }
                {hoverState?.label && (
                    <div className="absolute   right-[10px] left-[100px] top-[80px] w-[400px]  max-w-[400px] min-w-[200px] mt-5 me-[35%] bg-[#000] text-white rounded-[4px] shadow-md p-4  text-[11px] z-10">
                        <div className="flex gap-1 leading-[12px]"
                            style={{ wordWrap: "break-word", direction: "ltr" }}>
                            <div className="w-48 max-w-full">
                                <img
                                    src={`https://tipografiaformer.it/listino/img/${hoverState?.image}`}
                                    alt=""
                                />
                            </div>
                            <div className="ml-4">
                                <div className="mb-3">
                                    <h2 className="text-yellow-400 capitalize">
                                        {hoverState?.label}
                                    </h2>
                                    <hr className="border border-white" />
                                </div>
                                <p className="max-w-[500px] text-justify text-white">
                                    {hoverState?.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>


        </div>
    )
}

export default CheckBoxStampa