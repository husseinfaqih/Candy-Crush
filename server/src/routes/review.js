import express from "express";
import {
  getReviews,
  createReview,
  deleteReview,
} from "../controllers/review.js";

const reviewsRouter = express.Router();

reviewsRouter.get("/:productId", getReviews); //get all reviews for a product
reviewsRouter.post("/:productId", createReview); //create review  for a product
reviewsRouter.delete("/:productId/delete/:reviewId", deleteReview); //create a review for a product

export default reviewsRouter;
