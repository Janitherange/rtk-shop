import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import {store} from "./redux/store.js";
import {Provider} from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider>
          <Provider store={store}>
              <App />
          </Provider>
      </ThemeProvider>
  </React.StrictMode>
)
