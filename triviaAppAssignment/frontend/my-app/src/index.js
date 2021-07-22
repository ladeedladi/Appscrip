import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppContextProvide from '../src/Context'

ReactDOM.render(
  
 <AppContextProvide>
    <App />
  </AppContextProvide>
 ,
  document.getElementById('root')
);


