import express from "express";
import { createProduct, deleteProduct, getAllProduct, getProductBySlug, updateProduct } from "../controllers/productController.js";



const productRoutes = express.Router();

productRoutes.post("/", createProduct);
productRoutes.get("/all", getAllProduct);
productRoutes.get("/:slug", getProductBySlug);
productRoutes.put("/:id", updateProduct );
productRoutes.delete("/:id", deleteProduct );



export default productRoutes;