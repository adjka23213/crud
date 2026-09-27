const router = require("express").Router();
const PostsController = require("../controllers/postsController.js");
const CommentsController = require("../controllers/postsController.js");
const validate = require("../middleware/validate");

router.get("/", PostsController.getAll);
router.get("/:id", PostsController.getOne);
router.post("/", validate(["title", "body"]), PostsController.create);
router.delete("/:id", controller.delete);
router.put("/:id", validate(["title", "body"]), PostsController.update);

router.get("/:id/comments", CommentsController.getOne);
router.post("/:id/comments", validate([body]), CommentsController.create);

module.exports = router;
