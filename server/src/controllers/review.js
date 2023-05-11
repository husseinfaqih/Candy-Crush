import Review from "../models/Review.js";
import Product from "../models/Product.js";
import { logError } from "../util/logging.js";

//GET ALL REVIEWS FOR A PRODUCT
export const getReviews = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) throw new Error("Product not found");
    const reviews = await Review.find({ product: product._id });
    res.status(200).json({ success: true, result: reviews });
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: "Unable to get reviews, try again later" });
  }
};

//CREATE REVIEW
export const createReview = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId.trim());

    if (!product) throw new Error("Product not found");

    const review = new Review({
      reviewerName: req.body.reviewerName,
      rating: req.body.rating,
      comment: req.body.comment,
      product: product._id,
    });

    await review.save();
    res.status(200).json({ success: true, result: review });
  } catch (e) {
    res.status(500).json({
      success: false,
      msg: "Unable to create Review, try again later",
      error: e,
    });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.reviewId.trim());
    if (!review) throw new Error("Review not found");
    res
      .status(200)
      .json({ success: true, result: "Review deleted successfully" });
  } catch (e) {
    res.status(500).json({
      success: false,
      msg: "Unable to delete Review, try again later",
    });
  }
};
