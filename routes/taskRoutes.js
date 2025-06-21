const express = require('express');
const router = express.Router();
const { createTask, getTasks, deleteTask,updateTask,} = require('../controllers/taskController');
const auth = require('../middlewares/auth');

// All routes below require authentication
router.post('/', auth, createTask);
router.get('/', auth, getTasks);
router.delete('/:id', auth, deleteTask);
router.put('/:id', auth, updateTask);

module.exports = router;
