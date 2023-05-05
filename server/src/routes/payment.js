import express from "express";
import dotenv from "dotenv";
dotenv.config();

const paymentRouter = express.Router();

import stripePackage from "stripe";
const stripe = stripePackage(process.env.SK_TEST);

paymentRouter.post("/", async (req, res) => {
  try {
    const { amount, currency } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    res.status(200).json({ success: true, result: paymentIntent });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

export default paymentRouter;
