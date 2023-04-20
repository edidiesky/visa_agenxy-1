import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import Cart from "../models/Cart.js";
import mongoose from "mongoose";
import moment from "moment/moment.js";
// GET All Cart
// Not Private
const GetAllCart = asyncHandler(async (req, res) => {
  // instantiate the request queries
  const cart = await Cart.find({}).
  res.status(200).json({ cart });
});

// CREATE  Cart
// Not Private
const CreateCart = asyncHandler(async (req, res) => {
  // get the request body parameters
  const { title, image,tax, price, description, quantity } = req.body;
  const cart = await Cart.create({
    title,
    image,
    price,
    description,
    quantity,
    tax
  });
  res.status(200).json({ cart });
});

// Not Private
const UpdateCart = asyncHandler(async (req, res) => {
  const { userId, name } = req.user;
  // get the request body parameters
  const { title, image, price, description } = req.body;
  const Cart = await Cart.findById({ _id: req.params.id });

  if (!Cart) {
    res.status(404);
    throw new Error("Cart does not exist");
  }
  const updatedCart = await Cart.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title,
      image,
      price,
      description,
    },
    { new: true }
  );
  res.status(200).json({ updatedCart });
});

// Not Private
const DeleteCart = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const Cart = await Cart.findById({ _id: id });
  if (!Cart) {
    res.status(404);
    throw new Error("Cart not found");
  }
  await Cart.findByIdAndDelete({ _id: req.params.id });
  res.status(200).json({ msg: "The Cart has been successfully deleted" });
});

export { GetAllCart, UpdateCart, DeleteCart, CreateCart };
