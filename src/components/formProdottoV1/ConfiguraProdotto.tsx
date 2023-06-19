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
import LoadingBackdrop from "../loadingBackdrop";
import RadioCars from "./components/RadioCars";

//stampaCaldo, plastificazione
export const ConfiguraProdotto = () => {
  const { initialState, openLoadingBackdrop, setOpenLoadingBackdrop, base, depth, height, imageSvg, viewRows, handleOptionsFormat, handleChange, handleOptionsTipoCarta, handleOptionsColoreStampa, handleOptionsOpzioni, handleOptionsStampaCaldo, handleOptionsPlastificazione, tablaDataPrezzi, tablaDate, handleCheckboxChange, radioIva, tipoCarta, coloreStampa, formatImage, ProfunditaList, handleOptionsFormato, handleDepth, handleChangeViewTableRows, handleChangeRowSelect, selectRow, orientamiento, handleOrientamiento, showBloccoMisure, showtxtQtaCustom, showQtaCustom, stampaCalOpz, handloSpampaCaldoOpz, showColumTable, handleFormato, idPrev, showOpzzioni, showSvg, handleChangeSVG, showTablePreez, formatoList, mmValue, setimgAcoppiati, disableProfundita } = useConfiguraProdotto();
  // return (
  //   <div className="row w-[100%] felx p-5">
  //     <div className="col col-12 bg-main text-white py-[2px] font-semibold">
  //       <h2>CONFIGURA IL TUO PRODOTTO</h2>
  //     </div>
  //     <div className="w-full flex ">
  //       <div className="flex flex-col w-[70%]">
  //         <div className=" flex justify-between items-center gap-6  py-2 mt-4 w-full ">
  //           <h2 className="font- w-[32%] text-xs ">Formato:</h2>{" "}
  //           <div className="w-[70%] py-[4px] px-[10px] bg-[#f1f1f1]">
  //             <select name="" id="" className=" block w-full  border outline-none 
  //             px-1 py-1  leading-tight text-sm font-[open sans]">
  //               <option value="">{handleOptionsFormat()}
  //               </option>
  //             </select>
  //           </div>

  //           <span
  //             className={`opacity-70 text-gray-800 cursor-pointer text-xs`}
  //           >
  //             <BsInfoCircleFill />
  //           </span>

  //         </div>

  //         <InputCustomSelect valueSelect={tipoCarta} showIcon={false} name="tipoCarta" handleChange={handleChange} label="Tipo di Carta" options={handleOptionsTipoCarta()} />

  //         <InputCustomSelect valueSelect={coloreStampa} showIcon={false} name="coloreStampa" handleChange={handleChange} label="Colore di stampa" options={handleOptionsColoreStampa()} />

  // <InputCustom
  //   handleChange={handleChange}
  //   name="base"
  //   label="Base"
  //   placeHolder="20 mm"
  // />
  // <InputCustom
  //   handleChange={handleChange}
  //   name="depth"
  //   label="Profondità"
  //   placeHolder="20 mm"
  // />
  // <InputCustom
  //   handleChange={handleChange}
  //   name="height"
  //   label="Altezza"
  //   placeHolder="20 mm"

  // />

  //         {/* <div className="">
  //       <select name="" id="">
  //         <option value="">2 cm</option>
  //         <option value="">10 cm</option>
  //         <option value="">13 cm</option>
  //         <option value="">20 cm</option>
  //       </select>
  //     </div>
  //     {/* <div className=" w-full flex h-[160px]">
  //       <CardCustom valueSelect={handleChange} title="Tipo di Carta" options={handleOptionsTipoCarta()} />
  //     </div>
  //     <div className=" w-full flex  h-[160px]">
  //       <CardCustom width={100} height={100} valueSelect={handleChange} title="Colore" options={handleOptionsColoreStampa()} />
  //     </div> */}

  //         {/* <div className=" flex w-full ">
  //       <div className="w-full flex flex-col mb-1.5">
  //         <h2 className="font-bold uppercase  text-base mb-1.5 ">Base</h2>
  //         <div className="flex w-full  ">
  //           <select name="base" id="base" onChange={handleChange} className="rounded-3xl block w-2/5 text-gray-700 border outline-none border-gray-200
  //         py-1 px-4  leading-tight">
  //             <option value={20} >2 cm</option>
  //             <option value={100}>10 cm</option>
  //             <option value={130}>13 cm</option>
  //             <option value={200}>20 cm</option>
  //           </select>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="  flex w-full mt-2.5">
  //       <div className="w-full flex flex-col mb-1.5">
  //         <h2 className="font-bold text-base  uppercase mb-1.5 ">Profondità</h2>
  //         <div className="flex w-full ">
  //           <select name="depth" id="" onChange={handleChange} className="rounded-3xl block w-2/5 text-gray-700 border outline-none border-gray-200
  //         py-1 px-4  leading-tight">
  //             {
  //               ProfunditaList.map((elem, i) => (
  //                 <option key={elem.value} value={elem.value} >{elem.label}</option>
  //               ))
  //             }
  //           </select>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="w-full  flex  h-[170px] overflow-y-hidden box-border">
  //       <CardCustom width={80} height={80} valueSelect={handleDepth} title="Formato" options={handleOptionsFormato()} />
  //     </div> */}


  //         {/* <div className="">
  //       <img src={formatImage} alt="" />
  //     </div> */}

  // <InputCustom
  //   handleChange={handleChange}
  //   name="quantity"
  //   label="Quantità *"
  //   classWhidtInput="w-1/2"
  //   classCustomLabel="font-bold"
  //   info
  //   on={false}
  // />
  //         <ListCustom label="Opzioni" options={handleOptionsOpzioni()} />
  //         <InputCustomSelect showIcon={true} valueSelect={stampaCaldo} name="stampaCaldo" label="Stampa a Caldo" options={handleOptionsStampaCaldo()} handleChange={handleChange} />
  //         {/* <div className=" w-full flex h-[170px]">
  //           <CardCustom  valueSelect={handleChange} title="Stampa a Caldo" options={handleOptionsStampaCaldo()} />
  //         </div>
  //         <div className=" w-full flex h-[170px]">
  //           <CardCustom valueSelect={handleChange} title="Plastificazione" options={handleOptionsPlastificazione()} />
  //         </div> */}
  //         <InputCustomSelect showIcon={true} valueSelect={plastificazione} name="plastificazione" label="Plastificazione" options={handleOptionsPlastificazione()} handleChange={handleChange} />
  //       </div>
  //       <div className=" w-[30%] mt-5">
  //         <ImageCustom svgImage={imageSvg} />
  //       </div>
  //     </div>


  // <div className=" w-full flex gap-5 my-1 justify-end text-xs">
  //   <i>Visualizza prezzo </i>
  //   <RadioCustom name={"radio2"} value={2} checked={radioIva === 2} label="CAD." handleCheckboxChange={handleCheckboxChange} />
  //   <RadioCustom name={"radio0"} value={0} checked={radioIva === 0} label="Senza IVA" handleCheckboxChange={handleCheckboxChange} />
  //   <RadioCustom name={"radio1"} value={1} checked={radioIva === 1} label="Con IVA" handleCheckboxChange={handleCheckboxChange} />
  // </div>
  // <div className="w-full text-xs ">
  //   <li className="bg-gray-100 rounded p-2 my-2"><a href="" className="hover:underline font-bold " >CLICCA QUI</a> per consultare le fustelle già disponibili;</li>
  //   <li className="bg-gray-100 rounded p-2 my-2">* La quantità potrebbe essere arrotondata automaticamente per motivi tecnici;</li>
  // </div>

  //     <h2 className="col col-12 bg-main text-white py-[2px] mb-2 rounded font-semibold">SCEGLI LA DATA IN CUI VUOI RICEVERE IL PRODOTTO</h2>
  //     <TableCustom tablaDataPrezzi={tablaDataPrezzi} tablaDate={tablaDate} viewRows={viewRows} />
  // {
  //   tablaDataPrezzi.length > 0 && <ButtonCustom handleChange={handleChangeViewTableRows} text={viewRows ? "▼ Mostra più quantità ▼" : "▲ Mostra meno quantità ▲"} />
  // }

  //   </div>

  // );
  //console.log("rrrrrrrrr", initialState)
  return (
    <div className="w-full ">
      <LoadingBackdrop isOpen={openLoadingBackdrop} HandleChange={setOpenLoadingBackdrop} />
      <h5 className="ps-[20px] py-[2px] bg-[#f58220] text-[#fff] text-[12px] tracking-normal ">CONFIGURA IL TUO PRODOTTO</h5>
      <div className="flex mt-3 ps-[4.5px] ">
        <table className="w-[75%]">
          <tbody className="">
            {showOpzzioni ?
              <tr>
                <td className="w-[95px] p-[1px] text-[12px]  font-normal">Formato</td>
                <td className="border-b-[2px] border-[#fff] px-[10px] py-[6px] text-[14px] bg-[#f1f1f1] 
              hover:shadow-[0_0px_0px_1.5px_#d6e03d_inset]">
                  <select name="" id="" className="border-[1px] w-full border-[#ddd] font-[open sans] py-[3px]">
                    <option value="">{handleOptionsFormat()}
                    </option>
                  </select>
                </td>
                <td className=" p-[6px]">
                  <span
                    className={` text-gray-800 cursor-pointer text-xs`}
                  >
                    <img src="http://95.110.133.251:5051/img/icoInfo20.png" style={{ transform: 'scale(1.3)', }} />
                  </span>
                </td>
              </tr>
              :
              <InputCustomSelect showIcon={false} initialState={initialState} name="formatoS" handleChange={handleChange} label="Formato" options={handleFormato()} />
            }
            {orientamiento ? <InputCustomSelect showIcon={false} name="orientamiento" handleChange={handleChange} label="Orientamento" options={handleOrientamiento()} /> : null}
            <InputCustomSelect initialState={initialState} showIcon={false} name="tipoCarta" handleChange={handleChange} label="Tipo di Carta" options={handleOptionsTipoCarta()} />
            <InputCustomSelect initialState={initialState} showIcon={false} name="coloreStampa" handleChange={handleChange} label="Colore di stampa" options={handleOptionsColoreStampa()} />
            {showBloccoMisure &&
              <>
                <InputCustom
                  handleChange={handleChange}
                  name="base"
                  label="Base"
                  classWhidtInput="w-[45%] text-end"
                  xx={mmValue.base}
                />
                <InputCustom
                  handleChange={handleChange}
                  name="depth"
                  label="Profondità"
                  classWhidtInput="w-[45%] text-end"
                  xx={mmValue.depth}
                  disabled={disableProfundita}
                />
                <InputCustom
                  handleChange={handleChange}
                  name="height"
                  label="Altezza"
                  classWhidtInput="w-[45%] text-end"
                  xx={mmValue.height}
                />
              </>
            }
            {showQtaCustom &&
              showQtaCustom == true ?
              <InputCustom
                handleChange={handleChange}
                name="quantity"
                label="Quantità *"
                classWhidtInput="w-[64%] text-start"
                classCustomLabel=" w-[95px] p-[1px] text-[12px] text-[arial] font-bold"
                info
                on={true}
                mm={false}
              />
              : false
            }
            <ListCustom label="Opzioni" options={handleOptionsOpzioni()} />
            {/* <InputCustomSelect showIcon={true} valueSelect={stampaCaldo} name="stampaCaldo" label="Stampa a Caldo" options={handleOptionsStampaCaldo()} handleChange={handleChange} />
            <InputCustomSelect showIcon={true} valueSelect={plastificazione} name="plastificazione" label="Plastificazione" options={handleOptionsPlastificazione()} handleChange={handleChange} /> */}
            {stampaCalOpz?.map((elem, i) => {
              if (elem.idCatLav != 41) {
                return (
                  <>
                    {console.log("asdfadsfdsaf", elem, i)}
                    <InputCustomSelect initialState={initialState} key={i} valueSelect={42} showIcon={true} name={elem.descrizione} label={elem.descrizione} options={handloSpampaCaldoOpz(elem.optionsSelect)} handleChange={handleChange} />
                  </>
                )
              }

            })}

          </tbody>
        </table>
        <div className=" w-[25%]">
          {showSvg ?
            <ImageCustom svgImage={imageSvg} /> :
            <img src={`http://95.110.133.251:5051/listino/img/${handleChangeSVG()}`} alt="" width={128} />
          }
        </div>
      </div>
      {stampaCalOpz?.map((elem, i) => {
        if (elem.idCatLav === 41) {
          return (
            <RadioCars key={i} setImage={setimgAcoppiati} options={handloSpampaCaldoOpz(elem.optionsSelect)} name={elem.descrizione} label={elem.descrizione} handleChange={handleChange} />
          )
        }
      })
      }
      <div className="w-full text-xs ">
        {(tablaDataPrezzi.length === 0 && (base !== null && height !== null && depth !== null)) && <p className=" text-center my-3 tracking-tighter text-[#ff0000] font-semibold">PER RICEVERE UN PREVENTIVO PER LE MISURE INSERITE CONTATTARCI TELEFONICAMENTE</p>}
        {showOpzzioni ?
          <li className="bg-gray-100 rounded py-1 px-1  "><a href="" className="hover:underline font-bold " >CLICCA QUI</a> per consultare le fustelle già disponibili;</li>:null
        }
        {showQtaCustom ?
          <li className="bg-gray-100 rounded py-1 px-1 my-1 italic">* La quantità potrebbe essere arrotondata automaticamente per motivi tecnici;</li>:null
        }

      </div>
      <div className=" w-full flex gap-5 mb-3 mt-[18px] justify-end text-xs">
        <i className="text-[11.5px] me-1">Visualizza prezzo </i>
        <RadioCustom name={"radio2"} value={2} checked={radioIva === 2} label="CAD." handleCheckboxChange={handleCheckboxChange} />
        <RadioCustom name={"radio0"} value={0} checked={radioIva === 0} label="Senza IVA" handleCheckboxChange={handleCheckboxChange} />
        <RadioCustom name={"radio1"} value={1} checked={radioIva === 1} label="Con IVA" handleCheckboxChange={handleCheckboxChange} />
      </div>
      <h5 className="mb-[13px] ps-[20px] pt-[2.5px] pb-[2.5px] bg-[#f58220] text-[#fff] text-[12px] tracking-normal">SCEGLI LA DATA IN CUI VUOI RICEVERE IL PRODOTTO</h5>
      <TableCustom tablaDataPrezzi={tablaDataPrezzi} tablaDate={tablaDate} viewRows={viewRows} selectRow={selectRow} handleChangeRowSelect={handleChangeRowSelect} radioIva={radioIva} showColumTable={showColumTable} showTablePreez={showTablePreez} />
      {
        showTablePreez == false && <ButtonCustom handleChange={handleChangeViewTableRows} text={viewRows ? "▼ Mostra più quantità ▼" : "▲ Mostra meno quantità ▲"} />
      }
    </div>
  );
};
