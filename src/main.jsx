import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
const domainName= import.meta.env.VITE_APP_DOMAIN_NAME;
const clientId= import.meta.env.VITE_APP_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain={domainName}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: `https://${domainName}/api/v2/`,
      scope: "read:current_user update:current_user_metadata"
    }}
  >
       <App />
    </Auth0Provider>
  </React.StrictMode>,
)
