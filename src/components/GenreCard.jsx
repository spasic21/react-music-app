import {Link} from "react-router-dom";

const GenreList = ({genreTitle, genreValue, genreIcon}) => {
    const title = genreTitle ? genreTitle : "Pop";
    const value = genreValue ? genreValue : "POP";
    const icon = genreIcon ? genreIcon : null;

    return (
        <Link to={`/discover/${value}`}>
            <div className="relative w-[250px] h-[200px] bg-[#162419] hover:bg-[#4a5e4c] p-4 rounded-3xl cursor-pointer mb-2">
                <p className="absolute top-2 left-2 text-white font-semibold text-2xl px-2 py-1">{title}</p>
                <img src={icon} alt={title} className="absolute bottom-2 right-2 w-32 h-32 bg-white rounded-full object-contain p-2"/>
            </div>
        </Link>
    );
}

export default GenreList;