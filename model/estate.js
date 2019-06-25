const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const estateSchema = new Schema({

    estatetitle: {
        type: String,
        required: true
    },
    for: {
        type: String,
        required: true
    },
    bedrooms: {
        type: String,
        required: true
    },

    bathrooms: {
        type: String,
        required: true
    },

    garage: {
        type: Boolean,
        required: true
    },

    contact: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: Date.now
    },

    image: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    }

});

const Estate = mongoose.model("Estate", estateSchema);

module.exports = Estate;
