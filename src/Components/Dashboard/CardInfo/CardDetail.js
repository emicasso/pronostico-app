import React, { useContext } from "react";
import { InfoClimaContext } from "./InfoClima";

export default function CardDetail() {
  const { date } = useContext(InfoClimaContext);

  return (
    <div className="container p-4 flex items-center justify-around shadow-lg rounded-lg bg-white h-1/3 mb-auto">
      <div className="my-auto">
        <p className="font-bold text-5xl text-teal-900 mb-2">23&deg;C</p>
        <p className="text-4xl text-gray-800 tracking-widest">
          Nublado
          {/* <img src={weather_icon} className="w-1/4 inline" /> */}
        </p> 
        <p className="text-gray-400 text-xs uppercase tracking-widest">
          Nubosidad Variable
        </p>
        <p className="tracking-wider">{date}</p>
      </div>
      <div className="my-1 border-l-2  border-gray-100 p-4">
        <p className="text-gray-400 text-lg">Sensacion Termica: 23&deg;C</p>
        <p className="text-gray-400 text-lg">Humedas: 23%</p>
        <p className="text-gray-400 text-lg">Nuvosidad: 32%</p>
        <p className="text-gray-400 text-lg">Min Temp: 12&deg;C</p>
        <p className="text-gray-400 text-lg">Max Temp: 12&deg;C</p>
      </div>
    </div>
  );
}
