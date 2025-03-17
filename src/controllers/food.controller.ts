import { Request, Response } from "express";
import foodModel from "../models/food.model";

export const createFood = async (req: Request, res: Response) => {
  try {
    const foodData = req.body;
    console.log(foodData);
    const newDish = await foodModel.create(foodData);
    res.status(200).json({ message: "Successfully created new dish", newDish });
  } catch (error) {
    res.status(500).json({ message: "Error in createFood", error });
  }
};
export const getFood = async (req: Request, res: Response) => {
  try {
    const { foodId } = req.params;
    const food = await foodModel.findById(foodId);
    res.status(200).json({ message: "Successfully get food", food });
  } catch (error) {
    res.status(500).json({ message: "Error in get food", error });
  }
};
export const getFoods = async (req: Request, res: Response) => {
  try {
    const getFood = await foodModel.find().populate("category");
    res.status(200).json({ message: "Successfully get dish", getFood });
  } catch (error) {
    res.status(500).json({ message: "Error in get dish", error });
  }
};
export const deleteFood = async (req: Request, res: Response) => {
  const { foodId } = req.params;
  const deleteReq = req.body;
  try {
    const deleteFood = await foodModel.deleteOne({ _id: foodId }, deleteReq);
    res
      .status(200)
      .json({ message: "Successfully deleted dish", data: deleteFood });
  } catch (error) {
    res.status(500).json({ message: "Error in  deleteFood", error });
  }
};
export const editFood = async (req: Request, res: Response) => {
  const { foodId } = req.params;
  const updateReq = req.body;
  try {
    const updateFood = await foodModel.updateOne({ _id: foodId }, updateReq);
    res
      .status(200)
      .json({ message: "Successfully updated dish", data: updateFood });
  } catch (error) {
    res.status(500).json({ message: "Error in  updateFood", error });
  }
};
