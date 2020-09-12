const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HQUZAGLcDOX0Ocn6JcAQpUM3dhIQgTvh45dut5NVb7j0HNCFGBzk2rkTLqJt5YMx1CQ6UvuuOgUCV5RlkFAMAUJ00vy6eB1aZ"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (request, response) => {
  response.status(200).send("Hello World");
});

app.post("/payment/create?total", async (request, reponse) => {
  const total = request.query.total;

  console.log("====================================");
  console.log("Payment request recieved, total is >>>", total);
  console.log("====================================");

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // OK Created
  response.status(201).send({ clientSecret: paymentIntent.clientSecret });
});

// Listen command
exports.api = functions.https.onRequest(app);
