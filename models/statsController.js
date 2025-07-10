const Task = require('../models/Task');

// Get user's task completion statistics
const getTaskStats = async (req, res) => {
  try {
    const userId = req.user.id;
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    // Get all active tasks for the user
    const tasks = await Task.find({ userId, active: true });

    // Initialize counters
    const stats = {
      completed: 0,
      pending: 0,
      overdue: 0
    };

    tasks.forEach(task => {
      const [hours, minutes] = task.deadline.split(':').map(Number);
      const taskDeadline = new Date();
      taskDeadline.setHours(hours, minutes, 0, 0);

      if (task.completed) {
        stats.completed++;
      } else if (now > taskDeadline) {
        stats.overdue++;
      } else {
        stats.pending++;
      }
    });

    res.status(200).json(stats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getTaskStats
};