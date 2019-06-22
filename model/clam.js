const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clamSchema = new Schema({

    image: {
        type: String,
        required: true
    },

    product_name: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    }

});

const Clams = mongoose.model("Clams", clamSchema);

module.exports = Clams;
