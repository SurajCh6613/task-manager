const express = require("express");
const auth = require("../middlewares/auth");
const {
  getAllTasks,
  addTask,
  editTask,
  getTask,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

router.get("/getTask/:id", auth, getTask);
router.get("/allTasks", auth, getAllTasks);
router.post("/addTask", auth, addTask);
router.put("/editTask/:id", auth, editTask);
router.delete("/:id", auth, deleteTask);

module.exports = router;
