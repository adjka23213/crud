module.exports = (req, res, next) => {
  const auth = req.headers.authorization;
  const token = auth.split(" ")[1];
  if (token != process.env.TOKEN_KEY) {
    return (res.status(401).json({ error: "Invalid token" }));
  };
  next();
};
