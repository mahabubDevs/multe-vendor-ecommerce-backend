import expressAsyncHandler from "express-async-handler";
import {Review} from "../models/reviewModel.js"


//@desc Create a Review
//@route /api/review
//@access private


export const createReview = expressAsyncHandler(async (req, res) => {
    try {
        const newReview = await Review.create(req.body);
        res.status(201).json({
            status: true,
            data: newReview
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is review create  worn!",
            error: error.message,
        });
        
    }
})

//@desc Get All a Review
//@route /api/review
//@access public


export const getAllReview = expressAsyncHandler(async (req, res) => {
    try {
        const review = await Review.find();
        res.status(201).json({
            status: true,
            data: review
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is Review getAll  worn!",
            error: error.message,
        });
        
    }
})


//@desc Get  a Review By Id
//@route /api/review/:id
//@access public


export const getReviewById = expressAsyncHandler(async (req, res) => {
    try {
        const review = await Review.findOne( {id:req.params.id});
        res.status(201).json({
            status: true,
            data: review
           
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Somthing is review get  worn!",
            error: error.message,
        });
        
    }
})


//@desc update Review 
//@route /api/review/:id
//@access private


export const updateReview = expressAsyncHandler(async (req, res) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!review) {
            res.status(500).json({
                message: "Somthing is review find  worn!",
                error: error.message,
            });
        }
        res.status(201).json({
            status: true,
            data: review
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is Review Update  worn!",
            error: error.message,
        });
        
    }
})


//@desc Delete Review 
//@route /api/review/:id
//@access private


export const deleteReview = expressAsyncHandler(async (req, res) => {
    try {
        const review = await Review.findByIdAndDelete(req.params.id);
        if (!review) {
            res.status(500).json({
                message: "Somthing is review find  worn!",
                error: error.message,
            });
        }
        res.status(201).json({
            status: true,
            message: "Review Name Deleted success"
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is review Update  worn!",
            error: error.message,
        });
        
    }
})

//@desc Review is approved 
//@route /api/review/approved
//@access private


export const approvedReview = expressAsyncHandler(async (req, res) => {
    try {
        const review = await Review.findByIdAndUdpate(req.params.id,{isApproved: req.body.isApproved}, {new:true});
        if (!review) {
            res.status(500).json({
                message: "Somthing is review find  worn!",
                error: error.message,
            });
        }
        res.status(201).json({
            status: true,
            message: "Review approved success"
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is review Update  worn!",
            error: error.message,
        });
        
    }
})