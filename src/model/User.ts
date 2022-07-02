import mongoose from "mongoose";
import validator from "validator";
import { string } from "yup";

export interface UserDocument extends mongoose.Document {
    email: String;
    name: String;
    last_name: String;
    password: String;
    type_user: String,
    createdAt: String;
    updatedAt: String;
}   

const UserSchema = new mongoose.Schema(
    {
      email: { 
        type: String, 
        required: [true, 'Please, provide email'],
        validate: {
          validator: validator.isEmail,
          message: 'Please provide a valid email'
        },
        unique: true
      },
      name: { 
        type: String, 
        required: [true, 'Please, provide name']
       },
      last_name: {
        type: String,
        required: [true, 'Please, provide last name']
      },
      password: { 
        type: String, 
        required: [true, 'Please, provide password']
       },
      type_user: {type: String, required: true},
      createdAt: {type: String, required: true},
    }
  );


export default mongoose.model('User', UserSchema)