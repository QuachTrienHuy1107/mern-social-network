const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const verifyRefreshToken = require("../middleware/verifyRefreshToken");
const { Token } = require("../model/user/TokenSchema");
const User = require("../model/user/UserSchema");

/**
 * @Desc Create a new local account.
 */
const signup = async (req, res) => {
    const { username, password, email } = req.body;
    const salt = bcrypt.genSaltSync(10);
    if (!username || !password || !email) {
        return res.status(404).json({
            success: false,
            message: "Missing username and/or password",
        });
    }

    try {
        const user = await User.findOne({ username });
        const checkEmail = await User.findOne({ email });
        if (user) {
            return res.status(404).json({ success: false, message: "Username is already!" });
        }
        if (checkEmail) {
            return res.status(404).json({ success: false, message: "Email is already!" });
        }
        const hashPassword = bcrypt.hashSync(password, salt);
        const newUser = new User({ username, password: hashPassword, email });
        await newUser.save();

        //Return token
        const accessToken = jwt.sign({ userId: newUser._id }, process.env.ACCESS_TOKEN_SECRET?.replace(/\\n/gm, "\n"));

        res.status(200).json({
            success: true,
            message: "Signup successfully",
            data: {
                username,
                email,
                accessToken,
            },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

/**
 * @Desc Sign in using email and password.
 */
const login = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(404).json({
            success: false,
            message: "Missing username and/or password",
        });
    }

    try {
        // Check user in db
        const userLogin = await User.findOne().or([{ username }, { password }]);
        if (!userLogin) return res.status(404).json({ success: false, message: "User doesn't exist" });

        // Verify password
        const isPasswordCorrect = bcrypt.compareSync(password, userLogin.password);
        if (!isPasswordCorrect) {
            return res.status(403).json({ success: false, message: "Incorrect password" });
        }
        //Allgood
        const accessToken = jwt.sign({ userId: userLogin._id }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: +process.env.EXPIRED_TOKEN,
        });
        const refreshToken = jwt.sign({ userId: userLogin._id }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: +process.env.EXPIRED_RF_TOKEN,
        });
        userLogin.token = new Token();
        await userLogin.save();
        res.status(200).json({
            success: true,
            message: "Login successfully",
            data: {
                username,
                password,
                accessToken,
                refreshToken,
            },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

/**
 * @Desc Refresh token
 */
const refreshToken = async (req, res) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) return res.state(401).send("Token is invalid");
        const userId = await verifyRefreshToken(refreshToken);
        const accessToken = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: process.env.EXPIRED_TOKEN,
        });
        const refrToken = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: process.env.EXPIRED_RF_TOKEN,
        });
        res.status(200).json({
            success: true,
            message: "Login successfully",
            data: {
                accessToken,
                refrToken,
            },
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

/**
 * @Desc Forgot password
 */
const forgotPassword = async (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(404).json({ success: false, message: "Email is required!!" });
    try {
        //Find user's email in db
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ success: false, message: "This email is not registed" });
        //if email exist
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.USER_EMAIL, // generated ethereal user
                pass: process.env.PASSWORD_EMAIL, // generated ethereal password
            },
        });

        const data = {
            form: "quachhuy1107@gmail.com",
            to: email,
            subject: "Reset password",
            html: `<h2>Please click the link to reset your password</h2>
                    <p>http://localhost:3000/api/auth/reset-password/${user._id}</p>
            `,
        };
        transporter.sendMail(data, (error, info) => {
            if (error) {
                res.status(404).json({ success: false, message: "Sending email failed" });
                return console.log(error);
            }
            res.status(200).json({ success: true, message: "Email has been sent" });
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

const resetPassword = async (req, res) => {
    const { newPassword, token } = req.body;
    const { id } = req.params;
    const salt = bcrypt.genSaltSync(10);
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        //Verify token
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if (decoded.userId !== id) {
            return res.status(404).json({ success: false, message: "Invalid or expired password reset token" });
        }
        // All good
        const hashPassword = await bcrypt.hashSync(newPassword, salt);
        const result = await User.updateOne({ _id: id }, { $set: { password: hashPassword } }, { new: true });

        if (result.ok === 1) {
            return res.status(200).json({ success: true, message: "Change password successfully" });
        } else {
            return res.status(404).json({ success: false, message: "Change password failed! Try again" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

module.exports = { signup, login, refreshToken, forgotPassword, resetPassword };
