import {Route, Routes} from 'react-router-dom';
import {MusicPlayer, Searchbar, Sidebar, TopPlay} from './components';
import {AlbumDetails, AroundYou, ArtistDetails, Discover, Search, SongDetails, TopArtists, TopCharts} from './pages';
import {useState} from "react";

const App = () => {
    const [topPlayVisible, setTopPlayVisible] = useState(true);

    const toggleTopPlay = () => setTopPlayVisible(prev => !prev);

    return (
        <div className={`relative min-h-screen grid bg-gradient-to-br from-black to-[#126612] transition-all duration-500 
            ${topPlayVisible ? 'grid-cols-[240px_1fr_550px]' : 'grid-cols-[240px_1fr]'}`}>

            {/* Left Sidebar */}
            <div className="hidden md:flex flex-col bg-[#162419]">
                <Sidebar />
            </div>

            {/* Middle Column: Searchbar + Routes */}
            <div className="flex flex-col">
                <Searchbar />
                <div className="h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar pb-40 px-10 sm:px-6">
                    <Routes>
                        <Route path="/" element={<Discover />} />
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
                <div className={`hidden xl:block transition-transform duration-500 ease-in-out bg-[#162419] ${topPlayVisible ? 'translate-x-0' : 'translate-x-full'}`}>
                    <TopPlay />
                </div>
            )}

            {/* Music Player Bar */}
            <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a8032] backdrop-blur-lg rounded-t-3xl z-10">
                <MusicPlayer topPlayVisible={topPlayVisible} toggleTopPlay={toggleTopPlay} />
            </div>
        </div>
    );
};

export default App;
