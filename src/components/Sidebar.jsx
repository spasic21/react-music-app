import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {RiCloseLine} from 'react-icons/ri';
import musicPlayerLogo from '../assets/MusicPlayerLogo.png';
import {links} from '../assets/constants';
import {HiOutlineMenu} from "react-icons/hi";

const NavLinks = ({handleClick}) => (
    <div className="mt-10">
        {links.map((item) => (
            <NavLink
                key={item.name}
                to={item.to}
                className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-[#65FE08]"
                onClick={() => handleClick && handleClick()}
            >
                <item.icon className="w-6 h-6 mr-2"/>
                {item.name}
            </NavLink>
        ))}
    </div>
);

const Sidebar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <div className="md:flex hidden flex-col flex-shrink-0 py-10 px-4 rounded-3xl">
                <img src={musicPlayerLogo} alt="logo" className="w-full h-14 object-cover rounded-lg"/>
                <NavLinks/>
            </div>

            <div className="absolute md:hidden block top-6 right-3">
                {mobileMenuOpen ? (
                    <RiCloseLine className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenuOpen(false)}/>
                ) : <HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenuOpen(true)}/>}
            </div>

            <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#1a4d3b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
                <img src={musicPlayerLogo} alt="logo" className="w-full h-14 object-cover rounded-lg"/>
                <NavLinks handleClick={() => setMobileMenuOpen(false)}/>
            </div>
        </>
    );
}

export default Sidebar;
