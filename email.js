import 'dotenv/config';
import { CourierClient } from "@trycourier/courier";

const courier = CourierClient({ authorizationToken: process.env.courierKEY }); // get from the Courier UI

// Example: send a basic message to an email recipient
const { requestId } = await courier.send({
  message: {
    to: {
      data: {
        name: "Snapfire",
      },
      email: "snapfirecookie@gmail.com",
    },
    content: {
      title: "{{name}}",
      body: "It's cookie time. Hold yer lizards, already. I'm here. Who wants some battle biscuits? You tell 'em {{name}}'s comin! And hell's comin with me!",
    },
    routing: {
      method: "single",
      channels: ["email"],
    },
  },
});