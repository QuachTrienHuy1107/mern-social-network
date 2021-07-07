const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ConversationSchema = new Schema(
    {
        recipients: [{ type: Schema.Types.ObjectId, ref: "users" }], //Array user have chated with the owner
        created_at: { type: Date, default: Date.now() },
    },
    {
        timestamps: true,
    }
);
const Conversation = mongoose.model("conversation", ConversationSchema);
module.exports = { Conversation, ConversationSchema };
