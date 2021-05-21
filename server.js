const express = require("express");
require("dotenv").config({ path: "./config.env" });
const app = express();

app.use(express.json());

const PORT = process.env.PORT;

const server = app.listen(PORT, () =>
  console.log(`server running on port: ${PORT}`)
);

app.use("/", require("./routes/spotify.route"));
