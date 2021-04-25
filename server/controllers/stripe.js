import stripe from "stripe";
import dotenv from "dotenv";
import StripeDB from "../models/stripeTransaction.js";

dotenv.config();

export const getTransactions = async (req, res) => {
  try {
    const stripeTransactions = await StripeDB.find();
    console.log("STRIPE TRANSACTION getTransactions controllers stripe.js ", stripeTransactions)
    res.status(200).json(stripeTransactions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// export const postTransaction = async (req, res) => {
//   const transaction = req.body;
//   const newTransaction = new StripeDB(transaction);
//   try {
//     await newTransaction.save();
//     res.status(201).json(newTransaction);
//   } catch (error) {
//     res.status(409).json({message: error.message});
//   }
// };

export const payment = async (req, res) => {
  const Stripe = stripe(process.env.STRIPE_SECRET_TEST);
  let { amount, id } = req.body;
  if(!req?.body?.email){
    try {
      const payment = await Stripe.paymentIntents.create({
        amount,
        currency: "USD",
        description: "Spatula company",
        payment_method: id,
        confirm: true,
      });
      res.json({
        message: "Payment successful",
        success: true,
      });
    } catch (error) {
      console.log("Error in payment stripe.js controllers", error);
      res.json({
        message: "Payment failed",
        success: false,
      });
    }
  } else{
    const transaction = req.body;
    const newTransaction = new StripeDB(transaction);
    try {
      await newTransaction.save();
      res.status(201).json(newTransaction);
    } catch (error) {
      res.status(409).json({message: error.message});
    }
  }
  
};
