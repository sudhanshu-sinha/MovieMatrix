import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios.jsx";
import noImg from "../assets/noImg.png"


function Topnav() {
  const [query, setquery] = useState("");
    const [searches, setSearches] = useState([]);
    const getSearches = async () => {
        try {
            const {data} = await axios.get(`/search/multi?query=${query}`);
            setSearches(data.results);
        } catch (error) {
            console.error("Error fetching searches", error);
        }
    };

    useEffect(() => {
        getSearches();
    }, [query]);
    
  return (
    <div className="w-full h-[7vh] flex items-center justify-center relative ">
      <i className="text-zinc-400 text-2xl ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 bg-transparent mx-10 border-none outline-none"
        id="movie-search"
        type="text"
        placeholder="Search for movies..."
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-zinc-400 text-2xl ri-close-fill"
        ></i>
      )}

      <div className="absolute top-[90%] w-[50%] max-h-[50vh] bg-zinc-200 overflow-auto rounded">
          {searches.map((search,i) => (
              <Link key={i} className="flex justify-start items-center border-b-2 border-zinc-100 duration-300 hover:text-black hover:bg-zinc-300  text-zinc-500 w-[100%] p-2 font-semibold"   >
                  <img className="w-24 h-24 rounded shadow-lg hover:shadow-xl" src={(search.profile_path || search.poster_path) ? `https://image.tmdb.org/t/p/original/${search.poster_path || search.profile_path}` : noImg
                  } alt={search.name || search.title || "Movie Poster"} />
                  <div className="flex flex-col justify-start items-start ml-5">
                      <span>{search.name || search.title || search.original_name || search.original_title}</span>
                      {search.vote_average && `Rating: ${search.vote_average}`}
                  </div>

              </Link>
          ))}
      </div>
    </div>
  );
}

export default Topnav;
