import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Discography, TrackCard, Error, Loader} from "../components";

import {playPause, setActiveSong} from "../redux/features/playerSlice";
import {useGetArtistDetailsQuery, useGetArtistTopTracksQuery, useGetArtistAlbumsQuery} from "../redux/services/deezerCore";

const ArtistHeader = ({artistData}) => (
    <div className="w-full flex flex-row mb-10">
        <img src={artistData?.picture_big} alt={artistData?.name} className="w-64 h-64 object-cover rounded-full"/>
        <div className="flex flex-col justify-end ml-5">
            <h2 className="text-white text-5xl font-bold text-left ml-5">{artistData?.name}</h2>
            <p className="text-white text-xl font-bold text-left ml-5 mt-5">{artistData?.nb_fan.toLocaleString() } followers</p>
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
            <ArtistHeader artistData={artistData} />

            <div className="flex flex-col">
                <h2 className="text-white text-3xl font-bold">Popular</h2>

                <div className="w-full flex flex-col gap-1 mt-4">
                    {data?.map((song, index) => (
                        <TrackCard
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
