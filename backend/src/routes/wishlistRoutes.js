import express from "express";
import { createWishlist, deleteWishlist, getAllWishlist, getWishlistBySlug, updateWishlist } from "../controllers/wishlistController.js";





const wishlistRoutes = express.Router();

wishlistRoutes.post("/", createWishlist);
wishlistRoutes.get("/all", getAllWishlist);
wishlistRoutes.get("/:id", getWishlistBySlug);
wishlistRoutes.put("/:id", updateWishlist );
wishlistRoutes.delete("/:id", deleteWishlist );



export default wishlistRoutes;