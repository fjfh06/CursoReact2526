import React from "react";
import Padre from "./Padre";
import { useFamily } from "../hooks/useFamily";

const Abuelo = () => {
  const { contador} = useFamily();
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="border-4 border-green-500 rounded-lg p-4 bg-green-50">
        <h1>Abuelo</h1>
        <div className="mt-4 border-4 border-green-200">
          <p>
            El contador vale:
          </p>
          <strong>{contador}</strong>
          <Padre />
        </div>
      </div>
    </div>
  );
};

export default Abuelo;
