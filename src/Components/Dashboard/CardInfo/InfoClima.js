import React, { useContext } from "react";
import { DashboardContext } from "../../Landing/Landing";
import CardDetail from "./CardDetail";
import CardSummary from "./CardSummary";

export default function InfoClima() {
  const { show, loading, weather, forecast } = useContext(DashboardContext);



  return (
    // {/* info card section  */}
    <div className="w-2/4 p-5">
      <div className="flex flex-col my-10">
        {/* card jsx  */}
        
        {show === true ? (
        <>
          <h1 className="text-5xl text-gray-800 mt-auto mb-4">Hoy</h1>
          <CardDetail />
          <h1 className="text-3xl text-gray-600 mb-4 mt-10">Proximos 5 dias en {/* {city} */} Corrientes</h1>
          <ul className="grid grid-cols-3 gap-2">
          {show.list.map((days, index) => {
                    if (index > 0) {
                      return <CardSummary key={index} day={days} />;
                    }
                  })} 
          </ul>
        </>

        ) : (
          <div className="container p-4 flex items-center justify-center h-1/3 mb-auto">
                <h1 className="text-gray-300 text-4xl font-bold uppercase">
                  Porfavor ingrese Datos
                </h1>
              </div>
        )}
        {/* <div className="container p-4 flex items-center justify-center h-1/3 mb-auto">
          <h1 className="text-gray-300 text-4xl font-bold uppercase"></h1>
        </div> */}
      </div>
      {/* 
      {weatherData.length === 0 ? (
            <div className="container p-4 flex items-center justify-center h-1/3 mb-auto">
              <h1 className="text-gray-300 text-4xl font-bold uppercase">
                {noData}
              </h1>
            </div>
          ) : (
            <>
              <h1 className="text-5xl text-gray-800 mt-auto mb-4">Hoy</h1>
              <DetailCard weather_icon={weatherIcon} data={weatherData} />
              <h1 className="text-3xl text-gray-600 mb-4 mt-10">
                Mas en {city}
              </h1>
              <ul className="grid grid-cols-2  gap-2">
                {weatherData.list.map((days, index) => {
                  if (index > 0) {
                    return <SummaryCard key={index} day={days} />;
                  }
                })}
              </ul>
            </>
          )} */}
    </div>
  );
}
