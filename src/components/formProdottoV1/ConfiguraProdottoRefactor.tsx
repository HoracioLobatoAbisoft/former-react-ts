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
        handleHidden
    } = useRefactorProdotto()

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
    return (
        <div className="w-full flex gap-3 relative">
            <div className="w-[75%]">
                {/* <LoadingBackdrop isOpen={openLoadingBackdrop} HandleChange={setOpenLoadingBackdrop} /> */}
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
                                            <img src="http://95.110.133.251:5051/img/icoInfo20.png" style={{ transform: 'scale(1.3)', }} />
                                        </span>
                                    </td>
                                </tr> :
                                <InputCustomSelect showIcon={true} name="formatoS" handleChange={handleChange} label="Formato" options={hanldeFormatoList()} />
                            }

                            {orientamiento ? <InputCustomSelect showIcon={false} name="orientamiento" handleChange={handleChange} label="Orientamento" options={handleOrientamiento()} /> : null}
                            <InputCustomSelect showIcon={false} name="tipoCarta" handleChange={handleChange} label={'Tipo di Carta'} options={handleOptionsTipoCarta()} />

                            {showCoperatina ? <ListCustom label={copertina[0].text} options={handleCoperatinaOpz()} /> : null}
                            {showSotoblocco ? <ListCustom label={sotoblocco[0].text} options={handleSotobloccoOpz()} /> : null}

                            <InputCustomSelect showIcon={false} name="coloreStampa" handleChange={handleChange} label="Colore di stampa" options={handleOptionsColoreStampa()} />

                            {showFaciatePagine ? <InputCustomSelect stylePerzonalize={'w-3/4'} showIcon={true} name="facciatePagine" handleChange={handleChange} label={labelFogli} options={handleFogliPagine()} /> : null}

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

                            <ListCustom label="Opzioni" options={handleOptionsOpzioni()} />
                            {stampaCalOpz?.map((elem, i) => {                                
                                if (elem.tipoControllo === 1) {
                                    return (
                                        <InputCustomSelect key={i} showIcon={true} name={elem.descrizione} label={elem.descrizione} options={handleStampaCaldoOpz(elem.optionsSelect)} handleChange={handleChange} />
                                    )
                                }
                            })}
                        </tbody>
                    </table>
                    <div className=" w-[25%]">
                        {showSvg ?
                            <ImageCustom svgImage={imageSvg} /> :
                            <img src={`http://95.110.133.251:5051/listino/img/${() => { }/*handleChangeSVG()*/}`} alt="" width={128} />
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
                            <RadioCars key={i} setImage={setimgAcoppiati} options={handleStampaCaldoOpz(elem.optionsSelect)} name={elem.descrizione} label={elem.descrizione} handleChange={handleChange} />
                        )
                    }
                })
                }
                <div className="w-full text-xs ">
                    {(tablaDataPrezzi.length === 0 && (initialState.base !== null && initialState.height !== null && initialState.depth !== null)) && <p className=" text-center my-3 tracking-tighter text-[#ff0000] font-semibold">PER RICEVERE UN PREVENTIVO PER LE MISURE INSERITE CONTATTARCI TELEFONICAMENTE</p>}
                    {(alertMassimo) && <p className=" text-center my-3 tracking-tighter text-[#ff0000] text-[12.5px] font-semibold text-">PER RICEVERE UN PREVENTIVO PER LE MISURE INSERITE CONTATTARCI TELEFONICAMENTE <br /><span className="uppercase italic">{alertMassimo}</span></p>}
                    {showOpzzioni ?
                        <li className="bg-gray-100 rounded py-1 px-1  "><a href="" className="hover:underline font-bold " >CLICCA QUI</a> per consultare le fustelle già disponibili;</li> : null
                    }
                    {showQtaCustom ?
                        <li className="bg-gray-100 rounded py-1 px-1 my-1 italic">* La quantità potrebbe essere arrotondata automaticamente per motivi tecnici;</li> : null
                    }

                </div>
                <div className=" w-full flex gap-5 mb-3 mt-[18px] justify-end text-xs">
                    <i className="text-[11.5px] me-1">Visualizza prezzo </i>
                    <RadioCustom name="iva" value={2} checked={initialState.iva === 2} label="CAD." handleCheckboxChange={handleChange} />
                    <RadioCustom name="iva" value={0} checked={initialState.iva === 0} label="Senza IVA" handleCheckboxChange={handleChange} />
                    <RadioCustom name="iva" value={1} checked={initialState.iva === 1} label="Con IVA" handleCheckboxChange={handleChange} />
                </div>
                <h5 className="mb-[13px] ps-[20px] pt-[2.5px] pb-[2.5px] bg-[#f58220] text-[#fff] text-[12px] tracking-normal">SCEGLI LA DATA IN CUI VUOI RICEVERE IL PRODOTTO</h5>
                <TableCustom handleCalcolaTuto={handleCalcolaTuto} senderComandargument={senderComandargument} setSenderComandargument={setSenderComandargument} tablaDataPrezzi={tablaDataPrezzi} tablaDate={tablaDate} radioIva={Number(initialState.iva)} showColumTable={showColumTable} handleChangeRowSelect={handleChangeRowSelect} showTablePreez={showTablePreez} viewRows={viewRows} selectRow={selectRow} />
                {
                    showTablePreez == true && <ButtonCustom handleChange={handleChangeViewTableRows} text={viewRows ? "▼ Mostra più quantità ▼" : "▲ Mostra meno quantità ▲"} />
                }
                <div className="bg-[#d6e03d] w-full p-[10px] h-[92px] flex flex-col justify-between mt-1">
                    <div className="flex justify-between">
                        <p className="text-[10px] flex items-center gap-1">
                            <img src="https://localhost:44311/img/icoPrezzo.png" width="20" height="25" />
                            PREZZO {utenteData?.tipo !== 1 ? (
                                <>
                                    RISERVATO A:<b className="text-[13px] uppercase">{utenteData?.nominativo}</b>
                                </>
                            ) : ''}
                        </p>
                        <p className="text-[22px] font-bold">€ {calcolaTuto?.prezzoCalcolatoNetto}.00 + iva</p>
                    </div>
                    <div className=" flex justify-between">
                        <a href="#" className="flex gap-1 text-[12px]"><img src="https://localhost:44311/img/icoFileTypePDF.png" width={20} height={20} /> Preventivo PDF  ↓</a>
                        <p className="text-[11px]">Prezzo consigliato al pubblico min. <b>€ {calcolaTuto?.prezzoPubblico}.00 + iva</b>  (+ grafica € <b>{calcolaTuto?.graficaPerFacciata}.00</b> a facciata)</p>
                    </div>
                </div>
                <div className="bg-[#f1f1f1] w-full p-[10px] flex flex-col justify-between mt-4">
                    <p className="text-[12px] flex items-center gap-1"><img src="https://localhost:44311/img/icoCorriere20.png" /> <b>SPEDIZIONE:</b> Numero di colli indicativo <b>{calcolaTuto?.colli}</b> , Peso indicativo <b>{calcolaTuto?.pesoStr}</b> kg ± , Costo <b>€ {calcolaTuto?.costo}</b></p>
                </div>
                <h4 className="bg-[#e8e8e8] w-full mt-3 text-[12px] ps-[20px] pt-[4px]">DAI UN NOME AL LAVORO</h4>
                <div className="w-full flex items-center justify-center px-5 mt-2 text-[#000] font-[400]"><input type="text" maxLength={100} name="nome" onChange={handleChange} className="w-full text-[14px] border border-[#000] px-[2px] py-[1px] rounded-[2px]" placeholder="Qui se vuoi puoi dare un nome a questo lavoro per riconoscerlo più agevolmente in seguito" ></input></div>
                <h4 className="bg-[#e8e8e8] w-full mt-3 text-[12px] ps-[20px] pt-[4px]">NOTE</h4>
                <div className="w-full flex items-center justify-center px-5 mt-2 text-[#000] font-[400]"><textarea rows={2} cols={20} className="w-full text-[14px] border border-[#000] px-[2px] py-[1px] rounded-[2px]" placeholder="Qui puoi aggiungere note o indicazioni particolari riguardanti questo ordine" name="note" onChange={handleChange}></textarea></div>
                <div className="w-full mt-5  flex justify-end">
                    <div className="w-[200px] h-[134px] border border-[#aaa] rounded-[5px] p-[15px] flex flex-col justify-between">
                        <Link to={"/carrello"}>
                            <button onClick={() => handleCarrello()} className="flex gap-[2px] items-center bg-[#d6e03d] rounded-[4px] w-full text-[11.5px] font-medium uppercase px-[4px] py-[4px] hover:bg-[#FCFF33]"><img src="https://localhost:44311/img/icoCarrello.png" width={22} /> Aggiungi al Carrello</button>
                        </Link>
                        <Divider orientation="horizontal" variant="middle" flexItem sx={{ fontSize: 11, alignItems: 'center' }}>
                            oppure
                        </Divider>
                        <button className="flex gap-2 bg-[#f58220] rounded-[4px] w-full text-[12px] text-[#fff] font-bold uppercase hover:bg-[#E5781B] px-[4px] py-[4px] items-center"><img src="https://localhost:44311/img/ico1Click.png" width={22} />Compralo subito</button>
                    </div>
                </div>
                
            </div>
            <div className="w-[25%]  ">
                <MenuCarrelo handleHidden={handleHidden}/>
            </div>
        </div>

    )
}

export default ConfiguraProdottoRefactor