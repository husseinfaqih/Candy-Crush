import Product from "../models/Product.js";
import { logError } from "../util/logging.js";

//GET ALL PRODUCTS
export const getProducts = async (req, res) => {
  try {
    const page = req.query.page || 0;
    const productPerPage = 5;

    const sortBy = req.query.sortBy || "productName";
    const sortOrder = req.query.sortOrder === "-1" ? -1 : 1;
    const sortObj = {};
    sortObj[sortBy] = sortOrder;

    const products = await Product.find()
      .sort(sortObj)
      .skip(page * productPerPage)
      .limit(productPerPage);
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
