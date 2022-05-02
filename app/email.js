import nodemailer from 'nodemailer';
import 'dotenv/config';
import express from 'express';
import Joi from 'joi';

const app = express();

app.listen(5000, () => console.log('Server is up and running on 5000'));

const myEmail = 'arrow7829423abdumalik@gmail.com';
const myPassword = '54sH5Q$$vzbh#sH9RWPx';
var sendEmail = 'm.usman.work@gmail.com';

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: myEmail,
    pass: myPassword
  }
}); 

const schema = Joi.object({

    from: Joi.string().required(),

    to: Joi.string().required(),
    
    subject: Joi.string().required(),

    text: Joi.string().required(),

});

var mailOptions = {
  from: myEmail,
  to: sendEmail,
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

app.post('/send', (req, res) => {
    
    try {
        const value = schema.validateAsync(mailOptions);
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
            console.log(error);
            } else {
            console.log('Email sent: ' + info.response);
            }
        });
    }
    catch (err) {
        console.log(err);
    }
    
});

// import 'dotenv/config';
// import { CourierClient } from "@trycourier/courier";
// import express from 'express';

// const app = express();
// const courier = CourierClient({ authorizationToken: process.env.courierKEY }); // get from the Courier UI

// app.listen(5000, () => console.log('Server is up and running on 5000'));

// // Send an email by post request
// function sendEmail() {
//     const { requestId } = await courier.send({
//         message: {
//         to: {
//             data: {
//             name: "Marty",
//             },
//             email: "marty@mcfly.com",
//         },
//         content: {
//             title: "Back to the future!",
//             body: "Oh my, {{name}}, we need 1.21 Gigawatts!",
//         },
//         routing: {
//             method: "single",
//             channels: ["email"],
//         },
//         },
//     });
// }

// app.post('/send', (req, res) => {
//     sendEmail();
// });