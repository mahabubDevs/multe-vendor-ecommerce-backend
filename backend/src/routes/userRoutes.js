import express from "express";
import { deleteUserProfile, getAllProfile, loginUser, profile, registerUser, updatProfile } from "../controllers/userController.js";
import { authorize, protect } from "../middlewares/authMiddlewares.js";

const userRoutes = express.Router();

userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);
userRoutes.get("/profile",protect, profile);
userRoutes.put("/profile",protect, updatProfile);
userRoutes.get("/profiles", protect, authorize("admin"), getAllProfile);
userRoutes.delete("/:id",protect, deleteUserProfile);


export default userRoutes;