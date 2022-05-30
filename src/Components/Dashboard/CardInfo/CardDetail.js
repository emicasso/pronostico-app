import React, { useContext } from "react";
import { LandingContext } from "../../Landing";
import { InfoClimaContext } from "./InfoClima";

export default function CardDetail() {
  const { weatherData, iconUrl } = useContext(LandingContext);
  const { date } = useContext(InfoClimaContext);

  const {clouds, main, weather} = weatherData.list[0]

  let day_icon = `${iconUrl + weather[0]["icon"]}@2x.png`


  return (
    <div className="container py-5 flex items-center justify-around shadow-lg rounded-lg bg-white h-1/3 ">
      <div className="grid lg:grid-cols-2 gap-2 sm:grid-cols-1 text-center">

      <div className="my-auto lg:border-r-2 border-gray-100 ">
        <p className="font-bold text-5xl text-teal-900"> {(main.temp -273.15).toFixed(1)}&deg;C</p>
        <p className="text-2xl text-gray-800 tracking-widest">
        {weather[0].description}
        </p> 
          <img src={day_icon} className="w-1/4 inline" alt="icono"/>
        <p className="text-gray-400 text-xs uppercase tracking-widest">
        {weather[0].main}
        </p>
        <p className="tracking-wider">{date}</p>
      </div>

      <div className="ml-5 my-auto ">
        <p className="text-gray-400 text-lg">Sensacion Termica: {Math.round(main.feels_like -273.15)}&deg;C</p>
        <p className="text-gray-400 text-lg">Humedas: {main.humidity}%</p>
        <p className="text-gray-400 text-lg">Nuvosidad: {clouds.all}%</p>
        <p className="text-gray-400 text-lg">Min Temp: {(main.temp_min -273.15).toFixed(1)}&deg;C</p>
        <p className="text-gray-400 text-lg">Max Temp: {(main.temp_max -273.15).toFixed(1)}&deg;C</p>
      </div>
      </div>
    </div>
  );
}
