import React from "react";
import 'remixicon/fonts/remixicon.css';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending.jsx";
import Popular from "./components/Popular.jsx";
import Movies from "./components/Movies.jsx";
import TvShows from "./components/TvShows.jsx";
import People from "./components/People.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div className="bg-zinc-900 h-screen w-screen flex">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/trending" element={<Trending/>} />
          <Route path="/popular" element={<Popular/>} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/webseries" element={<TvShows/>} />
          <Route path="/people" element={<People/>} />
          <Route path="/about_us" element={<About/>} />
          <Route path="/contact_us" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
