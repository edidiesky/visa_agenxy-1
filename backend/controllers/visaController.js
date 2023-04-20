import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import Visa from "../models/Visa.js";
import mongoose from "mongoose";
import moment from "moment/moment.js";
// GET All Visa
//  Private
const GetAllVisa = asyncHandler(async (req, res) => {
  // instantiate the request queries
  const visa = await Visa.find({})
  res.status(200).json({ visa });
});

// GET SINGLE Visa
// Not Private
const GetSingleVisa = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // find the Visa
  const visa = await Visa.findById({ _id: id });
  if (!visa) {
    res.status(404);
    throw new Error("visa not found");
  }
  res.status(200).json({ visa });
});

// GET SINGLE Visa
// Not Private
const CreateSingleVisa = asyncHandler(async (req, res) => {
  // get the request body parameters
  const { title, image, price, description } = req.body;
  const { userId } = req.user;

  const visa = await Visa.create({
    title,
    image,
    description,
    price,
    user: userId,
  });
  res.status(200).json({ visa });
});

//PRIVATE
// ADMIN
const UpdateVisa = asyncHandler(async (req, res) => {
  const { userId, name } = req.user;
  // get the request body parameters
  const { title, image, price, description } = req.body;
  const visa = await Visa.findById({ _id: req.params.id });

  if (!visa) {
    res.status(404);
    throw new Error("Visa does not exist");
  }
  const updatedVisa = await Visa.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title,
      image,
      price,
      description,
    },
    { new: true }
  );
  res.status(200).json({ updatedVisa });
});

//PRIVATE/
// ADMIN
const DeleteVisa = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const visa = await Visa.findById({ _id: id });
  if (!visa) {
    res.status(404);
    throw new Error("Visa not found");
  }
  await visa.findByIdAndDelete({ _id: req.params.id });
  res.status(200).json({ msg: "The Visa has been successfully deleted" });
});

export { GetSingleVisa, GetAllVisa, UpdateVisa, DeleteVisa, CreateSingleVisa };
