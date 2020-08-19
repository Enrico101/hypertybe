var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");

var router = express.Router();
var secretString = Math.floor((Math.random() * 10000) + 1);

router.use(session({
    secret: secretString.toString(),
    resave: true,
    saveUninitialized: true
}));
router.use(bodyParser.urlencoded({
    extended: 'true'
}));

router.get('/', (req, res) => {
    req.session.destroy();
    res.redirect('/');
})

module.exports = router;