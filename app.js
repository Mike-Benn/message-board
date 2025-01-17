const express = require("express");
const app = express();
const path = require("path");
const router = require("./routes/router");


app.set("views", path.join(__dirname , "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", router);

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
    console.log(`My first Express app - listening on port ${port}!`);
  });