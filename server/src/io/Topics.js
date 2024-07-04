import { client } from "../Services/Mqtt.js";
const Topics = [
  "esp32/ResTemperatura",
  "esp32/ResHumedadSuelo",
  "esp32/ResHumedad",
];

export const MqttSubscribeTopics = async () => {
  Topics.forEach(async (topic) => {
    await client.subscribe(topic, function (err) {
      if (!err) {
        console.log("el topico es : " + topic);
      }
    });
  });
};
