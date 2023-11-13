const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));

app.listen(5000, () => {
  console.log("Sever is running in port 5000");
});

// Routes
const Routes = require("./routes/index");
app.use("/api/v1", Routes);

const ConnectionMongoDB = require("./models/mongodb/ConnectionMongoDB");
ConnectionMongoDB();
