import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    categoryName: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Category = mongoose.model("category", categorySchema);

export default Category;
