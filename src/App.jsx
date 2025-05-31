import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import { Discover, TopArtists, TopCharts, AroundYou, ArtistDetails, SongDetails, Search } from './pages';

const App = () => {
    const { activeSong } = useSelector((state) => state.player);

    return (
        <div className="relative flex">
            <Sidebar />
            <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#126612]">
                <Searchbar />

                <div className="px-6 h-[calc(100vh-72px)] flex xl:flex-row flex-col-reverse">
                    <div className="flex-1 overflow-y-scroll hide-scrollbar pb-40 w-full max-w-screen-xl mx-auto px-4 sm:px-6">
                        <Routes>
                            <Route path="/" element={<Discover />} />
                            <Route path="/top-artists" element={<TopArtists />} />
                            <Route path="/top-charts" element={<TopCharts />} />
                            <Route path="/around-you" element={<AroundYou />} />
                            <Route path="/artists/:artistId" element={<ArtistDetails />} />
                            <Route path="/songs/:songId" element={<SongDetails />} />
                            <Route path="/search/:searchTerm" element={<Search />} />
                        </Routes>
                    </div>
                    <div className="xl:sticky top-0 self-start">
                        <TopPlay />
                    </div>
                </div>
            </div>

            <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a8032] backdrop-blur-lg rounded-t-3xl z-10">
                <MusicPlayer />
            </div>
        </div>
    );
};

export default App;
