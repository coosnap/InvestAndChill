import {CookiesProvider} from 'react-cookie';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom';
import {RecoilRoot} from 'recoil';
import {App} from './App';
import {routes} from "./routes";

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <CookiesProvider defaultSetOptions={{path: '/'}}>
    <RecoilRoot>
      <RouterProvider router={router}/>
    </RecoilRoot>
  </CookiesProvider>
  // </React.StrictMode>
);
