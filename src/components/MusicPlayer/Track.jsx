import musicNote from '../../assets/musicNote.png';
import {Link} from "react-router-dom";

const Track = ({isPlaying, isActive, activeSong}) => (
    <div className="flex-1 flex items-center justify-start">
        <div
            className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
            <img src={activeSong?.album?.cover || musicNote} alt="cover art" className="rounded-full"/>
        </div>
        <div className="w-[50%]">
            <p className="truncate text-white font-bold text-lg">
                {activeSong?.title || 'No Active Song'}
            </p>
            <p className="truncate text-gray-300">
                {activeSong?.artist?.name ? (
                    <Link to={`/artists/${activeSong?.artist?.id}`}>
                        {activeSong?.artist?.name}
                    </Link>
                ) : ('No Active Artist')}
            </p>
        </div>
    </div>
);

export default Track;
