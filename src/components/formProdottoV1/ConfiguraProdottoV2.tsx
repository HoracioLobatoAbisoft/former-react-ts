import { Divider } from "@mui/material"
import { DateFormatDDMMYY } from "../../Helpers/formatDates"
import { numberFormat } from "../../Helpers/formatNumber"
import { GLOBAL_CONFIG } from "../../_config/global"
import LoadingBackdrop from "../loadingBackdrop"
import { ButtonCustom } from "./components/ButtonCustom"
import CheckBoxCards from "./components/CheckBoxCards"
import { InputCustomSelect } from "./components/InputCustomSelect"
import ListCustom from "./components/ListCustom"
import RadioCars from "./components/RadioCars"
import RadioCustom from "./components/RadioCustom"
import InputComponent from "./componentsv2/InputComponent"
import TableComponent from "./componentsv2/TableComponent"
import useConfigProdottoV2 from "./hooks/useConfigProdottoV2"
import { enOperationFrame } from "../../enHelpers/enOperationFrame"
import { InputCustom } from "./components/InputCustom"

const ConfiguraProdottoV2 = () => {

    const { handleOptionFormato, handleChange, initialState, handleOrientamiento, handleOptionTipoCarta, handleOptionColoriStampa, stampaCalOpz, handleOptionsStampaCaldo, tablaDate, openLoading, tablaDataPrezzi, valuesStampaCaldoOpz, handleOptionsOpzioni, selectedImage, setviewRow, viewRow, calcolaTuto, utenteData, handlePrezzoTable, handleOperationFrame, handleOptionsCopertina, handleOptionSottoblocco, labelFogli, handleFogliPagine, showSotoblocco, showFaciatePagine, showQtaCustom } = useConfigProdottoV2();

    //console.log(selectedImage);

    return (
        <div className="w-full flex gap-3 relative flex-col">
            <LoadingBackdrop isOpen={openLoading} x={5} sx={{ bgcolor: 'rgba(225,225,225,0.4)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', pr: 8, }} />
            <h5 className="ps-[20px] w-full py-[2px] bg-[#f58220] text-[#fff] text-[12px] tracking-normal ">CONFIGURA IL TUO PRODOTTO</h5>
            <div className="flex flex-col  pl-[4.5px]">
                <div className="flex">
                    <table className="w-[75%] ">
                        {/* <tbody>
                            t
                            {/* <InputComponent label="Formato" name="formatoS" showIcon={true} options={handleOptionFormato()} handleChange={handleChange} initialState={initialState} valuesStampaCaldoOpz={valuesStampaCaldoOpz} />
                            <InputComponent label="Orientamiento" name="orientamiento" showIcon={false} options={handleOrientamiento()} handleChange={handleChange} initialState={initialState} valuesStampaCaldoOpz={valuesStampaCaldoOpz} />
                            <InputComponent label="Tipo di Carta" name="tipoCarta" showIcon={true} options={handleOptionTipoCarta()} handleChange={handleChange} initialState={initialState} valuesStampaCaldoOpz={valuesStampaCaldoOpz} />
                            {/* <ListCustom label={handleOptionsCopertina()[0].label} options={handleOptionsCopertina()} /> */}
                            {/* {showSotoblocco ? <ListCustom label={String(handleOptionSottoblocco()[0].opzione)} options={handleOptionSottoblocco()} /> : null}
                            <InputComponent label="Colori di stampa" name="coloreStampa" showIcon={true} options={handleOptionColoriStampa()} handleChange={handleChange} initialState={initialState} valuesStampaCaldoOpz={valuesStampaCaldoOpz} />
                            {showFaciatePagine && <InputComponent label={labelFogli} name="coloreStampa" showIcon={true} options={handleFogliPagine()} handleChange={handleChange} initialState={initialState} valuesStampaCaldoOpz={valuesStampaCaldoOpz} />} */} 

                            {/* <InputCustom
                                handleChange={handleChange}
                                name="quantity"
                                label="Quantità *"
                                classWhidtInput="w-[64%] text-start"
                                classCustomLabel=" w-[95px] p-[1px] text-[12px] text-[arial] font-bold"
                                info
                                on={true}
                                mm={false}
                                metrics=""
                            /> */}


                            {/* <ListCustom label="Opzioni" options={handleOptionsOpzioni()} />
                            {stampaCalOpz.map((item, i) => {
                                if (item.tipoControllo === 1) {
                                    // return (
                                    //     // <InputComponent key={i} label={item.descrizione} name={item.descrizione} showIcon={handleOptionsStampaCaldo(item.optionsSelect)[0].value === 0 ? false : true} options={handleOptionsStampaCaldo(item.optionsSelect)} handleChange={handleChange} initialState={initialState} valuesStampaCaldoOpz={valuesStampaCaldoOpz} />
                                    // )
                                }
                            })} */}

                        {/* </tbody> */} 
                    </table>
                    <div className="w-[25%]">
                        <img src={GLOBAL_CONFIG.IMG_IP + "/listino/img/" + selectedImage} alt="" className="" />
                    </div>
                </div>
                {stampaCalOpz.map((elem, i) => {
                    if (elem.tipoControllo === 2) {
                        return (
                            <CheckBoxCards key={i} options={handleOptionsStampaCaldo(elem.optionsSelect)} name={elem.descrizione} label={elem.descrizione} handleChange={handleChange} valuesStampaCaldoOpz={valuesStampaCaldoOpz} />
                        )
                    }
                })}
                {stampaCalOpz?.map((elem, i) => {
                    if (elem.tipoControllo === 0) {
                        return (
                            <RadioCars key={i} options={handleOptionsStampaCaldo(elem.optionsSelect)} name={elem.descrizione} label={elem.descrizione} handleChange={handleChange} valuesStampaCaldoOpz={valuesStampaCaldoOpz} initialState={initialState} />
                        )
                    }
                })
                }
            </div>
            <div className="w-full flex gap-5 mb-3 mt-[18px] justify-end text-xs">
                <i className="text-[11.5px] me-1">Visualizza prezzo </i>
                <RadioCustom name="iva" value={2} checked={initialState.iva == 2 ? true : false} label="CAD." handleCheckboxChange={handleChange} />
                <RadioCustom name="iva" value={0} checked={initialState.iva == 0 ? true : false} label="Senza IVA" handleCheckboxChange={handleChange} />
                <RadioCustom name="iva" value={1} checked={initialState.iva == 1 ? true : false} label="Con IVA" handleCheckboxChange={handleChange} />
            </div>
            <h5 className="mb-[13px] ps-[20px] pt-[2.5px] pb-[2.5px] bg-[#f58220] text-[#fff] text-[12px] tracking-normal">SCEGLI LA DATA IN CUI VUOI RICEVERE IL PRODOTTO</h5>
            {/* <TableComponent tablaDate={tablaDate} tablaDataPrezzi={tablaDataPrezzi} initialState={initialState} viewRow={viewRow} calcolaTuto={calcolaTuto} handlePrezzoTable={handlePrezzoTable} /> */}
            <ButtonCustom text={viewRow ? "▼ Mostra più quantità ▼" : "▲ Mostra meno quantità ▲"} setviewRow={setviewRow} viewRow={viewRow} />
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
                    <p className="text-[22px] font-bold"> {/*showTablePreez*/true ? "€" + numberFormat(calcolaTuto?.prezzoCalcolatoNetto) + " + iva" : "-"} </p>
                </div>
                <div className=" flex justify-between">
                    <div className="hidden">
                        {/* <PreventivoPDF utenteData={utenteData} descrizioneDinamica={descrizioneDinamica} initialState={initialState} hanldeFormatoList={hanldeFormatoList} handleOptionsTipoCarta={handleOptionsTipoCarta} handleOptionsColoreStampa={handleOptionsColoreStampa} handleOptionOPZ={handleOptionOPZ} qtaSelezinata={qtaSelezinata} showTablePreez={showTablePreez} handleCarrelloData={handleCarrelloData} menuDateConsegna={menuDateConsegna} calcolaTuto={calcolaTuto} idBaseEtiquete={idBaseEtiquete} dimensionniStr={dimensionniStr} showOpzzioni={showOpzzioni} idAltezaEtiquete={idAltezaEtiquete} /> */}
                    </div>
                    <a className="flex gap-1 text-[12px] cursor-pointer" onClick={() => {/*handleDonwloadPDF*/ }}><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoFileTypePDF.png`} width={20} height={20} /> Preventivo PDF  ↓</a>
                    <p className="text-[11px]">Prezzo consigliato al pubblico min. <b> {/*showTablePreez*/true ? "€ " + numberFormat(calcolaTuto?.prezzoPubblico) + " + iva" : "-"} </b>  (+ grafica € <b>{numberFormat(calcolaTuto?.graficaPerFacciata)}</b> a facciata)</p>
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
                <p className="text-[12px] flex items-center gap-1"><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCorriere20.png`} /> <b>SPEDIZIONE:</b> Numero di colli indicativo <b>{/*showTablePreez*/true ? calcolaTuto?.colli : "-"}</b> , Peso indicativo <b>{/*showTablePreez*/true ? calcolaTuto?.pesoStr : "-"}</b> kg ± , Costo <b>€ {numberFormat(calcolaTuto?.costo)}</b></p>
            </div>
            <h4 className="bg-[#e8e8e8] w-full mt-3 text-[12px] ps-[20px] pt-[4px]">DAI UN NOME AL LAVORO</h4>
            <div className="w-full flex items-center justify-center px-5 mt-2 text-[#000] font-[400]"><input type="text" maxLength={100} name="nome" onChange={handleChange} className="w-full text-[14px] border border-[#000] px-[2px] py-[1px] rounded-[2px]" placeholder="Qui se vuoi puoi dare un nome a questo lavoro per riconoscerlo più agevolmente in seguito" ></input></div>
            <h4 className="bg-[#e8e8e8] w-full mt-3 text-[12px] ps-[20px] pt-[4px]">NOTE</h4>
            <div className="w-full flex items-center justify-center px-5 mt-2 text-[#000] font-[400]"><textarea rows={2} cols={20} className="w-full text-[14px] border border-[#000] px-[2px] py-[1px] rounded-[2px]" placeholder="Qui puoi aggiungere note o indicazioni particolari riguardanti questo ordine" name="note" onChange={handleChange}></textarea></div>
            <div className="w-full mt-5  flex justify-end">
                <div className="w-[200px] h-[134px] border border-[#aaa] rounded-[5px] p-[15px] flex flex-col justify-between">
                    <button onClick={() => handleOperationFrame(enOperationFrame.hidden, undefined, '/carrello')} className="flex gap-[2px] items-center bg-[#d6e03d] rounded-[4px] w-full text-[11.5px] font-medium uppercase px-[4px] py-[4px] hover:bg-[#FCFF33]"><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCarrello.png`} width={22} /> Aggiungi al Carrello</button>
                    {/* </Link> */}
                    <Divider orientation="horizontal" variant="middle" flexItem sx={{ fontSize: 11, alignItems: 'center' }}>
                        oppure
                    </Divider>
                    {/* <Link to={"/carrello"} > */}
                    <button className="flex gap-2 bg-[#f58220] rounded-[4px] w-full text-[12px] text-[#fff] font-bold uppercase hover:bg-[#E5781B] px-[4px] py-[4px] items-center"><img src={`${GLOBAL_CONFIG.IMG_IP}/img/ico1Click.png`} width={22} />Compralo subito</button>
                </div>
            </div>
        </div>
    )
}

export default ConfiguraProdottoV2