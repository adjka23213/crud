const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json(process.env.TOKEN_KEY);
});

module.exports = router;
