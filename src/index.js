import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Example from './eg'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import './index.css'

import Menu from './Components/menu'

import New from './new'
import {BrowserRouter as Router} from "react-router-dom"


import {DISHES} from './Shared/dishes'
import Nine from './Nine/nine'
import Ten from './Ten/ten'
import Twelve from './Twelve/twelve'

import Assign from './Ten/assign'
import Resort from './Resort/resort'
import Navbar from './Resort/Components/navbar'

ReactDOM.render(
  <React.StrictMode>
  <Router>
  <Navbar/>
  <Resort/>
  </Router>
 
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
