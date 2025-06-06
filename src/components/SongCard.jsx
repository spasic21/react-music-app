import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import PlayPause from './PlayPause';
import {playPause, setActiveSong} from '../redux/features/playerSlice';

const SongCard = ({song, isPlaying, activeSong, index, data}) => {
    const dispatch = useDispatch();

    const handlePauseClick = () => {
        dispatch(playPause(false));
    };

    const handlePlayClick = () => {
        dispatch(setActiveSong({ song, data, index}));
        dispatch(playPause(true));
    };

    return (
        <div className="flex flex-col w-[135px] sm:w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-3xl cursor-pointer">
            <div className="relative w-full group">
                <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 rounded-3xl group-hover:flex ${activeSong?.id === song.id ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
                    <PlayPause
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        song={song}
                        handlePause={handlePauseClick}
                        handlePlay={handlePlayClick}
                    />
                </div>
                <img src={song.album.cover_big} alt="song_img" className="rounded-3xl"/>
            </div>

            <div className="mt-4 flex flex-col">
                <p className="font-semibold text-base sm:text-lg text-white truncate">
                    <Link to={`/songs/${song.id}`}>
                        {song.title}
                    </Link>
                </p>
                <p className="text-sm sm:text-base text-gray-300 mt-1">
                    <Link to={song.artist.name ? `/artists/${song.artist.id}` : "/top-artists"}>
                        {song.artist.name}
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default SongCard;
