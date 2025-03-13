import { Request, Response } from "express";
import foodCategoryModel from "../models/food-category.model";

export const createFoodCategory = async (req: Request, res: Response) => {
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
export const getFoodCategory = async (req: Request, res: Response) => {
  try {
    const categories = await foodCategoryModel.find();
    res.status(200).json({ message: "Successfully get category", categories });
  } catch (error) {
    res.status(500).json({ message: "Error in get category", error });
  }
};
export const deleteFoodCategory = async (req: Request, res: Response) => {
  const { foodCategoryId } = req.params;
  const deleteReq = req.body;
  try {
    const deleteCategory = await foodCategoryModel.deleteOne(
      { _id: foodCategoryId },
      deleteReq
    );
    res
      .status(200)
      .json({ message: "Successfully deleted category", data: deleteCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in  deleteFoodCategory", error });
  }
};
export const editFoodCategory = async (req: Request, res: Response) => {
  const { foodCategoryId } = req.params;
  const updateReq = req.body;
  try {
    const updateCategory = await foodCategoryModel.updateOne(
      { _id: foodCategoryId },
      updateReq
    );
    res
      .status(200)
      .json({ message: "Successfully updated category", data: updateCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in  updateCategory", error });
  }
};
