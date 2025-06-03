import {useDispatch, useSelector} from "react-redux";

import {Error, Loader, SongCard, AlbumCard, ArtistCard, playPause} from "../components";
import {genres} from "../assets/constants";
import {selectGenreListId} from "../redux/features/playerSlice";
import {useGetTopChartsByGenreQuery} from "../redux/services/deezerCore";

const Divider = () => (
    <div className="my-6 border-t border-gray-300" />
);

const Discover = () => {
    const dispatch = useDispatch();
    const {activeSong, isPlaying, genreListId} = useSelector((state) => state.player);
    const genreId = genres.find((genre) => genre.value === genreListId)?.id || 132;
    const {data, isFetching, error} = useGetTopChartsByGenreQuery(genreId);

    if (isFetching) return <Loader title="Loading discover page..."/>;

    if (error) return <Error/>;

    const genreTitle = genres.find((genre) => genre.value === genreListId)?.title || "Pop";
    const topChartSongs = data.tracks.data;
    const topChartAlbums = data.albums.data;
    const topChartArtists = data.artists.data;

    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
                <select
                    onChange={(e) => dispatch(selectGenreListId(e.target.value))}
                    value={genreListId || "Pop"}
                    className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
                    {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
                </select>
            </div>

            <Divider/>

            <div className="flex flex-col">
                <h2 className="text-white text-2xl font-bold mb-5">Top Songs</h2>
                <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                    {topChartSongs.map((track, i) => (
                        <SongCard
                            song={track}
                            isPlaying={isPlaying}
                            activeSong={activeSong}
                            handlePauseClick={() => dispatch(playPause(false))}
                            handlePlayClick={() => dispatch(playPause(true))}
                            data={topChartSongs}
                            index={i}
                            key={track.key}
                        />
                    ))}
                </div>
            </div>

            <Divider/>

            <div className="flex flex-col">
                <h2 className="text-white text-2xl font-bold mb-5">Top Albums</h2>
                <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                    {topChartAlbums.map((album, i) => (
                        <div className="w-[250px]" key={i}>
                            <AlbumCard
                                albumImage={album.cover_medium || album.artist.picture_medium}
                                albumTitle={album.title}
                                artistName={album.artist.name}
                                albumId={album.id}
                                index={i}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <Divider/>

            <div className="flex flex-col">
                <h2 className="text-white text-2xl font-bold mb-5">Top Artists</h2>
                <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                    {topChartArtists.map((artist, i) => (
                        <div className="w-[250px]" key={i}>
                            <ArtistCard
                                artistImage={artist.picture_medium}
                                artistName={artist.name}
                                artistId={artist.id}
                                index={i}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Discover;
