import { Route, Routes } from "react-router-dom";
import PublicHome from "./pages/PublicHome";
import SecretArea from "./pages/SecretArea";
import { useState } from "react";
import { ProtectedRoute } from "./helpers/Protected";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Header from "./components/Header";

const App = () => {
  //hooks
  const [isAllowed, setIsAllowed] = useState<boolean>(false);
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Navbar>
      <div>
        <button onClick={ () => setIsAllowed(!isAllowed)} className={` px-10 py-3 rounded-xl text-xs uppercase transition-all active:scale-90 ${
          isAllowed
          ?' bg-slate-900 text-slate-400 border-slate-700'
          :'bg-indigo-600 text-white shadow-lg shadow-indigo-400'
        }`}>
          {isAllowed?" Sign out":"Sing In"}
        </button>
      </div>
      </Navbar>
      <main className="max-w-4xl mx-auto">
        <Routes>
          <Route path="/" element={<PublicHome />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/secret"
            element={
              <ProtectedRoute isAllowed={isAllowed}>
                <SecretArea />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
