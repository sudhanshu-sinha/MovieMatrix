import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending.jsx";

function App() {
  return (
    <div className="bg-zinc-900 h-screen w-screen flex">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/trending" element={<Trending/>} />
      </Routes>
    </div>
  );
}

export default App;
