import { InputCustomSelect } from "./components/InputCustomSelect";
import { InputCustom } from "./components/InputCustom";
import { InputOptions } from "./components/InputOptions";
import { useConfiguraProdotto } from "./hooks/useConfiguraProdotto";
export const ConfiguraProdotto = () => {
  // const { handleOptionsFormat, base, height, quantity, depth } =
  //   useConfiguraProdotto();
  return (
    <div className="min-w-[600px]">
      {/* <div>
        <h2 className="bg-main text-white uppercase font-nomrla py-1 pl-6 text-base">
          CONFIGURA IL TUO PRODOTTO
        </h2>
        <div className="mt-4">
          <InputCustomSelect label="Formato" options={handleOptionsFormat()} />
          <InputCustomSelect label="Tipo di Carta" options={[]} />
          <InputCustomSelect label="Colore di stampa" options={[]} />
          <InputCustom label="Base" value={base} />
          <InputCustom label="Profondità" value={depth} />
          <InputCustom label="Altezza" value={height} />
          <InputCustom
            label="Quantità *"
            classCustomLabel="font-bold"
            widthCustomInput="w-3/4"
            value={quantity}
            notRequired
          />
          <InputOptions label="Opzioni" />
          <InputCustomSelect label="Stampa a Caldo" options={[]} />
          <InputCustomSelect label="Plastificazione" options={[]} />
        </div>
      </div> */}
    </div>
  );
};
