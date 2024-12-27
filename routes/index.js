const express = require('express');
const router = express.Router();

const attractionController = require('../controllers/attractionController');
const visitorController = require('../controllers/visitorController');
const reviewController = require('../controllers/reviewController');

// Attraction routes
router.post('/attractions', attractionController.createAttraction);
router.get('/attractions', attractionController.getAllAttractions);
router.get('/attractions/top-rated', attractionController.getTopRatedAttractions);

// Visitor routes
router.post('/visitors', visitorController.createVisitor);
router.get('/visitors/activity', visitorController.getVisitorActivity);

// Review routes
router.post('/reviews', reviewController.createReview);

module.exports = router; 