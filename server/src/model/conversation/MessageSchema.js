const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema(
    {
        conversation: { type: Schema.Types.ObjectId, ref: "conversation" },
        sender: { type: Schema.Types.ObjectId, ref: "users" },
        recipients: { type: Schema.Types.ObjectId, ref: "users" },
        message: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);
const Message = mongoose.model("conversation", MessageSchema);
module.exports = { Message, MessageSchema };
