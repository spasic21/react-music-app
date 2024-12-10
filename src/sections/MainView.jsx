import {albums} from "../constants/index.js";
import AlbumCard from "../components/AlbumCard.jsx";
import {useEffect, useState} from "react";

const MainView = () => {
    const [data, setData] = useState(null);
    const token = "BQCmqzJkQjQzKz0X2TFXQsHOescNsiI0cnoeMzVFyUhTeOjfZzg3M5sFmchtg7N6fn91knAX87clVSe18T_QvGNm_yzDRDD9HpJ_SWO6QLZZhq7AH5qpciATTCjtgtdu6_s";
    const apiString = "https://api.spotify.com/v1/albums?ids=";

    const parameterArray = [];

    albums.map((item) => {
        parameterArray.push(item.albumId);
    })

    const parameters = parameterArray.join(",");
    console.log(apiString + parameters);

    useEffect(() => {
        fetch(apiString + parameters, {
            method: "GET",
            headers: {"Authorization": `Bearer ${token}`}
        })
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log(error));
    }, []);

    console.log(data);

    return (
        <div id="top-items">
            <p className="text-xl font-semibold m-5 text-white">Albums</p>
            <div className="flex justify-center">
                {data ?
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-2">
                        {data.albums.map(item => (
                            <AlbumCard item={item} />))
                        }
                    </div>
                    : <p className="text-white">Loading...</p>}
            </div>
        </div>

    );
}

export default MainView;