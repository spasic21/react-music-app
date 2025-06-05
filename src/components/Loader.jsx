import loader from "../assets/loader.svg";
import {useEffect, useState} from "react";

const Loader = ({ title }) => {
    const [message, setMessage] = useState(title);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMessage("Server is booting back up after inactivity. Please wait a moment...");
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full flex justify-center items-center flex-col">
            <img src={loader} alt="loader" className="w-32 h-32 object-contain"/>
            <h1 className="font-bold text-2xl text-white mt-2">{message}</h1>
        </div>
    );
}

export default Loader;
