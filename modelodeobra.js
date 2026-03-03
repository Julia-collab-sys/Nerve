const mongoose = require("mongoose");

const workSchema = new mongoose.Schema({
  title: String,
  content: String,
  tags: [String],
  author: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Work", workSchema);