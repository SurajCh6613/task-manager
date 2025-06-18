const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("DB Connection Successful");
  } catch (error) {
    console.log("Connection Error: ", error);
  }
};

module.exports = ConnectDB;
