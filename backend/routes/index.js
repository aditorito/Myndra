const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');

router.use("/users", authRoutes);

module.exports = router;