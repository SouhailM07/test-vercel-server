import { Document, Model, model, Schema } from "mongoose";

interface IUser extends Document {
  clerkId: string;
  favoriteItems: string[];
}

const userSchema = new Schema<IUser>({
  clerkId: { type: String, required: true },
  favoriteItems: [String],
});

let User: Model<IUser>;

try {
  User = model<IUser>("user");
} catch (error) {
  User = model<IUser>("user", userSchema);
}

export default User;
