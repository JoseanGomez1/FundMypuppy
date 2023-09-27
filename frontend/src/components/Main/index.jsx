import React from "react";
import { Routes, Route } from "react-router-dom";
import Puppies from "../../pages/Puppies/";
import Show from "../../pages/Show/";
import _404 from "../../pages/Error/";

export default function Main(props) {
  return (
    <main>
      <Routes>
        {/* Route for the Puppies component */}
        <Route path="/" element={<Puppies />} />

        {/* Route for the Show component */}
        <Route path="/puppies/:id" element={<Show />} />

        {/* Catch-all route for 404 errors */}
        <Route path="/*" element={<_404 />} />
      </Routes>
    </main>
  );
}
