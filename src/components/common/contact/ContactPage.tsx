import React, {useState} from 'react'
import Header from '../Header/Header'
import SearchOrdini from '../../ordini/components/SearchOrdini'
import Contatacci from '../../Login/components/Contatacci';
import QuestionsPage from './QuestionsPage';

const ContactPage = () => {

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index: any) => {
    setToggleState(index);
  };

  return (
    <div>
      <Header />
      <SearchOrdini />
      <div className="container mx-auto mt-4 mb-2">
        <div className="flex flex-col relative w-full border border-[#f58220] rounded-sm">
          <div className="flex">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Contattacci
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              DOMANDE E RISPOSTE FREQUENTI
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              GLOSSARIO TIPOGRAFICO
            </button>
          </div>

          <div className="content-tabs h-auto">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <Contatacci />
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <QuestionsPage />
            </div>
            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage