const express = require('express');
const router = express.Router();

const {
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience
} = require('../controllers/experienceController');

router.route('/')
  .get(getExperience)
  .post(createExperience);

router.route('/:id')
  .put(updateExperience)
  .delete(deleteExperience);

module.exports = router;

