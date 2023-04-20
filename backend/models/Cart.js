import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "PLease add a Cart name"],
    },
    image: {
      type: Array,
      required: [true, "PLease add the image for the Cart"],
    },
    description: {},
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
    },
    subtotal: {
      type: Number,
    },
    tax: {
      type: Number,
    },
    total: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Cart", CartSchema);
