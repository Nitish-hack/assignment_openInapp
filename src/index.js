import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GoogleOAuthProvider clientId="698574493801-p7q8fu3cncdmf1a5d2cjlciuon29roa0.apps.googleusercontent.com">
<App />
</GoogleOAuthProvider>
);

