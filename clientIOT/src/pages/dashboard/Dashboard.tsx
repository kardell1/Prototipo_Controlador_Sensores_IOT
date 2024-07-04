import { useContext } from "react";
import { AuthContext } from "../../context/ContextProvaider";
import { Header } from "./components/Header";
import { ContainerSensors } from "./components/ContainerSensors";
import { Button_On_Off } from "./components/ButtonActiveSensors";
import { conectSocket } from "../../context/ConexionSocket";
export const Dashboard = () => {
  conectSocket();
  const { VerifyUser } = useContext(AuthContext);
  const handleCloseSesion = () => {
    VerifyUser({
      authenticate: false,
      username: "",
    });
  };
  return (
    <section className=" relative flex  ">
      <header className="sticky top-0 bg-slate-800 text-slate-100 min-w-max p-5 flex flex-col justify-between max-h-screen ">
        <div className="flex flex-col gap-6">
          <p className="text-xl  max-md:text-base  font-bold ">INVERNADERO</p>
          <div className="flex flex-col items-start gap-5 ">
            <p className="text-base font-bold  ">-Configuracion</p>
            <Button_On_Off
              style="px-3 hover:text-green-400 w-full text-start"
              name="Manual"
              estado="Manual"
            />
            <Button_On_Off
              style="px-3 hover:text-green-400 w-full text-start "
              name="Automatico"
              estado="Automatic"
            />
          </div>
        </div>
        <button
          onClick={handleCloseSesion}
          className="text-xl font-bold p-2 bg-cyan-800 rounded-lg  "
        >
          salir
        </button>
      </header>
      <main className=" min-h-screen w-full h-full">
        <Header />
        <ContainerSensors />
      </main>
    </section>
  );
};
