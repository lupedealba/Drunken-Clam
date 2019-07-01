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
    },
    bedrooms: {
        type: String,
        required: true
    },
    baths: {
        type: String,
        required: true
    },
    squarefeet: {
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
    date: {
        type: Date,
        required: Date.now
    }

});

module.exports = User = mongoose.model("Estate", estateSchema);


