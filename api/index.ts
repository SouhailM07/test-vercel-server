import express, { Request, Response } from "express";
import connectToDatabase from "../lib/connectDB";
import "dotenv/config";
const app = express();

app.get("/", async (req: Request, res: Response) => {
  res.status(200).send("welcome to the absolute shadow");
});
connectToDatabase();
// ===============================================================================================
// server settings
// ===============================================================================================

app.listen(process.env.PORT!, () => {
  console.log("================================");
  console.log("The server is online and ready !");
  console.log("================================");
});
