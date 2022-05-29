import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MapIcon from "@mui/icons-material/Map";
import { LandingContext } from "../../Landing";

export default function FormClima() {
  const { city, searchTerm, setSearchTerm, getWeather } =
    useContext(LandingContext);

  // console.log(localizacion)

  const handleChange = (input) => {
    const { value } = input.target;
    setSearchTerm(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(searchTerm);
  };

  return (
    // {/* form card section  */}
    <div className="form-container lg:w-2/4 p-4 w-full">
      <div className="flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-2 grid-cols-2">
          <div className="">
            <h3
              className="my-auto mr-auto text-xl font-bold shadow-md py-1 px-3 
            rounded-md bg-white bg-opacity-30 text-gray-700"
            >
              PRONOSTICO APP
            </h3>
          </div>
          <div
            className="flex my-auto mr-auto text-xl font-bold shadow-md py-1 px-3 
            rounded-md text-gray-300 bg-gray-600 bg-opacity-80"
          >
            <MapIcon className="my-auto" aria-hidden="true" />
            <div className="">
              <h3 className="">{city}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl text-center font-bold text-gray-700">
          La unica aplicacion del clima que Necesitas
        </h1>
        <hr className="h-1 bg-white w-1/4 rounded-full my-5" />

        <form
          noValidate
          className="flex justify-center w-full"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Localizacion"
            className="relative rounded-xl py-2 px-3 w-2/3 bg-gray-100 bg-opacity-60 placeholder-gray-700"
            onChange={handleChange}
            required
          />
          <button type="submit" className="z-10">
            <SearchIcon
              className="text-gray-900 -ml-10 z-10 cursor-pointer "
              type="submit"
              aria-hidden="true"
            />
          </button>
        </form>
      </div>
    </div>

    //  form
    // <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
    //   <div className="flex-1">
    //     <div className="text-center">
    //       <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
    //          PRONOSTICO APP
    //       </h2>
    //       <p className="mt-3 text-gray-500 dark:text-gray-300">
    //         Ingrese una ciudad o pais
    //       </p>
    //     </div>
    //     <div className="mt-8">
    //       <form>
    //         <div>
    //           <input
    //             type="email"
    //             name="email"
    //             id="email"
    //             placeholder="Localizacion"
    //             className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
    //           />
    //           <i class="fa-solid fa-location-dot"></i>
    //         </div>
    //         <div className="mt-6">
    //           <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
    //             Buscar
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
}
