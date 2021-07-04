const express = require("express");
const authRouter = require("./authRouter");
const postRouter = require("./postRouter");
const userRouter = require("./userRouter");

const router = express.Router();

router.use("/post", postRouter);
router.use("/auth", authRouter);
router.use("/user", userRouter);

module.exports = router;
