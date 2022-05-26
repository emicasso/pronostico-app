import React, { createContext, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";

export const DashboardContext = createContext();

export default function Landing() {
  let urlWeather =
    "https://api.openweathermap.org/data/2.5/weather?&appid=8a5e9515a6583a0a93a8e614d848ffb5&lang=es";
    let cityUrl = "&q=";

  let urlForecast =
    "https://api.openweathermap.org/data/2.5/forecast?&appid=8a5e9515a6583a0a93a8e614d848ffb5&lang=es";

  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("");

  const getLocation = async (loc) => {
    setLoading(true);
    //guarmados el parametro para cambiar la ciuadad
    setLocation(loc);

    //obteniendo el tiempo real weather
    urlWeather = urlWeather + cityUrl + loc;

    await fetch(urlWeather)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      //si responde ok pasamos como parametros los datos y seteamos en nuestro estado
      .then((weatherData) => {
        console.log(weatherData);
        setWeather(weatherData);
      })
      .catch((error) => console.log(error));
    setLoading(false);
    setShow(false);

    //obteniendo el tiempo real forecast
    urlForecast = urlForecast + cityUrl + loc;

    await fetch(urlForecast)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      //si responde ok pasamos como parametros los datos y seteamos en nuestro estado
      .then((forecastData) => {
        console.log(forecastData);
        setForecast(forecastData);

        setLoading(false);
        //podemos visualizar los datos
        setShow(true);
      })
      .catch((error) => console.log(error));
    setLoading(false);
    setShow(false);
  };

  return (
    <DashboardContext.Provider value={{
      //para obtener la localizacion como parametro en el form
      getLocation,

      //para mostar valores en el card
      show,
      loading,
      weather,
      forecast
    }}>
      <Dashboard />
    </DashboardContext.Provider>
  );
}
