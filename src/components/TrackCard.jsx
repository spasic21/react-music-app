import PlayPause from "../components/PlayPause.jsx";

const TrackCard = ({song, index, isPlaying, activeSong, handlePauseClick, handlePlayClick}) => (
    <div
        className="group w-full flex flex-row items-center hover:bg-[#4a5e4c] py-2 p-4 backdrop-blur-sm animate-slideup rounded-3xl cursor-pointer mb-2"
        onClick={() => {
            if (isPlaying && activeSong?.id === song.id) {
                handlePauseClick();
            } else {
                handlePlayClick();

            }
        }}
    >
        <div className="w-8 relative flex justify-start items-center mr-8">
            <h3 className={`font-bold text-base text-white group-hover:hidden ${activeSong?.id === song.id ? 'hidden' : 'flex'}`}>{index + 1}.</h3>

            <div className={`absolute inset-0 justify-center items-center group-hover:flex ${activeSong?.id === song.id ? 'flex' : 'hidden'}`}>
                <PlayPause
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    song={song}
                    handlePause={handlePauseClick}
                    handlePlay={handlePlayClick}
                />
            </div>
        </div>

        <div className="flex-1 flex flex-row justify-between items-center">
            <img src={song?.album.cover} alt={song.title} className="w-12 h-12 sm:w-24 sm:h-24 rounded-xl sm:rounded-3xl" />

            <div className="flex-1 flex flex-col justify-center mx-3 overflow-hidden">
                <p className="text-base sm:text-xl font-bold text-white truncate max-w-[140px] sm:max-w-full">{song?.title}</p>
                <p className="text-sm sm:text-base text-gray-300 mt-1">{song?.artist.name}</p>
            </div>
        </div>
    </div>
);

export default TrackCard;