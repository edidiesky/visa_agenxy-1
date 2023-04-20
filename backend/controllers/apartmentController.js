import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import Apartment from "../models/Apartment.js";
// GET All Apartment
//  Private
const GetAllApartment = asyncHandler(async (req, res) => {
  // instantiate the request queries
  const investment = await Apartment.find({})
  res.status(200).json({ investment });
});

// GET SINGLE Apartment
// Not Private
const GetSingleApartment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // find the Apartment
  const investment = await Apartment.findById({ _id: id });
  if (!investment) {
    res.status(404);
    throw new Error("investment not found");
  }
  res.status(200).json({ investment });
});

// GET SINGLE Apartment
// Not Private
const CreateSingleApartment = asyncHandler(async (req, res) => {
  // get the request body parameters
  const { title, image, price, description } = req.body;
  const { userId } = req.user;

  const investment = await Apartment.create({
    title,
    image,
    description,
    price,
    user: userId,
  });
  res.status(200).json({ investment });
});

//PRIVATE
// ADMIN
const UpdateApartment = asyncHandler(async (req, res) => {
  const { userId, name } = req.user;
  // get the request body parameters
  const { title, image, price, description } = req.body;
  const investment = await Apartment.findById({ _id: req.params.id });

  if (!investment) {
    res.status(404);
    throw new Error("Apartment does not exist");
  }
  const updatedApartment = await Apartment.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title,
      image,
      price,
      description,
    },
    { new: true }
  );
  res.status(200).json({ updatedApartment });
});

//PRIVATE/
// ADMIN
const DeleteApartment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const investment = await Apartment.findById({ _id: id });
  if (!investment) {
    res.status(404);
    throw new Error("Apartment not found");
  }
  await Apartment.findByIdAndDelete({ _id: req.params.id });
  res.status(200).json({ msg: "The Apartment has been successfully deleted" });
});

export { GetSingleApartment, GetAllApartment, UpdateApartment, DeleteApartment, CreateSingleApartment };
