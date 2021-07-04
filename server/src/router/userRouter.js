const express = require("express");
const { uploadAvatar, createProfile, addFriend } = require("../controller/User.controller");
const uploadImage = require("../middleware/uploadImage");
const { verifyToken } = require("../middleware/verifyToken");
const userRouter = express.Router();

/**
 * @method PATCH
 * @route /api/user/profile/:id
 * @access Restricted
 */
userRouter.patch("/profile/:id", verifyToken, uploadImage("file"), uploadAvatar);

/**
 * @method PUT
 * @route /api/user/:id
 * @access Restricted
 */
userRouter.post("/:id", verifyToken, createProfile);

/**
 * @method POST
 * @route /api/user/friend/add"
 * @access Restricted
 */
userRouter.post("/friend/add", addFriend);

module.exports = userRouter;
