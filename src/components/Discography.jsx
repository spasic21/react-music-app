import {AlbumCard} from "../components";
import {FaCircleArrowLeft, FaCircleArrowRight} from "react-icons/fa6";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useRef} from "react";

const Discography = ({artistName, albumData, topPlayVisible}) => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -205, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 205, behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full mt-10 px-10 sm:px-6">
            <div className="flex flex-col">
                <h2 className="text-white font-bold text-2xl text-left mb-4">Discography</h2>

                <div className="flex flex-row items-center gap-4">
                    <button
                        onClick={scrollLeft}
                        className="text-white hover:text-lime-400 transition-colors"
                        aria-label="Scroll left"
                    >
                        <FaCircleArrowLeft size={30} />
                    </button>
                    <div
                        ref={scrollRef}
                        className={`scroll-container ${topPlayVisible ? "top-play-visible" : ""}`}
                    >
                        {albumData.data.map((album, index) => (
                            <div key={album.id || index} className="snap-start flex-shrink-0 min-w-[200px]">
                                <AlbumCard
                                    albumImage={album.cover_medium}
                                    albumTitle={album.title}
                                    artistName={artistName}
                                    albumId={album.id}
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={scrollRight}
                        className="text-white hover:text-[#65FE08] transition-colors"
                        aria-label="Scroll right"
                    >
                        <FaCircleArrowRight size={30} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Discography;