const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FriendSchema = new Schema({
    username: {
        type: String,
    },
    userId: {
        type: String,
        ref: "users",
    },
    status: {
        type: String,
        enum: ["Friend", "Follow"],
        default: "Follow",
    },
    created_at: {
        type: Date,
        default: Date.now(),
    },
});

const Friend = mongoose.model("friend", FriendSchema);
module.exports = { FriendSchema, Friend };
