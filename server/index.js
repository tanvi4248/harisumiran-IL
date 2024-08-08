const express = require("express");
const app = express();
const paypal = require("paypal-rest-sdk");
const PORT = 8080;
require("dotenv").config();
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.json());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const { COOKIE_SECRET } = require("./secrets");
const cookieParser = require("cookie-parser");
app.use(cookieParser(COOKIE_SECRET));

const cors = require("cors");
app.use(cors());

const client = require("./db/client");
client.connect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
paypal.configure({
  mode: "sandbox", //sandbox or live
  client_id:
    "Ae0icnVIGdthVCWgfBMz8uE4z6uzj3okgpsu32htTOadIsibmAVNS0eVjp1-WgQSlTMO_k4MJtydZPCK",
  client_secret:
    "EG1L70N_rxx0TKvIu5KzZ0u9VKjCkPKEdo55Hyft7F_RLsSFC_2WDoBrtC1n-RU6DPeg9mpC-8mjVpXc",
});

app.get("/payment", async (req, res) => {
  let data;
  try {
    let create_payment_json = {
      intent: "sale",
      payer: {
        payment_method: "paypal",
      },
      redirect_urls: {
        return_url: "https://harisumiran-il.onrender.com/success",
        cancel_url: "https://harisumiran-il.onrender.com/failed",
      },
      transactions: [
        {
          item_list: {
            items: [
              {
                name: "item",
                sku: "item",
                price: "1.00",
                currency: "USD",
                quantity: 1,
              },
            ],
          },
          amount: {
            currency: "USD",
            total: "1.00",
          },
          description: "This is the payment description.",
        },
      ],
    };

    await paypal.payment.create(create_payment_json, function (error, payment) {
      if (error) {
        throw error;
      } else {
        console.log("Create Payment Response");
        // console.log(payment);
        data = payment;
        res.json(data);
      }
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/success", async (req, res) => {
  try {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;

    const execute_payment_json = {
      payer_id: payerId,
      transactions: [
        {
          amount: {
            currency: "USD",
            total: "1.00",
          },
        },
      ],
    };

    paypal.payment.execute(
      paymentId,
      execute_payment_json,
      function (error, payment) {
        if (error) {
          console.log(error);
          return res.redirect("https://harisumiran-il-1.onrender.com/failed");
        } else {
          console.log("Execute Payment Response");
          // console.log(payment);
          const response = JSON.stringify(payment);
          const parsedResponse = JSON.parse(response);

          const transactions = parsedResponse.transactions[0];

          console.log("transactions", transactions);

          return res.redirect("https://harisumiran-il-1.onrender.com/success");
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
});

app.get("/failed", async (req, res) => {
  return res.redirect("https://harisumiran-il-1.onrender.com/failed");
});
app.use("/api", require("./api"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
