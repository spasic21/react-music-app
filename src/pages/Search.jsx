import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Loader, Error, SongCard} from "../components";
import {useGetSongsBySearchQuery} from "../redux/services/deezerCore";

const Search = () => {
    const {searchQuery} = useParams();
    const {activeSong, isPlaying} = useSelector((state) => state.player);
    const {data, isFetching, error} = useGetSongsBySearchQuery(searchQuery);

    if(isFetching) return <Loader title="Loading...."/>;

    if(error) return <Error/>;

    const searchData = data?.data;

    return (
        <div className="flex flex-col">
            <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Showing results for <span className="font-black">{searchQuery}</span></h2>

            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {searchData?.map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        index={i}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={searchData}
                    />
                ))}
            </div>
        </div>
    );
}

export default Search;
