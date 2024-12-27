const express = require('express');
const router = express.Router();
const { 
  createAttraction, 
  getTopRatedAttractions 
} = require('../controllers/attractionController');

router.post('/', createAttraction);
router.get('/top-rated', getTopRatedAttractions);

module.exports = router; 