const express = require("express");
const router = express.Router();
const postController = require("../controllers/postcontroller");

router.post("/create", postController.createPost);
router.get("/:postId", postController.getPost);
router.put("/:postId", postController.updatePost);
router.post("/like/:postId", postController.likePost);
router.post("/comment/:postId", postController.addComment);
router.delete("/:postId", postController.deletePost);


module.exports = router;
