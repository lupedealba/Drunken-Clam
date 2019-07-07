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
// fix the post route 404
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
    //fix the post route 404
    const newEstate = new Estate({
        estatetitle: req.body.estatetitle,
        for: req.body.for,
        listinglink: req.body.listinglink,
        address: req.body.address,
        price: req.body.price,
        bedrooms: req.body.bedrooms,
        baths: req.body.bathrooms,
        lotSize: req.body.lotSize,
        garage: req.body.garage,
        contact: req.body.contact,
        city: req.body.city
    });
    newEstate.save().then(doc => res.json(docs));
});
module.exports = router;