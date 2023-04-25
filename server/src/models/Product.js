import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true, unique: true },
    levelOfInventory: { type: Number, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    category: { type: String, required: true },
    rate: { type: Number, required: true },
    onSale: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("product", productSchema);

export default Product;
