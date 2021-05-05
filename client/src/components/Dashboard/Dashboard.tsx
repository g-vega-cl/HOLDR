import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grow,
  Grid,
  Typography,
} from "@material-ui/core";
import { getUserTransactions } from "actions/stripe";
import { useDispatch, useSelector } from "react-redux";
import PricesContext from "context/PricesContext";
import { TransactionsTable } from "./TransactionsTable";

const u = {
  result: {
    name: "",
    imageUrl: "",
  },
};

export const Dashboard = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("profile") || JSON.stringify(u))
  );
  const dispatch = useDispatch();
  const userTransactions = useSelector((state: any) => state.stripe);
  const { tickerData } = React.useContext(PricesContext);
  const [risk1CouponPrice, setRisk1CouponPrice] = useState(0);
  const [risk3CouponPrice, setRisk3CouponPrice] = useState(0);
  const [risk5CouponPrice, setRisk5CouponPrice] = useState(0);
  const [risk1amount, setRisk1amount] = useState(0);
  const [risk3amount, setRisk3amount] = useState(0);
  const [risk5amount, setRisk5amount] = useState(0);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [equity, setEquity] = useState(0);

  useEffect(() => {
    if (tickerData.length > 0) {
      let SPYData = 0;
      let BNDXData = 0;
      let VTData = 0;
      let TQQQData = 0;
      let UPROData = 0;
      tickerData.forEach((symbol: any) => {
        switch (symbol.ticker) {
          case "SPY":
            SPYData = symbol.closePrice * (30 / 209.839996);
            break;
          case "BNDX":
            BNDXData = symbol.closePrice * (70 / 54.689999);
            break;
          case "VT":
            VTData = symbol.closePrice * (100 / 58.65);

            break;
          case "TQQQ":
            TQQQData = symbol.closePrice * (50 / 8.708333);
            break;
          case "UPRO":
            UPROData = symbol.closePrice * (50 / 22.26);
            break;
          default:
            break;
        }
      });

      setRisk1CouponPrice(SPYData + BNDXData);
      setRisk3CouponPrice(VTData);
      setRisk5CouponPrice(TQQQData + UPROData);
    }
  }, [tickerData]);

  useEffect(() => {
    dispatch(getUserTransactions(user.result.email));
  }, []);

  useEffect(() => {
    let myInvestment = 0;
    let amount1 = 0;
    let amount3 = 0;
    let amount5 = 0;
    userTransactions.forEach((transaction: any) => {
      if (transaction.completed === true && transaction.closed === false) {
        myInvestment += transaction.depositedMoney;
        switch (transaction.type) {
          case "1":
            amount1 += transaction.amount;
            break;
          case "3":
            amount3 += transaction.amount;
            break;
          case "5":
            amount5 += transaction.amount;
            break;
        }
      }
    });
    setTotalInvestment(myInvestment);
    setRisk1amount(amount1);
    setRisk3amount(amount3);
    setRisk5amount(amount5);
  }, [
    userTransactions,
    setTotalInvestment,
    setRisk1amount,
    setRisk3amount,
    setRisk5amount,
  ]);

  useEffect(() => {
    setEquity(
      risk1amount * risk1CouponPrice +
        risk3amount * risk3CouponPrice +
        risk5amount * risk5CouponPrice
    );
  }, [
    setEquity,
    risk1amount,
    risk3amount,
    risk5amount,
    risk1CouponPrice,
    risk3CouponPrice,
    risk5CouponPrice,
  ]);

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
        <Grid container style={{ padding: "24px" }}>
          <Grid item xs={6}>
            <Typography variant="h6">
              Total investment: ${totalInvestment}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Total equity: ${equity}</Typography>
          </Grid>
          <Grid item xs={12} style={{marginTop:'20px'}}>
            <TransactionsTable
              userTransactions={userTransactions}
              risk1CouponPrice={risk1CouponPrice}
              risk3CouponPrice={risk3CouponPrice}
              risk5CouponPrice={risk5CouponPrice}
            />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};
