import React, {useState, useEffect, useContext} from "react";
import imgUserEdit from "../../../../assets/img/user-edit.svg";
import imgCardUser from "../../../../assets/img/carduser.svg";
import icona1 from "../../../../assets/iconsLast/iconoProfilo.png";
import icona2 from "../../../../assets/iconsLast/iconoFiscali.png";
import SideBarPersonalArea from "../../../common/SideBarPersonalArea/SideBarPersonalArea";
import NewsLatter from "../../../common/newsLatter/NewsLatter";
import UserContext from "../../../../context/UserContext";
import LoginService from "../../../../services/LoginService";


const DatiFiscaliPage = () => {

  const userData = useContext(UserContext);

  const [userInfo, setUserInfo] = useState<user>();

  interface user {
    idRubricaInt: number;
    email: string;
    ragSoc: string;
    nominativo: string;
    piva: string;
    codFisc: string;
    pec: string;
    codiceSDI: string;
    indirizzo: string;
    tel: string;
    fax: string;
    cellulare: string;
  }

  useEffect(() => {
    LoginService.getUser(userData.id).then((res) => {
      let data = res?.data.data;

      setUserInfo(data);
      
    });
  }, []);

  


  return (
    <div className="flex">
      <SideBarPersonalArea />

      <div className="p-4  w-full mt-10 ml-10">
        <div className="w-[100%] p-5 flex flex-col gap-5">
          <div className="flex w-[80%] lg:w-[60%] xl:w-[600px] items-center gap-3  bg-[#f58220] rounded">
            <img className="h-10 w-10 " src={icona1} alt="" />
            <h2 className=" text-white font-semibold text-xl">
              AGGIORNA DATI FISCALI
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex space-x-4 items-center">
              <h2 className="w-44 lg:w-56 font-bold text-lg">La tua ID di accesso: </h2>
              <p className="font-semibold  w-44 p-2 rounded lg:w-[400px] text-lg">
                {userInfo?.idRubricaInt}
              </p>
            </div>
            <div className="flex space-x-4 items-center">
              <h2 className="w-44 lg:w-56 font-bold text-lg">La tua email di accesso: </h2>
              <p className="font-semibold  w-44 p-2 rounded lg:w-[400px] text-lg">
                {userInfo?.email}
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
            <p className="font-semibold w-44 p-2 rounded lg:w-[400px] text-lg">
              {userInfo?.ragSoc}
            </p>
          </div>
          <div className="flex space-x-4 items-center ">
            <h2 className="w-44 lg:w-56 font-bold text-lg">Nominativo: </h2>
            <p className="font-semibold w-44 p-2 rounded lg:w-[400px] text-lg">
             {userInfo?.nominativo}
            </p>
          </div>
          <div className="flex space-x-4 items-center ">
            <h2 className="w-44 lg:w-56 font-bold text-lg">P.IVA: </h2>
            <p className="font-semibold w-44 p-2 rounded lg:w-[400px] text-lg">
              {userInfo?.piva}
            </p>
          </div>
          <div className="flex space-x-4 items-center ">
            <h2 className="w-44 lg:w-56 font-bold text-lg">Codice fiscale: </h2>
            <p className="font-semibold w-44 p-2 rounded lg:w-[400px] text-lg">{userInfo?.codFisc}</p>
          </div>
          <div className="flex space-x-4 items-center ">
            <h2 className="w-44 lg:w-56 font-bold text-lg">PEC: </h2>
            <input
              type="text"
              className="text-xs w-48 md:w-64 placeholder-gray-500 pl-4 pr-4 rounded-md border border-gray-400 py-2 focus:outline-none focus:border-[#f58220]"
              id="exampleInputPassword1"
              placeholder="Inserisci la posta elettronica certificata"
            />
          </div>
          <div className="flex space-x-4 items-center ">
            <h2 className="w-44 lg:w-56 font-bold text-lg">Codice SDI: </h2>
            <input
              type="text"
              className="text-xs w-48 md:w-64 placeholder-gray-500 pl-4 pr-4 rounded-md border border-gray-400 py-2 focus:outline-none focus:border-[#f58220]"
              id="exampleInputPassword1"
              placeholder="Inserisci il codice sistema di intercambio"
            />
          </div>
          <div className="flex justify-center">
            <button className="px-4 py-2 bg-[#f58220] text-white rounded-md">SALVA</button>
             
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

export default DatiFiscaliPage;
