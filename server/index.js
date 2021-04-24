import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import tutorialRoutes from './routes/tutorial.js';
import userRoutes from './routes/users.js';
import stripeRoutes from './routes/stripe.js';
import stripe from 'stripe';


dotenv.config();
const app = express();

const Stripe = stripe(process.env.STRIPE_SECRET_TEST);
app.use(bodyParser.json({ limit: "5mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
app.use(cors());

app.use('/tutorial', tutorialRoutes);
app.use('/users', userRoutes);
app.use('/payment', stripeRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log("Server running")))
  .catch((e) => console.log(e.message));

mongoose.set("useFindAndModify", false);
