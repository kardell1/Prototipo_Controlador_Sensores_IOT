import { io } from "../index.js";
export const EmmitMenssage = (topic, message) => {
  console.log(
    "mensaje recibido dentro de la funcion de emitir el mensaje : " + JSON.stringify(message)
  );
  console.log("el topico recibido es  : " + topic);
  io.emit(topic, message);
};
//esta funcion se esta usando para emitir los eventos del catalogo