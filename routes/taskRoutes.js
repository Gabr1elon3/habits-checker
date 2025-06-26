
const express = require('express');
const router = express.Router();
const {
  createTask,
  getTasks,
  deleteTask,
  updateTask,
} = require('../controllers/taskController');
const auth = require('../middlewares/auth');

// All routes below require authentication
router.post('/', auth, createTask);          // Create a new task
router.get('/', auth, getTasks);             // Get all tasks for user
router.delete('/:id', auth, deleteTask);     // Delete task by ID
router.put('/:id', auth, updateTask);        // Update task by ID

module.exports = router;
