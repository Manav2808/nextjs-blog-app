import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    blogs: {
        type: Array,
    }
})

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String
    }
},
{
    timestamps: true
})

// Creates the model if not already defined
export const User = mongoose.models.User || mongoose.model("User", UserSchema);
export const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);