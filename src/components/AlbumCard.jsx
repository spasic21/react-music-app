import {Link} from "react-router-dom";

const AlbumCard = ({albumImage, albumTitle, artistName, albumId}) => {
    return (
        <div className="w-[200px] hover:bg-[#4a5e4c] p-2 rounded-lg cursor-pointer mb-2">
            <Link to={albumTitle ? `/albums/${albumId}` : "/top-albums"}>
                <img src={albumImage} alt={artistName} className="w-full rounded-lg object-cover"/>

                <p className="text-white text-base mt-2 truncate">{albumTitle}</p>
                <p className="text-gray-300 text-base cursor-pointer">{artistName}</p>
            </Link>
        </div>
    );
};

export default AlbumCard;