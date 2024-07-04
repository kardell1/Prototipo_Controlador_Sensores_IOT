import { SensorCard } from "./SensorCard";

export const ContainerSensors = () => {
  return (
    <div className="flex flex-row max-sm:flex-col w-full justify-evenly max-md:items-center max-md:justify-center p-4 gap-5 ">
      <SensorCard name="Humedad" topic="esp32/ResHumedad" />
      <SensorCard name="Suelo" topic="esp32/ResHumedadSuelo" />
      <SensorCard name="Temperatura" topic="esp32/ResTemperatura" />
    </div>
  );
};
