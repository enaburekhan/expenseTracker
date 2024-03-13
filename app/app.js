const express = require("express");
const path = require("path");
const createError = require("http-errors");
const userController = require("./controllers/userController");
const categoryController = require("./controllers/categoryController");
const transactionController = require("./controllers/transactionController");

const app = express();

app.use(express.static("static"));
app.set("view engine", "pug");
app.set("views", "./app/views");
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", userController);
app.use("/categories", categoryController);
app.use("/transactions", transactionController);

app.get("/landing_page", (req, res) => {
  res.render("landing_page");
});

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`http://localhost:${port}`);
});
