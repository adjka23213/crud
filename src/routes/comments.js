const router = require("express").Router();
const controller = require("../controllers/postsController.js");
const validate = require("../middleware/validate");

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", validate(["body"]), controller.create);
router.delete("/:id", controller.delete);
router.put("/:id", validate(["body"]), controller.update);

module.exports = router;
