import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Hello from "../pages/Hello";
import History from "../pages/History";
import Main from "../pages/Main";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/intro/greeting" element={<Hello />} />
        <Route path="/intro/history" element={<History />} />
        {/* <Route path="/intro/officetree" element={<History />} />
        <Route path="/intro/introduction" element={<History />} />
        <Route path="/intro/map" element={<History />} /> */}
        </Routes>
    </BrowserRouter>
  );
};

export default App;
