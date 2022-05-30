import React, { createContext, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";

export const LandingContext = createContext();

export default function Landing() {
  let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?&lang=sp";

  let api_key = "&appid=8a5e9515a6583a0a93a8e614d848ffb5";

  let cityUrl = "&q=";

  let iconUrl = "http://openweathermap.org/img/wn/";

  // const [noData, setNoData] = useState("No ingreso Datos");
  // const [weather, setWeather] = useState([]);
  // const [city, setCity] = useState("Ubicacion Desconocida");
  // const [icono, setIcono] = useState(`${iconUrl}10n@2x.png`);
  // const [localizacion, setLocalizacion] = useState("");
  // const [show, setShow] = useState(false);

  const [noData, setNoData] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [loadingData, setLoading] = useState(false);
  const [city, setCity] = useState("Sin busqueda");
  const [weatherIcon, setWeatherIcon] = useState(`${iconUrl}10n@2x.png`);

  const getWeather = async (loc) => {
    urlForecast = urlForecast + cityUrl + loc + api_key;
    setWeatherData([]);
    console.log("empezo a cargar");
    setLoading(true);

    try {
      let res = await fetch(urlForecast);
      let data = await res.json();
      //dataos del pronostico
      setWeatherData(data);

      // console.log("cargo:", data)
      setLoading(false);
      //guardamos el nombre de la ciudad con su pais
      setCity(`${data.city.name}, ${data.city.country}`);
      // console.log("cargo ciudad?",city)
      //guardamos el icono que identifica el pronostico de la ciudad
      setWeatherIcon(`${iconUrl + data.list[0].weather[0]["icon"]}@4x.png`);
      console.log("codigo: " ,data.cod) 
      
    } catch (error) {
      console.log(error.cod)
      setLoading(false);
      console.log(`Fallo por: ${error}`);
      return;
    }
  };
  

  return (
    <LandingContext.Provider
      value={{
        //para obtener la localizacion como parametro en el form
        getWeather,
        setWeatherIcon,
        searchTerm,
        setSearchTerm,
        city,

        //para mostar valores en el card
        weatherData,
        weatherIcon,
        noData,
        setNoData,
        iconUrl,
        loadingData,
      }}
    >
      <Dashboard />
    </LandingContext.Provider>
  );
}
