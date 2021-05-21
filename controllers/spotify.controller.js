const ErrorResponse = require("../utils/errorResponse");

exports.test = function (req, res, next) {
  try {
    res.status(200).json({
      success: true,
      data: "hi",
    });
  } catch (err) {
    next(err);
  }
};
