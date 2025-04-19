const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const studentRoutes = require("./routes/studentRoutes.js");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://chviswanath2:FIpG2eZ3nH5Hww0p@localdb.ccoc7wv.mongodb.net/?retryWrites=true&w=majority&appName=localDB",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));


app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
  res.send("Student Management System API");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
