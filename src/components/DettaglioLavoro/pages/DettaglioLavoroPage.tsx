import { GLOBAL_CONFIG } from "../../../_config/global";
import { useState } from "react";
import FileSection from "../components/FileSection";
import RowFileEnviato from "../components/RowFileEnviato";
import useDetaglioLavoro from "../hooks/useDetaglioLavoro";
import { numberFormat } from "../../../Helpers/formatNumber";
import SectionFileInviato from "../components/SectionFileInviato";
import CustomTextAreaEdiit from "../components/CustomTextAreaEdiit";
import LoadingBackdrop from "../../loadingBackdrop";
import { enOperationFrame } from "../../../enHelpers/enOperationFrame";

const DettaglioLavoroPage = () => {

    const { dataLavoro, dataEdit, sectionEditable, setDataEdit, handleChange, handlePutModificaNoteNome, clearEditSection, selectedFronte, setSelectedFronte, selectedRetro, setSelectedRetro, handlePutUploadFileLavoro, setUploadOk, uploadOk, setUploadOkStr, uploadOkStr, loadingDettaglio, clearSelectFile, handleOperationFrame, handleInderito, handleOpenNomeInput } = useDetaglioLavoro()

    return <>
        <div className="font-[arial]">
            <LoadingBackdrop isOpen={loadingDettaglio} x={1} sx={{
                bgcolor: "rgba(225,225,225,0.4)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                pr: 8,
                zIndex: '1000'
            }} />
            <div className="w-full flex flex-row items-center justify-center my-[10px]">
                <div className="w-[860px] flex flex-row items-center">
                    <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoLavoro50.png`} />
                    <span className="text-[#f58220] text-[14px] font-bold mx-[2px]">
                        DETTAGLIO DEL TUO LAVORO N°
                    </span>
                    <span className="text-[black] text-[14px] font-bold mx-[2px]">
                        {dataLavoro?.idOrdineInt ? dataLavoro?.idOrdineInt : "PROVVISORIO " + dataLavoro?.idOrdine}
                    </span>
                </div>
                <span className="bg-[#009ec9] font-bold uppercase px-[2px] h-full rounded text-white">React V^18.2.0</span>

            </div>
            <div className="w-full flex flex-row items-center justify-center my-[10px]">
                <div className="w-[800px] ">
                    <hr className="bg-[#f58220] border text-[#f58220] border-[#f58220]" />
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
                                            {dataLavoro?.qta}
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
                                            {dataLavoro?.prodotto}
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
                                            {dataLavoro?.dimensioniStr}
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
                                            {dataLavoro?.tipologia}
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
                                            {dataLavoro?.coloriStampa}
                                        </p>
                                    </div>
                                </div>
                                {dataLavoro?.showLabelFogli &&
                                    <div className="w-full flex flex-row my-[5px]">
                                        <div className="w-[180px] px-[10px] text-[11px]">
                                            <span>
                                                {dataLavoro?.labelFogli}
                                            </span>
                                        </div>
                                        <div className="w-[390px] px-[20px] text-[14px] font-bold">
                                            <p className="text-justify">
                                                {dataLavoro?.nFogliVis}
                                            </p>
                                        </div>
                                    </div>
                                }

                                <div className="w-full flex flex-row my-[5px]">
                                    <div className="w-[180px] px-[10px] text-[11px]">
                                        <span>
                                            Opzioni:
                                        </span>
                                    </div>
                                    <div className="w-[390px] px-[20px] text-[14px] font-bold">
                                        <ul className="ml-[20px] list-disc">
                                            {dataLavoro?.elencoLavorazioni.map((item, i) => (
                                                <li key={i}>
                                                    <p className="text-justify">
                                                        {item.descrizione}
                                                    </p>
                                                </li>
                                            ))}

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
                                            Colli <b>{dataLavoro?.colliStr}</b>, Peso <b>{dataLavoro?.pesoStr}</b> kg ±
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[230px] ">
                                <div className="w-full flex items-start justify-center my-[px]">
                                    <span
                                        style={{ background: dataLavoro?.coloreStatoHTML }}
                                        className={` font-bold text-[11px] py-[3px] px-[10px] text-center border-[1px] border-[#aaa] rounded-[3px]`}
                                    >
                                        {dataLavoro?.statoStr}
                                    </span>
                                </div>
                                <div className="w-full flex items-start justify-center">
                                    <img src={`	https://tipografiaformer.it/listino/img/${dataLavoro?.getImgFormato}`}
                                        className="w-[128px] h-[128px] mt-[20px]"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-row justify-end ">
                            <div className="w-[230px] flex justify-center">
                                <div className="flex flex-row bg-[#d6e03d] p-[5px] rounded-[5px] gap-3">
                                    <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoPrezzo.png`} className="w-[20px] h-[25px]" />
                                    <span className="text-[18px]   ">
                                        {`€ ${dataLavoro?.importoNettoStr} + iva`}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 className="w-full bg-[#f58220] text-white uppercase leading-[22px]  mt-[5px] mb-[10px] pt-[2px] pl-[20px] text-[12px] font-bold ">
                        DETTAGLI E NOTE
                    </h5>
                    <div className="w-full flex flex-row my-[5px]  justify-between gap-3">
                        <div className="w-full">
                            <div className=" flex flex-row py-[5px] items-start gap-1">
                                <p className="text-[11px] pl-[10px]">
                                    Nome Lavoro:
                                </p>
                                <p className={`${dataLavoro?.lnkEditNomeVisible ? 'w-[390px] ml-[32px]' : 'w-[650px] ml-[15px]'}  bg-[#f1f1f1]  p-[10px] text-[11px] `}>
                                    {dataLavoro?.nomeLavoro}
                                </p>
                                {dataLavoro?.lnkEditNomeVisible ?
                                    <button
                                        className="text-[12px] flex flex-row bg-[#ffd30c] hover:bg-[#ffe055] m-0 rounded-[5px] p-[4px]"
                                        onClick={() => handleOpenNomeInput('nomeLavoro')}
                                    >
                                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoEdit20.png`} alt="" className="w-[19px] h-[16px]" />
                                        Modifica Nome
                                    </button> : null
                                }
                            </div>
                            {(dataLavoro && dataLavoro.noAttachFile != 1 && dataLavoro.fronteRetro) ?
                                <div className="w-full flex flex-row   gap-1 items-center">
                                    <p className="text-[11px] pl-[10px]">
                                        Tipo Retro:
                                    </p>
                                    <select
                                        className="ml-[45px] border-[1px] border-[#ddd] py-[3px] font-['opensans'] w-[200px] text-[13px]"
                                    >
                                        {dataLavoro?.tipoRetro.map((item, i) => (
                                            <option value={item.value} key={i}>{item.text}</option>
                                        ))}
                                    </select>
                                </div>
                                : null
                            }
                            {dataLavoro && dataLavoro.showPreventivo ?
                                <div className="w-full flex flex-row mt-[6px]">
                                    <p className="text-[11px] pl-[10px]">
                                        Preventivo:
                                    </p>
                                    <div className="ml-[55px] flex flex-row text-[13px] gap-1 items-start">
                                        <input
                                            type="checkbox"
                                            checked={dataLavoro && dataLavoro.chkPreventivoChecked}
                                            id="preventivo"
                                        />
                                        <label className="" htmlFor="preventivo">
                                            (richiedi preventivo)
                                        </label>

                                    </div>
                                </div>
                                : null
                            }
                            <div className="w-full flex flex-row items-start gap-1 mt-[2px]">
                                <p className="text-[11px] pl-[10px]">
                                    Note:
                                </p>
                                <p className={` ${dataLavoro?.lnkEditNoteVisible ? 'w-[390px] ml-[72px]' : 'w-[650px] ml-[58px]'}   bg-[#f1f1f1]  p-[10px] text-[11px]`}>
                                    {dataLavoro?.annotazioni}
                                </p>
                                {dataLavoro?.lnkEditNoteVisible == true ?
                                    <button
                                        className="text-[12px] flex flex-row bg-[#ffd30c] hover:bg-[#ffe055] m-0 rounded-[5px] p-[4px]"
                                        onClick={() => handleOpenNomeInput('note')}
                                    >
                                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoEdit20.png`} alt="" className="w-[19px] h-[16px]" />
                                        Modifica Note
                                    </button> : null
                                }
                            </div>
                        </div>
                        <div className="flex items-center justify-center mr-[20px] ">
                            <img src={dataLavoro && dataLavoro.anteprimaWeb.length ? `${GLOBAL_CONFIG.IMG_IP} + ${dataLavoro.idOrdineWeb}/${dataLavoro.anteprimaWeb}` : `${GLOBAL_CONFIG.IMG_IP}/img/NoAnteprima.png`} className="" />
                        </div>
                    </div>
                    {sectionEditable.open &&
                        <CustomTextAreaEdiit sectionEditable={sectionEditable} handleChange={handleChange} handlePutModificaNoteNome={handlePutModificaNoteNome} clearEditSection={clearEditSection} dataEdit={dataEdit} />
                    }
                    {dataLavoro?.fileDaInviare ?
                        <RowFileEnviato dataLavoro={dataLavoro} selectedFronte={selectedFronte} setSelectedFronte={setSelectedFronte} selectedRetro={selectedRetro} setSelectedRetro={setSelectedRetro} handlePutUploadFileLavoro={handlePutUploadFileLavoro} uploadOk={uploadOk} setUploadOk={setUploadOk} uploadOkStr={uploadOkStr} setUploadOkStr={setUploadOkStr} clearSelectFile={clearSelectFile} />
                        :
                        (dataLavoro && dataLavoro?.stato == 15) &&
                        ((dataLavoro.noAttachFile != 1) ?
                            <FileSection dataLavoro={dataLavoro} /> : <SectionFileInviato dataLavoro={dataLavoro} handleOperationFrame={handleOperationFrame} />
                        )


                    }
                    {
                        (dataLavoro?.noAttachFile != 1 && !dataLavoro?.fileDaInviare) &&
                        <FileSection dataLavoro={dataLavoro} />
                    }
                    <div className="w-full flex flex-row justify-end items-center my-[10px] ">
                        <button className="w-[120px] h-[30px] flex flex-row justify-center items-center text-[white] bg-[#f58220] hover:bg-[#e96b00] text-center rounded mx-[3px]" onClick={handleInderito}>
                            <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoIndietroW.png`} className="w-[22px] h-[22px]" />
                            <span className="mx-[2px] text-[11px] uppercase">
                                Indietro
                            </span>
                        </button>
                        <button className="w-[120px] h-[30px] flex flex-row justify-center items-center text-[white] bg-[#f58220] hover:bg-[#e96b00] text-center rounded mx-[3px]" onClick={() => { handleOperationFrame(enOperationFrame.print) }}>
                            <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoPrinterW.png`} className="w-[22px] h-[22px]" />
                            <span className="mx-[2px] text-[11px] uppercase">
                                Stampa
                            </span>
                        </button>
                        {dataLavoro?.templatePDF &&
                            <a className="w-[120px] h-[30px] flex flex-row justify-center items-center text-[white] bg-[#009ec9] hover:bg-[#30c9f2] text-center rounded mx-[3px]" href={"https://www.tipografiaformer.it/listino/template/" + dataLavoro?.templatePDF} target="_blank">
                                <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoFileTypePdf.png`} className="w-[22px] h-[22px]" />
                                <span className="mx-[2px] text-[11px] uppercase font-bold">
                                    Template PDF
                                </span>
                            </a>
                        }

                        <button className="w-[120px] h-[30px] flex flex-row justify-center items-center text-[white] bg-[#d6e03d] hover:bg-[#f1fc45] text-center rounded mx-[3px]" onClick={() => handleOperationFrame(enOperationFrame.redirectDetaglioOrdini, undefined, undefined, dataLavoro?.idConsegna)}>
                            <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCarrello32.png`} className="w-[22px] h-[22px]" />
                            <span className="mx-[2px] text-[11px] uppercase text-[black] font-bold">
                                Vai all' Ordine
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default DettaglioLavoroPage;