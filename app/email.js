import 'dotenv/config';
import { CourierClient } from "@trycourier/courier";
import express from 'express';

const app = express();
const courier = CourierClient({ authorizationToken: process.env.courierKEY }); // get from the Courier UI

app.listen(5000, () => console.log('Server is up and running on 5000'));

// Send an email by post request
function sendEmail() {
    const { requestId } = await courier.send({
        message: {
        to: {
            data: {
            name: "Marty",
            },
            email: "marty@mcfly.com",
        },
        content: {
            title: "Back to the future!",
            body: "Oh my, {{name}}, we need 1.21 Gigawatts!",
        },
        routing: {
            method: "single",
            channels: ["email"],
        },
        },
    });
}

app.post('/send', (req, res) => {
    sendEmail();
});