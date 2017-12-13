const express = require("express");
const path = require('path');
const router = express.Router();
const User = require('../models/User');
const nodemailer = require('nodemailer');
const Mail = require('../models/Mail');

router.post('/sendEmail', (req, res, next) => {

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
        to: req.user.email, // list of receivers
        subject: 'Your E-Vapes order confirmation ✔', // Subject line
        text: 'Order confirmation', // plain text body
        html: 'Thank you for your order! You will soon recieve your shop!', // html body
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
        }
    });

});

module.exports = router;
