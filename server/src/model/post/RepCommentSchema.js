const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RepCommentSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});
const RepComment = mongoose.model("rep_comments", RepCommentSchema);
module.exports = { RepComment, RepCommentSchema };
