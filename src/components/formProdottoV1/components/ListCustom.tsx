import React, { useState } from 'react'
import { OptionsSelect } from '../../formProdotto/interfaces/prodotto';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Collapse } from 'react-collapse';

interface Props {
    label: string;
    options: OptionsSelect[]
}

const ListCustom = ({ label, options }: Props) => {

    const [isCollapsed, setIsCollapsed] = useState(true);
    const [option, setOption] = useState(0)
    return (
        <div className=" pb-2 w-full flex flex-col ">
            <div className="w-full flex gap-5">
                <h2 className="font-  text-xs mb-1 w-[38%]">{label}</h2>
                <div className="flex w-full justify-between">
                    <ul className='w-full text-xs'>
                        {options.map((item, i) => {
                            return (
                                <li className='flex w-full items-center justify-between rounded-xl p-1' key={i}>
                                    {item.label}
                                    <span
                                        className={`${!isCollapsed ? "opacity-100 shadow-md" : "opacity-70"
                                            } text-xs text-gray-800 ms-2 cursor-pointer`}
                                        onClick={() => setIsCollapsed((prev) => !prev)}
                                    >
                                        <BsInfoCircleFill onClick={()=>setOption(i)}/>
                                    </span></li>
                            )
                        })}

                    </ul>

                </div>
            </div>
            <Collapse isOpened={!isCollapsed}>
                <div className="w-3/4 max-w-3/4 bg-black bg-opacity-80 p-4 shadow-custom rounded relative ">
                    <div className="row">
                        <div className="col md:col-5 lg:col-4">
                            <div className="w-48 max-w-full h-full">
                                <img
                                    src="https://www.biaginionline.it/96079-thickbox_default/cartoncino-bristol-a3-rosso-fabriano-lr-gr220.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col md:col-7 lg:col-8">
                            <div className="relative mb-3">
                                <h2 className="text-yellow-400 capitalize">
                                   {/* {options[option].label} */}
                                </h2>
                            </div>

                            <p className="max-w-[500px] text-justify text-white">
                            {/* {options[option].description} */}
                            </p>
                        </div>
                    </div>
                </div>
            </Collapse>
        </div>
    )
}

export default ListCustom