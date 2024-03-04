import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  httpGetColoreStampa,
  httpGetFormatoArray,
  httpGetInputValues,
  httpGetShowOrientmiento,
  httpGetTipoCarta,
} from "../services";
import { OptionsSelect } from "../../formProdotto/interfaces/prodotto";
import { IFormato } from "../interface/Formato";
import {
  handleColoriStampa,
  handleFogliPagine,
  handleFormatoList,
  handleOptionCopertina,
  handleOptionSottoblocco,
  handleOptionsOpzioni,
  handleOrientamiento,
  handleStampaCaldoDesc,
  handleTipoCarta,
} from "../helper/ProdottoHelper";
import {
  getAggiornaReview,
  getCalcolaTuto,
  getColoreStampa,
  getDescrizioniDinammica,
  getDisableProfundita,
  getFormatoDinamico,
  getFormatoStr,
  getFotmato,
  getHelpersData,
  getOpizioniCarrello,
  getOpzioni,
  getProdottoConsigliato,
  getResencioni,
  getSVG,
  getShowAlertMassimo,
  getShowBloccoMisure,
  getShowColumnTable,
  getShowFogliPagine,
  getShowOpzioni,
  getShowOrientamiento,
  getShowQtaCustom,
  getShowSVG,
  getShowTabellaPrezzi,
  getStampaCaldo,
  getTableDate,
  getTablePrezzi,
  getTipoCarta,
  getUtenteData,
} from "../helper/httpProdotto";
import { StaCalOpz } from "../interface/stampaCaldo";
import { TableDate } from "../interface/tableDate";
import { DataGetCalcolaTuto } from "../interface/calcolaTuto";
import { TablePrezzi } from "../interface/table";
import { DataResponseGetUtente } from "../../../interface/Utente";
import { ArraySotoblocco, Misueres } from "../interface/fogliPagine";
import { PrezzoValue } from "../interface/showColumPrezzo";
import { DataDisablesProfundita } from "../interface/disabledProfundita";
import { set } from "react-hook-form";
import { SvgImage } from "../interface/svgImage";
import { DataGetOpzioniStatic } from "../interface/opzioniStatic";
import { ObjCarrello } from "../interface/ObjCarrrello";
import { DataGetHelperDataProdotto } from "../interface/helpersDataProdotto";
import { DataDimensioniStr } from "../interface/DimensioneStr";
import { enOperationFrame } from "../../../enHelpers/enOperationFrame";
import { GLOBAL_CONFIG } from "../../../_config/global";
import jsPDF from "jspdf";
import logo from "../../../assets/iconsLast/logo.png";
import { DateFormatDDMM, DateFormatDDMSYYHHSS, DateFormatItWDMY } from "../../../Helpers/formatDates";
import { numberFormat, numberPercentuale, replaceComaPoint } from "../../../Helpers/formatNumber";
import { httpGetCorriereSelezionata, httpGetIndirizzo, httpGetMetodiPagamento, httpGetTotaleProvisorio } from "../../carrello/services/Services";
import { DataGgetCorriereSelezionata, IDataConsegna, ISegliConsegnaData } from "../../carrello/Interfaces/Corriere";
import { DataGetProduttoConsigliato } from "../interface/prodottoConsigliato";
import { DataGetResencioniP } from "../interface/RecensioniP";
import { DataGetAggiornaReview } from "../interface/AggiornaReview";
import { DataGetDescrizioniDinamica } from "../interface/DescrizioneDinamica";
import { DataAlertMinimo } from "../interface/AlertMassimo";
import { DataGetTotaleProvisorio } from "../../carrello/Interfaces/totaleProvvisorio";
import useHelpers from "../../carrello/helpers/useHelpers";
import { getIndirizzoUt } from "../../carrello/helpers/servicesHelpers";
import { DataGetIndirizzo } from "../../carrello/Interfaces/Indirizzo";
import { DataLocalPagamento } from "../../carrello/Interfaces/TipoPagamento";
import { enAsseXYZ } from "../../../schemas/InputsEnums";

const listWhite = [1148, 134]
const useProdtto = () => {
  let {
    idPrev,
    idFormProd,
    IdTipoCarta,
    IdColoreStampa,
    idFogli,
    idUt,
    idFustella,
    idCategoria,
    idBaseEtiquete,
    idAltezaEtiquete, ImageEtiquete,
  } = useParams();

  interface FormValue {
    valueFormat: string | number;
    valueOrientamento: string | number;
    valueTipoCarta: string | number;
    valueColoreStampa: string | number;
    valueRadio: string | number;
    valueQuantita: string;
    valueBase: string | number;
    valueFogli: string | number;
    valueProfundita: string | number,
    valueAltezza: string | number,
    valueCheckbox: any[];
    valueNote: string,
    valueNome: string,
  }

  interface StampaInput {
    label: string;
    options: OptionsSelect[];
    value: string | number;
    tipoControllo: number;
  }

  type optionsParams =
    | "valueTipoCarta"
    | "valueFormat"
    | "valueColoreStampa"
    | "valuesStampaCaldo"
    | "valueFogli" | "valueRadio" | "valueInputs";

  const navigate = useNavigate();
  const { getLocalCarrelloHelper } = useHelpers();


  const firstLoad = useRef(false);
  const [firstCall, setFirstCall] = useState(true);
  const [execute, setExecute] = useState(false);
  const [optionFormato, setOptionFormato] = useState<OptionsSelect[]>([]);
  const [optionOrientamiento, setOptionOrientamiento] = useState<
    OptionsSelect[]
  >([]);
  const [optionTipoCarta, setOptionTipoCarta] = useState<OptionsSelect[]>([]);
  const [optionColoreStampa, setOptionColoreStampa] = useState<OptionsSelect[]>(
    []
  );
  const [sotoblocco, setSotoblocco] = useState<OptionsSelect[]>([]);
  const [copertina, setCopertina] = useState<OptionsSelect[]>([])
  const [opzioniList, setOpzioniList] = useState<OptionsSelect[]>([]);
  const [flogliPagine, setFlogiPagine] = useState<OptionsSelect[]>([]);
  const [opzInclusa, setOpzInclusa] = useState<OptionsSelect[]>([])

  const [stampaCalOpz, setStampaCalOpz] = useState<StampaInput[]>([]);
  const [tableDate, setTableDate] = useState<TableDate>();
  const [calcolaTuto, setCalcolaTuto] = useState<DataGetCalcolaTuto>();
  const [tablaDataPrezzi, setTablaDataPrezzi] = useState<TablePrezzi[]>([]);
  const [opzioniListStatic, setOpzioniListStatic] = useState<DataGetOpzioniStatic[]>([])
  const [prodottoConsigliato, setProdottoConsigliato] = useState<DataGetProduttoConsigliato[]>([])
  const [recencioniC, setRecencioniC] = useState<DataGetAggiornaReview[]>([])

  const [utenteData, setUtenteData] = useState<DataResponseGetUtente>();
  const [showColumTable, setShowColumTable] = useState<PrezzoValue>();
  const [disableProfundita, setDisableProfundita] =
    useState<DataDisablesProfundita>();
  const [imageSvg, setImageSvg] = useState<SvgImage>()
  const [helperDataProdotto, setHelperDataProdotto] = useState<DataGetHelperDataProdotto>()
  const [dimensionniStr, setDimensionniStr] = useState<DataDimensioniStr>()
  const [dateConsegna, setDateConsegna] = useState<IDataConsegna>();
  const [rencensioniP, setRencensioniP] = useState<DataGetResencioniP>()
  const [descrizioneDinamica, setDescrizioneDinamica] = useState<DataGetDescrizioniDinamica>()
  const [descrizioneMisure, setDescrizioneMisure] = useState<Misueres>()
  const [alertMassimo, setAlertMassimo] = useState<DataAlertMinimo>();
  const [TotaleProvisorio, setTotaleProvisorio] = useState<DataGetTotaleProvisorio>()

  const [valuesStampaCaldoOpz, setValuesStampaCaldoOpz] = useState<
    Record<string, number>
  >({});

  const [showOrientamiento, setShowOrientamiento] = useState(false);
  const [viewRow, setviewRow] = useState(true);
  const [showQtaCustom, setShowQtaCustom] = useState<boolean | undefined>(
    false
  );
  const [showBloccoMisure, setShowBloccoMisure] = useState<boolean>();
  const [showTablePreez, setShowTablePreez] = useState<boolean>(false);
  const [showProfundita, setShowProfundita] = useState<boolean>();
  const [showSvg, setShowSvg] = useState<boolean>()
  const [changeInput, setChangeInput] = useState(false)

  const [uriImage, setUriImage] = useState<string | undefined>("");
  const [menuDateConsegna, setMenuDateConsegna] = useState<string>('');
  const [codeSelected, setCodeSelected] = useState("N");
  const [formatoLabel, setFormatoLabel] = useState("")

  const [rowSelectedIva, setRowSelectedIva] = useState<number | undefined>(undefined);
  const [IdLav, setIdLav] = useState<number | null>(null)
  const [indexTable, setIndexTable] = useState(0);
  const [qtaSelected, setQtaSelected] = useState(0);

  const [formValues, setFormValues] = useState<FormValue>({
    valueFormat: "",
    valueOrientamento: "0",
    valueTipoCarta: "",
    valueColoreStampa: "",
    valueRadio: "",
    valueQuantita: "",
    valueBase: "",
    valueFogli: "",
    valueProfundita: "",
    valueAltezza: "",
    valueCheckbox: [],
    valueNome: '',
    valueNote: ''
  });

  const [textMetrics, setTextMetrics] = useState<string>("");
  const [formatoDinamico, setFormatoDinamico] = useState<string>('')
  const [textTipoCarta, setTextTipoCarta] = useState<string>('')

  const [showOpzzioni, setShowOpzzioni] = useState<number>();
  const [loading, setLoading] = useState(false);

  const handlePrimaryData = async () => {
    const { IdColoreStampa, IdTipoCarta, idFormProd, idPrev, idUt, idFogli, idCategoria, idBaseEtiquete, idAltezaEtiquete } =
      handleParamsFormat();
    try {
      setLoading(true)
      const initialState = await Promise.all([
        getFotmato(idPrev),
        getShowOrientamiento({
          IdColoreStampa,
          IdTipoCarta,
          idFormProd,
          idPrev,
        }),
        getTipoCarta(idPrev, idFormProd),
        getColoreStampa({ IdTipoCarta, idFormProd, idPrev }),
        getOpzioni({
          IdColoreStampa,
          IdTipoCarta,
          idFormProd,
          idPrev,
          altezza: 0,
          base: 0,
          profundita: 0,
          idUt,
        }),
        getShowQtaCustom({ IdColoreStampa, IdTipoCarta, idFormProd, idPrev }),
        getStampaCaldo({ IdColoreStampa, IdTipoCarta, idFormProd, idPrev }),
        getShowFogliPagine({
          IdColoreStampa,
          IdTipoCarta,
          idFormProd,
          idPrev,
          idUt,
          altezza: 0,
          base: 0,
          profundita: 0,
          iva: 0,
          valuesStampaCaldoOpz: valuesStampaCaldoOpz,
          facciatePagine: idFogli,
          quantita: 0,
        }),
        getFormatoStr({ idPrev, idFormProd, IdTipoCarta, IdColoreStampa, altezza: 0, base: 0, profundita: 0, idUt })
      ])
      const [format, showOrientamiento, tipoCarta, coloreStampa, opzioni, qtaCustom, stampaCaldo, responseShowFoliPagine, formatoStr,] = initialState
      const responseFormat = handleFormatoList(format);
      const responseOrientamiento = handleOrientamiento();
      const responseTipoCarta = handleTipoCarta(tipoCarta);
      const responseColoreStampa = handleColoriStampa(coloreStampa);
      const responseOpzioni = handleOptionsOpzioni(opzioni);
      const responseStampaCaldoOPZ = handleStampaCaldoDesc(stampaCaldo);
      handleOpzioneInclusa(stampaCaldo)
      idFustella === "0" && setOpzioniList(responseOpzioni);
      setStampaCalOpz(responseStampaCaldoOPZ);
      setOptionOrientamiento(responseOrientamiento);
      setShowOrientamiento(showOrientamiento);
      setOptionFormato(responseFormat);
      setOptionTipoCarta(responseTipoCarta);
      setOptionColoreStampa(responseColoreStampa);
      setShowQtaCustom(qtaCustom?.data);
      const firstValue: any = {}
      for (let index = 0; index < responseStampaCaldoOPZ.length; index++) {
        const { tipoControllo, label, options } = responseStampaCaldoOPZ[index];
        if (tipoControllo === 0 || tipoControllo === 1) {
          firstValue[label] = options[0].value
        } else if (tipoControllo === 2) {
          firstValue[options[0].label] = options[0].value
        }
      }
      setValuesStampaCaldoOpz({ ...valuesStampaCaldoOpz, ...firstValue });
      const responseFogliPagine = handleFogliPagine(
        responseShowFoliPagine.data.data,
        responseShowFoliPagine.data.fogliLabel,
        responseShowFoliPagine.data.showFogliPagine,
      );
      const responseOptionSotoblocco = handleOptionSottoblocco(
        responseShowFoliPagine.data.sotoblocco
      );
      const responseOptionCopertina = handleOptionCopertina(responseShowFoliPagine.data.copertina)
      setCopertina(responseOptionCopertina);
      responseShowFoliPagine.data.showFogliPagine && setFlogiPagine(responseFogliPagine);
      responseShowFoliPagine.data.sotoblocco.showSotoblocco && setSotoblocco(responseOptionSotoblocco);
      setTextMetrics(responseShowFoliPagine.data.getEtichettaMisure);
      setShowProfundita(responseShowFoliPagine.data.showProfundita)
      setTextTipoCarta(responseShowFoliPagine.data.tipoCartaText);
      setDescrizioneMisure(responseShowFoliPagine.data.misueres);
      setFormatoLabel(responseShowFoliPagine.data.formatoText);
      setUriImage(formatoStr.imgSelezionato);
      setDimensionniStr(formatoStr);
      setFormValues({ ...formValues, valueOrientamento: formatoStr.orientamiento, })
    } catch (error) {
      throw new Error(String(error));
    } finally {
      setLoading(false);
    }

  }

  const handleData = async () => {

    try {
      //setLoading(true);

      const { IdColoreStampa, IdTipoCarta, idFormProd, idPrev, idUt, idFogli, idCategoria, idBaseEtiquete, idAltezaEtiquete } =
        handleParamsFormat();

      const initialState = await Promise.all([

        getUtenteData(idUt),
        getCalcolaTuto({
          IdColoreStampa,
          IdTipoCarta,
          idFormProd,
          idPrev,
          idUt,
          altezza: 0,
          base: 0,
          profundita: 0,
          code: "N",
          idFogli,
          iva: 0,
          valuesStampaCaldoOpz: valuesStampaCaldoOpz,
          prezzo: 0,
          qtaSlezionata: 0,
          quantity: 0,
        }),
        getShowColumnTable(idPrev),
        getShowBloccoMisure({
          IdColoreStampa,
          IdTipoCarta,
          idFormProd,
          idPrev,
        }),
        getShowOpzioni(idPrev),
        getShowTabellaPrezzi({
          IdColoreStampa,
          IdTipoCarta,
          idFormProd,
          idPrev,
          altezza: 0,
          base: 0,
          profundita: 0,
          idUt,
        }),
        getDisableProfundita(idPrev),
        getShowSVG(idPrev),
        getOpizioniCarrello({ idPrev, idFormProd, IdTipoCarta, IdColoreStampa }),
        getHelpersData({
          IdColoreStampa,
          idFogli,
          idFormProd,
          idPrev,
          IdTipoCarta,
        }),

      ]);
      var tableDate: any;
      var responseTablePrezzi: any;
      try {
        tableDate = await getTableDate({
          IdColoreStampa,
          idFormProd,
          IdTipoCarta,
          idPrev,
          altezza: 0,
          base: 0,
          profundita: 0,
          idUt,
        })

        responseTablePrezzi = await getTablePrezzi({
          IdColoreStampa,
          IdTipoCarta,
          idFormProd,
          idPrev,
          idUt,
          altezza: 0,
          base: 0,
          profundita: 0,
          iva: 0,
          valuesStampaCaldoOpz: valuesStampaCaldoOpz,
          facciatePagine: idFogli,
          quantita: 0,
        })

        console.log('Datos Fecha de la tabla de precios', tableDate)
        console.log('Datos de los precios de la tabla ', responseTablePrezzi)

      } catch (error) {
        console.log('Error en la peticiones de las apis de precios y fechas\n', error)
      }



      const [

        dataUtn,
        responseCalculaTuto,
        columnTable,

        responseShowBloccoMisure,
        responseShowOopzioni,
        responseShowTablePrezzi,
        responseDisableProfundita, showSVG, opzioniCarrello, helperData,
      ] = initialState;
      if (idCategoria != "0") {
        const responseFormatoDinamico = await getFormatoDinamico(String(idCategoria));
        setFormatoDinamico(responseFormatoDinamico.categoria);
      }

      responseShowTablePrezzi.data ? setTablaDataPrezzi(responseTablePrezzi) : setTablaDataPrezzi([]);
      setShowBloccoMisure(responseShowBloccoMisure?.data);
      setDisableProfundita(responseDisableProfundita);

      setShowColumTable(columnTable);
      setTableDate(tableDate);
      setUtenteData(dataUtn);
      setCalcolaTuto(responseCalculaTuto);
      setQtaSelected(responseCalculaTuto.qta);
      setShowOpzzioni(responseShowOopzioni.data);
      setShowTablePreez(responseShowTablePrezzi.data);

      setShowSvg(showSVG);
      setOpzioniListStatic(opzioniCarrello);
      setHelperDataProdotto(helperData);
      handleSelectedDataConsegna("N", tableDate);
      handleSelectDateConsegna(tableDate.giornoIntN + " " + tableDate.meseN.substring(0, 3));


      const profundita = responseDisableProfundita.disabled ? responseDisableProfundita.txt_Profundita : "";

      setFormValues({
        ...formValues,
        valueFormat: idFormProd,
        valueTipoCarta: IdTipoCarta,
        valueColoreStampa: IdColoreStampa,
        valueRadio: "0",
        valueFogli: idFogli,
        valueProfundita: profundita,
        valueBase: idBaseEtiquete == 0 ? "" : idBaseEtiquete,
        valueAltezza: idAltezaEtiquete == 0 ? "" : idAltezaEtiquete
      });


    } catch (error) {
      console.log(error)
      throw new Error(String(error));
    } finally {
      //setLoading(false);
      firstLoad.current = true;
    }
  };

  const handleSecondaryData = async () => {
    try {
      const { IdColoreStampa, IdTipoCarta, idFormProd, idPrev, idUt, idFogli, idCategoria } =
        handleParamsFormat();
      const secondaryPetition = await Promise.all([
        getProdottoConsigliato({ idPrev, idFormProd, IdTipoCarta, IdColoreStampa }, GLOBAL_CONFIG.IMG_IP),
        getResencioni({ idPrev, idFormProd, IdTipoCarta, IdColoreStampa }, GLOBAL_CONFIG.IMG_IP),
        getAggiornaReview({ idPrev, idFormProd, IdTipoCarta, IdColoreStampa }, GLOBAL_CONFIG.IMG_IP),
        getDescrizioniDinammica({ idPrev, idFormProd, IdTipoCarta, IdColoreStampa }),
        handleRepilogoCarrello(),
      ])
      const [prodottoConsigliato, recencioniP, recencioniC, descrizioneDinamica] = secondaryPetition;
      setProdottoConsigliato(prodottoConsigliato);
      setRencensioniP(recencioniP);
      setRecencioniC(recencioniC);
      setDescrizioneDinamica(descrizioneDinamica);
    } catch (error) {
      throw new Error(String(error));
    }
  }

  const handleChange = (
    evt: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFirstCall(false);
    setExecute(true);
    const { name, value, type } = evt.target;
    // if (name === 'valueTipoCarta') {
    //   setValuesStampaCaldoOpz({});
    // }
    setFormValues((lastValues) => {
      return {
        ...lastValues,
        [name]: value,
      };
    });
  };

  const handleChangeValue = (
    evt: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = evt.target;
    if (value == '' && name != 'valueQuantita') {
      setChangeInput(true);
    } else {
      setChangeInput(false);
    }
    setFormValues({
      ...formValues,
      [name]: value,
    });

  };

  const handleChangeDinamyc = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = evt.target;
    setFirstCall(false);
    setExecute(true);
    setFormValues((lastValues) => {
      return {
        ...lastValues,
        [name]: value,
      };
    });
    setValuesStampaCaldoOpz({ ...valuesStampaCaldoOpz, [name]: Number(value) });
  };

  const handleChangeCheckbox = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFirstCall(false);
    setExecute(true);
    const { name, value } = evt.target;
    const isExits = !!valuesStampaCaldoOpz[name]

    let elements: any = document.getElementsByClassName("element-logo")
    let count = 0;

    for (let i = 0; i < elements.length; i++) {
      if (elements[i].checked) count++
    }

    if (!isExits) {
      setValuesStampaCaldoOpz({ ...valuesStampaCaldoOpz, [name]: Number(value) });
    } else {
      const valid = stampaCalOpz.find(x => x.tipoControllo === 2);
      const checkDefault = valid!.options[0].label;
      const checkDefaultValue = Number(valid!.options[0].value);
      const clear: any = { [name]: undefined }
      if (count === 0) {
        setValuesStampaCaldoOpz({ ...valuesStampaCaldoOpz, ...clear, [checkDefault]: checkDefaultValue });
      } else {
        setValuesStampaCaldoOpz({ ...valuesStampaCaldoOpz, ...clear });
      }
    }
  };

  const handleChangeRadio = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, id } = evt.target;
    const valueForm = { [name]: Number(id) }
    setFirstCall(false);
    setExecute(true);
    setValuesStampaCaldoOpz({ ...valuesStampaCaldoOpz, ...valueForm });
    setIdLav(Number(id));
  }

  const handleChangeParams = async (name: optionsParams) => {
    try {
      switch (name) {
        case "valueFormat":
          await handleChangFormat();
          break;
        case "valueTipoCarta":
          await handleChangeTipoCarta();
          break;
        case "valueColoreStampa":
          await handleChangeColoreStampa();
          break;
        case "valuesStampaCaldo":
          await handleChangeStampaCaldo();
          break;
        case "valueFogli":
          await handleChangeColoreStampa();
          break;
        case "valueRadio":
          await handleChangRadioIva();
          break;
        case "valueInputs":
          await handleChangeValuesInput();
        default:
          break;
      }
    } catch (error) {
    } finally {
    }
  };

  const handleChangFormat = async () => {
    if (!execute) return;
    setLoading(true);
    const { idPrev, idUt, IdTipoCarta } = handleParamsFormat();
    const { valueFormat, valueAltezza, valueBase, valueProfundita, valueFogli, valueRadio, valueQuantita } = formValues;
    const IdFormatN = Number(valueFormat);
    const idFogli = Number(valueFogli);
    const altezzaN = Number(valueAltezza), baseN = Number(valueBase), profunditaN = Number(valueProfundita), IvaN = Number(valueRadio), QtaN = Number(valueQuantita);

    const responseTipoCarta = await getTipoCarta(idPrev, Number(valueFormat));

    const IdTipoCartaN = responseTipoCarta.some(x => x.idTipoCarta == IdTipoCarta) ? IdTipoCarta : responseTipoCarta[0].idTipoCarta;
    const responseColoreStampa = await getColoreStampa({
      idPrev,
      idFormProd: IdFormatN,
      IdTipoCarta: IdTipoCartaN,
    });

    const IdColoreStampaN = responseColoreStampa[0].idColoreStampa;

    const values = Object.entries(valuesStampaCaldoOpz);
    const objetoDesdeEntries = Object.fromEntries(values);
    setFirstCall(true);
    setValuesStampaCaldoOpz({});
    const responseStampaCaldo = await getStampaCaldo({
      IdColoreStampa: IdColoreStampaN,
      idFormProd: IdFormatN,
      idPrev,
      IdTipoCarta: IdTipoCartaN,
    });
    const responseOptionStampaCaldo = handleStampaCaldoDesc(responseStampaCaldo)

    const firstValue: any = {}

    for (let index = 0; index < responseOptionStampaCaldo.length; index++) {
      const { tipoControllo, label, options } = responseOptionStampaCaldo[index];
      if (tipoControllo === 0) {
        firstValue[label] = options[0].value
      }
      if (tipoControllo === 1) {
        if (objetoDesdeEntries[label] != undefined && objetoDesdeEntries[label] != 0) {
          const existOption = options.some(x => x.value == objetoDesdeEntries[label])
          const i = options.findIndex(x => x.value == objetoDesdeEntries[label])
          firstValue[label] = options[!existOption ? 0 : i].value;
        } else {
          firstValue[label] = options[0].value;
        }
        //firstValue[label] = options[0].value
      }
      if (tipoControllo === 2) {
        firstValue[options[0].label] = options[0].value
      }
    }

    setValuesStampaCaldoOpz(firstValue);
    //const  = 
    const petitions = await Promise.all([
      getTablePrezzi({
        valuesStampaCaldoOpz: firstValue,
        altezza: altezzaN,
        base: baseN,
        facciatePagine: idFogli,
        IdColoreStampa: IdColoreStampaN,
        idFormProd: IdFormatN,
        idPrev,
        IdTipoCarta: IdTipoCartaN,
        idUt,
        iva: IvaN,
        profundita: profunditaN,
        quantita: QtaN,
      }),
      getCalcolaTuto({
        valuesStampaCaldoOpz: firstValue,
        altezza: altezzaN,
        base: baseN,
        IdColoreStampa: IdColoreStampaN,
        idFormProd: IdFormatN,
        idPrev,
        IdTipoCarta: IdTipoCartaN,
        idUt,
        iva: IvaN,
        profundita: profunditaN,
        code: codeSelected,
        idFogli: idFogli,
        prezzo: 0,
        qtaSlezionata: qtaSelected,
        quantity: QtaN,
      }),
      getFormatoStr({ altezza: altezzaN, base: baseN, profundita: profunditaN, IdColoreStampa: IdColoreStampaN, idFormProd: IdFormatN, idPrev, IdTipoCarta: IdTipoCartaN, idUt }),
      getHelpersData({ IdColoreStampa: IdColoreStampaN, idFogli: idFogli, idFormProd: IdFormatN, idPrev, IdTipoCarta: IdTipoCartaN }),
      getOpzioni({ altezza: altezzaN, base: baseN, profundita: profunditaN, IdColoreStampa: IdColoreStampaN, idFormProd: IdFormatN, idPrev, IdTipoCarta: IdTipoCartaN, idUt }),
      getShowFogliPagine({
        IdColoreStampa: IdColoreStampaN,
        IdTipoCarta: IdTipoCartaN,
        idFormProd: IdFormatN,
        idPrev,
        idUt,
        altezza: altezzaN,
        base: baseN,
        profundita: profunditaN,
        iva: IvaN,
        valuesStampaCaldoOpz: firstValue,
        facciatePagine: idFogli,
        quantita: QtaN,
      }),
      getShowTabellaPrezzi({
        IdColoreStampa: IdColoreStampaN,
        IdTipoCarta: IdTipoCartaN,
        idFormProd: IdFormatN,
        idPrev,
        altezza: altezzaN,
        base: baseN,
        profundita: profunditaN,
        idUt,
      }),
      getShowQtaCustom({ IdColoreStampa: IdColoreStampaN, IdTipoCarta: IdTipoCartaN, idFormProd: IdFormatN, idPrev }),
      getShowBloccoMisure({
        IdColoreStampa: IdColoreStampaN,
        IdTipoCarta: IdTipoCartaN,
        idFormProd: IdFormatN,
        idPrev,
      }),
      // getStampaCaldo({
      //   IdColoreStampa: IdColoreStampaN,
      //   idFormProd: IdFormatN,
      //   idPrev,
      //   IdTipoCarta: IdTipoCartaN,
      // })

    ])

    const [responseTablePrezzo, responseCalcolaTuto, responseDimensioniStr, responseHelperData, opzioni, showFogliPagine, responseShowTablePrezzi, responseShowQtaCustom, responseShowBloccoMisure,/*responseStampaCaldo*/] = petitions;
    const responseOpzioni = handleOptionsOpzioni(opzioni);
    setOptionTipoCarta(handleTipoCarta(responseTipoCarta));
    setOptionColoreStampa(handleColoriStampa(responseColoreStampa));
    setStampaCalOpz(responseOptionStampaCaldo);
    setShowQtaCustom(responseShowQtaCustom?.data);
    responseShowTablePrezzi.data ? setTablaDataPrezzi(responseTablePrezzo) : setTablaDataPrezzi([]);
    setCalcolaTuto(responseCalcolaTuto);
    setDimensionniStr(responseDimensioniStr);
    setHelperDataProdotto(responseHelperData);
    setOpzioniList(responseOpzioni);
    setUriImage(responseDimensioniStr.imgSelezionato);
    handleOpzioneInclusa(responseStampaCaldo);
    setShowBloccoMisure(responseShowBloccoMisure?.data);
    setShowTablePreez(responseShowTablePrezzi.data);

    const responseFogliPagine = handleFogliPagine(
      showFogliPagine.data.data,
      showFogliPagine.data.fogliLabel,
      showFogliPagine.data.showFogliPagine
    );
    const responseOptionSotoblocco = handleOptionSottoblocco(
      showFogliPagine.data.sotoblocco
    );
    const responseOptionCopertina = handleOptionCopertina(showFogliPagine.data.copertina)
    setCopertina(responseOptionCopertina);

    if (idCategoria != "0") {
      const responseFormatoDinamico = await getFormatoDinamico(String(idCategoria));
      setFormatoDinamico(responseFormatoDinamico.categoria);
    }
    //showFogliPagine.data.showFogliPagine &&
    setFlogiPagine(responseFogliPagine);
    //showFogliPagine.data.sotoblocco.showSotoblocco &&
    setSotoblocco(responseOptionSotoblocco);
    // const stampaDefault = responseOptionStampaCaldo.find(x => x.options[0].value != 0);
    // const nameRecord = String(stampaDefault?.label);
    // const valueRecord = Number(stampaDefault?.options[0].value);
    setExecute(false);

    setFormValues((lastValues) => {
      return {
        ...lastValues,
        valueColoreStampa: IdColoreStampaN,
        valueTipoCarta: IdTipoCartaN,
      };
    });

    setLoading(false);
  };

  const handleChangeTipoCarta = async () => {
    if (!execute) return;
    setLoading(true);
    const { idPrev, idUt, } = handleParamsFormat();
    const { valueFormat, valueTipoCarta, valueAltezza, valueBase, valueFogli, valueProfundita, valueQuantita, valueRadio } = formValues;
    const IdTipoCartaN = Number(valueTipoCarta);
    const IdFormatN = Number(valueFormat);
    const altezzaN = Number(valueAltezza), baseN = Number(valueBase), profunditaN = Number(valueProfundita), QtaN = Number(valueQuantita), IvaN = Number(valueRadio);
    const idFogli = Number(valueFogli);

    const values = Object.entries(valuesStampaCaldoOpz);
    const objetoDesdeEntries = Object.fromEntries(values);
    setValuesStampaCaldoOpz({});
    const responseColoreStampa = await getColoreStampa({
      idPrev,
      idFormProd: IdFormatN,
      IdTipoCarta: IdTipoCartaN,
    });
    const IdColoreStampaN = responseColoreStampa[0].idColoreStampa;
    const responseStampaCaldo = await getStampaCaldo({
      IdColoreStampa: IdColoreStampaN,
      idFormProd: IdFormatN,
      idPrev,
      IdTipoCarta: IdTipoCartaN,
    });
    const responseOptionStampaCaldo = handleStampaCaldoDesc(responseStampaCaldo);
    const firstValue: any = {}
    console.log('Aca')

    for (let index = 0; index < responseOptionStampaCaldo.length; index++) {
      const { tipoControllo, label, options } = responseOptionStampaCaldo[index];
      if (tipoControllo === 0) {
        firstValue[label] = options[0].value;
        setIdLav(Number(options[0].value));
      } else if (tipoControllo === 1) {
        if (objetoDesdeEntries[label] != undefined) {
          const i = options.findIndex(x => x.value === objetoDesdeEntries[label])
          firstValue[label] = options[i].value;

        } else {
          firstValue[label] = options[0].value

        }
      } else if (tipoControllo === 2) {
        firstValue[options[0].label] = options[0].value
      }
    }
    const petitions = await Promise.all([
      getTablePrezzi({
        valuesStampaCaldoOpz: firstValue,
        altezza: altezzaN,
        base: baseN,
        facciatePagine: idFogli,
        IdColoreStampa: IdColoreStampaN,
        idFormProd: IdFormatN,
        idPrev,
        IdTipoCarta: IdTipoCartaN,
        idUt,
        iva: IvaN,
        profundita: profunditaN,
        quantita: QtaN,
      }),
      getCalcolaTuto({
        valuesStampaCaldoOpz: firstValue,
        altezza: altezzaN,
        base: baseN,
        IdColoreStampa: IdColoreStampaN,
        idFormProd: IdFormatN,
        idPrev,
        IdTipoCarta: IdTipoCartaN,
        idUt,
        iva: IvaN,
        profundita: profunditaN,
        code: codeSelected,
        idFogli,
        prezzo: 0,
        qtaSlezionata: qtaSelected,
        quantity: QtaN,
      }),
      getFormatoStr({ altezza: altezzaN, base: baseN, profundita: profunditaN, IdColoreStampa: IdColoreStampaN, idFormProd: IdFormatN, idPrev, IdTipoCarta: IdTipoCartaN, idUt }),
      getHelpersData({ IdColoreStampa: IdColoreStampaN, idFogli, idFormProd: IdFormatN, idPrev, IdTipoCarta: IdTipoCartaN }),
      getOpzioni({ altezza: altezzaN, base: baseN, profundita: profunditaN, IdColoreStampa: IdColoreStampaN, idFormProd: IdFormatN, idPrev, IdTipoCarta: IdTipoCartaN, idUt }),
      getOpizioniCarrello({ idPrev, idFormProd: IdFormatN, IdTipoCarta: IdTipoCartaN, IdColoreStampa: IdColoreStampaN }),
    ])
    const [responseTablePrezzo, responseCalcolaTuto, responseDimensioniStr, responseHelperData, opzioni, opzioniStatic] = petitions;
    const responseOpzioni = handleOptionsOpzioni(opzioni);

    setOptionColoreStampa(handleColoriStampa(responseColoreStampa));

    setStampaCalOpz(responseOptionStampaCaldo);
    setTablaDataPrezzi(responseTablePrezzo);
    setCalcolaTuto(responseCalcolaTuto);
    setDimensionniStr(responseDimensioniStr);
    setHelperDataProdotto(responseHelperData);
    setOpzioniList(responseOpzioni);
    setOpzioniListStatic(opzioniStatic);
    setUriImage(responseDimensioniStr.imgSelezionato);
    handleOpzioneInclusa(responseStampaCaldo)

    setValuesStampaCaldoOpz({ ...firstValue });
    setExecute(false);

    setFormValues((lastValues) => {
      return {
        ...lastValues,
        valueColoreStampa: IdColoreStampaN,
      };
    });

    setLoading(false);
  };

  const handleChangeColoreStampa = async () => {
    if (!execute) return;
    setLoading(true);
    setRowSelectedIva(undefined);
    const { idPrev, idUt } = handleParamsFormat();
    const { valueFormat, valueTipoCarta, valueColoreStampa, valueFogli, valueRadio, valueAltezza, valueBase, valueProfundita, valueQuantita } =
      formValues;

    const IdTipoCartaN = Number(valueTipoCarta);
    const IdFormatN = Number(valueFormat);
    const IdColoreStampaN = Number(valueColoreStampa);
    const idFogliN = Number(valueFogli);
    const iva = Number(valueRadio);
    const altezzaN = Number(valueAltezza), baseN = Number(valueBase), profunditaN = Number(valueProfundita), qtaN = Number(valueQuantita);

    const responseStampaCaldo = await getStampaCaldo({
      IdColoreStampa: IdColoreStampaN,
      idFormProd: IdFormatN,
      idPrev,
      IdTipoCarta: IdTipoCartaN,
    });
    const responseTablePrezzo = await getTablePrezzi({
      valuesStampaCaldoOpz: valuesStampaCaldoOpz,
      altezza: altezzaN,
      base: baseN,
      facciatePagine: idFogliN,
      IdColoreStampa: IdColoreStampaN,
      idFormProd: IdFormatN,
      idPrev,
      IdTipoCarta: IdTipoCartaN,
      idUt,
      iva,
      profundita: profunditaN,
      quantita: qtaN,
    });

    const optionStampaCaldo = handleStampaCaldoDesc(responseStampaCaldo)
    var codeStr = ""
    const prezzoN = responseTablePrezzo.find(x => x.richiestaCalcoloPrezzo.qtaRichiesta === qtaN)
    if (prezzoN?.prezzoPubbl === 0) {
      codeStr = "S";
      setCodeSelected('S');
      handleSelectDateConsegna(tableDate!.giornoIntS + " " + tableDate!.meseS.substring(0, 3));
    }
    const responseCalcolaTuto = await getCalcolaTuto({
      valuesStampaCaldoOpz: valuesStampaCaldoOpz,
      altezza: altezzaN,
      base: baseN,
      IdColoreStampa: IdColoreStampaN,
      idFormProd: IdFormatN,
      idPrev,
      IdTipoCarta: IdTipoCartaN,
      idUt,
      iva,
      profundita: profunditaN,
      code: codeStr != "" ? codeStr : codeSelected,
      idFogli: idFogliN,
      prezzo: 0,
      qtaSlezionata: qtaSelected,
      quantity: qtaN,
    });

    const index = responseTablePrezzo.findIndex(x => x.richiestaCalcoloPrezzo.qtaRichiesta == responseCalcolaTuto.qta);
    setIndexTable(index);

    setStampaCalOpz(optionStampaCaldo);
    setTablaDataPrezzi(responseTablePrezzo);
    setCalcolaTuto(responseCalcolaTuto);
    handleOpzioneInclusa(responseStampaCaldo)
    const firstValue: any = {}
    for (let index = 0; index < optionStampaCaldo.length; index++) {
      const { tipoControllo, label, options } = optionStampaCaldo[index];
      if (tipoControllo === 0 || tipoControllo === 1) {
        firstValue[label] = options[0].value
      } else if (tipoControllo === 2) {
        firstValue[options[0].label] = options[0].value
      }
    }
    setExecute(false);
    setLoading(false);
    setValuesStampaCaldoOpz({ ...valuesStampaCaldoOpz, ...firstValue });

  };

  const handleChangRadioIva = async () => {
    if (!execute) return;
    setLoading(true);
    setRowSelectedIva(undefined);
    const { idPrev, idUt } = handleParamsFormat();
    const { valueFormat, valueTipoCarta, valueColoreStampa, valueFogli, valueRadio, valueAltezza, valueBase, valueProfundita, valueQuantita } =
      formValues;

    const IdTipoCartaN = Number(valueTipoCarta);
    const IdFormatN = Number(valueFormat);
    const IdColoreStampaN = Number(valueColoreStampa);
    const idFogliN = Number(valueFogli);
    const iva = Number(valueRadio);
    const altezzaN = Number(valueAltezza), baseN = Number(valueBase), profunditaN = Number(valueProfundita), qtaN = Number(valueQuantita);

    // const responseStampaCaldo = await getStampaCaldo({
    //   IdColoreStampa: IdColoreStampaN,
    //   idFormProd: IdFormatN,
    //   idPrev,
    //   IdTipoCarta: IdTipoCartaN,
    // });
    const responseTablePrezzo = await getTablePrezzi({
      valuesStampaCaldoOpz: valuesStampaCaldoOpz,
      altezza: altezzaN,
      base: baseN,
      facciatePagine: idFogliN,
      IdColoreStampa: IdColoreStampaN,
      idFormProd: IdFormatN,
      idPrev,
      IdTipoCarta: IdTipoCartaN,
      idUt,
      iva,
      profundita: profunditaN,
      quantita: qtaN,
    });

    //const optionStampaCaldo = handleStampaCaldoDesc(responseStampaCaldo)
    var codeStr = ""
    const prezzoN = responseTablePrezzo.find(x => x.richiestaCalcoloPrezzo.qtaRichiesta === qtaN)
    if (prezzoN?.prezzoPubbl === 0) {
      codeStr = "S";
      setCodeSelected('S');
      handleSelectDateConsegna(tableDate!.giornoIntS + " " + tableDate!.meseS.substring(0, 3));
    }
    const responseCalcolaTuto = await getCalcolaTuto({
      valuesStampaCaldoOpz: valuesStampaCaldoOpz,
      altezza: altezzaN,
      base: baseN,
      IdColoreStampa: IdColoreStampaN,
      idFormProd: IdFormatN,
      idPrev,
      IdTipoCarta: IdTipoCartaN,
      idUt,
      iva,
      profundita: profunditaN,
      code: codeStr != "" ? codeStr : codeSelected,
      idFogli: idFogliN,
      prezzo: 0,
      qtaSlezionata: qtaSelected,
      quantity: qtaN,
    });

    const index = responseTablePrezzo.findIndex(x => x.richiestaCalcoloPrezzo.qtaRichiesta == responseCalcolaTuto.qta);
    setIndexTable(index);

    //setStampaCalOpz(optionStampaCaldo);
    setTablaDataPrezzi(responseTablePrezzo);
    setCalcolaTuto(responseCalcolaTuto);
    //handleOpzioneInclusa(responseStampaCaldo)
    const firstValue: any = {}
    // for (let index = 0; index < optionStampaCaldo.length; index++) {
    //   const { tipoControllo, label, options } = optionStampaCaldo[index];
    //   if (tipoControllo === 0 || tipoControllo === 1) {
    //     firstValue[label] = options[0].value
    //   } else if (tipoControllo === 2) {
    //     firstValue[options[0].label] = options[0].value
    //   }
    // }
    setExecute(false);
    setLoading(false);
    //setValuesStampaCaldoOpz({ ...valuesStampaCaldoOpz, ...firstValue });
  }

  const handleChangeStampaCaldo = async () => {
    const empty = Object.entries(valuesStampaCaldoOpz).length === 0;
    if (empty || !execute) return;

    setLoading(true);
    const { idPrev, idUt } = handleParamsFormat();
    const { valueFormat, valueTipoCarta, valueColoreStampa, valueFogli, valueAltezza, valueBase, valueProfundita, valueQuantita, valueRadio } =
      formValues;
    const QtaN = Number(valueQuantita), BaseN = Number(valueBase), AltezzaN = Number(valueAltezza), ProfunditaN = Number(valueProfundita), IvaN = Number(valueRadio);
    const IdTipoCartaN = Number(valueTipoCarta);
    const IdFormatN = Number(valueFormat);
    const IdColoreStampaN = Number(valueColoreStampa);
    const idFogliN = Number(valueFogli);

    const petitions = await Promise.all([
      getTablePrezzi({
        valuesStampaCaldoOpz,
        altezza: AltezzaN,
        base: BaseN,
        facciatePagine: idFogliN,
        IdColoreStampa: IdColoreStampaN,
        idFormProd: IdFormatN,
        idPrev,
        IdTipoCarta: IdTipoCartaN,
        idUt,
        iva: IvaN,
        profundita: ProfunditaN,
        quantita: QtaN,
      }),
      getCalcolaTuto({
        valuesStampaCaldoOpz,
        altezza: AltezzaN,
        base: BaseN,
        IdColoreStampa: IdColoreStampaN,
        idFormProd: IdFormatN,
        idPrev,
        IdTipoCarta: IdTipoCartaN,
        idUt,
        iva: IvaN,
        profundita: ProfunditaN,
        code: codeSelected,
        idFogli: idFogliN,
        prezzo: 0,
        qtaSlezionata: qtaSelected,
        quantity: QtaN,
      }),
      getFormatoStr({ altezza: AltezzaN, base: BaseN, IdColoreStampa: IdColoreStampaN, idFormProd: IdFormatN, idPrev, IdTipoCarta: IdTipoCartaN, idUt, profundita: ProfunditaN, IdLav: IdLav }),
      getStampaCaldo({ IdColoreStampa: IdColoreStampaN, idFormProd: IdFormatN, idPrev, IdTipoCarta: IdTipoCartaN, })
    ])

    const [responseTablePrezzo, responseCalcolaTuto, formatoStr, stampaCaldo] = petitions;

    setTablaDataPrezzi(responseTablePrezzo);
    setCalcolaTuto(responseCalcolaTuto);
    setUriImage(formatoStr.imgSelezionato);
    setDimensionniStr(formatoStr)
    setExecute(false);
    setLoading(false);
    handleOpzioneInclusa(stampaCaldo);

  };

  const handleChangeInput = async (evt: React.ChangeEvent<
    HTMLInputElement>) => {

    const { name, value } = evt.target;
    const {
      valueQuantita, valueBase, valueAltezza, valueProfundita,
    } = formValues;
    const QtaN = Number(valueQuantita), BaseN = Number(valueBase), AltezzaN = Number(valueAltezza), ProfunditaN = Number(valueProfundita);
    var defaultValue = '';//= (name === 'valueAltezza') ? '40' : (name === 'valueProfundita') ? '14' : (name === 'valueBase') ?'20': " ";

    // if (name != 'valueQuantita') {
    //   if (disableProfundita?.disabled === true) {
    //     defaultValue = (name === 'valueBase' && (BaseN < 70 || Number.isNaN(parseFloat(String(valueBase)))) || (parseFloat(String(valueBase)) < 70)) ? "70" : (name === 'valueAltezza' && (AltezzaN < 100 || Number.isNaN(parseFloat(String(valueAltezza)))) || parseFloat(String(valueAltezza)) < 100) ? '100' : defaultValue;
    //   } else if (showProfundita === false) {
    //     defaultValue = (name === 'valueBase' && (BaseN < 1 || Number.isNaN(parseFloat(String(valueBase)))) || (parseFloat(String(valueBase)) < 1)) ? "1" : (name === 'valueAltezza' && (AltezzaN < 1 || Number.isNaN(parseFloat(String(valueAltezza)))) || parseFloat(String(valueAltezza)) < 1) ? '1' : defaultValue;
    //     defaultValue = (name === 'valueBase' && (BaseN > 440)) ? "440" : (name === 'valueAltezza' && (AltezzaN > 310)) ? '310' : defaultValue;
    //   } else {
    //     defaultValue = (name === 'valueBase' && (BaseN < 20 || Number.isNaN(parseFloat(String(valueBase)))) || (parseFloat(String(valueBase)) < 20)) ? "20" : (name === 'valueAltezza' && (AltezzaN < 40 || Number.isNaN(parseFloat(String(valueAltezza)))) || parseFloat(String(valueAltezza)) < 40) ? '40' : defaultValue;
    //   }
    //   if (showProfundita === true && name === 'valueProfundita') {
    //     defaultValue = (name === 'valueProfundita' && (ProfunditaN < 14 || Number.isNaN(parseFloat(String(valueProfundita)))) || parseFloat(String(valueProfundita)) < 14) ? "14" : defaultValue;
    //   }
    // } else

    switch (name) {
      case "valueBase":
        defaultValue = (await httpGetInputValues(String(valueBase), Number(idPrev), enAsseXYZ.Base)).toString();
        break;
      case "valueProfundita":
        defaultValue = (await httpGetInputValues((String(valueProfundita)), Number(idPrev), enAsseXYZ.Profondita)).toString();
        break;
      case "valueAltezza":
        defaultValue = (await httpGetInputValues((String(valueAltezza)), Number(idPrev), enAsseXYZ.Altezza)).toString();
        break;
      default:
        break;
    }
    if (name === 'valueQuantita') {
      var qtaStr = parseFloat(valueQuantita);
      defaultValue = (Number.isNaN(QtaN) || (qtaStr <= 0) || Number.isNaN(qtaStr)) ? defaultValue : (Math.floor(QtaN)).toString();
    }

    if (value != "") {
      setLoading(true);
      setChangeInput(true);
      if (defaultValue != "") {
        const valueKey = formValues[name as keyof FormValue];
        if (defaultValue == valueKey) {
          handleChangeValuesInput();
          setFormValues({
            ...formValues,
            [name]: defaultValue,
          })
        } else {
          setFormValues({
            ...formValues,
            [name]: defaultValue,
          })
          setLoading(false);
        }
      } else {
        const valueValdiate = (name === 'valueBase' && !Number.isNaN(BaseN)) ? Math.floor(BaseN) : (name === 'valueAltezza' && !Number.isNaN(AltezzaN)) ? Math.floor(AltezzaN) : (name === 'valueProfundita' && !Number.isNaN(ProfunditaN)) ? Math.floor(ProfunditaN) : (name === 'valueQuantita' && !Number.isNaN(QtaN)) ? "" : !Number.isNaN(parseFloat(value)) ? Math.floor(parseFloat(value)) : "";
        setFormValues({
          ...formValues,
          [name]: valueValdiate,
        })
        setLoading(false);
        //setChangeInput(true);
      }
    } else {
      handleChangeValuesInput();
    }
  };

  const handleChangeValuesInput = async () => {
    setLoading(true)
    const { idPrev, idUt } = handleParamsFormat();
    const {
      valueFormat,
      valueTipoCarta,
      valueColoreStampa,
      valueFogli,
      valueQuantita, valueBase, valueAltezza, valueProfundita, valueRadio
    } = formValues;
    const IdTipoCartaN = Number(valueTipoCarta);
    const IdFormatN = Number(valueFormat);
    const IdColoreStampaN = Number(valueColoreStampa);
    const idFogliN = Number(valueFogli);
    const QtaN = Number(valueQuantita), BaseN = Number(valueBase), AltezzaN = Number(valueAltezza), ProfunditaN = Number(valueProfundita), IvaN = Number(valueRadio);
    const petitions = await Promise.all([
      getTablePrezzi({
        valuesStampaCaldoOpz,
        altezza: AltezzaN,
        base: BaseN,
        facciatePagine: idFogliN,
        IdColoreStampa: IdColoreStampaN,
        idFormProd: IdFormatN,
        idPrev,
        IdTipoCarta: IdTipoCartaN,
        idUt,
        iva: IvaN,
        profundita: ProfunditaN,
        quantita: QtaN,
      }),
      getShowTabellaPrezzi({
        IdColoreStampa: IdColoreStampaN,
        IdTipoCarta: IdTipoCartaN,
        idFormProd: IdFormatN,
        idPrev,
        altezza: AltezzaN,
        base: BaseN,
        profundita: ProfunditaN,
        idUt,
      }),
      getOpzioni({
        IdColoreStampa: IdColoreStampaN,
        IdTipoCarta: IdTipoCartaN,
        idFormProd: IdFormatN,
        idPrev,
        altezza: AltezzaN,
        base: BaseN,
        profundita: ProfunditaN,
        idUt,
      }),
      getTableDate({
        IdColoreStampa: IdColoreStampaN,
        idFormProd: IdFormatN,
        IdTipoCarta: IdTipoCartaN,
        idPrev,
        altezza: AltezzaN,
        base: BaseN,
        profundita: ProfunditaN,
        idUt,
      }),

    ])
    const [responseTablePrezzo, responseShowTablePrezzo, responseOpzioni, tableDate] = petitions;

    var codeStr = "N"
    const prezzoN = responseTablePrezzo.find(x => x.richiestaCalcoloPrezzo.qtaRichiesta === QtaN)
    if (prezzoN?.prezzoPubbl === 0) {
      codeStr = "S";
      setCodeSelected('S');
      handleSelectDateConsegna(tableDate!.giornoIntS + " " + tableDate!.meseS.substring(0, 3));
    }
    const responseCalcolaTuto = await getCalcolaTuto({
      valuesStampaCaldoOpz,
      altezza: AltezzaN,
      base: BaseN,
      IdColoreStampa: IdColoreStampaN,
      idFormProd: IdFormatN,
      idPrev,
      IdTipoCarta: IdTipoCartaN,
      idUt,
      iva: IvaN,
      profundita: ProfunditaN,
      code: codeStr,
      idFogli: idFogliN,
      prezzo: 0,
      qtaSlezionata: qtaSelected,
      quantity: QtaN,
    });

    const index = responseTablePrezzo.findIndex(x => x.richiestaCalcoloPrezzo.qtaRichiesta == responseCalcolaTuto.qta);
    setIndexTable(index);
    setTableDate(tableDate);
    handleSelectedDataConsegna(codeStr, tableDate);
    handleSelectDateConsegna(tableDate.giornoIntN + " " + tableDate.meseN.substring(0, 3));
    const responseAlertMassimo = await getShowAlertMassimo({
      valuesStampaCaldoOpz,
      altezza: AltezzaN,
      base: BaseN,
      facciatePagine: idFogliN,
      IdColoreStampa: IdColoreStampaN,
      idFormProd: IdFormatN,
      idPrev,
      IdTipoCarta: IdTipoCartaN,
      idUt,
      iva: IvaN,
      profundita: ProfunditaN,
      quantita: QtaN,
    })
    setAlertMassimo(responseAlertMassimo);
    if (responseAlertMassimo.showErroreMisure) {
      setShowTablePreez(false);
    } else {
      setShowTablePreez(responseShowTablePrezzo.data);
    }
    const responseOpzioniOption = handleOptionsOpzioni(responseOpzioni);
    setTablaDataPrezzi(responseTablePrezzo);
    setCalcolaTuto(responseCalcolaTuto);
    setOpzioniList(responseOpzioniOption);
    if (BaseN != 0 && AltezzaN != 0 && (ProfunditaN != 0 || !showProfundita)) {
      const responseSV = await getSVG({ base: BaseN, altezza: AltezzaN, profundita: ProfunditaN, idPrev });
      setImageSvg(responseSV);
      const responseDimensioniStr = await getFormatoStr({ idPrev, idFormProd: IdFormatN, IdColoreStampa: IdColoreStampaN, IdTipoCarta: IdTipoCartaN, altezza: AltezzaN, base: BaseN, profundita: ProfunditaN, idUt })
      setDimensionniStr(responseDimensioniStr);
    }
    setLoading(false);
  }

  const handleParamsFormat = () => {
    return {
      idPrev: Number(idPrev),
      idFormProd: Number(idFormProd),
      IdTipoCarta: Number(IdTipoCarta),
      IdColoreStampa: Number(IdColoreStampa),
      idFogli: Number(idFogli),
      idUt: Number(idUt),
      idFustella: Number(idFustella),
      idCategoria: idCategoria,
      idBaseEtiquete: Number(idBaseEtiquete),
      idAltezaEtiquete: Number(idAltezaEtiquete),
    };
  };

  const handlePrezzoTable = async (
    code: string,
    qtaZelezionata: number,
    prezzo: number, i: number, dateConsegna: string,
  ) => {
    setLoading(true);
    const { idPrev, idUt, } =
      handleParamsFormat();
    const { valueAltezza, valueBase, valueFogli, valueColoreStampa, valueFormat, valueTipoCarta, valueProfundita, valueRadio, valueQuantita } = formValues;
    const IdColoreStampa = Number(valueColoreStampa), IdTipoCarta = Number(valueTipoCarta), idFormProd = Number(valueFormat), idFogli = Number(valueFogli), QtaN = Number(valueQuantita);
    const profundita = Number(valueProfundita), altezza = Number(valueAltezza), base = Number(valueBase);
    handleSelectDateConsegna(dateConsegna);
    setCodeSelected(code);
    setIndexTable(i);

    setQtaSelected(qtaZelezionata);
    if (tableDate != undefined) handleSelectedDataConsegna(code, tableDate);
    if (valueRadio != 0) {
      setRowSelectedIva(prezzo)
      const responseTablePrezzi = await getTablePrezzi({
        altezza,
        base,
        profundita,
        facciatePagine: idFogli,
        IdColoreStampa,
        idFormProd,
        idPrev,
        IdTipoCarta,
        idUt,
        iva: 0,
        quantita: qtaZelezionata,
        valuesStampaCaldoOpz,
      })
      switch (code) {
        case 'F':
          prezzo = responseTablePrezzi[i].prezzoRiv;
          console.log(responseTablePrezzi[i].prezzoRiv)
          break;
        case 'N':
          prezzo = responseTablePrezzi[i].prezzoPubbl;
          console.log(responseTablePrezzi[i].prezzoPubbl)

          break;
        case 'S':
          prezzo = responseTablePrezzi[i].prezzoConsigliatoPubbl;
          console.log(responseTablePrezzi[i].prezzoConsigliatoPubbl)
          break;
        default:
          break;
      }

    } else {
      setRowSelectedIva(undefined);
    }


    const responseCalcolaTuto = await getCalcolaTuto({
      IdColoreStampa,
      IdTipoCarta,
      idFormProd,
      idPrev,
      idUt,
      altezza,
      base,
      profundita,
      code: code,
      idFogli,
      iva: 0,
      valuesStampaCaldoOpz: valuesStampaCaldoOpz,
      prezzo: prezzo,
      qtaSlezionata: QtaN,
      quantity: qtaZelezionata,
    });
    setCalcolaTuto(responseCalcolaTuto);
    setLoading(false);
  };

  const handleCarrello = async (stp = "1", reload = true) => {

    const { valueAltezza, valueBase, valueProfundita } = formValues;
    if ((showBloccoMisure && valueAltezza == 0 && valueBase == 0 || (valueProfundita == 0 && showProfundita)) || (alertMassimo && alertMassimo.showErroreMisure == true)) return
    setLoading(true);
    localStorage.setItem('stp', stp);

    const OPZ = handleRecordValues();

    const objDataProdotto: ObjCarrello = {
      idUt: utenteData?.idUt,
      idPrev: idPrev,
      IdFormProd: formValues.valueFormat,
      IdTipoCarta: formValues.valueTipoCarta,
      IdColoreStampa: formValues.valueColoreStampa,
      nome: formValues.valueNome,
      note: formValues.valueNote,
      qta: calcolaTuto?.qta,
      //img: showSvg ? imageSvg : helperDataProdotto?.imgRif,
      img: helperDataProdotto?.imgRif,
      svgImg: imageSvg,
      prodotto: dimensionniStr?.prodotto,
      orientamiento: showOrientamiento && handleOrientamiento().find(x => x.value == formValues.valueOrientamento)?.label,
      idOrientamiento: showOrientamiento ? formValues.valueOrientamento : undefined,
      suporto: optionTipoCarta.find(x => x.value == formValues.valueTipoCarta)?.label,
      stampa: optionColoreStampa.find(x => x.value == formValues.valueColoreStampa)?.label,
      dimencioni: parseInt(String(idBaseEtiquete)) != 0 ? `(${idBaseEtiquete}B x ${idAltezaEtiquete}A mm)` : dimensionniStr?.dimensioniStr,
      colli: calcolaTuto?.colli,
      peso: calcolaTuto?.pesoStr,
      prezzo: calcolaTuto?.prezzoCalcolatoNetto,
      descrizione: showColumTable?.descrizione,
      stampaOPZ: OPZ._stampaOpz,
      _stampaOpzId: OPZ._stampaOpzId,
      nomeUrl: helperDataProdotto?.url,
      scadenza: dateConsegna,
      code: calcolaTuto?.code,
      idListinoBase: helperDataProdotto?.idListinoBase,
      showFogli: flogliPagine.length > 0 ? true : false,
      fogli: flogliPagine.length ? flogliPagine.find(x => x.value == formValues.valueFogli)?.value : '0',
      labelFogli: flogliPagine.length ? flogliPagine[0].description : '',
      fogliStr: flogliPagine.length ? flogliPagine.find(x => x.value == formValues.valueFogli)?.label : '0',
      pdfTemplate: optionFormato.find(x => x.value == formValues.valueFormat)?.pdfTemplate,
      idReparto: dimensionniStr?.idReparto,
      base: Number(formValues.valueBase) ?? 0,
      produndita: Number(formValues.valueProfundita) ?? 0,
      altezza: Number(formValues.valueAltezza) ?? 0,
      promo: tablaDataPrezzi.some(x => x.prezzoPromo > 0),
      percentualePromo: calcolaTuto?.promoPercentuale,
      idTipoFustella: calcolaTuto?.idTipoFustella,
    }
    const existCarreloLocal = localStorage.getItem('c');
    let dataCarrelli: ObjCarrello[] = [];
    if (existCarreloLocal) {
      dataCarrelli = JSON.parse(existCarreloLocal);
    } else {
      const c = localStorage.getItem('c');
      const arrayObj: any = []
      localStorage.setItem('c', JSON.stringify(arrayObj))
    }

    dataCarrelli.unshift(objDataProdotto)
    //const updateCarrello = [...dataCarrelli, objDataProdotto];
    localStorage.setItem('c', JSON.stringify(dataCarrelli));

    // const localInsertStr = localStorage.getItem('c');
    // if (localInsertStr) {
    //   const localInsertado = JSON.parse(localInsertStr);
    //   if (localInsertado.length > 0) {
    reload && handleOperationFrame(enOperationFrame.reliadUrl, "carrello");
    //   } else {
    //     alert('Flag: hubo un problema el carrito no pudo ser creado de manera logica')
    //   }
    // }

  }

  const handleRecordValues = () => {
    const arrayStampa: OptionsSelect[] = [];
    const _stampaOpzId: number[] = [];
    const _stampaOpz: string[] = []
    Object.keys(valuesStampaCaldoOpz).forEach((key) => {
      const value = valuesStampaCaldoOpz[key];
      const objVaStampa: OptionsSelect = {
        label: key,
        value: value,
      }

      const stampaLabel = stampaCalOpz.find(x => x.label == objVaStampa.label || x.options.find(y => y.label == objVaStampa.label))

      const realLabel = stampaLabel?.options.find(x => x.value == value);

      if (objVaStampa.value != 0) {
        _stampaOpzId.push(Number(objVaStampa.value));
        _stampaOpz.push(String(realLabel?.label));
      }
    })

    if (parseInt(String(idFustella)) === 0) {
      opzioniList.map((item, i) => {
        _stampaOpz.push(item.label);
        _stampaOpzId.push(Number(item.value));
      })
    }

    const noExistentes = opzioniListStatic.filter((x) =>
      stampaCalOpz?.every((y) =>
        !y.options.some((z) => z.value === x.idLavoro)
      )
    );
    noExistentes.map((ele, i) => {
      _stampaOpz.push(ele.descrizione);
      _stampaOpzId.push(ele?.idLavoro)

    })
    //console.log(_stampaOpz)
    return { _stampaOpz, _stampaOpzId }
  }

  const handleOperationFrame = (operation: enOperationFrame, uri?: string, nav?: string) => {
    window.parent.postMessage({ color: 'bg_hidden', operation: operation, uri: uri }, GLOBAL_CONFIG.IMG_IP);
    //window.parent.postMessage({ color: 'bg_hidden', operation: operation, uri: uri }, GLOBAL_CONFIG.IMG_IPWWW);

    if (nav) {
      navigate(nav);
    }
  }

  const handleSelectDateConsegna = (date: string) => {
    setMenuDateConsegna(date);
  }

  const handleDonwloadPDF = () => {

    const pdf = new jsPDF(undefined, 'px',);
    var mx = 60, my = 40, fullwidth = 380, lineY = 126;

    const dateNow = new Date();

    pdf.addImage(logo, "png", mx, my - 10, 100, 20);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10);
    pdf.text('TIPOGRAFIA FORMER', mx, my + 20);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8);
    pdf.text("Stabilimento e Uffici: Via Cassia 2010, 00123 Roma", mx, my + 30);
    pdf.text("Servizio Clienti: 06.30884518 - Email:", mx, my + 40);
    pdf.textWithLink("info@tipografiaformer.it", mx + 102, my + 40, { url: '' })
    pdf.text("Partita Iva: 14974961006", mx, my + 50);

    pdf.setFont("helvetica", "bold")
    pdf.text("Preventivo WEB", fullwidth - 25, my, { align: "right" })

    pdf.setFont("helvetica", "normal");
    pdf.text(`${DateFormatDDMSYYHHSS(dateNow)}`, fullwidth - 20, my + 10, { align: "right" });

    //*Cliente 

    if (utenteData) {
      pdf.setFont("helvetica", "bold");
      pdf.text("Cliente", mx, my + 85);
      pdf.line(mx, lineY, fullwidth, lineY);
      pdf.text(utenteData.nominativo, mx, my + 100);
      pdf.setFont("helvetica", "normal");
      pdf.text(`Cod. Cliente Online: ${utenteData.idUt}`, mx, my + 108);
      pdf.text(`Riferimento: ${utenteData.nome} ${utenteData.cognome}`, mx, my + 116);
      pdf.text(`Cod. Fisc: ${utenteData.codFisc}`, mx, my + 124);
      pdf.text(`P.IVA: ${utenteData.piva}`, mx, my + 132);
      pdf.text("Email:", mx, my + 140);
      pdf.textWithLink(utenteData.email, mx + 18, my + 140, { url: "" });
      pdf.text(`Tel: ${utenteData.tel}`, mx, my + 148);
    }
    //*Ordine

    pdf.setFont("helvetica", "bold");
    pdf.text("Ordine", mx, my + 170);
    pdf.line(mx, lineY + 85, fullwidth, lineY + 85);

    pdf.setFont("helvetica", "normal");
    pdf.text(`Quantità: ${showTablePreez ? calcolaTuto?.qta : ''}`, mx, my + 180);
    if (showOpzzioni == 2 || showOpzzioni == 1) {
      pdf.text(`Prodotto : ${parseInt(String(idBaseEtiquete)) != 0 ? `(${idBaseEtiquete}B x ${idAltezaEtiquete}A mm)` : dimensionniStr?.prodotto}`, mx, my + 190,)
      pdf.text(`Formato: ${dimensionniStr?.prodotto}`, mx, my + 200);
      my = my + 10;
    } else {
      pdf.text(`Formato: ${optionFormato.find(x => x.value == formValues.valueFormat)?.label}`, mx, my + 190);
    }
    pdf.text(`Tipo di carta: ${optionTipoCarta.find(x => x.value == formValues.valueTipoCarta)?.label}`, mx, my + 200);
    pdf.text(`Colore stampa: ${optionColoreStampa.find(x => x.value == formValues.valueColoreStampa)?.label}`, mx, my + 210);
    pdf.text("Opzioni:", mx, my + 220);
    handleRecordValues()._stampaOpz.map((item, i) => {
      pdf.text(`- ${item}`, mx, my + 228);
      if (handleRecordValues()._stampaOpz.length > 1) {
        my = my + 8;
        lineY = lineY + 8;
      }
    })

    //*Informazioni aggiuntive

    pdf.setFont("helvetica", "bold");
    pdf.text("Informazioni aggiuntive", mx, my + 248);

    pdf.setFont("helvetica", "normal");
    pdf.text(`Data in cui vuoi ricevere il prodotto: ${menuDateConsegna}`, mx, my + 258);
    pdf.text("Modalità di pagamento: 60 giorni data fattura", mx, my + 268);
    pdf.text(`Colli: ${showTablePreez ? calcolaTuto?.colli : '-'}`, mx, my + 278);
    pdf.text(`Peso: ${showTablePreez ? calcolaTuto?.pesoStr : '- '} kg ±`, mx, my + 288);

    pdf.line(mx, lineY + 217, fullwidth, lineY + 217);

    //*Totale
    const IVaPDf = showTablePreez ? numberFormat(numberPercentuale(Number(calcolaTuto?.prezzoCalcolatoNetto), 22)) : '-';
    const TotImportoPDF = showTablePreez ? numberFormat(calcolaTuto?.prezzoCalcolatoNetto) : '-';

    pdf.setFont("helvetica", "bold");
    pdf.text(`Imponibile € ${TotImportoPDF}`, fullwidth, my + 313, { align: 'right' });
    pdf.text(`IVA € ${IVaPDf == '-' ? "-" : IVaPDf}`, fullwidth, my + 323, { align: 'right' });
    pdf.text(`Totale con IVA € ${IVaPDf == '-' ? "-" : replaceComaPoint(IVaPDf) + replaceComaPoint(TotImportoPDF)}`, fullwidth, my + 333, { align: 'right' });
    pdf.setFontSize(6.4);
    pdf.setFont("helvetica", "normal");
    pdf.text("CONDIZIONI DI VENDITA", mx, my + 383,);
    pdf.text(`I prezzi indicati sono soggetti ad improvvise variazioni, verificare on line il prezzo prima dell’ordine. In caso di spedizione i costi sono esclusi dal presente`, mx, my + 390, { align: "justify", })
    pdf.text("preventivo e verranno conteggiati automaticamente al momento dell'ordine a seconda dell'indirizzo di consegna.", mx, my + 395,);
    pdf.text("FILE ALLEGATI AL LAVORO", mx, my + 405);
    pdf.text("Dopo aver effettuato l'ordine potrai allegare i file sorgenti con estrema semplicità tramite un apposito modulo nel sito internet.", mx, my + 410, { align: "justify", });

    pdf.text("RESPONSABILITA' DEL COMMITENTE", mx, my + 420);
    pdf.text("La committente si assume la paternità dei contenuti oggetto di stampa esonerando la Tipografia Former dall'obbligo di esame degli stessi ed assumendosi,", mx, my + 425, { align: "left", });
    pdf.text("pertanto, qualsiasi responsabilità  nei confronti di terzi che dovessero lamentare lesioni all'immagine, onore, decoro, integrità morale o comunque qualsiasi", mx, my + 430, { align: "left", });
    pdf.text("danno patrimoniale e non patrimoniale causalmente collegate alla stampa oggetto di contratto. La Tipografia Former si riserva la chiamata in manleva della", mx, my + 435, { align: "left", });
    pdf.text("committente nell'eventualità in cui domande risarcitorie venissero formulate direttamente nei suoi confronti.", mx, my + 440);

    pdf.text("CLAUSOLA ESONERO RESPONSABILITA'", mx, my + 450);
    pdf.text("Tipografia Former non sarà responsabile nei confronti del committente e/o beneficiario della prestazione se diverso, per danni di qualsiasi specie, sia diretti", mx, my + 455);
    pdf.text("che indiretti, derivanti da eventuali errori, di ogni natura, nella stampa del file inviato dal cliente o derivanti dalla ricezione di materiale sbagliato.   In tali casi", mx, my + 460);
    pdf.text("Tipografia Former sarà tenuta esclusivamente  ad  effettuare una sola ristampa del materiale qualora l'errore  sia  imputabile  alla qualita della  stampa.", mx, my + 465);
    pdf.text("Parimenti Tipografia Former non sarà responsabile per danni, diretti e indiretti, dovuti alla mancata e/o ritardata consegna del materiale,né sarà", mx, my + 470);
    pdf.text("responsabile di eventuali deterioramenti dell'imballaggio; in tali casi sarà tenuta esclusivamente ad effettuare una sola ristampa  del  materiale a condizione", mx, my + 475);
    pdf.text(`che  il pacco venga accettato  dal  cliente "con riserva dei vizi"  che  dovranno essere elencati sulla ricevuta rilasciata  dal corriere e comunicati a Tipografia`, mx, my + 480);
    pdf.text(`Former a mezzo fax, a pena di decadenza,entro tre giorni dalla ricezione del plico. Eventuali errori nella stampa o nel confezionamento del materiale vanno`, mx, my + 485);
    pdf.text(`segnalati alla email info@tipografiaformer.it  con  documentazione fotografica digitale allegata, avendo  cura  di  indicare nell'oggetto  il  numero d'ordine  di`, mx, my + 490);
    pdf.text(`riferimento, entro tre giorni dalla ricezione del materiale.`, mx, my + 495);

    pdf.text("FORO DI COMPETENZA", mx, my + 505);
    pdf.text("Per tutte  le  controversie relative all'interpretazione e/o  all'esecuzione del presente contratto, le parti riconoscono l'esclusiva competenza del foro di Roma,", mx, my + 510, { align: "justify", });
    pdf.text("indipendentemente dal luogo di conclusione del contratto, dal domicilio del committente, dal luogo di pagamento anche se per mezzo di tratta e/o di r.b.", mx, my + 515,)


    pdf.save('Preventivo_' + calcolaTuto?.nomePreventivo);


  }

  const handleCompraloSubito = async () => {

    const { valueAltezza, valueBase, valueProfundita } = formValues;
    if ((showBloccoMisure && valueAltezza == 0 && valueBase == 0 || (valueProfundita == 0 && showProfundita)) || (alertMassimo && alertMassimo.showErroreMisure == true)) return

    handleCarrello(undefined, false);

    const localCarrello = getLocalCarrelloHelper();

    const IdPrevL = Number(localCarrello.arrayCarrello[localCarrello.mayorFecha1].idPrev);
    const IdFormProdL = Number(localCarrello.arrayCarrello[localCarrello.mayorFecha1].IdFormProd);
    const IdTipoCartaL = Number(localCarrello.arrayCarrello[localCarrello.mayorFecha1].IdTipoCarta);
    const IdColoreStampaL = Number(localCarrello.arrayCarrello[localCarrello.mayorFecha1].IdColoreStampa);
    const codeL = String(localCarrello.arrayCarrello[localCarrello.mayorFecha1].code);

    const localConsegna = localStorage.getItem('cons');
    const localConsegnaObj: ISegliConsegnaData = localConsegna ? JSON.parse(localConsegna) : {};
    const radioConsegna = localConsegnaObj.dataCorriere ? localConsegnaObj.dataCorriere.metodoDiConsegna.idMetodoConsegna : 1;
    const capConsegna = localConsegnaObj.dataCorriere ? localConsegnaObj.dataIndirizzo?.cap : utenteData?.defaultCap == null ? utenteData?.cap : utenteData.defaultCap;

    const localPagamento = localStorage.getItem('tp')
    const localPagamentoObj: DataLocalPagamento = localPagamento ? JSON.parse(localPagamento) : {};
    // const radioPagamento = localPagamentoObj.tipoPagamento ? localPagamentoObj.tipoPagamento.idTipoPagamento : localConsegnaObj.dataIndirizzo?.cap ? 8 : 5;
    // const scontoL = localPagamentoObj.dataSconto ? localPagamentoObj.dataSconto.importoFisso : null

    const responseScandeza = await httpGetCorriereSelezionata(utenteData?.corriere.idMetodoConsegna!, String(capConsegna), IdPrevL,
      IdFormProdL,
      IdTipoCartaL,
      IdColoreStampaL, utenteData?.idUt, Number(valueBase), Number(valueProfundita), Number(valueAltezza))

    if (responseScandeza) {
      const carrellostp3 = await handleSelectedDataConsegna(codeSelected, responseScandeza.data.dateConsegna)

      const dataCorrR = responseScandeza.data.corrDaUsare;
      const dataCorrL = localConsegnaObj.dataCorriere;
      const indirizzoL = localConsegnaObj.dataIndirizzo;
      const indirizzoR: DataGetIndirizzo = {
        cap: utenteData?.corriere.idMetodoConsegna == 0 ? "" : utenteData!.defaultCap == null ? utenteData!.cap : utenteData!.defaultCap,
        destinatario: utenteData?.corriere.idMetodoConsegna == 0 ? "" : utenteData!.nominativo,
        idIndirizzo: utenteData?.corriere.idMetodoConsegna == 0 ? 0 : utenteData!.idIndirizzo == null ? 0 : utenteData!.idIndirizzo,
        nome: utenteData?.corriere.idMetodoConsegna == 0 ? "" : utenteData!.indirizoS,
        indirisso: utenteData?.corriere.idMetodoConsegna == 0 ? "" : utenteData!.indirizzo,
        localitaStr: utenteData?.corriere.idMetodoConsegna == 0 ? "" : utenteData!.citta,
        nazioneStr: '',
        predefinito: true,
        riassunto: utenteData?.corriere.idMetodoConsegna == 0 ? "<b style='font-size:16px'>Tipografia Former</b>, Via Cassia, 2010 - 00123 Roma" : utenteData!.indirizoR,
        telefono: utenteData?.corriere.idMetodoConsegna == 0 ? "" : utenteData!.tel,
      }

      const corrUsare = localConsegnaObj.dataCorriere == undefined ? dataCorrR : dataCorrL;
      const indirizzo = localConsegnaObj.dataIndirizzo == undefined ? indirizzoR : indirizzoL;
      console.log(indirizzoR)
      console.log(indirizzoL)
      const emailC = localConsegnaObj.email == undefined ? "" : localConsegnaObj.email;

      const data: ISegliConsegnaData = {
        dataCorriere: corrUsare,
        dataIndirizzo: indirizzo,
        dateConsenga: carrellostp3,
        pesoTotale: localCarrello.TotalPeso,
        email: emailC,
      }

      const responseMetodiPagamento = await httpGetMetodiPagamento(Number(utenteData?.idUt), localCarrello.TotalPrezo, Number(utenteData?.corriere.idMetodoConsegna));
      const dataP: DataLocalPagamento = {
        tipoPagamento: localPagamentoObj.tipoPagamento != undefined ? localPagamentoObj.tipoPagamento : responseMetodiPagamento.data.find(x => x.idTipoPagamento === utenteData?.idPagamento),
        dataSconto: localPagamentoObj.dataSconto,
      }

      localStorage.setItem('cons', JSON.stringify(data));

      localStorage.setItem('tp', JSON.stringify(dataP));

      handleOperationFrame(enOperationFrame.reliadUrl, 'compra-1-click')

    }
  }


  const handleOpzioneInclusa = (responseStampaCaldo: StaCalOpz[]) => {

    var opzH: OptionsSelect[] = [];
    var opz: OptionsSelect;
    const arrayStampa: OptionsSelect[] = [];
    Object.keys(valuesStampaCaldoOpz).forEach((key) => {
      const value = valuesStampaCaldoOpz[key];
      const objVaStampa: OptionsSelect = {
        label: key,
        value: value,
      }
      arrayStampa.push(objVaStampa);
    })
    arrayStampa.map((item, i) => {
      const val = responseStampaCaldo//.filter(x => x.optionsSelect[0].idLavoro != 0);

      val.map((elem, j) => {
        if (elem.descrizione == item.label && item.value != 0 && item.value == elem.optionsSelect[0].idLavoro) {
          //console.log('emntra')
          opz = {
            value: elem.optionsSelect[0].idLavoro,
            label: elem.optionsSelect[0].descrizione,
            description: elem.optionsSelect[0].descrizioneEstesa,
            catLav: elem.descrizione,
            opzione: 'inclusa '
          }
          opzH.push(opz);
        } else {
          elem.optionsSelect.map((pro, k) => {
            if (elem.descrizione == item.label && pro.idLavoro == item.value && item.value != 0) {
              opz = {
                value: pro.idLavoro,
                label: pro.descrizione,
                catLav: elem.descrizione,
                description: pro.descrizioneEstesa,
                opzione: 'Scelta '
              }
              opzH.push(opz);
            }
          })
        }
      })
      setOpzInclusa(opzH);
    })
  }

  const handleRepilogoCarrello = async () => {

    const localConsegna = localStorage.getItem('cons');
    const localConsegnaObj: ISegliConsegnaData = localConsegna ? JSON.parse(localConsegna) : {};
    const radioConsegna = localConsegnaObj.dataCorriere ? localConsegnaObj.dataCorriere.metodoDiConsegna.idMetodoConsegna : 1;
    const capConsegna = localConsegnaObj.dataCorriere ? localConsegnaObj.dataIndirizzo?.cap : utenteData?.defaultCap;

    const localPagamento = localStorage.getItem('tp')
    const localPagamentoObj: DataLocalPagamento = localPagamento ? JSON.parse(localPagamento) : {};
    const radioPagamento = localPagamentoObj.tipoPagamento ? localPagamentoObj.tipoPagamento.idTipoPagamento : localConsegnaObj.dataIndirizzo?.cap ? 8 : 5;

    const localCarrello = getLocalCarrelloHelper();
    if (localCarrello.arrayCarrello.length > 0) {
      const responseTotale = await httpGetTotaleProvisorio(Number(idUt), localCarrello.TotalPeso, 0, localCarrello.TotalPrezo, null, radioPagamento, radioConsegna, capConsegna);
      setTotaleProvisorio(responseTotale.data);
    }

  }

  const handleSelectedDataConsegna = (code: string, dateConsegna: TableDate) => {

    var Dates: IDataConsegna = {
      date: new Date(),
      dateProduzione: new Date(),
      dateProduzioneStr: "",
      dateStr: "",
    }

    switch (code) {
      case "F":
        const yearDataFast = new Date(dateConsegna.dataFast).getFullYear();
        Dates = {
          date: dateConsegna.dataFast,
          dateProduzione: dateConsegna.dataFastProduzione,
          dateProduzioneStr: `${dateConsegna.giornoStrFP} ${dateConsegna.giornoIntFP} ${dateConsegna.meseF} ${yearDataFast}`,
          dateStr: `${dateConsegna.giornoStrF} ${dateConsegna.giornoIntF} ${dateConsegna.meseF} ${yearDataFast}`
        }
        setDateConsegna(Dates);
        return Dates
        //localStorage.setItem('datecons', JSON.stringify(Dates));
        break;
      case "N":
        const yearDataNormale = new Date(dateConsegna.dataNormale).getFullYear();
        Dates = {
          date: dateConsegna.dataNormale,
          dateProduzione: dateConsegna.dataNormaleProduzione,
          dateProduzioneStr: `${dateConsegna.giornoStrNP} ${dateConsegna.giornoIntNP} ${dateConsegna.meseN} ${yearDataNormale}`,
          dateStr: `${dateConsegna.giornoStrN} ${dateConsegna.giornoIntN} ${dateConsegna.meseN} ${yearDataNormale}`
        }
        setDateConsegna(Dates);
        return Dates

        //localStorage.setItem('datecons', JSON.stringify(Dates));
        break;
      case "S":
        const yearDataSlow = new Date(dateConsegna.dataSlow).getFullYear();
        Dates = {
          date: dateConsegna.dataSlow,
          dateProduzione: dateConsegna.dataSlowProduzione,
          dateProduzioneStr: `${dateConsegna.giornoStrSP} ${dateConsegna.giornoIntSP} ${dateConsegna.meseS} ${yearDataSlow}`,
          dateStr: `${dateConsegna.giornoStrS} ${dateConsegna.giornoIntS} ${dateConsegna.meseS} ${yearDataSlow}`
        }
        setDateConsegna(Dates);
        return Dates

        //localStorage.setItem('datecons', JSON.stringify(Dates));
        break;
      default:
        return
    }
  }

  const handleCampioneGratutito = () => {
    const prodotto = dimensionniStr?.prodotto
    localStorage.setItem('campione', prodotto ?? "");
    handleOperationFrame(enOperationFrame.reliadUrl, 'richiedi-un-campione-gratuito')
  }

  useEffect(() => {
    if (firstCall) return;
    handleChangeParams("valueFormat");
  }, [formValues.valueFormat]);

  useEffect(() => {
    if (firstCall) return;
    handleChangeParams("valueTipoCarta");
  }, [formValues.valueTipoCarta]);

  useEffect(() => {
    if (firstCall) return;
    handleChangeParams("valueColoreStampa");
  }, [formValues.valueColoreStampa]);

  useEffect(() => {
    if (firstCall) return;
    handleChangeParams("valueFogli");
  }, [formValues.valueFogli]);

  useEffect(() => {
    if (firstCall) return;
    console.log('aca')
    handleChangeParams("valuesStampaCaldo");
  }, [valuesStampaCaldoOpz]);

  useEffect(() => {
    if (firstCall) return;
    handleChangeParams("valueRadio");
  }, [formValues.valueRadio]);

  useEffect(() => {
    if (!changeInput) return;
    handleChangeParams("valueInputs");
  }, [formValues.valueAltezza, formValues.valueBase, formValues.valueProfundita, formValues.valueQuantita]);


  useEffect(() => {
    handlePrimaryData();
    handleData();
    handleSecondaryData();
  }, []);

  return {
    optionFormato,
    ...formValues,
    showOrientamiento,
    optionOrientamiento,
    loading,
    optionTipoCarta,
    optionColoreStampa,
    stampaCalOpz,
    formValues,
    tableDate,
    calcolaTuto,
    tablaDataPrezzi,
    viewRow,
    utenteData,
    sotoblocco,
    opzioniList,
    flogliPagine,
    showQtaCustom,
    showColumTable,
    showBloccoMisure,
    textMetrics,
    showOpzzioni,
    showTablePreez,
    setviewRow,
    showProfundita,
    disableProfundita,
    uriImage,
    listWhite,
    valuesStampaCaldoOpz, formatoDinamico, idBaseEtiquete, showSvg, imageSvg, textTipoCarta, rowSelectedIva, menuDateConsegna,
    idAltezaEtiquete, dimensionniStr, copertina, idPrev, idFormProd, IdTipoCarta, prodottoConsigliato, rencensioniP, recencioniC, descrizioneDinamica, opzInclusa, descrizioneMisure, indexTable, alertMassimo, formatoLabel, TotaleProvisorio, ImageEtiquete,
    //*
    handleChange,
    handlePrezzoTable,
    handleChangeDinamyc,
    handleChangeValue,
    handleChangeInput,
    handleChangeCheckbox, handleCarrello, handleChangeRadio, handleOperationFrame, handleDonwloadPDF, handleCompraloSubito, setIndexTable, handleCampioneGratutito,
  };
};

export default useProdtto;
