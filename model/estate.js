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
    listingLink: {
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
    },
    bedrooms: {
        type: String,
        required: true
    },
    baths: {
        type: String,
        required: true
    },
    houseSize: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: Date.now
    },
    heating: {
        type: String,
        required: true
    },
    cooling: {
        type: String,
        required: true
    },
    lotSize: {
        type: String,
        required: true
    },
    listingAgent: {
        type: String,
        required: true
    },
    brokerage: {
        type: String,
        required: true
    },
    houseImage: {
        type: String,
        required: true
    },
    agentImage: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    }

});
const Estate = mongoose.model("estate", estateSchema);

module.exports = { Estate };

