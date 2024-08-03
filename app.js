const express = require("express");
const app = express();
const path = require("path");
const router = require("./routes/router");


app.set("views", path.join(__dirname , "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", router);

const PORT = 3000;
app.listen(PORT, "0.0.0.0", () => console.log(`My first Express app - listening on port ${PORT}!`));