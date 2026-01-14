import React from 'react'

/**
 * Crear un componente llamado boton (exportable todos los proyectos) que le pase como props un texto, el tipo de boton, onClick;
 * El tipo de boton lo llamare tipo boton tendra 3 tipos o primary, secundary, danger;
 * si es primary backgraund azul 500 hover azul 700
 * si es secondary background gray 500 gray 700
 * si esdanger red 500 red 700
 * texto en blanco
 */

type TipoBoton = "primary" | "secondary" | "danger";
interface BotonProps {
    texto: string;
    tipo: TipoBoton;
    submit?: boolean;
    onClick: () => void;
}

const Boton = ({ texto, tipo, submit, onClick }:BotonProps) => {
    const estilos = {
        primary: "bg-blue-500 hover:bg-blue-700 text-white",
        secondary: "bg-gray-500 hover:bg-gray-700 text-white",
        danger: "bg-red-500 hover:bg-red-700 text-white",
    };
  return (
    <button
    type={submit?"submit":"button"}
    className={`px-4 py-2 rounded font-semibold shadow ${estilos[tipo]}`}
    onClick={onClick}
    >{texto}
    </button>
  )
}

export default Boton