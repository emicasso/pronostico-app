import React from "react";
import InfoClima from "./CardInfo/InfoClima";
import FormClima from "./FormSection/FormClima";

export default function Dashboard() {
  return (
    <div className="bg-[#1F293B] flex items-center justify-center h-full py-10 font-Karla">
      <div className="container">
      <div className="flex flex-col lg:flex-row w-4/3 min-h-[50.8rem] rounded-3xl shadow-lg lg:mx-auto mx-4 bg-[#E2EAF3] ">
        <FormClima />
        <InfoClima />
      </div>
      </div>
    </div>
  );
}
