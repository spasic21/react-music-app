const DetailsHeader = ({artistData}) => (
    <div className="w-full flex flex-row mb-10">
        <img src={artistData?.picture_big} alt={artistData?.name} className="w-64 h-64 object-cover rounded-full"/>
        <div className="flex flex-col justify-end ml-5">
            <h2 className="text-white text-5xl font-bold text-left ml-5">{artistData?.name}</h2>
            <p className="text-white text-xl font-bold text-left ml-5 mt-5">{artistData?.nb_fan.toLocaleString()} followers</p>
        </div>
    </div>
);

export default DetailsHeader;
