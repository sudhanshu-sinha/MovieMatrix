import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "../utils/axios.jsx";
import Topnav from "../partials/Topnav.jsx";
import Dropdown from "../partials/Dropdown.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "../partials/Cards.jsx";

function Movies(){
    const navigate= useNavigate();
    const [category, setCategory] = useState("now_playing");
    const [movie, setMovie] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    document.title = "MovieMatrix | Movies";

    const getMovie = async () => {
        try {
            const {data} = await axios.get(`/movie/${category}?page=${page}`);
            if(data.results.length > 0) {
                setMovie((prevState)=>[...prevState, ...data.results]);
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
        if(movie.length == 0) {
            getMovie();
        }
        else {
            setPage(1);
            setMovie([]);
            getMovie();
        }
    }

    useEffect(() => {
        refreshHandler();
    },[category])

    return movie.length > 0 ?(
        <div className="w-screen h-screen">
            <div className="px-[1%] pt-8 w-full flex items-center h-[8vh]">
                <h1 className="w-[20%] font-semibold text-2xl text-zinc-400">
                    <i className="hover:text-[#6556cd] ri-arrow-left-long-line pr-3"
                       onClick={() => navigate(-1)}>
                    </i>{" "} Movies <small className="ml-2 text-sm text-zinc-600">({category.charAt(0).toUpperCase()+category.slice(1)})</small>
                </h1>
                <div className="flex items-center justify-between w-[80%]">
                    <Topnav/>
                    <Dropdown title="Category" options={["upcoming", "popular", "top_rated", "now_playing"]}
                              func={(e) => setCategory(e.target.value)}/>
                </div>
            </div>
            <InfiniteScroll
                dataLength={movie.length}
                next={getMovie}
                hasMore={hasMore}
                loader={<h4 className="bg-[#18181b] text-zinc-400">Loading...</h4>}
            >
                <Cards data={movie}/>
            </InfiniteScroll>
        </div>
    ):(<h1>Loading......</h1>);
}

export default Movies;