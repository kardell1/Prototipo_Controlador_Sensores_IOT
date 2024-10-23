import { useEffect, useState } from "react";
import { getSocket } from "../../../context/ConexionSocket";
type PropsCardSensor = {
  topic: string;
  name: string;
  type: string;
};
export const SensorCard = ({ name, topic, type }: PropsCardSensor) => {
  const socket = getSocket();
  const [list, setList] = useState<string[]>([]);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    const handleSensorData = (value: string) => {
      if (isNaN(parseInt(value))) {
        setStatus(false);
        setList((oldList) => {
          const newList = [...oldList, "SensorErratico "];
          if (newList.length > 10) {
            return newList.slice(1);
          }
          return newList;
        });
      } else {
        setStatus(true);
        setList((oldList) => {
          const newList = [...oldList, value + type];
          if (newList.length > 10) {
            return newList.slice(1);
          }
          return newList;
        });
      }
      
    };
    socket?.on(topic, handleSensorData);
    return () => {
      socket?.off(topic, handleSensorData);
    };
  }, []);

  return (
    <section className="p-5 w-[25%] mt-5 rounded-lg bg-emerald-400 min-w-max max-md:w-[70%] ">
      <div className="flex justify-around items-center  " >
        <p className="text-xl font-medium text-center">{name} </p>
        <span className={`w-6 h-6 rounded-full shadow-xl  ${status? "bg-green-600" : "bg-red-600" } `} ></span>
      </div>
      <div>
        <ul className="text-center  ">
          {list.length > 10 ? (
            <>{setList(list.slice(1))}</>
          ) : (
            <>
              {list.map((value, index) => {
                if (index == list.length - 1) {
                  return (
                    <li key={index} style={{ background: "#c7ecec" }}>
                      {value}
                    </li>
                  );
                } else {
                  return (
                    <li key={index}>
                      {value} 
                    </li>
                  );
                }
              })}
            </>
          )}
        </ul>
      </div>
    </section>
  );
};
