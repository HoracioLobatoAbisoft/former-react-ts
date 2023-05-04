import imgUserEdit from "../../../../assets/img/user-edit.svg";
import imgCardUser from "../../../../assets/img/carduser.svg";
import SideBarPersonalArea from "../../../common/SideBarPersonalArea/SideBarPersonalArea";
import NewsLatter from "../../../common/newsLatter/NewsLatter";
import icona1 from "../../../../assets/iconsLast/iconoProfilo.png";
import icona2 from "../../../../assets/iconsLast/iconoFiscali.png";
import { Link } from "react-router-dom";
const ProfileContent = () => {
  return (
    <div className="flex ">
      <SideBarPersonalArea />

      <div className="p-4  w-full mt-10 ml-10">
        <div className="w-[100%] p-5 flex flex-col gap-5">
          <div className="flex w-[80%] lg:w-[60%] xl:w-[600px] items-center gap-3  bg-[#f58220] rounded">
            <img className="h-10 w-10 " src={icona1} alt="" />
            <h2 className=" text-white font-semibold text-xl">
              IL TUO PROFILO
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex space-x-4 items-center">
              <h2 className="w-44 lg:w-56 font-bold text-lg">La tua ID di accesso: </h2>
              <p className="font-semibold  w-44 p-2 rounded text-lg">2687</p>
            </div>
            <div className="flex space-x-4 items-center">
              <h2 className="w-44 lg:w-56 font-bold text-lg">
                La tua email di accesso:{" "}
              </h2>
              <p className="font-semibold  w-44 p-2 rounded text-lg">
                info@dimmagine.com
              </p>
            </div>
          </div>

          <div className="flex w-[80%] lg:w-[60%] xl:w-[600px] items-center gap-3  bg-[#f58220] rounded">
            <img className="h-10 w-10 mr-4" src={icona2} alt="" />
            <h2 className=" text-white font-semibold text-xl">
              I TUOI DATI FISCALI
            </h2>
          </div>
          <div className="flex space-x-4 items-center">
            <h2 className="w-44 lg:w-56 font-bold text-lg">Ragione sociale: </h2>
            <p className="font-semibold w-44 p-2 rounded text-lg lg:w-[400px]">
              Dimmagine s.r.l.
            </p>
          </div>
          <div className="flex space-x-4 items-center ">
            <h2 className="w-44 lg:w-56 font-bold text-lg">Nominativo: </h2>
            <p className="font-semibold w-44 p-2 rounded text-lg lg:w-[400px]">
              Donatella Bittoni
            </p>
          </div>
          <div className="flex space-x-4 items-center ">
            <h2 className="w-44 lg:w-56 font-bold text-lg">P.IVA: </h2>
            <p className="font-semibold w-44 p-2 rounded text-lg lg:w-[400px]">
              11359621007
            </p>
          </div>
          <div className="flex space-x-4 items-center ">
            <h2 className="w-44 lg:w-56 font-bold text-lg">Codice fiscale: </h2>
            <p className="font-semibold w-44 p-2 rounded text-lg lg:w-[400px]">saf</p>
          </div>
          <div className="flex space-x-4 items-center ">
            <h2 className="w-44 lg:w-56 font-bold text-lg">PEC: </h2>
            <p className="font-semibold w-44 p-2 rounded text-lg lg:w-[400px]">
              fabrizio.calo@pec.it
            </p>
          </div>
          <div className="flex space-x-4 items-center ">
            <h2 className="w-44 lg:w-56 font-bold text-lg">Codice SDI: </h2>
            <p className="font-semibold w-44 p-2 rounded text-lg lg:w-[400px]">
              M5UXCR1
            </p>
          </div>
          <div className="flex space-x-4 items-center ">
            <h2 className="w-44 lg:w-56 font-bold text-lg">Indirizzo: </h2>
            <p className="font-semibold w-44 p-2 rounded text-lg lg:w-[400px]">
              Via Andrea Fulvio 12/a, Roma (RM) - 00162
            </p>
          </div>
          <div className="flex space-x-4 items-center ">
            <h2 className="w-44 lg:w-56 font-bold text-lg">Recapiti: </h2>
            <p className="font-semibold w-44 p-2 rounded text-lg lg:w-[400px]">
              tel. 068608733 fax cel. 3398610929
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              className="px-4 py-2 bg-[#f58220] text-white rounded-md"
              to="/DatiFiscali"
            >
              Modifica
            </Link>
          </div>
        </div>

        {/* <div className="flex items-center mt-10">
          <img className="h-8 w-8 mr-4" src={imgEmail} alt="" />
          <h2 className="text-[#f58220] font-semibold">NEWSLETTER E OFFERTE</h2>
        </div>
        <div>
          <p>Se non vuoi più ricevere la nostra Newsletter e le nostre Offerte <span className="text-blue-500 hover:underline cursor-pointer"> clicca qui</span></p>
          <p><span className="text-blue-500 hover:underline cursor-pointer">Cliccando qui</span> puoi leggere la nostra informativa sulla privacy</p>
        </div>
        <div className="flex justify-center mt-10">
          <div className="flex space-x-2 bg-[#d6e03d] uppercase px-10 py-2 rounded-sm cursor-pointer">
            <img className="h-5 w-5" src={imgPowerButton} alt="" />
            <button>Esci</button>
          </div>
        </div> */}

        <NewsLatter />
      </div>
    </div>
  );
};

export default ProfileContent;
