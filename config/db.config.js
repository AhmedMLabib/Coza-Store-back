const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect(
    "mongodb+srv://ahmed_admin001:n78hoW56EHqdufI0@cluster0.2ztmi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      serverSelectionTimeoutMS: 30000,
    }
  );
};

module.exports = connectDB;
