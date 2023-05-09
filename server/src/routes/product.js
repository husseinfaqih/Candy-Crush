import express from "express";
import {
  getProducts,
  createProduct,
  getOneProduct,
  getProductsByCategory,
  updateRating,
} from "../controllers/product.js";

const productRouter = express.Router();

productRouter.get("/", getProducts); //get all products
productRouter.post("/", createProduct); //create product
productRouter.get("/find/:id", getOneProduct); //get one product
productRouter.get("/:category", getProductsByCategory); //get all products one category

productRouter.put("/rate/:id", updateRating); //get one product

export default productRouter;
