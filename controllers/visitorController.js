const Visitor = require('../models/Visitor');
const Review = require('../models/Review');

exports.createVisitor = async (req, res) => {
  try {
    const visitor = await Visitor.create(req.body);
    res.status(201).json({
      success: true,
      data: visitor
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

exports.getVisitorActivity = async (req, res) => {
  try {
    const visitors = await Review.aggregate([
      {
        $group: {
          _id: '$visitor',
          reviewCount: { $sum: 1 }
        }
      },
      {
        $lookup: {
          from: 'visitors',
          localField: '_id',
          foreignField: '_id',
          as: 'visitorInfo'
        }
      }
    ]);

    res.status(200).json({
      success: true,
      data: visitors
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
}; 