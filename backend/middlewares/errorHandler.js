// middlewares/errorHandler.js

// This function is an error handling middleware for Express, specifically designed to handle all thrown errors.
function errorHandler(err, req, res, next) {
    console.error("❌ Error caught by middleware:", err.message);
  
    const statusCode = err.statusCode || 500;
  
    res.status(statusCode).json({
      error: err.message || 'Internal Server Error',
      detail: err.response?.data || null
    });
  }
  
  module.exports = errorHandler;
  