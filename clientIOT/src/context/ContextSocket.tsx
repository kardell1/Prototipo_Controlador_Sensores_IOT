// import{
//   ReactNode,
//   createContext,
//   useContext,
//   useEffect,
//   useState,
// } from "react";
// import { getSocket } from "./ConexionSocket";
// type PropsContext = {
//   SensorTemperatura: string;
//   SensorHumedad: string;
//   SensorSuelo: string;
// };
// type PropsProvider = {
//   children: ReactNode;
// };
// export const ContextSocket = createContext<PropsContext>({
//   SensorHumedad: "",
//   SensorSuelo: "",
//   SensorTemperatura: "",
// });
// export const SocketProvider = ({ children }: PropsProvider) => {
//   const socket = getSocket();
//   const [data, setData] = useState<PropsContext>({
//     SensorHumedad: "0",
//     SensorSuelo: "0",
//     SensorTemperatura: "0",
//   });

//   useEffect(() => {
//     const handleSensorHumedad = (value: string) => {
//       setData((prevData) => ({ ...prevData, SensorHumedad: value }));
//     };
//     const handleSensorTemperatura = (value: string) => {
//       setData((prevData) => ({ ...prevData, SensorTemperatura: value }));
//     };
//     const handleSensorSuelo = (value: string) => {
//       setData((prevData) => ({ ...prevData, SensorSuelo: value }));
//     };
//     socket?.on("esp32/ResHumedadSuelo", handleSensorHumedad);
//     socket?.on("esp32/ResTemperatura", handleSensorTemperatura);
//     socket?.on("esp32/ResHumedad", handleSensorSuelo);
//     return () => {
//       socket?.off("esp32/ResHumedadSuelo", handleSensorHumedad);
//       socket?.off("esp32/ResTemperatura", handleSensorTemperatura);
//       socket?.off("esp32/ResHumedad", handleSensorSuelo);
//       //   socket?.disconnect();
//     };
//   }, []);

//   return (
//     <ContextSocket.Provider value={data}>{children}</ContextSocket.Provider>
//   );
// };
// export const useDataContext = () => {
//   return useContext(ContextSocket);
// };
