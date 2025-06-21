const express = require("express");
const {
  registerUser,
  loginUser,
  editUser,
  logoutUser,
  getUser,
} = require("../controllers/userController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/me", auth, getUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", auth, logoutUser);
router.put("/edit/:id", auth, editUser);

module.exports = router;
