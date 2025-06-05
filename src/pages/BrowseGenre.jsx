import {genres} from "../assets/constants";
import GenreCard from "../components/GenreCard.jsx";

const BrowseGenre = () => {


    return (
        <div className="flex flex-col">
            <h2 className="font-bold text-3xl text-white text-left p-5">Browse Genres</h2>

            <div className="flex flex-wrap sm:justifty-start justify-center gap-8">
                {genres.map((genre) => (
                    <GenreCard
                        key={genre.value}
                        genreTitle={genre.title}
                        genreValue={genre.value}
                        genreIcon={genre.icon}
                    />
                ))}
            </div>
        </div>
    )
}

export default BrowseGenre;