const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  employeeId: String,
  email: String
});

// 👇 Make sure the third argument matches your collection name in Atlas (case-sensitive)
module.exports = mongoose.model("User", userSchema, "employees");