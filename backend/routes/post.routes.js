const express = require("express"); // raccourcis, express sert aux routes
const { setPosts } = require("../controllers/post.controller");
const router = express.Router();

router.get("/", (req, res) => {
  // tjs mettre  req et res, voire next
  res.json({ message: "Voici les données" });
});

router.post("/", setPosts);

router.put("/:id", (req, res) => {
  res.json({ messageId: req.params.id }); // idem
});

router.delete("/id", (req, res) => {
  res.json({ message: "Post supprimé id " + req.params.id });
});

// Comptage et nomination des likes/dislikes de post
router.patch("/like-post/:id", (req, res) => {
  res.json({ message: "post liké : id: " + req.params.id });
});

router.patch("/dislike-post/:id", (req, res) => {
  res.json({ message: "post disliké : id: " + req.params.id });
});

module.exports = router;
