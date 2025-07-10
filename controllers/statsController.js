const Stats = require('../models/Stats');

const getTaskStats = async (req, res) => {
  try {
    const userId = req.user.id;

    const stats = await Stats.findOne({ userId });

    if (!stats) {
      return res.status(200).json({ completed: 0, pending: 0, overdue: 0 });
    }

    res.status(200).json({
      completed: stats.completed || 0,
      pending: stats.pending || 0,
      overdue: stats.overdue || 0
    });
  } catch (error) {
    console.error('Error fetching task stats:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getTaskStats };
