import { useState } from "react";
import { InitialValuesProdotto } from "../../formProdotto/interfaces/prodotto";

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

    const option: string = `${base || 0} x ${depth || 0} x ${
      height || 0
    } (Chiuso)`;

    return option;
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    setInitialState({
      ...initialState,
      [name]: value,
    });
  };

  return { handleOptionsFormat, ...initialState, handleChange };
};
