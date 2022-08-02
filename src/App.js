import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "../src/pages/Homes";
import Movie from "./pages/Movie";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
