var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var vm = {
        title: 'Place an Order ',
        firstName: ""

    }
    res.render('orders/index', vm);
});

module.exports = router;
