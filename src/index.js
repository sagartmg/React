import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import Example from './eg'
// import './again.css'

// import Menu from './Components/menu'

// import New from './new'
import {BrowserRouter as Router} from "react-router-dom"


// import {DISHES} from './Shared/dishes'
// import Nine from './Nine/nine'
// import Ten from './Ten/ten'
// import Twelve from './Twelve/twelve'

// import Assign from './Ten/assign'
// import Resort from './Resort/resort'
// import Navbar from './Resort/Components/navbar'
// import {RoomProvider} from './Resort/roomContext'
import ResortAgain from './ResortAgain/resortAgain'
// // import Navbar from './ResortAgain/Components/navbar'
// import {MenuProvider} from './ResortAgain/Components/context'

import CrochetsNepal from './CrochetsNepal/crochetsNepal'
import AmazonClone from './AmazonClone/amazonClone'




ReactDOM.render(
	<Router>
	<CrochetsNepal/>
	</Router>
	,
 
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
