import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Hello from "../pages/Hello";
import Main from "../pages/Main";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/greeting" element={<Hello />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
