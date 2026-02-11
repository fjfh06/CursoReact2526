import React from 'react'
import type { Plato } from '../types';

/**
 * Crear un componente buscar que permita buscar por nombre plato o por ingrediente por pulsacion
 */

interface BuscarPlatoProps {
  platosPromise: Promise<Plato[]>;
  setPlatosPromise: (promise: Promise<Plato[]>) => void;
}

const BuscarPlato = ({ platosPromise, setPlatosPromise }: BuscarPlatoProps) => {

  return (
    <div>BuscarPlato</div>
  )
}

export default BuscarPlato