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

//GET PRODUCTS CERTAIN CATEGORY WITH FILTERING
export const getProductsByCategory = async (req, res) => {
  try {
    const category = req.params.category;

    const sortBy = req.query.sortBy || "productName";
    const sortOrder = req.query.sortOrder === "-1" ? -1 : 1;
    const sortObj = {};
    sortObj[sortBy] = sortOrder;

    const minPrice = req.query.minPrice || 0;
    const maxPrice = req.query.maxPrice || Infinity;
    const onSale = req.query.onSale || false;
    const inStock = req.query.inStock || false;

    const filter = {
      price: { $gte: minPrice, $lte: maxPrice },
    };

    if (inStock === "true") {
      filter.levelOfInventory = { $gt: 0 };
    }

    if (onSale === "true") {
      filter.onSale = { $in: [true] };
    }

    if (category !== "all") {
      filter.category = category;
    }

    const products = await Product.find(filter).sort(sortObj);

    res.status(200).json({ success: true, result: products });
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: "Unable to get products, try again later" });
  }
};

//UPDATE PRODUCT RATING
export const updateRating = async (req, res) => {
  try {
    const rating = req.query.rating;
    const product = await Product.findByIdAndUpdate(req.params.id, {
      rate: rating,
    });
    res.status(200).json({ success: true, result: product });
  } catch (e) {
    res.status(500).json({
      success: false,
      msg: "Unable to get this product, try again later",
    });
  }
};
