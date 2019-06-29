const router = require("express").Router();
const path = require('path');
const multer = require('multer');

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
        bedrooms: req.body.bedrooms,
        bathrooms: req.body.bathrooms,
        garage: req.body.garage,
        price: req.body.price,
        image: req.body.image,
        contact: req.body.contact,
        address: req.body.address,
        city: req.body.city
    });
    newEstate.save().then(doc => res.json(docs));
});
module.exports = router;