import mongoose, { Schema } from "mongoose";

type FoodCategoryShemaType = {
  categoryName: string;
};

const FoodCategoryShema: Schema = new Schema(
  {
    categoryName: { type: String, required: true },
  },
  { timestamps: true }
);
export default mongoose.model<FoodCategoryShemaType>(
  "FoodCategory",
  FoodCategoryShema
);
