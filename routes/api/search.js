const router = require("express").Router();
// Connect to the file that will make postman request 
//const = require("../..//");

router
    .route("/")
//Same as Line 2
//.get(.findAll)
//.post(.create);

router
    .route("/:id")
//Same as Line 2
//.get(.findById)
//.put(.update)
//.delete(.remove);

module.exports = router;