import express from "express";
import {
  getCategories,
  createCategory,
  getOneCategory,
} from "../controllers/category.js";

const categoryRouter = express.Router();

categoryRouter.get("/", getCategories); //get all categories
categoryRouter.post("/", createCategory); //create category
categoryRouter.get("/find/:id", getOneCategory); //get one category

export default categoryRouter;
