import { useEffect, useState } from "react";
import { InitialValuesProdotto, OptionsSelect } from "../../formProdotto/interfaces/prodotto";
import { httpGetTipoCarta } from "../services";
import { useParams } from "react-router";
import { TipoDiCarta } from "../interface/tipoCarta";

const initialValues: InitialValuesProdotto = {
  base: null,
  depth: null,
  height: null,
  quantity: null,
  Format: "",
};
export const useConfiguraProdotto = () => {
  const { idPrev, idFormProd } = useParams();
  const [initialState, setInitialState] = useState(initialValues);
  const [tipoCartaList, setTipoCartaList] = useState<TipoDiCarta[]>([])
  const handleOptionsFormat = () => {
    const { base, depth, height } = initialState;

    const option: string = `${base || 0} x ${depth || 0} x ${
      height || 0
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

      setTipoCartaList(tipoCartaList.data)
      
    } catch (error) {}
  };
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    setInitialState({
      ...initialState,
      [name]: value,
    });
  };

  const handleOptionsTipoCarta = () => {
    if(tipoCartaList.length ===0) return []

    const options : OptionsSelect[] = tipoCartaList.map(elem => {
      return {
        label : elem.tipologia,
        value: elem.idTipoCarta
      }
    })

    return options
  }

  useEffect(() => {
    handleData();
  }, []);

  return { handleOptionsFormat, ...initialState, handleChange,handleOptionsTipoCarta };
};
