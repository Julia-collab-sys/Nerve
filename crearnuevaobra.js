const express = require("express");
const router = express.Router();
const Work = require("../models/Work");

router.get("/works/new", (req, res) => {
  res.render("new-work");
});

router.post("/works", async (req, res) => {
  const { title, content, tags, author } = req.body;

  await Work.create({
    title,
    content,
    tags: tags.split(",").map(tag => tag.trim()),
    author
  });

  res.redirect("/");
});

router.get("/works/:id", async (req, res) => {
  const work = await Work.findById(req.params.id);
  res.render("work", { work });
});

module.exports = router;