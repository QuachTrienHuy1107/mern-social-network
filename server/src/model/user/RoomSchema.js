const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
    },
    users: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
});

const Room = mongoose.model("room", RoomSchema);
module.exports = { RoomSchema, Room };
