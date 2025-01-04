import axios from "../utils/axios";
import React, {useEffect} from "react";
import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-500 p-3 ">
      <h1 className="text-2xl font-bold text-white">
        <i className="mr-2 text-[#6556CD] ri-tv-fill text-2xl"></i>
        <span className="">MovieMatrix</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 gap-2">
        <h1 className="mt-10 mb-5 font-semibold text-white text-lg">
          New Feeds
        </h1>
        <Link to="/trending" className=" p-4 hover:bg-[#6556CD] duration-300 hover:text-white rounded-lg">
          <i className="ri-fire-fill p-2"></i>Trending
        </Link>
        <Link to="/popular" className=" p-4 hover:bg-[#6556CD] duration-300 hover:text-white rounded-lg">
          <i className="ri-bard-fill p-2"></i>Popular
        </Link>
        <Link to="/movies" className=" p-4 hover:bg-[#6556CD] duration-300 hover:text-white rounded-lg">
          <i className="ri-movie-2-fill p-2"></i>Movies
        </Link>
        <Link to="/webseries" className=" p-4 hover:bg-[#6556CD] duration-300 hover:text-white rounded-lg">
          <i className="ri-tv-2-fill p-2"></i>Web Series
        </Link>
        <Link className=" p-4 hover:bg-[#6556CD] duration-300 hover:text-white rounded-lg">
          <i className="ri-team-fill p-2"></i>People
        </Link>
        <hr></hr>
        <h2 className="text-white font-semibold my-2">Website Information</h2>
        <Link className=" hover:bg-[#6556CD] duration-300 hover:text-white p-4 rounded-lg">
          <i className="ri-information-fill p-2"></i>About MovieMatrix
        </Link>
        <Link className=" hover:bg-[#6556CD] duration-300 hover:text-white p-4 rounded-lg">
          <i className="ri-phone-fill p-2"></i>Contact Us
        </Link>
      </nav>
    </div>
  );
}

export default Sidenav;
