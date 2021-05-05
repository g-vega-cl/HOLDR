import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  CircularProgress,
  Grow,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createTransaction } from "actions/stripe";
import PricesContext from "context/PricesContext";
const u = {
  result: {
    name: "",
    imageUrl: "",
  },
};

const Buy = () => {
  const [success, setSuccess] = useState(false);
  const [loadingPayment, setLoadingPayment] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("profile") || JSON.stringify(u))
  );
  const [dollarsBought, setDollarsBougth] = useState(10);
  const { type } = useParams<{ type?: string }>();
  const dispatch = useDispatch();
  const [paymentData, setPaymentData] = useState({
    email: "",
    type: "",
    amount: 0,
    openCouponPrice: 0,
    depositedMoney: 0,
    boughtAt: new Date(),
    completed: false,
    closed: false,
    profit: 0,
  });

  /////
  const { tickerData } = React.useContext(PricesContext);
  const [risk1CouponPrice, setRisk1CouponPrice] = useState(0);
  const [risk3CouponPrice, setRisk3CouponPrice] = useState(0);
  const [risk5CouponPrice, setRisk5CouponPrice] = useState(0);

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
  ////
  const [openCouponPrice, setOpenCouponPrice] = useState(200); //! Probably will come as prop later.

  useEffect(()=>{
    if(type==="1"){
      setOpenCouponPrice(risk1CouponPrice)
    }
    if(type==="3"){
      setOpenCouponPrice(risk3CouponPrice)
    }
    if(type==="5"){
      setOpenCouponPrice(risk5CouponPrice)
    }
  },[risk1CouponPrice,risk3CouponPrice,risk5CouponPrice ])

  const updateDollarsBought = (e: any) => {
    if (e.target.value) {
      let res = e.target.value.match(/[0-9]/g);
      if (res) {
        setDollarsBougth(res.join(""));
      }
    } else {
      setDollarsBougth(e.target.value);
    }
  };

  const updateLoadingPayment = () => {
    setLoadingPayment(true);
  };

  useEffect(() => {
    if (success) {
      setLoadingPayment(false);
    }
  }, [success]);

  useEffect(() => {
    if (type) {
      setPaymentData({
        email: user?.result?.email,
        type: type,
        amount: dollarsBought / openCouponPrice,
        openCouponPrice: openCouponPrice,
        depositedMoney: dollarsBought,
        boughtAt: new Date(),
        completed: false,
        closed: false,
        profit: 0,
      });
    }
  }, [setPaymentData, user, type, dollarsBought, openCouponPrice]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (stripe && elements) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement), //! Changed react-stripe.d.ts to make this work
      });

      if (!error) {
        try {
          const { id } = paymentMethod;
          const response = await axios.post("http://localhost:5000/payment", {
            amount: dollarsBought * 100,
            id,
          });

          if (response.data.success) {
            setSuccess(true);
          }

          //Send transaction to mongo
          console.log(paymentData)
          dispatch(createTransaction(paymentData));
        } catch (error) {
          console.log("Error in payment ", error);
          alert("error in payment");
          setLoadingPayment(false);
        }
      } else {
        console.log("Error in stripe ", error.message);
      }
    }
  };

  if (user.result.name) {
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
            <Grid item xs={7}>
              <h1>Invest in a coupon</h1>
            </Grid>
            <Grid item xs={7} style={{ marginBottom: "10px" }}>
              <Typography>
                {user?.result?.givenName} {user?.result?.familyName}, remember,
                the market is not free money. It's a long term volatile
                investment that historically yields good results.
              </Typography>
            </Grid>
            <Grid container xs={7} item>
              <TextField
                variant="outlined"
                value={dollarsBought}
                onChange={updateDollarsBought}
              />
              <Typography style={{ paddingTop: "15px", marginLeft: "10px" }}>
                You are buying ${dollarsBought || 0} USD of the Risk {type}{" "}
                coupon.
              </Typography>
            </Grid>

            <Grid item xs={7} style={{ marginTop: "10px" }}>
              <>
                {!success ? (
                  <form onSubmit={handleSubmit}>
                    <fieldset className="FormGroup">
                      <div className="FormRow">
                        <CardElement />
                      </div>
                    </fieldset>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      onClick={updateLoadingPayment}
                      disabled={loadingPayment}
                      style={{ marginTop: "10px", marginLeft: "2px" }}
                    >
                      Pay
                    </Button>
                  </form>
                ) : (
                  <div>
                    <Typography>
                      <b>
                        {" "}
                        You bought {(dollarsBought / openCouponPrice).toFixed(2)} coupons of
                        risk {type}.
                      </b>{" "}
                      Your transaction is pending and will be bought at the next
                      market open.
                    </Typography>
                    <Typography>
                      You can cancel your transaction in your dashboard.
                    </Typography>
                  </div>
                )}
              </>
            </Grid>
            <Grid item xs={7} style={{ marginTop: "10px", marginLeft: "50%" }}>
              {loadingPayment && <CircularProgress />}
            </Grid>
          </Grid>
        </Container>
      </Grow>
    );
  } else {
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
            <h1>Log in to buy a coupon.</h1>
          </Grid>
        </Container>
      </Grow>
    );
  }
};

export default Buy;
