const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("morgan");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);
app.use(logger("dev"));

// MongoDB Configuration configuration (Change this URL to your own DB)
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Lupe_collection";

// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("connected to mongoose");
    }
});
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname,'./public/index.html'));
 })
// create a GET route
// app.get('/express_backend', (req, res) => {
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });
// app.get()

app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
});