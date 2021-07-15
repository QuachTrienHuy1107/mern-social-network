const express = require("express");
const { createMessage } = require("../controller/Conversation.controller");
const chatRouter = express.Router();

/**
 * @method POST
 * @route /api/chat/message
 * @access Public
 */
chatRouter.post("/message", createMessage);

module.exports = chatRouter;
