import express from "express";
import coinbase from "coinbase-commerce-node";

const router = express.Router();
const { Client, resources } = coinbase;

Client.init("4cad3b5a-4d76-41d2-82bf-84ea4b32f2a9");
const { Charge } = resources;

router.post("/", async (req, res) => {
  const { name, description, TotalShoppingPrice, firstname, email } = req.body;
  console.log(TotalShoppingPrice);
  const chargeData = {
    name,
    description,
    local_price: {
      amount: TotalShoppingPrice,
      currency: "USD",
    },
    pricing_type: "fixed_price",
    requested_info: [firstname, email],
  };

  const createdCharge = await Charge.create(chargeData);
  res.status(200).json({ createdCharge });
});

export default router;

//
