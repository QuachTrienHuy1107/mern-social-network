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
authRouter.put("/reset-password/:id/:token", resetPassword);

/**
 * @method GET
 * @route /api/auth/google
 * @access Public
 * @Desc Login by google
 */

authRouter.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

/**
 * @method GET
 * @route /api/auth/google
 * @access Public
 * @Desc Login by google when success
 */
authRouter.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: "/api/auth/google/success",
        failureRedirect: "/api/auth/google/failure",
        session: false,
    })
);

authRouter.get("/google/failure", (req, res) => res.send("You failed to login "));
authRouter.get("/google/success", (req, res) => {
    return res.send("You login successfully ");
});

module.exports = authRouter;
