import React from "react";
import FormClima from "./FormClima";
import InfoClima from "./InfoClima";

export default function Dashboard() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex justify-center h-screen">
        <InfoClima />
        <FormClima />
      </div>
    </div>
  );
}
