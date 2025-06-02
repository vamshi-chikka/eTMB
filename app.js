const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt=require('jsonwebtoken')
app.use(express.json());
const cors = require("cors");
app.use(cors());

const mongoURL = "mongodb+srv://vamshi:admin@cluster0.ot9dxkf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));
const User = require('./UserDetails');


app.get("/",(req, res)=>{
    res.send({status:"started"})
})

app.post("/login", async (req, res) => {
    const { employeeId } = req.body;
    console.log("🔍 Received employeeId:", employeeId);  
    try {
      const oldUser = await User.findOne({ employeeId: employeeId.toString().trim() });
      if (!oldUser) {
        return res.status(404).json({ message: "Employee not found" });
      }
  
      return res.status(200).json({
        message: "Login successful",
        status: "ok" ,
        data: oldUser
            
      });
    } catch (err) {
      console.error("❌ Error in login:", err);
      return res.status(500).json({ message: "Server error" });
    }
  });

app.listen(3000,()=>{
    console.log("node js server has started.");
})
