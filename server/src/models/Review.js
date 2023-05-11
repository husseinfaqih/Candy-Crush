import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    reviewerName: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    //TO CONNECT A REVIEW WITH ITS PRODUCT
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  { timestamps: true }
);

const Review = mongoose.model("review", reviewSchema);

export default Review;
