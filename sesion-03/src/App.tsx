import React, { Suspense, useState } from "react";
import PlatosList from "./components/PlatosList";
import Header from "./components/Header";
import LoadingFallback from "./components/LoadingFallback";
import { fetchPlatos } from "./utils/api";
import BuscarPlato from "./components/BuscarPlato";

const App = () => {
  //hooks
  const [platosPromise, setPlatosPromise] = useState(() => fetchPlatos());
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Header />
        <main>
          {/* <ErrorBanding> */}
            <Suspense
              fallback={
                <LoadingFallback message="Cocinando Platos para ti... 🍽️" />
              }
            >
              <BuscarPlato
                platosPromise={platosPromise}
                setPlatosPromise={setPlatosPromise}
              />
              <PlatosList platosPromise={platosPromise} />
            </Suspense>
          {/* </ErrorBanding> */}
        </main>
      </div>
    </div>
  );
};

export default App;
