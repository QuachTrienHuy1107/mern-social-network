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
        trim: true,
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
    followers: [{ type: mongoose.Types.ObjectId, ref: "users" }],
    following: [{ type: mongoose.Types.ObjectId, ref: "users" }],
    token: {
        type: TokenSchema,
    },
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
