import { Divider } from "@mui/material"
import LoadingBackdrop from "../loadingBackdrop"
import { ButtonCustom } from "./components/ButtonCustom"
import CheckBoxCards from "./components/CheckBoxCards"
import { ImageCustom } from "./components/ImageCustom"
import { InputCustom } from "./components/InputCustom"
import { InputCustomSelect } from "./components/InputCustomSelect"
import ListCustom from "./components/ListCustom"
import RadioCars from "./components/RadioCars"
import RadioCustom from "./components/RadioCustom"
import TableCustom from "./components/TableCustom"
import useRefactorProdotto from "./hooks/useRefactorProdotto"
import MenuCarrelo from "./components/MenuCarrelo"
import { Link } from "react-router-dom"
import { numberFormat } from "../../Helpers/formatNumber"
import { GLOBAL_CONFIG } from "../../_config/global"
import { DateFormatDDMMYY } from "../../Helpers/formatDates"
import ProdottiSuggeriti from "./components/ProdottiSuggeriti"
import RecencioniC from "./components/RecencioniC"
import { useEffect, useState } from "react"
import PreventivoPDF, { PreventivoPDFhtmlString } from "./components/PreventivoPDF"
import jsPDF from 'jspdf';
import ReactDOMServer from 'react-dom/server';
import { enOperationFrame } from "../../enHelpers/enOperationFrame"

const ConfiguraProdottoRefactor = () => {
    const {
        initialState,
        handleChange,
        handleOptionsTipoCarta,
        handleOptionsColoreStampa,
        handleOptionsOpzioni,
        stampaCalOpz,
        handleStampaCaldoOpz,
        tablaDate,
        showColumTable,
        tablaDataPrezzi,
        showTablePreez,
        handleChangeRowSelect,
        selectRow,
        orientamiento,
        handleOrientamiento,
        hanldeFormatoList,
        showBloccoMisure,
        mmValue,
        disableProfundita,
        textMetrics,
        showProfundita,
        showOpzzioni,
        idBaseEtiquete,
        idAltezaEtiquete,
        formatoDinamico,
        handleOptionsFormat,
        showSvg,
        imageSvg,
        setimgAcoppiati,
        imgAcoppiati,
        valuesStampaCaldoOpz,
        showCoperatina,
        copertina,
        handleCoperatinaOpz,
        showSotoblocco,
        sotoblocco,
        handleSotobloccoOpz,
        showFaciatePagine,
        handleFogliPagine,
        labelFogli,
        showQtaCustom,
        alertMassimo,
        viewRows,
        utenteData,
        setSenderComandargument,
        senderComandargument,
        handleChangeViewTableRows,
        handleCalcolaTuto,
        calcolaTuto,
        handleCarrello,
        handleHidden,
        handleSelectDate,
        textTipoCarta,
        idFormProd, IdTipoCarta, IdColoreStampa,
        setTablaDataPrezzi,
        qtaSelezinata,
        setQtaSelezinata,
        idFustella,
        openLoadingBackdrop,
        setOpenLoadingBackdrop,
        prezzoActive,
        idUt,
        handleLogin,
        handleImg,
        prodottoConsigliato,
        rencensioniP,
        recencioniC,
        descrizioneDinamica,
        opzInclusa,
        menuDateConsegna,
        handleCompraloSubito,
        formatoList,
        handleOptionOPZ,
        handleCarrelloData,
        handleDonwloadPDF,
        TotaleProvisorio,
        dimensionniStr
    } = useRefactorProdotto()
    const [pdfTemplate, setPdfTemplate] = useState<string | undefined>();
    const [prodotto, setProdotto] = useState<any | undefined>();

    const CustomFormatTemplateChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        handleChange(evt);
        let listFormat = hanldeFormatoList();
        const { name, value } = evt.target;
        let result = listFormat.find(e => e.value == value);
        setPdfTemplate(result?.pdfTemplate);
        setProdotto(result);
    }



    const SelectFormato = () => {
        switch (idBaseEtiquete) {
            case "0":
                return (
                    <select name="" id="" className="border-[1px] w-full border-[#ddd] font-[open sans] py-[3px]">
                        <option value="">{handleOptionsFormat()}
                        </option>
                    </select>)
            default:
                return (
                    <select name="" id="" className="border-[1px] w-full border-[#ddd] font-[open sans] py-[3px]">
                        <option value="">{`${idBaseEtiquete} x ${idAltezaEtiquete} (${formatoDinamico})`}
                        </option>
                    </select>)
                break;
        }
    }

    const setInitial = () => {
        let listFormat = hanldeFormatoList();
        if (listFormat?.length > 0) {
            setPdfTemplate(listFormat[0].pdfTemplate);
            setProdotto(listFormat[0]);
        }
    }

    useEffect(() => {
        setInitial();
    }, [formatoList])

    return (
        <div className="w-full flex gap-3 relative ">
            <div className="w-[75%]">
                <LoadingBackdrop isOpen={openLoadingBackdrop} HandleChange={setOpenLoadingBackdrop} x={5} sx={{ bgcolor: 'rgba(225,225,225,0.4)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', pr: 8, }} />
                <h5 className="ps-[20px] py-[2px] bg-[#f58220] text-[#fff] text-[12px] tracking-normal ">CONFIGURA IL TUO PRODOTTO</h5>
                <div className="flex mt-3 ps-[4.5px]">
                    <table className="w-[75%]">
                        <tbody>
                            {showOpzzioni ?
                                <tr>
                                    <td className="w-[95px] p-[1px] text-[12px]  font-normal">Formato</td>
                                    <td className="border-b-[2px] border-[#fff] px-[10px] py-[6px] text-[14px] bg-[#f1f1f1] 
                                                hover:shadow-[0_0px_0px_1.5px_#d6e03d_inset]">
                                        {SelectFormato()}
                                    </td>
                                    <td className=" p-[6px]">
                                        <span
                                            className={` text-gray-800 cursor-pointer text-xs`}
                                        >
                                            <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoInfo20.png`} style={{ transform: 'scale(1.3)', }} />
                                        </span>
                                    </td>
                                </tr> :
                                <InputCustomSelect showIcon={true} name="formatoS" handleChange={CustomFormatTemplateChange} label="Formato" options={hanldeFormatoList()} defaulSelect={idFormProd} initialState={initialState} />
                            }

                            {orientamiento ? <InputCustomSelect showIcon={false} name="orientamiento" handleChange={handleChange} label="Orientamento" options={handleOrientamiento()} /> : null}
                            <InputCustomSelect showIcon={false} name="tipoCarta" handleChange={handleChange} label={textTipoCarta} options={handleOptionsTipoCarta()} defaulSelect={IdTipoCarta} initialState={initialState} />

                            {showCoperatina ? <ListCustom label={copertina[0].text} options={handleCoperatinaOpz()} /> : null}
                            {showSotoblocco ? <ListCustom label={sotoblocco[0].text} options={handleSotobloccoOpz()} /> : null}

                            <InputCustomSelect showIcon={false} name="coloreStampa" handleChange={handleChange} label="Colore di stampa" options={handleOptionsColoreStampa()} defaulSelect={IdColoreStampa} initialState={initialState} />

                            {showFaciatePagine ? <InputCustomSelect stylePerzonalize={'w-3/4'} showIcon={true} name="facciatePagine" handleChange={handleChange} label={labelFogli} options={handleFogliPagine()} initialState={initialState} /> : null}

                            {showBloccoMisure &&
                                <>
                                    <InputCustom
                                        handleChange={handleChange}
                                        name="base"
                                        label="Base"
                                        classWhidtInput="w-[45%] text-end"
                                        xx={mmValue.base}
                                        metrics={textMetrics}
                                    />
                                    {showProfundita ?
                                        <InputCustom
                                            handleChange={handleChange}
                                            name="depth"
                                            label="Profondità"
                                            classWhidtInput="w-[45%] text-end"
                                            xx={mmValue.depth}
                                            disabled={disableProfundita}
                                            metrics={textMetrics}
                                        /> : null
                                    }
                                    <InputCustom
                                        handleChange={handleChange}
                                        name="height"
                                        label="Altezza"
                                        classWhidtInput="w-[45%] text-end"
                                        xx={mmValue.height}
                                        metrics={textMetrics}
                                    />
                                </>
                            }
                            {showQtaCustom &&
                                showQtaCustom == true ?
                                <InputCustom
                                    handleChange={handleChange}
                                    name="quantity"
                                    label="Quantità *"
                                    classWhidtInput="w-[64%] text-start"
                                    classCustomLabel=" w-[95px] p-[1px] text-[12px] text-[arial] font-bold"
                                    info
                                    on={true}
                                    mm={false}
                                    metrics=""
                                />
                                : false
                            }
                            {parseInt(String(idFustella)) === 0 && <ListCustom label="Opzioni" options={handleOptionsOpzioni()} />}

                            {stampaCalOpz?.map((elem, i) => {
                                ////console.log("elemselect",stampaCalOpz)
                                if (elem.tipoControllo === 1) {
                                    return (
                                        <InputCustomSelect key={i} showIcon={true} name={elem.descrizione} label={elem.descrizione} options={handleStampaCaldoOpz(elem.optionsSelect)} handleChange={handleChange} valuesStampaCaldoOpz={valuesStampaCaldoOpz} initialState={initialState} />
                                    )
                                }
                            })}
                        </tbody>
                    </table>
                    <div className=" w-[25%]">
                        {showSvg ?
                            <ImageCustom svgImage={imageSvg} /> :
                            <img src={`https://tipografiaformer.it/listino/img/${handleImg()}`} alt="" width={128} />
                        }
                    </div>
                </div>
                {stampaCalOpz?.map((elem, i) => {
                    if (elem.tipoControllo === 2) {
                        return (
                            <CheckBoxCards key={i} setImage={setimgAcoppiati} options={handleStampaCaldoOpz(elem.optionsSelect)} name={elem.descrizione} label={elem.descrizione} handleChange={handleChange} valuesStampaCaldoOpz={valuesStampaCaldoOpz} />
                        )
                    }
                })
                }
                {stampaCalOpz?.map((elem, i) => {
                    if (elem.tipoControllo === 0) {
                        return (
                            <RadioCars key={i} setImage={setimgAcoppiati} options={handleStampaCaldoOpz(elem.optionsSelect)} name={elem.descrizione} label={elem.descrizione} handleChange={handleChange} valuesStampaCaldoOpz={valuesStampaCaldoOpz} initialState={initialState} />
                        )
                    }
                })
                }
                <div className="w-full text-xs ">
                    {(tablaDataPrezzi.length === 0 && (initialState.base !== null && initialState.height !== null && initialState.depth !== null)) && <p className=" text-center my-3 tracking-tighter text-[#ff0000] font-semibold">PER RICEVERE UN PREVENTIVO PER LE MISURE INSERITE CONTATTARCI TELEFONICAMENTE</p>}
                    {(alertMassimo) && <p className=" text-center my-3 tracking-tighter text-[#ff0000] text-[12.5px] font-semibold text-">PER RICEVERE UN PREVENTIVO PER LE MISURE INSERITE CONTATTARCI TELEFONICAMENTE <br /><span className="uppercase italic">{alertMassimo}</span></p>}
                    {showOpzzioni === 1 ?
                        <li className="bg-gray-100 rounded py-1 px-1  "><a href="" className="hover:underline font-bold " >CLICCA QUI</a> per consultare le fustelle già disponibili;</li> : null
                    }
                    {showQtaCustom ?
                        <li className="bg-gray-100 rounded py-1 px-1 my-1 italic">* La quantità potrebbe essere arrotondata automaticamente per motivi tecnici;</li> : null
                    }

                </div>
                <div className=" w-full flex gap-5 mb-3 mt-[18px] justify-end text-xs">
                    <i className="text-[11.5px] me-1">Visualizza prezzo </i>
                    <RadioCustom name="iva" value={2} checked={initialState.iva == 2 ? true : false} label="CAD." handleCheckboxChange={handleChange} />
                    <RadioCustom name="iva" value={0} checked={initialState.iva == 0 ? true : false} label="Senza IVA" handleCheckboxChange={handleChange} />
                    <RadioCustom name="iva" value={1} checked={initialState.iva == 1 ? true : false} label="Con IVA" handleCheckboxChange={handleChange} />
                </div>
                <h5 className="mb-[13px] ps-[20px] pt-[2.5px] pb-[2.5px] bg-[#f58220] text-[#fff] text-[12px] tracking-normal">SCEGLI LA DATA IN CUI VUOI RICEVERE IL PRODOTTO</h5>
                <TableCustom handleCalcolaTuto={handleCalcolaTuto} senderComandargument={senderComandargument} setSenderComandargument={setSenderComandargument} tablaDataPrezzi={tablaDataPrezzi} tablaDate={tablaDate} radioIva={Number(initialState.iva)} showColumTable={showColumTable} handleChangeRowSelect={handleChangeRowSelect} showTablePreez={showTablePreez} viewRows={viewRows} selectRow={selectRow} handleSelectDate={handleSelectDate} alertMassimo={alertMassimo} setTablaDataPrezzi={setTablaDataPrezzi} initialState={initialState} qtaSelezinata={qtaSelezinata} calcolaTuto={calcolaTuto} prezzoActive={prezzoActive} />

                <ButtonCustom handleChange={handleChangeViewTableRows} text={viewRows ? "▼ Mostra più quantità ▼" : "▲ Mostra meno quantità ▲"} />

                <div className="bg-[#d6e03d] w-full p-[10px] h-[92px] flex flex-col justify-between mt-1">
                    <div className="flex justify-between">
                        <p className="text-[10px] flex items-center gap-1">
                            <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoPrezzo.png`} width="20" height="25" />
                            PREZZO {utenteData?.tipo !== 1 ? (
                                <>
                                    RISERVATO A:<b className="text-[13px] uppercase">{utenteData?.nominativo}</b>
                                </>
                            ) : ''}
                        </p>
                        <p className="text-[22px] font-bold"> {showTablePreez ? "€" + numberFormat(calcolaTuto?.prezzoCalcolatoNetto) + " + iva" : "-"} </p>
                    </div>

                    <div className=" flex justify-between">
                        <div className="hidden">
                            <PreventivoPDF utenteData={utenteData} descrizioneDinamica={descrizioneDinamica} initialState={initialState} hanldeFormatoList={hanldeFormatoList} handleOptionsTipoCarta={handleOptionsTipoCarta} handleOptionsColoreStampa={handleOptionsColoreStampa} handleOptionOPZ={handleOptionOPZ} qtaSelezinata={qtaSelezinata} showTablePreez={showTablePreez} handleCarrelloData={handleCarrelloData} menuDateConsegna={menuDateConsegna} calcolaTuto={calcolaTuto} idBaseEtiquete={idBaseEtiquete} dimensionniStr={dimensionniStr} showOpzzioni={showOpzzioni} idAltezaEtiquete={idAltezaEtiquete}/>
                        </div>

                        <a className="flex gap-1 text-[12px] cursor-pointer" onClick={handleDonwloadPDF}><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoFileTypePDF.png`} width={20} height={20} /> Preventivo PDF  ↓</a>

                        <p className="text-[11px]">Prezzo consigliato al pubblico min. <b> {showTablePreez ? "€ " + numberFormat(calcolaTuto?.prezzoPubblico) + " + iva" : "-"} </b>  (+ grafica € <b>{numberFormat(calcolaTuto?.graficaPerFacciata)}</b> a facciata)</p>
                    </div>
                </div>
                <div className="bg-[#f1f1f1] w-full p-[10px] flex flex-col justify-between mt-4">
                    {tablaDataPrezzi.some(x => x.prezzoPromo > 0) &&
                        <p className="flex text-[12px] mb-[30px]">
                            <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoPromo20.png`} className="w-[25px] h-[19px]" />
                            <span className="bg-[#009ec9] px-[3px] text-white font-normal rounded-[3px] mx-[2px] " >Promo </span>
                            Prodotto in promozione con sconto del <span className="bg-[#009ec9] px-[3px] text-white font-normal rounded-[3px] mx-[2px]"> {calcolaTuto?.promoPercentuale} %</span>  fino al {DateFormatDDMMYY(calcolaTuto?.dataFineValidita)}
                        </p>
                    }
                    <p className="text-[12px] flex items-center gap-1"><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCorriere20.png`} /> <b>SPEDIZIONE:</b> Numero di colli indicativo <b>{showTablePreez ? calcolaTuto?.colli : "-"}</b> , Peso indicativo <b>{showTablePreez ? calcolaTuto?.pesoStr : "-"}</b> kg ± , Costo <b>€ {numberFormat(calcolaTuto?.costo)}</b></p>
                </div>
                <h4 className="bg-[#e8e8e8] w-full mt-3 text-[12px] ps-[20px] pt-[4px]">DAI UN NOME AL LAVORO</h4>
                <div className="w-full flex items-center justify-center px-5 mt-2 text-[#000] font-[400]"><input type="text" maxLength={100} name="nome" onChange={handleChange} className="w-full text-[14px] border border-[#000] px-[2px] py-[1px] rounded-[2px]" placeholder="Qui se vuoi puoi dare un nome a questo lavoro per riconoscerlo più agevolmente in seguito" ></input></div>
                <h4 className="bg-[#e8e8e8] w-full mt-3 text-[12px] ps-[20px] pt-[4px]">NOTE</h4>
                <div className="w-full flex items-center justify-center px-5 mt-2 text-[#000] font-[400]"><textarea rows={2} cols={20} className="w-full text-[14px] border border-[#000] px-[2px] py-[1px] rounded-[2px]" placeholder="Qui puoi aggiungere note o indicazioni particolari riguardanti questo ordine" name="note" onChange={handleChange}></textarea></div>
                <div className="w-full mt-5  flex justify-end">
                    <div className="w-[200px] h-[134px] border border-[#aaa] rounded-[5px] p-[15px] flex flex-col justify-between">
                        {idUt != undefined && idUt > '0' ?
                            <>
                                {/* <Link to={"/carrello"}> */}
                                    <button onClick={() => { (showBloccoMisure && initialState.base && initialState.height) && (showProfundita && initialState.depth) ? handleCarrello(): null; (showBloccoMisure === false || showProfundita === false) ? handleCarrello() :null }} className="flex gap-[2px] items-center bg-[#d6e03d] rounded-[4px] w-full text-[11.5px] font-medium uppercase px-[4px] py-[4px] hover:bg-[#FCFF33]"><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCarrello.png`} width={22} /> Aggiungi al Carrello</button>
                                {/* </Link> */}
                                <Divider orientation="horizontal" variant="middle" flexItem sx={{ fontSize: 11, alignItems: 'center' }}>
                                    oppure
                                </Divider>
                                {/* <Link to={"/carrello"} > */}
                                <button className="flex gap-2 bg-[#f58220] rounded-[4px] w-full text-[12px] text-[#fff] font-bold uppercase hover:bg-[#E5781B] px-[4px] py-[4px] items-center" onClick={() => {(showBloccoMisure && initialState.base && initialState.height) || (showProfundita && initialState.depth) ? handleCompraloSubito(): null; (showBloccoMisure === false || showProfundita === false) ? handleCompraloSubito() :null  }}><img src={`${GLOBAL_CONFIG.IMG_IP}/img/ico1Click.png`} width={22} />Compralo subito</button>
                                {/* </Link> */}

                            </>
                            :
                            <>
                                <button onClick={handleLogin} className="flex gap-[2px] items-center bg-[#d6e03d] rounded-[4px] w-full text-[11.5px] font-medium uppercase px-[4px] py-[4px] hover:bg-[#FCFF33]"><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCarrello.png`} width={22} /> Aggiungi al Carrello</button>
                                <Divider orientation="horizontal" variant="middle" flexItem sx={{ fontSize: 11, alignItems: 'center' }}>
                                    oppure
                                </Divider>
                                <button onClick={handleLogin} className="flex gap-2 bg-[#f58220] rounded-[4px] w-full text-[12px] text-[#fff] font-bold uppercase hover:bg-[#E5781B] px-[4px] py-[4px] items-center" ><img src={`${GLOBAL_CONFIG.IMG_IP}/img/ico1Click.png`} width={22} />Compralo subito</button>
                            </>
                        }

                    </div>
                </div>
                <div className="mt-[15px]  w-full mb-[40px]">
                    <h2 className="bg-[#d6e03d] text-[12px] mt-0 mb-[5px] pt-[2px] ps-[20px] leading-[22px]">ALCUNI PRODOTTI SUGGERITI PER TE</h2>
                    <div className="">
                        {prodottoConsigliato.map((elem, i) => (
                            <ProdottiSuggeriti prodottoConsigliato={elem} key={i} />
                        ))
                        }
                    </div>
                </div>
                <div className="">
                    <h2 className="bg-[#d6e03d] text-[12px] mt-0 mb-[5px] pt-[2px] ps-[20px] leading-[22px]">RECENSIONI DEI CLIENTI DI QUESTO PRODOTTO</h2>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-end text-[12px] gap-2">
                                <span className="flex" dangerouslySetInnerHTML={{ __html: String(rencensioniP?.stars) }}></span>
                                <span className=""><b>{rencensioniP?.recesioni}</b> recensioni</span>
                            </div>
                            {rencensioniP && rencensioniP.voto > '0' ?
                                <p className="text-[12px] ms-[10px]"><b>{rencensioniP?.voto}</b> su 5 stelle</p>
                                : null
                            }
                        </div>
                        <button className="flex bg-[#d6e03d] text-[11px] w-[150px] h-[30px] font-bold leading-[30px] uppercase justify-center items-center gap-1 rounded me-[15px]" onClick={()=>handleHidden(enOperationFrame.reliadUrl,'le-tue-recensioni')}><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoRecensione.png`} className="w-[22px]" /> Scrivi recensione</button>
                    </div>
                </div>
                <div className="">
                    <h3 className="font-bold text-[13px] mt-[13px] mb-[5px]">Le più recenti tra le recensioni dei clienti</h3>
                    {recencioniC.map((item, i) => (
                        <RecencioniC item={item} key={i} />
                    ))}
                </div>
                <div className="p-[10px] leading-[30px] bg-[#f1f1f1] mt-8">
                    <h2 className="text-[1.3em] font-bold mb-[15px]">{descrizioneDinamica?.nombe}</h2>
                    <p className="w-full text-[14px] text-justify">
                        {descrizioneDinamica?.descrizioneEstesa}
                    </p>
                    <h3 className="text-[1.1em] font-bold my-[14px]">Il {descrizioneDinamica?.tipoCarta}</h3>
                    <p className="w-full text-[14px] text-justify">
                        {descrizioneDinamica?.descrizioneEstesaEx}
                    </p>
                    {opzInclusa.map((item, i) => (
                        <div className="w-full" key={i}>
                            <h4 className="text-[17px] font-bold my-[13px]">Opzione {item.opzione}  {item.catLav}</h4>
                            <p className="text-[14px] text-justify indent-[5px] leading-[24px]"><b>{item.label}</b>, {item.description}
                            </p>
                        </div>
                    ))}
                    {handleOptionsOpzioni().map((item, i) => (
                        <div className="w-full" key={i}>
                            <h4 className="text-[17px] font-bold my-[13px]">Opzione inclusa {item.catLav}</h4>
                            <p className="text-[14px] text-justify indent-[5px] leading-[24px]"><b>{item.label}</b>, {item.description}
                            </p>
                        </div>

                    ))}

                </div>

            </div>
            <div className="w-[25%] ">
                <MenuCarrelo handleHidden={handleHidden} idUt={idUt} handleLogin={handleLogin} handleCarrello={handleCarrello} handleCompraloSubito={handleCompraloSubito} calcolaTuto={calcolaTuto} qtaSelezinata={qtaSelezinata} menuDateConsegna={menuDateConsegna} pdfTemplate={pdfTemplate}
                    prodotto={prodotto} showTablePreez={showTablePreez} descrizioneDinamica={descrizioneDinamica} TotaleProvisorio={TotaleProvisorio} />
            </div>
        </div>

    )
}

export default ConfiguraProdottoRefactor


/**
 * !FIXME : AL CAMBIAR EL TIPO DE CARTA BORRA LOS INPUTS O LOS VALORES DE LOS INPUTS
 * !FIXME: EN LOS CHECKBOX SELECCIONAR FUNCIONA AL QUINTAR LA SELECCION NO DESCUENTA DE LOS PRECIOS
 * !FIXME: AL INGRESAR UN VALOR U VACIALO A LOS INPUTS SE CUELLGA OTRA VEZ XD
 *  
 */