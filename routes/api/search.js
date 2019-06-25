const router = require("express").Router();
// Connect to the file that will make postman request 
const searchControls = require("../../controls/searchcontrols");

router.route("/")
    .get(searchControls.findAll)
    .post(searchControls.create);

router.route("/:id")
    .get(searchControls.findById)
    .put(searchControls.update)
    .delete(searchControls.remove);

module.exports = router;