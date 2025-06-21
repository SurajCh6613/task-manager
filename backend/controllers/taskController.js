const Task = require("../models/taskSchema");
const User = require("../models/userSchema");

const getTask = async (req, res) => {
  try {
    const task = await Task.findById({ _id: req.params.id });
    if (!task) {
      return res.json({ message: "Get Task Error" });
    }
    return res.json(task);
  } catch (error) {
    return res.json({ message: "Get Task Error", error });
  }
};

const getAllTasks = async (req, res) => {
  const allTasks = await Task.find({ createdBy: req.user.id });
  return res.json(allTasks);
};

const addTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const userId = req.user.id;
    //   Creating Task
    const task = await Task.create({
      title,
      description,
      date,
      createdBy: userId,
    });
    //   Adding task to user
    await User.findByIdAndUpdate(userId, {
      $push: { tasks: task._id },
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Error Creating task", error });
  }
};

const editTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const userId = req.user.id; // From authentication middleware
    const taskId = req.params.id;

    // Fetch the task first
    const task = await Task.findById(taskId);

    // Check if task exists
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Check ownership
    if (task.createdBy.toString() !== userId) {
      return res.status(403).json({ message: "Unauthorized user" });
    }

    // Update the task
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { title, description, date },
      { new: true }
    );

    return res.status(200).json(updatedTask);
  } catch (error) {
    return res.status(500).json({ message: "Edit Task Error", error });
  }
};

module.exports = { getAllTasks, addTask, editTask, getTask };
