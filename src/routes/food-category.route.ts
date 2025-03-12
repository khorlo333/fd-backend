import express from "express";
import {
  createFoodCategory,
  deleteFoodCategory,
  getFoodCategory,
} from "../controllers/food-category.controller";
const categoryRoute = express.Router();

categoryRoute.post("/", createFoodCategory);
categoryRoute.get("/", getFoodCategory);
categoryRoute.delete("/:foodCategoryId", deleteFoodCategory);

export default categoryRoute;
