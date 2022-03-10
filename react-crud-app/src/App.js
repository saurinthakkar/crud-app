import "./App.css";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Create />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/read" element={<Read />} />
        <Route exact path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
