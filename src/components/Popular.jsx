import Topnav from "../partials/Topnav.jsx";
import Dropdown from "../partials/Dropdown.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "../utils/axios.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "../partials/Cards.jsx";

function Popular(){
    const navigate= useNavigate();
    const [category, setCategory] = useState("movie");
    const [popular, setPopular] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    document.title = "MovieMatrix | Popular";

    const getPopular = async () => {
        try {
            const {data} = await axios.get(`/${category}/popular?page=${page}`);
            if(data.results.length > 0) {
                setPopular((prevState)=>[...prevState, ...data.results]);
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
        if(popular.length == 0) {
            getPopular();
        }
        else {
            setPage(1);
            setPopular([]);
            getPopular();
        }
    }

    useEffect(() => {
        refreshHandler();
    },[category])

    return popular.length > 0 ?(
        <div className="w-screen h-screen">
            <div className="px-[1%] pt-8 w-full flex items-center h-[8vh]">
                <h1 className="w-[20%] font-semibold text-2xl text-zinc-400">
                    <i className="hover:text-[#6556cd] ri-arrow-left-long-line pr-3"
                       onClick={() => navigate(-1)}>
                    </i>{" "} Popular <small
                    className="ml-2 text-sm text-zinc-600">({category.charAt(0).toUpperCase() + category.slice(1)})</small>
                </h1>
                <div className="flex items-center justify-between w-[80%]">
                    <Topnav/>
                    <Dropdown title="Category" options={["tv", "movie"]}
                              func={(e) => setCategory(e.target.value)}/>
                </div>
            </div>
            <InfiniteScroll
                dataLength={popular.length}
                next={getPopular}
                hasMore={hasMore}
                loader={<h4 className="bg-[#18181b] text-zinc-400">Loading...</h4>}
            >
                <Cards data={popular}/>
            </InfiniteScroll>
        </div>
    ) : <h1>Loading......</h1>;
}

export default Popular;