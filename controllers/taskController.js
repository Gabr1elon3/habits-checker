const Task = require('../models/Task');

// Create a new task
const createTask = async (req, res) => {
  const { name, category, deadline } = req.body;
  try {
    const newTask = new Task({
      userId: req.user.id,
      name,
      category,
      deadline,
    });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all tasks for the logged-in user
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id, active: true });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Soft delete a task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, userId: req.user.id });
    if (!task) return res.status(404).json({ message: 'Task not found' });

    task.active = false;
    await task.save();
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  deleteTask,
};
