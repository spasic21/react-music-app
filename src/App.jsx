import Navbar from "./sections/Navbar.jsx";
import Home from "./sections/Home.jsx";
import SearchBar from "./sections/SearchBar.jsx";

const App = () => {
    return(
        <div className="max-7xl mx-auto">
            <SearchBar />
            <Home />
            <Navbar />
        </div>
    );
}

export default App;