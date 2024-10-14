import express from "express";
import { createCategory, deleteCategory, getAllCategory, getCategoryBySlug, updateCategory } from "../controllers/categoryController.js";





const categoryRoutes = express.Router();

categoryRoutes.post("/", createCategory);
categoryRoutes.get("/all", getAllCategory);
categoryRoutes.get("/:slug", getCategoryBySlug);
categoryRoutes.put("/:id", updateCategory );
categoryRoutes.delete("/:id", deleteCategory );



export default categoryRoutes;