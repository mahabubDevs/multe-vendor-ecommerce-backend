import express from "express";
import { createBrand, deleteBrand, getAllBrand, getBrandBySlug, updateBrand } from "../controllers/brandController.js";




const brandRoutes = express.Router();

brandRoutes.post("/", createBrand);
brandRoutes.get("/all", getAllBrand);
brandRoutes.get("/:slug", getBrandBySlug);
brandRoutes.put("/:id", updateBrand );
brandRoutes.delete("/:id", deleteBrand );



export default brandRoutes;