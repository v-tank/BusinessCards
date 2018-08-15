// import packages and routes
const express = require('express');
const router = express.Router();
const contactRoutes = require('./api/contact');

// use the contact routes file at the /api/contact route
router.use("/api/contact", contactRoutes);

module.exports = router;
