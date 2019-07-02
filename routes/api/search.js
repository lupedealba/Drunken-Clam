const router = require("express").Router();
const path = require('path');
const multer = require('multer'); //  adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.

const Estate = require("../../model/estate");

const storage = multer.diskStorage({
    destination: './public/upload',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage
}).single("image");

router.post("image", (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err);
        }
        if (!err)
            return res.send(200).end();
    });
});
router.post("/estate", (req, res) => {

    const newEstate = new Estate({
        estatetitle: req.body.estatetitle,
        for: req.body.for,
        image: req.body.image,
        address: req.body.address,
        price: req.body.price,
        bedrooms: req.body.bedrooms,
        baths: req.body.bathrooms,
        squarefeet: req.body.squarefeet,
        garage: req.body.garage,
        contact: req.body.contact,
        city: req.body.city
    });
    newEstate.save().then(doc => res.json(docs));
});
module.exports = router;