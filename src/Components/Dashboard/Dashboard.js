import React from "react";
import InfoClima from "./CardInfo/InfoClima";
import FormClima from "./FormSection/FormClima";

export default function Dashboard() {
  return (
    <div className="bg-[#1F293B] flex items-center justify-center  h-screen py-10 font-Karla">
      <div className="flex w-3/4 min-h-full rounded-3xl shadow-lg m-auto bg-[#E2EAF3]">
        <InfoClima />
        <FormClima />
      </div>
    </div>
  );
}
