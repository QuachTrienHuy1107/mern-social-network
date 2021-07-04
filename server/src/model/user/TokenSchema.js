const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TokenSchema = new Schema({
    token: {
        type: String,
        default: Date.now(),
    },
    expiredTime: {
        type: Date,
        default: 100000,
    },
});

const Token = mongoose.model("token", TokenSchema);

module.exports = { TokenSchema, Token };
