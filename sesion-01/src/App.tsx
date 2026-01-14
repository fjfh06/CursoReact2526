import React from "react";
import Ejercicio1 from "./components/ejercicios/Ejercicio1";
import Header from "./components/Header";
import Saludo from "./components/Saludo";
import Tarjeta from "./components/Tarjeta";
import FormularioUsuario from "./components/FormularioUsuario";
import Ejercicio4 from "./components/ejercicios/Ejercicio4";
import Ejercicio5 from "./components/ejercicios/Ejercicio5";
import FormularioLogin from "./components/FormularioLogin";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-300">
      <Header />
      <main className="container bg-gray-100 mx-auto p-4">
        <Saludo nombre="Pepe" edad={40} />
        <Saludo nombre="Carlos" edad={30} />
        <Saludo nombre="Luis" edad={20} />
        <Saludo nombre="Sara" edad={10} />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Tarjeta 
          title="React 19"
          description="Última version de la libreria para javaScript"
          image="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=500"
          />
          <Tarjeta 
          title="React 19"
          description="Última version de la libreria para javaScript"
          image="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=500"
          favorite={true}
          />
          <Tarjeta 
          title="React 19"
          description="Última version de la libreria para javaScript"
          image="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=500"
          />
          <Tarjeta 
          title="React 19"
          description="Última version de la libreria para javaScript"
          favorite={true}
          />
          <Tarjeta 
          title="React 19"
          description="Última version de la libreria para javaScript"
          />
        </div>
        <FormularioUsuario />
        <FormularioLogin />
      <Ejercicio4 />
      <div className="mt-8 p-4 bg-white rounded shadow">
        <Ejercicio5 />
      </div>
      </main>
    </div>
  );
};

export default App;
