import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import App from './components/App';

ReactDOM.render(
    <Auth0Provider
        domain="dendev.us.auth0.com"
        clientId="uptO4S4bl6OOS2Aba2vETkYkCIWAKjcf"
        redirectUri={window.location.origin}
        audience="https://dendev.us.auth0.com/api/v2/"
        scope="read:current_user update:current_user_metadata"
    >
        <App />
    </Auth0Provider>
    ,
    document.querySelector('#root')
);