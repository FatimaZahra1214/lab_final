const Attraction = require('../models/Attraction');

// Create new attraction
exports.createAttraction = async (req, res) => {
  try {
    const attraction = await Attraction.create(req.body);
    res.status(201).json({
      success: true,
      data: attraction
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Get top rated attractions
exports.getTopRatedAttractions = async (req, res) => {
  try {
    const attractions = await Attraction.find()
      .sort({ rating: -1 })
      .limit(5);
    
    res.status(200).json({
      success: true,
      data: attractions
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
}; 