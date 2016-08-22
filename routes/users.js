"use strict";
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.get('/create', function (req, res, next) {
    var vm = {
        title: "create user",
        input: {},
        error: "no"
    }
    res.render('users/create', vm);
});
router.post('/create', function (req, res, next) {
    var somthingGoesWrong = true;
    if (somthingGoesWrong) {
        var vm = {
            title: "create an account",
            input: req.body,
            error: "something wrong"
        }
        delete vm.input.password;
        return res.render('users/create', vm);
    }
    res.render('/orders');
});


module.exports = router;
