import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import Navbar from "components/Navbar/Navbar";
import Home from "components/Home/Home";
import Stripe from "components/Buy/StripeContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from 'components/Auth/Auth';
import {Dashboard} from 'components/Dashboard/Dashboard';
const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/buy/:type" exact component={Stripe}/>
          <Route path="/auth" exact component={Auth}/>
          <Route path="/dashboard" exact component={Dashboard}/>
        </Switch>
    </BrowserRouter>
  );
};

export default App;
