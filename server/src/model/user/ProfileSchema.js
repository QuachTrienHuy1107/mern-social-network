const mongoose = require("mongoose");
const { FriendSchema } = require("./FriendSchema");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    avatar: {
        type: String,
        default: "",
    },
    dateOfBirth: {
        type: String,
        default: "11/07/1999",
    },
    social: {
        facebook: { type: String },
        google: { type: String },
    },
    friends: {
        type: [FriendSchema],
    },

    /* room: {
        type: Schema.Types,
    }, */
});

const Profile = mongoose.model("profile", ProfileSchema);
module.exports = { Profile, ProfileSchema };
