import { Server as SocketServer } from "socket.io";

import express from "express";
import http from "http";
import sequelize from "./Services/SequelizeConfig.js";
import { router } from "./routes.js";
import dotenv from "dotenv";
import { Connect_app } from "./Services/ServerCors.js";
import { errorHandlerMiddleware } from "./Middlewares/ErrorMiddleware.js";
import { client } from "./Services/Mqtt.js";
import { User } from "./Models/User.js";
import { Admin } from "./Models/Admin.js";
import { Sensor } from "./Models/Sensors.js";
import { MqttSubscribeTopics } from "./io/Topics.js";
import MensajeMqtt from "./io/EmitMqttMessage.js";

dotenv.config();
const app = Connect_app();
app.use(express.static('dist'))
const serve = http.createServer(app);
export const io = new SocketServer(serve, {
  cors: {
    origin: [
      `http://${process.env.IP_ADDRESS}:5173`,
      `http://${process.env.HOST}:5173`,
      // `http://${process.env.IP_ADDRESS}:4321`,
      // `http://${process.env.HOST}:4321`,
      `http://${process.env.IP_ADDRESS}:3000`,
      `http://${process.env.HOST}:3000`,
    ],
  },
});
//es posible que esta conexion al evento connection este envano ,
io.on("connection", (socket) => {
 
  socket.on("onoff", (message) => {
    client.publish("esp32/actuadores", message);

    console.log(message);
  });
});

(async () => {
  try {
    //console.log("creando bases de datos ");
    //await sequelize.drop()
    await sequelize.sync({});
    
    try {
      console.log("Create models is succefull");
      // Admin.create({
      //   username : "admin",
      //   password : "admin123",
      //   user : {
      //     name : "adriana"
      //   }
      // })
    } catch (syncError) {
      console.log("Models is failed : " + syncError);
    }
    try {
      await MqttSubscribeTopics();
    } catch (mqttError) {
      console.log("error en conexion mqtt desde index");
    }
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
})();
client.on("message", MensajeMqtt);
app.use(router);
app.use(errorHandlerMiddleware);
serve.listen(process.env.PORT, "0.0.0.0", () => {
  console.log("Port enable : " + process.env.PORT);
});
