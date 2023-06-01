import { InputCustom } from "./components/InputCustom";
import { InputCustomSelect } from "./components/InputCustomSelect";
import ListCustom from "./components/ListCustom";
import RadioCustom from "./components/RadioCustom";
import TableCustom from "./components/TableCustom";
import { CardCustom } from "./components/CardCustom";
import { useConfiguraProdotto } from "./hooks/useConfiguraProdotto";
import Cube from "./components/Cube";
import { BsInfoCircleFill } from "react-icons/bs";
import { ButtonCustom } from "./components/ButtonCustom";
import { ImageCustom } from "./components/ImageCustom";
export const ConfiguraProdotto = () => {
  const { imageSvg, viewRows, handleOptionsFormat, handleChange, handleOptionsTipoCarta, handleOptionsColoreStampa, handleOptionsOpzioni, handleOptionsStampaCaldo, handleOptionsPlastificazione, tablaDataPrezzi, tablaDate, handleCheckboxChange, radioIva, tipoCarta, coloreStampa, stampaCaldo, plastificazione, formatImage, ProfunditaList, handleOptionsFormato, handleDepth, handleChangeViewTableRows } = useConfiguraProdotto();
  return (
    <div className="row w-[100%] felx p-5">
      <div className="col col-12 bg-main text-white py-[2px] font-semibold">
        <h2>CONFIGURA IL TUO PRODOTTO</h2>
      </div>
      <div className="w-full flex ">
        <div className="flex flex-col w-[70%]">
          <div className=" flex justify-between items-center gap-6  border-b border-[#e2e2e2] py-2 mt-4 w-full ">
            <h2 className="font- w-[32%] text-xs ">Formato:</h2>{" "}
            <select name="" id="" className="w-[70%] rounded-3xl block  text-gray-700 border outline-none border-gray-200 
              px-3 py-1  leading-tight text-xs">
              <option value="">{handleOptionsFormat()}
              </option>
            </select>
            <span
              className={`opacity-70 text-gray-800 cursor-pointer`}
            >
              <BsInfoCircleFill />
            </span>

          </div>

          <InputCustomSelect valueSelect={tipoCarta} showIcon={false} name="tipoCarta" handleChange={handleChange} label="Tipo di Carta" options={handleOptionsTipoCarta()} />

          <InputCustomSelect valueSelect={coloreStampa} showIcon={false} name="coloreStampa" handleChange={handleChange} label="Colore di stampa" options={handleOptionsColoreStampa()} />

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

          {/* <div className="">
        <select name="" id="">
          <option value="">2 cm</option>
          <option value="">10 cm</option>
          <option value="">13 cm</option>
          <option value="">20 cm</option>
        </select>
      </div>
      {/* <div className=" w-full flex h-[160px]">
        <CardCustom valueSelect={handleChange} title="Tipo di Carta" options={handleOptionsTipoCarta()} />
      </div>
      <div className=" w-full flex  h-[160px]">
        <CardCustom width={100} height={100} valueSelect={handleChange} title="Colore" options={handleOptionsColoreStampa()} />
      </div> */}

          {/* <div className=" flex w-full ">
        <div className="w-full flex flex-col mb-1.5">
          <h2 className="font-bold uppercase  text-base mb-1.5 ">Base</h2>
          <div className="flex w-full  ">
            <select name="base" id="base" onChange={handleChange} className="rounded-3xl block w-2/5 text-gray-700 border outline-none border-gray-200
          py-1 px-4  leading-tight">
              <option value={20} >2 cm</option>
              <option value={100}>10 cm</option>
              <option value={130}>13 cm</option>
              <option value={200}>20 cm</option>
            </select>
          </div>
        </div>
      </div>
      <div className="  flex w-full mt-2.5">
        <div className="w-full flex flex-col mb-1.5">
          <h2 className="font-bold text-base  uppercase mb-1.5 ">Profondità</h2>
          <div className="flex w-full ">
            <select name="depth" id="" onChange={handleChange} className="rounded-3xl block w-2/5 text-gray-700 border outline-none border-gray-200
          py-1 px-4  leading-tight">
              {
                ProfunditaList.map((elem, i) => (
                  <option key={elem.value} value={elem.value} >{elem.label}</option>
                ))
              }
            </select>
          </div>
        </div>
      </div>
      <div className="w-full  flex  h-[170px] overflow-y-hidden box-border">
        <CardCustom width={80} height={80} valueSelect={handleDepth} title="Formato" options={handleOptionsFormato()} />
      </div> */}


          {/* <div className="">
        <img src={formatImage} alt="" />
      </div> */}

          <InputCustom
            handleChange={handleChange}
            name="quantity"
            label="Quantità *"
            classWhidtInput="w-1/2"
            classCustomLabel="font-bold"
            info
            on={false}
          />
          <ListCustom label="Opzioni" options={handleOptionsOpzioni()} />
          <InputCustomSelect showIcon={true} valueSelect={stampaCaldo} name="stampaCaldo" label="Stampa a Caldo" options={handleOptionsStampaCaldo()} handleChange={handleChange} />
          {/* <div className=" w-full flex h-[170px]">
        <CardCustom  valueSelect={handleChange} title="Stampa a Caldo" options={handleOptionsStampaCaldo()} />
      </div>
      <div className=" w-full flex h-[170px]">
        <CardCustom valueSelect={handleChange} title="Plastificazione" options={handleOptionsPlastificazione()} />
      </div> */}
          <InputCustomSelect showIcon={true} valueSelect={plastificazione} name="plastificazione" label="Plastificazione" options={handleOptionsPlastificazione()} handleChange={handleChange} />
        </div>
        <div className=" w-[30%] mt-5">
        <ImageCustom svgImage={imageSvg}/>
        </div>
      </div>


      <div className=" w-full flex gap-5 my-1 justify-end text-xs">
        <i>Visualizza prezzo </i>
        <RadioCustom name={"radio2"} value={2} checked={radioIva === 2} label="CAD." handleCheckboxChange={handleCheckboxChange} />
        <RadioCustom name={"radio0"} value={0} checked={radioIva === 0} label="Senza IVA" handleCheckboxChange={handleCheckboxChange} />
        <RadioCustom name={"radio1"} value={1} checked={radioIva === 1} label="Con IVA" handleCheckboxChange={handleCheckboxChange} />
      </div>
      <div className="w-full text-xs ">
        <li className="bg-gray-100 rounded p-2 my-2"><a href="" className="hover:underline font-bold " >CLICCA QUI</a> per consultare le fustelle già disponibili;</li>
        <li className="bg-gray-100 rounded p-2 my-2">* La quantità potrebbe essere arrotondata automaticamente per motivi tecnici;</li>
      </div>

      <h2 className="col col-12 bg-main text-white py-[2px] mb-2 rounded font-semibold">SCEGLI LA DATA IN CUI VUOI RICEVERE IL PRODOTTO</h2>
      <TableCustom tablaDataPrezzi={tablaDataPrezzi} tablaDate={tablaDate} viewRows={viewRows} />
      {
        tablaDataPrezzi.length > 0 && <ButtonCustom handleChange={handleChangeViewTableRows} text={viewRows ? "▼ Mostra più quantità ▼" : "▲ Mostra meno quantità ▲"} />
      }

    </div>
  );
};
