import express from "express";

import { approvedReview, createReview, deleteReview, getAllReview, getReviewById, updateReview } from "../controllers/reviewController.js";




const reviewRoutes = express.Router();

reviewRoutes.post("/", createReview);
reviewRoutes.get("/all", getAllReview);
reviewRoutes.get("/:id", getReviewById);
reviewRoutes.put("/:id", updateReview );
reviewRoutes.delete("/:id", deleteReview );
reviewRoutes.put("/approved", approvedReview );



export default reviewRoutes;