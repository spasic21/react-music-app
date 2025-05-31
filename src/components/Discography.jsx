import {Link} from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from "swiper";


const Discography = ({artistName, albumData}) => {
    console.log("Album Data:", albumData);

    return (
        <div className="w-full mt-10">
            <div className="w-full flex flex-col">
                <h2 className="text-white font-bold text-2xl text-left mb-4">Discography</h2>

                <div className="w-full max-w-screen-lg overflow-x-hidden">
                    <Swiper
                        slidesPerView="auto"
                        spaceBetween={10}
                        freeMode
                        centeredSlides
                        centeredSlidesBounds
                        modules={[FreeMode]}
                        className="mt-4"
                    >
                        {albumData?.data.map((album, index) => (
                            <SwiperSlide
                                key={album.key}
                                index={index}
                                style={{width: '20%'}}
                                className="animate-slideright shadow-lg rounded-lg"
                            >
                                <div className="w-full flex flex-col hover:bg-[#4a5e4c] p-2 rounded-lg cursor-pointer mb-2">
                                    <img src={album.cover_medium} alt="album_img" className="w-full rounded-lg object-cover"/>

                                    <p className="text-white text-base mt-2 truncate">{album.title}</p>
                                    <p className="text-gray-300 text-base cursor-pointer">{artistName}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
};

export default Discography;