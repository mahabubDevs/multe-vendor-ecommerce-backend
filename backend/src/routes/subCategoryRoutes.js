import express from "express";
import { createSubCategory, deleteSubCategory, getAllSubCategory, getSubCategoryBySlug, updateSubCategory } from "../controllers/subCategoryController.js";




const subCategoryRoutes = express.Router();

subCategoryRoutes.post("/", createSubCategory);
subCategoryRoutes.get("/all", getAllSubCategory);
subCategoryRoutes.get("/:slug", getSubCategoryBySlug);
subCategoryRoutes.put("/:id", updateSubCategory );
subCategoryRoutes.delete("/:id", deleteSubCategory );



export default subCategoryRoutes;