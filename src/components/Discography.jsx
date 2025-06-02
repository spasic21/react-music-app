import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from "swiper";
import {AlbumCard} from "../components";


const Discography = ({artistName, albumData}) => {
    return (
        <div className="w-full mt-10">
            <div className="w-full flex flex-col">
                <h2 className="text-white font-bold text-2xl text-left mb-4">Discography</h2>

                <div className="w-full max-w-screen-lg overflow-x-hidden">
                    <Swiper
                        slidesPerView="auto"
                        spaceBetween={20}
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
                                <AlbumCard albumImage={album.cover_medium} albumTitle={album.title} artistName={artistName} albumId={album.id}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
};

export default Discography;