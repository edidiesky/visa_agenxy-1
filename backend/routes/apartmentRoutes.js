import express from "express";
const router = express.Router();
import {
  GetSingleApartment,
  GetAllApartment,
  UpdateApartment,
  DeleteApartment,
  CreateSingleApartment,
} from "../controllers/apartmentController.js";
import {
  adminMiddleware,
  authMiddleware,
} from "../middleware/authentication.js";

router
  .route("/")
  .get(GetAllApartment)
  .post(authMiddleware, adminMiddleware, CreateSingleApartment);
router.route("/:id").get(GetSingleApartment);
router
  .route("/admin/:id")
  .delete(authMiddleware, adminMiddleware, DeleteApartment)
  .put(authMiddleware, adminMiddleware, UpdateApartment);

export default router;
