const router = require("express").Router();
const path = require('path');
const multer = require('multer'); //  adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.

const { Estate } = require("../../model/estate");

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
    console.log("create estate")
    const newEstate = new Estate({
        estatetitle: req.body.estatetitle,
        for: req.body.for,
        listingLink: req.body.listingLink,
        address: req.body.address,
        price: req.body.price,
        bedrooms: req.body.bedrooms,
        baths: req.body.baths,
        houseSize: req.body.houseSize,
        date: req.body.date,
        heating: req.body.heating,
        cooling: req.body.cooling,
        lotSize: req.body.lotSize,
        listingAgent: req.body.listingAgent,
        brokerage: req.body.brokerage,
        houseImage: req.body.houseImage,
        agentImage: req.body.agentImage,
        details: req.body.details

    });
    newEstate.save().then(doc => res.json(doc));

});
module.exports = router;