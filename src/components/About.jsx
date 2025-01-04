import {useNavigate} from "react-router-dom";

function About(){
    const navigate = useNavigate();
    return(
        <div className="w-screen h-screen overflow-auto">
            <div className="p-[2%] flex justify-start items-center text-zinc-400">
                <h1 className="text-2xl font-semibold">
                    <i className="hover:text-[#6556cd] ri-arrow-left-long-line pr-5"
                       onClick={() => navigate(-1)}>
                    </i>{" "}
                    About Us
                </h1>
            </div>
            <div className="p-[2%] flex flex-col justify-center items-center mb-[7%]">
                <h1 className="text-4xl font-semibold text-[#eab308]">Let's talk about MovieMatrix</h1>
                <p className="text-xl mt-7 text-zinc-400 px-[14%] text-center">
                    Welcome to MovieMatrix, your ultimate destination for exploring the fascinating world of movies and
                    TV shows!<br/>

                    At MovieMatrix, we believe in celebrating the magic of storytelling that captivates audiences across
                    the globe. Our platform is designed to provide a comprehensive space where movie enthusiasts, TV
                    show lovers, and casual viewers alike can discover, explore, and connect with the entertainment they
                    love.
                </p>
                <h1 className="mt-24 text-4xl font-black text-[#eab308]">Who We Are</h1>
                <p className="text-xl mt-7 text-zinc-400 px-[14%] text-center">
                    We are a team of passionate cinephiles and tech enthusiasts driven by a shared love for cinema and
                    technology. MovieMatrix is more than just a movie database—it’s a thriving hub for fans to dive
                    deeper into their favorite films and shows, stay updated on the latest trends, and engage in
                    meaningful discussions about the stories that move us.
                </p>
                <h1 className="mt-24 text-4xl font-black text-[#eab308]">What We Offer</h1>
                <ul className="text-xl mt-7 text-zinc-400 px-[14%] text-justify">
                    <li className="mt-5">Trending Content: Stay ahead of the curve with insights into the latest
                        trending movies and shows, updated daily.
                    </li>
                    <li className="mt-5">Detailed Information: Dive into a rich database of titles with in-depth details
                        about cast, crew, plot summaries, reviews, ratings, and more.
                    </li>
                    <li className="mt-5">Personalized Discovery: Find recommendations tailored to your preferences,
                        helping you uncover hidden gems and timeless classics.
                    </li>
                    <li className="mt-5">Community Interaction: Join a growing community of film and TV enthusiasts who
                        share your passion for great storytelling.
                    </li>
                </ul>
                <h1 className="mt-24 text-4xl font-black text-[#eab308]">Our Vision</h1>
                <p className="text-xl mt-7 text-zinc-400 px-[14%] text-center">
                    Our vision is to be the most comprehensive movie and TV database in the world, providing a
                    comprehensive platform for movie and TV enthusiasts to discover, explore, and connect with the
                    entertainment they love.
                </p>
            </div>

        </div>
    )
}

export default About;