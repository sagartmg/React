import React from 'react';
import LandingPage from './Components/landing_page'
import GetBlood from './Components/get_blood'
import GiveBlood from './Components/give_blood'
import {Switch,Route,Redirect} from 'react-router-dom'
function RoutesSetup() {
  return (
   <Switch>
   		<Route path="/" exact component={LandingPage}/>
   		<Route path="/get" exact component={GetBlood}/>
   		<Route path="/give" exact component={GiveBlood}/>
   		<Redirect to="/"/>
   </Switch>
  );
}

export default RoutesSetup;
