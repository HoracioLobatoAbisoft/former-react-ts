import { Divider } from "@mui/material";
import { DateFormatDDMMYY } from "../../Helpers/formatDates";
import { FormatNumber0_000, numberFormat } from "../../Helpers/formatNumber";
import { GLOBAL_CONFIG } from "../../_config/global";
import LoadingBackdrop from "../loadingBackdrop";
import { ButtonCustom } from "./components/ButtonCustom";
import RadioCustom from "./components/RadioCustom";
import { CalculaTuttoComponent } from "./componentsv2/CalculaTuttoComponent";
import InputComponent from "./componentsv2/InputComponent";
import RadioGroup from "./componentsv2/RadioGroup";
import TableComponent from "./componentsv2/TableComponent";
import useProdtto from "./hooks/useProdtto";
import ListCustom from "./components/ListCustom";
import { InputCustom } from "./components/InputCustom";
import RadioStampa from "./componentsv2/RadioStampa";
import CheckBoxStampa from "./componentsv2/CheckBoxStampa";
import MenuCarrelo from "./components/MenuCarrelo";
import SelectFormatChiuso from "./componentsv2/SelectFormatChiuso";
import { ImageCustom } from "./components/ImageCustom";
import ProdottiSuggeriti from "./components/ProdottiSuggeriti";
import { enOperationFrame } from "../../enHelpers/enOperationFrame";
import RecencioniC from "./components/RecencioniC";
import React from "react";
import DescrizioneSEO from "./componentsv2/DescrizioneSEO";
import "../formProdottoV1/styles/MainStyles.css";
const Prodotto = () => {
  const {
    handleChange,
    optionFormato,
    valueFormat,
    showOrientamiento,
    optionOrientamiento,
    valueOrientamento,
    loading,
    optionTipoCarta,
    valueTipoCarta,
    valueColoreStampa,
    optionColoreStampa,
    stampaCalOpz,
    formValues,
    valueRadio,
    tableDate,
    calcolaTuto,
    tablaDataPrezzi,
    handlePrezzoTable,
    setviewRow,
    viewRow,
    utenteData,
    sotoblocco,
    valueQuantita,
    valueAltezza,
    valueBase,
    valueProfundita,
    formatoDinamico,
    idAltezaEtiquete,
    idBaseEtiquete,
    showSvg,
    imageSvg,
    opzioniList,
    flogliPagine,
    valueFogli,
    showQtaCustom,
    showColumTable,
    showBloccoMisure,
    textMetrics,
    showOpzzioni,
    showTablePreez,
    listWhite,
    showProfundita,
    disableProfundita,
    uriImage,
    valuesStampaCaldoOpz, rowSelectedIva, menuDateConsegna, dimensionniStr, copertina, idPrev, idFormProd, IdTipoCarta, rencensioniP, recencioniC, descrizioneDinamica, opzInclusa, descrizioneMisure, indexTable, alertMassimo, TotaleProvisorio, ImageEtiquete,
    handleChangeDinamyc,
    handleChangeValue,
    handleChangeInput,
    handleChangeCheckbox, valueNome, valueNote, handleCarrello, handleChangeRadio, textTipoCarta, handleOperationFrame, handleDonwloadPDF, setIndexTable, handleCompraloSubito, prodottoConsigliato, formatoLabel, handleCampioneGratutito,
  } = useProdtto();


  const promo = tablaDataPrezzi.some(x => x.prezzoPromo > 0);

  const handleFormatPrezzo = (prezzo: number) => {
      if (prezzo != 0) {
          switch (valueRadio) {
              case "2":
                  return "€ " + numberFormat(prezzo, "it-IT", 4, 4)
              default:
                  return "€ " + numberFormat(prezzo)
          }
      } else {
          return '-'
      }
  }
  const handleSelectedPreezzoFast = (prezzoRiv: number, qtaRichiesta: number, i: number) => {
      if (calcolaTuto?.prezzoCalcolatoNetto == prezzoRiv && calcolaTuto.code == "F" && qtaRichiesta == calcolaTuto.qta) {
          //setIndexTable(i);
          return true
      }
      if (rowSelectedIva == prezzoRiv && calcolaTuto?.code == "F" && qtaRichiesta == calcolaTuto.qta) { return true }
      if (i == indexTable && calcolaTuto?.code == "F" && rowSelectedIva == undefined && valueRadio != 0 && qtaRichiesta == calcolaTuto.qta) { return true }
  }

  const handleSelectNormale = (prezzoPubbl: number, i: number, qtaRichiesta: number) => {
      if (calcolaTuto?.prezzoCalcolatoNetto == prezzoPubbl && calcolaTuto.code == "N" && qtaRichiesta == calcolaTuto.qta) {
          //setIndexTable(i);
          return true
      }
      if (rowSelectedIva == prezzoPubbl && calcolaTuto?.code == "N" && qtaRichiesta == calcolaTuto.qta) { return true }
      if (i == indexTable && calcolaTuto?.code == "N" && rowSelectedIva == undefined && valueRadio != 0 && qtaRichiesta == calcolaTuto.qta) { return true }
  }

  const handleSelectSlow = (prezzoConsigliatoPubbl: number, qtaRichiesta: number, i: number, prezzoPromo: number) => {
      if (calcolaTuto?.prezzoCalcolatoNetto == prezzoConsigliatoPubbl && calcolaTuto.code == "S" && qtaRichiesta == calcolaTuto.qta) {
          //setIndexTable(i);
          return true
      }
      if (calcolaTuto?.prezzoCalcolatoNetto == prezzoPromo && calcolaTuto.code == "S" && qtaRichiesta == calcolaTuto.qta) { return true }
      if (rowSelectedIva == prezzoConsigliatoPubbl && calcolaTuto?.code == "S" && qtaRichiesta == calcolaTuto.qta) { return true }
      if (i == indexTable && calcolaTuto?.code == "S" && rowSelectedIva == undefined && valueRadio != 0 && qtaRichiesta == calcolaTuto.qta) { return true }

  }




  //*TODO revisar los presios con una cantidad de 100000 especialmente en 10/87/44/2/50/Stampa-Blocchi-autocopianti-A5-fogli-50x2-Copie-a-colori-solo-fronte

  return (

    <div className="w-full flex gap-3 relative">
      <div className="w-[75%] relative">
        <h5 className="ps-[20px] py-[2px] bg-[#f58220] text-[#fff] text-[12px] tracking-normal flex justify-between">
          CONFIGURA IL TUO PRODOTTO
          <span className="bg-[#009ec9] font-bold uppercase px-[2px] h-full rounded">React V^18.2.0</span>
        </h5>
        <div className="flex mt-3 ps-[4.5px]">
          <table className="w-[75%]">
            <tbody>
              {showOpzzioni ? (
                <SelectFormatChiuso
                  formatoDinamico={formatoDinamico}
                  idAltezaEtiquete={idAltezaEtiquete}
                  idBaseEtiquete={idBaseEtiquete}
                  valueAlteza={valueAltezza}
                  valueBase={valueBase}
                  valueProfundita={valueProfundita}
                />
              ) : (
                <InputComponent
                  handleChange={handleChange}
                  value={valueFormat}
                  label={formatoLabel}
                  name="valueFormat"
                  options={optionFormato}
                  idPrev={idPrev}
                  uriImage={uriImage}

                />
              )}

              {showOrientamiento && (
                <InputComponent
                  handleChange={handleChange}
                  value={valueOrientamento}
                  label="Orientamento"
                  name="valueOrientamento"
                  options={optionOrientamiento}
                />
              )}
              <InputComponent
                handleChange={handleChange}
                value={valueTipoCarta}
                label={textTipoCarta}
                name="valueTipoCarta"
                options={optionTipoCarta}
              />
              {copertina.length > 0 ? (
                <ListCustom
                  label={String(copertina[0].opzione)}
                  options={copertina}
                />
              ) : null}
              {sotoblocco.length > 0 ? (
                <ListCustom
                  label={String(sotoblocco[0].opzione)}
                  options={sotoblocco}
                />
              ) : null}
              <InputComponent
                handleChange={handleChange}
                value={valueColoreStampa}
                label="Colore di stampa"
                name="valueColoreStampa"
                options={optionColoreStampa}
              />
              {flogliPagine.length ? (
                <InputComponent
                  handleChange={handleChange}
                  value={valueFogli}
                  label={String(flogliPagine[0]?.description)}
                  name="valueFogli"
                  options={flogliPagine}
                  wSelect="w-3/4"
                />
              ) : null}
              {showBloccoMisure && (
                <>
                  <InputCustom
                    descrizioneTooltip={descrizioneMisure?.baseMisure}
                    maxLengt={4}
                    fn={handleChangeInput}
                    handleChange={handleChangeValue}
                    value={valueBase}
                    name="valueBase"
                    label="Base"
                    classWhidtInput="w-[45%] text-end"
                    metrics={textMetrics}
                  />
                  {showProfundita && (
                    <InputCustom
                      descrizioneTooltip={descrizioneMisure?.profunditaMisure}
                      maxLengt={4}
                      value={valueProfundita}
                      fn={handleChangeInput}
                      handleChange={handleChangeValue}
                      name="valueProfundita"
                      label="Profondità"
                      classWhidtInput="w-[45%] text-end"
                      disabled={disableProfundita}
                      metrics={textMetrics}
                    />
                  )}
                  <InputCustom
                    descrizioneTooltip={descrizioneMisure?.altezzaMisure}
                    maxLengt={4}
                    fn={handleChangeInput}
                    handleChange={handleChangeValue}
                    value={valueAltezza}
                    name="valueAltezza"
                    label="Altezza"
                    classWhidtInput="w-[45%] text-end"
                    metrics={textMetrics}
                  />
                </>
              )}

              {showQtaCustom && (
                <InputCustom
                  maxLengt={6}
                  value={valueQuantita}
                  fn={handleChangeInput}
                  handleChange={handleChangeValue}
                  name="valueQuantita"
                  label="Quantità *"
                  classWhidtInput="w-[64%] text-start"
                  classCustomLabel=" w-[95px] p-[1px] text-[12px] text-[arial] font-bold"
                  info
                  metrics=""
                />
              )}

              {opzioniList.length ? (
                <ListCustom label="Opzioni" options={opzioniList} />
              ) : null}
              {stampaCalOpz.map((item, i) => {
                const value: any = formValues;
                const formValue = value[item.label] || "";
                if (item.tipoControllo === 1) {
                  return (
                    <InputComponent
                      key={i}
                      handleChange={handleChangeDinamyc}
                      value={formValue}
                      label={item.label}
                      name={item.label}
                      options={item.options}
                    />
                  );
                }
              })}
            </tbody>
          </table>
          <div className="w-[25%] mt-1">
            {showSvg ? (
              <ImageCustom svgImage={imageSvg} />
            ) : (
              <img
                src={GLOBAL_CONFIG.IMG_IP + "/listino/img/" + (ImageEtiquete == "0" ? uriImage : ImageEtiquete)}
                alt=""
                className=""
              />
            )}
          </div>
        </div>
        {
          (listWhite.includes(+valueFormat!) && (listWhite.includes(+valueTipoCarta!))) ? (
            <React.Fragment>
              {stampaCalOpz.map((item, i) => {
                if (item.tipoControllo === 0) {
                  return (
                    <RadioStampa
                      handleChange={handleChangeRadio}
                      label={item.label}
                      name={item.label}
                      options={item.options}
                      value={valuesStampaCaldoOpz}
                      key={i}
                    />
                  );
                }
              })}
              {stampaCalOpz.map((item, i) => {
                if (item.tipoControllo === 2) {
                  return (
                    <>
                      <CheckBoxStampa
                        handleChange={handleChangeCheckbox}
                        label={item.label}
                        name={item.label}
                        options={item.options}
                        value={valuesStampaCaldoOpz}
                        key={i}
                      />

                    </>
                  );
                }
              })}
            </React.Fragment>
          )
            :
            <>
              {stampaCalOpz.map((item, i) => {
                if (item.tipoControllo === 2) {
                  return (
                    <CheckBoxStampa
                      handleChange={handleChangeCheckbox}
                      label={item.label}
                      name={item.label}
                      options={item.options}
                      value={valuesStampaCaldoOpz}
                      key={i}
                    />
                  );
                }
              })}
              {stampaCalOpz.map((item, i) => {
                if (item.tipoControllo === 0) {
                  return (
                    <>
                      <RadioStampa
                        handleChange={handleChangeRadio}
                        label={item.label}
                        name={item.label}
                        options={item.options}
                        value={valuesStampaCaldoOpz}
                        key={i}
                      />
                    </>
                  );
                }
              })}
            </>

        }

        <div className="w-full text-xs">
          {(alertMassimo?.showErroreMisure && (valueAltezza != 0 && valueBase != 0)) ?
            <p className=" text-center my-3 tracking-tighter text-[#ff0000] text-[12.5px] font-semibold text-">PER RICEVERE UN PREVENTIVO PER LE MISURE INSERITE CONTATTARCI TELEFONICAMENTE <br /><span className="uppercase italic">{alertMassimo?.lblErroreMisureText}</span></p> : null
          }
        </div>
        <div className="w-full text-xs ">
          {showOpzzioni === 1 ? (
            <li className="bg-gray-100 rounded py-1 px-1  ">
              <a className="hover:underline font-bold " onClick={() => handleOperationFrame(enOperationFrame.reliadUrl, 'opsss')}>
                CLICCA QUI
              </a>{" "}
              per consultare le fustelle già disponibili;
            </li>
          ) : null}
          {showQtaCustom ? (
            <li className="bg-gray-100 rounded py-1 px-1 my-1 italic">
              * La quantità potrebbe essere arrotondata automaticamente per
              motivi tecnici;
            </li>
          ) : null}
        </div>
        <RadioGroup handleChange={handleChange} valueRadio={valueRadio} aling={(stampaCalOpz.length === 0 && showOpzzioni != 1 && !showQtaCustom) ? 'center' : 'end'} />
        <h5 className="mb-[13px] ps-[20px] pt-[2.5px] pb-[2.5px] bg-[#f58220] text-[#fff] text-[12px] tracking-normal">
          SCEGLI LA DATA IN CUI VUOI RICEVERE IL PRODOTTO
        </h5>

        <div className={` flex  flex-col ${(tablaDataPrezzi.length < 9 || !showTablePreez) ? "h-[380px]" : ""}`}>
                <div className="flex gap-1 overflow-hidden mb-[5px]" >
                    <div className="w-[104px] h-[70px] text-xs text-center  flex items-end justify-center">Quantità</div>
                    {showColumTable?.prezzoFazt ?
                        <div className={`w-[223px] ${promo ? "h-[90px]" : 'h-[70px]'}    py-1   rounded text-xl text-center capitalize flex justify-center items-center bg-[#eef3f1]`}>
                            <div className={` bg-gray-400 rounded  w-[63px] ${promo ? 'h-[75%]' : "h-[95%]"} `}>
                                <div className="text-center w-full flex-col bg-[#f1f1f1] flex  h-full rounded-t rounded-bl rounded-br-3xl  text-xs">
                                    <p className="bg-[#d6e03d]  w-full rounded-t font-medium">{tableDate?.giornoStrF}</p>
                                    <div className="flex flex-col items-center leading-[10px]">
                                        <p className="p-0 m-0  text-lg font-bold ">{tableDate?.giornoIntF}</p>
                                        <p className="p-0 m-0 text-[10px]">{tableDate?.meseF}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null
                    }
                    {showColumTable?.prezzoNorm ?
                        <div className={`w-[225px] ${promo ? "h-[90px]" : 'h-[70px]'}  py-1 m-0 rounded text-xl text-center cursor-pointer hover: capitalize flex justify-center items-center bg-[#d4e8df]`}>
                            <div className={` bg-gray-400 rounded w-[63px] ${promo ? 'h-[75%]' : "h-[95%]"} `}>
                                <div className="text-center w-full flex-col bg-[#f1f1f1] flex  h-full rounded-t rounded-bl rounded-br-3xl  text-xs">
                                    <p className="bg-[#d6e03d] w-full rounded-t  font-medium">{tableDate?.giornoStrN}</p>
                                    <div className="flex flex-col items-center  leading-[10px]">
                                        <p className="p-0 m-0  text-lg font-bold">{tableDate?.giornoIntN}</p>
                                        <p className="p-0 m-0 text-[10px]">{tableDate?.meseN}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null
                    }
                    {showColumTable?.prezzoSlow ?
                        <div className='w-[225px]  '>
                            <div className={` ${promo ? "h-[70px]" : 'h-full'}  py-1  m-0 rounded-t text-xl text-center cursor-pointer hover: capitalize flex gap-[3px]  items-center bg-[#a4d9d1] flex-col`}>
                                <div className={` bg-gray-400 rounded w-[63px] ${promo ? 'h-[95%]' : 'h-[95%]'} `}>
                                    <div className="text-center w-full flex-col bg-[#f1f1f1] flex  h-full rounded-t rounded-bl rounded-br-3xl  text-xs">
                                        <p className={`${promo ? 'bg-[#009ec9] text-white font-normal' : 'bg-[#d6e03d] font-medium'} w-full rounded-t  `}>{tableDate?.giornoStrS}</p>
                                        <div className="flex flex-col items-center  leading-[10px]">
                                            <p className="p-0 m-0  text-lg font-bold">{tableDate?.giornoIntS}</p>
                                            <p className="p-0 m-0 text-[10px]">{tableDate?.meseS}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {promo &&
                                <div className='text-[11px] rounded p-[2px] text-center bg-[#009ec9] text-white  m-0 '><span className=''>Promo</span></div>
                            }

                        </div>
                        : null
                    }
                </div>
            {showTablePreez ? tablaDataPrezzi.map((elem, i) => {
                return (
                    <div key={i} className={`${i > 9 && viewRow ? "hidden" : ''} w-full overflow-hidden flex gap-[2px] items-center justify-center`}>
                        <div className={` w-[104px] ${promo ? 'h-[45px]' : "h-[32.8px]"}   mb-[2px] ${calcolaTuto?.qta == elem.richiestaCalcoloPrezzo.qtaRichiesta ? 'bg-[#d6e03d] ' : 'bg-[#f1f1f1]'}  rounded px-3 font-semibold text-center fcursor-pointer  flex items-center justify-end`}>
                            <p className=" text-end text-[14px]">{FormatNumber0_000(elem.richiestaCalcoloPrezzo.qtaRichiesta)}</p>
                        </div>
                        {showColumTable?.prezzoFazt ?
                            <button onClick={() => handlePrezzoTable("F", elem.richiestaCalcoloPrezzo.qtaRichiesta, elem.prezzoRiv, i, tableDate!.giornoIntF + " " + tableDate!.meseF.substring(0, 3))} className={`${handleSelectedPreezzoFast(elem.prezzoRiv, elem.richiestaCalcoloPrezzo.qtaRichiesta, i) ? 'bg-[#d6e03d]' : 'bg-[#eef3f1]'}  w-[232px] ${promo ? 'h-[45px]' : "h-[32.8px]"}    rounded px-3 font-semibold text-center cursor-pointer hover:bg-[#d6e03d] mb-[2px] flex items-center justify-center `}>
                                <p className="text-[14px]">{handleFormatPrezzo(elem.prezzoRiv)}</p>
                            </button> : null
                        }
                        {showColumTable?.prezzoNorm ?
                            <button onClick={() => handlePrezzoTable("N", elem.richiestaCalcoloPrezzo.qtaRichiesta, elem.prezzoPubbl, i, tableDate!.giornoIntN + " " + tableDate!.meseN.substring(0, 3))} className={`${handleSelectNormale(elem.prezzoPubbl, i, elem.richiestaCalcoloPrezzo.qtaRichiesta) ? 'bg-[#d6e03d]' : 'bg-[#d4e8df]'}  w-[232px] ${promo ? 'h-[45px]' : "h-[32.8px]"}   rounded px-3 font-semibold text-center cursor-pointer hover:bg-[#d6e03d] mb-[2px] flex items-center justify-center `}>
                                <p className="text-[14px]"> {handleFormatPrezzo(elem.prezzoPubbl)}</p>
                            </button> : null
                        }
                        {showColumTable?.prezzoSlow ?
                            <button onClick={() => handlePrezzoTable("S", elem.richiestaCalcoloPrezzo.qtaRichiesta, elem.prezzoConsigliatoPubbl, i, tableDate!.giornoIntS + " " + tableDate!.meseS.substring(0, 3))} className={`${handleSelectSlow(elem.prezzoConsigliatoPubbl, elem.richiestaCalcoloPrezzo.qtaRichiesta, i, elem.prezzoPromo) ? 'bg-[#d6e03d]' : 'bg-[#a4d9d1]'} w-[232px] ${promo ? 'h-[45px] flex-col' : 'h-[32.8px]'}  rounded px-3 font-semibold text-center cursor-pointer hover:bg-[#d6e03d] mb-[2px] flex items-center justify-center `}>
                                <p className={`text-[14px] ${promo ? 'line-through' : ''}`}> {handleFormatPrezzo(elem.prezzoConsigliatoPubbl)}</p>
                                {promo &&
                                    <p className={`text-[14px] text-[#009ec9]`}> {handleFormatPrezzo(elem.prezzoPromo)}</p>
                                }
                            </button> : null
                        }

                    </div>
                )
            })
                :
                <div className={`  w-full h-10 overflow-hidden flex gap-1 items-center`} >
                    <div className={`w-[104px] h-[32.8px]  rounded px-3 py-[19px] font-medium text-center cursor-pointer hover:bg-[#d6e03d] flex items-center justify-end bg-[#eef3f1]`}>
                        <p className=" text-end">-</p>
                    </div>
                    {showColumTable?.prezzoFazt ?
                        <div className={` w-[228px] h-[32.8px] rounded  px-3 py-[19px] font-medium text-center cursor-pointer hover:bg-[#d6e03d] flex items-center justify-center bg-[#eef3f1]`}>
                            <p className="">-</p>
                        </div> : null
                    }
                    {showColumTable?.prezzoNorm ?
                        <div className={`w-[232px] h-[32.8px]  rounded px-3 py-[19px] font-medium text-center cursor-pointer hover:bg-[#d6e03d] flex items-center justify-center bg-[#d4e8df]`}>
                            <p className="">-</p>
                        </div> : null
                    }
                    {showColumTable?.prezzoSlow ?
                        <div className={`w-[232px] h-[32.8px]  rounded px-3 py-[19px] font-medium text-center cursor-pointer hover:bg-[#d6e03d] flex items-center justify-center bg-[#a4d9d1]`}>
                            <p className="">-</p>
                        </div> : null
                    }

                </div>
            }
        </div>

        <ButtonCustom
          text={
            viewRow ? "▼ Mostra più quantità ▼" : "▲ Mostra meno quantità ▲"
          }
          setviewRow={setviewRow}
          viewRow={viewRow}
        />
        <CalculaTuttoComponent
          showTablePreez={showTablePreez}
          calcolaTuto={calcolaTuto}
          utenteData={utenteData}
          handleDonwloadPDF={handleDonwloadPDF}
        />
        <div className="bg-[#f1f1f1] w-full p-[10px] flex flex-col justify-between mt-4">
          {tablaDataPrezzi.some((x) => x.prezzoPromo > 0) && (
            <p className="flex text-[12px] mb-[30px]">
              <img
                src={`${GLOBAL_CONFIG.IMG_IP}/img/icoPromo20.png`}
                className="w-[25px] h-[19px]"
              />
              <span className="bg-[#009ec9] px-[3px] text-white font-normal rounded-[3px] mx-[2px] ">
                Promo{" "}
              </span>
              Prodotto in promozione con sconto del{" "}
              <span className="bg-[#009ec9] px-[3px] text-white font-normal rounded-[3px] mx-[2px]">
                {" "}
                {calcolaTuto?.promoPercentuale} %
              </span>{" "}
              fino al {DateFormatDDMMYY(calcolaTuto?.dataFineValidita)}
            </p>
          )}
          <p className="text-[12px] flex items-center gap-1">
            <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCorriere20.png`} />{" "}
            <b>SPEDIZIONE:</b> Numero di colli indicativo{" "}
            <b>{showTablePreez ? <i>{calcolaTuto?.colli}</i> : "-"}</b> , Peso
            indicativo{" "}
            <b>{showTablePreez ? <i>{calcolaTuto?.pesoStr}</i> : "-"}</b> kg ± ,
            Costo <b>€ {numberFormat(calcolaTuto?.costo)}</b>
          </p>
        </div>
        <h4 className="bg-[#e8e8e8] w-full mt-3 text-[12px] ps-[20px] pt-[4px]">
          DAI UN NOME AL LAVORO
        </h4>
        <div className="w-full flex items-center justify-center px-5 mt-2 text-[#000] font-[400]">
          <input
            type="text"
            value={valueNome}
            maxLength={100}
            name="valueNome"
            onChange={handleChange}
            className="w-full text-[14px] border border-[#000] px-[2px] py-[1px] rounded-[2px]"
            placeholder="Qui se vuoi puoi dare un nome a questo lavoro per riconoscerlo più agevolmente in seguito"
          ></input>
        </div>
        <h4 className="bg-[#e8e8e8] w-full mt-3 text-[12px] ps-[20px] pt-[4px]">
          NOTE
        </h4>
        <div className="w-full flex items-center justify-center px-5 mt-2 text-[#000] font-[400]">
          <textarea
            rows={2}
            cols={20}
            value={valueNote}
            className="w-full text-[14px] border border-[#000] px-[2px] py-[1px] rounded-[2px]"
            placeholder="Qui puoi aggiungere note o indicazioni particolari riguardanti questo ordine"
            name="valueNote"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="w-full mt-5  flex justify-end">
          <div className="w-[200px] h-[134px] border border-[#aaa] rounded-[5px] p-[15px] flex flex-col justify-between">
            <button
              onClick={() => { handleCarrello() }}
              className="flex gap-[2px] items-center bg-[#d6e03d] rounded-[4px] w-full text-[11.5px] font-medium uppercase px-[4px] py-[4px] hover:bg-[#FCFF33]"
            >
              <img
                src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCarrello.png`}
                width={22}
              />{" "}
              Aggiungi al Carrello
            </button>
            <Divider
              orientation="horizontal"
              variant="middle"
              flexItem
              sx={{ fontSize: 11, alignItems: "center" }}
            >
              oppure
            </Divider>
            <button className="flex gap-2 bg-[#f58220] rounded-[4px] w-full text-[12px] text-[#fff] font-bold uppercase hover:bg-[#E5781B] px-[4px] py-[4px] items-center" onClick={() => handleCompraloSubito()}>
              <img
                src={`${GLOBAL_CONFIG.IMG_IP}/img/ico1Click.png`}
                width={22}
              />
              Compralo subito
            </button>
          </div>
        </div>
        {dimensionniStr && optionFormato && valueFormat?
          <DescrizioneSEO description1={dimensionniStr.googleDescr} description2={dimensionniStr.googleSeo} title={optionFormato.find(x => x.value == valueFormat)?.label}  img={optionFormato.find(x => x.value == valueFormat)?.image}/> : null
        }

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
            <button className="flex bg-[#d6e03d] text-[11px] w-[150px] h-[30px] font-bold leading-[30px] uppercase justify-center items-center gap-1 rounded me-[15px]" onClick={() => handleOperationFrame(enOperationFrame.reliadUrl, 'le-tue-recensioni')}><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoRecensione.png`} className="w-[22px]" /> Scrivi recensione</button>
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
            {opzioniList.map((item, i) => (
              <div className="w-full" key={i}>
                <h4 className="text-[17px] font-bold my-[13px]">Opzione inclusa {item.catLav}</h4>
                <p className="text-[14px] text-justify indent-[5px] leading-[24px]"><b>{item.label}</b>, {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[25%] ">
        <MenuCarrelo
          handleHidden={handleOperationFrame}
          idUt={String(utenteData?.idUt)}
          handleLogin={() => { }}
          handleCarrello={handleCarrello}
          handleCompraloSubito={handleCompraloSubito}
          calcolaTuto={calcolaTuto}
          qtaSelezinata={0}
          menuDateConsegna={menuDateConsegna}
          pdfTemplate={optionFormato.find(x => x.value == valueFormat)?.pdfTemplate}
          template3D={optionFormato.find(x => x.value == valueFormat)?.pdfTemplate3d}
          prodotto={""}
          showTablePreez={showTablePreez}
          descrizioneDinamica={undefined}
          TotaleProvisorio={TotaleProvisorio}
          showTemplate={dimensionniStr?.showTamplate}
          handleCampioneGratutito={handleCampioneGratutito}
        />
      </div>
        
    </div>
  );
};

export default Prodotto;
