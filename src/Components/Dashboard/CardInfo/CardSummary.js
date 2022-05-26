import React from "react";

export default function CardSummary() {
  return (
    <li className="container p-4 flex items-center shadow-xl justify-center bg-white rounded-lg my-auto mr-1">
      <div className="my-auto">
        <p className="font-bold text-3xl text-pink-600 mb-2">
          15&deg;C
        </p>
        <p className="text-2xl text-gray-800 tracking-widest">
          Nubes
          <img  className="w-1/4 inline" />
        </p>
        <p className="text-gray-400 text-xs uppercase tracking-widest">
         Pocas Nubes
        </p>
        <p className="tracking-wider">
         Viernes
        </p>
      </div>
    </li>
  );
}
