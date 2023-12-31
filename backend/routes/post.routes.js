const express = require("express"); // raccourcis, express sert aux routes
const {
  setPosts,
  getPosts,
  editPost,
  deletePost,
  likePost,
  dislikePost,
} = require("../controllers/post.controller");
const router = express.Router();

router.get("/", getPosts);
router.post("/", setPosts);
router.put("/:id", editPost);
router.delete("/id", deletePost);
router.patch("/like-post/:id", likePost);
router.patch("/dislike-post/:id", dislikePost);

module.exports = router;
