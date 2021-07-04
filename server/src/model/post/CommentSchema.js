const mongoose = require("mongoose");
const { RepCommentSchema } = require("./RepCommentSchema");

const Schema = mongoose.Schema;

const CommentSchema = new Schema(
    {
        postId: {
            type: Schema.Types.ObjectId,
            ref: "posts",
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "users",
        },
        content: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        rep_cmt: {
            type: RepCommentSchema,
        },
    },
    { timestamps: true }
);
const Comment = mongoose.model("comments", CommentSchema);
module.exports = { Comment, CommentSchema };
