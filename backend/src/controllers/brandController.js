import expressAsyncHandler from "express-async-handler";
import {Brand} from "../models/brandModel.js"


//@desc Create a Brand
//@route /api/brand
//@access private


export const createBrand = expressAsyncHandler(async (req, res) => {
    try {
        const newBrand = await Brand.create(req.body);
        res.status(201).json({
            status: true,
            data: newBrand
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is brnad create  worn!",
            error: error.message,
        });
        
    }
})

//@desc Get All a Brand
//@route /api/brands
//@access public


export const getAllBrand = expressAsyncHandler(async (req, res) => {
    try {
        const brand = await Brand.find();
        res.status(201).json({
            status: true,
            data: brand
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is brand getAll  worn!",
            error: error.message,
        });
        
    }
})


//@desc Get  a Brand By Slug
//@route /api/brand/:slug
//@access public


export const getBrandBySlug = expressAsyncHandler(async (req, res) => {
    try {
        const brand = await Brand.findOne({slug: req.params.slug});
        res.status(201).json({
            status: true,
            data: brand
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is brand get  worn!",
            error: error.message,
        });
        
    }
})


//@desc update Brand 
//@route /api/brand/:id
//@access private


export const updateBrand = expressAsyncHandler(async (req, res) => {
    try {
        const brand = await Brand.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!brand) {
            res.status(500).json({
                message: "Somthing is brand find  worn!",
                error: error.message,
            });
        }
        res.status(201).json({
            status: true,
            data: brand
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is Brand Update  worn!",
            error: error.message,
        });
        
    }
})


//@desc Delete Brand 
//@route /api/brand/:id
//@access private


export const deleteBrand = expressAsyncHandler(async (req, res) => {
    try {
        const brand = await Brand.findByIdAndDelete(req.params.id);
        if (!brand) {
            res.status(500).json({
                message: "Somthing is brand find  worn!",
                error: error.message,
            });
        }
        res.status(201).json({
            status: true,
            message: "Brand Name Deleted success"
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is brand Update  worn!",
            error: error.message,
        });
        
    }
})