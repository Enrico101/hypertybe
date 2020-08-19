var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var unirest = require('unirest');

var secretString = Math.floor((Math.random() * 10000) + 1);
router = express.Router();
router.use(session({
    secret: secretString.toString(),
    resave: false,
    saveUninitialized: false
}));
router.use(bodyParser.urlencoded({
    extended: 'true'
}));

router.get('/', (req, res) => {
    /*var language_array = [];
    if (req.query.Language != undefined)
    {
        if (req.query.Language == "English")
        {
            var language_array = ["Login", "Signup"];
            res.render('index', {language_array: language_array});
        }
        else if (req.query.Language == "French")
        {
            var uni = unirest("POST", "https://kiara-translate.p.rapidapi.com/get_translated/");
            uni.headers({
                "x-rapidapi-host": "kiara-translate.p.rapidapi.com",
                "x-rapidapi-key": "d313801ba7msh547ed235ac9ef25p1a4c5ajsn4ba6972e7d16",
                "content-type": "application/json",
                "accept": "application/json",
                "useQueryString": true
            });
            uni.type("json");
            uni.send({"input": "Login", "lang": "fr"});
            uni.end((response) => {
                language_array[0] = response.body.translated;
                uni.send({"input": "Signup", "lang": "fr"});
                uni.end((response) => {
                    language_array[1] = response.body.translated;
                    res.render("index", {language_array: language_array});
                })
            })
        }
        else if (req.query.Language == "Spanish")
        {
            var uni = unirest("POST", "https://kiara-translate.p.rapidapi.com/get_translated/");
            uni.headers({
                "x-rapidapi-host": "kiara-translate.p.rapidapi.com",
                "x-rapidapi-key": "d313801ba7msh547ed235ac9ef25p1a4c5ajsn4ba6972e7d16",
                "content-type": "application/json",
                "accept": "application/json",
                "useQueryString": true
            });
            uni.type("json");
            uni.send({"input": "Login", "lang": "es"});
            uni.end((response) => {
                language_array[0] = response.body.translated;
                uni.send({"input": "Signup", "lang": "es"});
                uni.end((response) => {
                    language_array[1] = response.body.translated;
                    res.render("index", {language_array: language_array});
                })
            })
        }
    }
    else
    {
        var language_array = ["Login", "Signup"];
        res.render('index', {language_array: language_array});
    }*/
    res.render('index');
})

module.exports = router;