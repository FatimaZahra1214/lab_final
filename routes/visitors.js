const express = require('express');
const router = express.Router();
const { 
  createVisitor, 
  getVisitorActivity 
} = require('../controllers/visitorController');

router.post('/', createVisitor);
router.get('/activity', getVisitorActivity);

module.exports = router; 