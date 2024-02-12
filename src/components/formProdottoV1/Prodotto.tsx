import { Divider } from "@mui/material";
import { DateFormatDDMMYY } from "../../Helpers/formatDates";
import { numberFormat } from "../../Helpers/formatNumber";
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

  //*TODO revisar los presios con una cantidad de 100000 especialmente en 10/87/44/2/50/Stampa-Blocchi-autocopianti-A5-fogli-50x2-Copie-a-colori-solo-fronte

  return (
    <div className="w-full flex gap-3 relative ">
      <LoadingBackdrop
        isOpen={loading}
        x={3}
        sx={{
          bgcolor: "rgba(225,225,225,0.4)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          pr: 8,
          zIndex: '1000'
        }}
      />
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
        <TableComponent
          calcolaTuto={calcolaTuto}
          handlePrezzoTable={handlePrezzoTable}
          valueRadio={valueRadio}
          tablaDataPrezzi={tablaDataPrezzi}
          tablaDate={tableDate}
          viewRow={viewRow}
          showColumTable={showColumTable}
          showTablePreez={showTablePreez}
          rowSelectedIva={rowSelectedIva}
          indexTable={indexTable}
          setIndexTable={setIndexTable}
        />
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
            {/* <button className="flex gap-2 bg-[#f58220] rounded-[4px] w-full text-[12px] text-[#fff] font-bold uppercase hover:bg-[#E5781B] px-[4px] py-[4px] items-center" onClick={() => handleCompraloSubito()}>
              <img
                src={`${GLOBAL_CONFIG.IMG_IP}/img/ico1Click.png`}
                width={22}
              />
              Compralo subito
            </button> */}
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
