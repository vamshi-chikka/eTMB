const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  employeeId: String,
  email: String,
  startdate: String,
  startdate1: String,
  enddate: String,
  enddate1: String,
  id: String,
  route: String,
  route1: String,
  busstopname: String 
});

// 👇 Make sure the third argument matches your collection name in Atlas (case-sensitive)
module.exports = mongoose.model("User", userSchema, "employees");
