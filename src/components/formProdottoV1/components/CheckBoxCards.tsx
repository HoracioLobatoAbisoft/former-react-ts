import React, { useEffect, useState } from 'react'
import { OptionsSelect } from '../../formProdotto/interfaces/prodotto';
import { GLOBAL_CONFIG } from '../../../_config/global';

interface Props {
    label: string;
    options: OptionsSelect[];
    name: string;
    handleChange: (evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    initialState?: any;
    setImage?: (i: string | undefined) => void;
    valuesStampaCaldoOpz:Record<string, number>;
}

const CheckBoxCards = ({ options, label, name, handleChange, initialState, setImage,valuesStampaCaldoOpz }: Props) => {

    const [selectedOption2, setSelectedOption2] = useState<number>(0);
    const [hoveredState, setHoveredState] = useState({ a: false, b: 0 });
    const handleOptionChange2 = (i: number) => {
        setSelectedOption2(i);
        //console.log('check',i)
    };
    useEffect(() => {
        const name = options[0].label.toString();
        valuesStampaCaldoOpz[name] = Number(options[0].value);
    }, [])

    return (
        <div className=" p-0 m-0 mt-[2px] mb-[40px]">
            <h4 className="bg-[#e8e8e8] mb-1 text-[12.5px] p-0 m-0 ps-[20px] pt-[4px] font-normal uppercase">{label}</h4>
            <div className="flex gap-3 items-center justify-center">
                {
                    options.map((elem, i) => {
                        return (
                            <div className="flex flex-col gap-y-1" key={i}>
                                <input
                                    type="checkbox"
                                    name={elem.label}
                                    value={elem.value}
                                    //checked={selectedOption2 == i?true:false}
                                    onChange={handleChange}
                                    //onClick={() => { handleOptionChange2(i) }}
                                    defaultChecked={i===0}
                                    //defaultValue={elem.value}
                                    id={elem.value.toString()}
                                />
                                <label htmlFor={elem.value.toString()}>
                                    <img onMouseEnter={() => setHoveredState({ a: true, b: i })}
                                        onMouseLeave={() => setHoveredState({ a: false, b: i })}
                                        src={`https://tipografiaformer.it/listino/img/${elem.image}`} alt="" className={`w-[77px]  hover:border-[#d6e03d] cursor-pointer rounded border-[3px] border-[#fff]`} />
                                </label>
                            </div>
                        )

                    })
                }

            </div>
            {hoveredState.a && (
                <div className="absolute right-0 mt-5 me-[35%] bg-black text-white rounded-md shadow-md p-4 h-auto w-2/1 max-w-2/1">
                    <div className="flex">
                        <div className="w-48 max-w-full">
                            <img
                                src={`${GLOBAL_CONFIG.IMG_IP}/listino/img/${options[hoveredState.b].image}`}
                                alt=""
                            />
                        </div>
                        <div className="ml-4">
                            <div className="mb-3">
                                <h2 className="text-yellow-400 capitalize">
                                    {options[hoveredState.b].label}
                                </h2>
                                <hr className="border border-white" />
                            </div>
                            <p className="max-w-[500px] text-justify text-white">
                                {options[hoveredState.b].description}
                            </p>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default CheckBoxCards