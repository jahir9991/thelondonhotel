"use strict";
var express = require('express');
var router = express.Router();
var userService = require('../services/user-service');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.get('/create', function (req, res, next) {
    var vm = {
        title: "create user",
        input: {},
        error: "",
        firstName: ""
    }
    res.render('users/create', vm);
});

router.post('/create', function (req, res, next) {
    userService.addUser(req.body, function (err) {
        if (err) {

            var vm = {
                title: "create an account",
                input: req.body,
                firstName: "",
                error: err
            }
            delete vm.input.password;
            return res.render('users/create', vm);
        }
        res.redirect('/orders');
    });
});

module.exports = router;
