const router = require("express").Router();
const homecontrols = require("../../controls/homecontrols");

router
    .route("/")
    .post(homecontrols.findAll);

module.exports = router;