const router = require("express").Router();
const path = require("path");
const homeRoutes = require("./home");
const searchRoutes = require("./search");
const checkoutRoutes = require("./checkout");

router.use("/home", homeRoutes);
router.use("/search", searchRoutes);
router.use("/checkout", checkoutRoutes)

module.exports = router;