import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Header = ({data}) => {
    console.log(data);
    return (
        <div style={{background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`, backgroundPosition: "center", backgroundSize:"cover",}}
             className="Header w-full h-[48vh] flex flex-col justify-end p-12">
            <span className="text-5xl font-black w-[70%] text-white">{data.name || data.title || data.original_title || data.original_name}</span>
            <p className="mt-3 w-[70%] text-white ">{data.overview.slice(0,200)}... <Link className="text-blue-400">more</Link></p>
            <p className="text-white mt-2">
                <i className="text-yellow-500 ri-megaphone-fill"></i>{" "}{data.release_date || "No Information"}
                <i className="text-yellow-500 ml-4 ri-album-fill"></i>{" "}{data.media_type.toUpperCase()}
            </p>
            <Link className="bg-blue-800 rounded p-4 mt-5 text-white w-fit">{" "}Watch Trailer</Link>
        </div>

    )
}

export default Header;