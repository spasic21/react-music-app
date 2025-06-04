import {Link} from "react-router-dom";

const ArtistCard = ({artistImage, artistName, artistId}) => {
    return (
        <div className="w-[250px] hover:bg-[#4a5e4c] p-4 rounded-lg cursor-pointer mb-2">
            <Link to={artistName ? `/artists/${artistId}` : "/top-artists"}>
                <img src={artistImage} alt={artistName} className="w-full rounded-lg object-cover"/>
                <p className="text-white font-semibold text-lg mt-2 truncate cursor-pointer">{artistName}</p>
            </Link>
        </div>
    );
};

export default ArtistCard;
