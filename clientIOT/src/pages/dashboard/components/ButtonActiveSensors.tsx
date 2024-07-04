import { getSocket } from "../../../context/ConexionSocket";
type Props = {
  style?: string;
  estado: string;
  name: string;
};
export const Button_On_Off = ({ estado, name, style }: Props) => {
  const socket = getSocket();
  let dato = "";
  const enviarDatos = () => {
    dato = estado;
    socket?.emit("onoff", dato);
    console.log(dato);
  };
  return (
    <>
      <button className={` font-semibold ${style} `} onClick={enviarDatos}>
        {name}
      </button>
    </>
  );
};
