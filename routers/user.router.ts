import { Router, Request, Response } from "express";
import User from "../models/user.model";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  let users = await User.find({});
  res.status(200).send(users);
});

export default router;
