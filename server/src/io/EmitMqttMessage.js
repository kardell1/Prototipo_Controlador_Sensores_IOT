import { Sensor } from "../Models/Sensors.js";
import { io } from "../index.js";
async function MensajeMqtt(topic, message) {
  if (topic === "esp32/ResTemperatura") {
    console.log("el topico es en el caso 1 : " + topic);
    console.log("el mensaje es : " + message);
    Sensor.create({
      data: message.toString(),
      sensor: "Temperatura",
    });
    io.emit(topic, message.toString());
  } else if (topic === "esp32/ResHumedad") {
    console.log("el topico es en el caso 3 : " + topic);
    console.log("el mensaje es : " + message);
    Sensor.create({
      data: message.toString(),
      sensor: "Humedad",
    });
    io.emit(topic, message.toString());
  } else if (topic === "esp32/ResHumedadSuelo") {
    console.log("el topico es en el caso 4 : " + topic);
    console.log("el mensaje es : " + message);
    Sensor.create({
      data: message.toString(),
      sensor: "HumedadSuelo",
    });
    io.emit(topic, message.toString());
  }
}
export default MensajeMqtt;
