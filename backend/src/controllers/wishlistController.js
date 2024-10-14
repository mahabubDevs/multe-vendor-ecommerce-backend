import expressAsyncHandler from "express-async-handler";
import { Wishlist } from "../models/wishlistModel.js";


//@desc Create a Wishlist
//@route /api/wishlist
//@access private


export const createWishlist = expressAsyncHandler(async (req, res) => {
    try {
        const newWishlist = await Wishlist.create(req.body);
        res.status(201).json({
            status: true,
            data: newWishlist
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is brnad create  worn!",
            error: error.message,
        });
        
    }
})

//@desc Get All a Wishlist
//@route /api/wishlists
//@access public


export const getAllWishlist = expressAsyncHandler(async (req, res) => {
    try {
        const wishlist = await Wishlist.find();
        res.status(201).json({
            status: true,
            data: wishlist
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is wishlist getAll  worn!",
            error: error.message,
        });
        
    }
})


//@desc Get  a Wishlist By Slug
//@route /api/wishlist/:id
//@access public


export const getWishlistBySlug = expressAsyncHandler(async (req, res) => {
    try {
        const wishlist = await Wishlist.findById(req.params.id);
        res.status(201).json({
            status: true,
            data: wishlist
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is wishlist get  worn!",
            error: error.message,
        });
        
    }
})


//@desc update Wishlist 
//@route /api/wishlist/:id
//@access private


export const updateWishlist = expressAsyncHandler(async (req, res) => {
    try {
        const wishlist = await Wishlist.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!wishlist) {
            res.status(500).json({
                message: "Somthing is wishlist find  worn!",
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


//@desc Delete Wishlist 
//@route /api/wishlist/:id
//@access private


export const deleteWishlist = expressAsyncHandler(async (req, res) => {
    try {
        const wishlist = await Wishlist.findByIdAndDelete(req.params.id);
        if (!wishlist) {
            res.status(500).json({
                message: "Somthing is wishlist find  worn!",
                error: error.message,
            });
        }
        res.status(201).json({
            status: true,
            message: "Product Deleted success"
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is wishlist Update  worn!",
            error: error.message,
        });
        
    }
})