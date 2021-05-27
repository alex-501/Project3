import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ChoreProvider } from './utils/GlobalState';
ReactDOM.render(
  <React.StrictMode>
    < ChoreProvider>
       <App />
    </ChoreProvider>
  </React.StrictMode>,
  document.getElementById('root'));
serviceWorker.unregister();
