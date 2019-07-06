const express = require('express');
const router = express.Router();
const Estate = require("../../model/estate");
const nodemailer = require("nodemailer"); // a module for Node.js applications to allow easy email sending

router.get('/all', (req, res) => {
    Estate.find().then(properties => res.send(properties));
});

router.get("/recent", (req, res) => {
    Estate.find()
        .sort({ _id: -1 })
        .limit(4)
        .then(properties => res.send(properties));

});

router.get("/count/:city", (req, res) => {
    Estate.find({ city: req.params.city }).count()
        .then(docs => {
            res.json(docs);
        })
        .catch(err => {
            res.json(err);
        })
});
router.get("/count/for/:for", (req, res) => {
    Estate.find({ for: req.params.for }).count()
        .then(docs => {
            res.json(docs);
        })
        .catch(err => {
            res.json(err);
        })
});
router.post('/contact', (req, res) => {

    nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email', // ethereal is a great place to create dummy emails to test if your email connection works on your website
            port: 587,
            secure: false, // true for port 465, any other ports its false
            auth: {
                user: account.user, // generated the ethereal user
                pass: account.pass // generate ethereal password
            }
        });

        // setup email data
        let mailOption = {
            from: `${req.body.email}`,
            to: `${req.body.reciever}`,
            subject: 'Hello',
            text: `${req.body.message}`,
            html: `<br/><p>Please Contact on</p><br/><span>Number: ${req.body.contactNumber} Email: ${req.body.email}</span>`
        };
        // send mail with transport object
        transporter.sendMail(mailOption, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log("Message sent: %s", info.messageId);
            // Preview can only be seen when sending through an ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            res.sendStatus(200).json({ message: "Email Was Successful" });

        });
    });
});

router.get('/my/:email', (req, res) => {
    Estate.find({ email: req.params.email })
        .then(docs => res.json(docs))
        .catch(err => res.sendStatus(400).json({ failed: 'Error While Getting your Properties' }))

});

router.delete('/my/delete/:id', (req, res) => {
    Estate.findOneAndDelete(req.params.id)
    then(docs => res.json(docs))
        .catch(err => res.sendStatus(400).json({ failed: 'Error While Deleting' }));
});
module.exports = router;
