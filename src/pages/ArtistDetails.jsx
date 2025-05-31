import {Link, useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {DetailsHeader, Error, Loader, RelatedSongs} from "../components";

import {setActiveSong, playPause} from "../redux/features/playerSlice";
import {useGetArtistDetailsQuery, useGetArtistTopTracksQuery} from "../redux/services/deezerCore";
import PlayPause from "../components/PlayPause.jsx";

const TopTrackCard = ({song, index, isPlaying, activeSong, handlePauseClick, handlePlayClick}) => (
    <div className="w-full flex flex-row items-center hover:bg-[#4a5e4c] py-2 p-4 rounded-lg cursor-pointer mb-2">
        <h3 className="font-bold text-base text-white mr-3">{index + 1}.</h3>
        <div className="flex-1 flex flex-row justify-between items-center">
            <img src={song?.album.cover} alt={song.title} className="w-20 h-20 rounded-lg" />
            <div className="flex-1 flex flex-col justify-center mx-3">
                <p className="text-xl font-bold text-white">{song?.title}</p>
                <p className="text-base text-gray-300 mt-1">{song?.artist.name}</p>
            </div>
        </div>

        <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
        />
    </div>
);

const ArtistDetails = () => {
    const dispatch = useDispatch();
    const {artistId} = useParams();
    const {activeSong, isPlaying} = useSelector((state) => state.player);
    const {data: artistData, isFetching: isFetchingArtistDetails} = useGetArtistDetailsQuery(artistId);
    const {data: topTracksData, isFetching: isFetchingTopTracks} = useGetArtistTopTracksQuery({artistId, limit: 10});

    const data = topTracksData?.data;

    const handlePauseClick = () => {
        dispatch(playPause(false));
    };

    const handlePlayClick = (song, index) => {
        dispatch(setActiveSong({song, data, index}));
        dispatch(playPause(true));
    };

    return (
        <div className="flex flex-col">
            <DetailsHeader artistData={artistData} />

            <div className="flex flex-col">
                <h2 className="text-white text-3xl font-bold">Popular</h2>

                <div className="mt-4 flex flex-col gap-1">
                    {data?.map((song, index) => (
                        <TopTrackCard
                            key={song.key}
                            song={song}
                            index={index}
                            isPlaying={isPlaying}
                            activeSong={activeSong}
                            handlePauseClick={handlePauseClick}
                            handlePlayClick={() => handlePlayClick(song, index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArtistDetails;
