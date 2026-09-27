const express = require("express");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(require("./middleware/auth"));
app.use(require("./middleware/logger"));

app.use("/posts", require("./routes/posts"));
app.use("/auth/login", require("./routes/auth"));

app.use(require("./middleware/errorHandler.js"));

app.listen(3000, () => console.log("Server is running on http://localhost:3000"));
