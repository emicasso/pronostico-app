import moment from "moment";
import React, { useContext } from "react";
import { LandingContext } from "../../Landing";
// import { InfoClimaContext } from "./InfoClima";


export default function CardSummary({day}) {
  const {iconUrl } = useContext(LandingContext);
  // const { date } = useContext(InfoClimaContext);

  console.log("para el card de abajo");
  console.log(day);

  let day_icon = `${iconUrl + day.weather[0]["icon"]}@2x.png`
  return (
    <>
      
        <li className="container p-4 flex items-center shadow-xl justify-center bg-white rounded-lg my-auto mr-1">
          <div className="my-auto">
            <p className="font-bold text-3xl text-pink-600 mb-2">
             {Math.round(day.main.temp)}&deg;C
            </p>
            <p className="text-2xl text-gray-800 tracking-widest">
              {day.weather[0].main}
              <img src={day_icon} className="w-1/4 inline" alt="icono" />
            </p>
            <p className="text-gray-400 text-xs uppercase tracking-widest">
              {day.weather[0].description}
            </p>
            <p className="tracking-wider">
            {moment(day.dt_txt).format("dddd hh:mm")}
            </p>
          </div>
        </li>
      
      
    </>
  );
}
