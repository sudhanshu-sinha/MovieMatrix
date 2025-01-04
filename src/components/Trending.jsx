import {useNavigate} from "react-router-dom";
import Topnav from "../partials/Topnav.jsx";
import Dropdown from "../partials/Dropdown.jsx";
import {useEffect, useState} from "react";
import axios from "../utils/axios.jsx";
import Cards from "../partials/Cards.jsx";
import InfiniteScroll from "react-infinite-scroll-component";

function Trending() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("all");
    const [duration, setDuration] = useState("day");
    const [trending, setTrending] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getTrending = async () => {
        try {
            const {data} = await axios.get(`/trending/${category}/${duration}?page=${page}`);
            if(data.results.length > 0) {
                setTrending((prevState)=>[...prevState, ...data.results]);
                setPage(page + 1);
                console.log(data);
            }
            else{
                setHasMore(false);
            }
        }
        catch (error) {
            console.log("Error in Cards Fetching",error);
        }
    }

    const refreshHandler = () => {
        if(trending.length == 0) {
            getTrending();
        }
        else {
            setPage(1);
            setTrending([]);
            getTrending();
        }
    }

    useEffect(() => {
        refreshHandler();
    },[category, duration])

    return trending.length > 0 ? (
        <div className="w-screen h-screen">
            <div className="px-[1%] pt-8 w-full flex items-center h-[8vh]">
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
            <InfiniteScroll
            dataLength={trending.length}
            next={getTrending}
            hasMore={hasMore}
            loader={<h4 className="bg-[#18181b] text-zinc-400">Loading...</h4>}
            >
                <Cards data={trending}/>
            </InfiniteScroll>
        </div>
    ) : <h1>Loading......</h1>;
}

export default Trending;