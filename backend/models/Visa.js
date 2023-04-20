import mongoose from "mongoose";

const VisaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "PLease add a Visa title"],
    },
    image: {
      type: String,
      required: [true, "PLease add the image for the Visa"],
    },
    description: {
      type: String,
      required: [true, "PLease add a Visa description"],
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Visa", VisaSchema);
