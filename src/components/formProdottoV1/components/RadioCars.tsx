import React, { useEffect, useState } from 'react'
import { OptionsSelect } from '../../formProdotto/interfaces/prodotto';
interface Props {
    label: string;
    options: OptionsSelect[];
    name: string;
    handleChange: any;
    initialState?: any;
    setImage?: (i: string | undefined) => void;
}
const RadioCars = ({ options, label, name, handleChange, initialState, setImage }: Props) => {

    // const [select, setSelect] = useState<string | number>(0)
    // const handleChange = (value: string | number) => {
    //     setSelect(value);
    //     //valueSelect(value);
    // }
    // const valueDefect = (i:number ) => {
    //     if(select !== 0) return false
    //     if(i === 0) return true 
    //     return false
    // }
    const [selectedOption, setSelectedOption] = useState<number>(0);
    const [hoveredState, setHoveredState] = useState({ a: false, b: 0 });
    const [options2,setOptions2] = useState<OptionsSelect[]>()
    const handleOptionChange = (i: number) => {
        setSelectedOption(i);
        if (setImage) {
            setImage(options[i].image)
        }

        //console.log("valueselected", i)
    };
    // useEffect(() => {
    //     setOptions2(options.filter(obj => obj.value !== 0));
    // }, [options])
    //console.log("ASDFADSFf",options)
    return (
        <div className=" p-0 m-0 mt-[2px] mb-[40px]">
            <h4 className="bg-[#e8e8e8] mb-1 text-[12.5px] p-0 m-0 ps-[20px] pt-[4px] font-normal uppercase">{label}</h4>
            <div className="flex gap-3 items-center  justify-center row">
                {
                    options.map((elem, i) => {
                            return (
                                
                                <div className="flex flex-col gap-y-1 col-[1.8] justify-center" key={i}>
                                    <input
                                        type="radio"
                                        name="name"
                                        value={elem.value}
                                        checked={selectedOption == i ? true : undefined}
                                        onChange={handleChange}
                                        onClick={() => { handleOptionChange(i) }}
                                        id={elem.value.toString()}
                                    />
                                    <label htmlFor={elem.value.toString()}>
                                        <img onMouseEnter={() => setHoveredState({ a: true, b: i })}
                                            onMouseLeave={() => setHoveredState({ a: false, b: i })}
                                            src={`http://95.110.133.251:5051/listino/img/${elem.image}`} alt="" className={`w-[77px]  hover:border-[#d6e03d] cursor-pointer rounded border-[3px] ${selectedOption == i ? 'border-[#d6e03d]' : 'border-[#fff]'}`} />
                                    </label>
                                </div>
                            )
                        
                    })
                }
                {hoveredState.a && (
                <div className="absolute bottom-8 right-10 mt-10 me-[35%] bg-black text-white rounded-md shadow-md p-4 h-auto w-2/1 max-w-2/1">
                    <div className="flex">
                        <div className="w-48 max-w-full">
                            <img
                                src={`http://95.110.133.251:5051/listino/img/${options[hoveredState.b].image}`}
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
            

        </div>
    )
}

export default RadioCars