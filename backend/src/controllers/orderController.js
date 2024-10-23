import expressAsyncHandler from "express-async-handler";
import {Order} from "../models/orderModel.js"


//@desc Create a Order
//@route /api/order
//@access private

export const createOrder = expressAsyncHandler(async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json({
            status: true,
            data: order
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is order create  worn!",
            error: error.message,
        });
        
    }
})


//@desc Get  a All Order
//@route /api/order/
//@access private

export const getAllOrder = expressAsyncHandler(async (req, res) => {
    try {
        const orders = new Order.find().populate("user items.product");
  
        res.status(201).json({
            status: true,
            data: orders
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is order don't show  worn!",
            error: error.message,
        });
        
    }
})


//@desc Get  a single Order
//@route /api/order/
//@access private

export const getSingleOrder = expressAsyncHandler(async (req, res) => {
    try {
        const order = new Order.findById(req.params.id).populate("user items.product");
        
        res.status(201).json({
            status: true,
            data: order
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is order don't show  worn!",
            error: error.message,
        });
        
    }
})


//@desc update Order
//@route /api/order/
//@access private

export const updateOrder = expressAsyncHandler(async (req, res) => {
    try {
        const order = new Order.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        
        if (!order) {
            return res.status(400).json({
                status: false,
                message: "Order not Found"
            })
        }
        res.status(201).json({
            status: true,
            data: order
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Somthing is order don't show  worn!",
            error: error.message,
        });
        
    }
})