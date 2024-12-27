const Review = require('../models/Review');
const Attraction = require('../models/Attraction');
const Visitor = require('../models/Visitor');

exports.createReview = async (req, res) => {
  try {
    const { attraction, visitor, score, comment } = req.body;

    // Check if visitor has visited the attraction
    const visitorDoc = await Visitor.findById(visitor);
    if (!visitorDoc.visitedAttractions.includes(attraction)) {
      return res.status(400).json({
        success: false,
        error: 'Visitor must visit the attraction before reviewing'
      });
    }

    const review = await Review.create({
      attraction,
      visitor,
      score,
      comment
    });

    // Update attraction rating
    const reviews = await Review.find({ attraction });
    const averageRating = reviews.reduce((acc, curr) => acc + curr.score, 0) / reviews.length;
    
    await Attraction.findByIdAndUpdate(attraction, {
      rating: averageRating
    });

    res.status(201).json({
      success: true,
      data: review
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
}; 