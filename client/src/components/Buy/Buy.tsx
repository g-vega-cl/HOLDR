import React, { useEffect, useState } from "react";
import { Container, Grow, Grid, Typography } from "@material-ui/core";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const Buy = () => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

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
            amount: 1000,
            id,
          });

          if (response.data.success) {
            console.log("Successful payment");
            setSuccess(true);
          }
        } catch (error) {
          console.log("Error", error);
        }
      } else {
        console.log(error.message);
      }
    }
  };

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
            <>
              {!success ? (
                <form onSubmit={handleSubmit}>
                  <fieldset className="FormGroup">
                    <div className="FormRow">
                      <CardElement />
                    </div>
                  </fieldset>
                  <button>Pay</button>
                </form>
              ) : (
                <div>
                  <h2>
                    You just bought a sweet spatula congrats this is the best
                    decision of you're life
                  </h2>
                </div>
              )}
            </>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Buy;
