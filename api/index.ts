import express, { Request, Response } from "express";
import connectToDatabase from "../lib/connectDB";
import userRouter from "../routers/user.router";
import "dotenv/config";
const app = express();

connectToDatabase();

app.get("/", async (req: Request, res: Response) => {
  res.status(200).send("welcome to the absolute shadow");
});

app.use("/users", userRouter);
// ===============================================================================================
// server settings
// ===============================================================================================

app.listen(process.env.PORT!, () => {
  console.log("================================");
  console.log("The server is online and ready !");
  console.log("================================");
});
