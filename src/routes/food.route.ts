import express from "express";
import {
  createFood,
  deleteFood,
  editFood,
  getFood,
  getFoods,
} from "../controllers/food.controller";
const foodRoute = express.Router();

foodRoute.post("/", createFood);
foodRoute.get("/", getFoods);
foodRoute.delete("/:foodId", deleteFood);
foodRoute.put("/:foodId", editFood);

export default foodRoute;
