const jwt = require("jsonwebtoken");

const verifyRefreshToken = (refreshToken) => {
    return new Promise((resolve, reject) => {
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, payload) => {
            if (err) return reject("Error", err);
            const { userId } = payload;
            resolve(userId);
        });
    });
};

module.exports = verifyRefreshToken;
