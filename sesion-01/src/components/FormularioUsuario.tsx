import React, { useState } from 'react'
/**
 * Crear un formulario llamado FormularioUsuario que gestione el nombre la edad y email 
 */

interface Usuario {
    nombre: string,
    edad: number,
    email: string
}
const FormularioUsuario = () => {
    const [usuario, setUsuario] = useState<Usuario>({
        nombre: "",
        edad: 0,
        email: ""
    });

    const actualizarCampo = (campo: keyof Usuario, valor: string|number) => {
        setUsuario({
            ...usuario,
            [campo]:valor
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const usuarios: Usuario[] = JSON.parse(localStorage.getItem("usuarios") || "[]");
        usuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        setUsuario({
            nombre: "",
            edad: 0,
            email: ""
        })
    }

  return (
    // Formulario de datos
    <div className='max-w-md mx-auto p-6 bg-white rounded-xl shadow'>
        <h3 className='text-xl font-bold mb-4'>
            Registro de Usuarios:
        </h3>
        <form onSubmit={handleSubmit} className='space-y-4' action="">
            <div>
                <label className='block text-sm font-medium mb-2'>Nombre: </label>
                <input type="text" value={usuario.nombre} required onChange={(e)=> actualizarCampo("nombre",e.target.value)} className='w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500' />
            </div>
            <div>
                <label className='block text-sm font-medium mb-2'>Email: </label>
                <input type="email" value={usuario.email} required onChange={(e)=> actualizarCampo("email",e.target.value)} className='w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500' />
            </div>
            <div>
                <label className='block text-sm font-medium mb-2'>Edad: </label>
                <input type="number" value={usuario.edad} required onChange={(e)=> actualizarCampo("edad",parseInt(e.target.value))} className='w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500' />
            </div>
            <button type='submit' className='w-full py-2 bg-green-500 text-white rounded hover:bg-green-900 font-semibold'>
                Guardar Usuario
            </button>
            <button type='reset' onClick={() => setUsuario({nombre: "", edad: 0, email: ""})} className='w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-900 font-semibold'>
                Limiar
            </button>
            Mostrar los datos que tengo actualmente
            <div className='mt-6 mb-6 p-4 bg-gray-100 rounded'>
                <h4 className='font-semibold mb-2'> Datos Actuales: </h4>
                <pre className='text-sm'>
                    {JSON.stringify(usuario,null,2)}
                </pre>
            </div>
        </form>
    </div>
  )
}

export default FormularioUsuario