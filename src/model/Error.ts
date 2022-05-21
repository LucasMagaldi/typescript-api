import mongoose from "mongoose";


export interface ErrorDocument extends mongoose.Document {
    error: String;
    method: String;
    createdAt: String;
    updatedAt: String
}

const ErrorSchema = new mongoose.Schema(
    {
        error: {
            type: String, 
            required: true
        },
        method: {
            type: String, 
            required: true
        },
        createdAt: {type: String, required: true}
    }
);

export default mongoose.model('Error', ErrorSchema);