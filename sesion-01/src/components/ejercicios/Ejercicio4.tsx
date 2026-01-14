import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Contacto {
  id: string;
  nombre: string;
  telefono: string;
  email: string;
}

const Ejercicio4 = () => {
  const [contactos, setContactos] = useState<Contacto[]>([]);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  const agregarContacto = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre || !telefono || !email) return;

    setContactos([
      ...contactos,
      {
        id: uuidv4(),
        nombre,
        telefono,
        email,
      },
    ]);

    setNombre("");
    setTelefono("");
    setEmail("");
  };

  const eliminarContacto = (id: string) => {
    setContactos(contactos.filter(c => c.id !== id));
  };

  return (
    <div>
      <h2>Lista de contactos</h2>

      <form onSubmit={agregarContacto}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />

        <input
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={e => setTelefono(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <button type="submit">Agregar</button>
      </form>

      <ul>
        {contactos.map(contacto => (
          <li key={contacto.id}>
            {contacto.nombre} - {contacto.telefono} - {contacto.email}
            <button onClick={() => eliminarContacto(contacto.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ejercicio4;