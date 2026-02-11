import React from "react";
import Hijo from "./Hijo";
import { useFamily } from "../hooks/useFamily";

const Padre = () => {
  const { incrementarContador, decrementarContador} = useFamily();
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="border-4 border-red-500 rounded-lg p-4 bg-red-50">
        <h1>Padre</h1>
        <div className="mt-4 border-4 border-red-200">
        <button className="px-4 py-2 rounded-2xl bg-blue-500 text-white hover:bg-blue-800 transition-all" onClick={incrementarContador}>Incrementar Contador</button>
        <button className="px-4 py-2 rounded-2xl bg-red-500 text-white hover:bg-red-800 transition-all" onClick={decrementarContador}>Decrementar Contador</button>
          <Hijo />
        </div>
      </div>
    </div>
  );
};

export default Padre;
