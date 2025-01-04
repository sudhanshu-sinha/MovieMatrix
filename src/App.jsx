import React from "react";
import 'remixicon/fonts/remixicon.css';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending.jsx";
import Popular from "./components/Popular.jsx";

function App() {
  return (
    <div className="bg-zinc-900 h-screen w-screen flex">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/trending" element={<Trending/>} />
          <Route path="/popular" element={<Popular/>} />
      </Routes>
    </div>
  );
}

export default App;
