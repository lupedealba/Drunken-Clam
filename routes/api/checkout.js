const router = require("express").Router();
// Connect to the file that will make postman request 
const checkoutControls = require("../../controls/checkoutcontrols");

router.route("/")
    .get(checkoutControls.findAll)
    .post(checkoutControls.create);

router.route("/:id")
    .get(checkoutControls.findById)
    .put(checkoutControls.update)
    .delete(checkoutControls.remove);

module.exports = router;