import {Route, Routes} from 'react-router-dom';
import {MusicPlayer, Searchbar, Sidebar, TopPlay} from './components';
import {AlbumDetails, AroundYou, ArtistDetails, BrowseGenre, Discover, Search, SongDetails, TopArtists, TopCharts} from './pages';
import {useEffect, useState} from "react";

const App = () => {
    const [topPlayVisible, setTopPlayVisible] = useState(false);

    const toggleTopPlay = () => setTopPlayVisible(prev => !prev);

    useEffect(() => {
        const setVH = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        setVH();
        window.addEventListener('resize', setVH);
        return () => window.removeEventListener('resize', setVH);
    }, []);

    return (
        <>
            <div className={`relative min-h-screen grid bg-gradient-to-br from-black to-[#126612] transition-all duration-500
                ${topPlayVisible ? 'grid-cols-1 xl:grid-cols-[240px_1fr_550px]' : 'grid-cols-1 sm:grid-cols-[240px_1fr]'}`}>

                {/* Left Sidebar */}
                <div className="hidden md:flex flex-col bg-[#162419]">
                    <Sidebar />
                </div>

                {/* Middle Column: Searchbar + Routes */}
                <div className="flex flex-col w-full h-[calc(var(--vh,1vh)_*100-7rem)] sm:w-3/4 3xl:w-1/2 mx-auto px-5">
                    <Searchbar />
                    <div className="w-full overflow-y-scroll hide-scrollbar py-6">
                        <Routes>
                            <Route path="/" element={<BrowseGenre />} />
                            <Route path="/discover/:genreValue" element={<Discover />} />
                            <Route path="/top-artists" element={<TopArtists />} />
                            <Route path="/top-charts" element={<TopCharts />} />
                            <Route path="/around-you" element={<AroundYou />} />
                            <Route path="/artists/:artistId" element={<ArtistDetails topPlayVisible={topPlayVisible} />} />
                            <Route path="/albums/:albumId" element={<AlbumDetails />} />
                            <Route path="/songs/:songId" element={<SongDetails />} />
                            <Route path="/search/:searchQuery" element={<Search />} />
                        </Routes>
                    </div>
                </div>

                {/* Right Sidebar: TopPlay */}
                {topPlayVisible && (
                    <div className={`hidden xl:block transition-transform duration-500 ease-in-out bg-[#162419] ${topPlayVisible ? 'translate-x-0' : 'translate-x-full pointer-events-none'}`}>
                        <TopPlay />
                    </div>
                )}
            </div>

            {/* Music Player Bar */}
            <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a8032] backdrop-blur-lg rounded-t-3xl z-10">
                <MusicPlayer topPlayVisible={topPlayVisible} toggleTopPlay={toggleTopPlay} />
            </div>
        </>

    );
};

export default App;
