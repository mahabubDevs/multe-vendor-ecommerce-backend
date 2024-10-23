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
  
        res.status(200).json({
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
        
        res.status(200).json({
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
        res.status(200).json({
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


//@desc Delete Order
//@route /api/order/
//@access private

export const deleteOrder = expressAsyncHandler(async (req, res) => {
    try {
        const order = new Order.findByIdAndDelete(req.params.id);
        
        if (!order) {
            return res.status(400).json({
                status: false,
                message: "Order delete not Found"
            })
        }
        res.status(200).json({
            status: true,
            message: "Order delete Successfully"
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Somthing is order delete don't show  worn!",
            error: error.message,
        });
        
    }
})

//@desc Update Order Status
//@route /api/order/
//@access private

export const updateOrderStatus = expressAsyncHandler(async (req, res) => {
    try {
        const { status } = req.body;
        const order = await Order.findByIdAndUpdate(req.params.id,{status},{new:true});
        
        if (!order) {
            return res.status(400).json({
                status: false,
                message: "Order delete not Found"
            })
        }
        res.status(200).json({
            status: true,
            data: order
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Somthing is order delete don't show  worn!",
            error: error.message,
        });
        
    }
})

//@desc handel Order cancalation  
//@route /api/order/
//@access private

export const handelOrderCantaltion = expressAsyncHandler(async (req, res) => {
    try {
        const { reason } = req.body;
        const order = await Order.findByIdAndUpdate(req.params.id,{status:"cancelled" , cancellation:{reason,createAt: new Date()}},{new:true});
        
        if (!order) {
            return res.status(400).json({
                status: false,
                message: "Order delete not Found"
            })
        }
        res.status(200).json({
            status: true,
            data: order
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Somthing is order delete don't show  worn!",
            error: error.message,
        });
        
    }
})

//@desc handel Order cancalation Return  
//@route /api/order/
//@access private

export const handelOrderReturn = expressAsyncHandler(async (req, res) => {
    try {
        const { reason } = req.body;
        const order = await Order.findByIdAndUpdate(req.params.id,{cancellation:{reason, status:"pending", createAt: new Date()}},{new:true});
        
        if (!order) {
            return res.status(400).json({
                status: false,
                message: "Order delete not Found"
            })
        }
        res.status(200).json({
            status: true,
            data: order
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Somthing is order delete don't show  worn!",
            error: error.message,
        });
        
    }
})

//@desc handel Order cancalation Return  Status
//@route /api/order/
//@access private

export const handelOrderReturnStatus = expressAsyncHandler(async (req, res) => {
    try {
        const { status } = req.body;
        const order = await Order.findOneAndUpdate({ _id: req.params.id , "return.status":"pending"},{"return.status": status},{new:true});
        
        if (!order) {
            return res.status(400).json({
                status: false,
                message: "Order not found and return alrady proceed"
            })
        }
        res.status(200).json({
            status: true,
            data: order
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Somthing is order delete don't show  worn!",
            error: error.message,
        });
        
    }
})