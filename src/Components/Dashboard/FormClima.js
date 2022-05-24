import React from "react";

export default function FormClima() {
  return (
    //  form
    <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
      <div className="flex-1">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
             PRONOSTICO APP
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-300">
            Ingrese una ciudad o pais
          </p>
        </div>
        <div className="mt-8">
          <form>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Localizacion"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Buscar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
