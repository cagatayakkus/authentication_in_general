const express = require("express");
const cookieParser = require("cookie-parser");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(routes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
