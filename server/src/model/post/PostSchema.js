const mongoose = require("mongoose");
const { LikeSchema } = require("./LikeSchema");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    status: {
        type: String,
        default: "PUBLIC",
        enum: ["PUBLIC", "PRIVATE"],
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    //Embedding type
    likes: {
        type: [LikeSchema],
    },

    // comment: {}, Bucketing type
});
const Post = mongoose.model("posts", PostSchema);
module.exports = Post;
