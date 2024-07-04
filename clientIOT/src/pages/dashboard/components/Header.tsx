import { Button_On_Off } from "./ButtonActiveSensors";
export const Header = () => {
  return (
    <div className=" sticky top-0  py-5 flex justify-evenly items-center bg-slate-100/45 px-4 max-sm:flex-col ">
      <h1 className="text-2xl font-bold max-md:text-base max-sm:text-lg ">Activar Sensores :</h1>
      <div className="flex gap-5 max-lg:flex-col " >
        <div className="flex gap-5 items-center border-2 border-slate-300 p-2 rounded-lg  max-[500px]:flex-col ">
          <p className="text-xl font-bold max-md:text-lg ">Bomba de Agua</p>
          <Button_On_Off
            style="bg-cyan-500 hover:bg-cyan-300  border-2 border-slate-800 p-2 rounded-lg max-sm:text-xs"
            name="Activar"
            estado="ON1"
          />
          <Button_On_Off
            style="bg-cyan-500 hover:bg-cyan-300  border-2 border-slate-800 p-2 rounded-lg max-sm:text-xs  "
            name="Desactivar"
            estado="OFF1"
          />
        </div>
        <div className="flex gap-5 items-center border-2 border-slate-300 p-2 rounded-lg max-[500px]:flex-col ">
          <p className="text-xl font-bold max-md:text-lg">Ventilador</p>
          <Button_On_Off
            style="bg-cyan-500 hover:bg-cyan-300  border-2 border-slate-800 p-2 rounded-lg max-sm:text-xs"
            name="Activar"
            estado="ON2"
          />
          <Button_On_Off
            style="bg-cyan-500 hover:bg-cyan-300  border-2 border-slate-800 p-2 rounded-lg max-sm:text-xs"
            name="Desactivar"
            estado="OFF2"
          />
        </div>
      </div>
    </div>
  );
};
