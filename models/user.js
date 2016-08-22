var mongoose = require('mongoose');
var userService = require("../services/user-service.js");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: {type: String, required: [true, 'please enter your first name']},
    lastName: {type: String, required: 'please enter your last name'},
    roomNumber: {type: Number, required: 'please enter your room number', min: [100, 'not a valid number']},
    email: {type: String, required: 'please enter your email'},
    password: {type: String, required: 'please enter your password'},
    created: {type: Date, default: Date.now}
});

userSchema.path('email').validate(function (value, next) {
    userService.findUser(value, function (err, user) {
        if (err) {
            console.log(err);
            return next(false);
        }
        next(!user);
    });

}, 'the email already in use');

var User = mongoose.model('User', userSchema);

module.exports = {
    User: User
};



