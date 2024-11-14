import { Document, model, Schema, Model } from "mongoose";

interface IBook extends Document {
  img: { imgUrl: string; imgName: string };
  name: string;
  description: string;
  likes: any;
  dislikes: any;
  categories: string[];
}

const bookSchema = new Schema<IBook>({
  img: { type: { imgUrl: String, imgName: String }, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  categories: [String],
  likes: { type: Schema.Types.Mixed, default: [] },
  dislikes: { type: Schema.Types.Mixed, default: [] },
});

let Book: Model<IBook>;

try {
  Book = model<IBook>("book");
} catch (error) {
  Book = model<IBook>("book", bookSchema);
}

export default Book;
