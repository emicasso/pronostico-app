import moment from "moment";
import React, { useContext } from "react";
import { LandingContext } from "../../Landing";

export default function CardSummary({ day }) {
  const { iconUrl } = useContext(LandingContext);
  let day_icon = `${iconUrl + day.weather[0]["icon"]}@2x.png`;
  return (
    <>
      <li className="flex items-center w-full mx-auto shadow-xl my-auto justify-center bg-white rounded-lg">
        <div className="my-auto text-center">
          <p className="font-bold text-2xl text-pink-600">
            {(day.main.temp - 273.15).toFixed(1)}&deg;C
          </p>
          {day.weather[0].description}
          <p className="text-gray-800 tracking-widest">
            <img src={day_icon} className="w-1/2 inline" alt="icono" />
          </p>
          <p className="text-gray-400 text-xs uppercase tracking-widest">
            {day.weather[0].main}
          </p>
          <p className="tracking-wider">
            {moment(day.dt_txt).format("dddd hh:mm")}
          </p>
        </div>
      </li>
    </>
  );
}
