const express = require("express");
const passport = require("passport");
const { signup, login, refreshToken, forgotPassword, resetPassword } = require("../controller/Auth.controller");
const authRouter = express.Router();

/**
 * @method POST
 * @route /api/auth/signup
 * @access Public
 */
authRouter.post("/signup", signup);

/**
 * @method POST
 * @route /api/auth/login
 * @access Public
 */
authRouter.post("/login", login);

/**
 * @method POST
 * @route /api/auth/token
 * @access Public
 */
authRouter.post("/token", refreshToken);

/**
 * @method POST
 * @route /api/auth/forgot-password
 * @access Public
 */
authRouter.post("/forgot-password", forgotPassword);

/**
 * @method PUT
 * @route /api/auth/reset-password
 * @access Public
 */
authRouter.put("/reset-password/:id", resetPassword);

// @route POST /api/auth/google
// @desc Register User
// @access Public
authRouter.get("/google", passport.authenticate("google", { scope: ["profile"] }));

authRouter.get("/google/failure", (req, res) => res.send("You failed to login "));
authRouter.get("/google/success", (req, res) => {
    console.log("user", req.user);
    return res.send("You login successfully ");
});

authRouter.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: "/api/auth/google/success",
        failureRedirect: "/api/auth/google/failure",
    }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.status(200).send("Login successfully");
    }
);

module.exports = authRouter;
