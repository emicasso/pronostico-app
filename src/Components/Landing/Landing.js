import React, { createContext } from "react";
import { useWeather } from "../../hooks/useWeather";
import Dashboard from "../Dashboard/Dashboard";

export const LandingContext = createContext();

export default function Landing() {
  const {
    noData,
    searchTerm,
    weatherData,
    loadingData,
    city,
    iconUrl,
    weatherIcon,
    fetchWeather,
    setNoData,
    setSearchTerm
  } = useWeather();

  return (
    <LandingContext.Provider
      value={{
        //para obtener la localizacion como parametro en el form
        fetchWeather,
        searchTerm,
        setNoData,
        setSearchTerm,
        
        //para mostar valores en el card
        city,
        weatherData,
        weatherIcon,
        noData,
        iconUrl,
        loadingData,
      }}
    >
      <Dashboard />
    </LandingContext.Provider>
  );
}
