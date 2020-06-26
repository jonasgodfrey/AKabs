import React from "react";
import { Component } from 'react'
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import Admin from "layouts/Admin.js";
// core components
import Login from "views/Login/App.js";

export class selfroute extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isloggedin: true, 
        }
    }
    
    render() {
        
        const hist = createBrowserHistory();
if (this.state.isloggedin == false) {
    return (
            
        <Router history={hist}>
<Switch>
  <Route path="/sign-in" component={Login} />
  <Redirect from="/" to="/sign-in" />
</Switch>
</Router>
    ) 
   
}else{
    return(
        <Router history={hist}>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </Router>
    )
   
}

    
    }
}

export default selfroute

