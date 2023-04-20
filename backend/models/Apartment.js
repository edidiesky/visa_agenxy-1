import mongoose from "mongoose";

const infoSchema = mongoose.Schema({
  bath: { type: Number },
  bed: { type: Number },
  size: { type: Number },
});
const ApartmentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "PLease add a Apartment name"],
    },
    image: {
      type: Array,
      required: [true, "PLease add the image for the Apartment"],
    },
    price: {
      type: Number,
      required: true,
    },
    info: [infoSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Apartment", ApartmentSchema);
