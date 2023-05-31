import { useContext, useEffect, useState } from "react";
import { InitialValuesProdotto, OptionsSelect } from "../../formProdotto/interfaces/prodotto";
import { httpGetColoreStampa, httpGetOpzioni, httpGetStampaCaldo, httpGetTableDate, httpGetTablePrezzi, httpGetTipoCarta } from "../services";
import { useParams } from "react-router";
import { TipoDiCarta } from "../interface/tipoCarta";
import { ColoreStampa } from "../interface/coloreStampa";
import { Opzioni } from "../interface/opzioni";
import { OptionsSelectS, StaCalOpz } from "../interface/stampaCaldo";
import { TablePrezzi } from "../interface/table";
import UserContext from "../../../context/UserContext";
import { TableDate } from "../interface/tableDate";
import { Html, Sort } from "@mui/icons-material";
const ValueProfundita = [{
  label: "2 cm",
  value: 20
},
{
  label: "10 cm",
  value: 100
},
{
  label: "5 cm",
  value: 50
},
{
  label: "7 cm",
  value: 70
},
{
  label: "3.5 cm",
  value: 35
},
{
  label: "13 cm",
  value: 130
},
{
  label: "20 cm",
  value: 200
}
]
const ValueFormato = [
  {
    label: "13 x 3.5 x 19 cm",
    value: "130x35x190",
    description: "13 x 3.5 x 19 cm",
    image: "130x35x190.png"
  },
  {
    label: "13 x 13 x 13 cm",
    value: "130x130x130",
    description: "13 x 13 x 13 cm",
    image: "130x130x130.png"
  },
  {
    label: "2 x 2 x 5 cm",
    value: "20x20x50",
    description: "2 x 2 x 5 cm",
    image: "20x20x50.png"
  },
  {
    label: "2 x 2 x 7 cm",
    value: "20x20x70",
    description: "2 x 2 x 7 cm",
    image: "20x20x70.png"
  },
  {
    label: "2 x 2 x 10 cm",
    value: "20x20x100",
    description: "2 x 2 x 10 cm",
    image: "20x20x100.png"
  },
  {
    label: "10 x 2 x 10 cm",
    value: "100x20x100",
    description: "10 x 2 x 10 cm",
    image: "100x20x100.png"
  },
  {
    label: "10 x 2 x 15 cm",
    value: "100x20x150",
    description: "10 x 2 x 15 cm",
    image: "100x20x150.png"
  },
  {
    label: "10 x 5 x 11 cm",
    value: "100x50x110",
    description: "10 x 5 x 11 cm",
    image: "100x50x110.png"
  },
  {
    label: "10 x 7 x 8 cm",
    value: "100x70x80",
    description: "10 x 7 x 8 cm",
    image: "100x70x80.png"
  },
  {
    label: "10 x 7 x 15 cm",
    value: "100x70x150",
    description: "10 x 2 x 15 cm",
    image: "100x70x150.png"
  },
  {
    label: "10 x 10 x 10 cm",
    value: "100x100x100",
    description: "10 x 10 x 10 cm",
    image: "100x100x100.png"
  },
  {
    label: "20 x 20 x 9 cm",
    value: "200x200x90",
    description: "20 x 20 x 9 cm",
    image: "200x200x90.png"
  },
  {
    label: "20 x 20 x 20 cm",
    value: "200x200x200",
    description: "20 x 20 x 20 cm",
    image: "200x200x200.png"
  }
]
const initialValues: InitialValuesProdotto = {
  base: null,
  depth: null,
  height: null,
  quantity: null,
  tipoCarta: null,
  coloreStampa: null,
  stampaCaldo: null,
  plastificazione: null,
  Format: ""
};
export const useConfiguraProdotto = () => {
  const userData = useContext(UserContext);
  const { idPrev, idFormProd, IdTipoCarta, IdColoreStampa } = useParams();
  const [initialState, setInitialState] = useState(initialValues);
  const [tipoCartaList, setTipoCartaList] = useState<TipoDiCarta[]>([])
  const [opzioniList, setOpzioniList] = useState<Opzioni[]>([])
  const [tablaDataPrezzi, settablaDataPrezzi] = useState<TablePrezzi[]>([])
  const [tablaDate, settablaDate] = useState<TableDate[]>([])
  const [stampaCaldoList, setStampaCaldoList] = useState<OptionsSelectS[]>([])
  const [platifiacazioneList, setPlatifiacazioneList] = useState<OptionsSelectS[]>([])
  const [viewRows,setViewRows] =useState<Boolean>(true)
  const [coloreStampaList, setColoreStampaList] = useState<ColoreStampa[]>([])

  const [radioIva, setRadioIva] = useState(0)

  //dataFake
  const [formatImage, setFormatImage] = useState<string>("")
  const [ProfunditaList, setProfunditaList] = useState<OptionsSelect[]>([])

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    setRadioIva(Number(event.target.value));
  };
  const handleOptionsFormat = () => {
    const { base, depth, height } = initialState;
    if (base && depth && height) {
      if (base < 20) initialState.base = 20;
      if (depth < 14) initialState.depth = 14;
      if (height < 40) initialState.height = 40;
    }
    const option: string = `${base || 0} x ${depth || 0} x ${height || 0
      } (Chiuso)`;

    return option;
  };

  const handleData = async () => {

    try {
      if (!idPrev || !idFormProd) return;
      const tipoCartaList = await httpGetTipoCarta(
        Number(idPrev),
        Number(idFormProd)
      );
      const coloreStampaList = await httpGetColoreStampa(
        Number(idPrev),
        Number(idFormProd)
      );

      const opzioniList = await httpGetOpzioni(
        Number(idPrev),
        Number(idFormProd),
        Number(IdTipoCarta),
        Number(IdColoreStampa),
      );

      const stampaCaldoList = await httpGetStampaCaldo(
        Number(idPrev),
        Number(idFormProd),
        Number(IdTipoCarta),
        Number(IdColoreStampa),
      );

      setTipoCartaList(tipoCartaList.data)
      setColoreStampaList(coloreStampaList.data)
      setOpzioniList(opzioniList.data)
      //const valueStampaCaldo =stampaCaldoList.data.filter(x => x.idCatLav == 37)
      setStampaCaldoList(stampaCaldoList.data[0].optionsSelect)
      setPlatifiacazioneList(stampaCaldoList.data[1].optionsSelect)
      //console.log(valueStampaCaldo) 
    } catch (error) { }
  };
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = evt.target;
    if (name) {
      switch (name) {
        case 'base':
          const newBase = parseInt(value) < 20 ? 20 : parseInt(value);
          setInitialState({
            ...initialState,
            [name]: newBase,
          });
          // Actualizar el valor del campo de entrada
          setTimeout(() => {
            evt.target.value = newBase.toString();
          }, 2000);
          break;
        case 'depth':
          const newdepth = parseInt(value) < 14 ? 14 : parseInt(value);
          setInitialState({
            ...initialState,
            [name]: newdepth,
          });
          // Actualizar el valor del campo de entrada
          setTimeout(() => {
            evt.target.value = newdepth.toString();
          }, 2000);
          break;
        case 'height':
          const newheight = parseInt(value) < 40 ? 40 : parseInt(value);
          setInitialState({
            ...initialState,
            [name]: newheight,
          });
          // Actualizar el valor del campo de entrada
          setTimeout(() => {
            evt.target.value = newheight.toString();
          }, 2000);
          break;

        default:
          break;
      }
    } else {
      setInitialState({
        ...initialState,
        [name]: value,
      });
    }
    setInitialState({
      ...initialState,
      [name]: value,
    });
  };


  const handleOptionsTipoCarta = () => {
    if (tipoCartaList.length === 0) return []
    const options: OptionsSelect[] = tipoCartaList.map(elem => {
      return {
        label: elem.tipologia,
        value: elem.idTipoCarta,
        description: elem.descrizioneEstesa,
        image: elem.imgRif
      }
    })
    return options
  }
  const handleOptionsFormato = () => {
    const { base, depth } = initialState;
    if (ValueFormato.length === 0) return []
    let valueRender: OptionsSelect[] = ValueFormato
    if (base != null) {
      const resultado: OptionsSelect[] = valueRender.filter(objeto => {
        const dimensiones = String(objeto.value).split("x");
        //return dimensiones[0].includes(String(base));
        return Number(dimensiones[0]) === Number(base)
      });
      valueRender = resultado
      if (depth != null) {
        const resultado: OptionsSelect[] = valueRender.filter(objeto => {
          const dimensiones = String(objeto.value).split("x");
          return Number(dimensiones[1]) === Number(depth)
        });
        valueRender = resultado
      }
    }
    //dimensiones[1].includes(String(depth)
    const options: OptionsSelect[] = valueRender.map(elem => {
      return {
        label: elem.label,
        value: elem.value,
        description: elem.description,
        image: elem.image
      }
    })
    return options
  }
  const handleChangeViewTableRows = () => {
    
    setViewRows(!viewRows)

  }
  const handleTable = async () => {

    console.log("werwer", initialState)
    const { base, depth, height, quantity, stampaCaldo, plastificazione, tipoCarta, coloreStampa } = initialState;
    if (base != null && depth != null && height != null) {

      const tableList = await httpGetTablePrezzi(
        Number(idPrev),
        Number(tipoCarta ? tipoCarta : IdTipoCarta),
        Number(coloreStampa ? coloreStampa : IdColoreStampa),
        Number(idFormProd),
        Number(base),
        Number(depth),
        Number(height),
        Number(quantity),
        Number(stampaCaldo),
        Number(plastificazione),
        Number(radioIva)
      );
      let data = tableList.data
      if (quantity != null) {
        if (quantity < 50) {
          data = tableList.data.filter(x => x.richiestaCalcoloPrezzo.qtaRichiesta >= 50 || x.richiestaCalcoloPrezzo.qtaRichiesta == quantity)
        }

      }
      settablaDataPrezzi(data)
    }

  }
  const handleTableDate = async () => {
    if (!idPrev || !idFormProd || !IdTipoCarta || !IdColoreStampa) return;
    const list = await httpGetTableDate(
      Number(1684),
      Number(idPrev),
      Number(idFormProd),
      Number(IdTipoCarta),
      Number(IdColoreStampa),

    )
    settablaDate(list.data)
  }
  const handleOptionsOpzioni = (): OptionsSelect[] => {
    if (opzioniList.length === 0) return []

    const options: OptionsSelect[] = opzioniList.map(elem => {
      return {
        label: elem.descrizione,
        value: elem.idLavoro,
        description: elem.descrizioneEstesa
      }
    })

    return options
  }
  const handleOptionsColoreStampa = () => {
    if (coloreStampaList.length === 0) return []
    const options: OptionsSelect[] = coloreStampaList.map(elem => {
      return {
        label: elem.descrizione,
        value: elem.idColoreStampa,
        description: elem.descrizione,
        image: elem.imgrif
      }
    })

    // let optionsFake= [{
    //   label: "",
    //   value:  33,
    //   description:  "",
    //   image: "a-colori-solo-Fronte-20200204144342861385.png"
    // },{
    //   label: "",
    //   value:  34,
    //   description:  "",
    //   image: "lamineted_gold.jpg"
    // },{
    //   label: "",
    //   value:  35,
    //   description:  "",
    //   image: "lamineted_silver.jpg"
    // }]
    return options
  }

  const handleOptionsStampaCaldo = (): OptionsSelect[] => {
    if (stampaCaldoList.length === 0) return []

    const options: OptionsSelect[] = stampaCaldoList.map(elem => {
      return {
        label: elem.descrizione,
        value: elem.idLavoro,
        description: elem.descrizioneEstesa,
        image: elem.imgRif,
      }
    })
    let guion = { label: "-", value: 0 }
    options.unshift(guion);
    return options
  }
  const handleOptionsPlastificazione = (): OptionsSelect[] => {
    if (platifiacazioneList.length === 0) return []
    const options: OptionsSelect[] = platifiacazioneList.map(elem => {
      return {
        label: elem.descrizione,
        value: elem.idLavoro,
        description: elem.descrizioneEstesa,
        image: elem.imgRif
      }
    })
    let guion = { label: "-", value: 0 }
    options.unshift(guion);
    return options
  }
  const handleChangeSelectProfunditta = () => {
    const value = initialState.base
    let valueFilter: OptionsSelect[] = [];
    if (Number(value) === 20) {
      valueFilter = ValueProfundita.filter(x => x.value === 20)
      initialState.depth = Number(valueFilter[0].value);
    }
    if (Number(value) === 100) {
      valueFilter = ValueProfundita.filter(x => x.value === 20 || x.value === 50 || x.value === 70 || x.value === 100)
      initialState.depth = Number(valueFilter[0].value);
      valueFilter.sort(function (a, b) {
        return Number(a.value) - Number(b.value);
      });
    }
    if (Number(value) === 130) {
      valueFilter = ValueProfundita.filter(x => x.value === 35 || x.value === 130);
      initialState.depth = Number(valueFilter[0].value);
      //setInitialState();
      valueFilter.sort(function (a, b) {
        return Number(a.value) - Number(b.value);
      });
    }
    if (Number(value) === 200) {
      valueFilter = ValueProfundita.filter(x => x.value === 200);
      initialState.depth = Number(valueFilter[0].value);
    }
    setProfunditaList(valueFilter);

  }
  const handleDepth = (value: any) => {

    const valueDepth = String(value).split("x");

    initialState.height = Number(valueDepth[2]);
  }
  useEffect(() => {
    // initialState.depth = null;
    // setProfunditaList([])
    // handleChangeSelectProfunditta();


  }, [initialState.base]);
  useEffect(() => {
    handleTable();
  }, [initialState.base, initialState.depth, initialState.tipoCarta, initialState.height, initialState.quantity, initialState.stampaCaldo, initialState.plastificazione, radioIva]);
  useEffect(() => {
    //initialState.base = 20
    //initialState.depth = 20
    handleData();
    handleTableDate();
  }, []);
  return {
    handleOptionsFormat,
    ...initialState,
    handleChange,
    handleOptionsTipoCarta,
    handleOptionsColoreStampa,
    handleOptionsOpzioni,
    handleOptionsStampaCaldo,
    handleOptionsPlastificazione,
    tablaDataPrezzi,
    tablaDate,
    handleCheckboxChange,
    radioIva,
    formatImage,
    handleChangeSelectProfunditta,
    ProfunditaList,
    handleOptionsFormato,
    handleDepth,
    handleChangeViewTableRows,
    viewRows
  };
};
