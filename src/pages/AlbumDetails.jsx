import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {TrackCard, Error, Loader} from "../components";

import {playPause, setActiveSong} from "../redux/features/playerSlice";
import {useGetAlbumQuery} from "../redux/services/deezerCore";

const AlbumHeader = ({headerData}) => {
    const releaseDate = headerData?.release_date;
    const date = releaseDate?.split('-')[0];

    return (
        <div className="w-full flex flex-row mb-10">
            <img src={headerData?.cover_big} alt={headerData?.title} className="w-64 h-64 object-cover rounded-full"/>
            <div className="flex flex-col justify-end ml-5">
                <h2 className="text-white text-5xl font-bold text-left ml-5">{headerData?.title}</h2>

                <p className="text-white text-xl font-bold text-left ml-5 mt-5">
                    <Link to={`/artists/${headerData?.artist?.id}`}>
                        {headerData?.artist?.name}
                    </Link>{" "}
                    - {date} - {headerData?.nb_tracks} songs
                </p>
            </div>
        </div>
    );
}

const AlbumDetails = () => {
    const dispatch = useDispatch();
    const {albumId} = useParams();
    const {activeSong, isPlaying} = useSelector((state) => state.player);
    const {data: albumData, isFetching: isFetchingAlbums, error: albumError} = useGetAlbumQuery(albumId);

    if(isFetchingAlbums) return <Loader title="Loading album details..."/>;

    if(albumError) return <Error/>;

    const data = albumData.tracks.data;
    const headerData = albumData;

    const handlePauseClick = () => {
        dispatch(playPause(false));
    };

    const handlePlayClick = (song, index) => {
        dispatch(setActiveSong({song, data, index}));
        dispatch(playPause(true));
    };

    return (
        <div className="flex flex-col">
            <AlbumHeader headerData={headerData} />

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
        </div>
    );
};

export default AlbumDetails;