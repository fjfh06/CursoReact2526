import React from "react";
import Nieto from "./Nieto";

const Hijo = () => {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="border-4 border-orange-500 rounded-lg p-4 bg-orang-50">
        <h1>Hijo</h1>
        <div className="mt-4 border-4 border-orange-200">
          <Nieto />
        </div>
      </div>
    </div>
  );
};

export default Hijo;
