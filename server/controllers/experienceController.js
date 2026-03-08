const Experience = require('../models/Experience');

// @desc    Get all experience entries
// @route   GET /api/experience
// @access  Public
exports.getExperience = async (req, res, next) => {
  try {
    const experiences = await Experience.find().sort({ order: 1, createdAt: -1 });

    res.status(200).json({
      success: true,
      count: experiences.length,
      data: experiences
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create experience entry
// @route   POST /api/experience
// @access  Private (add auth in production)
exports.createExperience = async (req, res, next) => {
  try {
    const experience = await Experience.create(req.body);
    res.status(201).json({ success: true, data: experience });
  } catch (error) {
    next(error);
  }
};

// @desc    Update experience entry
// @route   PUT /api/experience/:id
// @access  Private
exports.updateExperience = async (req, res, next) => {
  try {
    const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!experience) {
      return res.status(404).json({ success: false, message: 'Experience not found' });
    }

    res.status(200).json({ success: true, data: experience });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete experience entry
// @route   DELETE /api/experience/:id
// @access  Private
exports.deleteExperience = async (req, res, next) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);

    if (!experience) {
      return res.status(404).json({ success: false, message: 'Experience not found' });
    }

    res.status(200).json({ success: true, message: 'Experience deleted successfully' });
  } catch (error) {
    next(error);
  }
};

