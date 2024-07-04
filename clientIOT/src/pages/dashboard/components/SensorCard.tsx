import { useEffect, useState } from "react";
import { getSocket } from "../../../context/ConexionSocket";
type PropsCardSensor = {
  topic: string;
  name: string;
};
export const SensorCard = ({ name, topic }: PropsCardSensor) => {
  const socket = getSocket();
  const [list, setList] = useState<string[]>([]);
  useEffect(() => {
    const handleSensorData = (value: string) => {
      setList((oldList) => {
        const newList = [...oldList, value];
        if (newList.length > 10) {
          return newList.slice(1);
        }
        return newList;
      });
    };
    socket?.on(topic, handleSensorData);
    return () => {
      socket?.off(topic, handleSensorData);
    };
  }, []);

  return (
    <section className="p-5 w-[25%] mt-5 rounded-lg bg-emerald-400 min-w-max max-md:w-[70%] ">
      <p className="text-xl font-medium text-center">{name} </p>
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
                  return <li key={index}>{value}</li>;
                }
              })}
            </>
          )}
        </ul>
      </div>
    </section>
  );
};
