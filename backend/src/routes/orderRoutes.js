import express from "express";
import { createOrder, deleteOrder, getAllOrder, getSingleOrder, handelOrderCantaltion, handelOrderReturn, handelOrderReturnStatus, updateOrder, updateOrderStatus } from "../controllers/orderController.js";

const orderRoutes = express.Router();


orderRoutes.post("/", createOrder);
orderRoutes.get("/", getAllOrder);
orderRoutes.get("/:id", getSingleOrder );
orderRoutes.put("/:id", updateOrder);
orderRoutes.delete("/:id", deleteOrder);
orderRoutes.patch("/:id/status", updateOrderStatus);
orderRoutes.patch("/:id/cancle", handelOrderCantaltion);
orderRoutes.patch("/:id/return", handelOrderReturn);
orderRoutes.patch("/:id/return/status", handelOrderReturnStatus);


export default orderRoutes;