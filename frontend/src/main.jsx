import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <BrowserRouter>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
)
