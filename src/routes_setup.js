import React from 'react';
import LandingPage from './Components/landing_page'
import GetBlood from './Components/get_blood'
import GiveBlood from './Components/give_blood'
import SignUp from './Components/signup'
import Login from './Components/login'
import Navigation from './Components/navigation'

import Verification from './Components/verification'
import EditUser from './Components/edit_user';

import {Switch,Route,Redirect} from 'react-router-dom'
function RoutesSetup() {
  return (
  	<>
  	<Navigation/>
   <Switch>
   		<Route path="/" exact component={LandingPage}/>
   		<Route path="/get" exact component={GetBlood}/>
   		<Route path="/give" exact component={GiveBlood}/>
   		<Route path="/signup" exact component={SignUp}/>
   		<Route path ="/verify" exact component={Verification}/>
   		<Route path ="/login" exact component={Login}/>


   		<Route path ="/edituser" exact component={EditUser}/>


   		<Redirect to="/"/>
   </Switch>
   </>
  );
}

export default RoutesSetup;
