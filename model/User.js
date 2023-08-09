import mongoose from "mongoose";
import Blog from "./Blog";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        uniqe: true,
    },
    password: {
        type: String,
        require: true,
        minlength: 6,
    },
    blogs: [{type: mongoose.Schema.Types.ObjectId, ref: Blog, required: true}],
});

export default mongoose.model("User", userSchema);
