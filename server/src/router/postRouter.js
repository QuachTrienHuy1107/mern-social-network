const express = require("express");
const { verifyToken, authorize } = require("../middleware/verifyToken");
const {
    getAllPostList,
    createPost,
    editPost,
    removePost,
    likePost,
    findLike,
    commentPost,
    paginateComment,
} = require("../controller/Post.controller");
const postRouter = express.Router();

/**
 * @method GET
 * @route /api/post
 * @access Restricted
 */
postRouter.get("/", verifyToken, getAllPostList);

/**
 * @method POST
 * @route /api/post
 * @access Restricted
 */
postRouter.post("/", verifyToken, createPost);

/**
 * @method PUT
 * @route /api/post/:id
 * @access Restricted
 */
postRouter.put("/:id", verifyToken, editPost);

/**
 * @method DELETE
 * @route /api/post/:id
 * @access Restricted
 */
postRouter.delete("/:id", verifyToken, removePost);

/**
 * @method POST
 * @route /api/like/
 * @access Restricted
 */
postRouter.post("/like", verifyToken, likePost);

/**
 * @method GET
 * @route /api/like/
 * @access Public
 */
postRouter.get("/like/:id", findLike);

/**
 * @method POST
 * @route /api/comment/
 * @access Public
 */
postRouter.post("/comment", verifyToken, authorize, commentPost);

/**
 * @method GET
 * @route /api/comment/
 * @access Public
 */
postRouter.get("/comment/:id", paginateComment);

module.exports = postRouter;
