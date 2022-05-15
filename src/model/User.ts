import mongoose from "mongoose";
import { string } from "yup";

export interface UserDocument extends mongoose.Document {
    email: String;
    name: String;
    last_name: String;
    password: String;
    createdAt: String;
    updatedAt: String
}   

const UserSchema = new mongoose.Schema(
    {
      email: { type: String, required: true, unique: true },
      name: { type: String, required: true },
      last_name: {type: String, required: true},
      password: { type: String, required: true },
      createdAt: {type: String, required: true},
    }
  );


export default mongoose.model('User', UserSchema)