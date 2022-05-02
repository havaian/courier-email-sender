// .ENV & ROUTER
import 'dotenv/config';
import express from 'express';

const app = express();

app.listen(5000, () => console.log('Server is up and running on 5000'));

// NODEMAILER API
import nodemailer from 'nodemailer';

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


// JOI VALIDATION
import Joi from 'joi';

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

// FOR TEST ONLY

// async function wrappedSendMail(mailOptions) {
//     return new Promise((resolve,reject)=>{

//         let transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//             user: myEmail,
//             pass: myPassword
//             }
//         });

//         transporter.sendMail(mailOptions, function(error, info) {
//             if (error) {
//                 console.log("error is "+error);
//                 resolve(false); // or use rejcet(false) but then you will have to handle errors
//             } else {
//                 console.log('Email sent: ' + info.response);
//                 resolve(true);
//             }
//         });
//     });
// };

// const sendmail = async(req) => {      
//     var mailOptions = {
//         from: myEmail,
//         to: sendEmail,
//         subject: 'Sending Email using Node.js',
//         text: 'That was easy!'
//     };
//     let resp = await wrappedSendMail(mailOptions);
//     console.log(resp);
//     return resp;
// } 

// sendmail();



// COURIER API


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