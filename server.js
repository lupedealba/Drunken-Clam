const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes");
const logger = require("morgan");
const PORT = process.env.PORT || 3001;
const session = require("express-session");
const passport = require("passport");
const publicDirectory = path.join(__dirname, 'client', 'public');
console.log(publicDirectory);

app.use(express.static(publicDirectory));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);
app.use(logger("dev"));
app.use(session({
    secret: 'cats',
    saveUninitialized: false,
    resave: false
}));

app.use(passport.initialize());
app.use(passport.session());

// MongoDB Configuration configuration (Change this URL to your own DB)
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/JulianDatabase";

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

app.use(passport.initialize());

//Passport Configuration
require("./configs/passport")(passport);
// create a GET route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})
app.use(passport)
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
});