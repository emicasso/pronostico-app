import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing, Footer } from "./Components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
