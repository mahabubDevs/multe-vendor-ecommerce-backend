import express from "express";
import { createVendor, getVendors } from "../controllers/vendorController.js";
import { protect } from "../middlewares/authMiddlewares.js";


const vendorRouter = express.Router();

vendorRouter.post("/",protect,createVendor);
vendorRouter.get("/all",protect,getVendors);

export default vendorRouter;