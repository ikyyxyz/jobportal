import express from "express";
import userAuth from "../middlewares/authMiddleware.js";
import {
  getUser,
  saveJobById,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

// GET user
router.post("/get-user", userAuth, getUser);

// UPDATE USER || PUT
router.put("/update-user", userAuth, updateUser);

// POST Job wishlist
router.post("/add-wishlist", userAuth, saveJobById);

export default router;
