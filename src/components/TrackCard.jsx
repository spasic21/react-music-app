import PlayPause from "../components/PlayPause.jsx";

const TrackCard = ({song, index, isPlaying, activeSong, handlePauseClick, handlePlayClick}) => (
    <div className="group w-full flex flex-row items-center hover:bg-[#4a5e4c] py-2 p-4 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer mb-2">
        <h3 className="font-bold text-base text-white mr-8">{index + 1}.</h3>

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

export default TrackCard;