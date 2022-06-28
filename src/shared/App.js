import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import CI from "../pages/CI";
import FindWay from "../pages/FindWay";
import Hello from "../pages/Hello";
import History from "../pages/History";
import Introduction from "../pages/Introduction";
import Main from "../pages/Main";
import Portfolio from "../pages/Portfolio";
import Tree from "../pages/Tree";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/intro" element={<Introduction />} />
        <Route path="/intro/greeting" element={<Hello />} />
        <Route path="/intro/history" element={<History />} />
        <Route path="/intro/officetree" element={<Tree />} />
        <Route path="/intro/CIintro" element={<CI />} />
        <Route path="/intro/map" element={<FindWay />} />
        <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
