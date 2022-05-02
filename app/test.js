import test from 'ava';
import res from 'express/lib/response';
import nodemailer from 'nodemailer';
import SendmailTransport from 'nodemailer/lib/sendmail-transport';

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

async function wrappedSendMail(mailOptions) {
    return new Promise((resolve,reject)=>{
        let transporter = nodemailer.nodemailer.createTransport({
            service: 'gmail',
            auth: {
            user: myEmail,
            pass: myPassword
            }
        });

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log("error is "+error);
                resolve(false); // or use reject(false) but then you will have to handle errors
            } else {
                console.log('Email sent: ' + info.response);
                resolve(true);
            }
        });
    });
};

sendmail = async(req) => {      
    var mailOptions = {
        from: myEmail,
        to: sendEmail,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };
    let resp = await wrappedSendMail(mailOptions);
    console.log(resp);
    return resp;
} 

test('first scenario', t => {
	sendmail();
	t.true(resp === true);
});

// test('sendEmail', mailOptions => {
//     transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//             console.log(error);
//             resolve(false);
//         } else {
//             console.log('Email sent: ' + info.response);
//             resolve(true);
//         }
//     });
// });