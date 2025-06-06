import {useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from "swiper";
import {TrackCard} from "./index";
import {playPause, setActiveSong} from '../redux/features/playerSlice';
import {useGetTopChartsQuery} from "../redux/services/deezerCore";

import 'swiper/css';
import 'swiper/css/free-mode';

const TopPlay = () => {
    const dispatch = useDispatch();
    const {activeSong, isPlaying} = useSelector((state) => state.player);
    const {data: topPlays, isFetching, error} = useGetTopChartsQuery();
    const divRef = useRef(null);

    useEffect(() => {
        divRef.current.scrollIntoView({behavior: "smooth"});
    }, [divRef]);

    const data = topPlays?.tracks.data.slice(0, 5);

    const handlePauseClick = () => {
        dispatch(playPause(false));
    };

    const handlePlayClick = (song, index) => {
        dispatch(setActiveSong({song, data, index}));
        dispatch(playPause(true));
    };

    return (
        <div ref={divRef} className="xl:ml-6 ml-0 xl:mb-0 my-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col">
            <div className="w-full flex flex-col">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="text-white font-bold text-2xl">Top Charts</h2>
                    <Link to="/top-charts">
                        <p className="text-gray-300 text-base cursor-pointer">See more</p>
                    </Link>
                </div>

                <div className="mt-4 flex flex-col gap-1">
                    {data?.map((song, index) => (
                        <TrackCard
                            key={song.id}
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

            <div className="w-full flex flex-col mt-8">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="text-white font-bold text-2xl">Top Artists</h2>
                    <Link to="/top-artists">
                        <p className="text-gray-300 text-base cursor-pointer">See more</p>
                    </Link>
                </div>

                <Swiper
                    slidesPerView="auto"
                    spaceBetween={15}
                    freeMode
                    centeredSlides
                    centeredSlidesBounds
                    modules={[FreeMode]}
                    className="mt-4"
                >
                    {data?.map((song, index) => (
                        <SwiperSlide
                            key={song.id}
                            index={index}
                            style={{width: '25%', height: 'auto'}}
                            className="shadow-lg rounded-full animate-slideright"
                        >
                            <Link to={`/artists/${song.artist.id}`}>
                                <img src={song?.artist.picture} alt="artist_img" className="rounded-full w-full object-cover" />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TopPlay;
