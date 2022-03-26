import 'dotenv/config';
import { CourierClient } from "@trycourier/courier";

const courier = CourierClient({ authorizationToken: process.env.courierKEY }); // get from the Courier UI

// Example: send a basic message to an email recipient
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