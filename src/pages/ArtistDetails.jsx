import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {DetailsHeader, Discography, Error, Loader} from "../components";

import {playPause, setActiveSong} from "../redux/features/playerSlice";
import {useGetArtistDetailsQuery, useGetArtistTopTracksQuery, useGetArtistAlbumsQuery} from "../redux/services/deezerCore";
import PlayPause from "../components/PlayPause.jsx";

const TopTrackCard = ({song, index, isPlaying, activeSong, handlePauseClick, handlePlayClick}) => (
    <div className="group w-full flex flex-row items-center hover:bg-[#4a5e4c] py-2 p-4 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer mb-2">
        <h3 className="font-bold text-base text-white mr-3">{index + 1}.</h3>

        <div className="flex-1 flex flex-row justify-between items-center">
            <img src={song?.album.cover} alt={song.title} className="w-20 h-20 rounded-lg" />

            <div className="flex-1 flex flex-col justify-center mx-3">
                <p className="text-xl font-bold text-white">{song?.title}</p>
                <p className="text-base text-gray-300 mt-1">{song?.artist.name}</p>
            </div>
        </div>

        <div className="relative w-20 h-20">
            <div className={`absolute inset-0 justify-center items-center group-hover:flex ${activeSong?.title === song.title ? 'flex' : 'hidden'}`}>
                <PlayPause
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    song={song}
                    handlePause={handlePauseClick}
                    handlePlay={handlePlayClick}
                />
            </div>
        </div>
    </div>
);

const ArtistDetails = () => {
    const dispatch = useDispatch();
    const {artistId} = useParams();
    const {activeSong, isPlaying} = useSelector((state) => state.player);
    const {data: artistData, isFetching: isFetchingArtistDetails, error: artistError} = useGetArtistDetailsQuery(artistId);
    const {data: topTracksData, isFetching: isFetchingTopTracks, error: trackError} = useGetArtistTopTracksQuery({artistId, limit: 10});
    const {data: albumsData, isFetching: isFetchingAlbums, error: albumError} = useGetArtistAlbumsQuery({artistId, limit: 10});

    if(isFetchingArtistDetails || isFetchingTopTracks || isFetchingAlbums) return <Loader title="Loading artist details..."/>;

    if(artistError || trackError || albumError) return <Error/>;

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

                <div className="w-full flex flex-col gap-1 mt-4">
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

            <Discography artistName={artistData.name} albumData={albumsData}/>
        </div>
    );
};

export default ArtistDetails;
