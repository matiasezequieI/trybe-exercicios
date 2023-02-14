const express = require('express');
const router = express.Router();

const validateCreatedAt = require('../middlewares/validateCreatedAt');
const validateDescription = require('../middlewares/validateDescription');
const validateDifficulty = require('../middlewares/validateDifficulty');
const validateName = require('../middlewares/validateName');
const validatePrice = require('../middlewares/validatePrice');
const validateRating = require('../middlewares/validateRating');
const auth = require('../middlewares/auth');

router.post(
  '/activities',
  auth,
  validateDifficulty,
  validateRating,
  validateCreatedAt,
  validateDescription,
  validatePrice,
  validateName,
  (req, res) => {
    res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
  }
);

module.exports = router;
