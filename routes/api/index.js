const router = require("express").Router();
const path = require("path");
const userRoutes = require("./user");
const searchRoutes = require("./search");
const estateRoutes = require("./estate");

router.use("/user", userRoutes);
router.use("/search", searchRoutes);
router.use("/estate", estateRoutes)

module.exports = router;