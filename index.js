// Import required modules
const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const PORT= process.env.PORT || 7000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {

}).then(()=>{
    console.log("Connected to MongoDB")
}).catch(()=>{
    console.log("somthing went wrong")
});

// Routes
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
