const express = require("express");
const router = express.Router();
const authRoutes = require('../routes/auth/auth.route');
const profileRoutes = require('../routes/profile/profile.route');

router.use("/auth",authRoutes);
router.use("/profile",profileRoutes);

module.exports = router