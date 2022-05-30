import React, { createContext, useContext } from "react";
import { LandingContext } from "../../Landing/Landing";
import CardDetail from "./CardDetail";
import CardSummary from "./CardSummary";
import { Loading } from "../../../Components";

export const InfoClimaContext = createContext();

export default function InfoClima() {
  const { weatherData, loadingData, city } = useContext(LandingContext);

  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth();
  var year = today.getFullYear();
  var date = day + "/" + month + "/" + year;

  if (loadingData) {
    return <Loading />;
  }

  return (
    <InfoClimaContext.Provider
      value={{
        date,
      }}
    >
      <div className="lg:w-2/4 p-4 pt-9 w-full ">
        <div className="flex flex-col my-1">
          {/* card jsx  */}
          {weatherData.length === 0 ? (
            <div className="container p-4 flex items-center justify-center h-1/3 mb-auto">
              <h1 className="text-gray-300 text-center text-4xl font-bold uppercase">
                Porfavor ingrese Datos
              </h1>
            </div>
          ) : (
            <>
              <h1 className="text-3xl text-gray-800 mt-auto mb-4">
                Hoy en {city}
              </h1>
              <CardDetail />
              <h1 className="text-2xl text-gray-600 mb-4 mt-10">
                Proximos 5 dias en {city}
              </h1>
              <ul className="grid lg:grid-cols-3 gap-2 sm:grid-cols-1">
                {weatherData.list.map((day, i) => {
                  return i === 0 ? null : i % 8 === 0 ? (
                    <CardSummary key={i} day={day} />
                  ) : null;
                })}
              </ul>
            </>
          )}
        </div>
      </div>
    </InfoClimaContext.Provider>
  );
}
