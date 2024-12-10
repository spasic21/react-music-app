const AlbumCard = ({ item }) => {
    return(
        <div className="bg-gray-400 rounded-lg w-72 hover:bg-gray-300 transition-colors group">
            <div className="h-full w-full flex flex-col">
                <div className="flex items-center justify-center m-5">
                    <img src={item.images[1].url} alt="Album Picture" className="rounded w-[240px] h-[240px]"/>
                </div>
                <div className="m-5">
                    <p className="flex items-center justify-center text-white group-hover:text-gray-400">{item.name}</p>
                    <p className="flex items-center justify-center text-white text-sm group-hover:text-gray-400">{item.artists[0].name}</p>
                </div>

            </div>
        </div>
    );
}

export default AlbumCard;