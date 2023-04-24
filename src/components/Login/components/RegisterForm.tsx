import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [client, setClient] = useState("");
  const expRegValidacion = /^(?!.*(.)(\1)).*(?<![^aeiouAEIOUyY\s]{3})[a-zA-Z]*([aeiouAEIOUyY][a-zA-Z]*([aeiouAEIOUyY][a-zA-Z]*)?)?(\s[a-zA-Z]*([aeiouAEIOUyY][a-zA-Z]*([aeiouAEIOUyY][a-zA-Z]*)?)?)*$/;
  const expRegValidacionSinNumeros = /^(?!.*(.)(\1))[a-zA-Z\s]*(?<![^aeiouAEIOUyY\s]{3})[a-zA-Z]*([aeiouAEIOUyY][a-zA-Z]*([aeiouAEIOUyY][a-zA-Z]*)?)?(\s[a-zA-Z]*([aeiouAEIOUyY][a-zA-Z]*([aeiouAEIOUyY][a-zA-Z]*)?)?)*$/;
  const handleChange = (event: any) => {
    setClient(event.target.value);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: any) => {
    if (client != "") {
      console.log("data");
      console.log(data);
    } else {
      console.log("Debe seleccionar un tipo de cliente");      
    }
  };

  return (
    <div>
      <h2 className="bg-[#f58220]  mx-10 px-4 py-2 text-white font-semibold">
        TIPOLOGIA DI CLIENTE{" "}
      </h2>
      <div className="flex justify-around items-center mt-2">
        <div className="-mt-7">
          <FormControl>
            <div className="mt-10"></div>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={client}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Privato o Società"
                control={<Radio />}
                label="Privato o Società"
              />
              <FormControlLabel
                value="Rivenditore"
                control={<Radio />}
                label="Rivenditore"
              />
            </RadioGroup>
          </FormControl>
        </div>

        {client == "Rivenditore" && (
          <div className="bg-[#d5e03c] w-72 px-4 py-2 font-semibold text-sm rounded-md">
            <p>
              Sei un operatore arti grafiche? Un creativo? Hai una tipografia?
              Scegli un partner affidabile
            </p>
          </div>
        )}
        {client !== "Rivenditore" && (
          <div className="w-72 px-4 py-2 font-semibold text-sm rounded-md"></div>
        )}
      </div>
      {client == "Rivenditore" && (
        <p>
          * Registrazione riservata agli operatori del settore delle arti
          grafiche (i dati inseriti saranno controllati da un operatore)
        </p>
      )}

      <div className="mt-4">
        <form className=" px-10 py-10" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="bg-[#f58220] text-white px-4 py-2 font-semibold">
            DATI ANAGRAFICI E DI FATTURAZIONE{" "}
          </h2>
          <div className="mt-4">
            <label htmlFor="">Ragione Sociale *</label>
            <div className="relative">
              <div className="inline-flex items-center justify-center absolute left-0 top-0 mt-2.5 h-ful w-10 text-gray-400">
                <i className="fas fa-user text-[#f58220]"></i>
              </div>
              <input
                type="text"
                className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-[#f58220]"
                placeholder="Inserisci la Ragione Sociale dell'azienda"
                {...register("RagioneSociale", { required: true, pattern: expRegValidacion })}
              />
              {errors.RagioneSociale && <p className="text-red-500 text-sm">Ragione Sociale no valido</p>}
            </div>
          </div>

          {client == "Rivenditore" && (
            <div className="mt-2">
              <label htmlFor="countries" className="block mb-2 text-sm">
                Tipo Attività *
              </label>
              <select
                id="countries"
                className="bg-gray-50 focus:outline-none border border-gray-300 text-sm rounded-2xl focus:border-[#f58220]  block w-full p-2.5"
                {...register("tipoAttivita")}
              >
                <option value="1">Agenzia di Comunicazione</option>
                <option value="2">
                  Altro professionista delle Arti Grafiche
                </option>
                <option value="3">Altro Stampatore</option>
                <option value="4">Copisteria</option>
                <option value="4">Fotografo</option>
                <option value="4">Fotolito</option>
                <option value="4">Grafico</option>
                <option value="4">Litografia</option>
                <option value="4">Pre-stampa</option>
                <option value="4">Servizi di Stampa Digitale</option>
                <option value="4">Tipografia</option>
                <option value="4">Vendita on-line di Prodotti</option>
                <option value="4">per ia Comunicacione</option>
                <option value="4">Web Agency</option>
              </select>
            </div>
          )}

          <div className="mt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <label>Nome *</label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute mt-2.5 left-0 top-0 h-ful w-10 text-gray-400">
                  <i className="fas fa-lock text-[#f58220]"></i>
                </div>

                <input
                  type="text"
                  className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-[#f58220]"
                  id="exampleInputPassword1"
                  placeholder="Inserisci il tuo Nome"
                  {...register("Nome", { required: true, pattern: expRegValidacionSinNumeros })}
                />
                {errors.Nome && <p className="text-red-500 text-sm">Nome no valido</p>}
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <label>Cognome *</label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute mt-2.5 left-0 top-0 h-ful w-10 text-gray-400">
                  <i className="fas fa-lock text-[#f58220]"></i>
                </div>

                <input
                  type="text"
                  className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-[#f58220]"
                  id="exampleInputPassword1"
                  placeholder="Inserisci il tuo Cognome"
                  {...register("Cognome", { required: true, pattern: expRegValidacionSinNumeros })}
                />
                {errors.Cognome && <p className="text-red-500 text-sm">Cognome no valido</p>}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="">Indirizzo *</label>
            <div className="relative">
              <div className="inline-flex items-center justify-center absolute left-0 top-0 mt-2.5 h-ful w-10 text-gray-400">
                <i className="fas fa-user text-[#f58220]"></i>
              </div>
              <input
                type="text"
                className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-[#f58220]"
                placeholder="Inserisci I'indirizzo"
                {...register("Indirizzo", { required: true, pattern: expRegValidacion })}
              />
              {errors.Indirizzo && <p className="text-red-500 text-sm">Indirizzo no valido</p>}
            </div>
          </div>
          <p className="text-sm mt-2">
            Indicaci l'Indirizzo Principale, potrai aggiungere ulteriori
            indirizzi per la consegna nella tua area riservata
          </p>
          <div className="mt-2">
            <label htmlFor="countries" className="block mb-2 text-sm">
              Nazione *
            </label>
            <select
              id="countries"
              className="bg-gray-50 focus:outline-none border border-gray-300 text-sm rounded-2xl focus:border-[#f58220]  block w-full p-2.5"
              {...register("countries", { required: true })}
            >
              <option value="US">Italia</option>
              <option value="CA">Albania</option>
              <option value="FR">Belgio</option>
              <option value="DE">Cipro</option>
              <option value="DE">Francia</option>
              <option value="DE">Germania</option>
              <option value="DE">Grecia</option>
              <option value="DE">LU</option>
              <option value="DE">NL</option>
              <option value="DE">Regno Unito</option>
              <option value="DE">Spagna</option>
              <option value="DE">Svezia</option>
              <option value="DE">Svizzera</option>
            </select>
            {errors.countries && <p className="text-red-500 text-sm">countries no valido</p>}
          </div>

          <div className="mt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <label>Cap *</label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute mt-2.5 left-0 top-0 h-ful w-10 text-gray-400">
                  <i className="fas fa-lock text-[#f58220]"></i>
                </div>
                <input
                  type="text"
                  className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-[#f58220]"
                  id="exampleInputPassword1"
                  placeholder="Inserisci il CAP"
                  {...register("Cap", { required: true, pattern: expRegValidacion })}
                />
                {errors.Cap && <p className="text-red-500 text-sm">Cap no valido</p>}
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <label>Località *</label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute mt-2.5 left-0 top-0 h-ful w-10 text-gray-400">
                  <i className="fas fa-lock text-[#f58220]"></i>
                </div>

                <input
                  type="text"
                  className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-[#f58220]"
                  id="exampleInputPassword1"
                  placeholder="Inserisci il tuo Cognome"
                  {...register("Localita", { required: true, pattern: expRegValidacion })}
                />
                {errors.Localita && <p className="text-red-500 text-sm">Localita no valido</p>}
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <label>P. Iva</label>
              <div className="relative flex items-center">
                <p className="w-12 text-sm placeholder-gray-500 px-4 rounded-2xl border mr-2 border-gray-400 py-2">
                  IT
                </p>
                <div className="inline-flex items-center justify-center absolute mt-2.5 left-0 top-0 h-ful w-10 text-gray-400">
                  <i className="fas fa-lock text-[#f58220]"></i>
                </div>

                <input
                  type="text"
                  className="text-sm w-full placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 py-2 focus:outline-none focus:border-[#f58220]"
                  id="exampleInputPassword1"
                  placeholder="Inserisci il CAP"
                  {...register("pIva", { pattern: expRegValidacion })}
                />
                {errors.pIva && <p className="text-red-500 text-sm">P. Iva no valido</p>}
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <label>Codice Fiscale *</label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute mt-2.5 left-0 top-0 h-ful w-10 text-gray-400">
                  <i className="fas fa-lock text-[#f58220]"></i>
                </div>
                <input
                  type="text"
                  className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-[#f58220]"
                  id="exampleInputPassword1"
                  placeholder="Inserisci il Codice Fiscale"
                  {...register("codiceFiscale", { required: true, pattern: expRegValidacion })}
                />
                {errors.codiceFiscale && <p className="text-red-500 text-sm">Codice Fiscale no valido</p>}
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <label>Pec *</label>
              <div className="relative flex items-center">
                <div className="inline-flex items-center justify-center absolute mt-2.5 left-0 top-0 h-ful w-10 text-gray-400">
                  <i className="fas fa-lock text-[#f58220]"></i>
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    className="text-sm w-full placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 py-2 focus:outline-none focus:border-[#f58220]"
                    id="exampleInputPassword1"
                    placeholder="Inserisci la casella PEC"
                    {...register("pec", { required: true, pattern: expRegValidacion })}
                  />
                  {errors.pec && <p className="text-red-500 text-sm">Pec Fiscale no valido</p>}
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <label>Codice SDI</label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute mt-2.5 left-0 top-0 h-ful w-10 text-gray-400">
                  <i className="fas fa-lock text-[#f58220]"></i>
                </div>
                <input
                  type="text"
                  className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-[#f58220]"
                  id="exampleInputPassword1"
                  placeholder="Inserisci il Codice SDI"
                  {...register("codiceSdi", { pattern: expRegValidacion })}
                />
                {errors.codiceSdi && <p className="text-red-500 text-sm">Codice SDI Fiscale no valido</p>}
              </div>
            </div>
          </div>
          <h2 className="bg-[#f58220] text-white px-4 py-2 mt-6 font-semibold">
            CONTATTI{" "}
          </h2>
          <div className="mt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <label>Telefono *</label>
              <div className="relative flex items-center">
                <div className="inline-flex items-center justify-center absolute mt-2.5 left-0 top-0 h-ful w-10 text-gray-400">
                  <i className="fas fa-lock text-[#f58220]"></i>
                </div>
                <div className="w-full">
                  <input
                    type="tel"
                    className="text-sm w-full placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 py-2 focus:outline-none focus:border-[#f58220]"
                    id="exampleInputPassword1"
                    placeholder="Inserisci un numero di rete fissa"
                    {...register("telefono", { required: true })}
                  />
                  {errors.telefono && <p className="text-red-500 text-sm">Telefono no valido</p>}
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <label>Cellulare</label>
              <div className="tel">
                <div className="inline-flex items-center justify-center absolute mt-2.5 left-0 top-0 h-ful w-10 text-gray-400">
                  <i className="fas fa-lock text-[#f58220]"></i>
                </div>
                <input
                  type="text"
                  className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-[#f58220]"
                  id="exampleInputPassword1"
                  placeholder="Inserisci un numero Cellulare"
                  {...register("cellulare")}
                />
                {errors.cellulare && <p className="text-red-500 text-sm">Cellulare no valido</p>}
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <label>Fax </label>
              <div className="relative flex items-center">
                <div className="inline-flex items-center justify-center absolute mt-2.5 left-0 top-0 h-ful w-10 text-gray-400">
                  <i className="fas fa-lock text-[#f58220]"></i>
                </div>

                <input
                  type="text"
                  className="text-sm w-full placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 py-2 focus:outline-none focus:border-[#f58220]"
                  id="exampleInputPassword1"
                  placeholder="Inserisci un numero di Fax"
                  {...register("fax")}
                />
                {errors.fax && <p className="text-red-500 text-sm">Fax no valido</p>}
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <label>Sito Internet</label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute mt-2.5 left-0 top-0 h-ful w-10 text-gray-400">
                  <i className="fas fa-lock text-[#f58220]"></i>
                </div>
                <input
                  type="text"
                  className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-[#f58220]"
                  id="exampleInputPassword1"
                  placeholder="Inserisci il tuo sito internet"
                  {...register("sitoInternet")}
                />
                {errors.sitoInternet && <p className="text-red-500 text-sm">Sito Internet no valido</p>}
              </div>
            </div>
          </div>
          <h2 className="bg-[#f58220] text-white px-4 py-2 mt-6 font-semibold">
            EMAIL DI ACCESSO{" "}
          </h2>
          <p>
            Questa email sarà la login di accesso per entrare nella tua{" "}
            <span className="font-semibold">Area Riservata</span>{" "}
          </p>
          <div className="mt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <label>Email *</label>
              <div className="relative flex items-center">
                <div className="inline-flex items-center justify-center absolute mt-2.5 left-0 top-0 h-ful w-10 text-gray-400">
                  <i className="fas fa-lock text-[#f58220]"></i>
                </div>

                <div className="w-full">
                  <input
                    type="email"
                    className="text-sm w-full placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 py-2 focus:outline-none focus:border-[#f58220]"
                    id="exampleInputPassword1"
                    placeholder="Inserisci la tua Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <p className="text-red-500 text-sm">Email no valido</p>}
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <label>Ripeti Email *</label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute mt-2.5 left-0 top-0 h-ful w-10 text-gray-400">
                  <i className="fas fa-lock text-[#f58220]"></i>
                </div>
                <input
                  type="email"
                  className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-[#f58220]"
                  id="exampleInputPassword1"
                  placeholder="Ripeti la tua Email"
                  {...register("rEmail", { required: true })}
                />
                {errors.rEmail && <p className="text-red-500 text-sm">Email no valido</p>}
              </div>
              <p className="flex justify-end mt-1">
                (*) indica un campo obbligatorio
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="flex px-8 mt-4 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-[#f58220] hover:bg-blue-6 rounded-2xl py-2 transition duration-150 ease-in"
            >
              Registrati
            </button>
          </div>
          <div className=" flex justify-center mt-10 items-center space-x-2">
            <p>
              <span className="font-semibold">Sei già registrato?</span>
            </p>
            <div className="flex justify-center">
              <Link
                to="/Login"
                className="flex font-semibold items-center justify-center focus:outline-none hover:underline text-lg sm:text-base text-[#f58220] rounded-2xl py-2 transition duration-150 ease-in"
              >
                Accedi
              </Link>
            </div>
          </div>
          <div className="mt-4">
            <p>Cliccando sul pulsante "Registrati", acconsento che:</p>
            <div className="flex items-center mb-4 mt-2">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:border-[#f58220]"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Consento al trattamento dei miei dati personali{" "}
                <span className="text-[#f58220]">
                  Leggi l'informativa sulla privacy
                </span>
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:border-[#f58220]"
              />
              <label
                htmlFor="checked-checkbox"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Voglio ricevere comunicazioni e OFFERTE promozionali tramite
                email dalla Tipografia Former
              </label>
            </div>
            <div className="mt-2">
              <p>* Ho almeno 18 anni di età</p>
            </div>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default RegisterForm;
