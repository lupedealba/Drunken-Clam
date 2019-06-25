const db = require("../model");
//Define Methods for the checkoutcontrols
//Next Time try doing an array before calling the module.exports
module.exports = {
    findAll: function (req, res) {
        db.Estate.find(req.query)
            .then(dbEstate => res.json(dbEstate))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Estate.findById(req.params.id)
            .then(dbEstate => res.json(dbEstate))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Estate.create(req.body)
            .then(dbEstate => res.json(dbEstate))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Estate.findOneAndUpdate({ id: req.params.id }.req.body)
            .then(dbEstate => res.json(dbEstate))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Estate.findById(req.params.id)
            .then(dbEstate => dbEstate.remove())
            .then(dbEstate => res.json(dbEstate))
            .catch(err => res.status(422).json(err));
    }
};
