import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MapIcon from "@mui/icons-material/Map";
import { LandingContext } from "../../Landing";
import Select from "react-select";

const citys = [
  { label: "Buenos Aires", value: "Buenos Aires" },
  { label: "Corrientes", value: "Corrientes" },
  { label: "Posadas", value: "Posadas" },
  { label: "Mendoza", value: "Mendoza" },
  { label: "Cordoba", value: "Cordoba" },
];

export default function FormClima() {
  const { city, searchTerm, setSearchTerm, fetchWeather, setNoData, noData } =
    useContext(LandingContext);

  const handleChange = (input) => {
    const { value } = input.target;
    setSearchTerm(value);
  };

  const handleSelectChange = ({ value }) => {
    setSearchTerm(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm !== "") {
      fetchWeather(searchTerm);
      setNoData(false);
      return;
    } else {
      setNoData(true);
    }
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
        {noData === true ? (
          <div className="w-1/2 text-center font-bold text-red-700 rounded-xl uppercase font-Karla border-red-700 border-4 py-3 mt-5">
            no ingreso datos
          </div>
        ) : null}

        <hr className="h-1 bg-white w-1/4 rounded-full my-5" />
        <form
          noValidate
          className="flex justify-center w-full"
          onSubmit={handleSubmit}
        >
          <div className="relative rounded-xl py-2 px-3 w-2/3 bg-gray-100 bg-opacity-60 placeholder-gray-700">
            <Select
              options={citys}
              onChange={handleSelectChange}
              defaultOption
              className="w-4/5"
            />
          </div>
          <button type="submit" className="z-10">
            <SearchIcon
              className="text-gray-900 -ml-10 z-10 cursor-pointer "
              type="submit"
              aria-hidden="true"
            />
          </button>
        </form>

        {noData === true ? (
          <div className="w-1/2 text-center font-bold text-red-700 rounded-xl uppercase font-Karla border-red-700 border-4 py-3 mt-5">
            no ingreso datos
          </div>
        ) : null}

        <hr className="h-1 bg-white w-1/4 rounded-full my-5" />
        <form
          noValidate
          className="flex justify-center w-full"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Ingrese su Localizacion"
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
  );
}
