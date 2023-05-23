import { useState } from "react";
import { InitialValuesProdotto, OptionsSelect } from "../interfaces/prodotto";

const initialValues: InitialValuesProdotto = {
  base: null,
  depth: null,
  height: null,
  quantity: null,
  Format: "",
};
export const useConfiguraProdotto = () => {
  const [initialState, setInitialState] = useState(initialValues);

  const handleOptionsFormat = () => {
    const { base, depth, height } = initialState;

    const optionsList: OptionsSelect[] = [];

    const option: OptionsSelect = {
      label: `${base || 0} x ${depth || 0} x ${height || 0} (Chiuso)`,
      value: `${base || 0}${depth || 0}${height || 0}`,
    };

    optionsList.push(option);

    return optionsList;
  };
  return { handleOptionsFormat };
};
