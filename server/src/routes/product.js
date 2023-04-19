import express from "express";
import {
  getProducts,
  createProduct,
  getOneProduct,
} from "../controllers/product.js";

const productRouter = express.Router();

productRouter.get("/", getProducts); //get all products
productRouter.post("/", createProduct); //create product
productRouter.get("/find/:id", getOneProduct); //get one product

export default productRouter;
