import React from 'react'
import { OptionsSelect } from '../../formProdotto/interfaces/prodotto';
import useInputComponent from '../hooks/useInputComponent';
import useCheckbox from '../hooks/useCheckbox';
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
const RadioStampa = ({handleChange,label,name,options,value }: Props) => {

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
                                    type="radio"
                                    name={label}
                                    value={elem.value}
                                    onChange={(evt)=>handleChange(evt)}
                                    checked={value[label] === Number(elem.value)}
                                    id={elem.value.toString()}
                                />
                                <label htmlFor={elem.value.toString()}>
                                    <img 
                                        onMouseEnter={() => {(elem.value != 0) &&  setHoverState(elem)}}
                                        onMouseLeave={() => setHoverState(undefined)}
                                        src={`https://tipografiaformer.it/listino/img/${elem.image}`} alt="" className={`w-[77px]  hover:border-[#d6e03d] cursor-pointer rounded border-[3px] border-[#fff]`} />
                                </label>
                            </div>
                        )

                    })
                }
                {(hoverState  )&& (
                    <div className={`absolute right-[10px] left-[100px] ${options.length > 7 ?"top-[180px]" :'top-[80px]'}  w-[400px]  max-w-[400px] min-w-[200px] mt-5 me-[35%]  text-white rounded-[4px] shadow-md p-4  text-[11px] z-10`} style={{backgroundImage:'-webkit-linear-gradient(top,#4A4A4A 0,#000 100%)'}}>
                        <div className="flex">
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

export default RadioStampa