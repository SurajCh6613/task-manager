const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const generateToken = require("../middlewares/generateToken");

const getUser = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Checking if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists with this email.",
      });
    }

    // Hashing Password
    const hashedPawword = await bcrypt.hash(password, 10);

    // 2. Creating new user
    const newUser = new User({
      name,
      email,
      password: hashedPawword,
    });
    await newUser.save(); // Save to DB

    // Setting token
    const token = generateToken(newUser._id);

    // Setting cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true, // MUST be true in production with HTTPS
      sameSite: "None", // Allow cross-origin cookies
      maxAge: 1000 * 60 * 60 * 24,
    });
    return res.status(201).json({
      message: "User registered successfully",
      user: newUser,
      token,
    });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  //   Checking user existence
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  //   Checkin password match
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  const token = generateToken(user._id);
  //   Set token in cookie
  res.cookie("token", token, {
    httpOnly: true,
    secure: true, // MUST be true in production with HTTPS
    sameSite: "None", // Allow cross-origin cookies
    maxAge: 1000 * 60 * 60 * 24,
  });
  return res.status(201).json({
    message: "User Logged-In successfully",
    user,
    token,
  });
};

const logoutUser = (req, res) => {
  res
    .clearCookie("token", {
      httpOnly: true,
      secure: true, // MUST be true in production with HTTPS
      sameSite: "None", // Allow cross-origin cookies
      maxAge: 1000 * 60 * 60 * 24,
    })
    .status(200)
    .json({ message: "Logged out" });
};

const editUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if email is being changed and already exists
    if (user.email !== email) {
      const existEmail = await User.findOne({ email });
      if (existEmail) {
        return res.status(400).json({ message: `${email} is already in use` });
      }
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { name: name || user.name, email: email || user.email },
      { new: true }
    );
    return res
      .status(201)
      .json({ message: "Profile updated successfully", user: updatedUser });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getUser, registerUser, loginUser, logoutUser, editUser };
