const { Comment } = require("../model/post/CommentSchema");
const { Like } = require("../model/post/LikeSchema");
const Post = require("../model/post/PostSchema");
const User = require("../model/user/UserSchema");

/**
 * @Desc get all post list.
 */
const getAllPostList = async (req, res) => {
    try {
        const postList = await Post.find().populate("userId", "username -_id");
        res.json({ success: true, postList });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

/**
 * @Desc create new post.
 */
const createPost = async (req, res) => {
    const { file } = req;
    const { title, desc, status, createdAt } = req.body;

    const urlImage = `${Date.now()}_${file?.originalname}`;
    if (!title) {
        return res.status(404).json({ success: false, message: "Title is not empty!!" });
    }
    try {
        const data = new Post({
            title,
            desc,
            image: urlImage || "",
            createdAt: Date.now(),
            status,
            user: req.userId, //After decoded will assign to userId,
        });

        await data.save();
        res.json({
            success: true,
            message: "Post created successfully",
            data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

/**
 * @Desc edit post
 */
const editPost = async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    if (!title) {
        return res.status(404).json({ success: false, message: "Title is not empty!!" });
    }
    try {
        const data = {
            ...req.body,
            title,
        };

        const updateCondition = { _id: id };
        const result = await Post.findOneAndUpdate(updateCondition, data, { new: true });
        console.log("result", result);
        if (!result) {
            return res.status(401).json({
                success: false,
                message: "Post not found or user not authorised",
            });
        }
        res.status(200).json({ success: true, message: "Edit successfully!", data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

/**
 * @Desc remove post
 */
const removePost = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteCondition = { _id: id };
        const result = await Post.findOneAndDelete(deleteCondition);
        if (!result) {
            return res.status(401).json({
                success: false,
                message: "Post not found or user not authorised",
            });
        }
        res.status(200).json({ success: true, message: "Remove successfully!", data: response });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

const likePost = async (req, res) => {
    const { postId, userId } = req.body;
    if (!postId && !userId) return res.status(404).json({ success: false, message: "Missing postId/userId" });
    try {
        const post = await Post.findById(postId);
        if (!post) return res.status(404).json({ success: false, message: "Post not found" });
        let check = -1;
        for (let i = 0; i < post.likes.length; i++) {
            if (post.likes[i].userId.equals(userId)) {
                check = i;
                await post.likes.splice(i, 1);
                break;
            }
        }
        if (check === -1) {
            //Does not into for loop
            const newLike = new Like({ userId });
            await post.likes.push(newLike);
        }
        await post.save();
        return res.status(200).json({ success: true, message: "Like successfully", data: post });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

const findLike = async (req, res) => {
    const { id } = req.params;
    const arrUser = [];
    try {
        const post = await Post.findById(id);
        if (!post) return res.status(404).json({ success: false, message: "Missing postId" });
        for (let i = 0; i < post.likes.length; i++) {
            const { userId } = post.likes[i];
            if (!userId) return res.status(404).json({ success: false, message: "User not found" });
            const userLike = await User.findById(userId).select("username -_id");
            arrUser.push(userLike);
        }
        return res.status(200).json({ success: true, message: "List user", data: arrUser });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }

    /* Post.findById(id)
        .then((post) => {
            if (!post) return res.status(404).json({ success: false, message: "Missing postId" });
            for (let i = 0; i < post.likes.length; i++) {
                const userId = post.likes[i]?.userId;
                console.log("userId", userId);
                // if (!userId) return res.status(404).json({ success: false, message: "User not found" });
                User.findById(userId)
                    .select("username -_id")
                    .then((user) => res.status(200).json({ success: true, message: "List user", data: user }))
                    .catch((error) => {
                        console.log(error);
                    });
            }
        })
        .catch((error) => {
            console.log(error);
            return res.status(500).json({ success: false, message: "Internal Server Error" });
        }); */
};

const commentPost = async (req, res) => {
    const { postId, userId, content } = req.body;
    console.log("object", req.body);
    if (!postId || !userId || !content) return res.status(404).json({ success: false, message: "Missing data" });
    try {
        const post = await Post.findById(postId);
        if (!post) return res.status(401).json({ success: false, message: "Post not found" });
        //Create new comment for a post

        const newCmt = new Comment({ postId, userId, content });
        await newCmt.save();
        res.json({
            success: true,
            message: "Comment created successfully",
            data: newCmt,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

const paginateComment = async (req, res) => {
    const { id } = req.params;
    console.log("id", id);
    // Because type of relationship between comment and post is bucketing so
    // I use function aggregation()
    const comments = await Comment.aggregate().facet({
        posts: [
            {
                $skip: 0,
            },
            {
                $limit: 2,
            },
            {
                $bucketAuto: {
                    groupBy: "$postId",
                    buckets: 2,
                    output: {
                        comments: { $push: { content: "$content", created_comment: "$createdAt" } },
                    },
                },
            },
        ],
    });
    console.log("comments", JSON.stringify(comments, undefined, 2));
    const data = comments;
    res.json({
        success: true,
        message: "List comment",
        data,
    });
};

module.exports = {
    getAllPostList,
    createPost,
    editPost,
    removePost,
    likePost,
    findLike,
    commentPost,
    paginateComment,
};
