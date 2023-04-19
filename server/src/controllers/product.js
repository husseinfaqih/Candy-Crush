import Product from "../models/Product.js";
import { logError } from "../util/logging.js";

//GET ALL PRODUCTS
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, result: products });
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: "Unable to get products, try again later" });
  }
};

//GET ONE PRODUCT
export const getOneProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json({ success: true, result: product });
  } catch (e) {
    res.status(500).json({
      success: false,
      msg: "Unable to get this product, try again later",
    });
  }
};

//CREATE PRODUCT
export const createProduct = async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    await newProduct.save();

    res.status(200).json({ success: true, result: newProduct });
  } catch (e) {
    res.status(500).json({
      success: false,
      msg: "Unable to create product, try again later",
    });
  }
};
