import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AiFillPlaySquare, AiOutlinePlaySquare} from "react-icons/ai";

import {nextSong, prevSong, playPause} from '../../redux/features/playerSlice';
import Controls from './Controls';
import Player from './Player';
import Seekbar from './Seekbar';
import Track from './Track';
import VolumeBar from './VolumeBar';

const MusicPlayer = ({topPlayVisible, toggleTopPlay}) => {
    const {activeSong, currentSongs, currentIndex, isActive, isPlaying} = useSelector((state) => state.player);
    const [duration, setDuration] = useState(0);
    const [seekTime, setSeekTime] = useState(0);
    const [appTime, setAppTime] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const [repeat, setRepeat] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentSongs?.tracks?.data.length || currentSongs?.length) {
            dispatch(playPause(true));
        }
    }, [currentIndex, currentSongs, dispatch]);

    const handlePlayPause = () => {
        if (!isActive) return;

        if (isPlaying) {
            dispatch(playPause(false));
        } else {
            dispatch(playPause(true));
        }
    };

    const handleNextSong = () => {
        if (!repeat) {
            dispatch(playPause(false));

            if (!shuffle) {
                dispatch(nextSong((currentIndex + 1) % currentSongs.length));
            } else {
                dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
            }
        }
    };

    const handlePrevSong = () => {
        if (currentIndex === 0) {
            dispatch(prevSong(currentSongs.length - 1));
        } else if (shuffle) {
            dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
        } else {
            dispatch(prevSong(currentIndex - 1));
        }
    };

    return (
        <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
            <Track isPlaying={isPlaying} isActive={isActive} activeSong={activeSong}/>

            <div className="flex-1 flex flex-col items-center justify-center xl:absolute xl:left-1/2 xl:transform xl:-translate-x-1/2">
                <Controls
                    isPlaying={isPlaying}
                    isActive={isActive}
                    repeat={repeat}
                    setRepeat={setRepeat}
                    shuffle={shuffle}
                    setShuffle={setShuffle}
                    currentSongs={currentSongs}
                    handlePlayPause={handlePlayPause}
                    handlePrevSong={handlePrevSong}
                    handleNextSong={handleNextSong}
                />
                <Seekbar
                    value={appTime}
                    min="0"
                    max={duration}
                    onInput={(event) => setSeekTime(event.target.value)}
                    setSeekTime={setSeekTime}
                    appTime={appTime}
                />
                <Player
                    activeSong={activeSong}
                    volume={volume}
                    isPlaying={isPlaying}
                    seekTime={seekTime}
                    repeat={repeat}
                    currentIndex={currentIndex}
                    onEnded={handleNextSong}
                    onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
                    onLoadedData={(event) => setDuration(event.target.duration)}
                />
            </div>

            <div className="flex flex-row items-center">
                <div className="text-white hover:text-[#65FE08] cursor-pointer mr-3" onClick={toggleTopPlay}>
                    {topPlayVisible ? (<AiFillPlaySquare size={30} style={{fill: '#65FE08'}}/>) : (<AiOutlinePlaySquare size={30}/>)}
                </div>


                <VolumeBar value={volume} min="0" max="1" onChange={(event) => setVolume(event.target.value)} setVolume={setVolume}/>

            </div>
        </div>
    );
};

export default MusicPlayer;
