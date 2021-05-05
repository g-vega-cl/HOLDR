import React, { useEffect, useState, useRef } from "react";
import { Container } from "@material-ui/core";
import Navbar from "components/Navbar/Navbar";
import Home from "components/Home/Home";
import Stripe from "components/Buy/StripeContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from 'components/Auth/Auth';
import {Dashboard} from 'components/Dashboard/Dashboard';
import { TickerInfo } from "components/Home/TickerCalls/TickerInfo";
import PricesContext from 'context/PricesContext';

const datePaddNumberZero = (num: string)=>{
  if(num.length > 1){
    return num;
  } else{
    return "0" + num;
  }
}


const App = () => {
  const [tickerData, setTickerData] = useState([]);
  const tickerArray = ["SPY","BNDX", "VT", "TQQQ", "UPRO"];
  const tickerArrayIndex = useRef(0);

  useEffect(() => {  
    if(tickerArrayIndex.current < 5 ){
      let f = new Date();
      f.setDate(f.getDate()-1);
      if(f.getDay() == 6){
        f.setDate(f.getDate()-1);
      }
      if(f.getDay() == 0){
        f.setDate(f.getDate()-2);
      }
      let dateString = f.getFullYear() + "-" + datePaddNumberZero((f.getMonth()+1).toString()) + "-" + datePaddNumberZero(f.getDate().toString());
      TickerInfo(tickerArray[tickerArrayIndex.current], dateString, setTickerData, tickerData);
      tickerArrayIndex.current = tickerArrayIndex.current + 1;
    }
  }, [tickerData]);

  return (
    <PricesContext.Provider value={{ tickerData }}>
    <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/buy/:type" exact component={Stripe}/>
          <Route path="/auth" exact component={Auth}/>
          <Route path="/dashboard" exact component={Dashboard}/>
        </Switch>
    </BrowserRouter>
    </PricesContext.Provider>
  );
};

export default App;
