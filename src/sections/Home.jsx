import Sidebar from "./Sidebar.jsx";
import PlayingView from "./PlayingView.jsx";
import MainView from "./MainView.jsx";
import AlbumView from "./AlbumView.jsx";

const Home = () => {
    return (
        <main className="w-full h-[85vh]">
            <div className="flex flex-row gap-2 p-1 h-full">
                <div className="flex bg-gray-700 rounded-lg w-1/6">
                    <Sidebar/>
                </div>
                <div className="bg-gray-700 rounded-lg w-2/3 min-w-[328px] overflow-y-auto scrollbar">
                    <MainView/>

                    {/*<AlbumView />*/}
                </div>
                <div className="flex bg-gray-700 rounded-lg w-1/6">
                    <PlayingView/>
                </div>
            </div>
        </main>
    );
}

export default Home;