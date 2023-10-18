import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from "react-router-dom";
import App from './App'
import './index.css'
import { GLOBAL_CONFIG } from './_config/global';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <PayPalScriptProvider
      options={{
        clientId: GLOBAL_CONFIG.PAYPAL_CLIENT_ID,
        currency: 'EUR',
        components: "buttons,marks,funding-eligibility",
        
      }}
    > */}
      <Router>
        <App />
      </Router>
    {/* </PayPalScriptProvider> */}
  </React.StrictMode>,
)
