import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Landing, Footer } from "./Components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
