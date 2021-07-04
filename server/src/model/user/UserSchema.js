const mongoose = require("mongoose");
const { ProfileSchema } = require("./ProfileSchema");
const { TokenSchema } = require("./TokenSchema");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
    },
    googleId: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    profile: {
        type: ProfileSchema,
    },
    token: {
        type: TokenSchema,
    },
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
