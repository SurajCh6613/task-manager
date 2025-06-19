require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");
const ConnectDB = require("./config/ConnectDB");

ConnectDB(); // DB Connection
app.use(cors({origin:'http://localhost:5173',
    credentials:true   // 👈 This allows cookies to be sent
}));
app.use(express.json());
app.use(cookieParser());

// All Routes
app.use("/user", userRoutes);
app.use("/task", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server Running at : ${PORT}`);
});
