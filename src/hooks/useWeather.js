import { useState } from "react";

export function useWeather() {
  let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?&lang=sp";

  let api_key = "&appid=8a5e9515a6583a0a93a8e614d848ffb5";

  let cityUrl = "&q=";

  let iconUrl = "http://openweathermap.org/img/wn/";

  const [noData, setNoData] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [loadingData, setLoading] = useState(false);
  const [city, setCity] = useState("Sin busqueda");
  const [weatherIcon, setWeatherIcon] = useState(`${iconUrl}10n@2x.png`);

  const fetchWeather = async (loc) => {
    urlForecast = urlForecast + cityUrl + loc + api_key;
    setWeatherData([]);
    console.log("empezo a cargar");
    setLoading(true);

    try {
      let res = await fetch(urlForecast);
      let data = await res.json();
      //dataos del pronostico
      setWeatherData(data);

      setLoading(false);
      //guardamos el nombre de la ciudad con su pais
      setCity(`${data.city.name}, ${data.city.country}`);
      //guardamos el icono que identifica el pronostico de la ciudad
      setWeatherIcon(`${iconUrl + data.list[0].weather[0]["icon"]}@4x.png`);
      console.log("codigo: ", data.cod);
    } catch (error) {
      console.log(error.cod);
      setLoading(false);
      console.log(`Fallo por: ${error}`);
      return;
    }
  };

  return {
    noData,
    setNoData,
    searchTerm,
    setSearchTerm,
    weatherData,
    setWeatherData,
    loadingData,
    setLoading,
    city,
    setCity,
    weatherIcon,
    setWeatherIcon,
    fetchWeather,
    iconUrl
  };
}
