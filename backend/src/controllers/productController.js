import expressAsyncHandler from "express-async-handler";
import {Product} from "../models/productModel.js"


//@desc Create a Product
//@route /api/product
//@access private


export const createProduct = expressAsyncHandler(async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json({
            status: true,
            data: newProduct
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is product create  worn!",
            error: error.message,
        });
        
    }
})

//@desc Get All a Product
//@route /api/products
//@access public


export const getAllProduct = expressAsyncHandler(async (req, res) => {
    try {
        const product = await Product.find();
        res.status(201).json({
            status: true,
            data: product
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is vendor getAll  worn!",
            error: error.message,
        });
        
    }
})


//@desc Get  a Product By Slug
//@route /api/products/:slug
//@access public


export const getProductBySlug = expressAsyncHandler(async (req, res) => {
    try {
        const product = await Product.findOne({slug: req.params.slug});
        res.status(201).json({
            status: true,
            data: product
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is product get  worn!",
            error: error.message,
        });
        
    }
})


//@desc update Product 
//@route /api/products/:id
//@access private


export const updateProduct = expressAsyncHandler(async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            res.status(500).json({
                message: "Somthing is product find  worn!",
                error: error.message,
            });
        }
        res.status(201).json({
            status: true,
            data: product
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is product Update  worn!",
            error: error.message,
        });
        
    }
})


//@desc Delete Product 
//@route /api/products/:id
//@access private


export const deleteProduct = expressAsyncHandler(async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            res.status(500).json({
                message: "Somthing is product find  worn!",
                error: error.message,
            });
        }
        res.status(201).json({
            status: true,
            message: "Product Deleted success"
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is product Update  worn!",
            error: error.message,
        });
        
    }
})