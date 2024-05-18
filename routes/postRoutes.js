const express = require("express");
const router = express.Router();
const checkUserAuth = require("../middlewares/auth.js");
const postController = require("../controllers/postcontroller");

router.post("/create", checkUserAuth, postController.createPost);
router.get("/:postId", checkUserAuth, postController.getPost);
router.put("/:postId", checkUserAuth, postController.updatePost);
router.post("/like/:postId", checkUserAuth, postController.likePost);
router.post("/comment/:postId", checkUserAuth, postController.addComment);
router.delete("/:postId", checkUserAuth, postController.deletePost);

module.exports = router;
