import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  httpGetColoreStampa,
  httpGetFormatoArray,
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
import { DateConsegna, TableDate } from "../interface/tableDate";
import { DataGetCalcolaTuto } from "../interface/calcolaTuto";
import { TablePrezzi } from "../interface/table";
import { DataResponseGetUtente } from "../../../interface/Utente";
import { ArraySotoblocco } from "../interface/fogliPagine";
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
import { numberFormat, numberPercentuale } from "../../../Helpers/formatNumber";
import { httpGetCorriereSelezionata, httpGetMetodiPagamento } from "../../carrello/services/Services";
import { DataGgetCorriereSelezionata } from "../../carrello/Interfaces/Corriere";
import { DataGetProduttoConsigliato } from "../interface/prodottoConsigliato";
import { DataGetResencioniP } from "../interface/RecensioniP";
import { DataGetAggiornaReview } from "../interface/AggiornaReview";
import { DataGetDescrizioniDinamica } from "../interface/DescrizioneDinamica";

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
    idAltezaEtiquete,
  } = useParams();

  interface FormValue {
    valueFormat: string | number;
    valueOrientamento: string | number;
    valueTipoCarta: string | number;
    valueColoreStampa: string | number;
    valueRadio: string | number;
    valueQuantita: string;
    valueBase: string;
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
  const [dateConsegna, setDateConsegna] = useState<DateConsegna>();
  const [rencensioniP, setRencensioniP] = useState<DataGetResencioniP>()
  const [descrizioneDinamica, setDescrizioneDinamica] = useState<DataGetDescrizioniDinamica>()

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
  const [menuDateConsegna, setMenuDateConsegna] = useState<string>()
  const [rowSelectedIva, setRowSelectedIva] = useState<number | undefined>(undefined);
  const [IdLav, setIdLav] = useState<number | null>(null)


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
  const [loading, setLoading] = useState(true);
  const handleData = async () => {
    try {
      console.log('renmder')
      setLoading(true);

      const { IdColoreStampa, IdTipoCarta, idFormProd, idPrev, idUt, idFogli, idCategoria } =
        handleParamsFormat();

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
        getTableDate({
          IdColoreStampa,
          idFormProd,
          IdTipoCarta,
          idPrev,
          altezza: 0,
          base: 0,
          profundita: 0,
          idUt,
        }),
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
        getTablePrezzi({
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
        getFormatoStr({ idPrev, idFormProd, IdTipoCarta, IdColoreStampa, altezza: 0, base: 0, profundita: 0, idUt })
      ]);

      const [
        format,
        showOrientamiento,
        tipoCarta,
        coloreStampa,
        opzioni,
        qtaCustom,
        stampaCaldo,
        tableDate,
        dataUtn,
        responseCalculaTuto,
        columnTable,
        responseTablePrezzi,
        responseShowFoliPagine,
        responseShowBloccoMisure,
        responseShowOopzioni,
        responseShowTablePrezzi,
        responseDisableProfundita, showSVG, opzioniCarrello, helperData, formatoStr,
      ] = initialState;
      const responseFormat = handleFormatoList(format);
      const responseOrientamiento = handleOrientamiento();
      const responseTipoCarta = handleTipoCarta(tipoCarta);
      const responseColoreStampa = handleColoriStampa(coloreStampa);
      const responseOpzioni = handleOptionsOpzioni(opzioni);
      const responseStampaCaldoOPZ = handleStampaCaldoDesc(stampaCaldo);
      const responseFogliPagine = handleFogliPagine(
        responseShowFoliPagine.data.data,
        responseShowFoliPagine.data.fogliLabel
      );
      const responseOptionSotoblocco = handleOptionSottoblocco(
        responseShowFoliPagine.data.sotoblocco
      );
      const responseOptionCopertina = handleOptionCopertina(responseShowFoliPagine.data.copertina)
      setCopertina(responseOptionCopertina);

      if (idCategoria != "0") {
        const responseFormatoDinamico = await getFormatoDinamico(String(idCategoria));
        setFormatoDinamico(responseFormatoDinamico.categoria);
      }

      responseShowFoliPagine.data.showFogliPagine &&
        setFlogiPagine(responseFogliPagine);
      responseShowFoliPagine.data.sotoblocco.showSotoblocco &&
        setSotoblocco(responseOptionSotoblocco);
      setShowColumTable(columnTable);
      setTablaDataPrezzi(responseTablePrezzi);
      setOptionOrientamiento(responseOrientamiento);
      setShowOrientamiento(showOrientamiento);
      setOptionFormato(responseFormat);
      setOptionTipoCarta(responseTipoCarta);
      setOptionColoreStampa(responseColoreStampa);
      setShowQtaCustom(qtaCustom?.data);
      setShowBloccoMisure(responseShowBloccoMisure?.data);
      setTextMetrics(responseShowFoliPagine.data.getEtichettaMisure);
      setShowProfundita(responseShowFoliPagine.data.showProfundita);
      setDisableProfundita(responseDisableProfundita);
      setTextTipoCarta(responseShowFoliPagine.data.tipoCartaText);
      idFustella === "0" && setOpzioniList(responseOpzioni);
      setStampaCalOpz(responseStampaCaldoOPZ);
      setTableDate(tableDate);
      setUtenteData(dataUtn);
      setCalcolaTuto(responseCalculaTuto);
      setShowOpzzioni(responseShowOopzioni.data);
      setShowTablePreez(responseShowTablePrezzi.data);
      setUriImage(formatoStr.imgSelezionato);
      setShowSvg(showSVG);
      setOpzioniListStatic(opzioniCarrello);
      setHelperDataProdotto(helperData);
      setDateConsegna({ ...dateConsegna, date1: tableDate.dataNormale, date2: tableDate.dataNormaleProduzione });
      handleSelectDateConsegna(tableDate.dataNormale);
      setDimensionniStr(formatoStr)
      handleOpzioneInclusa(stampaCaldo)
      const profundita = responseDisableProfundita.disabled ? responseDisableProfundita.txt_Profundita : "";

      setFormValues({
        ...formValues,
        valueFormat: idFormProd,
        valueOrientamento: formatoStr.orientamiento,
        valueTipoCarta: IdTipoCarta,
        valueColoreStampa: IdColoreStampa,
        valueRadio: "0",
        valueFogli: idFogli,
        valueProfundita: profundita,
      });

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

    } catch (error) {
      throw new Error(String(error));
    } finally {
      setLoading(false);
      firstLoad.current = true;
    }
  };

  const handleSecondaryData =async () => {
    try {
      const { IdColoreStampa, IdTipoCarta, idFormProd, idPrev, idUt, idFogli, idCategoria } =
        handleParamsFormat();
      const secondaryPetition = await Promise.all([
        getProdottoConsigliato({idPrev,idFormProd,IdTipoCarta,IdColoreStampa},GLOBAL_CONFIG.IMG_IP),
        getResencioni({idPrev,idFormProd,IdTipoCarta,IdColoreStampa},GLOBAL_CONFIG.IMG_IP),
        getAggiornaReview({idPrev,idFormProd,IdTipoCarta,IdColoreStampa},GLOBAL_CONFIG.IMG_IP),
        getDescrizioniDinammica({idPrev,idFormProd,IdTipoCarta,IdColoreStampa})
      ])

      const [prodottoConsigliato,recencioniP,recencioniC,descrizioneDinamica] = secondaryPetition;  
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
    setValuesStampaCaldoOpz({});
    setExecute(true);
    const { name, value, type } = evt.target;

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
    setChangeInput(false);
    setFormValues((lastValues) => {
      return {
        ...lastValues,
        [name]: value,
      };
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
    if (!isExits) {
      setValuesStampaCaldoOpz({ ...valuesStampaCaldoOpz, [name]: Number(value) });
    } else {
      const lengthObject = Object.entries(valuesStampaCaldoOpz)
      const valid = lengthObject.filter(elem => elem[1] && elem[0] !== name)
      if (valid.length === 0) return
      const clear: any = { [name]: undefined }
      setValuesStampaCaldoOpz({ ...valuesStampaCaldoOpz, ...clear })
    }
  };

  const handleChangeRadio = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, id } = evt.target;
    const valueForm = { [name]: Number(id) }
    console.log(id)
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
          await handleChangeColoreStampa();
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
    const { idPrev, idUt, } = handleParamsFormat();
    const { valueFormat, valueAltezza, valueBase, valueProfundita, valueFogli } = formValues;
    const IdFormatN = Number(valueFormat);
    const idFogli = Number(valueFogli);
    const altezzaN = Number(valueAltezza), baseN = Number(valueBase), profunditaN = Number(valueProfundita);

    const responseTipoCarta = await getTipoCarta(idPrev, Number(valueFormat));

    const IdTipoCartaN = responseTipoCarta[0].idTipoCarta;

    const responseColoreStampa = await getColoreStampa({
      idPrev,
      idFormProd: IdFormatN,
      IdTipoCarta: IdTipoCartaN,
    });

    const IdColoreStampaN = responseColoreStampa[0].idColoreStampa;

    const petitions = await Promise.all([
      getStampaCaldo({
        IdColoreStampa: IdColoreStampaN,
        idFormProd: IdFormatN,
        idPrev,
        IdTipoCarta: IdTipoCartaN,
      }),
      getTablePrezzi({
        valuesStampaCaldoOpz,
        altezza: IdFormatN,
        base: 0,
        facciatePagine: idFogli,
        IdColoreStampa: IdColoreStampaN,
        idFormProd: IdFormatN,
        idPrev,
        IdTipoCarta: IdTipoCartaN,
        idUt,
        iva: 0,
        profundita: 0,
        quantita: 0,
      }),
      getCalcolaTuto({
        valuesStampaCaldoOpz,
        altezza: 0,
        base: 0,
        IdColoreStampa: IdColoreStampaN,
        idFormProd: IdFormatN,
        idPrev,
        IdTipoCarta: IdTipoCartaN,
        idUt,
        iva: 0,
        profundita: 0,
        code: "N",
        idFogli,
        prezzo: 0,
        qtaSlezionata: 0,
        quantity: 0,
      }),
      getFormatoStr({ altezza: altezzaN, base: baseN, profundita: profunditaN, IdColoreStampa: IdColoreStampaN, idFormProd: IdFormatN, idPrev, IdTipoCarta: IdTipoCartaN, idUt }),
      getHelpersData({ IdColoreStampa: IdColoreStampaN, idFogli, idFormProd: IdFormatN, idPrev, IdTipoCarta: IdTipoCartaN }),
      getOpzioni({ altezza: altezzaN, base: baseN, profundita: profunditaN, IdColoreStampa: IdColoreStampaN, idFormProd: IdFormatN, idPrev, IdTipoCarta: IdTipoCartaN, idUt })
    ])

    const [responseStampaCaldo, responseTablePrezzo, responseCalcolaTuto, responseDimensioniStr, responseHelperData, opzioni] = petitions;

    const responseOpzioni = handleOptionsOpzioni(opzioni);
    const responseOptionStampaCaldo = handleStampaCaldoDesc(responseStampaCaldo)
    setOptionTipoCarta(handleTipoCarta(responseTipoCarta));
    setOptionColoreStampa(handleColoriStampa(responseColoreStampa));
    setStampaCalOpz(responseOptionStampaCaldo);
    setTablaDataPrezzi(responseTablePrezzo);
    setCalcolaTuto(responseCalcolaTuto);
    setDimensionniStr(responseDimensioniStr);
    setHelperDataProdotto(responseHelperData);
    setOpzioniList(responseOpzioni);
    setUriImage(responseDimensioniStr.imgSelezionato);
    handleOpzioneInclusa(responseStampaCaldo)

    const stampaDefault = responseOptionStampaCaldo.find(x => x.options[0].value != 0);
    const nameRecord = String(stampaDefault?.label);
    const valueRecord = Number(stampaDefault?.options[0].value);

    setExecute(false);
    if (valueRecord) {
      setValuesStampaCaldoOpz({ ...valuesStampaCaldoOpz, [nameRecord]: valueRecord });
    }
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
    const { valueFormat, valueTipoCarta, valueAltezza, valueBase, valueFogli, valueProfundita, } = formValues;
    const IdTipoCartaN = Number(valueTipoCarta);
    const IdFormatN = Number(valueFormat);
    const altezzaN = Number(valueAltezza), baseN = Number(valueBase), profunditaN = Number(valueProfundita);
    const idFogli = Number(valueFogli);
    const responseColoreStampa = await getColoreStampa({
      idPrev,
      idFormProd: IdFormatN,
      IdTipoCarta: IdTipoCartaN,
    });

    const IdColoreStampaN = responseColoreStampa[0].idColoreStampa;

    const petitions = await Promise.all([
      getStampaCaldo({
        IdColoreStampa: IdColoreStampaN,
        idFormProd: IdFormatN,
        idPrev,
        IdTipoCarta: IdTipoCartaN,
      }),
      getTablePrezzi({
        valuesStampaCaldoOpz,
        altezza: IdFormatN,
        base: 0,
        facciatePagine: idFogli,
        IdColoreStampa: IdColoreStampaN,
        idFormProd: IdFormatN,
        idPrev,
        IdTipoCarta: IdTipoCartaN,
        idUt,
        iva: 0,
        profundita: 0,
        quantita: 0,
      }),
      getCalcolaTuto({
        valuesStampaCaldoOpz,
        altezza: 0,
        base: 0,
        IdColoreStampa: IdColoreStampaN,
        idFormProd: IdFormatN,
        idPrev,
        IdTipoCarta: IdTipoCartaN,
        idUt,
        iva: 0,
        profundita: 0,
        code: "N",
        idFogli,
        prezzo: 0,
        qtaSlezionata: 0,
        quantity: 0,
      }),
      getFormatoStr({ altezza: altezzaN, base: baseN, profundita: profunditaN, IdColoreStampa: IdColoreStampaN, idFormProd: IdFormatN, idPrev, IdTipoCarta: IdTipoCartaN, idUt }),
      getHelpersData({ IdColoreStampa: IdColoreStampaN, idFogli, idFormProd: IdFormatN, idPrev, IdTipoCarta: IdTipoCartaN }),
      getOpzioni({ altezza: altezzaN, base: baseN, profundita: profunditaN, IdColoreStampa: IdColoreStampaN, idFormProd: IdFormatN, idPrev, IdTipoCarta: IdTipoCartaN, idUt }),
      getOpizioniCarrello({ idPrev, idFormProd: IdFormatN, IdTipoCarta: IdTipoCartaN, IdColoreStampa: IdColoreStampaN }),
    ])
    const [responseStampaCaldo, responseTablePrezzo, responseCalcolaTuto, responseDimensioniStr, responseHelperData, opzioni, opzioniStatic] = petitions;
    const responseOpzioni = handleOptionsOpzioni(opzioni);
    const responseOptionStampaCaldo = handleStampaCaldoDesc(responseStampaCaldo);

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

    const stampaDefault = handleStampaCaldoDesc(responseStampaCaldo).find(x => x.options[0].value != 0);
    const nameRecord = String(stampaDefault?.label);
    const valueRecord = Number(stampaDefault?.options[0].value);
    if (valueRecord) {
      setValuesStampaCaldoOpz({ ...valuesStampaCaldoOpz, [nameRecord]: valueRecord });
    }
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
      valuesStampaCaldoOpz,
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
    const responseCalcolaTuto = await getCalcolaTuto({
      valuesStampaCaldoOpz,
      altezza: altezzaN,
      base: baseN,
      IdColoreStampa: IdColoreStampaN,
      idFormProd: IdFormatN,
      idPrev,
      IdTipoCarta: IdTipoCartaN,
      idUt,
      iva,
      profundita: profunditaN,
      code: "N",
      idFogli: idFogliN,
      prezzo: 0,
      qtaSlezionata: 0,
      quantity: qtaN,
    });

    setStampaCalOpz(handleStampaCaldoDesc(responseStampaCaldo));
    setTablaDataPrezzi(responseTablePrezzo);
    setCalcolaTuto(responseCalcolaTuto);
    handleOpzioneInclusa(responseStampaCaldo)

    setExecute(false);
    setLoading(false);
  };

  const handleChangeStampaCaldo = async () => {
    const empty = Object.entries(valuesStampaCaldoOpz).length === 0;
    if (empty || !execute) return;

    setLoading(true);
    const { idPrev, idUt } = handleParamsFormat();
    const { valueFormat, valueTipoCarta, valueColoreStampa, valueFogli, valueAltezza, valueBase, valueProfundita, valueQuantita } =
      formValues;
    const QtaN = Number(valueQuantita), BaseN = Number(valueBase), AltezzaN = Number(valueAltezza), ProfunditaN = Number(valueProfundita);
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
        iva: 0,
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
        iva: 0,
        profundita: ProfunditaN,
        code: "N",
        idFogli: idFogliN,
        prezzo: 0,
        qtaSlezionata: 0,
        quantity: QtaN,
      }),
      getFormatoStr({ altezza: AltezzaN, base: BaseN, IdColoreStampa: IdColoreStampaN, idFormProd: IdFormatN, idPrev, IdTipoCarta: IdTipoCartaN, idUt, profundita: ProfunditaN, IdLav: IdLav }),
      getStampaCaldo({IdColoreStampa: IdColoreStampaN, idFormProd: IdFormatN, idPrev, IdTipoCarta: IdTipoCartaN,})
    ])

    const [responseTablePrezzo, responseCalcolaTuto, formatoStr,stampaCaldo] = petitions;

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
    setLoading(true);
    const {
      valueQuantita, valueBase, valueAltezza, valueProfundita,
    } = formValues;
    const QtaN = Number(valueQuantita), BaseN = Number(valueBase), AltezzaN = Number(valueAltezza), ProfunditaN = Number(valueProfundita);
    var defaultValue = '';//= (name === 'valueAltezza') ? '40' : (name === 'valueProfundita') ? '14' : (name === 'valueBase') ?'20': " ";
    //debugger
    if (name != 'valueQuantita') {
      if (disableProfundita?.disabled === true) {
        defaultValue = (name === 'valueBase' && (BaseN < 70 || Number.isNaN(BaseN))) ? "70" : (name === 'valueAltezza' && (AltezzaN < 100 || Number.isNaN(AltezzaN))) ? '100' : defaultValue;
      } else if (showProfundita === false) {
        defaultValue = (name === 'valueBase' && (BaseN < 1 || Number.isNaN(BaseN))) ? "1" : (name === 'valueAltezza' && (AltezzaN < 1 || Number.isNaN(AltezzaN))) ? '1' : defaultValue;
        defaultValue = (name === 'valueBase' && (BaseN > 440)) ? "440" : (name === 'valueAltezza' && (AltezzaN > 310)) ? '310' : defaultValue;
      } else {
        defaultValue = (name === 'valueBase' && (BaseN < 20 || Number.isNaN(BaseN))) ? "20" : (name === 'valueAltezza' && (AltezzaN < 40 || Number.isNaN(AltezzaN))) ? '40' : defaultValue;
      }
      if (showProfundita === true) {
        defaultValue = (name === 'valueProfundita' && (ProfunditaN < 14 || Number.isNaN(ProfunditaN))) ? "14" : defaultValue;
      }
    }else if(name === 'valueQuantita' && Number.isNaN(QtaN)){
      defaultValue = ' '
    }
    console.log(defaultValue)

    setChangeInput(true);

    if (defaultValue != "") {
      setFormValues({
        ...formValues,
        [name]: defaultValue
      })
    }
    else {
      handleChangeValuesInput();
    }
  };

  const handleChangeValuesInput = async () => {
    const { idPrev, idUt } = handleParamsFormat();
    const {
      valueFormat,
      valueTipoCarta,
      valueColoreStampa,
      valueFogli,
      valueQuantita, valueBase, valueAltezza, valueProfundita,
    } = formValues;
    const IdTipoCartaN = Number(valueTipoCarta);
    const IdFormatN = Number(valueFormat);
    const IdColoreStampaN = Number(valueColoreStampa);
    const idFogliN = Number(valueFogli);
    const QtaN = Number(valueQuantita), BaseN = Number(valueBase), AltezzaN = Number(valueAltezza), ProfunditaN = Number(valueProfundita);
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
        iva: 0,
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
        iva: 0,
        profundita: ProfunditaN,
        code: "N",
        idFogli: idFogliN,
        prezzo: 0,
        qtaSlezionata: 0,
        quantity: QtaN,
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

    ])
    const [responseTablePrezzo, responseCalcolaTuto, responseShowTablePrezzo, responseOpzioni,] = petitions;
    const responseOpzioniOption = handleOptionsOpzioni(responseOpzioni)
    setTablaDataPrezzi(responseTablePrezzo);
    setCalcolaTuto(responseCalcolaTuto);
    setShowTablePreez(responseShowTablePrezzo.data);
    setOpzioniList(responseOpzioniOption);
    if (BaseN != 0 && AltezzaN != 0 && (ProfunditaN != 0 && showProfundita)) {
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
    prezzo: number, i: number, dateConsegna: Date,
  ) => {
    setLoading(true);
    const { idPrev, idUt, } =
      handleParamsFormat();
    const { valueAltezza, valueBase, valueFogli, valueColoreStampa, valueFormat, valueTipoCarta, valueProfundita, valueRadio } = formValues;
    const IdColoreStampa = Number(valueColoreStampa), IdTipoCarta = Number(valueTipoCarta), idFormProd = Number(valueFormat), idFogli = Number(valueFogli);
    const profundita = Number(valueProfundita), altezza = Number(valueAltezza), base = Number(valueBase);
    handleSelectDateConsegna(dateConsegna);
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
          break;
        case 'N':
          prezzo = responseTablePrezzi[i].prezzoPubbl;
          break;
        case 'S':
          prezzo = responseTablePrezzi[i].prezzoConsigliatoPubbl;
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
      qtaSlezionata: qtaZelezionata,
      quantity: 0,
    });
    setCalcolaTuto(responseCalcolaTuto);
    setLoading(false);
  };

  const handleCarrello = async (stp = "1") => {

    localStorage.setItem('stp', stp)

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
      svgImg: false,
      prodotto: dimensionniStr?.prodotto,
      orientamiento: showOrientamiento && handleOrientamiento().find(x => x.value == formValues.valueOrientamento)?.label,
      idOrientamiento: formValues.valueOrientamento,
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
      fogli: flogliPagine.find(x => x.value == formValues.valueFogli)?.label,
      labelFogli: flogliPagine[0]?.description,
      pdfTemplate: optionFormato.find(x => x.value == formValues.valueFormat)?.pdfTemplate,
      idReparto: dimensionniStr?.idReparto,
      base: Number(formValues.valueBase) ?? 0,
      produndita: Number(formValues.valueProfundita) ?? 0,
      altezza: Number(formValues.valueAltezza) ?? 0,
    }
    const existCarreloLocal = localStorage.getItem('c');
    let dataCarrelli: any[] = [];
    if (existCarreloLocal) {
      dataCarrelli = JSON.parse(existCarreloLocal);
    } else {
      const c = localStorage.getItem('c');
      const arrayObj: any = []
      localStorage.setItem('c', JSON.stringify(arrayObj))
    }


    const updateCarrello = [...dataCarrelli, objDataProdotto];
    localStorage.setItem('c', JSON.stringify(updateCarrello));

    handleOperationFrame(enOperationFrame.reliadUrl, "carrello");
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

      console.log(valuesStampaCaldoOpz);
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
    if (nav) {
      navigate(nav);
    }
  }

  const handleSelectDateConsegna = (date: Date) => {
    const newDate = DateFormatDDMM(date);
    setMenuDateConsegna(newDate);

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

    pdf.setFont("helvetica", "bold");
    pdf.text(`Imponibile € ${showTablePreez ? numberFormat(calcolaTuto?.prezzoCalcolatoNetto) : '-'}`, fullwidth, my + 313, { align: 'right' });
    pdf.text("IVA € 2,64", fullwidth, my + 323, { align: 'right' });
    pdf.text(`Totale con IVA € ${showTablePreez ? numberFormat(numberPercentuale(Number(calcolaTuto?.prezzoCalcolatoNetto), 22)) : '-'}`, fullwidth, my + 333, { align: 'right' });
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

  const handleScandeza = (dateConsegnas: DataGgetCorriereSelezionata,) => {
    const code = calcolaTuto?.code;
    const dateConsegna = dateConsegnas.dateConsegna;

    switch (code) {
      case "F":
        if (utenteData?.corriere.idMetodoConsegna == 0) {
          localStorage.setItem('gro', String(dateConsegna?.dataFastProduzione));
          localStorage.setItem('prv', String(dateConsegna?.dataFast));
          localStorage.setItem('scande', String(dateConsegna?.dataFast));
          return DateFormatItWDMY(dateConsegna?.dataFastProduzione);
        } else {
          localStorage.setItem('gro', String(dateConsegna?.dataFastProduzione));
          localStorage.setItem('prv', String(dateConsegna?.dataFast));
          return DateFormatItWDMY(dateConsegna?.dataFast);
        }
        break;
      case "N":
        if (utenteData?.corriere.idMetodoConsegna == 0) {
          localStorage.setItem('prv', String(dateConsegna?.dataNormale));
          localStorage.setItem('gro', String(dateConsegna?.dataNormaleProduzione))
          return DateFormatItWDMY(dateConsegna?.dataNormaleProduzione);
        } else {
          localStorage.setItem('gro', String(dateConsegna?.dataNormaleProduzione))
          localStorage.setItem('prv', String(dateConsegna?.dataNormale));
          return DateFormatItWDMY(dateConsegna?.dataNormale);
        }
        break;
      case "S":
        if (utenteData?.corriere.idMetodoConsegna == 0) {
          localStorage.setItem('prv', String(dateConsegna?.dataSlow));
          localStorage.setItem('gro', String(dateConsegna?.dataSlowProduzione))
          return DateFormatItWDMY(dateConsegna?.dataSlowProduzione);
        } else {
          localStorage.setItem('prv', String(dateConsegna?.dataSlow));
          localStorage.setItem('prv', String(dateConsegna?.dataSlow));
          return DateFormatItWDMY(dateConsegna?.dataSlow);
        }
        break;
      default:
        return ""

        break;
    }
  }

  const handleCorriere = () => {

    const { valueTipoCarta, valueColoreStampa, valueFormat } = formValues;
    const tipoCartaN = Number(valueTipoCarta), coloreStampaN = Number(valueColoreStampa), IdFormatN = Number(valueFormat);
    const responseScandeza = httpGetCorriereSelezionata(1, String(utenteData?.defaultCap), Number(idPrev),
      IdFormatN,
      tipoCartaN,
      coloreStampaN)

    responseScandeza.then(r => {
      if (r) {
        const dateConsegna = r.data;
        const scandeza = handleScandeza(dateConsegna,)
        localStorage.setItem('scande', String(scandeza))
      }
    })

  }


  const handleCompraloSubito = async () => {
    handleCorriere();

    //localStorage.setItem('stp', '5');
    localStorage.setItem('cons', String(utenteData?.corriere.idMetodoConsegna));
    localStorage.setItem('mil', String(utenteData?.email));
    localStorage.setItem('ind', String(utenteData?.indirizoS) + " " + utenteData?.indirizoR);
    localStorage.setItem('indid', String(utenteData?.idIndirizzo));

    const pzo = localStorage.getItem('pzo')
    if (pzo) {
      var p = parseInt(pzo) + parseInt(String(calcolaTuto?.pesoStr))
      localStorage.setItem('pzo', String(p))
    } else {
      localStorage.setItem('pzo', String(calcolaTuto?.pesoStr));
    }

    const responseMetodiPagamento = httpGetMetodiPagamento(Number(utenteData?.idUt), Number(calcolaTuto?.prezzoCalcolatoNetto), Number(utenteData?.corriere.idMetodoConsegna));

    responseMetodiPagamento.then(r => {
      if (r) {
        const corr = r.data.find(x => x.idTipoPagamento == 5);
        //const colli = dataTotale.Colli;
        localStorage.setItem('tp', String(corr?.titulo));
        localStorage.setItem('tpI', String(corr?.imgRif));
        localStorage.setItem('tpD', String(corr?.descrizione));
        localStorage.setItem('tppr', String(corr?.periodoPagamento));
        localStorage.setItem('tpDI', String(corr?.idTipoPagamento));
        localStorage.setItem('tpDI', String(corr?.idTipoPagamento));
        handleCarrello("5");
      }
    })
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
    valuesStampaCaldoOpz, formatoDinamico, idBaseEtiquete, showSvg, imageSvg, textTipoCarta, rowSelectedIva, menuDateConsegna,
    idAltezaEtiquete, dimensionniStr, copertina,idPrev,prodottoConsigliato,rencensioniP,recencioniC,descrizioneDinamica,opzInclusa,
    //*
    handleChange,
    handlePrezzoTable,
    handleChangeDinamyc,
    handleChangeValue,
    handleChangeInput,
    handleChangeCheckbox, handleCarrello, handleChangeRadio, handleOperationFrame, handleDonwloadPDF, handleCompraloSubito,
  };
};

export default useProdtto;
