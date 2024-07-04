import { Socket, io } from "socket.io-client";
let socket: Socket | null = null;
export const conectSocket=()=>{
    const api = import.meta.env.VITE_API_URL ;
    console.log("funcion conexion socket ejecutandose");
    socket = io(`http://${api}`);
    if (!socket) {
        throw new Error("La conexión de socket no pudo establecerse correctamente.");
    } 
    return socket
}
export const desconectSocket=()=>{
    if(socket){
        console.log("funcion de desconexion ejecutandose ")
        socket.close();
        socket = null;
    }
    return socket;
}
export const getSocket=()=>{
    return socket;
}