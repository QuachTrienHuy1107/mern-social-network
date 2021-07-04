const configSocket = (io) => {
    io.on("connection", (socket) => {
        console.log(`New client connected with id: ${socket.id}`);

        socket.on("conversation", (msg) => {
            io.emit("response-msg", msg);
        });

        socket.on("disconnect", () => {
            console.log("Someone has left this room: " + `${socket.id}`);
        });
    });
};

module.exports = configSocket;
