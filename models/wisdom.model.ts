import { Document, Model, Schema, model } from "mongoose";

interface IWisdom extends Document {
  wisdom: string;
}

const wisdomSchema: Schema<IWisdom> = new Schema({
  wisdom: { type: String, required: true, unique: true },
});

let Wisdom: Model<IWisdom>;

try {
  Wisdom = model<IWisdom>("wisdom");
} catch (error) {
  Wisdom = model<IWisdom>("wisdom", wisdomSchema);
}

export default Wisdom;
