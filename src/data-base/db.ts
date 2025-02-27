import mongoose from "mongoose";
import { configDotenv } from "dotenv";

export const connectMongoDb = async () => {
  configDotenv();
  try {
    await mongoose.connect(process.env.MONGODB_URL || "");
    console.log("mongodb-tei amjilltai holbogdloo");
  } catch (error) {
    console.log("mongodb-tei holbogdoj chadsangui");
  }
};
