const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LikeSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});
const Like = mongoose.model("likes", LikeSchema);
module.exports = { Like, LikeSchema };
