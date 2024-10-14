import express from "express";
import { createVendor, deleteVendor, getVendors, getVendorsBySlug, updateVendor } from "../controllers/vendorController.js";
import { protect } from "../middlewares/authMiddlewares.js";


const vendorRouter = express.Router();

vendorRouter.post("/",protect,createVendor);
vendorRouter.get("/all",protect,getVendors);
vendorRouter.get("/:slug",getVendorsBySlug);
vendorRouter.put("/:id",updateVendor);
vendorRouter.delete("/:id",deleteVendor);

export default vendorRouter;