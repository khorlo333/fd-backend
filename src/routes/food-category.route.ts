import express from "express";
import { createFoodCategory } from "../controllers/food-category.controller";
const categoryRoute = express.Router();

categoryRoute.post("/", createFoodCategory);

export default categoryRoute;
