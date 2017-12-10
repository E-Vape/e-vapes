const express = require("express");
const path = require('path');
const router = express.Router();
const User = require('../models/User');
const nodemailer = require('nodemailer');
const notification = require('../models/Notification');

router.post('/sendEmail', (req, res, next) => {

    // User.findById(req.params.id)
    // .populate('email')
    

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: 'e.vapes.online@gmail.com', // generated ethereal user
            pass: 'evapesonline'  // generated ethereal password
        }
    });

    let mailOptions = {
        from: 'e.vapes.online@gmail.com', // sender address
        to: email, // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'hola Clementina', // plain text body
        html: 'HOLAAAAAAAA' // html body
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
            res.redirect("/users/profile");
        }
    });

});

module.exports = router;