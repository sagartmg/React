import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RoutesSetup from './routes_setup'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom"
import {FirebaseContext} from './Context/firebase_context'
import {firebase} from './Setup/firebase_setup'
import MapContainer from './Components/maps'

let data = {"name":()=>{let x = 1212},"thar":"manangthen"}
// console.log(firebase.auth);
ReactDOM.render(


  <React.StrictMode>
  <FirebaseContext.Provider value={{firebase}}>
  	<Router>
    <RoutesSetup />
    </Router>
   </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
