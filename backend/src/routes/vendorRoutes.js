import express from "express";
import { createVendor } from "../controllers/vendorController.js";
import { protect } from "../middlewares/authMiddlewares.js";


const vendorRouter = express.Router();

vendorRouter.post("/",protect,createVendor);

export default vendorRouter;