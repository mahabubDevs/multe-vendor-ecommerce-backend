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


//@desc Get a Vendor
//@route /api/vendors
//@access public


export const getVendors = expressAsyncHandler(async (req, res) => {
    try {
        const Vendors = await Vendor.find().populate("user");
        res.status(201).json({
            status: true,
            data: Vendors
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is vendor create  worn!",
            error: error.message,
        });
        
    }
})


//@desc Get a Vendor by slug
//@route /api/vendors
//@access public


export const getVendorsBySlug = expressAsyncHandler(async (req, res) => {
    try {
        const Vendors = await Vendor.findOne({ slug: req.params.slug});
        res.status(201).json({
            status: true,
            data: Vendors
        })
    } catch (error) {
        res.status(500).json({ 
            message: "Somthing is vendor create  worn!",
            error: error.message,
        });
        
    }
})

