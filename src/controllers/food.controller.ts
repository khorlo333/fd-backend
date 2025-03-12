import { Request, Response } from "express";
import foodCategoryModel from "../models/food-category.model";

export const createFood = async (req: Request, res: Response) => {
  try {
    const categoryData = req.body;
    console.log(categoryData);
    const newCategory = await foodCategoryModel.create(categoryData);
    res
      .status(200)
      .json({ message: "Successfully created new category", newCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in createFoodCategory", error });
  }
};
export const getFood = async (req: Request, res: Response) => {
  try {
    const categories = await foodCategoryModel.find();
    res.status(200).json({ message: "Successfully get category", categories });
  } catch (error) {
    res.status(500).json({ message: "Error in get category", error });
  }
};
