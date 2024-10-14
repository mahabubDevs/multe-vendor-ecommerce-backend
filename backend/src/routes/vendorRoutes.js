import express from "express";
import { createVendor, getVendors, getVendorsBySlug } from "../controllers/vendorController.js";
import { protect } from "../middlewares/authMiddlewares.js";


const vendorRouter = express.Router();

vendorRouter.post("/",protect,createVendor);
vendorRouter.get("/all",protect,getVendors);
vendorRouter.get("/:slug",getVendorsBySlug);

export default vendorRouter;