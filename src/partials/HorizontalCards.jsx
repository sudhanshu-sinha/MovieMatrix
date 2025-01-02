import {useEffect, useState} from "react";
import axios from "../utils/axios.jsx";
import {Link} from "react-router-dom";
import Dropdown from "./Dropdown.jsx";

function HorizontalCards({data}) {
    return(
            <div className="cards flex gap-2 overflow-x-auto p-3">
                {data.map((card, index) => (
                    <div key={index}
                         className="card mr-5 flex flex-col justify-center p-1 rounded shadow-xl border-1 bg-white min-w-[15%]">
                        <img className="w-full object-cover rounded"
                             src={`https://image.tmdb.org/t/p/original/${card.poster_path || card.profile_path}`}
                             alt="img"/>
                        {/*<div className="card-body flex flex-col">*/}
                        {/*    <h1 className="text-xl font-semibold">{card.title || card.name || card.original_name || card.original_title}</h1>*/}
                        {/*</div>*/}
                    </div>
                    ))}
            </div>
    )
}


export default HorizontalCards;