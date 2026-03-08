const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { submitContact, getMessages } = require('../controllers/contactController');

const contactValidation = [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }),
  body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
  body('subject').trim().notEmpty().withMessage('Subject is required').isLength({ max: 200 }),
  body('message').trim().notEmpty().withMessage('Message is required').isLength({ max: 2000 })
];

router.route('/')
  .get(getMessages)
  .post(contactValidation, submitContact);

module.exports = router;
