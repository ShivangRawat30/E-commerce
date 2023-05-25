const express = require("express");
const app = express();

app.use(express.json());
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(fileUpload());

// ROUTE imports
const product = require("./routes/productRoute");

app.use("/api/v1", product);

module.exports = app;
