import express from "express";
const router = express.Router();
import {
  GetAllCart,
  UpdateCart,
  DeleteCart,
  CreateCart,
} from "../controllers/cartControllers.js";
router.route("/").get(GetAllCart).post(CreateCart);
router.route("/:id").delete(DeleteCart).put(UpdateCart);

export default router;
