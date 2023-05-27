const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(fileUpload());

// ROUTE imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoutes");

app.use("/api/v1", product);
app.use("/api/v1", user);

//middleware for error
app.use(errorMiddleware);

module.exports = app;
