import {Link} from "react-router-dom";

const AlbumCard = ({albumImage, albumTitle, artistName, albumId}) => {
    return (
        <div className="w-[135px] sm:w-[250px] hover:bg-[#4a5e4c] p-4 rounded-3xl animate-slideup cursor-pointer mb-2">
            <Link to={albumTitle ? `/albums/${albumId}` : "/top-albums"}>
                <img src={albumImage} alt={artistName} className="w-full rounded-3xl object-cover"/>

                <p className="text-white font-semibold text-base sm:text-lg mt-2 truncate">{albumTitle}</p>
                <p className="text-gray-300 text-sm sm:text-base cursor-pointer">{artistName}</p>
            </Link>
        </div>
    );
};

export default AlbumCard;