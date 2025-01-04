import {Link} from "react-router-dom";
import noImg from "../assets/noImg.png";
function Cards({data}){
    return(
        <div className="p-[2.37%] cards flex flex-wrap bg-[#18181b] w-full gap-x-11">
            {data.map((card, index) => (
                <Link key={index} className="relative w-[27.3vh] my-3">
                    <img className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[40vh] w-full object-cover" src={(card.poster_path||card.backdrop_path || card.profile_path)?`https://image.tmdb.org/t/p/original/${card.poster_path || card.backdrop_path || card.profile_path}`: noImg} alt="img"/>
                    <h1 className="text-xl text-zinc-400 mt-2 font-semibold">
                        {card.title ||
                        card.name || card.original_title ||
                        card.original_name}
                    </h1>
                    {card.vote_average &&<div
                        className="absolute bottom-[25%] right-[-10%] w-[5vh] h-[5vh] bg-[#eab308] rounded-full flex justify-center items-center text-white font-semibold text-md">
                        {(card.vote_average * 10).toFixed()}<sup>%</sup>
                    </div>}
                </Link>
            ))}
        </div>
    )
}

export default Cards;