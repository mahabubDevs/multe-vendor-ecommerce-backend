import expressAsyncHandler from "express-async-handler";
import {Vendor} from "../models/vendorModel.js";


//@desc Create a Vendor
//@route /api/vendor
//@access private


export const createVendor = expressAsyncHandler(async (req, res) => {
    try {
        const newVendor = await Vendor.create(req.body);
        res.status(201).json({
            status: true,
            data: newVendor
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is vendor create  worn!",
            error: error.message,
        });
        
    }
})

