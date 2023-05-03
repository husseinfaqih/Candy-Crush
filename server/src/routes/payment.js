import express from "express";

const paymentRouter = express.Router();

import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51MwmSdGLu9lhE68v4hgzjknTjSwWRmDzREbf6JSu48XWtIA09AGvPEwLJI21G2UQiOuJ0yWgTc65K3njYgPdajHa00hZNOeAiF"
);

paymentRouter.post("/", async (req, res) => {
  try {
    const { token, amount } = req.body;

    const charge = await stripe.charges.create({
      amount: amount * 100,
      currency: "USD",
      source: token.id,
    });

    res.status(200).json(charge);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

export default paymentRouter;
