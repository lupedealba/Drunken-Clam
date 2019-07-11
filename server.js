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
// const publicDirectory = path.join(__dirname, 'client', 'build');
// console.log(publicDirectory);

// app.use(express.static(publicDirectory));
// app.use(express.static("./public"));
app.use(express.static('client/build'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);
app.use(logger("dev"));
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
    secret: 'cats',
    saveUninitialized: false,
    resave: false
}));


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


//Passport Configuration
require("./configs/passport")(passport);
// create a GET route
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
});
