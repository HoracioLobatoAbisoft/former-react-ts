import { InputCustom } from "./components/InputCustom";
import { InputCustomSelect } from "./components/InputCustomSelect";
import { useConfiguraProdotto } from "./hooks/useConfiguraProdotto";

export const ConfiguraProdotto = () => {
  const { handleOptionsFormat, handleChange, handleOptionsTipoCarta } = useConfiguraProdotto();
  return (
    <div className="row max-w-[900px]">
      <div className="col col-12 bg-main text-white py-[2px]">
        <h2>CONFIGURA IL TUO PRODOTTO</h2>
      </div>
      <div className="col col-12 flex border-b border-[#e2e2e2] py-2 mt-4">
        <h2 className="font-semibold text-base">Formato:</h2>{" "}
        <span className="ml-2 font-normal text-base">
          {handleOptionsFormat()}
        </span>
      </div>
      <InputCustomSelect label="Tipo di Carta" options={handleOptionsTipoCarta()} />
      <InputCustomSelect label="Colore di stampa" options={[]} />
      <InputCustom
        handleChange={handleChange}
        name="base"
        label="Base"
        placeHolder="20 mm"
      />
      <InputCustom
        handleChange={handleChange}
        name="depth"
        label="Profondità"
        placeHolder="20 mm"
      />
      <InputCustom
        handleChange={handleChange}
        name="height"
        label="Altezza"
        placeHolder="20 mm"
      />
      <InputCustom
        handleChange={handleChange}
        name="quantity"
        label="Quantità *"
        classWhidtInput="w-1/2"
        classCustomLabel="font-bold"
        info
      />
      <InputCustomSelect label="Stampa a Caldo" options={[]} />
      <InputCustomSelect label="Plastificazione" options={[]} />
    </div>
  );
};
