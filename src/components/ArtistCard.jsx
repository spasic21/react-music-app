import {Link} from "react-router-dom";

const ArtistCard = ({artistImage, artistName, artistId}) => {
    return (
        <div className="w-[135px] sm:w-[250px] hover:bg-[#4a5e4c] p-4 rounded-3xl cursor-pointer mb-2">
            <Link to={artistName ? `/artists/${artistId}` : "/top-artists"}>
                <img src={artistImage} alt={artistName} className="w-full rounded-full object-cover"/>
                <p className="text-white font-semibold text-base sm:text-lg mt-2 break-words cursor-pointer">{artistName}</p>
            </Link>
        </div>
    );
};

export default ArtistCard;
