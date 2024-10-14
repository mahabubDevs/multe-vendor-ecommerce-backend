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
//@route /api/all
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
//@route /api/vendor/:storename
//@access public


export const getVendorsBySlug = expressAsyncHandler(async (req, res) => {
    try {
        const Vendors = await Vendor.findOne({ slug: req.params.slug}).populate("user","-password");
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


//@desc Update a Vendor 
//@route /api/vendor/:id
//@access public


export const updateVendor = expressAsyncHandler(async (req, res) => {
    try {
        const updateVendors = await Vendor.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!updateVendors) {
            res.status(500).json({ 
                message: "Somthing is vendor update  worn!",
                error: error.message,
            });
        }
        res.status(201).json({
            status: true,
            data: updateVendors
        })
    } catch (error) {
        res.status(500).json({ 
            message: "Somthing is vendor create  worn!",
            error: error.message,
        });
        
    }
})

//@desc Delete a Vendor 
//@route /api/vendor/:id
//@access public


export const deleteVendor = expressAsyncHandler(async (req, res) => {
    try {
        const deleteVendors = await Vendor.findByIdAndDelete(req.params.id,);
        if (!deleteVendors) {
            res.status(500).json({ 
                message: "Somthing is vendor update  worn!",
                error: error.message,
            });
        }
        res.status(201).json({
            status: true,
            data: deleteVendors
        })
    } catch (error) {
        res.status(500).json({ 
            message: "Somthing is vendor create  worn!",
            error: error.message,
        });
        
    }
})

