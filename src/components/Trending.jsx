import {useNavigate} from "react-router-dom";
import Topnav from "../partials/Topnav.jsx";
import Dropdown from "../partials/Dropdown.jsx";
import {useState} from "react";

function Trending() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("all");
    return (
        <div className="p-[3%] w-screen h-screen">
            <div className="w-full flex items-center">
                <h1 className="w-[20%] font-semibold text-2xl text-zinc-400">
                    <i className="hover:text-[#6556cd] ri-arrow-left-long-line pr-3"
                       onClick={() => navigate(-1)}>
                    </i>{" "} Trending
                </h1>
                <div className="flex items-center justify-between w-[80%]">
                    <Topnav/>
                    <Dropdown title="Filter" options={["tv", "movie", "all"]} func={(e)=>setCategory(e.target.value)}/>
                    <Dropdown title="Duration" options={["day", "week"]} func={(e)=>setCategory(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}

export default Trending;