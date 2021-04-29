import React, { useEffect, useState, useRef } from "react";
import { Container, Grow, Grid, Typography } from "@material-ui/core";
import { HoldrRules } from "./HoldrRules";
import { TypesOfCoupons } from "./TypesOfCoupons";
import { useDispatch } from "react-redux";
import { getPosts } from "actions/posts";
import { RiskCharts } from "components/Home/RiskCharts";
import { TickerInfo } from "components/Home/TickerCalls/TickerInfo";

const datePaddNumberZero = (num: string)=>{
  if(num.length > 1){
    return num;
  } else{
    return "0" + num;
  }
}
const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const [couponType, setCouponType] = useState("1");
  const [tickerData, setTickerData] = useState([]);
  const tickerArray = ["SPY","BNDX", "VT", "TQQQ", "UPRO"];
  const tickerArrayIndex = useRef(0);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);

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
    <Grow in>
      <Container
        style={{
          margin: "0",
          padding: "0",
          maxWidth: "150vw",
          backgroundColor: "rgb(245, 250, 245,.5)", //! Also in NavBar styles
          fontWeight: "bold",
          overflow: "hidden",
        }}
      >
        <Grid
          container
          style={{ padding: "23px" }}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <HoldrRules />
          </Grid>
          <Grid item xs={12}>
            <TypesOfCoupons
              setCouponType={setCouponType}
              tickerData={tickerData}
            />
          </Grid>
          <Grid item xs={12}>
            <RiskCharts type={couponType} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
