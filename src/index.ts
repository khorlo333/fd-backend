import express from "express";
import { configDotenv } from "dotenv";
import { connectMongoDb } from "./data-base/db";
import categoryRoute from "./routes/food-category.route";
import BodyParser from "body-parser";
import bodyParser from "body-parser";
configDotenv();
connectMongoDb();

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send("ffdsf");
});
app.use("/category", categoryRoute);

app.listen(port, () => {
  console.log(`new server starts at: ${port}`);
});
