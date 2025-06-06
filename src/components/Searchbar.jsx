import {useState} from 'react';
import {useNavigate} from "react-router";
import {FiSearch} from "react-icons/fi";
import {PiBook, PiBookOpenText} from "react-icons/pi";
import {NavLink} from "react-router-dom";

const Searchbar = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/search/${searchTerm}`);
        setSearchTerm('');
    }

    return (
        <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
            <label htmlFor="search-field" className="sr-only">
                Search All Songs
            </label>

            <div className="flex justify-center items-center">
                <div className="flex flex-row bg-[#162419] rounded-full justify-center items-center mx-auto">
                    <FiSearch className="w-6 h-6 mx-4"/>

                    <input
                        name="search-field"
                        autoComplete="off"
                        id="search-field"
                        placeholder="Search"
                        type="search"
                        value={searchTerm}
                        onChange={(e) => {setSearchTerm(e.target.value)}}
                        className="flex-1 bg-[#162419] rounded-full border-none outline-none placeholder-gray-500 text-base text-white py-4 pr-4"
                    />

                    <NavLink
                        to={'/'}
                        className="flex hover:text-[#65FE08]"
                    >
                        {({isActive}) => (
                            <>
                                {isActive ? (
                                    <PiBookOpenText className="w-6 h-6 text-[#65FE08] mx-4"/>
                                ) : (
                                    <PiBook className="w-6 h-6 mx-4"/>
                                )}
                            </>
                        )}
                    </NavLink>
                </div>
            </div>
        </form>
    );
}

export default Searchbar;
