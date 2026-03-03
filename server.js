const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/ao3clone");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(session({
  secret: "supersecretkey",
  resave: false,
  saveUninitialized: false
}));

app.use(require("./routes/auth"));
app.use(require("./routes/works"));

app.get("/", async (req, res) => {
  const Work = require("./models/Work");
  const works = await Work.find().sort({ createdAt: -1 });
  res.render("index", { works });
});

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});