import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from "react-router-dom";
import App from './App'
import './index.css'
import { GLOBAL_CONFIG } from './_config/global';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
/*
    TODO: Preguntas
    !1) Donde se suben los archivos de ituoi lavori
    !2) A que estado cambia al subir los archivos de lavori
    !3) Cual es el diseño y los datos del email enviado del apartado campione gratuito
    ? Validar el usuario de antonio para abrir el gestionale
*/