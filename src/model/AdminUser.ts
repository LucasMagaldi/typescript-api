import mongoose from "mongoose";
import validator from "validator";
import { string } from "yup";

export interface AdminUser extends mongoose.Document {
    email: String;
    name: String;
    id_user: String;
    createdAt: String;
    updatedAt: String
}   

const AdminUserSchema = new mongoose.Schema(
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
      id_user: {
        type: String,
        required: true
      },
      createdAt: {type: String, required: true},
    }
  );


export default mongoose.model('AdminUser', AdminUserSchema)