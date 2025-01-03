import {useNavigate} from "react-router-dom";
import Topnav from "../partials/Topnav.jsx";
import Dropdown from "../partials/Dropdown.jsx";
import {useEffect, useState} from "react";
import axios from "../utils/axios.jsx";
import Cards from "../partials/Cards.jsx";

function Trending() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("all");
    const [duration, setDuration] = useState("day");
    const [trending, setTrending] = useState([]);

    const getTrending = async () => {
        try {
            const {data} = await axios.get(`/trending/${category}/${duration}`);
            setTrending(data.results);
            console.log(data.results);
        }
        catch (error) {
            console.log("Error in Cards Fetching",error);
        }
    }

    useEffect(() => {
        getTrending();
    },[category, duration])

    return trending.length > 0 ? (
        <div className="p-[2%] w-screen h-screen overflow-y-auto">
            <div className="w-full flex items-center h-[8vh]">
                <h1 className="w-[20%] font-semibold text-2xl text-zinc-400">
                    <i className="hover:text-[#6556cd] ri-arrow-left-long-line pr-3"
                       onClick={() => navigate(-1)}>
                    </i>{" "} Trending
                </h1>
                <div className="flex items-center justify-between w-[80%]">
                    <Topnav/>
                    <Dropdown title="Category" options={["tv", "movie", "all"]} func={(e)=>setCategory(e.target.value)}/>
                    <Dropdown title="Duration" options={["day", "week"]} func={(e)=>setDuration(e.target.value)}/>
                </div>
            </div>
            <div className="w-full h-[92vh]">
                <Cards data={trending}/>
            </div>
        </div>
    ) : <h1>Loading......</h1>;
}

export default Trending;