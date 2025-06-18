const express = require("express");
const {
  registerUser,
  loginUser,
  editUser,
  logoutUser,
} = require("../controllers/userController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.put("/edit/:id", auth, editUser);

module.exports = router;
