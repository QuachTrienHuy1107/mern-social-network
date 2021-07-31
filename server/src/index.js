const path = require("path");
const express = require("express");
require("dotenv").config();
const connectDB = require("./config");
const cors = require("cors");
const router = require("./router");
const session = require("express-session");
const passport = require("passport");
const configPassport = require("./config/passport");
const socketio = require("socket.io");

const app = express();
const server = require("http").createServer(app);
//listen at port 8000
const io = socketio(server, {
    cors: {
        origin: "http://localhost:3000",
    },
});
const configSocket = require("./socket");
app.use(cors());
app.use(express.json()); // for parsing application/json

//Sessions
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: { secure: true },
    })
);

//Using static folder image
app.use("/images", express.static(path.join(__dirname, "\\../public/images")));

//Passport middlewares
app.use(passport.initialize());
app.use(passport.session());
configPassport(passport);

//router
app.use("/api", router);

//socket
configSocket(io);
//connectDB
connectDB();

app.get("/", (req, res) => {
    res.send("ok");
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is starting at ${PORT}`);
});
