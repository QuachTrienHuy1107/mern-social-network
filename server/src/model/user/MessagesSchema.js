const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessagesSchema = new Schema(
    {
        sender: {
            type: Schema.Types.ObjectId,
            ref: "users",
        },
        message: {
            type: String,
        },
        created_at: {
            type: Date,
        },
    },
    { timestamps: true }
);

const Messages = mongoose.model("messages", MessagesSchema);
module.exports = Messages;
