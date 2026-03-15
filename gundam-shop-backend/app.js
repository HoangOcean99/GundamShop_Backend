var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
var productRoute = require("./routes/productRoute");
var userRoute = require("./routes/userRoute");
var cartRoute = require("./routes/cartRoute");
var orderRoute = require("./routes/orderRoute");
var reviewRoute = require("./routes/reviewRoute");

// var { verifyFirebaseToken } = require('./middlewares/authMiddleware');

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use(verifyFirebaseToken);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((e) => console.error("MongoDB error:", e));

app.use("/products", productRoute);
app.use("/users", userRoute);
app.use("/carts", cartRoute);
app.use("/orders", orderRoute);
app.use("/reviews", reviewRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
