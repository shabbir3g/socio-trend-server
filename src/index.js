const express = require("express");
const app = express();
require("./db/connection");
const userRoute = require("./routes/users");

const port = process.env.PORT || 5000;
const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json());

app.use("/api/user", userRoute);

app.get("/", (req, res) => {
  res.send("Socio Trend Server is Running!");
});

app.listen(port, () => {
  console.log(`Socio Trend Server listening on port ${port}`);
});
