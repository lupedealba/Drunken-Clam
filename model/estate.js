const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const estateSchema = new Schema({

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
