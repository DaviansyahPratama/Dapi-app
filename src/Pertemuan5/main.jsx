import React from "react";
import { createRoot } from "react-dom/client";


import './tailwind.css';


import FrameworkListSearchAndFilter from "./FrameworkListSearchAndFilter";
import ResponsiveDesign from "./ResponsiveDesign";


const container = document.getElementById("root");
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto space-y-10">
        
        <section className="bg-white p-6 rounded-lg shadow-md">
          <FrameworkListSearchAndFilter />
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <ResponsiveDesign />
        </section>

      </div>
    </div>
  </React.StrictMode>
);