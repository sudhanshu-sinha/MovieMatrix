import {Link} from "react-router-dom";

function Cards({data}){
    return(
        <div className="cards flex flex-wrap w-full gap-x-11">
            {data.map((card, index) => (
                <Link key={index} className="w-[27.3vh] mb-[3%] mt-3">
                    <img className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[40vh] w-full object-cover" src={`https://image.tmdb.org/t/p/original/${card.poster_path || card.backdrop_path}`} alt="img"/>
                    <h1 className="text-xl text-zinc-400 mt-2 font-semibold">
                        {card.title ||
                        card.name || card.original_title ||
                        card.original_name}
                    </h1>
                </Link>
            ))}
        </div>
    )
}

export default Cards;