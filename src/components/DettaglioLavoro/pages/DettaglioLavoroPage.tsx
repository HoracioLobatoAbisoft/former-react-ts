import { GLOBAL_CONFIG } from "../../../_config/global";
import { useState } from "react";
const DettaglioLavoroPage = () => {
    const [showEditSection, setShowEditSection] = useState<boolean>(false)
    return <>
        <div className="w-[1000px]">
            <div className="w-full flex flex-row items-center justify-center my-[10px]">
                <div className="w-[860px] flex flex-row items-center">
                    <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoLavoro50.png`}/>
                    <span className="text-[orange] text-[14px] font-bold mx-[2px]">
                        DETTAGLIO DEL TUO LAVORO N°
                    </span>
                    <span className="text-[black] text-[14px] font-bold mx-[2px]">
                        {` PROVVISORIO ${12345}`}
                    </span>
                </div>
                
            </div>
            <div className="w-full flex flex-row items-center justify-center my-[10px]">
                <div className="w-[800px] ">
                    <hr className="bg-[orange] border text-[orange] border-[orange]"/>
                    <div className="w-full my-[5px]">
                        <div className="w-full flex flex-row py-[10px]">
                            <div className="w-[570px]">
                                <div className="w-full flex flex-row my-[5px]">
                                    <div className="w-[180px] px-[10px] text-[11px]">
                                        <span>
                                            Quantità:
                                        </span>
                                    </div>
                                    <div className="w-[390px] px-[20px] text-[14px] font-bold">
                                        <p className="text-justify">
                                            {`100`}
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-row my-[5px]">
                                    <div className="w-[180px] px-[10px] text-[11px]">
                                        <span>
                                            Prodotto:
                                        </span>
                                    </div>
                                    <div className="w-[390px] px-[20px] text-[14px] font-bold">
                                        <p className="text-justify">
                                            {`Biglietti da Visita`}
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-row my-[5px]">
                                    <div className="w-[180px] px-[10px] text-[11px]">
                                        <span>
                                            Formato prodotto:
                                        </span>
                                    </div>
                                    <div className="w-[390px] px-[20px] text-[14px] font-bold">
                                        <p className="text-justify">
                                            {`85x55`}
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-row my-[5px]">
                                    <div className="w-[180px] px-[10px] text-[11px]">
                                        <span>
                                            Supporto:
                                        </span>
                                    </div>
                                    <div className="w-[390px] px-[20px] text-[14px] font-bold">
                                        <p className="text-justify">
                                            {`Patinata Opaca 350 gr.`}
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-row my-[5px]">
                                    <div className="w-[180px] px-[10px] text-[11px]">
                                        <span>
                                            Colori di stampa:
                                        </span>
                                    </div>
                                    <div className="w-[390px] px-[20px] text-[14px] font-bold">
                                        <p className="text-justify">
                                            {`4+4 a colori Fronte/Retro`}
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-row my-[5px]">
                                    <div className="w-[180px] px-[10px] text-[11px]">
                                        <span>
                                            Opzioni:
                                        </span>
                                    </div>
                                    <div className="w-[390px] px-[20px] text-[14px] font-bold">
                                        <ul className="ml-[20px] list-disc">
                                            <li>
                                                <p className="text-justify">
                                                    {`4+4 a colori Fronte/Retro`}
                                                </p>
                                            </li>
                                        </ul>
                                       
                                    </div>
                                </div>
                                <div className="w-full flex flex-row my-[5px]">
                                    <div className="w-[180px] px-[10px] text-[11px]">
                                        <span>
                                            Imballo:
                                        </span>
                                    </div>
                                    <div className="w-[390px] px-[20px] text-[11px]">
                                        <p className="text-justify">
                                            Colli <b>1</b>, Peso <b>1</b> kg ±
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[230px] ">
                                <div className="w-full flex items-start justify-center my-[5px]">
                                    <span 
                                        className={`bg-[${('#E81616').toLocaleLowerCase()}] text-[12px] text-center py-[3px] px-[10px] rounded-[3px]`}
                                    >
                                        {`In attesa di Pagamento`}
                                    </span>
                                </div>
                                <div className="w-full flex items-start justify-center">
                                    <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoEdit20.png`} className="w-[128px] h-[128px] mt-[26px]" />

                                </div>


                            </div>

                        </div>
                        <div className="w-full flex flex-row justify-end my-[5px]">
                            <div className="w-[230px] flex justify-center">
                                <div className="flex flex-row bg-[#d6e03d] p-[5px] rounded-[5px]">
                                    <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoPrezzo.png`} className="w-[20px] h-[25px]" />
                                    <span className="text-[18px] px-[2px]">
                                        {`€ ${`12,00`} + iva`}
                                    </span>
                                </div>

                            </div>

                        </div>
                        

                    </div>
                    <div className="w-full bg-[orange] my-[5px]">
                        <span className="text-[14px] text-[white] font-bold ml-[20px]">
                            DETTAGLI E NOTE
                        </span>
                    </div>
                    <div className="w-full flex flex-row my-[5px]">
                        <div className="w-[656px]">
                            <div className="w-full flex flex-row py-[5px]">
                                <span className="w-[114px] px-[10px] text-[11px]">
                                Nome Lavoro:
                                </span>
                                <div  className="w-[390px] min-h-[22px] flex bg-[#f1f1f1] ">
                                    <p className="text-justify m-[5px]">
                                    {`

`}
                                    </p>
                                </div>
                                <div className="w-[152px] px-[2px]">
                                    <div 
                                        className="w-[118px] flex flex-row bg-[#ffd30c] hover:bg-[#ffe055] rounded p-[5px]"
                                        onClick={()=>setShowEditSection(true)}
                                    >
                                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoEdit20.png`} alt="" />
                                        <span className="text-[12px]">
                                            Modifica Nome 
                                        </span>

                                    </div>

                                </div>

                            </div>
                            <div className="w-full flex flex-row py-[5px]">
                                <span className="w-[114px] px-[10px] text-[11px]">
                                Tipo Retro:
                                </span>
                                <div  className="w-[390px] min-h-[22px] flex">
                                <select 
                                    className="w-[200px] flex border boder-[black] h-[22px]"
                                >
                                        <option selected value="0">Fronte e Retro differenti</option>
                                        <option value="1">Fronte e Retro uguali</option>
                                        <option value="2">Retro contenuto nel file Fronte</option>
                                        <option value="3">Retro Bianco</option>
                                </select>
                                </div>
                                

                            </div>
                            <div className="w-full flex flex-row py-[5px]">
                                <span className="w-[114px] px-[10px] text-[11px]">
                                Note:
                                </span>
                                <div  className="w-[390px] min-h-[22px] flex bg-[#f1f1f1] ">
                                    <p className="text-justify m-[5px]">
                                    {`

`}
                                    </p>
                                </div>
                                <div className="w-[152px] px-[2px]">
                                    <div 
                                        className="w-[118px] flex flex-row bg-[#ffd30c] hover:bg-[#ffe055] rounded p-[5px]"
                                        onClick={()=>setShowEditSection(true)}
                                    >
                                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoEdit20.png`} alt="" />
                                        <span className="text-[12px]">
                                            Modifica Note 
                                        </span>

                                    </div>

                                </div>

                            </div>


                        </div>
                        <div className="w-[144px] flex items-center justify-center">
                            <img src={`${GLOBAL_CONFIG.IMG_IP}/img/NoAnteprima.png`} className="w-[100px] h-[100px]"/>
                        </div>

                    </div>
                    {showEditSection&&
                    <div className="w-full flex flex-row my-[5px] justify-center items-center">
                        <div className="w-[590px] p-[20px] bg-[#2b2b2b]">
                            <div className="w-full flex justify-center items-center">
                                <textarea className="h-[80px] w-[535px]">
                                </textarea>
                            </div>
                            <div className="w-full flex flex-row justify-center mt-[10px]">
                                <button 
                                    className="flex flex-row bg-[red] rounded mx-[2px] p-[5px]"
                                    onClick={()=>setShowEditSection(false)}
                                >
                                    <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCheckOk20.png`} className="w-[16px] h-[16px]"/>
                                    <span className="text-[11px]">
                                        Salva
                                    </span>
                                </button>
                                <button 
                                    className="flex flex-row bg-[red] rounded mx-[2px] p-[5px]"
                                    onClick={()=>setShowEditSection(false)}
                                >
                                    <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoClose20.png`} className="w-[16px] h-[16px]"/>
                                    <span className="text-[11px]">
                                        Chuidi
                                    </span>
                                </button>
                                
                            </div>

                        </div>
                    </div>
                    }

                    <div className="w-full bg-[orange] my-[5px]">
                        <span className="text-[14px] text-[white] font-bold ml-[20px]">
                            INVIO FILE
                        </span>
                    </div>
                   
                    <div className="w-full rounded-[5px] border justify-center items-center p-[10px] my-[5px]">
                        <div className=" text-center text-[11px] my-[10px]">
                            Prima di inviare i file devi effettuare il pagamento dell'ordine in cui hai inserito questo lavoro.
                        </div>
                        <div className=" text-center text-[11px] my-[10px]">
                            <span className="font-bold mx-[2px]">
                            CLICCA QUI 
                            </span>
                            
                            per andare al dettaglio dell'ordine
                        </div>
                    </div>
                    <div className="w-full flex flex-row justify-end items-center my-[10px] ">
                        <span className="w-[120px] h-[30px] flex flex-row justify-center items-center text-[white] bg-[#f58220] hover:bg-[#e96b00] text-center rounded mx-[3px]">
                            <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoIndietroW.png`} className="w-[22px] h-[22px]"/>
                            <span className="mx-[2px] text-[11px] uppercase">
                            Indietro
                            </span>
                        </span>
                        <span className="w-[120px] h-[30px] flex flex-row justify-center items-center text-[white] bg-[#f58220] hover:bg-[#e96b00] text-center rounded mx-[3px]">
                            <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoPrinterW.png`} className="w-[22px] h-[22px]"/>
                            <span className="mx-[2px] text-[11px] uppercase">
                                Stampa
                            </span>
                        </span>
                        <span className="w-[120px] h-[30px] flex flex-row justify-center items-center text-[white] bg-[#009ec9] hover:bg-[#30c9f2] text-center rounded mx-[3px]">
                            <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoFileTypePdf.png`} className="w-[22px] h-[22px]"/>
                            <span className="mx-[2px] text-[11px] uppercase font-bold">
                                Template PDF
                            </span>
                        </span>
                        <span className="w-[120px] h-[30px] flex flex-row justify-center items-center text-[white] bg-[#d6e03d] hover:bg-[#f1fc45] text-center rounded mx-[3px]">
                            <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCarrello32.png`} className="w-[22px] h-[22px]"/>
                            <span className="mx-[2px] text-[11px] uppercase text-[black] font-bold">
                                Vai all' Ordine
                            </span>
                        </span>


                    </div>



                </div>

            </div>
        </div>
    </>
}

export default DettaglioLavoroPage;