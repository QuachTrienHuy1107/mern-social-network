const formidable = require("formidable");
const { Friend } = require("../model/user/FriendSchema");
const { Profile } = require("../model/user/ProfileSchema");
const User = require("../model/user/UserSchema");

/**
 * @Desc Upload avatar
 */
const uploadAvatar = async (req, res) => {
    const { file } = req; //Get the file to request to server
    const urlImage = `${Date.now()}_${file.originalname}`;
    const { id } = req.params;
    try {
        const user = await User.findById(id);

        if (!urlImage) {
            return res.status(404).json({ success: false, message: "File is not empty" });
        }

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        const data = {
            ...user.profile,
            avatar: urlImage || "",
        };
        console.log("data", data);
        const newProfile = new Profile(data);

        /*
         const updateCondition = { _id: id };
        const newAvatar = await User.updateOne(
            updateCondition,
            { $set: { avatar: urlImage ? urlImage : "222" } },
            { upsert: false }
        ); */

        if (!newProfile) {
            return res.status(401).json({ success: false, message: "User not authorised" });
        }
        user.profile = newProfile;
        await user.save();
        console.log("user", user);
        return res.status(200).json({ success: true, message: "Edit successfully", data: urlImage });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

/**
 * @Desc Create new profile
 */
const createProfile = async (req, res) => {
    // const { dateOfBirth, social, room, friends } = req.body;
    const { dateOfBirth } = req.body;
    console.log(dateOfBirth);
    const { id } = req.params;
    try {
        const user = await User.findById(id);

        if (!user) return res.status(404).json({ success: false, message: "User not found" });
        const data = {
            dateOfBirth,
        };
        const newProfile = new Profile(data);
        user.profile = newProfile;
        await user.save();
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
/**
 * @Desc Add friend
 */
const addFriend = async (req, res) => {
    const { username, userId } = req.body;
    if (!username || !userId) {
        return res.status(404).json({
            success: false,
            message: "Missing username and/or userId",
        });
    }
    try {
        const friend = await Friend.findById(userId);
        //If have friend in list friend

        if (!friend) return res.status(404).json({ success: false, message: "User not found" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

module.exports = { uploadAvatar, createProfile, addFriend };
