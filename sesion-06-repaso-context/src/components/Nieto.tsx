import React, { useState } from "react";
import { useFamily } from "../hooks/useFamily";

const Nieto = () => {
  const { mensaje, setMensaje } = useFamily();
  const [newMensaje, setNewMensaje] = useState("")
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="border-4 border-yellow-500 rounded-lg p-4 bg-yellow-50">
        <h1>Nieto</h1>
        <p>
          El mensaje del contexto es: <br /> <strong>{mensaje}</strong>
        </p>
        <div>
          <input
            type="text"
            className=" "
            placeholder="Escribe algo"
            onChange={(e) => setMensaje(e.target.value)}
          />
        </div>
        <br />
        <button
          className="px-4 py-2 rounded-2xl bg-blue-600 text-white hover:bg-gray-700 transition-all"
          onClick={() => setMensaje("Hola desde el contexto de la familia")}
        >
          Resetear Mensaje
        </button>
      </div>
    </div>
  );
};

export default Nieto;