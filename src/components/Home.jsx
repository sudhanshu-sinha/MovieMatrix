import React, {useEffect, useState} from "react";
import Sidenav from "../partials/sideNav";
import Topnav from "../partials/Topnav";
import axios from "../utils/axios.jsx";
import Header from "../partials/Header.jsx";
import HorizontalCards from "../partials/HorizontalCards.jsx";
import Dropdown from "../partials/Dropdown.jsx";

function Home() {
  document.title = "MovieMatrix | Homepage";

    const [wallpaper, setWallpaper] = useState();
    const [trending, setTrending] = useState();
    const [category, setCategory] = useState("all")

    const getWallpaper = async () => {
        try {
            const {data} = await axios.get(`/trending/all/day`)
            let randomData = data.results[(Math.random()* data.results.length).toFixed()];
            setWallpaper(randomData);
        }
        catch (error) {
            console.log("Error in getWallpaper",error);
        }
    }

    const getTrending = async ()=> {
        try {
            const {data} = await axios.get(`/trending/${category}/day`);
            setTrending(data.results);
        }
        catch (error) {
            console.log("Error in Cards Fetching",error);
        }
    }

    useEffect(() => {
        getTrending();
        !wallpaper && getWallpaper();
    }, [category]);

  return wallpaper && trending ? (
    <>
      <Sidenav />
        <div className="w-[80%] h-full overflow-hidden ">
            <Topnav/>
            <Header data={wallpaper}/>
            <div className="p-3 flex justify-between">
                <h1 className="font-semibold text-zinc-400 text-3xl">Trending</h1>
                <Dropdown title="Filter" options={["tv", "movie", "all"]} func={(e)=>setCategory(e.target.value)}/>
            </div>
            <HorizontalCards data={trending}/>
        </div>
    </>
  ) : <h1>Loading......</h1>;
}

export default Home;
