import stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();
export const payment = async (req, res) => {
  const Stripe = stripe(process.env.STRIPE_SECRET_TEST);
  let { amount, id } = req.body;
  try {
    const payment = await Stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Spatula company",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment", payment);
    res.json({
      message: "Payment successful",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
};
