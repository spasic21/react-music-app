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
        <div className="relative min-h-screen grid grid-rows-[70px_1fr_90px] grid-cols-1 xl:grid-cols-3 gap-2 p-2 h-screen bg-gradient-to-br from-black to-[#126612] transition-all duration-500">

            <div className="col-span-3">
                <Searchbar/>
            </div>

            {/* Middle Column: Searchbar + Routes */}
            <div className={`col-span-3 grid gap-2 h-[calc(100vh-200px)] grid-cols-1 ${topPlayVisible ? "xl:grid-cols-[240px_1fr_550px]" : "xl:grid-cols-[240px_1fr]"}`}>
                {/* Left Sidebar */}
                <div className="hidden xl:flex flex-col bg-[#162419] rounded-3xl">
                    <Sidebar/>
                </div>

                <div className="w-full overflow-y-scroll hide-scrollbar px-5 py-5">
                    <Routes>
                        <Route path="/" element={<BrowseGenre/>}/>
                        <Route path="/discover/:genreValue" element={<Discover/>}/>
                        <Route path="/top-artists" element={<TopArtists/>}/>
                        <Route path="/top-charts" element={<TopCharts/>}/>
                        <Route path="/around-you" element={<AroundYou/>}/>
                        <Route path="/artists/:artistId" element={<ArtistDetails topPlayVisible={topPlayVisible}/>}/>
                        <Route path="/albums/:albumId" element={<AlbumDetails/>}/>
                        <Route path="/songs/:songId" element={<SongDetails/>}/>
                        <Route path="/search/:searchQuery" element={<Search/>}/>
                    </Routes>
                </div>

                {/* Right Sidebar: TopPlay */}
                {topPlayVisible && (
                    <div className={`hidden xl:block transition-transform duration-500 ease-in-out bg-[#162419] rounded-3xl ${topPlayVisible ? 'translate-x-0' : 'translate-x-full pointer-events-none'}`}>
                        <TopPlay/>
                    </div>
                )}
            </div>

            {/* Music Player Bar */}
            <div className="col-span-3 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a8032] backdrop-blur-lg rounded-3xl z-10">
                <MusicPlayer topPlayVisible={topPlayVisible} toggleTopPlay={toggleTopPlay}/>
            </div>
        </div>
    );
};

export default App;
