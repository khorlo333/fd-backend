import mongoose, { Schema } from "mongoose";

type FoodShemaType = {
  foodName: string;
  price: string;
  image: string;
  ingredients: string;
  category: mongoose.Schema.Types.ObjectId;
};

const FoodShema: Schema = new Schema(
  {
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    ingredients: { type: String, required: true },
    category: {
      type: Schema.Types.ObjectId,
      ref: "FoodCategory",
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model<FoodShemaType>("Food", FoodShema);
