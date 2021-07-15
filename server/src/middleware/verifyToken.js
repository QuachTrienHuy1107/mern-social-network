const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.header("Authorization");
    const token = authHeader && authHeader.trim().split(" ")[1];

    if (!token) {
        return res.status(403).json({ success: false, message: "Access token not found" });
    }
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        //Assigning req.userId after verify token
        req.userId = decoded?.userId;
        next();
    } catch (error) {
        console.log(error.message);
        if (error.message === "jwt expired") {
            return res.status(401).json({ success: false, message: "Token is expired" });
        }
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

const authorize = (req, res, next) => {
    const { userId } = req;
    if (!userId) return res.status(404).json({ success: false, message: "Missing user" });
};
module.exports = { verifyToken, authorize };
