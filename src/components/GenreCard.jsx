import {Link} from "react-router-dom";

const GenreList = ({genreTitle, genreValue, genreIcon}) => {
    const title = genreTitle ? genreTitle : "Pop";
    const value = genreValue ? genreValue : "POP";
    const icon = genreIcon ? genreIcon : null;

    return (
        <Link to={`/discover/${value}`}>
            <div className="relative w-[125px] h-[130px] sm:w-[250px] sm:h-[200px] bg-[#162419] hover:bg-[#4a5e4c] p-4 animate-slideup rounded-3xl cursor-pointer mb-2">
                <img src={icon} alt={title} className="w-16 h-16 sm:w-32 sm:h-32 sm:absolute sm:bottom-2 sm:right-2 bg-white rounded-full object-contain p-2"/>
                <p className="sm:absolute sm:top-2 sm:left-2 text-white font-semibold text-sm sm:text-2xl px-2 py-1 break-words">{title}</p>
            </div>
        </Link>
    );
}

export default GenreList;