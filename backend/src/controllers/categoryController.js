import expressAsyncHandler from "express-async-handler";
import { Category } from "../models/categoryModel.js";


//@desc Create a Category
//@route /api/category
//@access private


export const createCategory = expressAsyncHandler(async (req, res) => {
    try {
        const newCategory = await Category.create(req.body);
        res.status(201).json({
            status: true,
            data: newCategory
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is brnad create  worn!",
            error: error.message,
        });
        
    }
})

//@desc Get All a Category
//@route /api/categorys
//@access public


export const getAllCategory = expressAsyncHandler(async (req, res) => {
    try {
        const category = await Category.find();
        res.status(201).json({
            status: true,
            data: category
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is category getAll  worn!",
            error: error.message,
        });
        
    }
})


//@desc Get  a Category By Slug
//@route /api/category/:slug
//@access public


export const getCategoryBySlug = expressAsyncHandler(async (req, res) => {
    try {
        const category = await Category.findOne({slug: req.params.slug});
        res.status(201).json({
            status: true,
            data: category
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is category get  worn!",
            error: error.message,
        });
        
    }
})


//@desc update Category 
//@route /api/category/:id
//@access private


export const updateCategory = expressAsyncHandler(async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!category) {
            res.status(500).json({
                message: "Somthing is category find  worn!",
                error: error.message,
            });
        }
        res.status(201).json({
            status: true,
            data: category
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is product Update  worn!",
            error: error.message,
        });
        
    }
})


//@desc Delete Category 
//@route /api/category/:id
//@access private


export const deleteCategory = expressAsyncHandler(async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) {
            res.status(500).json({
                message: "Somthing is category find  worn!",
                error: error.message,
            });
        }
        res.status(201).json({
            status: true,
            message: "Product Deleted success"
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is category Update  worn!",
            error: error.message,
        });
        
    }
})