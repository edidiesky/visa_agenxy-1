import express from "express";
const router = express.Router();
import {
  GetSingleVisa,
  GetAllVisa,
  UpdateVisa,
  DeleteVisa,
  CreateSingleVisa,
} from "../controllers/visaController.js";
import {
  adminMiddleware,
  authMiddleware,
} from "../middleware/authentication.js";

router
  .route("/")
  .get(GetAllVisa)
  .post(authMiddleware, adminMiddleware, CreateSingleVisa);
router.route("/:id").get(GetSingleVisa);
router
  .route("/admin/:id")
  .delete(authMiddleware, adminMiddleware, DeleteVisa)
  .put(authMiddleware, adminMiddleware, UpdateVisa);

export default router;
