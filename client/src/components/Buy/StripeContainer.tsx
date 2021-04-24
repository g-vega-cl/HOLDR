import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Buy  from 'components/Buy/Buy';

const PUBLIC_KEY = "pk_test_51IjaBXFoN75ZltLH5zdWf92VJVOiEzVYGGSAnwlKe3Tni1FprlBFjUKKXYkaCLRf5Si7gQLaB1pVow8FtvrWXZLI00sm7Shnmo";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <Buy />
    </Elements>
  );
};

export default Stripe;