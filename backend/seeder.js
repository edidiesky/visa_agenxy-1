import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import connectDb from "./db/connect.js";
import mongoose from "mongoose";

import { visaData } from "./data/visaData.js";
import Visa from "./models/Visa.js";
import { apartmentData } from "./data/apartmentData.js";
import Apartment from "./models/Apartment.js";

mongoose.connect(
  process.env.MONGO_URl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("mongo has been connected");
  }
);

const importData = async () => {
  try {
    await Visa.insertMany(visaData);
    await Apartment.insertMany(apartmentData);
    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
