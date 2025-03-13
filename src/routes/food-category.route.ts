import express from "express";
import {
  createFoodCategory,
  deleteFoodCategory,
  editFoodCategory,
  getFoodCategory,
} from "../controllers/food-category.controller";
const categoryRoute = express.Router();

categoryRoute.post("/", createFoodCategory);
categoryRoute.get("/", getFoodCategory);
categoryRoute.delete("/:foodCategoryId", deleteFoodCategory);
categoryRoute.put("/:foodCategoryId", editFoodCategory);

export default categoryRoute;
