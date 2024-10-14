import expressAsyncHandler from "express-async-handler";
import { SubCategory } from "../models/subCategoryModel.js";


//@desc Create a SubCategory
//@route /api/subcategory
//@access private


export const createSubCategory = expressAsyncHandler(async (req, res) => {
    try {
        const newSubCategory = await SubCategory.create(req.body);
        res.status(201).json({
            status: true,
            data: newSubCategory
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is brnad create  worn!",
            error: error.message,
        });
        
    }
})

//@desc Get All a SubCategory
//@route /api/subcategorys
//@access public


export const getAllSubCategory = expressAsyncHandler(async (req, res) => {
    try {
        const subcategory = await SubCategory.find();
        res.status(201).json({
            status: true,
            data: subcategory
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is subcategory getAll  worn!",
            error: error.message,
        });
        
    }
})


//@desc Get  a SubCategory By Slug
//@route /api/subcategory/:slug
//@access public


export const getSubCategoryBySlug = expressAsyncHandler(async (req, res) => {
    try {
        const subcategory = await SubCategory.findOne({slug: req.params.slug});
        res.status(201).json({
            status: true,
            data: subcategory
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is subcategory get  worn!",
            error: error.message,
        });
        
    }
})


//@desc update SubCategory 
//@route /api/subcategory/:id
//@access private


export const updateSubCategory = expressAsyncHandler(async (req, res) => {
    try {
        const subcategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!subcategory) {
            res.status(500).json({
                message: "Somthing is subcategory find  worn!",
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


//@desc Delete SubCategory 
//@route /api/subcategory/:id
//@access private


export const deleteSubCategory = expressAsyncHandler(async (req, res) => {
    try {
        const subcategory = await SubCategory.findByIdAndDelete(req.params.id);
        if (!subcategory) {
            res.status(500).json({
                message: "Somthing is subcategory find  worn!",
                error: error.message,
            });
        }
        res.status(201).json({
            status: true,
            message: "Product Deleted success"
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is subcategory Update  worn!",
            error: error.message,
        });
        
    }
})